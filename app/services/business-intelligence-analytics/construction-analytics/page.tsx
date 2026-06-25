'use client';

import React from 'react';

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const problemsData = [
  "Projects over budget by the time anyone sees it",
  "BOQ variance discovered at month-end",
  "Progress claims slow and sometimes inaccurate",
  "No real-time site productivity view",
  "Procurement disconnected from finance",
  "Contractor performance is anecdotal, not data"
];

const deliverablesData = [
  { title: "BOQ variance dashboards", detail: "Planned vs actual quantities tracking" },
  { title: "Project cost tracking", detail: "Live burn rate monitoring" },
  { title: "Progress claim automation", detail: "Eliminate spreadsheet lag" },
  { title: "Procurement spend analytics", detail: "Deep visibility into ledger metrics" },
  { title: "Contractor scorecards", detail: "Performance data over anecdotal feedback" },
  { title: "Site-level productivity dashboards", detail: "Granular boots-on-the-ground metrics" },
  { title: "Enterprise Systems Integration", detail: "Native connections with Procore, Aconex, or in-house systems" },
  { title: "QS-Friendly Drill-Downs", detail: "Quantity surveyor tailored analytical views" }
];

const industries = ["Construction", "Civil Engineering", "Infrastructure", "EPC Contractors"];
const targetBuyers = ["Commercial Manager", "Project Director", "CFO", "COO", "PMO Director"];

/* ══════════════════════════════════════
   INLINE SVG ICONS (Scalable Assets)
══════════════════════════════════════ */
const RedCrossIcon = () => (
  <svg className="w-5 h-5 text-rose-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GreenCheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════ */
export default function ConstructionAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-500/30 overflow-x-hidden">

      {/* ════════ HERO SECTION WITH CINEMATIC BACKGROUND ════════ */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-44 px-6 overflow-hidden bg-[#020817]">
        {/* High-End Architectural Background Mask */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15 mix-blend-luminosity"
          aria-hidden="true"
        />
        {/* Deep Gradient Masks */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#020817] via-[#020817]/80 to-[#0f172a]/90" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Power BI & Fabric for Enterprise Construction
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
            Real-Time Visibility Into BOQ, Project Costs,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">
              Progress Claims & Contractor Performance.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal max-w-4xl mx-auto mb-12">
            Construction-specific Power BI and Fabric dashboards: BOQ variance, project burn-rate, progress claims, 
            contractor scorecards, procurement spend, site productivity. <span className="text-white font-medium">Built for Tier 2+ builders and EPC contractors.</span>
          </p>
        </div>
      </section>

      {/* ════════ THE PITCH & THE PROBLEMS SECTION ════════ */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto z-20 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Strategic Pitch Statement */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] lg:sticky lg:top-8">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-3">// The Core Philosophy</span>
            <h2 className="text-3xl font-black text-[#0f172a] tracking-tight mb-6">
              Generic dashboards don't work in construction.
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              We've built specifically for this industry — BOQ tracking, progress claims, project cost burn-rate, contractor performance — because a project that goes over budget in week 3 shouldn't be discovered in week 9.
            </p>
            <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full" />
          </div>

          {/* Right Column: Problems We Solve Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-[2rem] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.05)]">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-[#0f172a] tracking-tight mb-2">Sound familiar?</h2>
              <p className="text-sm text-slate-400">The systemic data gaps holding back Tier 2+ operators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problemsData.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-rose-50/40 border border-rose-100/50 transition-all duration-300 hover:bg-rose-50">
                  <RedCrossIcon />
                  <span className="text-sm font-semibold text-slate-700 leading-snug">{problem}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ════════ WHAT'S INCLUDED / DELIVERABLES SECTION ════════ */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-3 block">Comprehensive Scope</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            What's Included In Our Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverablesData.map((item, idx) => (
            <div key={idx} className="group bg-white border border-slate-200/80 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.08)] hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <GreenCheckIcon />
                </div>
                <h3 className="text-base font-bold text-[#0f172a] tracking-tight mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ WHO THIS IS FOR SECTION ════════ */}
      <section className="py-16 bg-slate-900 border-y border-slate-800 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-3 block">// DEMOGRAPHIC ALIGNMENT</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
              Engineered Exclusively for Enterprise Project Landscapes
            </h2>
            
            <div className="space-y-6">
              {/* Industries Segment */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shrink-0">
                  <BuildingIcon />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Target Sectors</h4>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind, i) => (
                      <span key={i} className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buyers Segment */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center shrink-0">
                  <UserGroupIcon />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Target Operational Buyers</h4>
                  <div className="flex flex-wrap gap-2">
                    {targetBuyers.map((buyer, i) => (
                      <span key={i} className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                        {buyer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Case Study Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md inline-block mb-6">
              Proven Validation
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight mb-4">
              Real-World Impact: Australian Tier 2 Builder
            </h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">In-Flight Overruns Identified (Q1)</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-emerald-400">14 → 4 Days</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">Progress Claim Cycle Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PRICING & DELIVERY FRAMEWORK ════════ */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          

          {/* Delivery Window Module */}
          <div className="bg-white border border-slate-200/80 rounded-[2rem] p-8 text-center flex flex-col justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)]">
            <div>
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-2">Deployment Schedule</span>
              <h3 className="text-lg font-bold text-[#0f172a] mb-6">Time To Go-Live</h3>
              <div className="text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
                4 – 10 Weeks
              </div>
            </div>
            <p className="text-xs text-slate-400 font-light mt-4">Structured phased engineering timeline mapping data onboarding to production dashboard optimization loops.</p>
          </div>

        </div>
      </section>

      {/* ════════ PREMIUM CTA SECTION ════════ */}
      <section className="pb-24 px-6 bg-[#fafbfe]">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.28)]">
          {/* Decorative floating rings */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-4 block">Strategic Advisory</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Ready to discuss construction analytics & boq reporting?
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Book a 30-minute conversation. We'll look at your current setup, discuss your goals, and outline what an engagement would look like — at no cost and no commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-sm inline-flex items-center justify-center gap-2 group"
              >
                Book a 30-minute conversation 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}