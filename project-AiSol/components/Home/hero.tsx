"use client";

import { useEffect, useRef, useState } from "react";

const clients = [
  "Westpac", "Deloitte", "Telstra", "ANZ Bank", "Atlassian", "Canva",
];

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  "Enterprise Data Platforms",
  "AI & Intelligent Automation",
  "Cloud Migration",
  "Advanced Analytics",
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    // Animated grid / particle canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #060814;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hero-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* Gradient blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          top: -200px; left: -200px;
        }
        .blob-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%);
          bottom: -100px; right: 5%;
        }
        .blob-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%);
          top: 40%; right: 20%;
        }

        /* Grid overlay */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-top: 72px; /* navbar height */
        }

        .hero-main {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2.5rem 4rem;
          width: 100%;
        }

        /* Left column */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 50px;
          width: fit-content;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.1s forwards;
        }

        .hero-badge .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 8px rgba(99,102,241,0.8);
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 8px rgba(99,102,241,0.8); }
          50% { box-shadow: 0 0 16px rgba(99,102,241,1); }
        }

        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #ffffff;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.2s forwards;
        }

        .hero-heading .accent {
          display: block;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-heading .dim {
          color: rgba(255,255,255,0.35);
        }

        .hero-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
          max-width: 480px;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.35s forwards;
        }

        .service-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.45s forwards;
        }

        .pill {
          padding: 6px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          transition: all 0.2s ease;
          cursor: default;
        }

        .pill:hover {
          background: rgba(99,102,241,0.15);
          border-color: rgba(99,102,241,0.3);
          color: rgba(255,255,255,0.9);
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.5s forwards;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          background: #6366f1;
          color: #ffffff;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(99,102,241,0.3);
          letter-spacing: 0.01em;
        }

        .btn-primary:hover {
          background: #7c3aed;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(99,102,241,0.5);
        }

        .btn-primary .btn-icon {
          width: 28px; height: 28px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 15px 24px;
          color: rgba(255,255,255,0.7);
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          color: #ffffff;
          gap: 12px;
        }

        .btn-secondary svg {
          width: 18px; height: 18px;
        }

        /* Right column – card */
        .hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: fadeLeft 0.9s ease 0.4s forwards;
        }

        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hero-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 24px;
          padding: 2rem;
          width: 100%;
          max-width: 440px;
          backdrop-filter: blur(10px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }

        .hero-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .card-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .card-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(134,239,172,0.9);
          background: rgba(134,239,172,0.07);
          border: 1px solid rgba(134,239,172,0.15);
          padding: 4px 10px;
          border-radius: 50px;
        }

        .card-status .status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #86efac;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%,100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .card-solutions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 1.5rem;
        }

        .solution-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.2s ease;
          cursor: default;
        }

        .solution-row:hover {
          background: rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.2);
          transform: translateX(4px);
        }

        .solution-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .solution-text {
          flex: 1;
        }

        .solution-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          margin-bottom: 2px;
        }

        .solution-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
        }

        .solution-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 50px;
        }

        .tag-ai { background: rgba(99,102,241,0.15); color: #a5b4fc; }
        .tag-cloud { background: rgba(251,191,36,0.12); color: #fde68a; }
        .tag-data { background: rgba(52,211,153,0.12); color: #6ee7b7; }

        .card-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 1.25rem 0;
        }

        .card-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.03em;
        }

        /* Clients bar */
        .clients-bar {
          padding: 2rem 2.5rem;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.7s forwards;
        }

        .clients-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .clients-list {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .client-name {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.2s ease;
          cursor: default;
        }

        .client-name:hover {
          color: rgba(255,255,255,0.5);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .hero-main {
            grid-template-columns: 1fr;
            padding: 3rem 1.5rem 2rem;
            gap: 2rem;
          }
          .hero-right {
            order: -1;
          }
          .hero-card {
            max-width: 100%;
          }
          .clients-bar {
            padding: 1.5rem 1.5rem;
          }
          .clients-list {
            gap: 1.5rem;
          }
        }

        @media (max-width: 500px) {
          .hero-heading {
            font-size: 2.4rem;
          }
          .card-stats {
            gap: 0.5rem;
          }
        }
      `}</style>

      <section className="hero-root">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-overlay" />

        <div className="hero-inner">
          <div className="hero-main">
            {/* Left */}
            <div className="hero-left">
              <div className="hero-badge">
                <span className="badge-dot" />
                Sydney, Australia — AI & Data Experts
              </div>

              <h1 className="hero-heading">
                <span className="dim">TECHNOLOGY</span>
                <span>SOLUTIONS</span>
                <span className="accent">THAT SCALE</span>
              </h1>

              <p className="hero-desc">
                We help businesses unlock the full power of AI, cloud infrastructure,
                and enterprise data to accelerate growth and outpace the competition.
              </p>

              <div className="service-pills">
                {services.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>

              <div className="hero-cta-row">
                <button className="btn-primary">
                  <span className="btn-icon">⚡</span>
                  Book a Consultation
                </button>
                <button className="btn-secondary">
                  View Our Work
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 10h12M10 4l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="hero-right">
              <div className="hero-card">
                <div className="card-header">
                  <span className="card-label">Our Solutions</span>
                  <span className="card-status">
                    <span className="status-dot" />
                    Available Now
                  </span>
                </div>

                <div className="card-solutions">
                  {[
                    { icon: "🤖", name: "AI & Automation", sub: "Intelligent process automation", tag: "AI", tagClass: "tag-ai" },
                    { icon: "☁️", name: "Cloud Migration", sub: "AWS · Azure · GCP", tag: "Cloud", tagClass: "tag-cloud" },
                    { icon: "📊", name: "Data Engineering", sub: "Pipelines & governance", tag: "Data", tagClass: "tag-data" },
                  ].map((item) => (
                    <div key={item.name} className="solution-row">
                      <div className="solution-icon">{item.icon}</div>
                      <div className="solution-text">
                        <div className="solution-name">{item.name}</div>
                        <div className="solution-sub">{item.sub}</div>
                      </div>
                      <span className={`solution-tag ${item.tagClass}`}>{item.tag}</span>
                    </div>
                  ))}
                </div>

                <div className="card-divider" />

                <div className="card-stats">
                  {stats.map((s) => (
                    <div key={s.label} className="stat-item">
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Clients */}
          <div className="clients-bar">
            <div className="clients-label">Trusted by leading organisations</div>
            <div className="clients-list">
              {clients.map((c) => (
                <span key={c} className="client-name">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}