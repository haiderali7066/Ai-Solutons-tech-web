import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Sparkles,
  Zap 
} from 'lucide-react';

export default function KSAGovernmentCaseStudy() {
  return (
    <main className="min-h-screen bg-[#fafbfe] text-[#0f172a]">
      
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-24 px-6 bg-[#020817] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-indigo-300 mb-8">
            Case Study · Public Sector AI
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-syne mb-8 leading-[1.1]">
            Secure, sovereign AI for a KSA government agency
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-light">
            Deploying private-instance Azure OpenAI to drive internal efficiency while ensuring strict adherence to PDPL and national data residency mandates.
          </p>
        </div>
      </section>

      {/* ════════ EXECUTIVE SUMMARY ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-2">
            <div className="text-4xl font-black text-indigo-600">95%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Drop in public AI use</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-indigo-600">6</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Internal AI agents</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-indigo-600">Sovereign</div>
            <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Compliant architecture</div>
          </div>
        </div>
      </section>

      {/* ════════ CHALLENGE & SOLUTION ════════ */}
      <section className="py-24 bg-white border-y border-slate-100 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black font-syne mb-6">The Challenge</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Government staff were increasingly relying on unregulated public AI tools to perform daily tasks, creating significant risks regarding data leakage and non-compliance with national data protection laws. The agency required a secure, internal alternative that provided the utility of GenAI without compromising sensitive information.
            </p>
            <ul className="space-y-4">
              {['Unsanctioned public AI usage', 'Sensitive data security risks', 'Need for PDPL compliance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#020817] p-8 rounded-3xl text-white">
            <h2 className="text-3xl font-black font-syne mb-6 text-indigo-400">The Solution</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We architected a private Azure OpenAI environment deployed within the UAE North region, ensuring data residency and sovereign control. This secure platform allowed for the deployment of specific, domain-aware internal AI agents.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                <Lock className="text-indigo-400 shrink-0" />
                <p className="text-sm">PDPL-aligned, private-instance AI infrastructure.</p>
              </div>
              <div className="flex gap-4 p-4 bg-white/5 rounded-xl">
                <Zap className="text-indigo-400 shrink-0" />
                <p className="text-sm">Department-specific AI copilots for staff productivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ OUTCOME ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black font-syne mb-12">The Impact</h2>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-12 text-white shadow-2xl">
            <p className="text-2xl md:text-3xl font-light italic mb-8">
              "By providing a secure, high-utility alternative, we successfully migrated the workforce away from public tools, ensuring all AI-driven outputs remained within our controlled governance environment."
            </p>
            <div className="flex justify-center gap-2 text-indigo-200 font-bold uppercase tracking-widest text-sm">
              <CheckCircle2 className="w-5 h-5" /> Vision 2030 foundation established
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
          Discuss sovereign AI deployment <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}