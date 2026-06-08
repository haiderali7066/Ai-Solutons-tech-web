'use client';

import React from 'react';

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const industriesData = [
  {
    id: 'finance', icon: '🏦', name: 'Banking & Finance',
    description: 'Transforming legacy banking infrastructure with predictive risk modeling, algorithmic fraud detection, and automated compliance pipelines.',
    solutions: ['Real-time Fraud Detection', 'Credit Risk Modeling', 'Algorithmic Trading']
  },
  {
    id: 'govtech', icon: '🏛️', name: 'Government & Public Sector',
    description: 'Secure, sovereign AI frameworks designed for public infrastructure, optimizing citizen services while maintaining strict data perimeters.',
    solutions: ['Sovereign Data Processing', 'Resource Allocation AI', 'Policy Impact Modeling']
  },
  {
    id: 'healthcare', icon: '🏥', name: 'Healthcare & Life Sciences',
    description: 'Accelerating diagnostic accuracy and patient outcomes through secure neural networks trained on vast, anonymized medical datasets.',
    solutions: ['Medical Imaging Analysis', 'Patient Risk Prediction', 'Drug Discovery Acceleration']
  },
  {
    id: 'logistics', icon: '🚚', name: 'Logistics & Supply Chain',
    description: 'Dynamic routing and predictive demand architectures that eliminate supply chain friction and drastically reduce operational overhead.',
    solutions: ['Predictive Maintenance', 'Dynamic Fleet Routing', 'Demand Forecasting']
  },
  {
    id: 'retail', icon: '🛒', name: 'Retail & E-Commerce',
    description: 'Hyper-personalized recommendation engines and automated inventory management systems that scale revenue and customer retention.',
    solutions: ['Personalization Engines', 'Inventory Optimization', 'Automated Customer Success']
  },
  {
    id: 'manufacturing', icon: '🏭', name: 'Advanced Manufacturing',
    description: 'Integrating computer vision and predictive IoT models to automate quality control and prevent catastrophic assembly line downtime.',
    solutions: ['Defect Detection Vision', 'Equipment Health Tracking', 'Automated QA Routing']
  }
];

const crossCapabilities = [
  { title: 'Data Architecture', desc: 'Secure, sovereign enterprise data pipelines and infrastructure.', icon: '🗄️' },
  { title: 'ML Ops & Deployment', desc: 'Continuous integration and lifecycle management for AI models.', icon: '⚙️' },
  { title: 'Business Intelligence', desc: 'Real-time analytics dashboards translating raw data into strategy.', icon: '📊' },
  { title: 'Governance & Security', desc: 'Absolute regulatory compliance, SOC 2, and ISO alignments.', icon: '🛡️' }
];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════ */
export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-500/30 overflow-x-hidden">

      {/* ════════ HERO SECTION WITH CINEMATIC CORPORATE BACKGROUND ════════ */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-40 px-6 overflow-hidden bg-[#020817]">
        {/* High-End Architectural Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25 mix-blend-luminosity"
          aria-hidden="true"
        />
        {/* Deep Gradient Masks */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#020817] via-[#020817]/80 to-[#0f172a]/90" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Global Sector Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-syne">
            Transforming Industries <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">Through Intelligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            We architect and deploy production-grade AI systems tailored to the specific regulatory, operational, and scale requirements of global enterprise sectors.
          </p>
        </div>
      </section>

      {/* ════════ INDUSTRIES GRID SECTION ════════ */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto z-20 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry) => (
            <div
              key={industry.id}
              className="group bg-white border border-slate-200/80 rounded-[2rem] p-8 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-300">
                {industry.icon}
              </div>
              
              <h2 className="text-2xl font-black text-[#0f172a] font-syne mb-3 tracking-tight">
                {industry.name}
              </h2>
              <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                {industry.description}
              </p>
              
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Core Deployments</p>
                <ul className="space-y-3">
                  {industry.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[#0f172a]">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px]">✓</span>
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ DEEP DIVE SECTIONS WITH IMAGE BACKGROUNDS ════════ */}
      <section className="py-12 flex flex-col gap-6 px-6 max-w-7xl mx-auto">
        
        {/* Deep Dive 1: Finance */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 grid grid-cols-1 lg:grid-cols-2 items-center group">
          <div className="p-10 sm:p-16 relative z-10">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-4 block">// SECTOR FOCUS 01</span>
            <h3 className="text-3xl sm:text-4xl font-black text-white font-syne tracking-tight mb-6">Financial Services & Banking</h3>
            <p className="text-slate-400 leading-relaxed font-light mb-8">
              We help Tier-1 financial institutions implement neural networks for fraud detection, real-time risk assessment, and algorithmic trade routing. Our solutions protect trillions in assets while adhering strictly to international financial compliance frameworks.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="border-l-2 border-blue-500 pl-4">
                 <div className="text-2xl font-bold text-white mb-1">12ms</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider">Avg Trade Routing</div>
               </div>
               <div className="border-l-2 border-blue-500 pl-4">
                 <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider">Fraud Prevention</div>
               </div>
            </div>
          </div>
          <div className="relative h-64 lg:h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 block lg:hidden" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
              alt="Financial Data" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Deep Dive 2: Healthcare (Alternating Layout) */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 grid grid-cols-1 lg:grid-cols-2 items-center group">
          <div className="relative h-64 lg:h-full w-full overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-l from-slate-900 to-transparent z-10 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 block lg:hidden" />
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80" 
              alt="Healthcare Technology" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-10 sm:p-16 relative z-10 order-1 lg:order-2">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-4 block">// SECTOR FOCUS 02</span>
            <h3 className="text-3xl sm:text-4xl font-black text-white font-syne tracking-tight mb-6">Healthcare & Life Sciences</h3>
            <p className="text-slate-400 leading-relaxed font-light mb-8">
              Ai solutions improve patient outcomes through computer-vision diagnostic assistance, drug discovery acceleration architectures, and heavy operational efficiency enhancements securely deployed within HIPAA-compliant hospital perimeters.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="border-l-2 border-sky-500 pl-4">
                 <div className="text-2xl font-bold text-white mb-1">40x</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider">Analysis Speed</div>
               </div>
               <div className="border-l-2 border-sky-500 pl-4">
                 <div className="text-2xl font-bold text-white mb-1">HIPAA</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider">Native Compliance</div>
               </div>
            </div>
          </div>
        </div>

      </section>

      {/* ════════ CROSS-INDUSTRY CAPABILITIES (GLASSMORPHISM ON IMAGE BACKGROUND) ════════ */}
      <section className="relative py-32 my-16 px-6 border-y border-slate-800">
        {/* Parallax Corporate Background */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed opacity-30 mix-blend-screen filter grayscale"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020817] via-[#0f172a]/95 to-[#020817]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-syne mb-6">
              Universal Engineering Capabilities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              Regardless of your sector, our foundational engineering pipelines ensure absolute stability, scale, and intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crossCapabilities.map((cap, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl mb-6">{cap.icon}</div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-3">{cap.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PREMIUM CTA SECTION ════════ */}
      <section className="py-24 px-6 bg-[#fafbfe]">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.28)]">
          {/* Decorative floating rings */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-4 block">Strategic Consultation</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 font-syne">
              Solve Your Sector's Toughest Challenges.
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-light">
              Our engineering specialists understand the specific technical debts and operational hurdles native to your industry. Let's map the architecture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                Schedule Architecture Briefing
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}