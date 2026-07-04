import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart3,
  Database,
  Users,
  Clock,
  ShieldCheck,
  Sparkles,
  Zap,
  LayoutGrid
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA (Server-Side SEO)
══════════════════════════════════════ */
export const metadata = {
  title: 'Power BI & Fabric Semantic Models | AI Solution Technologies',
  description: 'Expert optimization of DirectLake and Import semantic models. Build a high-performance, single source of truth for your enterprise reporting.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES & EXPANDED CONTENT
══════════════════════════════════════ */
const problems = [
  'Reports are slow to load and refresh',
  'Multiple "versions of the truth" across departments',
  'DAX measures are complex, unoptimized, and hard to maintain',
  'Semantic models are too large for existing Power BI capacity',
  'DirectLake vs. Import model decisions are unclear',
  'No clear governance on who can modify core business logic',
];

const deliverables = [
  'Architectural audit of existing semantic models',
  'Star-schema optimization for maximum performance',
  'DirectLake implementation on Fabric OneLake',
  'DAX measure library standardization & optimization',
  'Calculation Group implementation for efficiency',
  'Role-Level Security (RLS) & Object-Level Security (OLS)',
  'Performance monitoring and tuning guides',
  'Model documentation & lineage certification',
];

const industries = ['Financial Services', 'Retail & FMCG', 'Manufacturing', 'Logistics', 'Healthcare', 'Energy'];
const roles = ['Head of BI', 'Data Analyst', 'CDO', 'Analytics Lead', 'BI Architect'];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT (100% Server Side)
══════════════════════════════════════ */
export default function SemanticModelServicePage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-blue-500/30">
      
      {/* PURE CSS ANIMATIONS INJECTED SERVER-SIDE */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes floatReverse { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(15px); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes gradientPan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        
        .anim-float { animation: float 6s ease-in-out infinite; }
        .anim-float-delayed { animation: floatReverse 7s ease-in-out infinite; }
        .anim-pulse { animation: pulseGlow 4s ease-in-out infinite; }
        .anim-marquee { animation: marquee 30s linear infinite; }
        .anim-gradient { background-size: 200% 200%; animation: gradientPan 10s ease infinite; }
      `}} />

      {/* ════════ HERO SECTION ════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[#020817]">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
            alt="Semantic Data Models" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Floating Icons */}
        <div className="absolute right-[10%] top-[20%] anim-float hidden lg:block">
            <LayoutGrid className="w-24 h-24 text-blue-500/20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl mb-8">
            <Sparkles className="w-4 h-4" />
            Performance Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white font-syne">
            High-performance semantic models <br /> 
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent pb-2">
              on Microsoft Fabric & Power BI.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Stop struggling with slow reports and messy DAX. We build certified, high-speed semantic models that bridge the gap between complex engineering and executive decision-making.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Get a model health check
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ MARQUEE ════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-50">
          {['DAX Optimization', 'DirectLake', 'Star Schema Design', 'Calculation Groups', 'RLS/OLS Security', 'Model Documentation'].map((tech) => (
            <React.Fragment key={tech}>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">{tech}</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════ PROBLEMS & DELIVERABLES ════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-50 p-3 rounded-xl"><XCircle className="w-6 h-6 text-red-500" /></div>
                <h2 className="text-2xl font-black font-syne">The bottleneck</h2>
              </div>
              <ul className="space-y-6">
                {problems.map((p, i) => <li key={i} className="flex gap-3 text-slate-600"><XCircle className="w-5 h-5 text-red-400 shrink-0" /> {p}</li>)}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#020817] p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-500/10 p-3 rounded-xl"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
                <h2 className="text-2xl font-black text-white font-syne">The solution</h2>
              </div>
              <ul className="space-y-6">
                {deliverables.map((d, i) => <li key={i} className="flex gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> {d}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CASE STUDY ════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-[#020817] p-10 lg:p-16 text-white relative overflow-hidden">
            <h3 className="text-3xl font-black mb-8 font-syne">Retail Analytics Transformation</h3>
            <p className="text-lg text-slate-300 max-w-2xl mb-12">By restructuring a massive legacy import model into a Fabric-native DirectLake architecture, we reduced report load times from 45 seconds to sub-second interactions while centralizing business logic.</p>
            <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <div className="text-4xl font-black mb-2">95% faster</div>
                <div className="text-blue-400 font-bold uppercase tracking-widest text-xs">Query Performance</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">Single Source</div>
                <div className="text-blue-400 font-bold uppercase tracking-widest text-xs">Of Truth Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER CTA ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[2.5rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Need a model audit?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">Let our architects review your DAX, schema design, and Fabric configuration. No pressure, just actionable insights.</p>
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full inline-flex gap-2 items-center hover:scale-105 transition-transform">
            Book a 30-minute conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}