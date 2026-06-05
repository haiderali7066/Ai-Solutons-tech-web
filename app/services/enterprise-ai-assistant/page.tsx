import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Database,
  ShieldCheck,
  Cpu,
  Lock,
  Layers,
  Box,
  Building2,
  Users,
  Clock,
  DollarSign,
  Mail,
  Zap,
  FileText,
  Search,
  MessageSquare
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA (Server-Side SEO)
══════════════════════════════════════ */
export const metadata = {
  title: 'Enterprise AI Assistant (Private ChatGPT) | AI Solution Technologies',
  description: 'Private enterprise AI assistant built on Azure OpenAI. Securely indexed against your documents, SharePoint, and policy library. No public ChatGPT risk.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const problems = [
  'Staff using public ChatGPT with sensitive data',
  'Information silos slowing everyone down',
  'Onboarding takes 3 months because nobody knows where things are',
  'HR / Finance / IT asked the same questions hundreds of times a week',
  'No AI policy or governance in place',
  'CEO wants an "AI strategy" for the board',
];

const deliverables = [
  'Azure OpenAI deployment',
  'Private endpoint + VNet integration',
  'Document ingestion pipeline (SharePoint, Teams, file shares)',
  'RAG architecture (retrieval-augmented generation)',
  'Custom AI assistants per function (HR, Finance, IT, Ops)',
  'Role-based access control + audit logging',
  'User adoption training',
  'AI governance framework',
];

const industries = [
  'Professional Services',
  'Financial Services',
  'Government',
  'Healthcare',
  'Construction',
  'Manufacturing'
];

const roles = [
  { title: 'CEO', desc: 'Enterprise AI strategy and competitive differentiation' },
  { title: 'CIO', desc: 'Secure infrastructure and data privacy compliance' },
  { title: 'Chief AI Officer', desc: 'AI orchestration and organizational intelligence' },
  { title: 'Head of Digital', desc: 'Operational efficiency and platform adoption' },
  { title: 'CHRO', desc: 'Internal knowledge management and onboarding' }
];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════ */
export default function EnterpriseAIPage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-cyan-500/30">
      
      {/* CSS INJECTED SERVER-SIDE */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes gradientPan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        
        .anim-float { animation: float 7s ease-in-out infinite; }
        .anim-pulse { animation: pulseGlow 5s ease-in-out infinite; }
        .anim-marquee { animation: marquee 35s linear infinite; }
        .anim-gradient { background-size: 200% 200%; animation: gradientPan 12s ease infinite; }
      `}} />

      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden bg-[#020817] pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5 anim-gradient bg-gradient-to-br from-[#020817] via-[#0b1221] to-[#020817]">
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Lock className="w-4 h-4 text-cyan-400" />
            Secure Private AI Infrastructure
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white font-syne">
            Your own private ChatGPT — 
            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent pb-2">
              trained on your documents.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Secure enterprise AI assistant: built on Azure OpenAI, indexed against your SharePoint, file shares and policy library, with full access control and audit logging. No public ChatGPT risk.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]">
              Book a 30-minute conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ THE PITCH ════════ */}
      <section className="relative py-24 bg-[#fafbfe]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="group rounded-2xl bg-white border border-slate-200 p-10 md:p-16 text-center shadow-[0_10px_40px_rgba(15,23,42,0.03)] relative overflow-hidden transition-all duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <MessageSquare className="absolute -left-12 -bottom-12 w-64 h-64 text-slate-50 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />
            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-[#020817] font-light font-syne">
              Your staff are already using ChatGPT — probably with company data, probably against policy. The fix isn't to ban it; it's to give them a <strong className="font-black text-blue-600">secure, sanctioned alternative.</strong> We build private AI assistants on Azure OpenAI that answer questions over your own enterprise content.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ PROBLEMS & DELIVERABLES ════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            <div className="rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 border border-red-100"><XCircle className="w-6 h-6" /></div>
                <h2 className="text-2xl md:text-3xl font-black text-[#020817] font-syne">Sound familiar?</h2>
              </div>
              <ul className="space-y-6">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-4"><div className="mt-0.5 shrink-0"><XCircle className="w-5 h-5 text-red-400" /></div><span className="text-slate-600 font-medium">{p}</span></li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"><CheckCircle2 className="w-6 h-6" /></div>
                  <h2 className="text-2xl md:text-3xl font-black text-white font-syne">What's included</h2>
                </div>
                <ul className="space-y-6">
                  {deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-4"><div className="mt-0.5 shrink-0"><CheckCircle2 className="w-5 h-5 text-cyan-400" /></div><span className="text-slate-300 font-light">{d}</span></li>
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
          <div className="rounded-3xl overflow-hidden bg-[#020817] flex flex-col lg:flex-row border border-slate-800 shadow-2xl relative">
            <div className="lg:w-2/5 relative min-h-[300px] bg-slate-900">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" alt="AI Analytics" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" />
              <div className="absolute top-8 left-8"><span className="bg-cyan-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg">Case Study</span></div>
            </div>
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white font-syne mb-6">Professional Services Firm (220 Consultants)</h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                Deployed a private AI assistant on Azure OpenAI. Average time to find a relevant precedent dropped from 35 minutes to 90 seconds. Internal IT support requests reduced 40%. Zero recorded incidents of staff using public AI tools with client data.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div><div className="text-4xl font-black text-white mb-2">90s</div><div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Time to find docs</div></div>
                <div><div className="text-4xl font-black text-white mb-2">40%</div><div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">IT support drop</div></div>
                <div><div className="text-4xl font-black text-white mb-2">Zero</div><div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Public AI leaks</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ LOGISTICS & AUDIENCE ════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm">
              <h3 className="text-xl font-bold text-[#020817] mb-10 uppercase tracking-wide flex items-center gap-3"><Users className="w-5 h-5 text-blue-600" /> Target Audience</h3>
              <div className="mb-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Core Industries</h4>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map(ind => (<span key={ind} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600">{ind}</span>))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {roles.map((r, i) => (<div key={i} className="p-4 rounded-xl bg-blue-50/50 border border-blue-100"><div className="font-bold text-blue-700 text-sm">{r.title}</div><div className="text-xs text-slate-500">{r.desc}</div></div>))}
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center text-white">
                <DollarSign className="w-10 h-10 text-cyan-400 mb-4" />
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em]">Investment</h4>
                <div className="text-3xl md:text-4xl font-black font-syne">AUD $30K – $120K</div>
              </div>
              <div className="rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 flex flex-col justify-center">
                <Clock className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Timeline</h4>
                <div className="text-3xl md:text-4xl font-black font-syne">6–14 Weeks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="bg-[#020817] px-6 py-24 border-t border-slate-800">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-slate-700 p-12 md:p-24 text-center shadow-2xl max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white font-syne uppercase">Ready to discuss enterprise ai assistant (private chatgpt)?</h2>
          <p className="mt-6 text-lg md:text-xl text-slate-300 font-light mb-10">Book a 30-minute conversation. We'll look at your current setup, discuss your goals, and outline what an engagement would look like — at no cost and no commitment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold text-[#020817] hover:bg-amber-300 uppercase tracking-widest transition-all">
              Book a 30-minute conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}