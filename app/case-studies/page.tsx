'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, BarChart, Target, Zap, 
  TrendingUp, ShieldCheck, Briefcase,
  Layers, Cpu, Database, Network, LineChart, Server,
  Activity, Droplets, HardHat
} from 'lucide-react';
// Assuming these are your custom animation wrappers
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ══════════════════════════════════════
   SOLUTION BLUEPRINTS DATA
══════════════════════════════════════ */
const BLUEPRINTS_DATA = [
  {
    id: 'blueprint-01-mining',
    title: 'Microsoft Fabric Integration',
    subtitle: 'Mining Operations Platform',
    description: 'Unifying mining operational data into a real-time, AI-ready platform on Microsoft Fabric to move from reactive to live predictive analytics.',
    industry: 'Mining',
    location: 'Global Enterprise',
    timeline: '15–27 Weeks',
    result: 'Real-Time OEE Visibility',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80',
    tech: ['Microsoft Fabric', 'OneLake', 'KQL Databases', 'Azure ML'],
    icon: Database
  },
  {
    id: 'blueprint-02-energy',
    title: 'Data Engineering & Integration',
    subtitle: 'Resilient Multi-Site Pipelines',
    description: 'Building resilient, governed data pipelines across rig, pipeline, and refinery systems for real-time operational visibility and HSE compliance.',
    industry: 'Oil, Gas & Energy',
    location: 'Global Enterprise',
    timeline: '19–31 Weeks',
    result: 'Automated HSE Compliance',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1600&q=80',
    tech: ['Azure Event Hubs', 'Fabric Eventstream', 'Delta Lake', 'ADF'],
    icon: Network
  },
  {
    id: 'blueprint-03-logistics',
    title: 'Data Modelling & Warehousing',
    subtitle: 'Real-Time Logistics Intelligence',
    description: 'Designing a unified data model across fleet, carrier, and ERP systems to shift from fragile reporting to robust, certified analytics.',
    industry: 'Transport & Logistics',
    location: 'Global Enterprise',
    timeline: '11–20 Weeks',
    result: 'Certified KPI Governance',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a00?auto=format&fit=crop&w=1600&q=80',
    tech: ['Fabric DW', 'Star Schema', 'DAX', 'Purview'],
    icon: TrendingUp
  },
  {
    id: 'blueprint-04-construction',
    title: 'Business Intelligence & Analytics',
    subtitle: 'Live Construction Command Centre',
    description: 'Replacing manual project cost reporting with a live command centre, pulling BOQ, actuals, and progress directly from source systems.',
    industry: 'Construction & Engineering',
    location: 'Global Enterprise',
    timeline: '11–18 Weeks',
    result: 'Same-Day Cost Reporting',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    tech: ['Power BI', 'Fabric Lakehouse', 'RLS', 'Azure Data Factory'],
    icon: HardHat
  },
  {
    id: 'blueprint-05-health',
    title: 'AI & Intelligent Systems',
    subtitle: 'Private Clinical AI Assistant',
    description: 'Deploying a governed, private AI assistant over clinical and policy documentation with strict access controls and full audit trails.',
    industry: 'Health',
    location: 'Global Enterprise',
    timeline: '16–28 Weeks',
    result: 'Zero-Hallucination Retrieval',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    tech: ['Azure OpenAI', 'Azure AI Search', 'Entra ID RBAC', 'RAG'],
    icon: Activity
  },
  {
    id: 'blueprint-06-rail',
    title: 'Cloud Migration & Modernisation',
    subtitle: 'Safety-Critical Asset Systems',
    description: 'Migrating safety-critical rail asset and maintenance systems from legacy on-premises infrastructure to a modern, governed Azure platform.',
    industry: 'Rail',
    location: 'Global Enterprise',
    timeline: '16–28 Weeks',
    result: 'Zero Data Loss Migration',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80',
    tech: ['Azure SQL', 'Azure DevOps', 'Fabric Lakehouse', 'Bicep'],
    icon: Server
  },
  {
    id: 'blueprint-07-water',
    title: 'Data Governance & Compliance',
    subtitle: 'End-to-End Regulatory Framework',
    description: 'Establishing a strict data governance framework across network and meter data to ensure defensible regulatory submissions.',
    industry: 'Water',
    location: 'Global Enterprise',
    timeline: '13–24 Weeks',
    result: 'Auditable Data Lineage',
    image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=1600&q=80',
    tech: ['Microsoft Purview', 'MIP Labels', 'Azure Policy', 'Entra ID'],
    icon: Droplets
  },
  {
    id: 'blueprint-08-it',
    title: 'CRM & Business Applications',
    subtitle: 'Dynamics 365 Customer 360',
    description: 'Building a unified Customer 360 platform to surface churn risk directly in the agent workspace and link network issues to customer experience.',
    industry: 'IT & Communications',
    location: 'Global Enterprise',
    timeline: '15–26 Weeks',
    result: 'Proactive Churn Prediction',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    tech: ['Dynamics 365', 'Fabric CDC', 'Azure ML', 'Power Automate'],
    icon: Target
  }
];

/* ══════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════ */
export default function SolutionBlueprintsPage() {
  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-600/30 overflow-x-hidden">
      
      {/* ════════ SECTION 1: CINEMATIC HERO ════════ */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-48 px-6 overflow-hidden bg-[#020817]">
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25 mix-blend-screen"
          aria-hidden="true"
        />
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-bold tracking-widest text-blue-400 uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              AI Solution Technologies
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] font-syne mx-auto max-w-4xl">
              Enterprise Data & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 drop-shadow-sm">
                Solution 
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto">
              Eight service lines. Eight industries. Explore our detailed methodology and technology architectures for delivering secure, scalable, and governed AI & Data platforms across the enterprise.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: BLUEPRINTS (CINEMATIC CARDS) ════════ */}
      <section className="relative px-4 sm:px-6 max-w-7xl mx-auto z-20 -mt-20 pb-24">
        <div className="space-y-8 sm:space-y-12">
          {BLUEPRINTS_DATA.map((study) => {
            const Icon = study.icon;
            return (
              <FadeInUp key={study.id}>
                <div className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 border border-slate-800">
                  
                  {/* Deep Image Background */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
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
                           <Target className="w-4 h-4 text-slate-500" /> Typical Engagement: <span className="text-white">{study.timeline}</span>
                         </div>
                      )}
                    </div>

                    {/* Result Callout Card */}
                    <div className="lg:col-span-5 h-full flex items-center lg:justify-end">
                      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 relative overflow-hidden group-hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                        
                        <p className="text-xs font-bold tracking-widest text-blue-300 uppercase mb-4 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-emerald-400" />
                          Platform Outcome
                        </p>
                        
                        <div className="space-y-1">
                          <p className="text-3xl lg:text-4xl font-black text-white font-syne tracking-tight leading-tight">
                            {study.result}
                          </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                           <span className="text-xs font-mono text-slate-400">BLUEPRINT STATUS: ACTIVE</span>
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
              Execution Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] font-syne mb-6 tracking-tight">
              From Assessment to Operations
            </h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
              Our deployments follow a strict, phased architectural approach—ensuring every data pipeline and AI initiative is anchored in clean governance and delivers precise operational value.
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-[#fafbfe] border border-slate-200 p-10 rounded-[2rem] hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-all duration-500">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 tracking-tight">1. Architectural Assessment</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                We deeply audit your business processes, source systems, and data readiness to design scalable medallion lakehouses and governance frameworks.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-[#fafbfe] border border-slate-200 p-10 rounded-[2rem] hover:border-sky-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white text-sky-600 transition-all duration-500">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 tracking-tight">2. Platform Engineering</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Building resilient ingestion pipelines, dimensional models, and private AI capabilities that align strictly with enterprise compliance rules.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-[#fafbfe] border border-slate-200 p-10 rounded-[2rem] hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-all duration-500">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 tracking-tight">3. Intelligence & Handoff</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Deploying certified Power BI semantic models, ML alerting, and BI Centre of Excellence training to transition your team to self-service.
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
                100%
              </p>
              <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
                Data Lineage & Governance Auditability
              </p>
            </StaggerItem>
            
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-sky-400 mb-4 font-syne">
                Zero
              </p>
              <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
                Data Loss During Cloud Migrations
              </p>
            </StaggerItem>
            
            <StaggerItem className="p-8">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 to-indigo-400 mb-4 font-syne">
                8+
              </p>
              <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
                Enterprise Industries Covered
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
              Ready to Implement <br className="hidden sm:block" /> a Solution Blueprint?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Let's discuss how AI Solution Technologies can architect, build, and deploy an intelligent data platform for your enterprise.
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