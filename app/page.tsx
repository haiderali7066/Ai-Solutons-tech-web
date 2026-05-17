"use client";

import { useEffect, useRef, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FAQ {
  q: string;
  a: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: "⚡", title: "AI Development", desc: "Custom AI models, LLM integrations, and intelligent systems built for your specific business needs." },
  { icon: "🤖", title: "AI Automation", desc: "Automate repetitive workflows, cut operational costs, and scale without adding headcount." },
  { icon: "💻", title: "Custom Software", desc: "Bespoke software engineered from scratch—designed around your processes, not the other way around." },
  { icon: "🌐", title: "Web Applications", desc: "Fast, modern, responsive web apps built with cutting-edge frameworks and optimized for performance." },
  { icon: "📱", title: "Mobile Apps", desc: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android." },
  { icon: "☁️", title: "SaaS Development", desc: "End-to-end SaaS platforms with multi-tenancy, billing, onboarding, and analytics built in." },
  { icon: "🔧", title: "Cloud Infrastructure", desc: "Scalable, secure cloud architecture on AWS, GCP, or Azure—architected for uptime and growth." },
  { icon: "📊", title: "Data Analytics", desc: "Turn raw data into actionable insight with dashboards, pipelines, and predictive models." },
];

const INDUSTRIES = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "💰" },
  { name: "Logistics", icon: "🚚" },
  { name: "Education", icon: "🎓" },
  { name: "Retail", icon: "🛍️" },
  { name: "Real Estate", icon: "🏗️" },
  { name: "Manufacturing", icon: "⚙️" },
  { name: "Startups", icon: "🚀" },
];

const WHY = [
  { title: "Experienced Team", desc: "Senior engineers and AI specialists with deep domain expertise across 50+ industries." },
  { title: "Modern Stack", desc: "We only work with battle-tested, cutting-edge technologies that scale." },
  { title: "Scalable Solutions", desc: "Every system we build is designed to grow with your business — zero re-architecting." },
  { title: "Fast Delivery", desc: "Agile sprints, weekly demos, and rapid iteration cycles keep projects moving." },
  { title: "Dedicated Support", desc: "24/7 post-launch support, proactive monitoring, and dedicated account management." },
  { title: "Secure Systems", desc: "Enterprise-grade security, compliance-ready architecture, and regular audits." },
];

const PROJECTS = [
  { year: "2024", client: "MediCore AI", title: "AI-powered diagnostic assistant for clinics", category: "Healthcare · AI", color: "#1a1a2e" },
  { year: "2024", client: "FinTrack Pro", title: "Real-time financial analytics SaaS platform", category: "Finance · SaaS", color: "#0d1f0d" },
  { year: "2023", client: "LogiFlow", title: "End-to-end logistics automation system", category: "Logistics · Automation", color: "#1a0d00" },
  { year: "2023", client: "EduSphere", title: "AI tutoring platform serving 50k students", category: "Education · Platform", color: "#0d0d1a" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Deep-dive into your business, goals, and technical requirements." },
  { step: "02", title: "Planning", desc: "Architecture, roadmap, sprint planning, and resource allocation." },
  { step: "03", title: "Design", desc: "UI/UX wireframes, prototypes, and design system creation." },
  { step: "04", title: "Development", desc: "Agile development with weekly demos and continuous integration." },
  { step: "05", title: "Testing", desc: "QA, load testing, security audits, and user acceptance testing." },
  { step: "06", title: "Deployment", desc: "Zero-downtime deployment to production with full monitoring." },
  { step: "07", title: "Support", desc: "Ongoing maintenance, feature updates, and 24/7 monitoring." },
];

const TECH = [
  "React", "Next.js", "Node.js", "Python", "TypeScript",
  "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker",
  "Kubernetes", "OpenAI APIs", "LangChain", "TensorFlow", "FastAPI",
];

const TESTIMONIALS = [
  {
    quote: "AI Solution Technologies transformed our entire operations. The automation system they built saved us 40 hours per week and cut errors to near zero.",
    name: "Sarah Al-Rashid",
    role: "COO, MediCore Health",
    rating: 5,
  },
  {
    quote: "The team delivered a world-class SaaS platform in 3 months. Their understanding of AI and scalable architecture is second to none.",
    name: "James Okonkwo",
    role: "Founder, FinTrack Pro",
    rating: 5,
  },
  {
    quote: "From discovery to deployment, everything was smooth. Our new platform handles 10x the traffic without breaking a sweat.",
    name: "Priya Mehta",
    role: "CTO, EduSphere",
    rating: 5,
  },
];

const BLOGS = [
  { tag: "AI Trends", read: "5 min read", title: "How LLMs Are Reshaping Enterprise Software in 2024", excerpt: "Large language models aren't just chatbots anymore — they're the backbone of a new generation of intelligent enterprise tools." },
  { tag: "Automation", read: "4 min read", title: "Business Automation: The ROI Numbers You Need to Know", excerpt: "We analysed 30 automation projects and the results are clear: smart automation pays for itself within 6 months." },
  { tag: "Development", read: "6 min read", title: "Why Most SaaS Platforms Fail at Scale (And How We Prevent It)", excerpt: "Architecture decisions made on day one haunt teams for years. Here's our approach to building for scale from the start." },
];

const FAQS: FAQ[] = [
  { q: "How long does a project take?", a: "Project timelines vary by scope. A simple web app takes 4–8 weeks. A full AI platform or enterprise system typically takes 3–6 months. We provide detailed timelines during our discovery phase." },
  { q: "What technologies do you use?", a: "We use React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, AWS, Docker, and OpenAI APIs, among others. We choose the best tool for each job, not the trendiest." },
  { q: "Do you provide support after launch?", a: "Yes. All projects include a 30-day post-launch warranty. We offer ongoing monthly support plans covering maintenance, updates, monitoring, and new feature development." },
  { q: "Can you build custom AI systems?", a: "Absolutely. AI development is our core speciality. We build custom LLM integrations, AI agents, automation pipelines, data pipelines, and computer vision systems tailored to your business." },
  { q: "Do you work with startups?", a: "Yes! We love working with early-stage startups. We offer flexible engagement models, including equity partnerships for the right projects. Get in touch and let's talk." },
];

const LOGOS = ["Acme Corp", "Nexus AI", "Orbit Labs", "Stratum", "Vexa", "Pulse", "Zeno", "Axon"];

const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "80+", label: "Global Clients" },
  { value: "6+", label: "Years of Experience" },
  { value: "40+", label: "Technologies Used" },
];

// ─── Hook: useInView ──────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Animated Section Wrapper (Updated with Slide-In from Left) ───────────────
function Reveal({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: "up" | "left" | "right" 
}) {
  const { ref, inView } = useInView();
  
  let transformInit = "translateY(40px)";
  if (direction === "left") transformInit = "translateX(-80px)";
  if (direction === "right") transformInit = "translateX(80px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : transformInit,
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Custom Cursor ────────────────────────────────────────────────────────────
function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring_pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    let raf: number;
    const lerp = () => {
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.1;
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.1;
      if (ring.current) {
        ring.current.style.left = `${ring_pos.current.x}px`;
        ring.current.style.top = `${ring_pos.current.y}px`;
      }
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot} style={{ position: "fixed", width: 8, height: 8, background: "#AAFF00", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, transform: "translate(-50%,-50%)", transition: "none" }} />
      <div ref={ring} style={{ position: "fixed", width: 36, height: 36, border: "1.5px solid rgba(170,255,0,0.5)", borderRadius: "50%", pointerEvents: "none", zIndex: 9998, transform: "translate(-50%,-50%)" }} />
    </>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
function Marquee({ items, speed = 30 }: { items: string[]; speed?: number }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", display: "flex" }}>
      <div style={{ display: "flex", gap: "3rem", animation: `marquee ${speed}s linear infinite`, whiteSpace: "nowrap", alignItems: "center" }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {item}
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#AAFF00", display: "inline-block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Scrolling Headline ───────────────────────────────────────────────────────
function ScrollHeadline({ text }: { text: string }) {
  const repeated = [text, text, text];
  return (
    <div style={{ overflow: "hidden", background: "#AAFF00", padding: "1.4rem 0" }}>
      <div style={{ display: "flex", animation: "marquee 18s linear infinite" }}>
        {repeated.map((t, i) => (
          <span key={i} style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, fontFamily: "'Outfit', sans-serif", color: "#0A0A0A", whiteSpace: "nowrap", paddingRight: "4rem", letterSpacing: "-0.02em" }}>
            {t} &nbsp;·&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Counter ──────────────────────────────────────────────────────────────────
function Counter({ value }: { value: string }) {
  const { ref, inView } = useInView();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    let start = 0;
    const dur = 2000;
    const step = Math.ceil(num / (dur / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      setDisplay(start + suffix);
      if (start >= num) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{inView ? display : "0"}</span>;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: "100vh", background: "#0A0A0A", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "9rem 2.5rem 4rem" }}>
      {/* Animated grid bg */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(170,255,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px", animation: "gridPulse 4s ease-in-out infinite" }} />

      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "15%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(170,255,0,0.08) 0%, transparent 70%)", borderRadius: "50%", animation: "blob1 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(0,150,255,0.06) 0%, transparent 70%)", borderRadius: "50%", animation: "blob2 10s ease-in-out infinite" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(170,255,0,0.1)", border: "1px solid rgba(170,255,0,0.25)", borderRadius: 100, padding: "0.4rem 1rem", marginBottom: "2rem", animation: "fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}>
              <span style={{ width: 8, height: 8, background: "#AAFF00", borderRadius: "50%", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#AAFF00" }}>Hiya, we're AI Solution Technologies 👋</span>
            </div>

            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 8vw, 7.5rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "#fff", margin: "0 0 1.5rem", animation: "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
              Transforming<br />
              <span style={{ color: "#AAFF00", display: "inline-block", animation: "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both" }}>Businesses</span><br />
              <span style={{ animation: "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both", display: "inline-block" }}>With AI.</span>
            </h1>

            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.55)", maxWidth: 560, lineHeight: 1.75, marginBottom: "2.5rem", animation: "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both" }}>
              We build intelligent software, automation systems, and scalable digital platforms for modern businesses ready to lead their industry.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both" }}>
              <a href="#contact" style={{ background: "#AAFF00", color: "#0A0A0A", padding: "0.9rem 2rem", borderRadius: 100, fontSize: "0.95rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(170,255,0,0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Start Your Project ↗
              </a>
              <a href="#about" style={{ background: "transparent", color: "#fff", padding: "0.9rem 2rem", borderRadius: 100, fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              >
                Book Free Consultation
              </a>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "3rem", animation: "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both" }}>
              <div style={{ display: "flex" }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{ width: 36, height: 36, borderRadius: "50%", background: `hsl(${i * 60},60%,50%)`, border: "2px solid #0A0A0A", marginLeft: i > 1 ? -10 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "#fff" }}>{i}</div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>{"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#AAFF00", fontSize: "0.9rem" }}>{s}</span>)}</div>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>5.0 from 69+ client reviews</p>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", animation: "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both" }} className="hero-cards">
            {[
              { label: "AI Systems Built", val: "120+", icon: "🤖" },
              { label: "Avg. ROI Increase", val: "3.4×", icon: "📈" },
              { label: "Uptime SLA", val: "99.9%", icon: "⚡" },
              { label: "Team Members", val: "35+", icon: "👥" },
            ].map((c, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "1.4rem", backdropFilter: "blur(10px)", transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(170,255,0,0.3)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(170,255,0,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                <div style={{ fontSize: "1.8rem", fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{c.val}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginTop: "0.2rem" }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Logos ────────────────────────────────────────────────────────────────────
function LogosSection() {
  return (
    <section style={{ background: "#0A0A0A", padding: "3rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <p style={{ textAlign: "center", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "2rem" }}>Trusted By Growing Businesses</p>
      <Marquee items={LOGOS} speed={25} />
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background: "#F5F5F0", padding: "8rem 2.5rem", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          <div>
            <Reveal>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#AAFF00", background: "#0A0A0A", padding: "0.3rem 0.8rem", borderRadius: 100 }}>· Who We Are</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#0A0A0A", margin: "1.2rem 0 1.5rem" }}>
                Building the future<br />with AI &<br /><em style={{ fontStyle: "italic", color: "#555" }}>Innovation.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                AI Solution Technologies is an independent AI-powered software and digital transformation company. Founded with a singular focus: to make intelligent technology accessible and actionable for businesses of every size.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                We specialize in AI automation, custom software, web and mobile apps, SaaS platforms, and enterprise systems designed to solve real business challenges.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="#contact" style={{ background: "#0A0A0A", color: "#fff", padding: "0.8rem 1.8rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#AAFF00"; e.currentTarget.style.color = "#0A0A0A"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#0A0A0A"; e.currentTarget.style.color = "#fff"; }}
                >
                  About Us ↗
                </a>
                <a href="#team" style={{ color: "#0A0A0A", padding: "0.8rem 1.8rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(0,0,0,0.15)", transition: "border-color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#0A0A0A"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)"; }}
                >
                  Meet the Team →
                </a>
              </div>
            </Reveal>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
              {STATS.map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div style={{ background: i === 0 ? "#0A0A0A" : i === 1 ? "#AAFF00" : "rgba(0,0,0,0.06)", padding: "2rem", borderRadius: 20, transition: "transform 0.3s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                  >
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "2.8rem", letterSpacing: "-0.04em", color: i === 0 ? "#AAFF00" : "#0A0A0A", lineHeight: 1 }}>
                      <Counter value={s.value} />
                    </div>
                    <div style={{ fontSize: "0.85rem", color: i === 0 ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)", marginTop: "0.5rem", fontWeight: 500 }}>{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" style={{ background: "#0A0A0A", padding: "8rem 2.5rem", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#AAFF00" }}>· Our Expertise</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#fff", margin: "0.8rem 0 0" }}>
                How we take your<br />business to the next level
              </h2>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 320, fontSize: "0.95rem", lineHeight: 1.7 }}>
              We are a digital innovation agency on a mission to help you take the next step in your business.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden" }}>
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08}>
              <div style={{ padding: "2.5rem", background: "#0A0A0A", transition: "all 0.3s", cursor: "default", position: "relative", overflow: "hidden", height: "100%" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "rgba(170,255,0,0.05)"; d.querySelector(".svc-icon")!.setAttribute("style", "font-size:2rem; margin-bottom:1.2rem; transform:scale(1.2); transition:transform 0.3s;"); }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "#0A0A0A"; d.querySelector(".svc-icon")!.setAttribute("style", "font-size:2rem; margin-bottom:1.2rem; transform:scale(1); transition:transform 0.3s;"); }}
              >
                <div className="svc-icon" style={{ fontSize: "2rem", marginBottom: "1.2rem", transition: "transform 0.3s" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff", margin: "0 0 0.8rem", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: 28, height: 28, border: "1px solid rgba(170,255,0,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#AAFF00" }}>↗</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="#contact" style={{ background: "#AAFF00", color: "#0A0A0A", padding: "0.9rem 2.2rem", borderRadius: 100, fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 32px rgba(170,255,0,0.5)"; e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              See All Services ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Why Choose Us (Upgraded with Left-Slide) ─────────────────────────────────
function WhyUs() {
  return (
    <section style={{ background: "#F5F5F0", padding: "8rem 2.5rem", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0A0A0A", background: "#AAFF00", padding: "0.3rem 0.8rem", borderRadius: 100 }}>· Why Us</span>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#0A0A0A", margin: "1.2rem 0 3.5rem" }}>
            Why choose AI Solution<br />Technologies
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {WHY.map((w, i) => (
            <Reveal key={i} delay={i * 0.1} direction="left">
              <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 20, padding: "2.5rem", transition: "all 0.3s", cursor: "default", height: "100%" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(-8px)"; d.style.boxShadow = "0 24px 60px rgba(0,0,0,0.1)"; d.style.borderColor = "#AAFF00"; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(0)"; d.style.boxShadow = "none"; d.style.borderColor = "rgba(0,0,0,0.07)"; }}
              >
                <div style={{ width: 44, height: 44, background: "#0A0A0A", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#AAFF00", fontWeight: 800, fontSize: "1rem", marginBottom: "1.5rem", fontFamily: "'Outfit', sans-serif" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#0A0A0A", margin: "0 0 0.8rem" }}>{w.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
function Industries() {
  return (
    <section style={{ background: "#0A0A0A", padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#AAFF00" }}>· Sectors</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#fff", margin: "0.8rem 0 0" }}>
              Industries We Serve
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "2rem", textAlign: "center", transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "rgba(170,255,0,0.08)"; d.style.borderColor = "rgba(170,255,0,0.3)"; d.style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "rgba(255,255,255,0.04)"; d.style.borderColor = "rgba(255,255,255,0.06)"; d.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{ind.icon}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#fff", letterSpacing: "-0.01em" }}>{ind.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
function Portfolio() {
  return (
    <section id="work" style={{ background: "#0A0A0A", padding: "4rem 2.5rem 8rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#AAFF00" }}>· Our Work</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#fff", margin: "0.8rem 0 0" }}>
                Take a look at<br />our projects
              </h2>
            </div>
            <a href="#" style={{ color: "#AAFF00", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem" }}>View all projects →</a>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="portfolio-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ background: p.color, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "transform 0.3s", position: "relative" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
              >
                {/* Mock project visual */}
                <div style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", background: `${p.color}`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(170,255,0,0.05), transparent)" }} />
                  <span style={{ fontSize: "3.5rem", filter: "drop-shadow(0 0 30px rgba(170,255,0,0.3))" }}>
                    {["🤖", "📊", "🚚", "🎓"][i]}
                  </span>
                </div>
                <div style={{ padding: "1.8rem" }}>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", margin: "0 0 0.5rem", letterSpacing: "0.08em" }}>{p.year} · {p.category}</p>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>{p.title}</h3>
                </div>
                <div style={{ position: "absolute", top: "1.2rem", right: "1.2rem", width: 32, height: 32, background: "rgba(170,255,0,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "#0A0A0A", fontWeight: 700 }}>↗</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <div>
      <ScrollHeadline text="Let's work together. Let's build something amazing. Let's innovate." />
    </div>
  );
}

// ─── Process (Upgraded with Left-Slide) ───────────────────────────────────────
function Process() {
  return (
    <section id="process" style={{ background: "#F5F5F0", padding: "8rem 2.5rem", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", background: "#0A0A0A", color: "#AAFF00", padding: "0.3rem 0.8rem", borderRadius: 100 }}>· How We Work</span>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#0A0A0A", margin: "1.2rem 0 3.5rem" }}>
            Our Development<br />Process
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {PROCESS.map((p, i) => (
            <Reveal key={i} delay={i * 0.12} direction="left">
              <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 20, padding: "2rem", position: "relative", transition: "all 0.3s", height: "100%" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(-6px)"; d.style.boxShadow = "0 24px 60px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(0)"; d.style.boxShadow = "none"; }}
              >
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "3.5rem", color: "rgba(0,0,0,0.06)", lineHeight: 1, marginBottom: "0.5rem" }}>{p.step}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0A0A0A", margin: "0 0 0.7rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────
function TechStack() {
  return (
    <section style={{ background: "#0A0A0A", padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#AAFF00" }}>· Stack</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#fff", margin: "0.8rem 0 0" }}>
              Technologies We Use
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center" }}>
          {TECH.map((t, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "0.6rem 1.4rem", fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em", cursor: "default", transition: "all 0.2s" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "rgba(170,255,0,0.1)"; d.style.borderColor = "rgba(170,255,0,0.4)"; d.style.color = "#AAFF00"; d.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "rgba(255,255,255,0.05)"; d.style.borderColor = "rgba(255,255,255,0.08)"; d.style.color = "rgba(255,255,255,0.7)"; d.style.transform = "translateY(0)"; }}
              >
                {t}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#F5F5F0", padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", background: "#0A0A0A", color: "#AAFF00", padding: "0.3rem 0.8rem", borderRadius: 100 }}>· Testimonials</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#0A0A0A", margin: "1.2rem 0 0" }}>
              What Clients Say
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ background: "#0A0A0A", borderRadius: 24, padding: "3.5rem", maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <div style={{ fontSize: "3rem", color: "#AAFF00", lineHeight: 1, marginBottom: "1.5rem", fontFamily: "serif" }}>"</div>
            <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "#fff", lineHeight: 1.75, fontStyle: "italic", marginBottom: "2.5rem" }}>
              {TESTIMONIALS[active].quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#AAFF00", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: "#0A0A0A", fontSize: "1.1rem" }}>
                {TESTIMONIALS[active].name[0]}
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>{TESTIMONIALS[active].name}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>{TESTIMONIALS[active].role}</div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 3 }}>{"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#AAFF00" }}>{s}</span>)}</div>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", marginTop: "2rem" }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? 28 : 8, height: 8, borderRadius: 100, background: i === active ? "#AAFF00" : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Blog ─────────────────────────────────────────────────────────────────────
function Blog() {
  return (
    <section id="blog" style={{ background: "#0A0A0A", padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#AAFF00" }}>· Blog</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#fff", margin: "0.8rem 0 0" }}>
                Latest Insights
              </h2>
            </div>
            <a href="#" style={{ background: "#AAFF00", color: "#0A0A0A", padding: "0.7rem 1.5rem", borderRadius: 100, fontSize: "0.85rem", fontWeight: 700, textDecoration: "none" }}>View the Blog →</a>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {BLOGS.map((b, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "2rem", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "rgba(170,255,0,0.05)"; d.style.borderColor = "rgba(170,255,0,0.2)"; d.style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = "rgba(255,255,255,0.04)"; d.style.borderColor = "rgba(255,255,255,0.07)"; d.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", gap: "0.7rem", marginBottom: "1.2rem" }}>
                  <span style={{ background: "rgba(170,255,0,0.12)", color: "#AAFF00", padding: "0.2rem 0.7rem", borderRadius: 100, fontSize: "0.72rem", fontWeight: 700 }}>{b.tag}</span>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", padding: "0.2rem 0" }}>· {b.read}</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff", margin: "0 0 0.8rem", lineHeight: 1.4, letterSpacing: "-0.02em" }}>{b.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 1.5rem" }}>{b.excerpt}</p>
                <span style={{ color: "#AAFF00", fontSize: "0.82rem", fontWeight: 600 }}>Read more →</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#F5F5F0", padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", background: "#0A0A0A", color: "#AAFF00", padding: "0.3rem 0.8rem", borderRadius: 100 }}>· FAQ</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#0A0A0A", margin: "1.2rem 0 0" }}>
              Common Questions
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, overflow: "hidden", transition: "border-color 0.3s", ...(open === i ? { borderColor: "#AAFF00" } : {}) }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", padding: "1.4rem 1.8rem", textAlign: "left", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#0A0A0A" }}>{f.q}</span>
                  <span style={{ color: open === i ? "#AAFF00" : "#0A0A0A", fontSize: "1.2rem", fontWeight: 300, transition: "transform 0.3s, color 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                <div style={{ maxHeight: open === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                  <p style={{ padding: "0 1.8rem 1.4rem", fontSize: "0.9rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", service: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#0A0A0A", padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
          <div>
            <Reveal>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#AAFF00" }}>· Get In Touch</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#fff", margin: "1rem 0 1.5rem" }}>
                Let's Build Something<br /><span style={{ color: "#AAFF00" }}>Amazing.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "3rem" }}>
                Ready to transform your business? Drop us a message and we'll get back to you within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              {[
                { icon: "✉️", label: "Email", val: "hello@aisolutiontech.com" },
                { icon: "📞", label: "Phone", val: "+1 (555) 000-0000" },
                { icon: "📍", label: "Office", val: "123 Tech Street, San Francisco, CA" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div style={{ width: 40, height: 40, background: "rgba(170,255,0,0.1)", border: "1px solid rgba(170,255,0,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{c.label}</div>
                    <div style={{ color: "#fff", fontSize: "0.9rem" }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            {sent ? (
              <div style={{ background: "rgba(170,255,0,0.08)", border: "1px solid rgba(170,255,0,0.3)", borderRadius: 20, padding: "4rem", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#AAFF00", marginBottom: "0.8rem" }}>Message Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "2.5rem" }}>
                {[
                  { label: "Your Name", key: "name", type: "text", placeholder: "John Smith" },
                  { label: "Email Address", key: "email", type: "email", placeholder: "john@company.com" },
                  { label: "Service Needed", key: "service", type: "select", placeholder: "" },
                ].map((field) => (
                  <div key={field.key} style={{ marginBottom: "1.4rem" }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{field.label}</label>
                    {field.type === "select" ? (
                      <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ width: "100%", padding: "0.9rem 1.2rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: form.service ? "#fff" : "rgba(255,255,255,0.3)", fontSize: "0.9rem", outline: "none", appearance: "none" }}>
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s.title} value={s.title} style={{ background: "#1a1a1a" }}>{s.title}</option>)}
                      </select>
                    ) : (
                      <input type={field.type} placeholder={field.placeholder} value={(form as any)[field.key]} onChange={e => setForm({ ...form, [field.key]: e.target.value })} style={{ width: "100%", padding: "0.9rem 1.2rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: "0.9rem", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "rgba(170,255,0,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    )}
                  </div>
                ))}
                <div style={{ marginBottom: "1.8rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Message</label>
                  <textarea placeholder="Tell us about your project..." rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ width: "100%", padding: "0.9rem 1.2rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: "0.9rem", outline: "none", boxSizing: "border-box", resize: "none", fontFamily: "inherit", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "rgba(170,255,0,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>
                <button onClick={handleSubmit} style={{ width: "100%", background: "#AAFF00", color: "#0A0A0A", padding: "1rem", borderRadius: 10, fontSize: "0.95rem", fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.02em", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 40px rgba(170,255,0,0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Send Message ↗
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ background: "#AAFF00", padding: "8rem 2.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div style={{ position: "relative" }}>
        <Reveal>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: "1rem" }}>· Don't wait</p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1.05, letterSpacing: "-0.05em", color: "#0A0A0A", margin: "0 0 1.5rem" }}>
            Ready to Transform<br />Your Business?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(0,0,0,0.6)", maxWidth: 500, margin: "0 auto 3rem", lineHeight: 1.7 }}>
            Join 80+ businesses already growing with AI Solution Technologies.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" style={{ background: "#0A0A0A", color: "#AAFF00", padding: "1rem 2.5rem", borderRadius: 100, fontSize: "1rem", fontWeight: 700, textDecoration: "none", fontFamily: "'Outfit', sans-serif", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Get Started ↗
            </a>
            <a href="#contact" style={{ background: "transparent", color: "#0A0A0A", padding: "1rem 2.5rem", borderRadius: 100, fontSize: "1rem", fontWeight: 600, textDecoration: "none", border: "2px solid rgba(0,0,0,0.25)", transition: "border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#0A0A0A"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.25)"; }}
            >
              Schedule a Meeting
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');


        html { scroll-behavior: smooth; }

        body {
          font-family: 'Inter', sans-serif;
          background: #0A0A0A;
          color: #fff;
          overflow-x: hidden;
          cursor: none;
        }

        ::selection { background: #AAFF00; color: #0A0A0A; }

       

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.1); }
        }

        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(0.9); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Responsive: nav */
        @media (max-width: 768px) {
          
          .about-grid, .contact-grid { grid-template-columns: 1fr !important; }
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-cards { display: none !important; }
        }
      `}</style>

      <Cursor />
      {/* <Navbar /> */}
      <main>
        <Hero />
        <LogosSection />
        <About />
        <Services />
        <WhyUs />
        <Industries />
        <Portfolio />
        <CTABanner />
        <Process />
        <TechStack />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
    </>
  );
}