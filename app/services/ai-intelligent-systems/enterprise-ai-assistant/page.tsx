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
  MessageSquare,
  Workflow
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA (Server-Side SEO)
══════════════════════════════════════ */
export const metadata = {
  title: 'Enterprise AI Assistant & Private ChatGPT | AI Solution Technologies',
  description: 'Your own private ChatGPT — trained on your documents, deployed securely on Azure OpenAI with enterprise-grade data guardrails and role-based access controls.',
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
  { title: 'CEO', desc: 'Enterprise AI strategy and board-level validation' },
  { title: 'CIO', desc: 'Secure cloud infrastructure and strict data isolation' },
  { title: 'Chief AI Officer', desc: 'Enterprise data orchestration and model refinement' },
  { title: 'Head of Digital', desc: 'Operational process optimization and workspace adoption' },
  { title: 'CHRO', desc: 'Onboarding workflows and contextual policy delivery' }
];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT (100% Server Side)
══════════════════════════════════════ */
export default function EnterpriseAIAssistantServicePage() {
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
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating AI Vector / RAG Visual Architecture */}
        <div className="absolute right-[5%] top-[15%] w-72 h-64 anim-float hidden lg:block z-10 pointer-events-none">
          {/* Top Secure Node */}
          <div className="absolute top-0 right-0 w-52 bg-white/[0.03] border border-cyan-500/20 rounded-xl backdrop-blur-md p-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="flex items-center gap-3 mb-2">
               <ShieldCheck className="w-5 h-5 text-cyan-400" />
               <span className="text-xs font-bold text-white tracking-widest uppercase">Azure OpenAI Isolation</span>
            </div>
            <div className="h-1.5 w-full bg-cyan-500/30 rounded-full"></div>
          </div>
          
          {/* Virtual Connecting Mesh Line */}
          <div className="absolute top-[4.5rem] right-24 w-0.5 h-16 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 anim-line"></div>

          {/* Bottom RAG Context Node */}
          <div className="absolute bottom-0 right-24 w-52 bg-white/[0.03] border border-blue-500/20 rounded-xl backdrop-blur-md p-4 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="flex items-center gap-3 mb-2">
               <Database className="w-5 h-5 text-blue-400" />
               <span className="text-xs font-bold text-white tracking-widest uppercase">Enterprise Context</span>
            </div>
            <div className="h-1.5 w-full bg-blue-500/30 rounded-full"></div>
          </div>
        </div>

        <div className="absolute left-[5%] bottom-[20%] w-48 h-48 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-md p-4 anim-float-delayed hidden lg:flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full border-4 border-purple-500/20 border-r-purple-400 border-t-purple-400 flex items-center justify-center">
             <MessageSquare className="w-10 h-10 text-white opacity-40" />
          </div>
        </div>

        {/* Ambient Visual Center Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-700/15 blur-[120px] rounded-full pointer-events-none anim-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Lock className="w-4 h-4 text-cyan-400" />
            Isolated Compliance Infrastructure
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
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Cpu className="w-4 h-4 text-blue-600"/> Azure OpenAI</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Search className="w-4 h-4 text-amber-500"/> RAG Architecture</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><FileText className="w-4 h-4 text-indigo-500"/> SharePoint Ingestion</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><Lock className="w-4 h-4 text-blue-500"/> VNet Isolation</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-cyan-600"/> Audit Logging</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════ 2. THE PITCH ════════ */}
      <section className="relative py-24 bg-[#fafbfe]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="group rounded-2xl bg-white border border-slate-200 p-10 md:p-16 text-center shadow-[0_10px_40px_rgba(15,23,42,0.03)] relative overflow-hidden transition-all duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]">
            
            {/* Animated Hover Background Sweep */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <MessageSquare className="absolute -left-12 -bottom-12 w-64 h-64 text-slate-50 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />
            
            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-[#020817] font-light font-syne">
              Your staff are already using ChatGPT — probably with company data, probably against policy. The fix isn't to ban it; it's to give them a <strong className="font-black text-blue-600 relative inline-block">secure, sanctioned alternative.<span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-300 -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span></strong> We build private AI assistants on Azure OpenAI that answer questions over your own enterprise content.
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
            
            {/* Upper Accent Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-20"></div>

            {/* Cinematic Background Side */}
            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Neural Cloud Systems" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020817]" />
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-cyan-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg">
                  Case Study
                </span>
              </div>
            </div>

            {/* Narrative Context Side */}
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10">
              <Zap className="w-16 h-16 text-cyan-500/10 absolute right-10 top-10 transform group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black text-white font-syne mb-6">
                Professional Services Firm (220 Consultants)
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                Holding over 15 years of complex historical project documents, this advisory firm deployed an isolated private AI assistant on Azure OpenAI. High-velocity discovery optimization instantly removed public risk vulnerabilities.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2">90s</div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Precedent Hunt (Was 35m)</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2">40%</div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">IT Ticket Deflection</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl font-black text-emerald-400 mb-2">Zero</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Public Data Leaks</div>
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
            
            {/* Target Audience Profile */}
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

            {/* Project Logistics */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              

              <div className="rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:scale-125 transition-transform duration-700">
                  <Clock className="w-40 h-40 -mb-10 -mr-10 text-blue-900" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Delivery Timeline</h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-2">6–14 weeks</div>
                <p className="text-slate-500 text-sm font-light">From secure setup isolation to contextual department rollouts.</p>
              </div>
            </div>

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
              Ready to discuss ?
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