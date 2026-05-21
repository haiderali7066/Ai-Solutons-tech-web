"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CORTEX_SPOKES = [
  {
    name: "Customer 360 Engine",
    sub: "Unified data graph architecture and predictive retention modeling. Seamlessly aggregates multi-channel touchpoints to map comprehensive client lifecycles, calculate predictive lifetime value (LTV), and orchestrate hyper-personalized engagement sequences at scale.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "Finance Ledger OS",
    sub: "Automated operational cost analytics and programmatic compliance guardrails. Features sub-second cross-border ledger reconciliation, predictive anomaly detection for multi-cloud infrastructure spend, and algorithmic margin optimization parameters.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Analytics Workspace",
    sub: "Real-time streaming data pipeline monitoring and multidimensional visual intelligence infrastructure. Eliminates structural data silos by ingestion and contextualization of millions of parallel system telemetry events into actionable operational metrics.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10m9.988-5.674l-3.32-3.32a2 2 0 00-2.828 0L3.644 14.17M9 13h3.365a1.993 1.993 0 001.325-.512l3.32-3.323a2 2 0 012.828 0L20.5 11" />
      </svg>
    ),
  },
  {
    name: "Workforce Matrix",
    sub: "Predictive cross-functional resource leveling and dynamic capacity planning nodes. Automatically models internal operational velocity against active deployment roadmaps to mitigate engineering burnout and optimize utilization curves.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Strategy Graph Engine",
    sub: "Enterprise-wide roadmap tracking and live OKR dependency matrices. Translates macro corporate objectives into manageable, trackable micro-deliverables, establishing clear programmatic accountability boundaries across global business units.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    name: "Zero-Trust Security Nexus",
    sub: "Continuous threat vector monitoring, perimeter intrusion detection protocols, and cryptographic compliance auditing. Assures immutable data lineage maps and enforces strict, real-time role-based access control across all global cloud tenants.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    name: "Content Intelligence",
    sub: "Advanced natural language processing classification pipelines, neural sentiment extraction, and asset tokenization models. Systematically ingests, tags, and structurally normalizes raw unstructured data fields into secure queryable relational states.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    name: "Supply Chain Sync",
    sub: "End-to-end multi-tier logistics virtualization frameworks, edge IoT vendor telemetry, and inventory decay forecasting. Mitigates volatile structural market changes by algorithmically routing raw transit workflows based on real-time port parameters.",
    svg: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function CortexMarqueeSection() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !scrollSectionRef.current || !marqueeTrackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = marqueeTrackRef.current;
      if (!track) return;

      const totalScrollAmount = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: "top top",
          end: `+=${totalScrollAmount * 1.1}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, scrollSectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={scrollSectionRef} className="relative overflow-hidden bg-slate-50 min-h-screen flex flex-col justify-center">
      
      {/* Grid Pattern Background overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Light Ambiance Blurs */}
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] bg-indigo-600/5 blur-[80px] rounded-full pointer-events-none z-0" />

      <section className="relative z-10 w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 box-border">
        
        {/* Header Typography */}
        <div className="max-w-[1200px] w-full mx-auto mb-10 md:mb-12">
          <span className="inline-block mb-3 text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">
            Cortex Intelligence Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Our Flagship Connected <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Intelligent Operations Layer
            </span>
          </h2>
          <p className="max-w-xl text-sm md:text-base text-slate-500 leading-relaxed font-normal">
            Consolidate structural enterprise fragmentation. Cortex unifies legacy architectures, 
            multi-tenant clouds, and specialized workflows into a singular, high-throughput compute framework 
            designed for continuous systemic automation.
          </p>
        </div>

        {/* Marquee Viewport Track Container */}
        <div className="relative w-full">
          <div
            ref={marqueeTrackRef}
            className="flex items-stretch gap-5 w-max pr-[12rem] will-change-transform"
          >
            {/* ─── Compact Core Brain Hub Card ─── */}
            <div className="relative flex flex-col justify-between w-[360px] shrink-0 p-8 bg-slate-900 rounded-[20px] border border-slate-800 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.4)] overflow-hidden">
              
              {/* Spinning Accent Graphic */}
              <div className="absolute -top-[10%] -right-[10%] w-[220px] h-[220px] border border-blue-500/10 rounded-full flex items-center justify-center pointer-events-none">
                <div className="w-[160px] h-[160px] border border-dashed border-blue-500/15 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-11 h-11 mb-6 text-blue-400 bg-blue-500/10 border border-blue-500/25 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight leading-tight mb-3">
                  Cortex Core Brain
                </h3>
                <p className="text-[13px] text-slate-400 leading-relaxed font-normal opacity-90">
                  The definitive central processing architecture for high-throughput enterprise model pipelines. Safely anchors global telemetry infrastructure, multi-agent foundational frameworks, and real-time active log parsing with zero latency overhead or regional transit dependencies.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8 relative z-10">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                  Primary Hub
                </span>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
                </span>
              </div>
            </div>

            {/* ─── Compact Spoke Cards ─── */}
            {CORTEX_SPOKES.map((spoke) => (
              <div
                key={spoke.name}
                className="group relative flex flex-col justify-between w-[285px] shrink-0 p-7 bg-white border border-slate-200 rounded-[18px] cursor-pointer overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-blue-500 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)]"
              >
                <div>
                  <div className="mb-5 text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
                    {spoke.svg}
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 tracking-tight mb-2.5">
                    {spoke.name}
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
                    {spoke.sub}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-6 text-[11px] font-semibold text-blue-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Connect Integration</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}