const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DLsmhAFU.js","assets/vendor-core-B0Uj3pj8.js","assets/vendor-Dv0Yv6_k.js","assets/ModeratorProfileModal-BrxpdZYh.js","assets/VerifiedBadge-DNM0NFhU.js","assets/utils-DP6C5xlZ.js","assets/vendor-icons-BEmThQcK.js","assets/vendor-db-BXOkZZiS.js","assets/FilesPage-CYHhmmWg.js","assets/SpecialtyPage-BryHFpYa.js","assets/ModeratorsPage-Du5ZRSF1.js","assets/Contact-Jf3eLMBI.js","assets/SearchPage-LFSgBELd.js","assets/About-DsUaMiCt.js","assets/AdminPage-BdoDuezH.js","assets/ModeratorPortal-WNTVhmdd.js"])))=>i.map(i=>d[i]);
import{r as c,u as te,j as e,L as d,B as se,a as ae,R as re,b as v,N as oe,c as ie}from"./vendor-core-B0Uj3pj8.js";import{c as ne}from"./vendor-db-BXOkZZiS.js";import{A as le}from"./vendor-Dv0Yv6_k.js";import{B as P,X as U,M as ce,G as A,S as de,H as me,a as pe,b as I,C as L,F as V,U as E,c as F,d as fe,A as C,e as xe,I as ge,T as he,f as be,g as ue}from"./vendor-icons-BEmThQcK.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const m of r)if(m.type==="childList")for(const i of m.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const m={};return r.integrity&&(m.integrity=r.integrity),r.referrerPolicy&&(m.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?m.credentials="include":r.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(r){if(r.ep)return;r.ep=!0;const m=a(r);fetch(r.href,m)}})();const ye="modulepreload",ve=function(t){return"/"+t},q={},_=function(s,a,o){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),h=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(a.map(f=>{if(f=ve(f),f in q)return;q[f]=!0;const p=f.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${y}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":ye,p||(x.as="script"),x.crossOrigin="",x.href=f,h&&x.setAttribute("nonce",h),document.head.appendChild(x),p)return new Promise((M,D)=>{x.addEventListener("load",M),x.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${f}`)))})}))}function m(i){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=i,window.dispatchEvent(h),!h.defaultPrevented)throw i}return r.then(i=>{for(const h of i||[])h.status==="rejected"&&m(h.reason);return s().catch(m)})},je=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),$=je&&window.location.port==="5173"?"http://localhost:8788":"",_e="https://pub-e354e3db406b475f95f0c08f1a94001e.r2.dev",T={accountId:"cb691857ed2d2baab866959c3678a53b",accessKeyId:"4467d0b297a20bb797e2a0f8d3c0e50f",secretAccessKey:"b311db736a4cfc4200b70d7c18a54958fce17026ee7542dd1b89c7e5398cacb7",bucketName:"ghouthi"},we=new le({accessKeyId:T.accessKeyId,secretAccessKey:T.secretAccessKey,service:"s3",region:"auto"}),J=async(t,s,a="general")=>{const o=new FormData;o.append("file",t),s&&o.append("customName",s),o.append("folder",a);const r=await fetch(`${$}/api/upload`,{method:"POST",body:o});if(!r.ok){const i=await r.json().catch(()=>({}));throw new Error(i.error||"فشل رفع الملف.")}return(await r.json()).url||`${_e}/${a}/${s||t.name}`},ke=async t=>{if(!(await fetch(`${$}/api/r2?key=${encodeURIComponent(t)}`,{method:"DELETE"})).ok)throw new Error("فشل حذف الملف من R2.");return!0},Se=async()=>{try{const t=await fetch(`${$}/api/r2`);if(!t.ok)throw new Error("API failed");const s=await t.text();if(s.trim().startsWith("<"))throw new Error("API returned HTML");return(JSON.parse(s)||[]).map(o=>({key:o.Key||o.key||o.Name||"",size:o.Size||o.size||0,lastModified:o.LastModified||o.lastModified||null}))}catch(t){console.warn("R2 API failed, falling back to direct listing...",t);try{const s=`https://${T.accountId}.r2.cloudflarestorage.com/${T.bucketName}?list-type=2`;return[...(await(await we.fetch(s)).text()).matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)].map(m=>{var p,y,x;const i=((p=m[1].match(/<Key>(.*?)<\/Key>/))==null?void 0:p[1])||"",h=parseInt(((y=m[1].match(/<Size>(.*?)<\/Size>/))==null?void 0:y[1])||"0"),f=((x=m[1].match(/<LastModified>(.*?)<\/LastModified>/))==null?void 0:x[1])||null;return{key:i,size:h,lastModified:f}})}catch(s){throw console.error("Final R2 error:",s),new Error("فشل جلب ملفات R2 بالكامل.")}}},Ye=Object.freeze(Object.defineProperty({__proto__:null,deleteR2File:ke,listR2Files:Se,uploadR2:J},Symbol.toStringTag,{value:"Module"})),ze="https://trjfjxvdeuwkzufbpqgh.supabase.co",Le="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyamZqeHZkZXV3a3p1ZmJwcWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3OTcwOTYsImV4cCI6MjA4OTM3MzA5Nn0.dffkyJ4Z8tNsDC2FsptXCo8LI1y99pGLVUuy8JGA_9w",u=ne(ze,Le);let W=null;const Ne=async()=>{if(W)return W;const{data:t,error:s}=await u.from("specialties").select("*").order("name_ar");if(s)throw s;return W=t,t},Ge=async({specialtyId:t,search:s,featured:a,limit:o=20,offset:r=0,allStatus:m=!1}={})=>{let i=u.from("documents").select(`
      *,
      module:modules(id, name, year, specialty:specialties(id, name_ar, category_ar, icon)),
      university:universities(id, name_ar, wilaya),
      moderator:moderators!creator_id(name, points, avatar_url, verified, gold_verified, diamond_verified)
    `).order("created_at",{ascending:!1}).range(r,r+o-1);t&&(i=i.eq("module.specialty_id",t)),a&&(i=i.eq("is_featured",!0)),s&&(i=i.ilike("title",`%${s}%`)),m||(i=i.eq("status","approved"));const{data:h,error:f}=await i;if(f)throw f;return h},Ze=async t=>{const{data:s,error:a}=await u.from("documents").select(`
      *,
      module:modules!inner(id, name, year, specialty_id, specialty:specialties!inner(id, name_ar, category_ar, icon)),
      university:universities(id, name_ar, wilaya),
      moderator:moderators!creator_id(name, points, avatar_url, verified, gold_verified, diamond_verified)
    `).eq("module.specialty_id",t).eq("status","approved").order("created_at",{ascending:!1});if(a)throw a;return s},Qe=async t=>{const{data:s,error:a}=await u.from("documents").select(`
      *,
      module:modules!inner(id, name, year, specialty:specialties!inner(id, name_ar, category_ar, icon)),
      university:universities(id, name_ar, wilaya),
      moderator:moderators!creator_id(name, points, avatar_url, verified, gold_verified, diamond_verified)
    `).eq("status","approved").or(`title.ilike.%${t}%, module.name.ilike.%${t}%, module.specialty.name_ar.ilike.%${t}%`).order("created_at",{ascending:!1});if(a){const{data:o,error:r}=await u.from("documents").select(`
        *,
        module:modules(id, name, year, specialty:specialties(id, name_ar, category_ar, icon)),
        university:universities(id, name_ar, wilaya),
        moderator:moderators!creator_id(name, points, avatar_url, verified, gold_verified, diamond_verified)
      `).eq("status","approved").ilike("title",`%${t}%`).order("created_at",{ascending:!1});if(r)throw r;return o}return s},et=async t=>{const{data:s,error:a}=await u.from("modules").select("*").eq("specialty_id",t).order("name");if(a)throw a;return s},Ie=async()=>{const{data:t,error:s}=await u.from("universities").select("*").order("name_ar");if(s)throw s;return t},tt=async()=>{const{data:t,error:s}=await u.from("moderators").select("*").eq("is_hidden",!1).order("points",{ascending:!1});if(s)throw s;return t},st=async t=>{const{data:s,error:a}=await u.from("documents").insert([t]).select();if(a)throw a;return s[0]},at=async t=>{const{error:s}=await u.from("moderators").delete().eq("id",t);if(s)throw s},rt=async t=>{await u.rpc("increment_downloads",{doc_id:t})},ot=async t=>{await u.rpc("increment_views",{doc_id:t})},it=async(t,s,a)=>await J(t,s,a),nt="rrytkhmoh1",lt="univexam_admin_auth";let R=null;const K=async()=>{if(R)return R;const{data:t,error:s}=await u.from("site_content").select("*");if(s)throw s;if(!t)return{};const a=t.reduce((o,r)=>({...o,[r.key]:r.value}),{});return R=a,a},ct=async(t,s)=>{const{error:a}=await u.from("site_content").upsert({key:t,value:s});if(a)throw a;R=null},H={MED7:[{val:"L1",label:"1ère"},{val:"L2",label:"2ème"},{val:"L3",label:"3ème"},{val:"L4",label:"4ème"},{val:"L5",label:"5ème"},{val:"L6",label:"6ème"},{val:"L7",label:"7ème"}],DENT6:[{val:"L1",label:"1ère"},{val:"L2",label:"2ème"},{val:"L3",label:"3ème"},{val:"L4",label:"4ème"},{val:"L5",label:"5ème"},{val:"L6",label:"6ème"}],PHARM6:[{val:"L1",label:"1ère"},{val:"L2",label:"2ème"},{val:"L3",label:"3ème"},{val:"L4",label:"4ème"},{val:"L5",label:"5ème"},{val:"L6",label:"6ème"}],RES5:[{val:"L1",label:"R1"},{val:"L2",label:"R2"},{val:"L3",label:"R3"},{val:"L4",label:"R4"},{val:"L5",label:"R5"}],INF3:[{val:"L1",label:"1ère"},{val:"L2",label:"2ème"},{val:"L3",label:"3ème"}],SF5:[{val:"L1",label:"1ère"},{val:"L2",label:"2ème"},{val:"L3",label:"3ème"},{val:"L4",label:"4ème"},{val:"L5",label:"5ème"}],LMD:[{val:"L1",label:"L1"},{val:"L2",label:"L2"},{val:"L3",label:"L3"},{val:"M1",label:"M1"},{val:"M2",label:"M2"}]},Ee=t=>H[t]||H.LMD;function Ce(){const[t,s]=c.useState(!1),[a,o]=c.useState(!1),[r,m]=c.useState(!1),[i,h]=c.useState(""),f=te(),[p,y]=c.useState(null),[x,M]=c.useState([]),[D,X]=c.useState([]),[z,k]=c.useState(null),[n,Y]=c.useState(localStorage.getItem("univexam_theme")||"default"),[G,B]=c.useState(!1),[b,Z]=c.useState(null);c.useEffect(()=>{const l=()=>s(window.scrollY>20);return window.addEventListener("scroll",l),Ne().then(j=>{if(!j)return;const ee=[...new Set(j.map(N=>N.category_ar))].filter(Boolean).map(N=>({category:N,icon:e.jsx(P,{size:18,color:"#00f2ff",style:{marginLeft:"8px"}}),items:(j||[]).filter(S=>S.category_ar===N).map(S=>({name:S.name_ar||S.name,id:S.id,years_config:S.years_config}))}));M(ee)}).catch(j=>console.error("Error fetching specialties for menu:",j)),Ie().then(X).catch(console.error),K().then(Z).catch(console.error),n==="rose"?document.body.classList.add("theme-rose"):document.body.classList.remove("theme-rose"),sessionStorage.getItem("univexam_rose_intro_v4")||setTimeout(()=>{B(!0),sessionStorage.setItem("univexam_rose_intro_v4","true"),setTimeout(()=>B(!1),9500)},500),()=>window.removeEventListener("scroll",l)},[n]);const O=()=>{const l=n==="default"?"rose":"default";Y(l),localStorage.setItem("univexam_theme",l)},w=()=>{o(!1),y(null),k(null)},Q=[{to:"/contact",icon:e.jsx(F,{size:18,color:"#00f2ff",style:{marginLeft:"8px"}}),label:"ساهم كأستاذ"},{to:"/files?type=course",icon:e.jsx(P,{size:18,color:"#00f2ff",style:{marginLeft:"8px"}}),label:"دروس الأساتذة"},{to:"/files?type=td",icon:e.jsx(V,{size:18,color:"#00f2ff",style:{marginLeft:"8px"}}),label:"تمارين موجهة (TD)"},{to:"/files?type=exam",icon:e.jsx(A,{size:18,color:"#00f2ff",style:{marginLeft:"8px"}}),label:"بنك الامتحانات"},{to:"/team",icon:e.jsx(E,{size:18,color:"#00f2ff",style:{marginLeft:"8px"}}),label:"الأعضاء الشرفيين (المشرفون)"},{to:"/about",icon:e.jsx(I,{size:18,color:"#00f2ff",style:{marginLeft:"8px"}}),label:"عن المنصة"}];return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"mobile-only-header",style:{position:"fixed",top:0,left:0,right:0,height:"70px",background:"rgba(10, 10, 10, 0.95)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 1.5rem",zIndex:1100,direction:"rtl"},children:[e.jsx("button",{className:"icon-btn mobile-menu-btn",onClick:()=>o(!a),children:a?e.jsx(U,{size:24}):e.jsx(ce,{size:26})}),e.jsxs(d,{to:"/",style:{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none"},children:[e.jsx("span",{style:{fontWeight:900,fontSize:"1.4rem",color:n==="rose"?"#ff1493":"#fff"},children:"UNIVEXAM"}),e.jsx(A,{size:24,style:{color:n==="rose"?"#ff1493":"#00f2ff"}})]}),e.jsx("button",{className:"icon-btn",onClick:()=>f("/search"),children:e.jsx(de,{size:22})})]}),e.jsxs("aside",{className:"sidebar-desktop",style:{position:"fixed",top:0,right:0,bottom:0,width:"340px",background:"rgba(10, 10, 10, 0.98)",borderLeft:"1px solid rgba(0, 242, 255, 0.1)",zIndex:2e3,direction:"rtl",padding:"2.5rem 1.8rem",backdropFilter:"blur(20px)",overflowY:"auto"},children:[e.jsxs("div",{style:{marginBottom:"50px",textAlign:"center"},children:[e.jsxs(d,{to:"/",className:"logo-flying",style:{display:"inline-flex",alignItems:"center",gap:"10px",textDecoration:"none"},children:[(b==null?void 0:b.site_logo)&&e.jsx("img",{src:b.site_logo,alt:"Logo",style:{height:"40px",objectFit:"contain"}}),e.jsx("span",{style:{fontWeight:900,fontSize:"2rem",color:n==="rose"?"#ff1493":"#ffffff"},children:(b==null?void 0:b.site_title)||"UNIVEXAM"}),e.jsx(A,{size:35,className:"cap-icon",style:{color:n==="rose"?"#ff1493":"#00f2ff"}})]}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsxs("button",{onClick:O,className:`theme-pill-glow ${n==="rose"?"rose":""}`,style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"30px",padding:"10px 25px",color:n==="rose"?"#ff1493":"#00f2ff",cursor:"pointer",fontWeight:"bold",display:"flex",alignItems:"center",gap:"10px",margin:"0 auto",transition:"0.3s"},children:[n==="rose"?e.jsx(me,{size:18}):e.jsx(pe,{size:18}),n==="rose"?"الوضع الزهري":"الوضع الليلي"]})})]}),e.jsxs("div",{className:"sidebar-nav-list",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsxs(d,{to:"/",className:"sidebar-link active-link",onClick:()=>f("/"),children:[e.jsx(I,{size:22})," الرئيسية للمنصة"]}),e.jsx("div",{className:"sidebar-section-label",style:{opacity:.6,letterSpacing:"2px",paddingRight:"10px"},children:"المسارات الدراسية"}),x.map((l,g)=>e.jsxs("div",{className:"sidebar-dropdown-group",children:[e.jsxs("div",{className:"sidebar-link dropdown-toggle",style:{background:p===g?"rgba(0, 242, 255, 0.06)":"transparent",borderRight:p===g?"3px solid var(--brand-purple)":"none"},onClick:()=>y(p===g?null:g),children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.icon," ",e.jsx("span",{style:{fontSize:"1.05rem",fontWeight:"800"},children:l.category})]}),e.jsx(L,{size:14,style:{transform:p===g?"rotate(180deg)":"rotate(0)",transition:"0.4s"}})]}),p===g&&e.jsxs("div",{className:"sidebar-submenu",style:{display:"grid",gridTemplateColumns:"1fr",gap:"6px",padding:"10px 0"},children:[l.items.map(j=>e.jsx(d,{to:`/specialties/${j.id}`,className:"sidebar-sublink-card",onClick:()=>y(null),children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{width:"4px",height:"4px",background:"var(--brand-purple)",borderRadius:"50%"}}),j.name]})},j.id)),e.jsx(d,{to:"/specialties",className:"sidebar-sublink more-link",style:{color:"var(--brand-purple)",textAlign:"center",padding:"10px",fontSize:"0.8rem",fontWeight:"bold"},children:"عرض القائمة الكاملة..."})]})]},g)),e.jsx("div",{className:"sidebar-section-label",style:{opacity:.6,letterSpacing:"2px",paddingRight:"10px"},children:"أدوات إضافية"}),e.jsxs(d,{to:"/files",className:"sidebar-link",children:[e.jsx(V,{size:22})," مخزن الملفات PDF"]}),e.jsxs(d,{to:"/team",className:"sidebar-link",children:[e.jsx(E,{size:22})," نخبة المساهمين"]}),e.jsxs(d,{to:"/contact",className:"sidebar-link",children:[e.jsx(F,{size:22})," مركز المراسلة"]}),e.jsxs(d,{to:"/about",className:"sidebar-link",children:[e.jsx(I,{size:22})," التعريف بالمنصة"]})]})]}),e.jsx("button",{onClick:O,title:n==="rose"?"العودة للوضع المظلم":"تفعيل الوضع الزهري للطالبات 🌸",className:`floating-theme-btn ${n==="rose"?"rose-active":""}`,children:n==="rose"?e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontSize:"1.3rem",marginLeft:"10px"},children:"✨"}),e.jsx("span",{style:{fontWeight:"900",fontSize:"1.05rem",letterSpacing:"0.5px"},children:"الوضع العادي"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontSize:"1.3rem",marginLeft:"10px"},children:"🌸"}),e.jsx("span",{style:{fontWeight:"900",fontSize:"1.05rem",letterSpacing:"0.5px"},children:"الوضع الزهري"}),e.jsx("span",{style:{position:"absolute",top:"-10px",right:"-10px",background:"#ff1493",color:"#fff",fontSize:"0.7rem",padding:"3px 8px",borderRadius:"10px",fontWeight:"bold",animation:"pulse 2s infinite"},children:"جديد"})]})}),G&&e.jsx("div",{className:"theme-hint-toast-top",children:e.jsxs("div",{className:"theme-hint-content",children:[e.jsx("span",{className:"sparkle",children:"✨"}),e.jsx("span",{children:"ثيم الرقي مخصص للطالبات 🌸"}),e.jsx("button",{className:"close-hint",onClick:()=>B(!1),children:"×"})]})}),e.jsx("style",{children:`
        .theme-hint-toast-top {
          position: fixed;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          background: rgba(255, 20, 147, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 60px;
          color: #fff;
          font-weight: 900;
          font-size: 1rem;
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.6), 0 10px 40px rgba(255, 20, 147, 0.4);
          animation: slideDown 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, toastGlow 2s infinite alternate;
          pointer-events: auto;
          border: 1px solid rgba(255, 255, 255, 0.3);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-theme-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 200000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 50px;
          border: 1px solid rgba(0, 242, 255, 0.3);
          cursor: pointer;
          color: #fff;
          background: linear-gradient(135deg, #00f2ff, #7b42f6);
          box-shadow: 0 10px 30px rgba(123, 66, 246, 0.4);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .floating-theme-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(123, 66, 246, 0.6);
        }

        .floating-theme-btn.rose-active {
          background: linear-gradient(135deg, #ff1493, #6a0d7b);
          border: 1px solid rgba(255, 20, 147, 0.4);
          box-shadow: 0 10px 30px rgba(255, 20, 147, 0.4);
        }

        .floating-theme-btn.rose-active:hover {
          box-shadow: 0 15px 40px rgba(255, 20, 147, 0.6);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -60px) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes toastGlow {
          from { box-shadow: 0 0 20px rgba(255, 20, 147, 0.6); }
          to { box-shadow: 0 0 40px rgba(255, 20, 147, 0.9); }
        }
        .close-hint {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.2rem;
          cursor: pointer;
          opacity: 0.6;
          margin-right: auto;
        }
        .close-hint:hover { opacity: 1; }
        .sparkle { animation: pulse 1.5s infinite; }
        
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        .logo-flying { display: flex; alignItems: center; gap: 10px; text-decoration: none; font-weight: 900; font-size: 1.8rem; color: #fff; position: relative; }
        .cap-container { position: relative; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; }
        .cap-icon { transition: 0.3s; color: #00f2ff; animation: cap-idle 8s ease-in-out infinite; }
        
        @keyframes cap-idle {
          0%, 100% { transform: translate(0, 0) rotate(0); }
          50% { transform: translate(0, 20px) rotate(-10deg); }
        }

        .sparkle-anim { animation: sparkle-float 2s infinite ease-in-out; }
        @keyframes sparkle-float {
          0%, 100% { transform: scale(1) rotate(0); opacity: 0.8; }
          50% { transform: scale(1.3) rotate(20deg); opacity: 1; }
        }
        
        body.theme-rose .cap-icon { color: #ff1493 !important; }
        .theme-toggle-cap:hover { transform: scale(1.2) rotate(10deg); }
        .active-rose { box-shadow: 0 0 15px rgba(255, 20, 147, 0.5); animation: pulse-rose 2s infinite; }
        @keyframes pulse-rose {
          0% { box-shadow: 0 0 0px rgba(255, 20, 147, 0.4); }
          50% { box-shadow: 0 0 15px rgba(255, 20, 147, 0.7); }
          100% { box-shadow: 0 0 0px rgba(255, 20, 147, 0.4); }
        }
        
        .logo-flying:hover .cap-icon { 
           animation: cap-tossed 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite; 
           filter: drop-shadow(0 0 15px rgba(0, 242, 255, 0.8));
        }
        
        @keyframes cap-tossed {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(40px, -60px) scale(1.2) rotate(45deg); } /* Tossed up and right */
          50% { transform: translate(10px, -110px) scale(0.9) rotate(180deg); } /* Floating high while spinning */
          75% { transform: translate(-30px, -50px) scale(1.1) rotate(240deg); } /* Falling back */
          100% { transform: translate(0, 0) scale(1) rotate(360deg); }
        }

        .vertical-compact-box { 
           width: 260px !important; 
           padding: 0.8rem !important; 
           min-height: auto !important; 
           display: flex !important; 
           flex-direction: column !important;
           background: rgba(10, 10, 10, 0.98) !important;
           border: 1px solid rgba(0, 242, 255, 0.2) !important;
           box-shadow: 0 10px 30px rgba(0, 242, 255, 0.1) !important;
        }
        .dropdown-label { padding: 0.8rem; border-bottom: 1px solid var(--glass-border); fontWeight: bold; color: #00f2ff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px; }
        .nav-dropdown-item { padding: 12px 15px !important; border-radius: 10px !important; transition: 0.3s; color: #ccc !important; text-decoration: none !important; display: block !important; }
        .nav-dropdown-item:hover { background: rgba(0, 242, 255, 0.08) !important; color: #00f2ff !important; transform: translateX(-5px); }

        /* Mobile Menu Beauty Fix */
        .mobile-item-card {
           background: rgba(255,255,255,0.03);
           border: 1px solid var(--glass-border);
           border-radius: 18px;
           padding: 1.2rem;
           margin-bottom: 12px;
           transition: 0.3s;
        }
        .mobile-year-btn {
           flex: 1 1 calc(25% - 8px);
           background: linear-gradient(135deg, #7b42f6, #00f2ff);
           color: #fff;
           text-align: center;
           padding: 8px;
           border-radius: 10px;
           font-weight: bold;
           font-size: 0.8rem;
           text-decoration: none;
           min-width: 50px;
        }

        /* Rose Overrides for Dynamic Elements */
        body.theme-rose .mobile-link-active { background: rgba(255, 20, 147, 0.1) !important; color: #ff1493 !important; }
        body.theme-rose .mobile-menu-header-logo { color: #ff1493 !important; }
        body.theme-rose .vertical-compact-box { background: #ffffff !important; border-color: rgba(255, 20, 147, 0.2) !important; box-shadow: 0 10px 30px rgba(255, 20, 147, 0.1) !important; }
        body.theme-rose .dropdown-label { color: #ff1493 !important; }
        body.theme-rose [color="#00f2ff"] { color: #ff1493 !important; }
        body.theme-rose .mobile-year-btn { background: linear-gradient(135deg, #ff1493, #ff69b4) !important; }

      `}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mobile-overlay",onClick:w}),e.jsxs("div",{className:"mobile-menu",style:{direction:"rtl",textAlign:"right"},children:[e.jsxs("div",{className:"mobile-menu-header",style:{padding:"1.5rem",borderBottom:"1px solid var(--glass-border)",display:"flex",justifyContent:"space-between"},children:[e.jsxs("div",{className:"mobile-menu-header-logo",style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f2ff"},children:[(b==null?void 0:b.site_logo)&&e.jsx("img",{src:b.site_logo,alt:"Logo",style:{height:"28px"}}),e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:(b==null?void 0:b.site_title)||"UNIVEXAM"})]}),e.jsx("button",{className:"icon-btn",onClick:w,children:e.jsx(U,{size:26})})]}),e.jsxs("div",{className:"mobile-menu-scroll",style:{padding:"1.2rem",paddingBottom:"3rem",overflowY:"auto",flex:1},children:[z===null&&p===null&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{onClick:O,className:"mobile-link",style:{background:n==="rose"?"rgba(255, 20, 147, 0.1)":"rgba(0, 242, 255, 0.1)",color:n==="rose"?"#ff1493":"#00f2ff",marginBottom:"10px",border:n==="rose"?"1px solid rgba(255, 20, 147, 0.2)":"1px solid rgba(0, 242, 255, 0.2)",textAlign:"center",fontWeight:"bold"},children:n==="rose"?"🌸 العودة للوضع العادي":"🌸 تفعيل الوضع الزهري"}),e.jsxs(d,{to:"/",className:`mobile-link ${n==="rose"?"mobile-link-active":""}`,onClick:w,style:{background:"rgba(0, 242, 255, 0.05)",color:n==="rose"?"#ff1493":"#00f2ff"},children:[e.jsx(I,{size:18})," الرئيسية"]}),e.jsxs("div",{onClick:()=>k("specialties"),className:`mobile-link ${n==="rose"?"mobile-link-active":""}`,style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsx(P,{size:18,color:"#00f2ff"})," التخصصات"]}),e.jsx(L,{size:14,style:{transform:"rotate(-90deg)"}})]}),e.jsxs("div",{onClick:()=>k("universities"),className:`mobile-link ${n==="rose"?"mobile-link-active":""}`,style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsx(fe,{size:18,color:"#00f2ff"})," الجامعات"]}),e.jsx(L,{size:14,style:{transform:"rotate(-90deg)"}})]}),e.jsxs("div",{onClick:()=>k("professors"),className:`mobile-link ${n==="rose"?"mobile-link-active":""}`,style:{display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:[e.jsx(E,{size:18,color:"#00f2ff"})," فضاء الأساتذة"]}),e.jsx(L,{size:14,style:{transform:"rotate(-90deg)"}})]}),e.jsxs(d,{to:"/contact",className:`mobile-link ${n==="rose"?"mobile-link-active":""}`,onClick:w,children:[e.jsx(F,{size:18,color:"#00f2ff"})," اتصل بنا"]}),e.jsxs(d,{to:"/team",className:"mobile-link",onClick:w,style:{background:n==="rose"?"rgba(255, 20, 147, 0.1)":"rgba(123, 66, 246, 0.1)",border:n==="rose"?"1px solid #ff1493":"1px solid #7b42f6",color:n==="rose"?"#ff1493":"#7b42f6",marginTop:"1rem"},children:[e.jsx(E,{size:18})," طاقم القيادة"]})]}),z==="specialties"&&p===null&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>k(null),style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f2ff",background:"none",border:"none",fontWeight:"bold",marginBottom:"1.5rem",fontSize:"1.1rem"},children:[e.jsx(C,{size:20})," العودة"]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:x.map((l,g)=>e.jsxs("div",{onClick:()=>y(g),className:"mobile-link",style:{display:"flex",justifyContent:"space-between",padding:"16px"},children:[e.jsxs("span",{style:{fontWeight:"800"},children:[l.icon," ",l.category]}),e.jsx(L,{size:14,style:{transform:"rotate(-90deg)"}})]},g))})]}),z==="specialties"&&p!==null&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>y(null),style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f2ff",background:"none",border:"none",fontWeight:"bold",marginBottom:"1.5rem",fontSize:"1.1rem"},children:[e.jsx(C,{size:20})," العودة للتصنيفات"]}),e.jsx("h3",{style:{marginBottom:"1.2rem",borderRight:"4px solid #00f2ff",paddingRight:"12px"},children:x[p].category}),x[p].items.map(l=>e.jsxs("div",{className:"mobile-item-card",children:[e.jsx("div",{style:{fontWeight:"900",fontSize:"1.1rem",marginBottom:"12px",color:"#fff"},children:l.name}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:Ee(l.years_config).map(g=>e.jsx(d,{to:`/specialties/${l.id}?year=${g.val}`,onClick:w,className:"mobile-year-btn",children:g.label},g.val))})]},l.id))]}),z==="universities"&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>k(null),style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f2ff",background:"none",border:"none",fontWeight:"bold",marginBottom:"1.5rem"},children:[e.jsx(C,{size:20})," العودة"]}),D.map(l=>e.jsxs(d,{to:`/universities/${l.id}`,className:"mobile-link",onClick:w,style:{marginBottom:"8px"},children:["🏛️ ",l.name_ar]},l.id))]}),z==="professors"&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>k(null),style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f2ff",background:"none",border:"none",fontWeight:"bold",marginBottom:"1.5rem"},children:[e.jsx(C,{size:20})," العودة"]}),Q.map(l=>e.jsxs(d,{to:l.to,className:"mobile-link",onClick:w,style:{marginBottom:"8px"},children:[l.icon," ",l.label]},l.to))]})]})]})]})]})}function Ae(){const[t,s]=c.useState({contact_email:"admin@univexam.dz",site_location:"الجزائر العاصمة",important_links:[{label:"من نحن (About Us)",url:"/about"},{label:"اتصل بنا (Contact Us)",url:"/contact"},{label:"انضم لفريقنا (Join Us)",url:"/contact?type=apply"},{label:"المساهمة بملفات",url:"/contact"},{label:"مركز المساعدة",url:"/contact"},{label:"لوحة التحكم",url:"/benghouthiads"}]});return c.useEffect(()=>{K().then(a=>{if(a){let o=t.important_links;try{a.important_links&&(o=JSON.parse(a.important_links))}catch(r){console.error("Failed to parse links from DB:",r)}s({contact_email:a.contact_email||"admin@univexam.dz",site_location:a.site_location||"الجزائر العاصمة",important_links:Array.isArray(o)?o:t.important_links})}}).catch(console.error)},[]),e.jsx("footer",{className:"footer",style:{borderTop:"1px solid var(--glass-border)",marginTop:"4rem",background:"linear-gradient(to bottom, transparent, rgba(123, 66, 246, 0.05))"},children:e.jsxs("div",{className:"container",style:{paddingTop:"4rem",paddingBottom:"2rem"},children:[e.jsxs("div",{className:"footer-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"3rem"},children:[e.jsxs("div",{className:"footer-brand-col",children:[e.jsxs(d,{to:"/",className:"logo",style:{marginBottom:"1.5rem",display:"inline-flex",fontSize:"1.8rem"},children:[e.jsx(A,{size:36}),e.jsx("span",{children:"UNIVEXAM"})]}),e.jsx("p",{className:"footer-desc",style:{color:"var(--text-secondary)",lineHeight:"1.8",marginBottom:"1.5rem",maxWidth:"350px"},children:"نحن هنا لمساعدة الطالب الجزائري في الوصول إلى أفضل المصادر التعليمية والجامعية مجاناً. منصتكم الأولى للنجاح والتميز."}),e.jsxs("div",{className:"social-links",style:{display:"flex",gap:"1rem"},children:[e.jsx("a",{href:"#",className:"social-icon",children:e.jsx(xe,{size:20})}),e.jsx("a",{href:"#",className:"social-icon",children:e.jsx(ge,{size:20})}),e.jsx("a",{href:"#",className:"social-icon",children:e.jsx(he,{size:20})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"footer-heading",style:{color:"var(--text-primary)",marginBottom:"1.5rem",position:"relative",paddingRight:"1rem",borderRight:"3px solid var(--brand-purple)"},children:"تخصصاتنا"}),e.jsxs("ul",{className:"footer-links",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem"},children:[e.jsx("li",{children:e.jsx(d,{to:"/files",children:"إعلام آلي"})}),e.jsx("li",{children:e.jsx(d,{to:"/files",children:"علوم طبية"})}),e.jsx("li",{children:e.jsx(d,{to:"/files",children:"حقوق"})}),e.jsx("li",{children:e.jsx(d,{to:"/files",children:"هندسة"})}),e.jsx("li",{children:e.jsx(d,{to:"/files",children:"اقتصاد"})}),e.jsx("li",{children:e.jsx(d,{to:"/files",children:"رياضيات"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"footer-heading",style:{color:"var(--text-primary)",marginBottom:"1.5rem",position:"relative",paddingRight:"1rem",borderRight:"3px solid var(--brand-purple)"},children:"روابط تهمك"}),e.jsx("ul",{className:"footer-links",children:t.important_links.map((a,o)=>e.jsx("li",{children:(a.url||"").startsWith("http")?e.jsx("a",{href:a.url,target:"_blank",rel:"noreferrer",children:a.label}):e.jsx(d,{to:a.url,children:a.label})},o))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"footer-heading",style:{color:"var(--text-primary)",marginBottom:"1.5rem",position:"relative",paddingRight:"1rem",borderRight:"3px solid var(--brand-purple)"},children:"تواصل معنا"}),e.jsxs("div",{className:"footer-contact-info",style:{display:"flex",flexDirection:"column",gap:"1rem",color:"var(--text-secondary)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(be,{size:16,color:"var(--brand-purple)"})," ",t.contact_email]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(ue,{size:16,color:"var(--brand-purple)"})," ",t.site_location]}),e.jsx("div",{style:{marginTop:"1rem"},children:e.jsx(d,{to:"/contact",className:"btn-primary",style:{fontSize:"0.9rem",padding:"0.6rem 1.2rem"},onClick:()=>window.scrollTo(0,0),children:"أرسل لنا رسالة"})})]})]})]}),e.jsx("div",{className:"footer-bottom",style:{marginTop:"4rem",paddingTop:"2rem",borderTop:"1px solid var(--glass-border)",textAlign:"center"},children:e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"1.1rem",fontWeight:"900"},children:"جميع الحقوق محفوظة - UNIVEXAM 2026©"})})]})})}const Re=c.lazy(()=>_(()=>import("./Home-DLsmhAFU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Te=c.lazy(()=>_(()=>import("./FilesPage-CYHhmmWg.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]))),Me=c.lazy(()=>_(()=>import("./SpecialtyPage-BryHFpYa.js"),__vite__mapDeps([9,1,2,3,4,5,6,7]))),De=c.lazy(()=>_(()=>import("./ModeratorsPage-Du5ZRSF1.js"),__vite__mapDeps([10,1,2,4,5,6,7]))),Be=c.lazy(()=>_(()=>import("./Contact-Jf3eLMBI.js"),__vite__mapDeps([11,1,2,6,7]))),Oe=c.lazy(()=>_(()=>import("./SearchPage-LFSgBELd.js"),__vite__mapDeps([12,1,2,3,4,5,6,7]))),Pe=c.lazy(()=>_(()=>import("./About-DsUaMiCt.js"),__vite__mapDeps([13,1,2,4,7,6]))),Fe=c.lazy(()=>_(()=>import("./AdminPage-BdoDuezH.js"),__vite__mapDeps([14,1,2,4,5,6,7]))),We=c.lazy(()=>_(()=>import("./ModeratorPortal-WNTVhmdd.js"),__vite__mapDeps([15,1,2,4,6,7]))),$e=()=>e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#050505",color:"#7b42f6",fontSize:"1.2rem",fontWeight:"bold"},children:e.jsx("div",{className:"loader-glitch",children:"جار التحميل..."})});function Ue(){const t=ae(),s=t.pathname.startsWith("/benghouthiads")||t.pathname.startsWith("/admin");return e.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:"#050505",color:"#fff"},children:[!s&&e.jsx(Ce,{}),e.jsx("main",{style:{flex:1,...s?{maxWidth:"none",width:"100%",margin:0,padding:0}:{}},children:e.jsx(c.Suspense,{fallback:e.jsx($e,{}),children:e.jsxs(re,{children:[e.jsx(v,{path:"/",element:e.jsx(Re,{})}),e.jsx(v,{path:"/files",element:e.jsx(Te,{})}),e.jsx(v,{path:"/specialties/:id",element:e.jsx(Me,{})}),e.jsx(v,{path:"/search",element:e.jsx(Oe,{})}),e.jsx(v,{path:"/team",element:e.jsx(De,{})}),e.jsx(v,{path:"/contact",element:e.jsx(Be,{})}),e.jsx(v,{path:"/about",element:e.jsx(Pe,{})}),e.jsx(v,{path:"/benghouthiads",element:e.jsx(Fe,{})}),e.jsx(v,{path:"/admin",element:e.jsx(oe,{to:"/benghouthiads",replace:!0})}),e.jsx(v,{path:"/moderator",element:e.jsx(We,{})})]})})}),!s&&e.jsx(Ae,{})]})}function Ve(){return e.jsx(se,{children:e.jsx(Ue,{})})}localStorage.getItem("univexam_theme")==="rose"&&document.body.classList.add("theme-rose");ie.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(Ve,{})}));export{lt as B,Ae as F,Ce as N,_,Ne as a,K as b,Ze as c,et as d,tt as e,Qe as f,Ge as g,ot as h,rt as i,at as j,ct as k,Se as l,ke as m,nt as n,Ie as o,st as p,Ye as r,u as s,it as u};

