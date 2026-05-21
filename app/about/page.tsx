'use client';

import React, { useState } from 'react';

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const companyTimeline = [
  {
    id: '01', year: '2009', title: 'Discovery Phase & Inception',
    description: 'Founded as a boutique automation collective with a singular vision: mapping out diagnostic and predictive architectures to democratize intelligent workflows for complex enterprise infrastructures.',
    statLabel: 'Initial Frameworks', statValue: 'v1.0 Core'
  },
  {
    id: '02', year: '2015', title: 'Architectural Scale Engine',
    description: 'Transitioned from custom local logic systems to full enterprise machine learning arrays, scaling core workflows into premium banking pipelines and global network layers.',
    statLabel: 'Compute Matrix', statValue: '250 TFLOPS'
  },
  {
    id: '03', year: '2020', title: 'International System Expansion',
    description: 'Established dedicated regional delivery centers across Australia and the GCC (UAE & KSA), designing tailored data sovereignty matrices matching localized state compliance structures.',
    statLabel: 'Global Operations', statValue: '3 Hubs'
  },
  {
    id: '04', year: '2024', title: 'Cognitive Automation Peak',
    description: 'Deploying deep production-grade generative systems and low-latency digital products helping leading organizations create massive business metrics optimization in weeks, not months.',
    statLabel: 'Client Valuation', statValue: '$2B+ Created'
  }
];

const teamMembers = [
  { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { name: 'James Wilson', role: 'Chief Technology Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. Raj Patel', role: 'Head of AI Research', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Emma Rodriguez', role: 'Chief Operations Officer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80' },
];

const values = [
  {
    icon: '⚡', title: 'Relentless Innovation',
    desc: 'We stay at the bleeding edge of neural network research and cloud architecture, constantly exploring new methodologies to deliver next-generation solutions before they become industry standard.'
  },
  {
    icon: '🛡️', title: 'Uncompromising Integrity',
    desc: 'Ethical AI is our foundation. We prioritize transparent modeling, eliminate algorithmic bias, and ensure absolute data sovereignty and security for every enterprise we partner with.'
  },
  {
    icon: '📈', title: 'Empowering Growth',
    desc: 'Technology should elevate people, not replace them. Our architectures are designed to augment human potential, freeing teams to focus on high-value, strategic, and creative challenges.'
  }
];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════ */
export default function AboutPage() {
  const [activeEra, setActiveEra] = useState<string>('01');

  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-500/30">
      
      {/* ════════ HERO SECTION (DARK MODE) ════════ */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden bg-[#020817]">
        {/* Ambient Glow & Grid Patterns */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 backdrop-blur-md">
            The AI Solutions Tech Story
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8 font-syne">
            Pioneering Intelligence <br className="hidden md:block" />
            For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">The Modern Enterprise</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            We are architects of the future. What began as a collective of data scientists has evolved into a global force driving enterprise transformation through ethical, high-velocity AI.
          </p>
        </div>
        
        {/* Elegant bottom gradient transition to light mode */}
      </section>

      {/* ════════ STORY & TIMELINE SECTION (LIGHT MODE) ════════ */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Subtle structural background text */}
        <div className="absolute top-10 right-10 text-[180px] font-black text-slate-100/50 pointer-events-none select-none font-syne tracking-tighter z-0">
          STORY
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* LEFT: Timeline Accordion */}
          <div className="w-full lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-8 font-syne">
              Our Evolutionary <span className="text-blue-600">Timeline.</span>
            </h2>
            
            <div className="flex flex-col border-b border-slate-200/60 mb-8">
              {companyTimeline.map((item) => {
                const isOpen = activeEra === item.id;
                return (
                  <div key={item.id} className="border-t border-slate-200/60">
                    <button onClick={() => setActiveEra(item.id)} className="w-full py-5 flex items-center justify-between text-left transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-bold tracking-wider font-mono transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`}>
                          {item.id}._
                        </span>
                        <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#0f172a]' : 'text-slate-500 group-hover:text-slate-800'}`}>
                          {item.title}
                        </span>
                      </div>
                      <span className={`text-xl font-light transition-transform duration-300 px-2 ${isOpen ? 'text-blue-600 rotate-180' : 'text-slate-400'}`}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                      <div className="bg-blue-50/50 border border-blue-100/60 rounded-2xl p-5 ml-6">
                        <p className="text-slate-600 text-sm leading-relaxed font-light">{item.description}</p>
                        <div className="mt-4 pt-4 border-t border-blue-100 flex gap-8 items-center">
                          <div>
                            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">{item.statLabel}</div>
                            <div className="text-lg font-black text-slate-800 tracking-tight mt-0.5">{item.statValue}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Blueprint Visualizer */}
          <div className="w-full lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/5] flex flex-col items-center justify-center gap-4 p-4">
              <svg className="absolute inset-y-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50% 0 Q 48% 25% 50% 50% T 50% 100%" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle r="4" fill="#2563eb" className="animate-pulse">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M 50% 0 Q 48% 25% 50% 50% T 50% 100%" />
                </circle>
              </svg>

              {companyTimeline.map((item) => {
                const isSelected = activeEra === item.id;
                return (
                  <div
                    key={item.id} onClick={() => setActiveEra(item.id)}
                    className={`relative w-full max-w-[360px] h-[72px] rounded-full flex items-center justify-center border transition-all duration-500 cursor-pointer text-center z-10 ${
                      isSelected ? 'bg-[#0f172a] border-[#0f172a] text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.3)] scale-105 -translate-y-1' : 'bg-white/70 border-slate-200/80 text-slate-800 hover:border-slate-400 hover:bg-white'
                    }`}
                    style={{ marginTop: '-24px' }}
                  >
                    <div className="px-6 flex flex-col items-center justify-center">
                      <span className={`text-base font-bold tracking-tight font-syne ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {item.title.split('&')[0].split('Phase')[0].trim()} Era
                      </span>
                      <span className={`text-[10px] font-mono tracking-widest uppercase mt-0.5 ${isSelected ? 'text-blue-400 font-bold' : 'text-slate-400'}`}>
                        {item.year}
                      </span>
                    </div>
                    {isSelected && <span className="absolute right-6 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Global Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-16 border-t border-slate-200/70 relative z-10">
          {[
            { metric: '15+', title: 'Years Experience' },
            { metric: '500+', title: 'Projects Completed' },
            { metric: '120+', title: 'Team Members' },
            { metric: '$2B+', title: 'Client Value Created' }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col border-l-2 border-blue-500/20 pl-4">
              <span className="font-syne text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">{stat.metric}</span>
              <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mt-2">{stat.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ CORE VALUES SECTION ════════ */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight font-syne mb-4">Our Principles</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The foundational DNA that dictates how we build products, scale companies, and interact with our enterprise partners.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-[#fafbfe] border border-slate-200/60 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{val.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TEAM SECTION ════════ */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight font-syne">The Minds Behind The Machine.</h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            Led by industry veterans in machine learning, cloud infrastructure, and operational scaling, our leadership team brings decades of combined enterprise experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="group relative">
              {/* Image Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-slate-200">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Text Info */}
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] tracking-tight">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ CTA SECTION (MATCHES HOME PAGE) ════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.28)]">
          {/* Decorative floating rings */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 font-syne">
              Ready to engineer your future?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-light">
              Join hundreds of enterprise leaders utilizing AI Solutions Tech to streamline operations and dominate their sector.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                Get In Touch
              </a>
              <a href="/services" className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}