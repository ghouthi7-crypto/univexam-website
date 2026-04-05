import{c as v,r as a,u as T,j as e,L as h,M as F,S as A,F as D,B as w,U as P,a as V,g as L,b as U,d as $,s as j}from"./index-Ck0zSicK.js";import{A as q,F as E,P as H,M as G}from"./ModeratorProfileModal-C97dI9hu.js";import"./VerifiedBadge-BdbHg0xJ.js";import"./utils-DP6C5xlZ.js";import"./sparkles-QJPIcnKE.js";import"./download-CWadqBoy.js";import"./shield-dNeW0cEw.js";import"./trophy-CVfHC2vR.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Y=v("info",O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],K=v("scale",J);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],X=v("shield-alert",Q),Z=a.memo(({cat:c,items:n})=>e.jsxs("div",{className:"specialty-category-card",style:{height:"auto",border:"1px solid var(--glass-border)",background:"var(--glass-bg)",borderRadius:"25px",padding:"25px",boxShadow:"none"},children:[e.jsxs("div",{className:"cat-header",style:{paddingBottom:"15px",borderBottom:"1px solid var(--glass-border)",marginBottom:"20px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{className:"cat-icon-wrapper",style:{width:"38px",height:"38px",borderRadius:"14px",background:"var(--brand-purple)",opacity:.1,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute"}}),e.jsx(w,{size:18,color:"var(--brand-purple)",style:{zIndex:1}}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"900",color:"var(--text-dark)",zIndex:1},children:c})]}),e.jsx("div",{className:"cat-items",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:n.map(s=>e.jsx(h,{to:`/specialties/${s.id}`,className:"cat-item-link",style:{padding:"12px 10px",fontSize:"0.85rem",fontWeight:"bold",borderRadius:"15px",background:"var(--brand-purple)",color:"#fff",textAlign:"center",border:"none",transition:"none"},children:s.name_ar||s.name},s.id))})]})),f=({title:c,value:n,icon:s,color:u})=>{const[p,y]=a.useState(0);return a.useEffect(()=>{let r=null;const b=parseInt(n,10)||0,o=x=>{r||(r=x);const m=Math.min((x-r)/1800,1);y(Math.floor((m===1?1:1-Math.pow(2,-10*m))*b)),m<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[n]),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",flex:"1 1 0",minWidth:0,justifyContent:"center"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:`${u}18`,color:u,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",lineHeight:1.2},children:[e.jsxs("span",{style:{fontSize:"1.15rem",fontWeight:"900",color:"#fff",letterSpacing:"-0.5px"},children:["+",p]}),e.jsx("span",{style:{fontSize:"0.65rem",color:"#999",fontWeight:"700"},children:c})]})]})};function de(){const[c,n]=a.useState([]),[s,u]=a.useState([]),[p,y]=a.useState(""),[r,b]=a.useState(null),[o,x]=a.useState(null),[m,S]=a.useState(!0),[d,N]=a.useState(null),[g,z]=a.useState({docs:0,mods:0,unis:0,views:0}),C=T();a.useEffect(()=>{let t=!0;return(async()=>{try{const[l,k,_,B,R,W]=await Promise.all([L({limit:2}),U(),$(),j.from("documents").select("*",{count:"exact",head:!0}).eq("status","approved"),j.from("moderators").select("*",{count:"exact",head:!0}),j.from("universities").select("*",{count:"exact",head:!0})]);if(!t)return;n(l||[]),z({docs:B.count||0,mods:R.count||0,unis:W.count||0,specs:(k||[]).length||0}),u(k||[]),N(_),S(!1)}catch{t&&S(!1)}})(),()=>{t=!1}},[]);const M=t=>{t.preventDefault(),p.trim()&&C(`/search?q=${encodeURIComponent(p.trim())}`)},I=a.useMemo(()=>[...new Set((s||[]).map(i=>i.category_ar))].filter(Boolean).sort((i,l)=>i==="العلوم الدقيقة"?-1:l==="العلوم الدقيقة"?1:i.localeCompare(l,"ar")).map(i=>({name:i,items:(s||[]).filter(l=>l.category_ar===i).slice(0,50)})),[s]);return e.jsxs("div",{className:"home-main-wrapper",style:{direction:"rtl",minHeight:"100vh",background:"var(--bg-primary)"},children:[e.jsxs("section",{className:"home-hero-section",style:{marginBottom:"0px",marginTop:"10px",paddingTop:"0",paddingLeft:"10px",paddingRight:"10px"},children:[e.jsx("div",{className:"top-banner-rect",style:{background:"rgba(56, 189, 248, 0.03)",padding:"15px 20px 10px",borderRadius:"30px",border:"2px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 0 50px rgba(56, 189, 248, 0.25)",position:"relative",overflow:"hidden",maxWidth:"1400px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%"},children:e.jsxs("div",{style:{position:"relative",zIndex:1,width:"100%"},children:[e.jsxs("div",{className:"top-links-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"10px",marginBottom:"20px",width:"100%"},children:[e.jsxs(h,{to:"/contact",className:"ads-nav-btn",children:[e.jsx(F,{size:16})," ",e.jsx("span",{children:"اتصل بنا"})]}),e.jsxs(h,{to:"/about",className:"ads-nav-btn",children:[e.jsx(Y,{size:16})," ",e.jsx("span",{children:"نحن"})]}),e.jsxs(h,{to:"/about",className:"ads-nav-btn",children:[e.jsx(X,{size:16})," ",e.jsx("span",{children:"الخصوصية"})]}),e.jsxs(h,{to:"/about",className:"ads-nav-btn",children:[e.jsx(K,{size:16})," ",e.jsx("span",{children:"الشروط"})]})]}),e.jsxs("h1",{className:"top-banner-title",style:{fontWeight:"900",fontSize:"1.6rem",letterSpacing:"-0.3px",margin:0,marginBottom:"15px"},children:["كل ما يخص ",e.jsx("span",{className:"brand-purple-text",style:{background:"linear-gradient(135deg, #7b42f6, #38bdf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"الطالب الجزائري"})," 🎓"]}),e.jsx("form",{className:"top-banner-search",onSubmit:M,style:{marginTop:"0",margin:"0 auto",width:"100%",maxWidth:"600px"},children:e.jsxs("div",{className:"search-wrapper",style:{margin:0,height:"42px",borderRadius:"20px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",background:"rgba(255,255,255,0.02)",display:"flex",alignItems:"center",padding:"0 15px"},children:[e.jsx(A,{size:18,className:"search-icon",color:"#7b42f6"}),e.jsx("input",{type:"text",className:"search-input",placeholder:"ابحث عن دروسك هنا...",value:p,onChange:t=>y(t.target.value),style:{fontSize:"0.95rem",background:"transparent",borderRadius:"20px",paddingRight:"45px",flex:1,border:"none",color:"#fff",outline:"none"}})]})})]})}),e.jsx("style",{children:`
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
         `})]}),(d==null?void 0:d.ad_home_banner)&&e.jsx("div",{style:{marginBottom:"10px",padding:"0 20px"},children:e.jsx(q,{html:d.ad_home_banner})}),e.jsxs("div",{className:"home-content-container",style:{padding:"0 10px 20px",maxWidth:"1400px",margin:"-70px auto 0",display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsx("section",{className:"section",style:{paddingTop:0,marginTop:0},children:e.jsx("div",{className:"specialties-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"20px",marginTop:"0px"},children:I.map(t=>e.jsx(Z,{cat:t.name,items:t.items},t.name))})}),e.jsxs("section",{className:"section",style:{background:"rgba(255,255,255,0.015)",borderRadius:"35px",padding:"30px",border:"1px solid rgba(255,255,255,0.04)",marginBottom:"5px"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"25px"},children:e.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:"900"},children:"📄 أحدث الملفات"})}),m?e.jsx("div",{className:"loading-grid",children:[...Array(3)].map((t,i)=>e.jsx("div",{className:"skeleton-card",style:{height:"140px"}},i))}):e.jsx("div",{className:"card-grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"15px"},children:(c||[]).slice(0,2).map(t=>e.jsx(E,{file:t,onView:b,onViewProfile:x,siteContent:d},t.id))})]}),g&&e.jsxs("div",{style:{display:"flex",flexWrap:"nowrap",background:"rgba(123, 66, 246, 0.05)",border:"1px solid rgba(123, 66, 246, 0.2)",borderRadius:"18px",overflow:"hidden",width:"100%"},children:[e.jsx(f,{title:"ملف أكاديمي",value:g.docs,icon:e.jsx(D,{size:18}),color:"#0ea5e9"}),e.jsx("div",{style:{width:"1px",background:"rgba(123, 66, 246, 0.15)",alignSelf:"stretch"}}),e.jsx(f,{title:"تخصص جامعي",value:g.specs,icon:e.jsx(w,{size:18}),color:"#7b42f6"}),e.jsx("div",{style:{width:"1px",background:"rgba(123, 66, 246, 0.15)",alignSelf:"stretch"}}),e.jsx(f,{title:"جامعة ومعهد",value:g.unis,icon:e.jsx(P,{size:18}),color:"#f59e0b"}),e.jsx("div",{style:{width:"1px",background:"rgba(123, 66, 246, 0.15)",alignSelf:"stretch"}}),e.jsx(f,{title:"مساهم معتمد",value:g.mods,icon:e.jsx(V,{size:18}),color:"#10b981"})]})]}),e.jsx("style",{children:`
        .specialty-category-card { transition: none; }
        .specialty-category-card:hover { transform: none !important; box-shadow: none !important; }
        .cat-item-link:hover { opacity: 0.9; }
        @media (max-width: 768px) {
           .top-banner-title { font-size: 1.4rem !important; }
           .top-banner-rect { padding: 15px 10px !important; border-radius: 20px !important; width: 95% !important; }
           .home-hero-section { border-radius: 0 !important; }
           .home-content-container { gap: 15px !important; padding: 10px !important; }
           section.section { padding: 15px !important; border-radius: 20px !important; }
        }
        .home-main-wrapper { padding-bottom: 0 !important; overflow-x: hidden; }
      `}),r&&e.jsx(H,{file:r,onClose:()=>b(null)}),o&&e.jsx(G,{moderator:o.username==="admin_owner"?null:o,siteContent:d,onClose:()=>x(null)})]})}export{de as default};
