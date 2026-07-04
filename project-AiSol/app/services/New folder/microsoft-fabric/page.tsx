import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Database,
  Network,
  Cpu,
  Server,
  Layers,
  Box,
  Building2,
  Users,
  Clock,
  DollarSign,
  Mail,
  Workflow,
  ShieldCheck,
  Zap
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA (Server-Side SEO)
══════════════════════════════════════ */
export const metadata = {
  title: 'Microsoft Fabric Implementation & Migration | AI Solution Technologies',
  description: 'One unified Microsoft platform for data engineering, warehousing, BI and AI. We handle licensing, deployment, governance, and migration from your existing stack.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const problems = [
  'Power BI and Synapse feel disconnected',
  'Multiple Microsoft tools = multiple bills',
  'Real-time and batch data on different platforms',
  'AI integration with BI is painful',
  'Fabric licensing strategy unclear',
  'Migration from existing platforms feels risky',
];

const deliverables = [
  'Fabric capacity sizing and licensing strategy',
  'Lakehouse + Warehouse setup',
  'Data Factory pipelines (Fabric-native)',
  'Real-Time Analytics deployment',
  'Semantic models',
  'Power BI integration',
  'Copilot enablement',
  'Governance and OneSecurity setup',
  'Migration from Synapse / ADF if needed',
];

const industries = [
  'Mid-market+',
  'Financial Services',
  'Manufacturing',
  'Healthcare',
  'Government',
  'Construction'
];

const roles = [
  { title: 'CIO', desc: 'Infrastructure consolidation and strategic cost reduction' },
  { title: 'Chief Data Architect', desc: 'System architecture and Lakehouse/Warehouse design' },
  { title: 'Head of Data', desc: 'Data governance, pipeline velocity, and team enablement' },
  { title: 'CDO', desc: 'Enterprise data strategy and AI integration' }
];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT (100% Server Side)
══════════════════════════════════════ */
export default function MicrosoftFabricServicePage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-cyan-500/30">
      
      {/* PURE CSS ANIMATIONS INJECTED SERVER-SIDE */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes floatReverse { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(15px); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes gradientPan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes drawLine { 0% { height: 0; opacity: 0; } 100% { height: 100%; opacity: 1; } }
        
        .anim-float { animation: float 7s ease-in-out infinite; }
        .anim-float-delayed { animation: floatReverse 8s ease-in-out infinite; }
        .anim-pulse { animation: pulseGlow 5s ease-in-out infinite; }
        .anim-marquee { animation: marquee 35s linear infinite; }
        .anim-gradient { background-size: 200% 200%; animation: gradientPan 12s ease infinite; }
        .anim-line { animation: drawLine 2s ease-out forwards; }
      `}} />

      {/* ════════ 1. HERO SECTION ════════ */}
      <section className="relative overflow-hidden bg-[#020817] pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5 anim-gradient bg-gradient-to-br from-[#020817] via-[#0b1221] to-[#020817]">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Microsoft Fabric Data Architecture Visuals */}
        <div className="absolute right-[5%] top-[15%] w-72 h-64 anim-float hidden lg:block z-10 pointer-events-none">
          {/* Top Node */}
          <div className="absolute top-0 right-0 w-48 bg-white/[0.03] border border-cyan-500/20 rounded-xl backdrop-blur-md p-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="flex items-center gap-3 mb-2">
               <Database className="w-5 h-5 text-cyan-400" />
               <span className="text-xs font-bold text-white tracking-widest uppercase">OneLake</span>
            </div>
            <div className="h-1.5 w-full bg-cyan-500/30 rounded-full"></div>
          </div>
          
          {/* Connecting Line */}
          <div className="absolute top-[4.5rem] right-24 w-0.5 h-16 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 anim-line"></div>

          {/* Bottom Left Node */}
          <div className="absolute bottom-0 right-24 w-48 bg-white/[0.03] border border-blue-500/20 rounded-xl backdrop-blur-md p-4 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="flex items-center gap-3 mb-2">
               <Cpu className="w-5 h-5 text-blue-400" />
               <span className="text-xs font-bold text-white tracking-widest uppercase">Synapse AI</span>
            </div>
            <div className="h-1.5 w-full bg-blue-500/30 rounded-full"></div>
          </div>
        </div>

        <div className="absolute left-[5%] bottom-[20%] w-48 h-48 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-md p-4 anim-float-delayed hidden lg:flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full border-4 border-purple-500/20 border-r-purple-400 border-t-purple-400 flex items-center justify-center">
             <Workflow className="w-10 h-10 text-white opacity-40" />
          </div>
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-700/15 blur-[120px] rounded-full pointer-events-none anim-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Layers className="w-4 h-4 text-cyan-400" />
            Enterprise Data Architecture
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white font-syne">
            One unified Microsoft platform for 
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent pb-2">
              data engineering, warehousing, BI and AI.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Microsoft Fabric brings together Power BI, Synapse, Data Factory and AI in a single tenant. We handle licensing, deployment, governance, and migration from your existing stack.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Book a 30-minute conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ TRUST STRIP (MARQUEE) ════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2].map((set) => (
            <React.Fragment key={set}>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Layers className="w-4 h-4 text-blue-600"/> Microsoft Fabric</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Box className="w-4 h-4 text-amber-500"/> Power BI</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Server className="w-4 h-4 text-indigo-500"/> Azure Synapse</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Network className="w-4 h-4 text-blue-500"/> Data Factory</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Database className="w-4 h-4 text-cyan-600"/> OneLake</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-purple-600"/> Purview</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════ 2. THE PITCH ════════ */}
      <section className="relative py-24 bg-[#fafbfe]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="group rounded-2xl bg-white border border-slate-200 p-10 md:p-16 text-center shadow-[0_10px_40px_rgba(15,23,42,0.03)] relative overflow-hidden transition-all duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]">
            
            {/* Animated Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <Server className="absolute -left-12 -bottom-12 w-64 h-64 text-slate-50 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />
            
            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-[#020817] font-light font-syne">
              If your organisation already runs Microsoft and has separate bills for Power BI, Synapse, Data Factory and storage — <strong className="font-black text-blue-600 relative inline-block">Fabric consolidates them.<span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-300 -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span></strong> We deploy it properly: capacity sized correctly, governance set up from day one, and your existing platforms migrated cleanly.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ 3 & 4. PROBLEMS WE SOLVE vs WHAT'S INCLUDED ════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            
            {/* Problems Column */}
            <div className="rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 border border-red-100">
                  <XCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#020817] font-syne">
                  Sound familiar?
                </h2>
              </div>
              
              <ul className="space-y-6">
                {problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-4 group cursor-default">
                    <div className="mt-0.5 shrink-0 bg-white rounded-full shadow-sm group-hover:scale-125 transition-transform duration-300">
                      <XCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-slate-600 leading-relaxed group-hover:text-[#020817] transition-colors">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included Column */}
            <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 md:p-12 shadow-xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none anim-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white font-syne">
                    What's included
                  </h2>
                </div>
                
                <ul className="space-y-6">
                  {deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group cursor-default">
                      <div className="mt-0.5 shrink-0 bg-[#020817] rounded-full group-hover:scale-125 transition-transform duration-300">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-slate-300 leading-relaxed group-hover:text-white transition-colors font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ 6. CASE STUDY ════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-[#020817] flex flex-col lg:flex-row border border-slate-800 shadow-2xl relative group">
            
            {/* Animated Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-20"></div>

            {/* Cinematic Image Side - Decreased Height Concept applied */}
            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000" 
                alt="Server Data Architecture" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020817]" />
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-cyan-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg">
                  Case Study
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10">
              <Zap className="w-16 h-16 text-cyan-500/10 absolute right-10 top-10 transform group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black text-white font-syne mb-6">
                Australian Energy Retailer (4M Accounts)
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                This enterprise was running Synapse, ADF, and Power BI as completely separate tools, each with its own bill and isolated team. We engineered a seamless migration to a unified Microsoft Fabric tenant, drastically cutting overhead and accelerating time-to-insight.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2">14 Wks</div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Total Migration</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2">28%</div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Infra Cost Drop</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2">Hours</div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Time-to-insight</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ 5 & 7. LOGISTICS & TARGET AUDIENCE ════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Target Audience */}
            <div className="lg:col-span-7 rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-[#020817] mb-10 uppercase tracking-wide flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" /> Who this is for
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Core Industries</h4>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map(ind => (
                    <span key={ind} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-default">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Target Buyers</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {roles.map((role, i) => (
                    <div key={i} className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors cursor-default">
                      <div className="font-bold text-blue-700 text-sm mb-1">{role.title}</div>
                      <div className="text-xs text-slate-500 font-light">{role.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics (Pricing & Delivery) */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <DollarSign className="w-40 h-40 -mb-10 -mr-10 text-cyan-400" />
                </div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-3">Indicative Pricing</h4>
                <div className="text-3xl md:text-4xl font-black text-white font-syne mb-2">AUD $40K – $250K</div>
                <p className="text-slate-400 text-sm font-light">Final pricing depends on data volume and existing architecture.</p>
              </div>

              <div className="rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:scale-125 transition-transform duration-700">
                  <Clock className="w-40 h-40 -mb-10 -mr-10 text-blue-900" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Timeline</h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-2">8–20 weeks</div>
                <p className="text-slate-500 text-sm font-light">From initial capacity strategy to full migration and go-live.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ 8. FINAL CTA ════════ */}
      <section className="bg-[#020817] px-6 py-24 border-t border-slate-800">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-slate-700 p-12 md:p-24 text-center shadow-2xl max-w-5xl mx-auto group">
          
          {/* Animated Background Rays */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent group-hover:opacity-[0.05] transition-opacity duration-1000"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-syne uppercase">
              Ready to discuss microsoft fabric implementation?
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-300 font-light mb-10">
              Book a 30-minute conversation. We'll look at your current setup, discuss your goals, and outline what an engagement would look like — at no cost and no commitment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold text-[#020817] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[0_15px_40px_rgba(251,191,36,0.3)] uppercase tracking-widest"
              >
                Book a 30-minute conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="mailto:rania@aisolutiontechnologies.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 uppercase tracking-widest"
              >
                Email rania@...
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}