import{C as a,n as T,f as W,J as $,M as _,V as v,E as e,a as h,t as V,y as A,Y as D,F,b as Y,I as y,c as E}from"./index-CC2B9QD4.js";import{o as X,x as q,g as J,b as H}from"./ModeratorProfileModal-C8j3b56G-DZvhaDmk.js";import"./sparkles-Ho0k6qLd-0mI0-Jp0.js";import"./download-QSZu687o-DUCAQZOU.js";import"./link-DNcN9u65-BSfCxzQy.js";import"./shield-sQw-bZ16-BpXHbqgA.js";import"./trophy-24aFosTJ-B8ZVOC_g.js";import"./VerifiedBadge-BXrcTI3t-LUmeHxMg.js";import"./utils-DP6C5xlZ-DCJpTjtG.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],P=y("badge-check",L);/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],G=y("info",Z);/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],O=y("scale",K);/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],U=y("shield-alert",Q),ee=a.memo(({cat:p,items:o})=>e.jsxs("div",{className:"specialty-category-card",style:{height:"auto",border:"1px solid var(--glass-border)",background:"var(--glass-bg)",borderRadius:"25px",padding:"25px",boxShadow:"none"},children:[e.jsxs("div",{className:"cat-header",style:{paddingBottom:"15px",borderBottom:"1px solid var(--glass-border)",marginBottom:"20px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{className:"cat-icon-wrapper",style:{width:"38px",height:"38px",borderRadius:"14px",background:"var(--brand-purple)",opacity:.1,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute"}}),e.jsx(E,{size:18,color:"var(--brand-purple)",style:{zIndex:1}}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"900",color:"var(--text-dark)",zIndex:1},children:p})]}),e.jsx("div",{className:"cat-items",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:o.map(i=>e.jsx(h,{to:`/specialties/${i.id}`,className:"cat-item-link",style:{padding:"12px 10px",fontSize:"0.85rem",fontWeight:"bold",borderRadius:"15px",background:"var(--brand-purple)",color:"#fff",textAlign:"center",border:"none",transition:"none"},children:i.name_ar||i.name},i.id))})]})),f=({title:p,value:o,icon:i,color:r,delay:c})=>{const[j,b]=a.useState(0);return a.useEffect(()=>{let d=null;const x=parseInt(o,10)||0,m=u=>{d||(d=u);const l=Math.min((u-d)/2e3,1),n=l===1?1:1-Math.pow(2,-10*l);b(Math.floor(n*x)),l<1&&window.requestAnimationFrame(m)};window.requestAnimationFrame(m)},[o]),e.jsxs("div",{className:"home-stat-card",style:{background:`linear-gradient(135deg, ${r}08, ${r}03)`,border:`1px solid ${r}30`,borderRadius:"18px",padding:"18px 12px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",animation:`fade-up-stat 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${c} both`,flex:1,minWidth:0,boxShadow:`0 4px 25px ${r}10, inset 0 1px 0 ${r}15`},children:[e.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"50%",transform:"translateX(-50%)",width:"60px",height:"60px",borderRadius:"50%",background:r,opacity:.07,filter:"blur(15px)",zIndex:0}}),e.jsx("div",{className:"stat-shimmer",style:{position:"absolute",top:0,left:"-100%",width:"60%",height:"100%",background:`linear-gradient(90deg, transparent, ${r}08, transparent)`,zIndex:0}}),e.jsx("div",{style:{marginBottom:"12px",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255,255,255,0.05)",padding:"10px",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.08)"},children:e.jsx(i,{size:26,color:"rgba(255,255,255,0.9)",strokeWidth:1.5})}),e.jsxs("h3",{style:{fontSize:"1.6rem",fontWeight:"900",color:r,margin:"0 0 3px 0",zIndex:1,letterSpacing:"-1px",textShadow:`0 0 20px ${r}60`},children:[j.toLocaleString(),"+"]}),e.jsx("p",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.5)",fontWeight:"700",margin:0,zIndex:1,textAlign:"center",letterSpacing:"0.5px",textTransform:"uppercase"},children:p})]})};function pe(){const[p,o]=a.useState([]),[i,r]=a.useState([]),[c,j]=a.useState(""),[b,d]=a.useState(null),[x,m]=a.useState(null),[u,l]=a.useState(!0),[n,w]=a.useState(null),[g,z]=a.useState({docs:0,mods:0,unis:0,views:0}),N=T();a.useEffect(()=>{let t=!0;return(async()=>{try{const[s,k,C,M,R,B]=await Promise.all([W({limit:2}),$(),_(),v.from("documents").select("*",{count:"exact",head:!0}).eq("status","approved"),v.from("moderators").select("*",{count:"exact",head:!0}),v.from("universities").select("*",{count:"exact",head:!0})]);if(!t)return;o(s||[]),z({docs:M.count||0,mods:R.count||0,unis:B.count||0,specs:(k||[]).length||0}),r(k||[]),w(C),l(!1)}catch{t&&l(!1)}})(),()=>{t=!1}},[]);const S=t=>{t.preventDefault(),c.trim()&&N(`/search?q=${encodeURIComponent(c.trim())}`)},I=a.useMemo(()=>[...new Set((i||[]).map(t=>t.category_ar||"تخصصات عامة"))].sort((t,s)=>t==="العلوم الدقيقة"?-1:s==="العلوم الدقيقة"?1:t.localeCompare(s,"ar")).map(t=>({name:t,items:(i||[]).filter(s=>(s.category_ar||"تخصصات عامة")===t).slice(0,50)})),[i]);return e.jsxs("div",{className:"home-main-wrapper",style:{direction:"rtl",minHeight:"100vh",background:"var(--bg-primary)",display:"flex",flexDirection:"column"},children:[e.jsxs("section",{className:"home-hero-section",style:{marginBottom:"20px",marginTop:"10px",paddingTop:"0",paddingLeft:"10px",paddingRight:"10px",flexShrink:0},children:[e.jsx("div",{className:"top-banner-rect",style:{background:"rgba(56, 189, 248, 0.03)",padding:"15px 20px 10px",borderRadius:"30px",border:"2px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 0 50px rgba(56, 189, 248, 0.25)",position:"relative",overflow:"hidden",maxWidth:"1400px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%"},children:e.jsxs("div",{style:{position:"relative",zIndex:1,width:"100%"},children:[e.jsxs("div",{className:"top-links-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"10px",marginBottom:"20px",width:"100%"},children:[e.jsxs(h,{to:"/contact",className:"ads-nav-btn",children:[e.jsx(V,{size:16})," ",e.jsx("span",{children:"اتصل بنا"})]}),e.jsxs(h,{to:"/about",className:"ads-nav-btn",children:[e.jsx(G,{size:16})," ",e.jsx("span",{children:"نحن"})]}),e.jsxs(h,{to:"/about",className:"ads-nav-btn",children:[e.jsx(U,{size:16})," ",e.jsx("span",{children:"الخصوصية"})]}),e.jsxs(h,{to:"/about",className:"ads-nav-btn",children:[e.jsx(O,{size:16})," ",e.jsx("span",{children:"الشروط"})]})]}),e.jsxs("h1",{className:"top-banner-title",style:{fontWeight:"900",fontSize:"1.6rem",letterSpacing:"-0.3px",margin:0,marginBottom:"15px"},children:["كل ما يخص ",e.jsx("span",{className:"brand-purple-text",style:{background:"linear-gradient(135deg, #7b42f6, #38bdf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"الطالب الجزائري"})," 🎓"]}),e.jsx("form",{className:"top-banner-search",onSubmit:S,style:{marginTop:"0",margin:"0 auto",width:"100%",maxWidth:"600px"},children:e.jsxs("div",{className:"search-wrapper",style:{margin:0,height:"42px",borderRadius:"20px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",background:"rgba(255,255,255,0.02)",display:"flex",alignItems:"center",padding:"0 15px"},children:[e.jsx(A,{size:18,className:"search-icon",color:"#7b42f6"}),e.jsx("input",{type:"text",className:"search-input",placeholder:"ابحث عن دروسك هنا...",value:c,onChange:t=>j(t.target.value),style:{fontSize:"0.95rem",background:"transparent",borderRadius:"20px",paddingRight:"45px",flex:1,border:"none",color:"#fff",outline:"none"}})]})})]})}),e.jsx("style",{children:`
            .ads-nav-btn {
               display: flex;
               align-items: center;
               justify-content: center;
               padding: 10px 12px;
               border-radius: 16px;
               background: rgba(255, 255, 255, 0.02);
               border: 1px solid rgba(255, 255, 255, 0.05);
               color: #fff;
               text-decoration: none;
               font-size: 0.8rem;
               font-weight: 800;
               gap: 8px;
               transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .ads-nav-btn:hover {
               background: rgba(123, 66, 246, 0.1);
               border-color: #7b42f6;
               box-shadow: 0 10px 20px rgba(0,0,0,0.3);
               transform: translateY(-2px);
            }
            .ads-nav-btn svg {
               color: #7b42f6;
            }
            @media (max-width: 600px) {
               .ads-nav-btn { padding: 8px 5px; flex-direction: column; font-size: 0.65rem; gap: 4px; border-radius: 12px; }
               .top-links-grid { gap: 6px !important; }
               .top-banner-rect { border-radius: 25px !important; }
               .specialty-category-card { border-radius: 35px !important; }
            }
         `})]}),(n==null?void 0:n.ad_home_banner)&&e.jsx("div",{style:{marginBottom:"10px",padding:"0 20px"},children:e.jsx(X,{html:n.ad_home_banner})}),e.jsxs("div",{className:"home-content-container",style:{padding:"0 10px 20px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"20px",width:"100%"},children:[e.jsx("section",{className:"section",style:{paddingTop:0,marginTop:0},children:e.jsx("div",{className:"specialties-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"20px",marginTop:"0px"},children:I.map(t=>e.jsx(ee,{cat:t.name,items:t.items},t.name))})}),e.jsxs("section",{className:"section",style:{background:"rgba(255,255,255,0.015)",borderRadius:"35px",padding:"30px",border:"1px solid rgba(255,255,255,0.04)",marginBottom:"5px"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"25px"},children:e.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:"900"},children:"📄 أحدث الملفات"})}),u?e.jsx("div",{className:"loading-grid",children:[...Array(3)].map((t,s)=>e.jsx("div",{className:"skeleton-card",style:{height:"140px"}},s))}):e.jsx("div",{className:"card-grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"15px"},children:(p||[]).slice(0,2).map(t=>e.jsx(q,{file:t,onView:d,onViewProfile:m,siteContent:n},t.id))})]}),e.jsxs("section",{className:"stats-dashboard-section",style:{width:"100%",marginBottom:"0px",position:"relative"},children:[e.jsx("div",{className:"stats-orbit-light"}),e.jsx("div",{className:"stats-orbit-light stats-orbit-light-2"}),e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(15,10,30,0.95), rgba(20,12,40,0.98))",padding:"20px 18px",borderRadius:"24px",border:"1px solid rgba(123,66,246,0.25)",position:"relative",overflow:"hidden",zIndex:1,backdropFilter:"blur(20px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"14px"},children:[e.jsx("div",{style:{height:"1px",flex:1,background:"linear-gradient(90deg, transparent, rgba(123,66,246,0.4))"}}),e.jsx("span",{style:{fontSize:"0.65rem",fontWeight:"800",color:"rgba(123,66,246,0.8)",letterSpacing:"2px",textTransform:"uppercase"},children:"⚡ إحصائيات المنصة"}),e.jsx("div",{style:{height:"1px",flex:1,background:"linear-gradient(90deg, rgba(123,66,246,0.4), transparent)"}})]}),g&&e.jsxs("div",{className:"stats-container",style:{display:"flex",flexDirection:"row",gap:"10px",alignItems:"stretch"},children:[e.jsx(f,{title:"ملف أكاديمي",value:g.docs,icon:D,color:"#38bdf8",delay:"0s"}),e.jsx(f,{title:"تخصص جامعي",value:g.specs,icon:F,color:"#a78bfa",delay:"0.1s"}),e.jsx(f,{title:"جامعة ومعهد",value:g.unis,icon:Y,color:"#fb923c",delay:"0.2s"}),e.jsx(f,{title:"مساهم موثق",value:g.mods,icon:P,color:"#34d399",delay:"0.3s"})]})]})]})]}),e.jsx("style",{children:`
        .specialty-category-card { transition: none; }
        .specialty-category-card:hover { transform: none !important; box-shadow: none !important; }
        .cat-item-link:hover { opacity: 0.9; }
        .home-stat-card:hover { transform: translateY(-2px) !important; border-color: rgba(255,255,255,0.15) !important; }
        @keyframes fade-up-stat {
          0% { opacity: 0; transform: translateY(20px) scale(0.93); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes orbit-rotate {
          0% { transform: rotate(0deg) translateX(110%) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(110%) rotate(-360deg); }
        }
        @keyframes orbit-rotate-2 {
          0% { transform: rotate(180deg) translateX(110%) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(110%) rotate(-540deg); }
        }
        @keyframes stat-shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .stats-orbit-light {
          position: absolute;
          top: 50%; left: 50%;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: radial-gradient(circle, #7b42f6, #38bdf8);
          box-shadow: 0 0 15px 6px rgba(123,66,246,0.6), 0 0 40px 15px rgba(56,189,248,0.2);
          animation: orbit-rotate 4s linear infinite;
          z-index: 2;
          transform-origin: 0 0;
          pointer-events: none;
        }
        .stats-orbit-light-2 {
          background: radial-gradient(circle, #f59e0b, #10b981);
          box-shadow: 0 0 15px 6px rgba(245,158,11,0.5), 0 0 40px 15px rgba(16,185,129,0.2);
          animation: orbit-rotate-2 4s linear infinite;
        }
        .stat-shimmer {
          animation: stat-shimmer 3s ease-in-out infinite;
        }
        @media (max-width: 768px) {
           .top-banner-title { font-size: 1.4rem !important; }
           .top-banner-rect { padding: 15px 10px !important; border-radius: 20px !important; width: 95% !important; }
           .home-hero-section { border-radius: 0 !important; }
           .home-content-container { gap: 15px !important; padding: 10px !important; }
           .stats-dashboard-section { margin-bottom: 20px !important; }
           .stats-container { gap: 6px !important; }
           .home-stat-card h3 { font-size: 1.1rem !important; }
           .home-stat-card p { font-size: 0.5rem !important; }
           .home-stat-card { padding: 12px 6px !important; border-radius: 14px !important; }
           section.section { padding: 15px !important; border-radius: 20px !important; }
        }
        .home-main-wrapper { padding-bottom: 10px !important; overflow-x: hidden; }
      `}),b&&e.jsx(J,{file:b,onClose:()=>d(null)}),x&&e.jsx(H,{moderator:x.username==="admin_owner"?null:x,siteContent:n,onClose:()=>m(null)})]})}export{pe as default};
