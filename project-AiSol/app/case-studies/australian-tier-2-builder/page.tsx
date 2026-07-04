import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  TrendingDown, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  BarChart4, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';

export default function AustralianBuilderCaseStudy() {
  return (
    <main className="min-h-screen bg-[#fafbfe] text-[#0f172a]">
      
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-24 px-6 bg-[#020817] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-8">
            Case Study · Tier 2 Construction
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-syne mb-8 leading-[1.1]">
            Transforming project visibility for an Australian Tier 2 Builder
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            Moving from fragmented reporting to a single source of truth across 12 concurrent projects, resulting in proactive margin protection and accelerated decision-making.
          </p>
        </div>
      </section>

      {/* ════════ EXECUTIVE SUMMARY ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-600">75%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Reduction in reporting effort</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-600">Real-Time</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Visibility of variances</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-blue-600">Unified</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Data ecosystem across sites</div>
          </div>
        </div>
      </section>

      {/* ════════ CHALLENGE & SOLUTION ════════ */}
      <section className="py-24 bg-white border-y border-slate-100 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black font-syne mb-6">The Challenge</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The client managed 12 concurrent projects with a combined turnover exceeding AUD $100M. Data was siloed across various site management systems and finance applications, leading to "reporting fatigue" where management only understood project performance weeks after month-end.
            </p>
            <ul className="space-y-4">
              {['Fragmented project data', 'Lagging financial indicators', 'Difficulty comparing site productivity'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0f172a] p-8 rounded-3xl text-white">
            <h2 className="text-3xl font-black font-syne mb-6 text-blue-400">The Solution</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We implemented an integrated data architecture leveraging Microsoft Fabric and Power BI. By creating a unified data lake, we connected site operations directly with financial reporting.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                <BarChart4 className="text-blue-400 shrink-0" />
                <p className="text-sm">Automated BOQ variance tracking updated daily.</p>
              </div>
              <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                <Cpu className="text-blue-400 shrink-0" />
                <p className="text-sm">Consolidated dashboard for project burn-rate analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ OUTCOME ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black font-syne mb-12">The Impact</h2>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-12 text-white shadow-2xl">
            <p className="text-2xl md:text-3xl font-light italic mb-8">
              "By bridging the gap between site diaries and head office finance, the team gained the ability to intervene on cost variances while they were still manageable."
            </p>
            <div className="flex justify-center gap-2 text-blue-200 font-bold uppercase tracking-widest text-sm">
              <CheckCircle2 className="w-5 h-5" /> Reporting cycles transformed
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-24 px-6 text-center">
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
        >
          Discuss your project visibility <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}