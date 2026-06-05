import React from 'react';

/* ==========================================================================
   ENTERPRISE PROBLEM SECTION (HIGH-CONTRAST SWISS GRID)
   ========================================================================= */
export default function ProblemSection() {
  const PAIN_POINTS = [
    "Month-end takes 5–10 working days, and 2 of those days are spent reconciling Excel.",
    "Three departments produce three different revenue numbers — and nobody knows whose is right.",
    "The CEO asks for numbers your team can't produce in time.",
    "ERP reports require an analyst to interpret. Excel exports are the real source of truth.",
    "AI projects stall because nobody trusts the underlying data."
  ];

  return (
    <section className="bg-white text-slate-900 py-14 md:py-16 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ─── TOP BLOCK: ASYMMETRIC NARRATIVE GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start pb-16 md:pb-24 border-b border-slate-200">
          
          {/* Left Column: Massive Structural Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-none animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-red-600">
                Systemic Friction  01
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-black tracking-tight leading-[1.05] text-slate-900 max-w-md">
              The 9-day month-end problem
            </h2>
          </div>

          {/* Right Column: Statement Paragraphs (Max 720px width limit built-in) */}
          <div className="lg:col-span-7 space-y-6 lg:pt-6 max-w-[720px]">
            <p className="text-[17px] md:text-[18px] text-slate-500 leading-[1.65] font-normal">
              Most enterprises don't have a reporting problem. They have a data problem dressed up as a reporting problem. Spreadsheets breaking. Three departments reporting three different numbers. Decisions waiting on reports that take a week to assemble. ERPs full of data nobody trusts.
            </p>
            <div className="p-5 bg-slate-50 border-l-2 border-blue-600 rounded-none">
              <p className="text-[17px] md:text-[18px] text-slate-900 font-semibold leading-[1.6]">
                We fix the layer underneath — so the dashboards on top actually mean something.
              </p>
            </div>
          </div>

        </div>

        {/* ─── BOTTOM BLOCK: LEDGER-STYLE PAIN MATRIX ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 md:pt-24 items-start">
          
          {/* Sticky Left Rail for Header Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-2">
            <span className="text-[10px] font-mono text-slate-400 tracking-widest block">
              [ DIAGNOSTIC CHECKLIST ]
            </span>
            <h3 className="text-[22px] md:text-[24px] font-black text-slate-900 tracking-tight">
              Sound familiar?
            </h3>
            <p className="text-xs text-slate-400 font-mono leading-relaxed max-w-xs pt-2">
              If your data pipe mirrors more than two of these parameters, core automation layers are failing structural audits.
            </p>
          </div>

          {/* Right Rail: The Structured Ledger Rows */}
          <div className="lg:col-span-8 border-t border-slate-900">
            {PAIN_POINTS.map((point, index) => (
              <div 
                key={index} 
                className="group flex items-start justify-between gap-6 py-6 md:py-8 border-b border-slate-200 
                           transition-colors duration-200 hover:bg-slate-50 px-4 rounded-none"
              >
                <div className="flex items-start gap-6">
                  {/* Modernist Geometric X Box */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 border border-slate-300 bg-white rounded-none flex items-center justify-center 
                                 group-hover:border-red-500 group-hover:bg-red-50 transition-colors duration-200">
                      <svg 
                        width="8" 
                        height="8" 
                        viewBox="0 0 14 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-slate-400 group-hover:text-red-600 transition-colors duration-200"
                      >
                        <path 
                          d="M1 1L13 13M1 13L13 1" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Pain Point Description */}
                  <p className="text-[15px] md:text-[16px] text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 transition-colors duration-200">
                    {point}
                  </p>
                </div>

                {/* Monospace System Row Indexer */}
                <span className="hidden sm:inline-block font-mono text-[10px] text-slate-300 tracking-widest pt-1 group-hover:text-slate-500 transition-colors duration-200">
                  ERR_0{index + 1}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}