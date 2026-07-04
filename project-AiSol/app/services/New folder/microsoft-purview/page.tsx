import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Database,
  Search,
  Users,
  Clock,
  DollarSign,
  ShieldCheck,
  Building,
  Target,
  FileSearch,
  Lock,
  Network
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA (Server-Side SEO)
══════════════════════════════════════ */
export const metadata = {
  title: 'Microsoft Purview Implementation | AI Solution Technologies',
  description: 'End-to-end Microsoft Purview deployment for data catalog, lineage mapping, sensitive data classification, and compliance reporting.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES & EXPANDED CONTENT
══════════════════════════════════════ */
const problems = [
  'No data catalog — nobody knows what data exists',
  'Lineage is tribal knowledge',
  'GDPR / PDPL compliance scanning is manual',
  'Sensitive data lives in unexpected places',
  'Governance can\'t be automated',
  'Auditors keep finding gaps',
];

const deliverables = [
  'Purview platform deployment',
  'Data catalog setup (sources scanned)',
  'Sensitive data classification',
  'Data lineage mapping',
  'Business glossary',
  'Policy automation',
  'Compliance scanning',
  'Integration with Power BI and Fabric',
];

const industries = ['Financial Services', 'Healthcare', 'Government', 'Listed entities', 'Regulated industries'];
const roles = ['CIO', 'CDO', 'Head of Compliance', 'Head of Risk', 'Head of Data Engineering'];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT (100% Server Side)
══════════════════════════════════════ */
export default function PurviewServicePage() {
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

      {/* ════════ HERO SECTION (WITH BACKGROUND IMAGE) ════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0 bg-[#020817]">
          {/* High-quality abstract data / security image */}
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Security and Governance Concept" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Floating Abstract Dashboard Elements (CSS Animated) */}
        <div className="absolute right-[5%] top-[20%] w-64 h-40 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md p-4 anim-float hidden lg:block shadow-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
             <ShieldCheck className="w-5 h-5 text-emerald-400" />
             <div className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">Protected</div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-slate-400" />
              <div className="w-full h-1.5 bg-emerald-500/80 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-slate-400" />
              <div className="w-5/6 h-1.5 bg-emerald-400/80 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-3 h-3 text-slate-400" />
              <div className="w-3/4 h-1.5 bg-blue-500/80 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute left-[5%] bottom-[15%] w-48 h-48 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-md p-4 anim-float-delayed hidden lg:flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full border-4 border-indigo-500/20 border-t-indigo-400"></div>
          <div className="absolute w-20 h-20 rounded-full border-4 border-slate-500/20 border-b-slate-400"></div>
          <Network className="absolute w-8 h-8 text-white/50" />
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none anim-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 backdrop-blur-xl mb-8">
            <FileSearch className="w-4 h-4" />
            Governance & Compliance
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white font-syne">
            Microsoft Purview implementation — data catalog, lineage, 
            <span className="block mt-3 bg-gradient-to-r from-indigo-400 via-sky-300 to-blue-400 bg-clip-text text-transparent pb-2">
              classification and governance.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            End-to-end Microsoft Purview deployment for organisations needing data catalog, lineage mapping, sensitive data classification, and compliance reporting in one platform.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-[0_15px_40px_rgba(79,70,229,0.4)]"
            >
              Book a 30-minute conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ INTEGRATION MARQUEE ════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3].map((set) => (
            <React.Fragment key={set}>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Microsoft Purview</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">APRA</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">GDPR</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">PDPL</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">SDAIA</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════ THE PITCH ════════ */}
      <section className="relative py-24 bg-[#fafbfe]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="group rounded-2xl bg-white border border-slate-200 p-10 md:p-14 text-center shadow-[0_10px_40px_rgba(15,23,42,0.03)] relative overflow-hidden transition-all duration-500 hover:border-indigo-200 hover:shadow-[0_20px_50px_rgba(79,70,229,0.08)]">
            
            {/* Animated Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <ShieldCheck className="absolute -right-10 -top-10 w-48 h-48 text-slate-50 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />
            
            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-[#020817] font-light font-syne">
              "If your auditors keep finding gaps in data governance, and your data team can't tell you where customer data lives — <strong className="font-black text-indigo-600 relative inline-block">Purview is the answer.<span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-200 -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span></strong> We deploy it fully integrated with your Microsoft stack and aligned to your compliance regime (APRA, PDPL, GDPR, SDAIA)."
            </p>
          </div>
        </div>
      </section>

      {/* ════════ PROBLEMS VS DELIVERABLES ════════ */}
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
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none anim-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
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
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
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

      {/* ════════ CASE STUDY ════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-[#020817] flex flex-col lg:flex-row border border-slate-800 shadow-2xl relative group">
            
            {/* Animated Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-sky-400 to-blue-600 z-20"></div>

            {/* Image Side */}
            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Corporate Financial Firm" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020817]" />
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg">
                  Case Study
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10">
              <Building className="w-16 h-16 text-indigo-500/10 absolute right-10 top-10 transform group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black text-white font-syne mb-6">
                Financial Services Compliance
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                An APRA-regulated Australian financial services firm needed to scan 280TB across 40+ sources before their next prudential review. We deployed Purview in 6 weeks and identified 12,000 previously unknown sensitive data instances. The APRA review passed first time.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2 flex items-center gap-2">
                    280<span className="text-2xl text-indigo-400">TB</span> <Database className="w-5 h-5 text-emerald-400 transform group-hover/stat:scale-110 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Data Scanned</div>
                  <div className="text-slate-500 text-sm mt-1">Across 40+ different sources</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2 flex items-center gap-2">
                    12,000 <Target className="w-5 h-5 text-emerald-400 group-hover/stat:scale-110 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Sensitive Hits</div>
                  <div className="text-slate-500 text-sm mt-1">Previously unknown data instances</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ LOGISTICS & TARGET AUDIENCE ════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Target Audience */}
            <div className="lg:col-span-7 rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-[#020817] mb-10 uppercase tracking-wide flex items-center gap-3">
                <Users className="w-5 h-5 text-indigo-600" /> Who this is for
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Core Industries</h4>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map(ind => (
                    <span key={ind} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-indigo-300 hover:text-indigo-700 transition-colors cursor-default">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Target Buyers</h4>
                <div className="flex flex-wrap gap-2.5">
                  {roles.map(role => (
                    <span key={role} className="px-4 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics (Pricing & Delivery) */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <DollarSign className="w-40 h-40 -mb-10 -mr-10" />
                </div>
                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3">Investment</h4>
                <div className="text-3xl md:text-4xl font-black text-white font-syne mb-2">AUD $20K – $100K</div>
                <p className="text-slate-400 text-sm font-light">Based on data sources and catalog size</p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:scale-125 transition-transform duration-700">
                  <Clock className="w-40 h-40 -mb-10 -mr-10 text-indigo-900" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Delivery Timeline</h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-2">6–14 weeks</div>
                <p className="text-slate-500 text-sm font-light">From scoping to compliance reporting</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="bg-[#020817] px-6 py-24 border-t border-slate-800">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-slate-700 p-12 md:p-24 text-center shadow-2xl max-w-5xl mx-auto group">
          
          {/* Animated Background Rays */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent group-hover:opacity-[0.05] transition-opacity duration-1000"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-syne capitalize">
              Ready to discuss Microsoft Purview implementation?
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-300 font-light mb-10">
              Book a 30-minute conversation. We'll look at your current setup, discuss your goals, and outline what an engagement would look like — at no cost and no commitment.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-5 text-sm font-bold text-[#020817] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[0_15px_40px_rgba(251,191,36,0.3)] uppercase tracking-widest"
            >
              Book a 30-minute conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}