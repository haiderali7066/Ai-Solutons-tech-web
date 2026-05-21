"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const COL_COUNT = 7;

const SERVICES = [
  {
    num: "01",
    title: "AI & Applied Intelligence",
    desc: "From AI readiness assessments and predictive analytics to Document AI, intelligent decision platforms, and autonomous Agentic AI systems.",
    tags: ["Agentic AI", "Machine Learning", "OCR Automation"],
    href: "/services/ai-intelligence",
  },
  {
    num: "02",
    title: "Data Platforms & Engineering",
    desc: "Modern data architecture including Azure-based lakehouses, Data Vault 2.0 modeling, Master Data Management (MDM), and continuous integration pipelines.",
    tags: ["Data Lakehouse", "Azure Data", "Data Vault 2.0"],
    href: "/services/data-engineering",
  },
  {
    num: "03",
    title: "Cloud Migration & Modernisation",
    desc: "Seamless, zero-downtime application migration to cloud environments with modern, high-performance API-first infrastructure architectures.",
    tags: ["Cloud Strategy", "Azure Migration", "API-First"],
    href: "/services/cloud-modernisation",
  },
  {
    num: "04",
    title: "AI Agents & Operational Automation",
    desc: "Intelligent autonomous agents and workflow optimization models designed to eliminate repetitive administrative friction and maximize workforce potential.",
    tags: ["Intelligent Agents", "Workflow RPA", "Process Optimisation"],
    href: "/services/ai-agents-automation",
  },
  {
    num: "05",
    title: "Analytics & Business Reporting",
    desc: "Enterprise Power BI dashboard suites, real-time data streaming analytics, and executive intelligence platforms built for faster, smarter decision cycles.",
    tags: ["Power BI", "Data Visualisation", "Real-Time BI"],
    href: "/services/analytics-reporting",
  },
  {
    num: "06",
    title: "Data Governance & Compliance",
    desc: "Robust lineage management, metadata frameworks, security access controls, and regulatory reporting models tailored for highly governed market sectors.",
    tags: ["Governance", "Lineage Management", "Compliance"],
    href: "/services/governance-compliance",
  },
];

function GridLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        gridTemplateColumns: `repeat(${COL_COUNT}, 1fr)`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: COL_COUNT - 1 }).map((_, i) => (
        <div
          key={i}
          style={{
            borderRight: "1px solid rgba(255, 255, 255, 0.03)",
            height: "100%",
          }}
        />
      ))}
    </div>
  );
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const servicesWordRef = useRef<HTMLSpanElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  rowRefs.current = [];

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%", // ◄ Reduced from +=140% to prevent excess scrolling gap
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(servicesWordRef.current, {
        scale: 5,
        opacity: 0,
        transformOrigin: "center center",
      });

      gsap.set(line2Ref.current, { opacity: 0, y: 35 });
      gsap.set(line3Ref.current, { opacity: 0, y: 50 });

      tl.to(servicesWordRef.current, { scale: 1, opacity: 1, ease: "power3.out", duration: 0.5 }, 0)
        .to(line2Ref.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.38 }, 0.25)
        .to(line3Ref.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.38 }, 0.42);

      rowRefs.current.forEach((row) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#080b11",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GridLines />

        <div
          style={{
            position: "absolute",
            width: "50vw",
            height: "50vw",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 2rem",
            lineHeight: 1.1,
            userSelect: "none",
            width: "100%",
          }}
        >
          <div
            ref={line1Ref}
            style={{
              fontSize: "clamp(3rem, 7.5vw, 7rem)",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25em",
            }}
          >
            <span>Our</span>
            <span
              ref={servicesWordRef}
              style={{ 
                display: "inline-block", 
                willChange: "transform, opacity",
                color: "#3b82f6",
                fontWeight: 600
              }}
            >
              capabilities
            </span>
          </div>

          <div ref={line2Ref} style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)", letterSpacing: "-0.03em", color: "rgba(255, 255, 255, 0.45)", fontWeight: 300, willChange: "transform, opacity" }}>
            engineered for
          </div>

          <div ref={line3Ref} style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)", letterSpacing: "-0.03em", color: "rgba(255, 255, 255, 0.15)", fontWeight: 400, willChange: "transform, opacity" }}>
            intelligent enterprises
          </div>
        </div>
      </section>

      <div
        style={{
          position: "relative",
          background: "#080b11",
          overflow: "hidden",
          padding: "0 0 8rem",
        }}
      >
        <GridLines />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 2.5rem",
          }}
        >
          {/* ◄ Reduced top padding from 6rem to 1rem to pull everything closer together */}
          <div style={{ padding: "1rem 0 2rem", display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", boxShadow: "0 0 12px #3b82f6", flexShrink: 0 }} />
            <span style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.5)", fontWeight: 600 }}>
              Enterprise AI Architecture
            </span>
          </div>

          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }} />

          {SERVICES.map((svc, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={svc.num}
                ref={(el) => { rowRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "4rem 2fr 2.5fr 3rem",
                  gap: "2rem",
                  padding: "3rem 1.5rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
                  alignItems: "start",
                  cursor: "pointer",
                  background: isHovered ? "rgba(255, 255, 255, 0.02)" : "transparent",
                  transform: isHovered ? "translateX(10px)" : "translateX(0px)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = svc.href;
                  }
                }}
              >
                <span style={{ fontSize: "0.9rem", color: isHovered ? "#3b82f6" : "rgba(255, 255, 255, 0.25)", fontWeight: 500, paddingTop: "0.4rem", fontFamily: "monospace", transition: "color 0.3s ease" }}>
                  {svc.num}
                </span>

                <span style={{ fontSize: "clamp(1.4rem, 2.3vw, 2.1rem)", fontWeight: isHovered ? 500 : 400, color: isHovered ? "#3b82f6" : "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2, transition: "color 0.3s ease" }}>
                  {svc.title}
                </span>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: isHovered ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0.42)", lineHeight: 1.7, fontWeight: 300, transition: "color 0.3s ease" }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
                          background: isHovered ? "rgba(59, 130, 246, 0.2)" : "transparent",
                          border: isHovered ? "1px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.12)",
                          borderRadius: "999px",
                          padding: "0.25rem 0.8rem",
                          fontWeight: 500,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justify: "flex-end", height: "100%", paddingTop: "0.4rem", opacity: isHovered ? 1 : 0.15, transform: isHovered ? "translateX(0)" : "translateX(-10px)", transition: "all 0.3s ease" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isHovered ? "#3b82f6" : "#ffffff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}