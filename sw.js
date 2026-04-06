/* ================================================
   UNIVEXAM � Service Worker
   Cache-first for static assets, Network-first for API
   ================================================ */

const CACHE_VERSION = 'univexam-v20260406190406';
const STATIC_CACHE  = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

/* Assets to pre-cache (only core files that don't have hashes in names) */
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/assets/mobile-optimizations.css'
];

/* ---- INSTALL: pre-cache critical assets ---- */
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      // Don't wait for all to cache, do it silently to not block installation
      PRECACHE_ASSETS.forEach(url => {
        fetch(url).then(response => {
           // Basic sanity check: ensure JS/CSS aren't actually HTML fallbacks
           const ct = response.headers.get('content-type') || '';
           if (url.endsWith('.js') && !ct.includes('javascript')) return;
           if (url.endsWith('.css') && !ct.includes('css')) return;
           if (response.ok) cache.put(url, response);
        }).catch(e => console.warn('Precache failed for', url, e));
      });
    })
  );
});

/* ---- ACTIVATE: remove old caches ---- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('univexam-') && key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

/* ---- FETCH: routing strategy ---- */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  /* Skip non-GET requests */
  if (request.method !== 'GET') return;

  /* Skip cross-origin API calls (Supabase, R2) � always fresh */
  if (
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('r2.dev') ||
    url.hostname.includes('cloudflarestorage.com')
  ) {
    event.respondWith(networkOnly(request));
    return;
  }

  /* Skip Cloudflare Workers / API routes */
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkOnly(request));
    return;
  }

  /* Static assets (JS, CSS, fonts, images) ? Cache-first */
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.match(/\.(js|css|woff2?|ttf|svg|png|jpg|webp|ico)$/)
  ) {
    event.respondWith(cacheFirstSafely(request, STATIC_CACHE));
    return;
  }

  /* HTML pages ? Network-first with cache fallback */
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstWithFallback(request));
    return;
  }

  /* Everything else ? Stale-while-revalidate */
  event.respondWith(staleWhileRevalidate(request));
});

/* ================================================
   STRATEGY HELPERS
   ================================================ */

async function cacheFirstSafely(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) {
    // Sanity check: don't serve HTML from a JS/CSS request (from bad previous cache)
    const ct = cached.headers.get('content-type') || '';
    if (request.url.includes('.js') && !ct.includes('javascript')) { /* drop cache */ }
    else if (request.url.includes('.css') && !ct.includes('css')) { /* drop cache */ }
    else return cached;
  }
  try {
    const response = await fetch(request);
    if (response.ok) {
      const ct = response.headers.get('content-type') || '';
      // Prevent caching HTML fallbacks for assets
      let shouldCache = true;
      if (request.url.includes('.js') && !ct.includes('javascript')) shouldCache = false;
      if (request.url.includes('.css') && !ct.includes('css')) shouldCache = false;
      
      if (shouldCache) {
        const cache = await caches.open(cacheName);
        cache.put(request, response.clone());
      }
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirstWithFallback(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request) || await caches.match('/index.html');
    return cached || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || await fetchPromise || new Response('Offline', { status: 503 });
}

async function networkOnly(request) {
  try {
    return await fetch(request);
  } catch {
    return new Response('Offline', { status: 503 });
  }
}
