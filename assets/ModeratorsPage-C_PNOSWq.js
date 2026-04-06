import{r as t,i as c,b as x,j as e,N as g,k as f}from"./index-Dxsf2Sy4.js";import{V as o}from"./VerifiedBadge-1roKhwqg.js";import{f as h}from"./utils-DP6C5xlZ.js";import{T as n}from"./trophy-BYl9eO0T.js";function w(){const[d,s]=t.useState([]),[i,l]=t.useState(null),[b,m]=t.useState(!0);t.useEffect(()=>{p()},[]);async function p(){try{const[r,a]=await Promise.all([c(),x()]);s(r||[]),a&&l({name:a.admin_name||"Ghouthi Admin",role:a.admin_role||"المدير العام للمنصة",avatar:a.admin_avatar||"https://framerusercontent.com/images/S5jF9vH02WBygZ2W5G6W8Yv6V8.jpg",badge:a.admin_badge||"diamond"})}catch(r){console.error(r)}m(!1)}return e.jsxs("div",{className:"moderators-container",children:[e.jsx(g,{}),e.jsxs("main",{className:"mods-main-content",children:[e.jsxs("header",{className:"mods-header",children:[e.jsx("h1",{className:"hero-title-gradient",children:"المسؤولين والمشرفين"}),e.jsx("p",{className:"mods-subtitle",children:"النخبة المساهمة في بناء وتطوير محتوى المنصة بكل احترافية"})]}),e.jsxs("section",{className:"mods-grid-container",children:[i&&e.jsxs("div",{className:"admin-profile-card",children:[e.jsx("div",{className:"hover-diamond-effect"}),e.jsx("img",{src:i.avatar,style:{width:"100px",height:"100px",borderRadius:"50%",objectFit:"cover",border:"3px solid var(--brand-purple)",margin:"0 auto 1.2rem",display:"block",position:"relative",zIndex:2}}),e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"0.4rem",position:"relative",zIndex:2,whiteSpace:"nowrap"},children:[i.name,e.jsx(o,{size:22,type:i.badge||"diamond"})]}),e.jsx("div",{style:{color:"var(--brand-cyan)",fontWeight:"bold",fontSize:"1rem",position:"relative",zIndex:2,marginBottom:"10px"},children:"👑 المؤسس والمدير العام"}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",lineHeight:"1.6",position:"relative",zIndex:2,marginBottom:"15px",maxWidth:"400px",margin:"0 auto"},children:"طالب جامعي تخصص رياضيات ماستر 1، مؤسس هذه المنصة لمساعدة الطلبة وجمع كل المصادر في مكان واحد بكل موثوقية."}),e.jsxs("div",{className:"mod-exp-badge-admin",style:{marginTop:"10px",position:"relative",zIndex:2,background:"linear-gradient(135deg, rgba(123, 66, 246, 0.4), rgba(0, 242, 255, 0.4))",color:"#fff",border:"1px solid #7b42f6",fontSize:"1.1rem",padding:"12px 30px",borderRadius:"30px",fontWeight:"900",display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(n,{size:20})," 1.2M نقطة كفاءة"]})]}),(d||[]).map(r=>e.jsxs("div",{className:"mod-profile-card",children:[e.jsx("img",{src:r.avatar_url||"https://via.placeholder.com/100",style:{width:"90px",height:"90px",borderRadius:"50%",objectFit:"cover",border:"3px solid var(--glass-border)",margin:"0 auto 1.2rem",display:"block"}}),e.jsxs("h3",{style:{fontSize:"1.1rem",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"0.4rem",whiteSpace:"nowrap"},children:[r.name,r.verified&&e.jsx(o,{size:18,type:r.diamond_verified?"diamond":r.gold_verified?"gold":"blue"})]}),e.jsxs("div",{className:"mod-exp-badge",children:[e.jsx(n,{size:14})," ",h(r.points||0)," نقطة مساهمة"]}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"0.8rem",lineHeight:"1.4"},children:"مشرف مساهم معتمد في إثراء المحتوى الأكاديمي"})]},r.id))]})]}),e.jsx(f,{}),e.jsx("style",{children:`
        .moderators-container {
           background: #050505;
           min-height: 100vh;
           color: #fff;
           font-family: 'Inter', sans-serif;
           direction: rtl;
        }
        .mods-main-content { padding: 120px 5% 80px; max-width: 1400px; margin: 0 auto; }
        .mods-header { text-align: center; marginBottom: 60px; }
        .hero-title-gradient { font-size: 3.5rem; font-weight: 900; background: linear-gradient(135deg, #fff 0%, #7b42f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; }
        .mods-subtitle { color: #888; font-size: 1.1rem; }
        
        .mods-grid-container {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
           gap: 30px;
           margin-top: 50px;
           justify-content: center;
        }
        
        .admin-profile-card, .mod-profile-card {
           background: rgba(10, 10, 10, 0.6);
           border: 2px solid #00f2ff;
           border-radius: 40px;
           padding: 40px 30px;
           text-align: center;
           position: relative;
           overflow: hidden;
           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
           backdrop-filter: blur(15px);
           box-shadow: 0 0 15px rgba(0, 242, 255, 0.1), inset 0 0 20px rgba(0, 242, 255, 0.05);
        }
        
        .admin-profile-card { 
          grid-column: 1 / -1; 
          max-width: 600px; 
          margin: 0 auto 60px; 
          border-width: 3px;
          border-color: #00f2ff;
          box-shadow: 0 0 30px rgba(0, 242, 255, 0.3), inset 0 0 40px rgba(0, 242, 255, 0.1);
        }
        
        .admin-profile-card:hover, .mod-profile-card:hover {
           transform: translateY(-12px) scale(1.02);
           border-color: #00f2ff;
           box-shadow: 0 0 50px rgba(0, 242, 255, 0.5), inset 0 0 30px rgba(0, 242, 255, 0.2);
        }
        
        .mod-exp-badge {
           display: inline-flex;
           align-items: center;
           gap: 6px;
           background: rgba(245,158,11,0.15);
           color: #f59e0b;
           padding: 6px 15px;
           border-radius: 20px;
           font-size: 0.82rem;
           font-weight: 800;
           margin-top: 8px;
        }
        
        .hover-diamond-effect {
           position: absolute;
           top: -50%;
           left: -50%;
           width: 200%;
           height: 200%;
           background: radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 60%);
           opacity: 0;
           transition: opacity 0.5s;
        }
        .admin-profile-card:hover .hover-diamond-effect { opacity: 1; }
        
        @media (max-width: 768px) {
           .hero-title-gradient { font-size: 2.5rem; }
           .mods-main-content { padding-top: 100px; }
           .mods-grid-container { grid-template-columns: 1fr; gap: 20px; }
           .admin-profile-card { padding: 30px 20px; border-radius: 30px; }
        }
      `})]})}export{w as default};
