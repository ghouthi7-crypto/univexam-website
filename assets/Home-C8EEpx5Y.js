import{c as w,r as a,u as V,j as e,L as g,M as D,S as P,F as $,B as k,U as L,a as q,g as E,b as U,d as Y,s as j}from"./index-2W2J-SaM.js";import{A as H,F as G,P as O,M as J}from"./ModeratorProfileModal-C_sH7YHx.js";import"./VerifiedBadge-CXuX0US_.js";import"./utils-DP6C5xlZ.js";import"./eye-CBW93eul.js";import"./download-BGSdOK3b.js";import"./shield-B0HtVrAe.js";import"./trophy-JOGQfpbI.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Q=w("info",K);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Z=w("scale",X);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],te=w("shield-alert",ee),ae=a.memo(({cat:p,items:o})=>e.jsxs("div",{className:"specialty-category-card",style:{height:"auto",border:"1px solid var(--glass-border)",background:"var(--glass-bg)",borderRadius:"25px",padding:"25px",boxShadow:"none"},children:[e.jsxs("div",{className:"cat-header",style:{paddingBottom:"15px",borderBottom:"1px solid var(--glass-border)",marginBottom:"20px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{className:"cat-icon-wrapper",style:{width:"38px",height:"38px",borderRadius:"14px",background:"var(--brand-purple)",opacity:.1,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute"}}),e.jsx(k,{size:18,color:"var(--brand-purple)",style:{zIndex:1}}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"900",color:"var(--text-dark)",zIndex:1},children:p})]}),e.jsx("div",{className:"cat-items",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:o.map(s=>e.jsx(g,{to:`/specialties/${s.id}`,className:"cat-item-link",style:{padding:"12px 10px",fontSize:"0.85rem",fontWeight:"bold",borderRadius:"15px",background:"var(--brand-purple)",color:"#fff",textAlign:"center",border:"none",transition:"none"},children:s.name_ar||s.name},s.id))})]})),y=({title:p,value:o,icon:s,color:n,delay:c})=>{const[v,h]=a.useState(0);return a.useEffect(()=>{let d=null;const m=parseInt(o,10)||0,x=u=>{d||(d=u);const l=Math.min((u-d)/2e3,1),i=l===1?1:1-Math.pow(2,-10*l);h(Math.floor(i*m)),l<1&&window.requestAnimationFrame(x)};window.requestAnimationFrame(x)},[o]),e.jsxs("div",{className:"home-stat-card",style:{background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.04)",borderRadius:"30px",padding:"30px 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"0.4s",position:"relative",overflow:"hidden",animation:`fade-up-stat 0.8s ease-out ${c} both`},children:[e.jsx("div",{style:{position:"absolute",top:"-30px",right:"-30px",opacity:.03,transform:"scale(3)",color:n,zIndex:0},children:s}),e.jsx("div",{style:{width:"65px",height:"65px",borderRadius:"22px",background:`${n}15`,color:n,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"18px",zIndex:1,boxShadow:`0 10px 25px ${n}20`},children:s}),e.jsxs("h3",{style:{fontSize:"2.4rem",fontWeight:"900",color:"#fff",margin:"0 0 5px 0",zIndex:1,letterSpacing:"-1px"},children:["+",v.toLocaleString()]}),e.jsx("p",{style:{fontSize:"0.85rem",color:"#888",fontWeight:"bold",margin:0,zIndex:1},children:p})]})};function ce(){const[p,o]=a.useState([]),[s,n]=a.useState([]),[c,v]=a.useState(""),[h,d]=a.useState(null),[m,x]=a.useState(null),[u,l]=a.useState(!0),[i,z]=a.useState(null),[b,N]=a.useState({docs:0,mods:0,unis:0,views:0}),C=V();a.useEffect(()=>{let t=!0;return(async()=>{try{const[f,B,W,_,R,T]=await Promise.all([E({limit:2}),U(),Y(),j.from("documents").select("*",{count:"exact",head:!0}).eq("status","approved"),j.from("moderators").select("*",{count:"exact",head:!0}),j.from("universities").select("*",{count:"exact",head:!0})]);if(!t)return;o(f||[]);const S=(f||[]).reduce((F,A)=>F+(A.views||0),0);N({docs:_.count||25,mods:R.count||5,unis:T.count||3,views:S>1500?S:15840}),n(B||[]),z(W),l(!1)}catch{t&&l(!1)}})(),()=>{t=!1}},[]);const I=t=>{t.preventDefault(),c.trim()&&C(`/search?q=${encodeURIComponent(c.trim())}`)},M=a.useMemo(()=>[...new Set((s||[]).map(r=>r.category_ar))].filter(Boolean).map(r=>({name:r,items:(s||[]).filter(f=>f.category_ar===r).slice(0,50)})),[s]);return e.jsxs("div",{className:"home-main-wrapper",style:{direction:"rtl",minHeight:"100vh",background:"var(--bg-primary)"},children:[e.jsxs("section",{className:"home-hero-section",style:{marginBottom:"0px",marginTop:"10px",paddingTop:"0",paddingLeft:"10px",paddingRight:"10px"},children:[e.jsx("div",{className:"top-banner-rect",style:{background:"rgba(56, 189, 248, 0.03)",padding:"15px 20px 10px",borderRadius:"30px",border:"2px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 0 50px rgba(56, 189, 248, 0.25)",position:"relative",overflow:"hidden",maxWidth:"1400px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",width:"100%"},children:e.jsxs("div",{style:{position:"relative",zIndex:1,width:"100%"},children:[e.jsxs("div",{className:"top-links-grid",style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"10px",marginBottom:"20px",width:"100%"},children:[e.jsxs(g,{to:"/contact",className:"ads-nav-btn",children:[e.jsx(D,{size:16})," ",e.jsx("span",{children:"اتصل بنا"})]}),e.jsxs(g,{to:"/about",className:"ads-nav-btn",children:[e.jsx(Q,{size:16})," ",e.jsx("span",{children:"نحن"})]}),e.jsxs(g,{to:"/about",className:"ads-nav-btn",children:[e.jsx(te,{size:16})," ",e.jsx("span",{children:"الخصوصية"})]}),e.jsxs(g,{to:"/about",className:"ads-nav-btn",children:[e.jsx(Z,{size:16})," ",e.jsx("span",{children:"الشروط"})]})]}),e.jsxs("h1",{className:"top-banner-title",style:{fontWeight:"900",fontSize:"1.6rem",letterSpacing:"-0.3px",margin:0,marginBottom:"15px"},children:["كل ما يخص ",e.jsx("span",{className:"brand-purple-text",style:{background:"linear-gradient(135deg, #7b42f6, #38bdf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"الطالب الجزائري"})," 🎓"]}),e.jsx("form",{className:"top-banner-search",onSubmit:I,style:{marginTop:"0",margin:"0 auto",width:"100%",maxWidth:"600px"},children:e.jsxs("div",{className:"search-wrapper",style:{margin:0,height:"42px",borderRadius:"20px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",background:"rgba(255,255,255,0.02)",display:"flex",alignItems:"center",padding:"0 15px"},children:[e.jsx(P,{size:18,className:"search-icon",color:"#7b42f6"}),e.jsx("input",{type:"text",className:"search-input",placeholder:"ابحث عن دروسك هنا...",value:c,onChange:t=>v(t.target.value),style:{fontSize:"0.95rem",background:"transparent",borderRadius:"20px",paddingRight:"45px",flex:1,border:"none",color:"#fff",outline:"none"}})]})})]})}),e.jsx("style",{children:`
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
         `})]}),(i==null?void 0:i.ad_home_banner)&&e.jsx("div",{style:{marginBottom:"10px",padding:"0 20px"},children:e.jsx(H,{html:i.ad_home_banner})}),e.jsxs("div",{className:"home-content-container",style:{padding:"0 10px 20px",maxWidth:"1400px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsx("section",{className:"section",style:{paddingTop:0,marginTop:0},children:e.jsx("div",{className:"specialties-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"20px",marginTop:"0px"},children:M.map(t=>e.jsx(ae,{cat:t.name,items:t.items},t.name))})}),e.jsxs("section",{className:"section",style:{background:"rgba(255,255,255,0.015)",borderRadius:"35px",padding:"30px",border:"1px solid rgba(255,255,255,0.04)",marginBottom:"5px"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"25px"},children:e.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:"900"},children:"📄 أحدث الملفات"})}),u?e.jsx("div",{className:"loading-grid",children:[...Array(3)].map((t,r)=>e.jsx("div",{className:"skeleton-card",style:{height:"140px"}},r))}):e.jsx("div",{className:"card-grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"15px"},children:(p||[]).slice(0,2).map(t=>e.jsx(G,{file:t,onView:d,onViewProfile:x,siteContent:i},t.id))})]}),e.jsx("section",{className:"stats-dashboard-section",style:{width:"100%",marginBottom:"0px",background:"rgba(123, 66, 246, 0.04)",padding:"25px",borderRadius:"35px",border:"1px solid rgba(123, 66, 246, 0.2)",boxShadow:"0 0 40px rgba(123, 66, 246, 0.12)",position:"relative",overflow:"hidden"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"15px",position:"relative",zIndex:1},children:[e.jsx(y,{title:"الملفات",value:b.docs,icon:e.jsx($,{size:24,strokeWidth:2.5}),color:"#7b42f6",delay:"0ms"}),e.jsx(y,{title:"الجامعات",value:b.unis,icon:e.jsx(k,{size:24,strokeWidth:2.5}),color:"#06b6d4",delay:"150ms"}),e.jsx(y,{title:"المشرفون",value:b.mods,icon:e.jsx(L,{size:24,strokeWidth:2.5}),color:"#f59e0b",delay:"300ms"}),e.jsx(y,{title:"الزيارات",value:b.views,icon:e.jsx(q,{size:24,strokeWidth:2.5}),color:"#ec4899",delay:"450ms"})]})})]}),e.jsx("style",{children:`
        .specialty-category-card { transition: none; }
        .specialty-category-card:hover { transform: none !important; box-shadow: none !important; }
        .cat-item-link:hover { opacity: 0.9; }
        .home-stat-card { padding: 20px 15px !important; }
        .home-stat-card:hover { transform: none !important; box-shadow: none !important; border-color: var(--glass-border) !important; }
        .home-stat-card h3 { fontSize: 1.8rem !important; color: var(--text-dark) !important; }
        .home-stat-card > div:nth-child(2) { width: 50px !important; height: 50px !important; marginBottom: 10px !important; }
        @keyframes fade-up-stat {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 768px) {
           .top-banner-title { fontSize: 1.4rem !important; }
           .top-banner-rect { padding: 15px 10px !important; border-radius: 20px !important; width: 95% !important; }
           .home-hero-section { border-radius: 0 !important; }
           .home-content-container { gap: 15px !important; padding: 10px !important; }
           .stats-dashboard-section { margin-bottom: 20px !important; }
           .stats-dashboard-section > div { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
           .home-stat-card h3 { fontSize: 1.4rem !important; }
           .home-stat-card p { fontSize: 0.75rem !important; }
           section.section { padding: 15px !important; border-radius: 20px !important; }
        }
      `}),h&&e.jsx(O,{file:h,onClose:()=>d(null)}),m&&e.jsx(J,{moderator:m.username==="admin_owner"?null:m,siteContent:i,onClose:()=>x(null)})]})}export{ce as default};
