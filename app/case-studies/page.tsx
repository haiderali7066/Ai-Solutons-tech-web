'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, BarChart, Target, Zap, 
  TrendingUp, ShieldCheck, Briefcase,
  Layers, Cpu, Database, Network, LineChart, Server
} from 'lucide-react';
// Assuming these are your custom animation wrappers
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ══════════════════════════════════════
   CASE STUDIES DATA
══════════════════════════════════════ */
const CASE_STUDIES_DATA = [
  {
    id: 'cortex-growth',
    title: 'Cortex Intell Growth Engine',
    subtitle: 'AI-Powered Revenue & Demand Operating System',
    description: 'Establish consistent, high-quality brand presence across LinkedIn and digital channels without manual effort.',
    industry: 'Enterprise SaaS',
    location: 'Global Deployment',
    timeline: '1-week deployment',
    result: '300% Pipeline Growth',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    tech: ['React', 'Python', 'OpenAI API', 'AWS Cloud'],
    icon: LineChart
  },
  {
    id: 'aus-gov',
    title: 'Citizen Service Automation Platform',
    subtitle: 'Australian Government Digital Transformation',
    description: 'A government department required a modernised digital service platform to handle citizen requests, improve response times, and reduce manual processing.',
    industry: 'Public Sector / GovTech',
    location: 'Australia',
    timeline: '12-week deployment',
    result: '85% Faster Resolution',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Azure Gov'],
    icon: ShieldCheck
  },
  {
    id: 'aus-finance',
    title: 'Intelligent Invoice Processing',
    subtitle: 'Financial Automation Platform',
    description: 'A financial services organisation in Australia was handling high volumes of invoices manually, causing delays, errors, and operational inefficiencies.',
    industry: 'Banking & Finance',
    location: 'Australia',
    timeline: '6-week deployment',
    result: '99.9% OCR Accuracy',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    tech: ['Python', 'Computer Vision', 'AWS Textract', 'React'],
    icon: Layers
  },
  {
    id: 'cortex-content',
    title: 'Cortex Intell Content Engine',
    subtitle: 'SEO + AEO Blog Automation Platform',
    description: 'Drive inbound traffic, search rankings, and authority using automated, AI-enhanced content pipelines integrated directly into existing CMS architectures.',
    industry: 'Digital Marketing',
    location: 'Global Deployment',
    timeline: '1–2 weeks',
    result: '4x Organic Traffic',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1600&q=80',
    tech: ['Next.js', 'LLM Agents', 'Vercel', 'MongoDB'],
    icon: Network
  },
  {
    id: 'uae-banking',
    title: 'Real-Time Fraud Detection',
    subtitle: 'Core Banking Security Matrix',
    description: 'A leading regional bank in the UAE was operating with batch-based fraud detection, creating delays in identifying suspicious transactions. Fraud checks were processed overnight, exposing the bank to risk.',
    industry: 'Banking & Finance',
    location: 'United Arab Emirates',
    timeline: '16-week deployment',
    result: '<12ms Latency Detection',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    tech: ['Apache Kafka', 'TensorFlow', 'Python', 'AWS Secure'],
    icon: Cpu
  },
  {
    id: 'ksa-gov',
    title: 'Unified Data Transformation',
    subtitle: 'Government Digital Sovereignty Platform',
    description: 'A government entity in Saudi Arabia was managing multiple disconnected data systems across ministries, limiting visibility, slowing decision-making, and increasing infrastructure costs.',
    industry: 'Public Sector / GovTech',
    location: 'Saudi Arabia',
    timeline: '24-week deployment',
    result: '100% Data Sovereignty',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    tech: ['Snowflake', 'Python', 'PowerBI', 'Azure KSA Region'],
    icon: Server
  }
];

/* ══════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════ */
export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-600/30 overflow-x-hidden">
      
      {/* ════════ SECTION 1: CINEMATIC HERO ════════ */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-48 px-6 overflow-hidden bg-[#020817]">
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25 mix-blend-screen"
          aria-hidden="true"
        />
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020817] via-[#020817]/80 to-[#fafbfe]" /> */}
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-bold tracking-widest text-blue-400 uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              Proven Enterprise Impact
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] font-syne mx-auto max-w-4xl">
              Architecting Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 drop-shadow-sm">
                Success Stories.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
              Explore how we engineer advanced AI solutions and data architectures to solve the most complex operational challenges for leading organizations across Australia and the MENA region.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: CASE STUDIES (CINEMATIC CARDS) ════════ */}
      <section className="relative px-4 sm:px-6 max-w-7xl mx-auto z-20 -mt-20 pb-24">
        <div className="space-y-8 sm:space-y-12">
          {CASE_STUDIES_DATA.map((study, index) => {
            const Icon = study.icon;
            return (
              <FadeInUp key={study.id}>
                <div className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 border border-slate-800">
                  
                  {/* Deep Image Background */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  </div>
                  
                  <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Content Matrix */}
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30 text-xs font-bold tracking-widest text-blue-300 uppercase backdrop-blur-sm">
                          <Icon className="w-3.5 h-3.5" />
                          {study.industry}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-slate-300 uppercase backdrop-blur-sm">
                          {study.location}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-blue-400 mb-2">{study.subtitle}</h3>
                      <h2 className="text-3xl md:text-5xl font-black text-white font-syne mb-6 tracking-tight">
                        {study.title}
                      </h2>
                      <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-light max-w-xl">
                        {study.description}
                      </p>
                      
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-xs font-mono text-slate-500 py-1.5 mr-2">TECH_STACK //</span>
                        {study.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-slate-300 backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Timeline Data */}
                      {study.timeline && (
                         <div className="text-sm font-medium text-slate-400 flex items-center gap-2">
                           <Target className="w-4 h-4 text-slate-500" /> Execution Timeline: <span className="text-white">{study.timeline}</span>
                         </div>
                      )}
                    </div>

                    {/* Result Callout Card */}
                    <div className="lg:col-span-5 h-full flex items-center lg:justify-end">
                      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 relative overflow-hidden group-hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                        
                        <p className="text-xs font-bold tracking-widest text-blue-300 uppercase mb-4 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-emerald-400" />
                          Primary Operational Impact
                        </p>
                        
                        <div className="space-y-1">
                          <p className="text-5xl font-black text-white font-syne tracking-tight">
                            {study.result.split(' ')[0]}
                          </p>
                          <p className="text-lg font-medium text-slate-300">
                            {study.result.split(' ').slice(1).join(' ')}
                          </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                           <span className="text-xs font-mono text-slate-400">STATUS: DEPLOYED</span>
                           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </section>

      {/* ════════ SECTION 3: METHODOLOGY ════════ */}
      <section className="relative py-24 md:py-32 px-6 bg-white border-y border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-16 md:mb-24">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4 block">
              Deployment Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] font-syne mb-6 tracking-tight">
              Our Execution Framework
            </h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
              We replace theoretical prototypes with rigorous engineering, ensuring every AI initiative is anchored in clean data and delivers measurable operational value.
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-[#fafbfe] border border-slate-200 p-10 rounded-[2rem] hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-all duration-500">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 tracking-tight">1. Architectural Audit</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                We deeply audit your business processes, legacy data infrastructure, and operational bottlenecks to identify high-yield automation opportunities.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-[#fafbfe] border border-slate-200 p-10 rounded-[2rem] hover:border-sky-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white text-sky-600 transition-all duration-500">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 tracking-tight">2. Custom Engineering</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                No off-the-shelf compromises. We architect secure, highly-scalable blueprints aligned precisely with your enterprise compliance frameworks.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-[#fafbfe] border border-slate-200 p-10 rounded-[2rem] hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-all duration-500">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 tracking-tight">3. Measurable ROI</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                We establish hard KPIs prior to deployment, utilizing continuous monitoring to ensure your platforms consistently deliver the expected financial outcomes.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════ SECTION 4: AGGREGATE RESULTS ════════ */}
      <section className="py-24 px-6 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-16 font-syne tracking-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact Metrics</span>
            </h2>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-400 mb-4 font-syne">
                $2.1B+
              </p>
              <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
                Total Client Value Created
              </p>
            </StaggerItem>
            
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-sky-400 mb-4 font-syne">
                3.8x
              </p>
              <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
                Average ROI Delivered
              </p>
            </StaggerItem>
            
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 to-indigo-400 mb-4 font-syne">
                99.9%
              </p>
              <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
                Production Uptime
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════ SECTION 5: PREMIUM CTA ════════ */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <FadeInUp className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
          
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