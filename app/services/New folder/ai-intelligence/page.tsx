'use client';

import React from 'react';
import { 
  Network, Cpu, ShieldCheck, Database, 
  Workflow, BarChart3, ChevronRight, Lock 
} from 'lucide-react';

/* ══════════════════════════════════════
   COMPONENTS
══════════════════════════════════════ */

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 bg-[#020817] overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020817] to-[#020817]" />
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
          Enterprise AI & Automation
        </span>
        <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
          AI & Intelligent <span className="text-blue-500">Automation</span>
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
          Design and deploy enterprise AI systems that automate operations, enhance decision-making, and transform business workflows using trusted, governed data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
            Book Consultation
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-all">
            Explore AI Capabilities
          </button>
        </div>
      </div>
      <div className="relative aspect-square lg:aspect-video bg-blue-950/30 rounded-3xl border border-white/5 p-4">
         {/* Placeholder for futuristic AI dashboard/neural net visual */}
         <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-2xl opacity-50" />
      </div>
    </div>
  </section>
);

const Capabilities = () => {
  const caps = [
    { title: "Agentic AI Systems", icon: Cpu, desc: "Autonomous AI agents that execute complex workflows and make contextual decisions." },
    { title: "Predictive Intelligence", icon: BarChart3, desc: "Forecasting models that turn historical data into future operational advantages." },
    { title: "OCR & Document AI", icon: Database, desc: "Automated classification and processing of complex enterprise documentation." },
    { title: "Workflow Automation", icon: Workflow, desc: "AI-driven streamlining of repetitive administrative and operational tasks." },
    { title: "Decision Intelligence", icon: Network, desc: "Actionable recommendations derived from governed enterprise data streams." },
    { title: "ML Engineering", icon: Cpu, desc: "Custom-built models for anomaly detection, classification, and optimization." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black text-[#0f172a] mb-16 text-center">Enterprise AI Capabilities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caps.map((c, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all hover:shadow-xl group">
            <c.icon className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3">{c.title}</h3>
            <p className="text-slate-500 font-light leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const GovernedData = () => (
  <section className="py-24 px-6 bg-[#0f172a] text-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-black leading-tight">AI Built on Structured & <span className="text-blue-400">Governed Data</span></h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Unlike experimental providers that apply AI to fragmented datasets, we establish a robust data foundation first. This ensures every decision made by our AI is explainable, auditable, and fully compliant with enterprise standards.
        </p>
        <ul className="space-y-4">
          {["Governed enterprise data", "Explainable AI (XAI)", "Audit-ready systems", "Compliance-first architecture"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 font-semibold">
              <ShieldCheck className="text-blue-500" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-96 bg-blue-900/20 rounded-3xl border border-white/10 flex items-center justify-center p-8">
        {/* Placeholder for Data Architecture Visual */}
        <p className="text-blue-400 font-mono tracking-widest text-center">LAYERS OF GOVERNED ARCHITECTURE</p>
      </div>
    </div>
  </section>
);

const DeliveryFramework = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-black text-[#0f172a] mb-16 text-center">AI Delivery Framework</h2>
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {['Discovery', 'Data Foundation', 'AI Design', 'Integration', 'Deployment'].map((step, i) => (
        <div key={i} className="relative p-6 border-l-4 border-blue-600 bg-slate-50">
          <div className="text-4xl font-black text-blue-100 mb-4">0{i+1}</div>
          <h4 className="font-bold text-lg">{step}</h4>
        </div>
      ))}
    </div>
  </section>
);

/* ══════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════ */
export default function AIAutomationPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Capabilities />
      <GovernedData />
      <DeliveryFramework />
      
      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-blue-600">
        <h2 className="text-4xl font-black text-white mb-6">Transform Operations with Enterprise AI</h2>
        <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:scale-105 transition-transform">
          Talk to AI Experts
        </button>
      </section>
    </main>
  );
}