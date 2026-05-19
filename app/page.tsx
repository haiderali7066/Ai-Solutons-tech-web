"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/* ─── Minimal Global Keyframes ─── */
const KEYFRAMES = `
  @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
  @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0.25} }
  @keyframes pulse  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
  @keyframes shimmer{ 0%{background-position:-200% center} 100%{background-position:200% center} }
  .ha1{animation:fadeUp .7s ease .10s both}
  .ha2{animation:fadeUp .8s ease .20s both}
  .ha3{animation:fadeUp .8s ease .35s both}
  .ha4{animation:fadeUp .8s ease .50s both}
  .ha5{animation:fadeUp .8s ease .65s both}
  .pip{animation:blink 2s infinite}
  .cta-bg::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");pointer-events:none;z-index:0;}
  .svc-card:hover .svc-icon{animation:pulse .6s ease;}
  .gradient-text{background:linear-gradient(90deg,#60a5fa,#a5b4fc,#60a5fa);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 3s linear infinite;}
`;

/* ─── Scroll Reveal Hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated Counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useReveal();
  useEffect(() => {
    if (!visible) return;
    let n = 0;
    const step = to / 55;
    const id = setInterval(() => {
      n += step;
      if (n >= to) { setVal(to); clearInterval(id); }
      else setVal(Math.floor(n));
    }, 18);
    return () => clearInterval(id);
  }, [visible, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ─── Reveal Wrapper ─── */
function R({
  children, d = 0, from = "bottom",
}: {
  children: React.ReactNode; d?: number; from?: "bottom" | "left" | "right";
}) {
  const { ref, visible } = useReveal();
  const init: Record<string, string> = {
    bottom: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : init[from],
        transition: `opacity 0.75s ease ${d}ms, transform 0.75s cubic-bezier(.16,1,.3,1) ${d}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Tag Pill ─── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
      <span className="pip w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
      {children}
    </span>
  );
}

/* ─── Section Head ─── */
function SectionHead({
  tag, title, sub, dark = false,
}: {
  tag: string; title: React.ReactNode; sub?: React.ReactNode; dark?: boolean;
}) {
  return (
    <R>
      <div className="text-center mb-14">
        <Tag>{tag}</Tag>
        <h2
          className={`mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-tight ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
        {sub && (
          <p className={`mt-3 text-base font-light max-w-xl mx-auto ${dark ? "text-slate-400" : "text-slate-500"}`}>
            {sub}
          </p>
        )}
      </div>
    </R>
  );
}

/* ════════════════════════════════════════════
   HERO
════════════════════════════════════════════ */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay loop muted playsInline
        onCanPlay={() => setLoaded(true)}
        style={{ opacity: loaded ? 0.35 : 0, transition: "opacity 1.8s ease" }}
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Multi-tone overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(29,78,216,0.35) 50%, rgba(15,23,42,0.97) 100%)",
        }}
      />
      {/* Blue glow blob */}
      <div
        className="absolute z-10 rounded-full blur-3xl opacity-20"
        style={{
          width: 600, height: 600, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />

      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 py-36 text-center">
        <div className="ha1">
          <Tag>Intelligence That Accelerates Growth</Tag>
        </div>

        <h1 className="ha2 mt-6 mb-5 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
          Transform Your Business
          <br />
          With{" "}
          <span className="gradient-text italic font-semibold">AI & Data</span>
        </h1>

        <p className="ha3 text-base md:text-lg font-light leading-relaxed text-slate-400 max-w-lg mx-auto mb-10">
          AI Solution Tech Technologies delivers enterprise-grade AI, cloud modernisation,
          and data engineering — from strategy to production, in weeks not months.
        </p>

        <div className="ha4 flex justify-center gap-3 flex-wrap">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)]"
          >
            Start Your Journey
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="bg-transparent text-white border-2 border-white/20 hover:border-white/50 rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-200 flex items-center gap-2">
            ▶ Watch Demo
          </button>
        </div>

        <div className="ha5 flex items-center justify-center gap-3 mt-10">
          <div className="flex">
            {[
              "photo-1531123897727-8f129e1bf98a",
              "photo-1507003211169-0a1dd7228f2d",
              "photo-1500648767791-00dcc994a43e",
            ].map((id, i) => (
              <img
                key={id}
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=80&q=80`}
                alt="client"
                className="w-9 h-9 rounded-full border-2 border-slate-950 object-cover"
                style={{ marginLeft: i === 0 ? 0 : -8 }}
              />
            ))}
          </div>
          <div className="text-left">
            <div className="text-blue-400 text-sm tracking-wider">★★★★★</div>
            <div className="text-xs text-slate-400">
              Rated <strong className="text-white">4.9</strong> by 200+ enterprise clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Press Bar ─── */
function PressBar() {
  const names = ["Westpac", "Telstra", "ANZ Bank", "Atlassian", "Canva", "Deloitte"];
  return (
    <div className="bg-white border-y border-slate-100 py-5">
      <div className="max-w-6xl mx-auto px-7 flex items-center justify-center gap-10 flex-wrap">
        {names.map((n) => (
          <span
            key={n}
            className="text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-slate-500 transition-colors cursor-default"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   WHY CHOOSE US — STATS
════════════════════════════════════════════ */
function WhySection() {
  const stats = [
    {
      val: <><Counter to={180} suffix="+" /></>,
      label: "Personalised Solutions",
      sub: "Learning paths powered by intelligent algorithms",
      bg: "bg-blue-700",
      textColor: "text-white",
      labelColor: "text-blue-200",
      subColor: "text-blue-300/70",
      dotColor: "bg-white/40",
    },
    {
      val: <><Counter to={2400000} />+</>,
      label: "Businesses Empowered",
      sub: "Enterprises across Australia & globally",
      bg: "bg-white border border-slate-100",
      textColor: "text-slate-900",
      labelColor: "text-slate-500",
      subColor: "text-slate-400",
      dotColor: "bg-blue-500",
    },
    {
      val: <><Counter to={92} suffix="%" /></>,
      label: "Faster Skill Mastery",
      sub: "Accelerate your growth curve with smarter delivery",
      bg: "bg-slate-900",
      textColor: "text-white",
      labelColor: "text-slate-400",
      subColor: "text-slate-600",
      dotColor: "bg-blue-500",
    },
    {
      val: <><Counter to={1} suffix="M+" /></>,
      label: "Questions Answered",
      sub: "Answered with clarity, speed and precision",
      bg: "bg-blue-50 border border-blue-100",
      textColor: "text-slate-900",
      labelColor: "text-slate-500",
      subColor: "text-slate-400",
      dotColor: "bg-blue-500",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-7">
        <SectionHead
          tag="Why Choose Us"
          title={<>Redefining Enterprise Technology<br /><span className="text-slate-400">Through Hyper-Personalised AI</span></>}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <R key={i} d={i * 80}>
              <div className={`${s.bg} rounded-2xl p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
                <div>
                  <span className={`inline-block w-2 h-2 rounded-full ${s.dotColor} mb-3`} />
                  <div className={`text-4xl font-bold tracking-tight ${s.textColor}`}>{s.val}</div>
                  <div className={`text-xs font-semibold uppercase tracking-wider mt-1 ${s.labelColor}`}>{s.label}</div>
                </div>
                <p className={`text-xs leading-relaxed mt-3 ${s.subColor}`}>{s.sub}</p>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   SERVICES (NEW SECTION)
════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Strategy & Consulting",
    desc: "We partner with your leadership to design a bespoke AI roadmap — from opportunity identification to ROI projections and phased delivery plans.",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
    title: "Data Engineering & Analytics",
    desc: "End-to-end data pipelines, lakehouses, and real-time analytics that turn raw data into competitive intelligence — at enterprise scale.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.78 2.096A4.001 4.001 0 0 0 3 15z" />
      </svg>
    ),
    title: "Cloud Modernisation",
    desc: "Migrate legacy systems to AWS, Azure, or GCP with zero downtime. We architect resilient, cost-optimised cloud infrastructure built to scale.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom AI Development",
    desc: "From LLM-powered applications to computer vision systems — we build, fine-tune, and deploy bespoke AI models tailored to your domain.",
    accent: "from-indigo-600 to-blue-700",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    title: "Machine Learning & MLOps",
    desc: "Production-grade ML pipelines with automated retraining, drift detection, and full observability — so your models stay accurate over time.",
    accent: "from-blue-700 to-violet-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Process Automation",
    desc: "Intelligent RPA and workflow automation that eliminates repetitive tasks, reduces errors, and frees your team for high-value strategic work.",
    accent: "from-sky-600 to-blue-500",
  },
];

function ServicesSection() {
  return (
    <section className="bg-slate-950 py-28 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-7">
        <SectionHead
          tag="Our Services"
          title={<>Enterprise AI Solution Techs<br /><span className="text-slate-500">Built for Real Results</span></>}
          sub="From strategy to deployment — every service is designed to deliver measurable impact, fast."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <R key={s.title} d={i * 80} from={i % 2 === 0 ? "left" : "right"}>
              <div className="svc-card group relative bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-blue-600/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] transition-all duration-300 overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
                />

                {/* Icon */}
                <div className={`svc-icon w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  {s.icon}
                </div>

                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                  {s.desc}
                </p>

                <div className="mt-5 flex items-center gap-1 text-xs text-blue-500 font-semibold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FEATURES — CORE INTELLIGENCE
════════════════════════════════════════════ */
function FeaturesSection() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-7">
        <SectionHead
          tag="Core Intelligence"
          title={<>Features Tailored To Your<br /><span className="text-slate-400">Unique Business Style</span></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Feature 1 – Progress Analytics */}
          <R d={0} from="left">
            <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="h-44 rounded-xl mb-6 flex items-end justify-center gap-1.5 px-4 pb-3 overflow-hidden" style={{ background: "linear-gradient(135deg,#eff6ff,#dbeafe)" }}>
                {[55, 70, 45, 90, 60, 110, 80, 95, 65, 100].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-t flex-1 max-w-[22px] transition-all duration-500"
                    style={{
                      height: h,
                      background: i === 6 ? "#2563eb" : `rgba(37,99,235,${0.15 + i * 0.05})`,
                    }}
                  />
                ))}
                <div className="absolute top-3 right-3 bg-white rounded-lg px-2.5 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                  −7 Days
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Progress Analytics</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Predictive insights reveal when you'll master each concept. Track streaks, identify weak areas, and celebrate breakthroughs.
              </p>
            </div>
          </R>

          {/* Feature 2 – Personalised Learning Path */}
          <R d={100} from="right">
            <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="h-44 rounded-xl mb-6 flex flex-col justify-center gap-3 px-5" style={{ background: "linear-gradient(135deg,#eff6ff,#e0e7ff)" }}>
                {["Assessment", "Core Concepts", "Build Projects"].map((p, i) => (
                  <div
                    key={p}
                    className="bg-white rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 shadow-sm flex items-center gap-2"
                    style={{ marginLeft: i * 16 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                    {p}
                    <span className="ml-auto text-blue-500 text-[10px]">→</span>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Personalised Learning Path</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                AI designs a solution journey tailored to your goals, adapting in real time to business needs and market shifts.
              </p>
            </div>
          </R>

          {/* Feature 3 – AI Tutor Chat */}
          <R d={150} from="left">
            <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="h-44 rounded-xl mb-6 flex flex-col justify-center gap-3 px-5" style={{ background: "linear-gradient(135deg,#f8fafc,#f0f4ff)" }}>
                {[
                  { id: "photo-1531123897727-8f129e1bf98a", name: "Sarah Chen", role: "Data Engineer" },
                  { id: "photo-1507003211169-0a1dd7228f2d", name: "James Porter", role: "AI Lead" },
                  { id: "photo-1519085360753-af0119f7cbe7", name: "Michael Ross", role: "Cloud Architect" },
                ].map((u, i) => (
                  <div key={u.name} className="flex items-center gap-3" style={{ opacity: 1 - i * 0.2 }}>
                    <img
                      src={`https://images.unsplash.com/${u.id}?auto=format&fit=crop&w=80&q=80`}
                      alt={u.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <span className="text-xs font-semibold text-slate-800">{u.name}</span>
                    <span className="text-[10px] text-blue-600 font-medium">{u.role}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Tutor Chat</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Get instant, personalised explanations tailored to your team. Ask anything and understand with clarity and depth.
              </p>
            </div>
          </R>

          {/* Feature 4 – Smart Content Generator */}
          <R d={200} from="right">
            <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className="h-44 rounded-xl mb-6 flex items-center justify-center px-5" style={{ background: "linear-gradient(135deg,#eff6ff,#dbeafe)" }}>
                <div className="w-full max-w-xs bg-white rounded-xl p-4 shadow-md">
                  <p className="text-xs text-slate-400 mb-3">Type your prompt here...</p>
                  <div className="h-8 rounded-lg mb-3" style={{ background: "linear-gradient(90deg,rgba(37,99,235,0.12),rgba(99,102,241,0.12))" }} />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {["AI Docs", "Reports", "Analytics"].map((t) => (
                        <span key={t} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{t}</span>
                      ))}
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">↑</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Content Generator</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Create AI-powered reports, documentation, and data insights instantly from any topic — your personal content engine.
              </p>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   BENEFITS
════════════════════════════════════════════ */
function BenefitsSection() {
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-7">
        <SectionHead
          tag="Benefits"
          title={<>Empowering Every Business<br /><span className="text-slate-400">And Team With AI</span></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <R from="left">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Smart AI Adoption"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white font-semibold text-lg leading-snug">Smart AI Adoption For Modern Enterprises</h4>
                <p className="text-slate-300 text-xs mt-1">Technology that empowers your people, not replaces them.</p>
              </div>
            </div>
          </R>
          <R from="right" d={100}>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80"
                alt="Transform Operations"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white font-semibold text-lg leading-snug">Transform Operations By Saving Time, Inspiring Growth</h4>
                <p className="text-slate-300 text-xs mt-1">Automation that frees your team for high-value work.</p>
              </div>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   TESTIMONIALS
════════════════════════════════════════════ */
const TESTIMONIALS = [
  {
    q: "AIST transformed our entire data infrastructure in under 6 months. The impact on decision-making speed has been extraordinary.",
    name: "Sarah Allen", role: "CTO, FinCore Australia",
    img: "photo-1531123897727-8f129e1bf98a",
  },
  {
    q: "They built our SaaS platform from scratch in 8 weeks. The code quality and AI features were beyond what we expected.",
    name: "David Matthews", role: "VP Engineering, Telstra",
    img: "photo-1506794778202-cad84cf45f1d",
  },
  {
    q: "Working with AI Solution Tech Technologies transformed how we handle onboarding. What took 3 days is now fully automated.",
    name: "Tariq Hussain", role: "COO, FinEdge Capital",
    img: "photo-1472099645785-5658abf4ff4e",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-7">
        <SectionHead
          tag="Testimonials"
          title={<>Real Stories From Clients<br /><span className="text-slate-400">Achieving Success</span></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <R key={t.name} d={i * 100}>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="text-blue-500 text-sm tracking-wider mb-4">★★★★★</div>
                <p className="text-sm leading-relaxed text-slate-500 italic mb-6">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://images.unsplash.com/${t.img}?auto=format&fit=crop&w=80&q=80`}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CTA
════════════════════════════════════════════ */
function CTASection() {
  const creds = [
    { name: "Clutch",      sub: "4.9 avg score\n80+ reviews" },
    { name: "Upwork",      sub: "Top Rated\n100% job success" },
    { name: "ISO 27001",   sub: "Security\nCertified" },
    { name: "AWS Partner", sub: "Advanced\nConsulting" },
  ];

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-7">
        <R>
          <div
            className="cta-bg relative rounded-3xl p-16 text-center overflow-hidden shadow-[0_30px_80px_rgba(37,99,235,0.22)]"
            style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb,#3b82f6)" }}
          >
            <div className="relative z-10">
              <Tag>Ready to Start?</Tag>

              <h2 className="mt-6 mb-4 text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Ready to Discuss<br />Your Project With Us?
              </h2>
              <p className="text-blue-100 text-base leading-relaxed max-w-md mx-auto mb-10">
                Let's map out a technology strategy that solves today's challenges and positions you to lead tomorrow's landscape.
              </p>

              <div className="flex justify-center gap-3 flex-wrap">
                <button className="bg-white text-blue-700 rounded-full px-8 py-3.5 text-sm font-bold flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  Book a Free Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="bg-transparent text-white border-2 border-white/30 hover:border-white/70 rounded-full px-8 py-3.5 text-sm font-medium transition-all">
                  Talk to Sales
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
                {creds.map((c) => (
                  <div key={c.name}>
                    <div className="text-sm font-bold text-white">{c.name}</div>
                    <div className="text-xs text-blue-200/70 mt-1 leading-relaxed whitespace-pre-line">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════════ */
export default function AISolutionTechPage() {
  return (
    <main className={`${poppins.className} bg-slate-50 text-slate-900 overflow-x-hidden antialiased`}>
      <style>{KEYFRAMES}</style>
      <Hero />
      <PressBar />
      <WhySection />
      <ServicesSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}