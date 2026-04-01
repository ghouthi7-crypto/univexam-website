import { AwsClient } from 'aws4fetch';

const ACCOUNT_ID = 'cb691857ed2d2baab866959c3678a53b';
const ACCESS_KEY_ID = '4467d0b297a20bb797e2a0f8d3c0e50f';
const SECRET_ACCESS_KEY = 'b311db736a4cfc4200b70d7c18a54958fce17026ee7542dd1b89c7e5398cacb7';
const BUCKET_NAME = 'ghouthi';
const BASE_URL = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`;

const aws = new AwsClient({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  service: 's3',
  region: 'auto',
});

// Parse S3 XML response without DOMParser (compatible with Workers)
function parseXmlFiles(xml) {
  const files = [];
  // Handle namespaces like <s3:Contents> or <Contents xmlns="...">
  const contents = xml.match(/<(?:[a-zA-Z0-9-]*:)?Contents>([\s\S]*?)<\/(?:[a-zA-Z0-9-]*:)?Contents>/g) || [];
  for (const block of contents) {
    const keyMatch = block.match(/<(?:[a-zA-Z0-9-]*:)?Key>([\s\S]*?)<\/(?:[a-zA-Z0-9-]*:)?Key>/);
    const sizeMatch = block.match(/<(?:[a-zA-Z0-9-]*:)?Size>([\s\S]*?)<\/(?:[a-zA-Z0-9-]*:)?Size>/);
    const lastModifiedMatch = block.match(/<(?:[a-zA-Z0-9-]*:)?LastModified>([\s\S]*?)<\/(?:[a-zA-Z0-9-]*:)?LastModified>/);
    
    if (keyMatch) {
      files.push({ 
        Key: keyMatch[1].trim(), 
        Size: parseInt((sizeMatch ? sizeMatch[1].trim() : '0') || '0'), 
        LastModified: lastModifiedMatch ? lastModifiedMatch[1].trim() : null 
      });
    }
  }
  return files;
}

export async function onRequestGet({ request }) {
  try {
    const url = `${BASE_URL}/${BUCKET_NAME}?list-type=2&max-keys=500`;
    const res = await aws.fetch(url, { method: 'GET' });
    const xml = await res.text();
    if (!res.ok) return new Response(JSON.stringify({ error: xml }), { status: 500 });
    const files = parseXmlFiles(xml);
    return new Response(JSON.stringify(files), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function onRequestDelete({ request }) {
  try {
    const reqUrl = new URL(request.url);
    const key = reqUrl.searchParams.get('key');
    if (!key) return new Response(JSON.stringify({ error: 'Missing key' }), { status: 400 });

    const url = `${BASE_URL}/${BUCKET_NAME}/${encodeURIComponent(key)}`;
    const res = await aws.fetch(url, { method: 'DELETE' });
    if (!res.ok) {
      const txt = await res.text();
      return new Response(JSON.stringify({ error: txt }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}
