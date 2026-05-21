"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import CortexMarqueeSection from "@/components/Home/scrollCards";
import ServicesSection from "@/components/Home/services";
import ProcessSection from "@/components/Home/processZigzag";
import GlobalSection from "@/components/Home/globalsection";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });

/* ══════════════════════════════════════
   GLOBAL STYLES
══════════════════════════════════════ */
const STYLES = `


  @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:.25} }
  @keyframes floatUp  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes mleft    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes mright   { from{transform:translateX(-50%)} to{transform:translateX(0)} }
  @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes lineGrow { from{scaleY:0} to{scaleY:1} }
  @keyframes popDot   { 0%{transform:scale(0)} 70%{transform:scale(1.25)} 100%{transform:scale(1)} }
  @keyframes bgShift  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes pulseRing{ 0%{box-shadow:0 0 0 0 rgba(37,99,235,0.3)} 100%{box-shadow:0 0 0 20px rgba(37,99,235,0)} }

  .ha1{animation:fadeUp .7s ease .10s both}
  .ha2{animation:fadeUp .8s ease .20s both}
  .ha3{animation:fadeUp .8s ease .35s both}
  .ha4{animation:fadeUp .8s ease .50s both}
  .ha5{animation:fadeUp .8s ease .65s both}
  .pip{animation:blink 2s infinite}
  .float-a{animation:floatUp 5s ease-in-out infinite}
  .float-b{animation:floatUp 5s ease-in-out 1.8s infinite}
  .float-c{animation:floatUp 6s ease-in-out 0.9s infinite}
  .spin-slow{animation:spinSlow 22s linear infinite}
  .pulse-ring{animation:pulseRing 2s ease-out infinite}

  .grad-text {
    background: linear-gradient(90deg,#60a5fa,#818cf8,#60a5fa);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  /* Marquee */
  .ml-wrap { overflow: hidden; }
  .ml-track { display:flex; width:max-content; animation:mleft 40s linear infinite; }
  .mr-track { display:flex; width:max-content; animation:mright 40s linear infinite; }
  .ml-track:hover,.mr-track:hover { animation-play-state:paused; }

  /* Diagonal section */
  .diag-top    { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
  .diag-bottom { clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 100%); margin-top:-60px; }

  /* Process connector */
  .proc-line { transform-origin: top; animation: lineGrow 1s cubic-bezier(.16,1,.3,1) both; }

  /* Folder tab card */
  .folder-tab {
    border-radius: 0 16px 16px 16px;
    position: relative;
  }
  .folder-tab::before {
    content:'';
    position: absolute;
    top: -26px; left: 0;
    width: 90px; height: 26px;
    background: inherit;
    border-radius: 10px 10px 0 0;
  }

  /* Ghost number behind service rows */
  .ghost-num {
    position: absolute;
    font-size: 100px;
    font-weight: 900;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(37,99,235,0.08);
    right: 0; top: -16px;
    pointer-events: none;
    font-family: 'Syne', sans-serif;
    user-select: none;
  }

  /* Cortex card accent bar */
  .cortex-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #818cf8);
    border-radius: 16px 16px 0 0;
  }

  /* Gradient mesh bg */
  .mesh-bg {
    background:
      radial-gradient(ellipse at 10% 50%, rgba(37,99,235,0.08) 0%, transparent 60%),
      radial-gradient(ellipse at 90% 20%, rgba(129,140,248,0.07) 0%, transparent 50%),
      #f8fafc;
  }

  /* Stagger items utility */
  .stagger-1 { transition-delay: 0ms !important; }
  .stagger-2 { transition-delay: 80ms !important; }
  .stagger-3 { transition-delay: 160ms !important; }
  .stagger-4 { transition-delay: 240ms !important; }

  /* Orbit rings on cortex section */
  .orbit-ring-1 {
    width: 380px; height: 380px;
    border: 1px dashed rgba(37,99,235,0.12);
    border-radius: 50%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    animation: spinSlow 30s linear infinite;
  }
  .orbit-ring-2 {
    width: 560px; height: 560px;
    border: 1px solid rgba(37,99,235,0.06);
    border-radius: 50%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    animation: spinSlow 50s linear infinite reverse;
  }

  .cta-noise::before {
    content:'';
    position:absolute; inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 200px;
    pointer-events:none; z-index:0; border-radius:inherit;
  }

  @media(max-width:768px) {
    .ghost-num { display:none; }
    .orbit-ring-1,.orbit-ring-2 { display:none; }
  }
`;

/* ── Hooks ── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, v };
}

function useParallax(multiplier = 0.18) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        const mid = (r.top + r.height / 2 - window.innerHeight / 2);
        ref.current.style.transform = `translateY(${mid * multiplier}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [multiplier]);
  return ref;
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, v } = useReveal();
  useEffect(() => {
    if (!v) return;
    let n = 0;
    const step = to / 55;
    const id = setInterval(() => {
      n += step;
      if (n >= to) { setVal(to); clearInterval(id); } else setVal(Math.floor(n));
    }, 18);
    return () => clearInterval(id);
  }, [v, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function R({ children, d = 0, from = "bottom" }: {
  children: React.ReactNode; d?: number; from?: "bottom"|"left"|"right";
}) {
  const { ref, v } = useReveal();
  const t: Record<string, string> = {
    bottom: "translateY(44px)", left: "translateX(-52px)", right: "translateX(52px)",
  };
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "none" : t[from],
      transition: `opacity 0.85s ease ${d}ms, transform 0.9s cubic-bezier(.16,1,.3,1) ${d}ms`,
    }}>
      {children}
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:8,
      background:"#2563eb", color:"#fff",
      fontSize:11, fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase",
      padding:"6px 16px", borderRadius:999,
    }}>
      <span className="pip" style={{ width:6, height:6, borderRadius:"50%", background:"rgba(255,255,255,0.55)", display:"inline-block" }} />
      {label}
    </span>
  );
}

function SHead({ tag, h, sub, dark=false }: { tag:string; h:React.ReactNode; sub?:string; dark?:boolean }) {
  return (
    <R>
      <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
        <Tag label={tag} />
        <div style={{
          marginTop:"1.1rem",
          fontFamily:"'Syne', sans-serif",
          fontSize:"clamp(2rem,4vw,3.2rem)",
          fontWeight:800, lineHeight:1.1,
          letterSpacing:"-0.03em",
          color: dark ? "#fff" : "#0f172a",
        }}>
          {h}
        </div>
        {sub && <p style={{ marginTop:"0.75rem", fontSize:15, color: dark ? "#94a3b8":"#64748b", maxWidth:480, margin:"0.75rem auto 0", lineHeight:1.7 }}>{sub}</p>}
      </div>
    </R>
  );
}

const W = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", ...style }}>{children}</div>
);

/* ══════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════ */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  const scrollY = useScrollY();
  const parallaxRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = `scale(1.1) translateY(${scrollY * 0.25}px)`;
    }
  }, [scrollY]);

  return (
    <section style={{ position:"relative", minHeight:"100svh", display:"flex", alignItems:"center", overflow:"hidden", background:"#020817" }}>
      <video ref={parallaxRef} autoPlay loop muted playsInline onCanPlay={() => setLoaded(true)}
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0, opacity: loaded ? 0.3 : 0, transition:"opacity 2s ease", transformOrigin:"center" }}>
        <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4"/>
      </video>

      {/* layered overlays */}
      <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(135deg,rgba(2,8,23,0.97) 0%,rgba(29,78,216,0.2) 55%,rgba(2,8,23,0.98) 100%)" }} />
      <div style={{ position:"absolute", zIndex:1, width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 70%)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", filter:"blur(40px)" }} />

     


      {/* hero copy */}
      <W style={{ position:"relative", zIndex:5, textAlign:"center", paddingTop:130, paddingBottom:110 }}>
        <div className="ha1" style={{ marginBottom:20 }}><Tag label="Intelligence That Accelerates Growth"/></div>

        <h1 className="ha2" style={{
          fontFamily:"'Syne',sans-serif",
          fontSize:"clamp(3rem,7.5vw,7rem)",
          fontWeight:550, lineHeight:1.0,
          letterSpacing:"-0.04em", color:"#fff", marginBottom:"1.25rem",
        }}>
          Transform Your Business<br/>With <span className="grad-text">AI & Data</span>
        </h1>

        <p className="ha3" style={{ fontSize:"clamp(15px,1.8vw,18px)", fontWeight:300, color:"rgba(255,255,255,0.5)", maxWidth:520, margin:"0 auto 2.5rem", lineHeight:1.75 }}>
          AIST delivers enterprise-grade AI, cloud modernisation, and data engineering — from strategy to production, in weeks not months.
        </p>

        <div className="ha4" style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
          <button style={{ background:"#2563eb", color:"#fff", border:"none", borderRadius:999, padding:"15px 32px", fontSize:15, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"inherit", transition:"all .25s", boxShadow:"0 0 40px rgba(37,99,235,0.4)" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.boxShadow="0 8px 30px rgba(37,99,235,0.6)";(e.currentTarget as HTMLButtonElement).style.transform="translateY(-2px)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.boxShadow="0 0 40px rgba(37,99,235,0.4)";(e.currentTarget as HTMLButtonElement).style.transform="translateY(0)";}}>
            Start Your Journey
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button style={{ background:"transparent", color:"rgba(255,255,255,0.7)", border:"2px solid rgba(255,255,255,0.15)", borderRadius:999, padding:"15px 32px", fontSize:15, fontWeight:500, cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"inherit", transition:"all .2s" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor="rgba(255,255,255,0.5)";(e.currentTarget as HTMLButtonElement).style.color="#fff";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor="rgba(255,255,255,0.15)";(e.currentTarget as HTMLButtonElement).style.color="rgba(255,255,255,0.7)";}}>
            ▶ Watch Demo
          </button>
        </div>

        <div className="ha5" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginTop:"2.5rem" }}>
          <div style={{ display:"flex" }}>
            {["photo-1531123897727-8f129e1bf98a","photo-1507003211169-0a1dd7228f2d","photo-1500648767791-00dcc994a43e"].map((id,i)=>(
              <img key={id} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=80&q=80`} alt=""
                style={{ width:34, height:34, borderRadius:"50%", border:"2px solid #020817", objectFit:"cover", marginLeft:i===0?0:-9 }}/>
            ))}
          </div>
          <div style={{ textAlign:"left" }}>
            <div style={{ color:"#60a5fa", fontSize:13, letterSpacing:2 }}>★★★★★</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Rated <strong style={{ color:"#fff" }}>4.9</strong> by 200+ enterprise clients</div>
          </div>
        </div>
      </W>

      {/* bottom fade */}
    </section>
  );
}

/* ── Press Marquee ── */
function PressBar() {
  const clients = ["Westpac","Telstra","ANZ Bank","Atlassian","Canva","Deloitte","Microsoft","AWS","Salesforce","Oracle","SAP","Cisco"];
  const doubled = [...clients,...clients];
  return (
    <div style={{ background:"#fff", borderBottom:"1px solid #f1f5f9", padding:"18px 0", overflow:"hidden" }}>
      <div className="ml-track">
        {doubled.map((n,i)=>(
          <span key={i} style={{ padding:"0 36px", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#cbd5e1", whiteSpace:"nowrap", transition:"color .2s", cursor:"default" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#94a3b8")}
            onMouseLeave={e=>(e.currentTarget.style.color="#cbd5e1")}>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   SECTION 2 — STATS MOSAIC
══════════════════════════════════════ */
function StatsSection() {
  const statData = [
    { val:180, suf:"+", label:"AI Solutions Delivered", sub:"Personalised to each enterprise", bg:"#1d4ed8", tc:"#fff", lc:"rgba(255,255,255,0.65)", sc:"rgba(255,255,255,0.4)", dc:"rgba(255,255,255,0.4)" },
    { val:2400000, suf:"", label:"Businesses Empowered", sub:"Across Australia & GCC", bg:"#fff", tc:"#0f172a", lc:"#64748b", sc:"#94a3b8", dc:"#2563eb" },
    { val:92, suf:"%", label:"Faster Delivery Rate", sub:"Vs. traditional dev lifecycle", bg:"#0f172a", tc:"#fff", lc:"#94a3b8", sc:"#475569", dc:"#3b82f6" },
    { val:98, suf:"%", label:"Client Satisfaction", sub:"Measured across all engagements", bg:"#eff6ff", tc:"#0f172a", lc:"#475569", sc:"#94a3b8", dc:"#2563eb" },
  ];

  return (
    <section style={{ background:"#f8fafc", padding:"96px 0" }}>
      <W>
        <SHead tag="Why Choose Us" h={<>Redefining Enterprise Technology<br/><span style={{ color:"#94a3b8" }}>Through Hyper-Personalised AI</span></>}/>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
          {statData.map((s,i)=>(
            <R key={i} d={i*75}>
              <div style={{ background:s.bg, borderRadius:20, padding:"2rem 1.75rem", minHeight:190, display:"flex", flexDirection:"column", justifyContent:"space-between", border:"1px solid rgba(0,0,0,0.06)", transition:"all .3s", cursor:"default" }}
                onMouseEnter={e=>{const el=e.currentTarget;el.style.transform="translateY(-5px)";el.style.boxShadow="0 24px 60px rgba(0,0,0,0.1)";}}
                onMouseLeave={e=>{const el=e.currentTarget;el.style.transform="translateY(0)";el.style.boxShadow="none";}}>
                <div>
                  <span style={{ width:8, height:8, borderRadius:"50%", background:s.dc, display:"inline-block", marginBottom:10 }}/>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"2.8rem", fontWeight:800, color:s.tc, letterSpacing:"-0.04em", lineHeight:1 }}>
                    <Counter to={s.val} suffix={s.suf}/>
                  </div>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.07em", color:s.lc, marginTop:6 }}>{s.label}</div>
                </div>
                <p style={{ fontSize:12, color:s.sc, lineHeight:1.55, marginTop:8 }}>{s.sub}</p>
              </div>
            </R>
          ))}
        </div>
      </W>
    </section>
  );
}



/* ══════════════════════════════════════
   SECTION 5 — INDUSTRIES (Marquee rows)
══════════════════════════════════════ */
const INDUSTRIES = [
  { name:"Government & Public Sector", icon:"🏛️" },
  { name:"Banking & Financial Services", icon:"🏦" },
  { name:"Healthcare", icon:"🏥" },
  { name:"Retail & E-Commerce", icon:"🛒" },
  { name:"Logistics & Supply Chain", icon:"🚚" },
  { name:"Education", icon:"🎓" },
  { name:"Real Estate", icon:"🏢" },
  { name:"Telecommunications", icon:"📡" },
  { name:"Manufacturing", icon:"🏭" },
  { name:"Enterprise Technology", icon:"💻" },
];

function IndustriesSection() {
  const row1 = [...INDUSTRIES,...INDUSTRIES];
  const row2 = [...[...INDUSTRIES].reverse(),...[...INDUSTRIES].reverse()];
  const paralRef = useParallax(-0.1);
  return (
    <section style={{ background:"#fff", padding:"100px 0", overflow:"hidden", position:"relative" }}>
      <div ref={paralRef} style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 50%,rgba(37,99,235,0.04) 0%,transparent 60%)", pointerEvents:"none" }}/>
      <W style={{ marginBottom:"3.5rem" }}>
        <SHead tag="Industries We Serve" h={<>Built Across<br/><span style={{ color:"#94a3b8" }}>Every Major Sector</span></>}/>
      </W>
      {/* Marquee row 1 */}
      <div className="ml-wrap" style={{ marginBottom:14 }}>
        <div className="ml-track">
          {row1.map((ind,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"14px 28px", margin:"0 6px", background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:999, whiteSpace:"nowrap", flexShrink:0, transition:"all .2s", cursor:"default" }}
              onMouseEnter={e=>{e.currentTarget.style.background="#eff6ff";e.currentTarget.style.borderColor="#bfdbfe";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#f8fafc";e.currentTarget.style.borderColor="#e2e8f0";}}>
              <span style={{ fontSize:18 }}>{ind.icon}</span>
              <span style={{ fontSize:13, fontWeight:600, color:"#334155" }}>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Marquee row 2 */}
      <div className="ml-wrap">
        <div className="mr-track">
          {row2.map((ind,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"14px 28px", margin:"0 6px", background:"#fff", border:"1px solid #f1f5f9", borderRadius:999, whiteSpace:"nowrap", flexShrink:0, transition:"all .2s", cursor:"default" }}
              onMouseEnter={e=>{e.currentTarget.style.background="#eff6ff";e.currentTarget.style.borderColor="#bfdbfe";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.borderColor="#f1f5f9";}}>
              <span style={{ fontSize:18 }}>{ind.icon}</span>
              <span style={{ fontSize:13, fontWeight:600, color:"#475569" }}>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════
   SECTION 7 — FEATURES (2×2 enhanced)
══════════════════════════════════════ */
function FeaturesSection() {
  return (
    <section style={{ background:"#fff", padding:"100px 0", borderTop:"1px solid #f1f5f9" }}>
      <W>
        <SHead tag="Core Intelligence" h={<>Features Tailored<br/><span style={{ color:"#94a3b8" }}>To Your Business</span></>}/>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
          {/* Analytics */}
          <R d={0} from="left">
            <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:20, padding:"1.75rem", cursor:"default", transition:"all .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#bfdbfe";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(37,99,235,0.08)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#e2e8f0";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{ height:160, borderRadius:14, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", marginBottom:"1.5rem", display:"flex", alignItems:"flex-end", justifyContent:"center", gap:5, padding:"0 20px 16px", position:"relative", overflow:"hidden" }}>
                {[55,70,45,90,60,110,80,95,65,100].map((h,i)=>(
                  <div key={i} style={{ flex:1, maxWidth:20, height:h, borderRadius:"4px 4px 0 0", background: i===6?"#2563eb":`rgba(37,99,235,${0.12+i*0.05})` }}/>
                ))}
                <div style={{ position:"absolute", top:12, right:12, background:"#fff", borderRadius:8, padding:"4px 10px", fontSize:11, fontWeight:700, color:"#2563eb", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>−7 Days</div>
              </div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, color:"#0f172a", marginBottom:8 }}>Progress Analytics</div>
              <p style={{ fontSize:13, color:"#64748b", lineHeight:1.65 }}>Predictive insights reveal performance patterns. Track streaks, identify weak areas, and celebrate breakthroughs across your organisation.</p>
            </div>
          </R>
          {/* Learning path */}
          <R d={100} from="right">
            <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:20, padding:"1.75rem", cursor:"default", transition:"all .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#bfdbfe";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(37,99,235,0.08)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#e2e8f0";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{ height:160, borderRadius:14, background:"linear-gradient(135deg,#eff6ff,#e0e7ff)", marginBottom:"1.5rem", display:"flex", flexDirection:"column", justifyContent:"center", gap:10, padding:"0 24px" }}>
                {["Discovery & Assessment","Core Architecture","Build & Deploy"].map((p,i)=>(
                  <div key={p} style={{ background:"#fff", borderRadius:10, padding:"10px 14px", fontSize:12, fontWeight:500, color:"#0f172a", boxShadow:"0 2px 8px rgba(0,0,0,0.06)", display:"flex", alignItems:"center", gap:8, marginLeft:i*12, transition:"transform .2s" }}>
                    <span style={{ width:8, height:8, borderRadius:"50%", background:"#2563eb", flexShrink:0 }}/>
                    {p}
                    <span style={{ marginLeft:"auto", color:"#2563eb", fontSize:11 }}>→</span>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, color:"#0f172a", marginBottom:8 }}>Personalised Solution Path</div>
              <p style={{ fontSize:13, color:"#64748b", lineHeight:1.65 }}>AI designs a transformation journey tailored to your goals, adapting in real time to business needs and market conditions.</p>
            </div>
          </R>
          {/* AI Chat */}
          <R d={150} from="left">
            <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:20, padding:"1.75rem", cursor:"default", transition:"all .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#bfdbfe";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(37,99,235,0.08)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#e2e8f0";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{ height:160, borderRadius:14, background:"linear-gradient(135deg,#f8fafc,#f0f4ff)", marginBottom:"1.5rem", display:"flex", flexDirection:"column", justifyContent:"center", gap:12, padding:"0 20px" }}>
                {[{id:"photo-1531123897727-8f129e1bf98a",name:"Sarah Chen",role:"Data Engineer"},{id:"photo-1507003211169-0a1dd7228f2d",name:"James Porter",role:"AI Lead"},{id:"photo-1519085360753-af0119f7cbe7",name:"Michael Ross",role:"Cloud Architect"}].map((u,i)=>(
                  <div key={u.name} style={{ display:"flex", alignItems:"center", gap:10, opacity:1-i*0.2 }}>
                    <img src={`https://images.unsplash.com/${u.id}?auto=format&fit=crop&w=80&q=80`} alt={u.name} style={{ width:30, height:30, borderRadius:"50%", objectFit:"cover" }}/>
                    <span style={{ fontSize:12, fontWeight:600, color:"#0f172a" }}>{u.name}</span>
                    <span style={{ fontSize:11, color:"#2563eb", fontWeight:500 }}>{u.role}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, color:"#0f172a", marginBottom:8 }}>AI Expert Network</div>
              <p style={{ fontSize:13, color:"#64748b", lineHeight:1.65 }}>Connect with domain experts and AI advisors instantly. Get personalised guidance tailored to your stack, industry, and goals.</p>
            </div>
          </R>
          {/* Smart generator */}
          <R d={200} from="right">
            <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:20, padding:"1.75rem", cursor:"default", transition:"all .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#bfdbfe";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(37,99,235,0.08)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#e2e8f0";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{ height:160, borderRadius:14, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", marginBottom:"1.5rem", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px" }}>
                <div style={{ width:"100%", maxWidth:300, background:"#fff", borderRadius:14, padding:"1rem", boxShadow:"0 4px 16px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize:12, color:"#94a3b8", marginBottom:10 }}>Type your prompt here...</div>
                  <div style={{ height:32, borderRadius:8, marginBottom:10, background:"linear-gradient(90deg,rgba(37,99,235,0.1),rgba(129,140,248,0.1))" }}/>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <div style={{ display:"flex", gap:6 }}>
                      {["Reports","Analytics","Docs"].map(t=>(
                        <span key={t} style={{ fontSize:10, color:"#64748b", background:"#f1f5f9", padding:"2px 8px", borderRadius:6 }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ width:24, height:24, borderRadius:"50%", background:"#2563eb", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12 }}>↑</div>
                  </div>
                </div>
              </div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, color:"#0f172a", marginBottom:8 }}>Smart Content Generator</div>
              <p style={{ fontSize:13, color:"#64748b", lineHeight:1.65 }}>Generate AI-powered reports, documentation, and operational insights instantly from any topic or dataset.</p>
            </div>
          </R>
        </div>
      </W>
    </section>
  );
}

/* ══════════════════════════════════════
   SECTION 8 — TECH STACK (Marquee)
══════════════════════════════════════ */
const TECH = [
  { name:"React.js", cat:"Frontend" }, { name:"Next.js", cat:"Frontend" }, { name:"TypeScript", cat:"Language" },
  { name:"Node.js", cat:"Backend" }, { name:"Python", cat:"Backend" }, { name:"Azure", cat:"Cloud" },
  { name:"AWS", cat:"Cloud" }, { name:"Docker", cat:"DevOps" }, { name:"Kubernetes", cat:"DevOps" },
  { name:"Power BI", cat:"Analytics" }, { name:"PostgreSQL", cat:"Database" }, { name:"MongoDB", cat:"Database" },
  { name:"TensorFlow", cat:"AI/ML" }, { name:"PyTorch", cat:"AI/ML" }, { name:"LangChain", cat:"AI/ML" },
  { name:"Spark", cat:"Data" }, { name:"dbt", cat:"Data" }, { name:"Airflow", cat:"Data" },
];
const CATCOL: Record<string,string> = {
  Frontend:"#3b82f6", Backend:"#10b981", Cloud:"#8b5cf6", DevOps:"#f59e0b",
  Analytics:"#ef4444", Database:"#0ea5e9", "AI/ML":"#ec4899", Language:"#6366f1", Data:"#14b8a6",
};

function TechSection() {
  const row1 = [...TECH.slice(0,9),...TECH.slice(0,9)];
  const row2 = [...TECH.slice(9),...TECH.slice(9)];
  return (
    <section style={{ background:"#020817", padding:"100px 0", overflow:"hidden" }}>
      <W style={{ marginBottom:"3.5rem" }}>
        <SHead dark tag="Technology Stack" h={<>Powered by Modern<br/><span className="grad-text">Enterprise Tech</span></>}
          sub="Our full-stack engineering capability spans frontend, backend, cloud, and AI infrastructure."/>
      </W>
      <div style={{ marginBottom:12 }}>
        <div className="ml-wrap">
          <div className="ml-track">
            {row1.map((t,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"12px 22px", margin:"0 6px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, whiteSpace:"nowrap", flexShrink:0, cursor:"default", transition:"all .2s" }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.borderColor="rgba(255,255,255,0.12)";}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";}}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:CATCOL[t.cat]||"#2563eb", flexShrink:0 }}/>
                <span style={{ fontSize:13, fontWeight:600, color:"rgba(255,255,255,0.8)" }}>{t.name}</span>
                <span style={{ fontSize:10, color:"rgba(255,255,255,0.25)", borderLeft:"1px solid rgba(255,255,255,0.1)", paddingLeft:8 }}>{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="ml-wrap">
          <div className="mr-track">
            {row2.map((t,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"12px 22px", margin:"0 6px", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:12, whiteSpace:"nowrap", flexShrink:0, cursor:"default", transition:"all .2s" }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.02)";e.currentTarget.style.borderColor="rgba(255,255,255,0.05)";}}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:CATCOL[t.cat]||"#2563eb", flexShrink:0 }}/>
                <span style={{ fontSize:13, fontWeight:600, color:"rgba(255,255,255,0.7)" }}>{t.name}</span>
                <span style={{ fontSize:10, color:"rgba(255,255,255,0.2)", borderLeft:"1px solid rgba(255,255,255,0.08)", paddingLeft:8 }}>{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   SECTION 9 — BENEFITS (Parallax images)
══════════════════════════════════════ */
function BenefitsSection() {
  const p1 = useParallax(0.15);
  const p2 = useParallax(-0.12);
  return (
    <section style={{ background:"#f8fafc", padding:"100px 0", borderTop:"1px solid #f1f5f9", overflow:"hidden" }}>
      <W>
        <SHead tag="Benefits" h={<>Empowering Every Business<br/><span style={{ color:"#94a3b8" }}>And Team With AI</span></>}/>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          <R from="left">
            <div style={{ borderRadius:20, overflow:"hidden", position:"relative", height:300 }}>
              <div ref={p1} style={{ position:"absolute", inset:"-15% 0", height:"130%" }}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(2,8,23,0.75) 0%,transparent 60%)" }}/>
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.5rem" }}>
                <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, color:"#fff", marginBottom:4 }}>Smart AI Adoption For Modern Enterprises</h4>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.6)" }}>Technology that empowers your people, not replaces them.</p>
              </div>
            </div>
          </R>
          <R from="right" d={100}>
            <div style={{ borderRadius:20, overflow:"hidden", position:"relative", height:300 }}>
              <div ref={p2} style={{ position:"absolute", inset:"-15% 0", height:"130%" }}>
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(2,8,23,0.75) 0%,transparent 60%)" }}/>
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.5rem" }}>
                <h4 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, color:"#fff", marginBottom:4 }}>Transform Operations By Saving Time</h4>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.6)" }}>Automation that frees your team for high-value strategic work.</p>
              </div>
            </div>
          </R>
        </div>
      </W>
    </section>
  );
}

/* ══════════════════════════════════════
   SECTION 10 — TESTIMONIALS (Staggered)
══════════════════════════════════════ */
const TESTI = [
  { q:"AIST transformed our entire data infrastructure in under 6 months. The impact on decision-making speed has been extraordinary.", name:"Sarah Allen", role:"CTO, FinCore Australia", img:"photo-1531123897727-8f129e1bf98a", h:240 },
  { q:"They built our SaaS platform from scratch in 8 weeks. The code quality and AI features were beyond what we expected.", name:"David Matthews", role:"VP Engineering, Telstra", img:"photo-1506794778202-cad84cf45f1d", h:210 },
  { q:"Working with AIST transformed how we handle onboarding. What took 3 days is now fully automated — incredible execution.", name:"Tariq Hussain", role:"COO, FinEdge Capital", img:"photo-1472099645785-5658abf4ff4e", h:240 },
];

function TestimonialsSection() {
  return (
    <section style={{ background:"#fff", padding:"100px 0", borderTop:"1px solid #f1f5f9" }}>
      <W>
        <SHead tag="Testimonials" h={<>Real Stories From Clients<br/><span style={{ color:"#94a3b8" }}>Achieving Success</span></>}/>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, alignItems:"start" }}>
          {TESTI.map((t,i)=>(
            <R key={t.name} d={i*90}>
              <div style={{ background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:20, padding:"1.75rem", marginTop: i===1?"2.5rem":0, cursor:"default", transition:"all .3s", position:"relative", overflow:"hidden" }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 20px 50px rgba(37,99,235,0.1)";e.currentTarget.style.borderColor="#bfdbfe";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor="#e2e8f0";}}>
                {/* Quote mark decoration */}
                <div style={{ position:"absolute", top:-10, right:16, fontFamily:"Georgia,serif", fontSize:120, color:"rgba(37,99,235,0.04)", lineHeight:1, pointerEvents:"none", userSelect:"none" }}>"</div>
                <div style={{ color:"#2563eb", fontSize:14, letterSpacing:2, marginBottom:"1rem" }}>★★★★★</div>
                <p style={{ fontSize:14, color:"#475569", lineHeight:1.75, fontStyle:"italic", marginBottom:"1.5rem" }}>"{t.q}"</p>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <img src={`https://images.unsplash.com/${t.img}?auto=format&fit=crop&w=80&q=80`} alt={t.name}
                    style={{ width:40, height:40, borderRadius:"50%", objectFit:"cover", border:"2px solid #e2e8f0" }}/>
                  <div>
                    <div style={{ fontSize:13, fontWeight:600, color:"#0f172a" }}>{t.name}</div>
                    <div style={{ fontSize:11, color:"#94a3b8" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>

        {/* Rating strip */}
        <R d={200}>
          <div style={{ marginTop:24, padding:"1.5rem 2rem", background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:16, display:"flex", alignItems:"center", gap:"2rem", flexWrap:"wrap" }}>
            <div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"3rem", fontWeight:800, color:"#0f172a", letterSpacing:"-0.04em", lineHeight:1 }}>4.9</div>
              <div style={{ color:"#2563eb", fontSize:14, letterSpacing:2 }}>★★★★★</div>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:15, fontWeight:600, color:"#0f172a", marginBottom:4 }}>Average Clutch rating across 80+ verified reviews</div>
              <div style={{ fontSize:13, color:"#64748b" }}>All chances are — you'll be impressed too.</div>
            </div>
            {[{k:"Clutch",v:"4.9 / 5.0"},{k:"Upwork",v:"100% JSS"},{k:"GoodFirms",v:"5 Stars"},{k:"ISO",v:"27001 Cert."}].map(a=>(
              <div key={a.k} style={{ textAlign:"center", flexShrink:0 }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.1rem", fontWeight:800, color:"#0f172a" }}>{a.v}</div>
                <div style={{ fontSize:11, color:"#94a3b8", marginTop:2 }}>{a.k}</div>
              </div>
            ))}
          </div>
        </R>
      </W>
    </section>
  );
}


/* ══════════════════════════════════════
   SECTION 12 — CTA
══════════════════════════════════════ */
function CTASection() {
  return (
    <section style={{ background:"#f8fafc", padding:"80px 0 100px" }}>
      <W>
        <R>
          <div className="cta-noise" style={{ position:"relative", background:"linear-gradient(135deg,#1e40af,#2563eb,#3b82f6)", borderRadius:28, padding:"5rem 3rem", textAlign:"center", overflow:"hidden", boxShadow:"0 40px 100px rgba(37,99,235,0.28)" }}>
            {/* Animated glow blobs */}
            <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"rgba(255,255,255,0.06)", top:-100, right:-80, pointerEvents:"none" }}/>
            <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", background:"rgba(255,255,255,0.04)", bottom:-80, left:-60, pointerEvents:"none" }}/>
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ marginBottom:"1.5rem" }}><Tag label="Let's Build Together"/></div>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:800, color:"#fff", letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"1rem" }}>
                Ready to Discuss<br/>Your Project With Us?
              </h2>
              <p style={{ fontSize:16, color:"rgba(255,255,255,0.7)", maxWidth:440, margin:"0 auto 2.5rem", lineHeight:1.7 }}>
                Let's map out a technology strategy that solves today's challenges and positions you to lead tomorrow's digital landscape.
              </p>
              <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
                <button style={{ background:"#fff", color:"#1d4ed8", border:"none", borderRadius:999, padding:"15px 32px", fontSize:15, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"inherit", transition:"all .25s" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.transform="translateY(-2px)";(e.currentTarget as HTMLButtonElement).style.boxShadow="0 12px 30px rgba(0,0,0,0.2)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.transform="translateY(0)";(e.currentTarget as HTMLButtonElement).style.boxShadow="none";}}>
                  Book a Free Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button style={{ background:"transparent", color:"rgba(255,255,255,0.8)", border:"2px solid rgba(255,255,255,0.3)", borderRadius:999, padding:"15px 32px", fontSize:15, fontWeight:500, cursor:"pointer", fontFamily:"inherit", transition:"all .2s" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor="rgba(255,255,255,0.7)";(e.currentTarget as HTMLButtonElement).style.color="#fff";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLButtonElement).style.borderColor="rgba(255,255,255,0.3)";(e.currentTarget as HTMLButtonElement).style.color="rgba(255,255,255,0.8)";}}>
                  Talk to Sales
                </button>
              </div>

              {/* Awards strip */}
              <div style={{ marginTop:"3rem", paddingTop:"2.5rem", borderTop:"1px solid rgba(255,255,255,0.12)", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem" }}>
                {[{n:"Clutch",s:"4.9 avg · 80+ reviews"},{n:"Upwork",s:"Top Rated · 100% JSS"},{n:"ISO 27001",s:"Security Certified"},{n:"AWS Partner",s:"Advanced Consulting"}].map(a=>(
                  <div key={a.n}>
                    <div style={{ fontSize:13, fontWeight:700, color:"#fff" }}>{a.n}</div>
                    <div style={{ fontSize:11, color:"rgba(255,255,255,0.5)", marginTop:3, lineHeight:1.4 }}>{a.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </R>

        {/* Contact row */}
        <R d={100}>
          <div style={{ marginTop:20, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
            {[
              { icon:"📞", label:"Phone", val:"+61 466 558 862" },
              { icon:"✉️", label:"Email", val:"info@aisolutiontechnologies.com" },
              { icon:"📍", label:"Address", val:"33 East Street, Granville NSW 2142, Sydney" },
            ].map(c=>(
              <div key={c.label} style={{ background:"#fff", border:"1px solid #e2e8f0", borderRadius:16, padding:"1.25rem 1.5rem", display:"flex", alignItems:"center", gap:12 }}>
                <span style={{ fontSize:20 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize:11, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:600 }}>{c.label}</div>
                  <div style={{ fontSize:13, color:"#0f172a", fontWeight:500, marginTop:2 }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </R>
      </W>
    </section>
  );
}

/* ══════════════════════════════════════
   PAGE ROOT
══════════════════════════════════════ */
export default function AISolutionTechPage() {
  return (
    <main className={`${poppins.className} overflow-x-hidden antialiased`}>
      <style>{STYLES}</style>
      <Hero />
      <PressBar />
      <StatsSection />

      <CortexMarqueeSection/>
      <ServicesSection />

      <IndustriesSection />
      <ProcessSection />
      <FeaturesSection />
      <TechSection />
      <BenefitsSection />
      <TestimonialsSection />
      <GlobalSection />
      <CTASection />
    </main>
  );
}