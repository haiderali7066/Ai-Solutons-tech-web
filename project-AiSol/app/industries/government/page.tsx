import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  XCircle,
  Building2,
  ShieldCheck,
  Lock,
  Globe,
  Database,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Workflow,
  Scale,
  FileText,
  Sparkles,
  ChevronRight
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Microsoft Data & AI for Government | AI Solution Technologies',
  description: 'Secure, governed, and audit-ready data and AI solutions for government agencies and departments.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const problems = [
  'Reporting across 14+ source systems is fragmented',
  'Cloud migration delayed by risk concerns',
  'Audit findings repeating year after year',
  'AI initiatives blocked by governance gaps',
  'Citizen service data underused',
  'Vision 2030 / digital transformation targets at risk',
];

const capabilities = [
  {
    icon: <Scale className="w-6 h-6 text-blue-400" />,
    title: 'Data Governance Framework',
    desc: 'Establish rigorous data quality, lineage, and master data management aligned with APRA and PDPL standards.',
    link: '/services/data-governance'
  },
  {
    icon: <Lock className="w-6 h-6 text-sky-400" />,
    title: 'Microsoft Purview Implementation',
    desc: 'End-to-end data security, classification, and compliance monitoring to protect sensitive citizen information.',
    link: '/services/microsoft-purview'
  },
  {
    icon: <Globe className="w-6 h-6 text-indigo-400" />,
    title: 'Cloud Migration Strategy',
    desc: 'Safe, phased, and compliant transitions to Azure that prioritize sovereignty and data residency.',
    link: '/services/cloud-migration'
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: 'Enterprise AI Assistant',
    desc: 'Secure, private-instance AI agents that utilize your governed data to assist staff without risking leaks.',
    link: '/services/enterprise-ai-assistant'
  }
];

const integrations = ['SDAIA', 'APRA', 'PDPL', 'ASRS', 'Azure Government', 'Dynamics 365', 'SharePoint', 'SQL Server'];

/* ══════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════ */
export default function GovernmentIndustryPage() {
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

      {/* ════════ HERO SECTION ════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-[#020817] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/95 to-[#0b1736]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Public Sector Solution
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white font-syne">
              Microsoft data and AI for government
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Secure, governed, and audit-ready.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 font-light max-w-xl">
              We serve Australian local councils, state agencies, federal departments, UAE federal entities and Saudi Vision 2030 organisations. APRA, ASRS, PDPL and SDAIA aligned. Microsoft-aligned, security-first.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
              >
                Book a government reporting demo
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Abstract UI Elements */}
          <div className="relative hidden lg:block h-[500px] w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full anim-pulse" />
            
            <div className="absolute top-10 right-10 w-80 glass-panel rounded-2xl p-6 anim-float shadow-2xl z-20 border-t border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                <span className="text-white font-bold">Compliance Status</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Data Residency</span>
                  <span className="text-white font-bold text-xs bg-green-500/20 px-2 py-1 rounded">SECURED</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">PDPL Audit</span>
                  <span className="text-white font-bold text-xs bg-green-500/20 px-2 py-1 rounded">READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ INTEGRATION MARQUEE ════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-40 grayscale">
          {[1, 2].map((set) => (
            <React.Fragment key={set}>
              {integrations.map((item, i) => (
                <React.Fragment key={i}>
                  <span className="text-sm font-bold tracking-widest text-slate-800 uppercase">{item}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════ PROBLEMS ════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-4">Sound familiar?</h2>
            <p className="text-slate-600 text-lg">Government digital transformation faces unique hurdles, from strict data residency to complex multi-system environments.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-blue-200 transition-all">
                <Lock className="w-8 h-8 text-slate-300 mb-4" />
                <p className="text-slate-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CAPABILITIES ════════ */}
      <section className="py-24 bg-[#020817] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-syne">How we help government clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-3xl hover:bg-white/[0.05] transition-all">
                <div className="mb-6 bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 mb-8">{item.desc}</p>
                <Link href={item.link} className="text-blue-400 font-bold text-sm flex items-center gap-2">Explore <ChevronRight className="w-4 h-4"/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CASE STUDY ════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-[#020817] text-white p-12 overflow-hidden relative">
            <div className="relative z-10 max-w-3xl">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Real result</span>
              <h3 className="text-3xl md:text-4xl font-black mt-4 mb-6">KSA Government Agency</h3>
              <p className="text-slate-300 text-lg mb-8">Azure OpenAI deployed in UAE North region — fully PDPL-aligned. 6 internal AI assistants now in production. Use of public AI tools by staff dropped 95%. Set foundation for Vision 2030 AI initiatives.</p>
              <div className="flex gap-12 border-t border-white/10 pt-8">
                <div><div className="text-4xl font-black">95%</div><div className="text-xs text-blue-400 uppercase">Public AI tools usage drop</div></div>
                <div><div className="text-4xl font-black">6</div><div className="text-xs text-blue-400 uppercase">Internal AI Assistants</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#0f172a] rounded-[2.5rem] p-16 text-center text-white">
          <h2 className="text-4xl font-black font-syne mb-6">Ready to talk about government?</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">Book a 30-minute conversation to discuss reporting and data challenges in your government operation.</p>
          <Link href="/contact" className="px-8 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-colors inline-flex items-center gap-2">
            Book a 30-minute conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}