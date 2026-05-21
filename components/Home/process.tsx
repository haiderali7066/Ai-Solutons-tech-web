"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AIST_PROCESS_STEPS = [
  {
    phase: "01",
    name: "Enterprise Discovery",
    sub: "Deep assessment of operational bottlenecks, data silo maps, and high-value AI ingestion opportunities.",
    metric: "Audit & Scope",
    features: ["System Mapping", "Feasibility Analysis", "ROI Modeling"],
  },
  {
    phase: "02",
    name: "Strategy & Governance",
    sub: "Architecting secure compliance models, pipeline scalability frameworks, and model fine-tuning roadmaps.",
    metric: "Architecture",
    features: ["Risk Compliance", "Data Governance", "Compute Scopes"],
  },
  {
    phase: "03",
    name: "Data & AI Engineering",
    sub: "Deploying high-throughput data pipelines, foundational model integrations, and intelligent automation layers.",
    metric: "Build & Deploy",
    features: ["Pipeline Construction", "LLM Integration", "Agent Dev"],
  },
  {
    phase: "04",
    name: "Continuous Intelligence",
    sub: "Real-time vector DB synchronization, drift monitoring optimization, and cross-functional performance reporting.",
    metric: "Scale & Optimize",
    features: ["Drift Monitoring", "Vector Syncing", "Power BI Loops"],
  },
];

export default function AISTOrbitalProcess() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const orbitalTrackRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !scrollSectionRef.current || !orbitalTrackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = orbitalTrackRef.current;
      if (!track) return;

      // Calculate total scrolling budget based on width of the element track
      const scrollLength = track.scrollWidth - window.innerWidth + 200;

      // Animate the entire track on a tilted path: sliding up (-y) and left (-x) simultaneously
      gsap.fromTo(
        track,
        {
          x: "15vw",
          y: "35vh",
        },
        {
          x: () => -scrollLength,
          y: () => -scrollLength * 0.45, // Tilted slope calculation
          ease: "none",
          scrollTrigger: {
            trigger: scrollSectionRef.current,
            start: "top top",
            end: `+=${scrollLength * 1.5}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, scrollSectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={scrollSectionRef} style={{ background: "#0b0f19", position: "relative", overflow: "hidden" }}>
      
      {/* Premium Tech Grid Layer */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
      
      {/* Angular Dynamic Flow Guide-Line */}
      <svg 
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
      >
        <line 
          x1="100%" y1="100%" x2="-10%" y2="-10%" 
          stroke="rgba(59, 130, 246, 0.08)" 
          strokeWidth="2" 
          strokeDasharray="12 8" 
        />
      </svg>

      {/* High-End Ambient Backlighting */}
      <div 
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 75%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <section
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: "5rem 5rem",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        {/* Fixed Title Header Block */}
        <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#3b82f6",
              fontWeight: 700,
              display: "inline-block",
              marginBottom: "0.75rem",
            }}
          >
            Delivery Framework
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            How We Build Future-Ready <br />
            <span style={{ color: "#3b82f6" }}>Intelligent Ecosystems</span>
          </h2>
        </div>

        {/* Tilted Diagonal Orbital Workspace */}
        <div style={{ position: "relative", width: "100%", flexGrow: 1, display: "flex", alignItems: "center" }}>
          <div
            ref={orbitalTrackRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6rem",
              width: "max-content",
              paddingRight: "25rem",
              willChange: "transform",
            }}
          >
            {/* ─── Massive Lead Master Hub Circle ─── */}
            <div
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                borderRadius: "50%",
                padding: "3.5rem",
                width: "420px",
                height: "420px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                boxShadow: "0 30px 60px -20px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.15)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(59, 130, 246, 0.12)",
                  color: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                }}
              >
                <svg style={{ width: "22px", height: "22px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 style={{ fontSize: "1.75rem", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em", margin: "0 0 0.75rem 0", lineHeight: 1.25 }}>
                The AIST <br />
                <span style={{ color: "#3b82f6" }}>Delivery Core</span>
              </h3>
              
              <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.6, margin: 0, maxWidth: "300px", opacity: 0.9 }}>
                A production-tested framework engineered to map, transition, and deploy enterprise systems into automated computational workflows.
              </p>
            </div>

            {/* ─── Geometric Process Circles ─── */}
            {AIST_PROCESS_STEPS.map((step, i) => {
              const isHovered = hoveredIndex === i;

              // ─── DIAGONAL ALIGNMENT MATH ───
              // Gap is 6rem (96px). Master Hub is 420px. Each card step is 360px.
              const gapPixels = 96; 
              const hubWidth = 420;
              const stepWidth = 360;
              
              // Calculate cumulative horizontal position of this specific card from the track start
              const horizontalOffset = hubWidth + gapPixels + i * (stepWidth + gapPixels);
              
              // Apply the identical 0.45 slope ratio used in your GSAP configuration
              const baseTranslateY = horizontalOffset * 0.45;

              return (
                <div
                  key={step.name}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    background: isHovered ? "#0f172a" : "#0c101d",
                    border: isHovered ? "1px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "50%",
                    padding: "3.5rem",
                    width: `${stepWidth}px`,
                    height: `${stepWidth}px`,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    boxShadow: isHovered ? "0 30px 60px -15px rgba(59, 130, 246, 0.15)" : "0 10px 30px rgba(0, 0, 0, 0.3)",
                    
                    // Seamlessly combine the structural diagonal position with your interactive hover scaling logic
                    transform: `translateY(${baseTranslateY}px) ${isHovered ? "scale(1.04) translateY(-10px)" : "scale(1)"}`,
                    
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border 0.3s ease, background 0.3s ease, box-shadow 0.4s ease",
                  }}
                >
                  {/* Phase Floating Tag Ring */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      top: "2rem", 
                      left: "50%", 
                      transform: "translateX(-50%)", 
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center" 
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#3b82f6", letterSpacing: "0.1em" }}>
                      PHASE {step.phase}
                    </span>
                    <span style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: 500, marginTop: "0.25rem", textTransform: "uppercase" }}>
                      {step.metric}
                    </span>
                  </div>

                  {/* Core Content */}
                  <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#ffffff", margin: "0 0 0.5rem 0", letterSpacing: "-0.01em" }}>
                      {step.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#94a3b8", lineHeight: 1.5, fontWeight: 400 }}>
                      {step.sub}
                    </p>
                  </div>

                  {/* Horizontal Inline Features List */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      bottom: "2.5rem", 
                      left: "10%", 
                      right: "10%", 
                      display: "flex", 
                      justifyContent: "center", 
                      gap: "0.4rem", 
                      flexWrap: "wrap" 
                    }}
                  >
                    {step.features.slice(0, 2).map((feat) => (
                      <span 
                        key={feat} 
                        style={{ 
                          padding: "3px 8px", 
                          background: "rgba(255,255,255,0.02)", 
                          border: "1px solid rgba(255,255,255,0.05)", 
                          borderRadius: "99px", 
                          fontSize: "0.65rem", 
                          color: "#64748b",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Pad spacer */}
        <div style={{ height: "10px" }} />
      </section>
    </div>
  );
}