"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import ServicesSection from "@/components/Home/services";
import ProcessSection from "@/components/Home/processZigzag";
import GlobalSection from "@/components/Home/globalsection";
import ProblemSection from "@/components/Home//problem";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

/* ─── Minimal global CSS: only what Tailwind can't express ─── */
const STYLES = `
  *,*::before,*::after{box-sizing:border-box}
  html{scroll-behavior:smooth}

  @keyframes fadeUp  {from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  @keyframes blink   {0%,100%{opacity:1}50%{opacity:.2}}
  @keyframes shimmer {0%{background-position:-200% center}100%{background-position:200% center}}
  @keyframes mleft   {from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @keyframes mright  {from{transform:translateX(-50%)}to{transform:translateX(0)}}
  @keyframes pulse-ring{0%{box-shadow:0 0 0 0 rgba(37,99,235,.35)}100%{box-shadow:0 0 0 20px rgba(37,99,235,0)}}
  @keyframes float   {0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

  .ha1{animation:fadeUp .7s ease .1s  both}
  .ha2{animation:fadeUp .7s ease .22s both}
  .ha3{animation:fadeUp .7s ease .36s both}
  .ha4{animation:fadeUp .7s ease .50s both}
  .ha5{animation:fadeUp .7s ease .64s both}

  .pip{animation:blink 2s infinite}

  .grad-text{
    background:linear-gradient(90deg,#60a5fa,#818cf8,#60a5fa);
    background-size:220%;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    animation:shimmer 3.5s linear infinite;
  }

  .ml-wrap{overflow:hidden}
  .ml-track{display:flex;width:max-content;animation:mleft 44s linear infinite}
  .mr-track{display:flex;width:max-content;animation:mright 44s linear infinite}
  .ml-track:hover,.mr-track:hover{animation-play-state:paused}

  .cta-noise::after{
    content:'';position:absolute;inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    background-size:180px;pointer-events:none;z-index:0;border-radius:inherit;
  }
`;

/* ─── Hooks ─── */
function useReveal(threshold = 0.12) {
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

function useParallax(mult = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let id = 0;
    const tick = () => {
      if (ref.current) {
        const r = ref.current.getBoundingClientRect();
        ref.current.style.transform = `translateY(${(r.top + r.height / 2 - window.innerHeight / 2) * mult}px)`;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [mult]);
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

/* ─── Counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, v } = useReveal();
  useEffect(() => {
    if (!v) return;
    let n = 0; const step = to / 55;
    const id = setInterval(() => {
      n += step; if (n >= to) { setVal(to); clearInterval(id); } else setVal(Math.floor(n));
    }, 18);
    return () => clearInterval(id);
  }, [v, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ─── Reveal wrapper ─── */
function R({ children, d = 0, from = "bottom" }: {
  children: React.ReactNode; d?: number; from?: "bottom" | "left" | "right";
}) {
  const { ref, v } = useReveal();
  const t: Record<string, string> = {
    bottom: "translateY(40px)", left: "translateX(-48px)", right: "translateX(48px)",
  };
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "none" : t[from],
      transition: `opacity .8s ease ${d}ms, transform .85s cubic-bezier(.16,1,.3,1) ${d}ms`,
    }}>
      {children}
    </div>
  );
}

/* ─── Tag pill ─── */
function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full">
      <span className="pip w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
      {label}
    </span>
  );
}

/* ─── Section heading ─── */
function SHead({ tag, h, sub, dark = false }: {
  tag: string; h: React.ReactNode; sub?: string; dark?: boolean;
}) {
  return (
    <R>
      <div className="text-center mb-14">
        <Tag label={tag} />
        <div className={`mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-extrabold leading-[1.1] tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>
          {h}
        </div> 
        {sub && (
          <p className={`mt-3 text-sm sm:text-[15px] max-w-[460px] mx-auto leading-[1.75] ${dark ? "text-slate-400" : "text-slate-500"}`}>
            {sub}
          </p>
        )}
      </div>
    </R>
  );
}

/* ─── Max-width wrapper ─── */
const W = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-[1200px] mx-auto px-5 sm:px-7 lg:px-8 ${className}`}>{children}</div>
);

/* ════════════════════════════════════
   HERO
════════════════════════════════════ */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  const scrollY = useScrollY();
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vidRef.current)
      vidRef.current.style.transform = `scale(1.1) translateY(${scrollY * 0.22}px)`;
  }, [scrollY]);

  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-slate-950">
      {/* Video */}
      <video ref={vidRef} autoPlay loop muted playsInline
        onCanPlay={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-[2000ms]"
        style={{ opacity: loaded ? 0.28 : 0, transformOrigin: "center" }}>
        <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-slate-950/95 via-blue-900/20 to-slate-950/98" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%,rgba(37,99,235,0.15) 0%,transparent 70%)" }} />

      {/* Grid lines */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }} />

      {/* Content */}
      <W className="relative z-[5] text-center pt-36 pb-28 sm:pt-44 sm:pb-36">
        <div className="ha1 mb-5"><Tag label="Intelligence That Accelerates Growth" /></div>

        <h1 className="ha2 text-white font-medium leading-[1.02] tracking-[-0.04em] mb-5"
          style={{ fontSize: "clamp(2.6rem,7.5vw,6.5rem)" }}>
          Transform Your Business<br />
          With <span className="grad-text">AI & Data</span>
        </h1>

        <p className="ha3 font-light text-white/50 max-w-[480px] mx-auto mb-10 leading-[1.8]"
          style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>
          Ai Solutiontechnologies delivers enterprise-grade AI, cloud modernisation, and data engineering —
          from strategy to production, in weeks not months.
        </p>

        <div className="ha4 flex justify-center gap-3 flex-wrap">
          <Link href="/contact">
          <button
            className="bg-blue-600 text-white rounded-full px-8 py-[15px] text-[15px] font-bold
                       flex items-center gap-2 border-0 cursor-pointer transition-all duration-200
                       hover:-translate-y-0.5 hover:bg-blue-500"
            style={{ boxShadow: "0 0 40px rgba(37,99,235,0.45)" }}>
            Start Your Journey
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          </Link>

          <Link href="/services">
          <button className="bg-transparent text-white/65 border-2 border-white/15 rounded-full
                             px-8 py-[15px] text-[15px] font-medium flex items-center gap-2
                             cursor-pointer transition-all duration-200
                             hover:border-white/50 hover:text-white">
            ▶ our services
          </button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="ha5 flex items-center justify-center gap-3 mt-10">
          <div className="flex">
            {["photo-1531123897727-8f129e1bf98a","photo-1507003211169-0a1dd7228f2d","photo-1500648767791-00dcc994a43e"].map((id,i) => (
              <img key={id}
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=80&q=80`}
                alt="" className="w-9 h-9 rounded-full object-cover border-2 border-slate-950"
                style={{ marginLeft: i === 0 ? 0 : -9 }} />
            ))}
          </div>
          <div className="text-left">
            <div className="text-blue-400 text-xs tracking-[0.15em]">★★★★★</div>
            <div className="text-[12px] text-white/40">
              Rated <strong className="text-white font-semibold">4.9</strong> by 200+ enterprise clients
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-25">
          <div className="w-px h-10 bg-white animate-bounce" />
          <span className="text-white text-[9px] tracking-[0.2em] uppercase">Scroll</span>
        </div>
      </W>
    </section>
  );
}

/* ==========================================================================
   CSS ANIMATION INJECTION (Self-Contained Marquee)
   ========================================================================== */
const MARQUEE_STYLE = `
  @keyframes swissMarquee {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }
  .animate-swiss-marquee {
    display: flex;
    width: max-content;
    animation: swissMarquee 40s linear infinite;
  }
  .animate-swiss-marquee:hover {
    animation-play-state: paused;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

/* ==========================================================================
   INTERSECTION COUNTER COMPONENT
   ========================================================================== */
function AnimatedCounter({ to, duration = 2000 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Cubic ease-out calculation for smooth decelerating momentum
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeOutCubic * to));

            if (progress < 1) {
              window.requestAnimationFrame(animate);
            }
          };

          window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

/* ==========================================================================
   PROOF BAR COMPONENT
   ========================================================================== */
export function ProofBar() {
  const clients = [
    "Westpac", "Telstra", "ANZ Bank", "Atlassian", "Canva", 
    "Deloitte", "Microsoft", "AWS", "Salesforce", "Oracle", "SAP", "Cisco"
  ];
  
  // Duplicate array multiple times to guarantee a seamless, gapless track fill across ultra-wide monitors
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="bg-slate-950 border-b border-slate-900 py-14 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_STYLE }} />
      
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-slate-400 text-[11px] font-mono font-bold uppercase tracking-[0.25em] max-w-2xl mx-auto leading-relaxed">
          Trusted by enterprises across Australia, UAE and Saudi Arabia
        </h3>
      </div>
      
      {/* Linear Fade Masks for edge blending */}
      <div className="absolute left-0 top-20 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none hidden md:block" />
      <div className="absolute right-0 top-20 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none hidden md:block" />

      {/* Track Wrapper */}
      <div className="w-full overflow-hidden no-scrollbar cursor-grab active:cursor-grabbing">
        <div className="animate-swiss-marquee gap-16 items-center performance-gains">
          {marqueeItems.map((client, index) => (
            <span
              key={index}
              className="text-[14px] font-mono font-bold tracking-[0.2em] uppercase text-slate-600 
                         transition-colors duration-300 hover:text-blue-500 select-none pr-4"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   STATS SECTION COMPONENT
   ========================================================================== */
const STATS_DATA = [
  { 
    val: 180, 
    suf: "+", 
    label: "AI Solutions Delivered", 
    sub: "Hyper-personalised architecture deployed across legacy enterprise cores." 
  },
  { 
    val: 88, 
    suf: "", 
    label: "Businesses Empowered", 
    sub: "High-throughput automation networks operating across Australia & GCC." 
  },
  { 
    val: 92, 
    suf: "%", 
    label: "Faster Delivery Rate", 
    sub: "Accelerating modern deployment pipelines relative to traditional lifecycles." 
  },
  { 
    val: 98, 
    suf: "%", 
    label: "Client Satisfaction", 
    sub: "Independently audited performance parameters across major contracts." 
  },
];

export function StatsSection() {
  return (
    <section className="bg-white text-slate-900 py-14 md:py-26 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modernist Section Header */}
        <div className="border-l-2 border-blue-600 pl-6 mb-20 md:mb-28 max-w-4xl">
          <span className="block text-blue-600 text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            Operational Metrics of 2026
          </span>
          <h2 className="text-3xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Redefining Enterprise Technology <br />
            <span className="text-slate-400 font-normal font-sans">Through Intelligent Automation.</span>
          </h2>
        </div>

        {/* Swiss Grid Matrix System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
          {STATS_DATA.map((item, index) => (
            <div 
              key={index} 
              className="p-8 md:p-10 border-r border-b border-slate-200 bg-white transition-all duration-300 
                         hover:bg-slate-50 flex flex-col justify-between min-h-[290px] group rounded-sm"
            >
              <div>
                {/* Micro Structural Metadata */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-mono text-slate-400 tracking-widest">
                    0{index + 1}
                  </span>
                  <div className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-blue-600 transition-colors duration-300" />
                </div>
                
                {/* Rendered Metric Counter */}
                <div className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-slate-900 flex items-baseline">
                  <AnimatedCounter to={item.val} />
                  <span className="text-blue-600 font-sans font-semibold ml-0.5 transform translate-y-[-0.1em]">
                    {item.suf}
                  </span>
                </div>

                {/* Identity Tag */}
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mt-4">
                  {item.label}
                </div>
              </div>

              {/* Functional Context Description */}
              <p className="text-xs text-slate-500 leading-relaxed font-normal mt-8 pt-5 border-t border-slate-100">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


/* ════════════════════════════════════
   INDUSTRIES
════════════════════════════════════ */
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
  return (
    <section className="bg-white py-24 md:py-28 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:"radial-gradient(ellipse at 30% 50%,rgba(37,99,235,0.04) 0%,transparent 60%)" }} />
      <W className="mb-14">
        <SHead tag="Industries We Serve"
          h={<>Built Across <span className="text-slate-400">Every Major Sector</span></>} />
      </W>

      <div className="ml-wrap mb-3">
        <div className="ml-track">
          {row1.map((ind,i) => (
            <div key={i} className="flex items-center gap-2.5 px-7 py-3.5 mx-1.5 bg-slate-50
                                    border border-slate-200 rounded-full whitespace-nowrap shrink-0
                                    cursor-default transition-all duration-200
                                    hover:bg-blue-50 hover:border-blue-200">
              <span className="text-lg leading-none">{ind.icon}</span>
              <span className="text-[13px] font-semibold text-slate-700">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-wrap">
        <div className="mr-track">
          {row2.map((ind,i) => (
            <div key={i} className="flex items-center gap-2.5 px-7 py-3.5 mx-1.5 bg-white
                                    border border-slate-100 rounded-full whitespace-nowrap shrink-0
                                    cursor-default transition-all duration-200
                                    hover:bg-blue-50 hover:border-blue-200">
              <span className="text-lg leading-none">{ind.icon}</span>
              <span className="text-[13px] font-semibold text-slate-500">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   FEATURES
════════════════════════════════════ */
function FCard({ children, d = 0, from }: {
  children: React.ReactNode; d?: number; from: "left" | "right";
}) {
  return (
    <R d={d} from={from}>
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 h-full cursor-default
                      transition-all duration-300 hover:-translate-y-1
                      hover:border-blue-200 hover:shadow-[0_20px_48px_rgba(37,99,235,0.09)]">
        {children}
      </div>
    </R>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-white py-24 md:py-28 border-t border-slate-100">
      <W>
        <SHead tag="Core Intelligence"
          h={<>Features Tailored <span className="text-slate-400">To Your Business</span></>} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

          {/* Analytics */}
          <FCard from="left">
            <div className="h-44 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 mb-6
                            flex items-end justify-center gap-1.5 px-5 pb-4 relative overflow-hidden">
              {[55,70,45,90,60,110,80,95,65,100].map((h,i) => (
                <div key={i} className="flex-1 max-w-[20px] rounded-t-[3px] transition-all duration-300"
                  style={{ height:h, background: i===6?"#2563eb":`rgba(37,99,235,${0.1+i*0.055})` }} />
              ))}
              <div className="absolute top-3 right-3 bg-white rounded-lg px-2.5 py-1
                              text-[11px] font-bold text-blue-600 shadow-sm">−7 Days</div>
            </div>
            <h3 className="text-slate-900 font-bold text-[1.05rem] mb-2">Progress Analytics</h3>
            <p className="text-[13px] text-slate-500 leading-[1.7]">
              Predictive insights reveal performance patterns. Track streaks, identify weak areas,
              and celebrate breakthroughs across your organisation.
            </p>
          </FCard>

          {/* Path */}
          <FCard from="right" d={100}>
            <div className="h-44 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 mb-6
                            flex flex-col justify-center gap-2.5 px-6">
              {["Discovery & Assessment","Core Architecture","Build & Deploy"].map((p,i) => (
                <div key={p}
                  className="bg-white rounded-[10px] px-4 py-2.5 text-[12px] font-medium
                             text-slate-900 shadow-sm flex items-center gap-2"
                  style={{ marginLeft: i*14 }}>
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  {p}
                  <span className="ml-auto text-blue-600 text-[11px]">→</span>
                </div>
              ))}
            </div>
            <h3 className="text-slate-900 font-bold text-[1.05rem] mb-2">Personalised Solution Path</h3>
            <p className="text-[13px] text-slate-500 leading-[1.7]">
              AI designs a transformation journey tailored to your goals, adapting in real time
              to business needs and market conditions.
            </p>
          </FCard>

          {/* Expert network */}
          <FCard from="left" d={150}>
            <div className="h-44 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 mb-6
                            flex flex-col justify-center gap-3 px-5">
              {[
                { id:"photo-1531123897727-8f129e1bf98a", name:"Sarah Chen", role:"Data Engineer" },
                { id:"photo-1507003211169-0a1dd7228f2d", name:"James Porter", role:"AI Lead" },
                { id:"photo-1519085360753-af0119f7cbe7", name:"Michael Ross", role:"Cloud Architect" },
              ].map((u,i) => (
                <div key={u.name} className="flex items-center gap-2.5" style={{ opacity:1-i*0.22 }}>
                  <img src={`https://images.unsplash.com/${u.id}?auto=format&fit=crop&w=80&q=80`}
                    alt={u.name} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-[12px] font-semibold text-slate-900">{u.name}</span>
                  <span className="text-[11px] text-blue-600 font-medium">{u.role}</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
            <h3 className="text-slate-900 font-bold text-[1.05rem] mb-2">AI Expert Network</h3>
            <p className="text-[13px] text-slate-500 leading-[1.7]">
              Connect with domain experts and AI advisors instantly. Get personalised guidance
              tailored to your stack, industry, and goals.
            </p>
          </FCard>

          {/* Generator */}
          <FCard from="right" d={200}>
            <div className="h-44 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 mb-6
                            flex items-center justify-center px-5">
              <div className="w-full max-w-[300px] bg-white rounded-xl p-4 shadow-sm">
                <div className="text-[11px] text-slate-400 mb-3">Type your prompt here...</div>
                <div className="h-8 rounded-lg mb-3 bg-gradient-to-r from-blue-100/60 to-indigo-100/60" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {["Reports","Analytics","Docs"].map(t => (
                      <span key={t} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center
                                  text-white text-xs font-bold">↑</div>
                </div>
              </div>
            </div>
            <h3 className="text-slate-900 font-bold text-[1.05rem] mb-2">Smart Content Generator</h3>
            <p className="text-[13px] text-slate-500 leading-[1.7]">
              Generate AI-powered reports, documentation, and operational insights instantly
              from any topic or dataset.
            </p>
          </FCard>
        </div>
      </W>
    </section>
  );
}

/* ════════════════════════════════════
   TECH STACK
════════════════════════════════════ */
const TECH = [
  {name:"React.js",cat:"Frontend"},{name:"Next.js",cat:"Frontend"},{name:"TypeScript",cat:"Language"},
  {name:"Node.js",cat:"Backend"},{name:"Python",cat:"Backend"},{name:"Azure",cat:"Cloud"},
  {name:"AWS",cat:"Cloud"},{name:"Docker",cat:"DevOps"},{name:"Kubernetes",cat:"DevOps"},
  {name:"Power BI",cat:"Analytics"},{name:"PostgreSQL",cat:"Database"},{name:"MongoDB",cat:"Database"},
  {name:"TensorFlow",cat:"AI/ML"},{name:"PyTorch",cat:"AI/ML"},{name:"LangChain",cat:"AI/ML"},
  {name:"Spark",cat:"Data"},{name:"dbt",cat:"Data"},{name:"Airflow",cat:"Data"},
];
const CAT_COLORS: Record<string,string> = {
  Frontend:"#3b82f6", Backend:"#10b981", Cloud:"#8b5cf6", DevOps:"#f59e0b",
  Analytics:"#ef4444", Database:"#0ea5e9", "AI/ML":"#ec4899", Language:"#6366f1", Data:"#14b8a6",
};

function TechSection() {
  const row1 = [...TECH.slice(0,9),...TECH.slice(0,9)];
  const row2 = [...TECH.slice(9),...TECH.slice(9)];
  return (
    <section className="bg-slate-950 py-24 md:py-28 overflow-hidden">
      <W className="mb-14">
        <SHead dark tag="Technology Stack"
          h={<>Powered by Modern <span className="grad-text">Enterprise Tech</span></>}
          sub="Our full-stack engineering capability spans frontend, backend, cloud, and AI infrastructure." />
      </W>
      <div className="space-y-3">
        <div className="ml-wrap">
          <div className="ml-track">
            {row1.map((t,i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 mx-1.5 rounded-xl
                                     whitespace-nowrap shrink-0 cursor-default
                                     border border-white/[0.07] bg-white/[0.03]
                                     transition-all duration-200
                                     hover:bg-white/[0.06] hover:border-white/[0.12]">
                <span className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: CAT_COLORS[t.cat]||"#2563eb" }} />
                <span className="text-[13px] font-semibold text-white/80">{t.name}</span>
                <span className="text-[10px] text-white/25 border-l border-white/10 pl-2">{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-wrap">
          <div className="mr-track">
            {row2.map((t,i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 mx-1.5 rounded-xl
                                     whitespace-nowrap shrink-0 cursor-default
                                     border border-white/[0.05] bg-white/[0.02]
                                     transition-all duration-200
                                     hover:bg-white/[0.05] hover:border-white/[0.1]">
                <span className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: CAT_COLORS[t.cat]||"#2563eb" }} />
                <span className="text-[13px] font-semibold text-white/70">{t.name}</span>
                <span className="text-[10px] text-white/20 border-l border-white/[0.08] pl-2">{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ==========================================================================
   ENTERPRISE CASE STUDIES (SERVER COMPONENT)
   ========================================================================== */
const CASE_STUDIES = [
  {
    tag: "CONSTRUCTION // POWER BI & ANALYTICS",
    client: "Australian Tier 2 Builder",
    highlight: "Project Visibility & Cost Control",
    description:
      "Delivered Power BI construction dashboards providing real-time project performance, budget tracking, variation monitoring, and executive reporting. Enabled leadership teams to identify cost overruns earlier and improve tender confidence.",
    link: "/case-studies/australian-tier-2-builder",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "PROFESSIONAL SERVICES // CFO DASHBOARDS",
    client: "Professional Services Firm",
    highlight: "Finance Reporting Automation",
    description:
      "Implemented executive CFO dashboards combining financial, operational, and forecasting data into a single reporting platform. Reduced manual reporting effort while improving decision-making through real-time visibility.",
    link: "/case-studies/professional-services-cfo",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "GOVERNMENT // AZURE OPENAI & AI",
    client: "KSA Government Agency",
    highlight: "Secure Enterprise AI Deployment",
    description:
      "Designed and deployed Azure OpenAI-powered internal AI assistants within a secure government environment. Enabled compliant AI adoption, streamlined knowledge access, and accelerated employee productivity while maintaining governance controls.",
    link: "/case-studies/ksa-government-ai",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-12 md:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ─── TIGHT HEADER BLOCK ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block mb-3">
              Validated Proof Framework
            </span>
            <h2 className="text-[28px] md:text-[36px] font-black tracking-tight text-slate-900 leading-tight">
              Real results, <span className="text-slate-400 font-normal">deployed at scale.</span>
            </h2>
            <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed mt-3">
              From 8-day month-ends to 2-day month-ends. From AUD $2.4M of hidden overruns identified, to a 95% reduction in public-AI use.
            </p>
          </div>
          
          {/* Top-aligned CTA for desktop (minimizes vertical footprint) */}
          <div className="hidden md:block shrink-0">
            <a 
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-900 text-xs font-mono font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              See all cases →
            </a>
          </div>
        </div>

        {/* ─── IMAGE + CONTENT CARD GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image Container with subtle zoom effect */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.client}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                {/* Dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <span className="text-[9px] font-mono font-bold text-slate-900 tracking-wider uppercase">
                    {item.client}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-mono text-slate-400 tracking-widest block mb-3">
                  {item.tag}
                </span>
                
                <h3 className="text-[20px] font-bold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {item.highlight}
                </h3>
                
                <p className="text-[14px] text-slate-600 leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Animated Arrow Link */}
                <div className="mt-auto flex items-center text-[11px] font-mono font-bold tracking-widest text-slate-900 uppercase">
                  Read Case Study
                  <svg 
                    width="14" height="14" viewBox="0 0 24 24" fill="none" 
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-8 md:hidden flex justify-center">
          <a 
            href="/case-studies"
            className="w-full text-center border border-slate-300 bg-white text-slate-900 text-xs font-mono font-bold uppercase tracking-widest px-6 py-4 rounded-lg transition-colors active:bg-slate-100"
          >
            See all cases →
          </a>
        </div>

      </div>
    </section>
  );
}



/* ════════════════════════════════════
   TESTIMONIALS
════════════════════════════════════ */
const TESTI = [
  { q:"Ai Solutiontechnologies transformed our entire data infrastructure in under 6 months. The impact on decision-making speed has been extraordinary.",
    name:"Sarah Allen", role:"CTO, FinCore Australia", img:"photo-1531123897727-8f129e1bf98a", offset:false },
  { q:"They built our SaaS platform from scratch in 8 weeks. The code quality and AI features were beyond what we expected.",
    name:"David Matthews", role:"VP Engineering, Telstra", img:"photo-1506794778202-cad84cf45f1d", offset:true },
  { q:"Working with Ai Solutiontechnologies transformed how we handle onboarding. What took 3 days is now fully automated — incredible execution.",
    name:"Tariq Hussain", role:"COO, FinEdge Capital", img:"photo-1472099645785-5658abf4ff4e", offset:false },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-24 md:py-28 border-t border-slate-100">
      <W>
        <SHead tag="Testimonials"
          h={<>Real Stories From Clients <span className="text-slate-400">Achieving Success</span></>} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
          {TESTI.map((t,i) => (
            <R key={t.name} d={i * 90}>
              <div className={`bg-slate-50 border border-slate-200 rounded-2xl p-7 relative overflow-hidden
                              cursor-default transition-all duration-300
                              hover:-translate-y-1 hover:border-blue-200
                              hover:shadow-[0_24px_56px_rgba(37,99,235,0.09)]
                              ${t.offset ? "md:mt-10" : ""}`}>
                <div className="absolute -top-2 right-4 font-serif text-[110px] leading-none
                                text-blue-600/[0.04] pointer-events-none select-none">"</div>
                <div className="text-blue-600 text-[13px] tracking-[0.15em] mb-4">★★★★★</div>
                <p className="text-[14px] text-slate-500 leading-[1.8] italic mb-6">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <img src={`https://images.unsplash.com/${t.img}?auto=format&fit=crop&w=80&q=80`}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-200 shrink-0" />
                  <div>
                    <div className="text-[13px] font-semibold text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>

        {/* Rating bar */}
        <R d={200}>
          <div className="mt-4 p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-2xl
                          flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-wrap">
            <div className="shrink-0">
              <div className="text-slate-900 font-extrabold text-5xl leading-none tracking-tight">4.9</div>
              <div className="text-blue-600 text-[13px] tracking-[0.15em] mt-1">★★★★★</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-slate-900 mb-1">
                Average Clutch rating across 80+ verified reviews
              </div>
              <div className="text-[13px] text-slate-500">All chances are — you'll be impressed too.</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 w-full sm:w-auto shrink-0">
              {[{k:"Clutch",v:"4.9 / 5.0"},{k:"Upwork",v:"100% JSS"},{k:"GoodFirms",v:"5 Stars"},{k:"ISO",v:"27001 Cert."}].map(a => (
                <div key={a.k}>
                  <div className="font-extrabold text-slate-900 text-base">{a.v}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{a.k}</div>
                </div>
              ))}
            </div>
          </div>
        </R>
      </W>
    </section>
  );
}

/* ════════════════════════════════════
   CTA
════════════════════════════════════ */
function CTASection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <W>
        <R>
          <div className="cta-noise relative rounded-3xl overflow-hidden text-center
                          p-12 sm:p-16 md:p-20"
            style={{
              background:"linear-gradient(135deg,#1e3a8a,#2563eb 55%,#3b82f6)",
              boxShadow:"0 44px 100px rgba(37,99,235,0.3)",
            }}>
            {/* Blobs */}
            <div className="absolute w-80 h-80 rounded-full pointer-events-none -top-20 -right-16"
              style={{ background:"rgba(255,255,255,0.06)" }} />
            <div className="absolute w-56 h-56 rounded-full pointer-events-none -bottom-14 -left-10"
              style={{ background:"rgba(255,255,255,0.04)" }} />

            <div className="relative z-[1]">
              <div className="mb-6"><Tag label="Let's Build Together" /></div>

              <h2 className="text-white font-extrabold leading-[1.1] tracking-tight mb-4"
                style={{ fontSize:"clamp(1.9rem,4vw,3rem)" }}>
                Ready to Discuss<br />Your Project With Us?
              </h2>

              <p className="text-white/70 text-[15px] max-w-[420px] mx-auto mb-10 leading-[1.75]">
                Let's map out a technology strategy that solves today's challenges
                and positions you to lead tomorrow's digital landscape.
              </p>

              <div className="flex justify-center gap-3 flex-wrap">
                <Link href="/contact" className="bg-white text-blue-700 rounded-full px-8 py-4 text-[15px] font-bold
                                   flex items-center gap-2 border-0 cursor-pointer
                                   transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
                  Book a Free Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/contact" className="bg-transparent text-white/80 border-2 border-white/30 rounded-full
                                   px-8 py-4 text-[15px] font-medium cursor-pointer
                                   transition-all duration-200 hover:border-white/70 hover:text-white">
                  Talk to Sales
                </Link>
              </div>

              {/* Awards */}
              <div className="mt-12 pt-10 border-t border-white/[0.12]
                              grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  {n:"Clutch",      s:"4.9 avg · 80+ reviews"},
                  {n:"Upwork",      s:"Top Rated · 100% JSS"},
                  {n:"ISO 27001",   s:"Security Certified"},
                  {n:"AWS Partner", s:"Advanced Consulting"},
                ].map(a => (
                  <div key={a.n}>
                    <div className="text-[13px] font-bold text-white">{a.n}</div>
                    <div className="text-[11px] text-white/45 mt-1 leading-snug">{a.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </R>

        {/* Contact cards */}
        {/* <R d={100}>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon:"📞", label:"Phone",   val:"+61 466 558 862" },
              { icon:"✉️",  label:"Email",   val:"info@aisolutiontechnologies.com" },
              { icon:"📍", label:"Address", val:"33 East Street, Granville NSW 2142, Sydney" },
            ].map(c => (
              <div key={c.label}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4
                           flex items-center gap-3
                           transition-all duration-200 hover:border-blue-200 hover:shadow-sm">
                <span className="text-xl shrink-0">{c.icon}</span>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-400 uppercase tracking-[0.08em] font-semibold mb-0.5">
                    {c.label}
                  </div>
                  <div className="text-[13px] text-slate-900 font-medium truncate">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </R> */}
      </W>
    </section>
  );
}

/* ════════════════════════════════════
   PAGE ROOT
════════════════════════════════════ */
export default function AISolutionTechPage() {
  return (
    <main className={`${poppins.className} overflow-x-hidden antialiased`}>
      <style>{STYLES}</style>
      <Hero />
      <ProofBar />
      <StatsSection />
      <ProblemSection/>
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <FeaturesSection />
      <TechSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <GlobalSection />
    </main>
  );
}