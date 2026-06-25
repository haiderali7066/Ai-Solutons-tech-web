import React from 'react';
import Link from 'next/link';
import { 
  Clock, 
  TrendingUp, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  BarChart4, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';

export default function ProfessionalServicesCaseStudy() {
  return (
    <main className="min-h-screen bg-[#fafbfe] text-[#0f172a]">
      
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-24 px-6 bg-[#020817] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-sky-300 mb-8">
            Case Study · Professional Services
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-syne mb-8 leading-[1.1]">
            Accelerating the financial close for a professional services firm
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            Modernizing the CFO office by transforming manual, spreadsheet-heavy reporting into high-performance, automated executive dashboards.
          </p>
        </div>
      </section>

      {/* ════════ EXECUTIVE SUMMARY ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-2">
            <div className="text-4xl font-black text-sky-600">75%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Reduction in cycle time</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-sky-600">30 Min</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Board pack assembly</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-sky-600">Automated</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Financial consolidation</div>
          </div>
        </div>
      </section>

      {/* ════════ CHALLENGE & SOLUTION ════════ */}
      <section className="py-24 bg-white border-y border-slate-100 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black font-syne mb-6">The Challenge</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The firm’s finance team relied on highly manual processes to consolidate data from disparate billing and ERP systems. The month-end process was labor-intensive, often taking 8 days to complete, leaving limited time for actual strategic analysis before the monthly board meeting.
            </p>
            <ul className="space-y-4">
              {['Manual data consolidation', 'High risk of spreadsheet error', 'Delayed strategic insights'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#020817] p-8 rounded-3xl text-white">
            <h2 className="text-3xl font-black font-syne mb-6 text-sky-400">The Solution</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We deployed a centralized CFO dashboard solution on Power BI, integrated with the firm’s core financial systems. This replaced static reporting with a dynamic, self-service financial ecosystem.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                <LineChart className="text-sky-400 shrink-0" />
                <p className="text-sm">Real-time tracking of utilization and billable efficiency.</p>
              </div>
              <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                <FileText className="text-sky-400 shrink-0" />
                <p className="text-sm">Automated generation of monthly board pack data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ OUTCOME ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black font-syne mb-12">The Impact</h2>
          <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-[2.5rem] p-12 text-white shadow-2xl">
            <p className="text-2xl md:text-3xl font-light italic mb-8">
              "Transitioning from 8 days to 2 days for month-end close fundamentally shifted the finance team's role from data gatherers to strategic advisors."
            </p>
            <div className="flex justify-center gap-2 text-sky-200 font-bold uppercase tracking-widest text-sm">
              <CheckCircle2 className="w-5 h-5" /> Executive reporting streamlined
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-24 px-6 text-center">
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 bg-[#020817] text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
        >
          Modernize your CFO office <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}