import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  XCircle,
  Building2,
  BarChart4,
  HardHat,
  AlertTriangle,
  Clock,
  ShieldCheck,
  TrendingDown,
  Sparkles,
  ChevronRight,
  Database,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Workflow,
  LineChart
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Microsoft Data & AI for Construction | AI Solution Technologies',
  description: 'Real-time BOQ, cost, and project visibility for Tier 2+ builders, civil contractors, and EPC firms.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const problems = [
  'Project overruns discovered weeks after they happen',
  'BOQ variance only visible at month-end',
  'Progress claims slow, disputed, sometimes inaccurate',
  'No real-time view of site productivity',
  'Procurement disconnected from finance',
  'Contractor performance is anecdotal, not data',
];

const capabilities = [
  {
    icon: <BarChart4 className="w-6 h-6 text-blue-400" />,
    title: 'Construction Analytics & BOQ Reporting',
    desc: 'Live tracking of Bill of Quantities, material variances, and real-time project burn rates.',
    link: '/services/construction-analytics'
  },
  {
    icon: <LineChart className="w-6 h-6 text-sky-400" />,
    title: 'CFO Dashboards (Builders)',
    desc: 'Consolidated cash flow, WIP reporting, and profitability forecasting across the entire project portfolio.',
    link: '/services/cfo-dashboards'
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    title: 'AI Operational Copilots',
    desc: 'Generative AI assistants for Project Managers to query RFIs, site diaries, and contracts instantly.',
    link: '/services/ai-on-erp'
  },
  {
    icon: <Database className="w-6 h-6 text-blue-400" />,
    title: 'Microsoft Fabric Implementation',
    desc: 'Unify Procore, Jobpac, Cheops, and Excel data into a single, high-performance OneLake architecture.',
    link: '/services/microsoft-fabric'
  }
];

const integrations = ['Procore', 'Aconex', 'Jobpac', 'Cheops', 'Viewpoint', 'Dynamics 365', 'Hammertech', 'Excel'];

/* ══════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════ */
export default function ConstructionIndustryPage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-blue-500/30">
      
      {/* ANIMATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes floatReverse { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(15px); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .anim-float { animation: float 6s ease-in-out infinite; }
        .anim-float-delayed { animation: floatReverse 7s ease-in-out infinite; }
        .anim-pulse { animation: pulseGlow 4s ease-in-out infinite; }
        .anim-marquee { animation: marquee 35s linear infinite; }
        .glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }
      `}} />

      {/* ════════ 1. HERO SECTION (SPLIT LAYOUT) ════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-[#020817] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888088320-be1b8b603b71?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/95 to-[#0b1736]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Built for Construction
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white font-syne">
              Microsoft data and AI for construction
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Real-time BOQ, cost, and project visibility.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 font-light max-w-xl">
              We build for Tier 2+ builders, civil contractors, EPC firms and infrastructure operators across Australia, UAE and Saudi Arabia. BOQ tracking, cost burn-rate, progress claims, contractor performance — built on Microsoft Power BI and Fabric.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
              >
                Book a reporting demo
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Abstract Dashboard UI */}
          <div className="relative hidden lg:block h-[500px] w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full anim-pulse" />
            
            {/* Dashboard Card 1 */}
            <div className="absolute top-10 right-10 w-80 glass-panel rounded-2xl p-6 anim-float shadow-2xl z-20">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-300 text-sm font-bold">Live BOQ Variance</span>
                <span className="text-red-400 text-sm font-bold flex items-center"><TrendingDown className="w-4 h-4 mr-1"/> -4.2%</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Concrete</span> <span>105%</span></div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-red-500 w-[105%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Steel</span> <span>92%</span></div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[92%]"></div></div>
                </div>
              </div>
            </div>

            {/* Dashboard Card 2 */}
            <div className="absolute bottom-20 left-0 w-72 glass-panel rounded-2xl p-6 anim-float-delayed shadow-2xl z-30 border-l-4 border-l-sky-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-sky-500/20 rounded-lg"><Activity className="w-6 h-6 text-sky-400"/></div>
                <div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider">Site Productivity</div>
                  <div className="text-2xl font-black text-white">Index: 1.14</div>
                </div>
              </div>
              <div className="h-16 w-full flex items-end gap-1">
                {[40, 55, 45, 70, 65, 85, 75].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════ 2. TECH LOGO MARQUEE ════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3].map((set) => (
            <React.Fragment key={set}>
              <span className="text-sm font-bold tracking-widest text-slate-800 uppercase flex items-center gap-2"><Layers className="w-4 h-4"/> Microsoft Fabric</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-800 uppercase">Power BI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-800 uppercase">Azure OpenAI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-800 uppercase">Procore</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-800 uppercase">Jobpac</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════ 3. THE PROBLEM (GRID LAYOUT) ════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-4">
              Sound familiar?
            </h2>
            <p className="text-slate-600 text-lg">
              Construction operates on razor-thin margins, yet critical financial and operational data is often trapped in silos, leading to blind spots.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                <AlertTriangle className="w-8 h-8 text-slate-300 mb-4 group-hover:text-red-400 transition-colors" />
                <p className="text-slate-700 font-medium leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ 4. CAPABILITIES DEEP DIVE ════════ */}
      <section className="py-24 bg-[#020817] border-y border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <HardHat className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Our Solutions</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white font-syne">
                How we help construction clients
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((service, idx) => (
              <div key={idx} className="group relative glass-panel p-8 rounded-3xl hover:bg-white/[0.05] hover:border-blue-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="bg-slate-900 border border-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Explore capability <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ 5. DATA ARCHITECTURE SECTION (NEW) ════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-4">
              Unified Construction Intelligence
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We break down the silos between site operations and head office, funneling all your core systems into a structured Microsoft Fabric data lake.
            </p>
          </div>

          <div className="relative bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 md:p-12 overflow-hidden">
            {/* Abstract Connections */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              
              {/* Source Systems */}
              <div className="flex-1 w-full">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center lg:text-left">Source Systems</div>
                <div className="grid grid-cols-2 gap-3">
                  {integrations.slice(0,6).map((sys, i) => (
                    <div key={i} className="bg-white border border-slate-200 py-3 px-4 rounded-xl text-center text-slate-700 font-bold shadow-sm text-sm">
                      {sys}
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Flow Arrows */}
              <div className="hidden lg:flex flex-col items-center justify-center text-slate-300">
                <Workflow className="w-12 h-12" />
                <div className="h-1 w-16 bg-gradient-to-r from-slate-200 to-blue-400 mt-2 rounded-full"></div>
              </div>

              {/* Microsoft Fabric / OneLake */}
              <div className="flex-1 w-full bg-[#020817] rounded-3xl p-8 text-center relative shadow-xl border border-blue-900/30">
                <div className="absolute inset-0 bg-blue-600/10 blur-xl rounded-3xl" />
                <Layers className="w-12 h-12 text-blue-400 mx-auto mb-4 relative z-10" />
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Microsoft Fabric</h3>
                <p className="text-slate-400 text-sm relative z-10">Centralized OneLake Data Hub</p>
              </div>

              {/* Data Flow Arrows */}
              <div className="hidden lg:flex flex-col items-center justify-center text-slate-300">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-sky-400 mb-2 rounded-full"></div>
                <ArrowRight className="w-8 h-8 text-sky-400" />
              </div>

              {/* Output / End User */}
              <div className="flex-1 w-full">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center lg:text-right">Actionable Outputs</div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 py-4 px-6 rounded-xl flex items-center gap-3 shadow-sm">
                    <BarChart4 className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-slate-800">Power BI Dashboards</span>
                  </div>
                  <div className="bg-gradient-to-r from-sky-50 to-white border border-sky-100 py-4 px-6 rounded-xl flex items-center gap-3 shadow-sm">
                    <Cpu className="w-5 h-5 text-sky-600" />
                    <span className="font-bold text-slate-800">Azure OpenAI Copilots</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════ 6. REAL RESULT (CASE STUDY) ════════ */}
      <section className="py-24 bg-[#020817] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-slate-900/50 flex flex-col lg:flex-row border border-slate-800 shadow-2xl relative group">
            
            {/* Animated Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 z-20"></div>

            {/* Image Side */}
            <div className="lg:w-2/5 relative min-h-[350px] lg:min-h-full bg-black overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Project" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0f172a] via-transparent to-transparent opacity-80" />
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-md shadow-lg">
                  Real result
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10 backdrop-blur-sm">
              <Building2 className="w-24 h-24 text-blue-500/5 absolute right-10 top-10 transform group-hover:rotate-12 transition-transform duration-700" />
              
              <h3 className="text-3xl md:text-4xl font-black text-white font-syne mb-6">
                Australian Tier 2 Builder
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                For a builder with AUD $120M turnover and 12 concurrent projects, we implemented real-time analytics bridging their site operations and finance. They successfully won a subsequent tender partly on the strength of their demonstrated reporting maturity.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="group/stat">
                  <div className="text-4xl md:text-5xl font-black text-white mb-3 flex items-center gap-2">
                    $2.4M <TrendingDown className="w-6 h-6 text-blue-400 transform group-hover/stat:translate-y-1 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">In-flight overruns identified</div>
                  <div className="text-slate-500 text-sm">In the first quarter (previously discovered 2-3 weeks late)</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl md:text-5xl font-black text-white mb-3 flex items-center gap-2">
                    4 Days <Clock className="w-6 h-6 text-blue-400 group-hover/stat:scale-110 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Progress Claim Cycle</div>
                  <div className="text-slate-500 text-sm">Accelerated down from a 14-day cycle</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ 7. WHY CHOOSE US (NEW) ════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-12">
            Why builders trust our data practice
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Industry Native</h4>
              <p className="text-slate-600 leading-relaxed">
                We understand BOQs, progress claims, retentions, and WIP. We don't need you to explain construction accounting to us before we start building.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Enterprise Governance</h4>
              <p className="text-slate-600 leading-relaxed">
                From Australian data privacy to Saudi PDPL compliance, our Microsoft architecture is secure, governed, and designed for Tier 1 & 2 risk requirements.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Pre-built Accelerators</h4>
              <p className="text-slate-600 leading-relaxed">
                We deploy faster because we utilize proven, pre-built data models for construction systems, reducing time-to-value from months to weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ 8. FINAL CTA SECTION ════════ */}
      <section className="py-24 px-6 bg-[#fafbfe]">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-slate-800 rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
          
          {/* Decorative floating rings */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-blue-500/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-syne tracking-tight leading-tight mb-6">
              Ready to talk about construction data?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Book a 30-minute conversation. We'll discuss the specific reporting, integration, and AI challenges in your operation, and outline what a construction-focused engagement looks like.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all duration-300 w-full sm:w-auto text-base inline-flex items-center justify-center gap-3 group"
              >
                Book a 30-minute conversation 
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}