'use client';

import React from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/constants';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { 
  ArrowRight, BarChart, Target, Zap, 
  TrendingUp, ShieldCheck, Activity, Briefcase 
} from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ════════ SECTION 1: HERO (DARK MOOD) ════════ */}
      <section className="relative pt-36 pb-48 md:pt-52 md:pb-56 px-6 overflow-hidden bg-[#020817]">
        {/* Cinematic Background */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15 mix-blend-luminosity"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020817] via-[#020817]/90 to-[#020817]" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              Proven Enterprise Impact
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] font-syne mx-auto max-w-5xl">
              Real-World <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 drop-shadow-sm">
                Transformations.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
              Explore how we engineer advanced AI solutions and data architectures to solve the most complex operational challenges for leading global organizations.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: CASE STUDIES LIST (LIGHT MOOD OVERLAP) ════════ */}
      <section className="relative px-6 max-w-7xl mx-auto z-20 -mt-32 pb-24">
        <div className="space-y-12">
          {CASE_STUDIES.map((study, index) => (
            <FadeInUp key={study.id}>
              <div className="group relative bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] transition-all duration-500 overflow-hidden hover:-translate-y-2">
                
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Side: Content */}
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest text-blue-600 uppercase">
                        <Briefcase className="w-3.5 h-3.5" />
                        {study.industry}
                      </span>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs font-mono text-slate-400">CASE // {String(index + 1).padStart(2, '0')}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] font-syne mb-6 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                      {study.description}
                    </p>
                    
                    {/* Key Achievements */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4 text-emerald-500" />
                        Key Deployments & Results
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="border-l-2 border-blue-500 pl-4">
                          <p className="text-3xl font-black text-[#0f172a] mb-1">{study.result}</p>
                          <p className="text-sm font-medium text-slate-500">Primary Impact</p>
                        </div>
                        <div className="border-l-2 border-emerald-500 pl-4">
                          <p className="text-3xl font-black text-[#0f172a] mb-1">$24M</p>
                          <p className="text-sm font-medium text-slate-500">Estimated ROI</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Visual Graphic / Number */}
                  <div className="lg:col-span-4 h-full">
                    <div className="h-full min-h-[250px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[1.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                      {/* Decorative SVG grid */}
                      <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="2" cy="2" r="1" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        </svg>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 font-syne">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full" />
                        <p className="text-blue-200 font-medium tracking-wide uppercase text-sm">
                          Success Story
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* ════════ SECTION 3: METHODOLOGY (DARK MOOD) ════════ */}
      <section className="relative py-24 md:py-32 px-6 bg-[#060c1c] border-y border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-16 md:mb-24">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-4 block">
              // Core Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-syne mb-6 tracking-tight">
              Our Deployment Approach
            </h2>
            <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
              We replace theoretical prototypes with rigorous engineering, ensuring every AI initiative is anchored in clean data and delivers measurable operational value.
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <StaggerItem className="bg-[#0f172a]/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[2rem] hover:border-blue-500/50 hover:bg-[#0f172a] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                {/* <Search className="w-6 h-6 text-blue-400 group-hover:text-white" /> */}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Rigorous Analysis</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                We deeply audit your business processes, existing data maturity, and operational bottlenecks to identify the highest-impact AI and automation opportunities.
              </p>
            </StaggerItem>
            
            {/* Step 2 */}
            <StaggerItem className="bg-[#0f172a]/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[2rem] hover:border-indigo-500/50 hover:bg-[#0f172a] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                <Zap className="w-6 h-6 text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Custom Architecture</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                No off-the-shelf compromises. We architect secure, highly-scalable blueprints aligned precisely with your enterprise compliance and ROI targets.
              </p>
            </StaggerItem>
            
            {/* Step 3 */}
            <StaggerItem className="bg-[#0f172a]/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[2rem] hover:border-emerald-500/50 hover:bg-[#0f172a] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <TrendingUp className="w-6 h-6 text-emerald-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Measurable Results</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                We establish hard KPIs prior to deployment, utilizing continuous monitoring and refinement to ensure your platforms consistently deliver the expected outcomes.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════ SECTION 4: AGGREGATE RESULTS (LIGHT MOOD) ════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-16 font-syne tracking-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact Metrics</span>
            </h2>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-400 mb-4 font-syne">
                $2.1B
              </p>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                Total Client Value Created
              </p>
            </StaggerItem>
            
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 to-indigo-400 mb-4 font-syne">
                3.8x
              </p>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                Average ROI Delivered
              </p>
            </StaggerItem>
            
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-600 to-emerald-400 mb-4 font-syne">
                92%
              </p>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                Client Retention Rate
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════ SECTION 5: PREMIUM CTA (VIBRANT) ════════ */}
      <section className="py-24 px-6 bg-[#fafbfe]">
        <FadeInUp className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
          
          {/* Decorative floating rings */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[1px] border-white/20 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[1px] border-white/20 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-blue-100 uppercase mb-8 backdrop-blur-md">
              Initiate Project
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 font-syne">
              Ready to Architect <br className="hidden sm:block" /> Your Success Story?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Let's discuss how our intelligent automation and enterprise data platforms can securely scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Schedule Architecture Briefing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </FadeInUp>
      </section>

    </main>
  );
}