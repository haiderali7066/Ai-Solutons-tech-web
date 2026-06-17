import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Network,
  Users,
  Clock,
  Workflow,
  Database,
  ArrowLeftRight,
  Activity,
  Zap,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Data Engineering & Integration | AI Solution Technologies',
  description:
    'Scalable pipelines, ETL/ELT, real-time processing & unified data platforms.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'Data pipelines are brittle and constantly fail without clear error alerting',
  'Legacy SSIS packages cannot scale to handle modern data volumes',
  'Business logic is tangled in undocumented, manual ETL processes',
  'Crucial reporting data is always a day late due to overnight batch jobs',
  'Disparate enterprise systems (ERPs, CRMs, SaaS) are disconnected and siloed',
  'Engineering teams spend all their time fixing broken pipelines instead of building',
];

const deliverables = [
  'Cloud-native pipeline architectures across Azure and AWS [cite: 25]',
  'Medallion (Bronze/Silver/Gold) data flow implementation [cite: 25]',
  'Legacy SSIS to modern ADF / Fabric migration [cite: 26]',
  'API, flat-file, database, and SaaS source integrations [cite: 27]',
  'REST and SOAP API middleware logic and routing [cite: 28]',
  'Event-driven and streaming pipeline patterns [cite: 25]',
  'Change Data Capture (CDC) and low-latency syncing [cite: 29]',
  'Automated error handling, retry logic, and alerting [cite: 25]',
  'Data lineage tracking for compliance and auditability [cite: 26]',
  'CI/CD pipeline versioning and documentation standards [cite: 25]',
];

const subservices = [
  {
    icon: Network,
    number: '01',
    title: 'Data Pipeline Architecture',
    description:
      'Design scalable, cloud-native pipeline architectures across Azure and AWS. [cite: 25]',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    points: [
      'ADF, Databricks & AWS Glue pipeline design and build [cite: 25]',
      'Medallion (Bronze/Silver/Gold) data flow architecture [cite: 25]',
      'Event-driven and streaming pipeline patterns [cite: 25]',
      'Error handling, retry logic, and alerting configuration [cite: 25]',
      'Pipeline versioning and documentation standards [cite: 25]',
    ],
    engagement: '6–10 weeks',
    color: 'blue',
  },
  {
    icon: Database,
    number: '02',
    title: 'ETL / ELT Services',
    description:
      'Efficient data migration and transformation to streamline data flows. [cite: 26]',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Complex business rule and data cleansing transformations [cite: 26]',
      'SSIS to ADF / Microsoft Fabric pipeline migration [cite: 26]',
      'ETL automation — scheduled and event-triggered workflows [cite: 26]',
      'Scalability solutions for growing data volumes [cite: 26]',
      'Data lineage tracking for compliance and auditability [cite: 26]',
    ],
    engagement: '8–14 weeks',
    color: 'sky',
  },
  {
    icon: Workflow,
    number: '03',
    title: 'Data Integration Solutions',
    description:
      'Custom integration of disparate data sources into a unified system. [cite: 27]',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Source assessment — formats, structures, and compatibility [cite: 27]',
      'API, flat-file, database, and SaaS integration [cite: 27]',
      'Data mapping and standardisation across all sources [cite: 27]',
      'Implementation of integration orchestration frameworks [cite: 27]',
      'Before-and-after data flow documentation [cite: 27]',
    ],
    engagement: '6–12 weeks',
    color: 'indigo',
  },
  {
    icon: ArrowLeftRight,
    number: '04',
    title: 'API & System Integration',
    description:
      'Connect enterprise systems via APIs for seamless automated data flow. [cite: 28]',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    points: [
      'REST and SOAP API integration architecture design [cite: 28]',
      'System-to-system data flow and middleware design [cite: 28]',
      'JSON / XML transformation and routing logic [cite: 28]',
      'Azure API Management and Logic Apps integration [cite: 28]',
      'Integration monitoring, alerting, and self-healing patterns [cite: 28]',
    ],
    engagement: '4–8 weeks',
    color: 'cyan',
  },
  {
    icon: Zap,
    number: '05',
    title: 'Real-Time Data Processing',
    description:
      'Low-latency, event-driven architectures for instant data availability. [cite: 29]',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Azure Event Hubs, Event Grid, and Kafka pipeline design [cite: 29]',
      'Streaming analytics with real-time insight delivery [cite: 29]',
      'Change Data Capture (CDC) from operational databases [cite: 29]',
      'Load management and elastic scaling for data spikes [cite: 29]',
      'Real-time anomaly detection and alerting pipelines [cite: 29]',
    ],
    engagement: '8–12 weeks',
    color: 'teal',
  },
];

const industries = [
  'Automotive [cite: 11]',
  'Defence [cite: 11]',
  'Mining [cite: 11]',
  'Rail [cite: 11]',
  'Clean Energy [cite: 11]',
  'Health [cite: 11]',
  'Oil, Gas & Energy [cite: 11]',
  'Transport and Logistics [cite: 11]',
  'Construction & Engineering [cite: 11]',
  'IT & Communications [cite: 11]',
  'Professional Services [cite: 11]',
  'Water [cite: 11]',
];

const roles = [
  'Head of Data Engineering',
  'Lead Data Architect',
  'Chief Technology Officer (CTO)',
  'VP of Engineering',
  'IT Integration Manager',
];

const colorMap = {
  blue: {
    icon: 'bg-blue-50 text-blue-600',
    border: 'border-blue-100',
    text: 'text-blue-600',
    badge: 'bg-blue-600/10 text-blue-500 border-blue-200',
  },
  sky: {
    icon: 'bg-sky-50 text-sky-600',
    border: 'border-sky-100',
    text: 'text-sky-600',
    badge: 'bg-sky-600/10 text-sky-500 border-sky-200',
  },
  indigo: {
    icon: 'bg-indigo-50 text-indigo-600',
    border: 'border-indigo-100',
    text: 'text-indigo-600',
    badge: 'bg-indigo-600/10 text-indigo-500 border-indigo-200',
  },
  cyan: {
    icon: 'bg-cyan-50 text-cyan-600',
    border: 'border-cyan-100',
    text: 'text-cyan-600',
    badge: 'bg-cyan-600/10 text-cyan-600 border-cyan-200',
  },
  teal: {
    icon: 'bg-teal-50 text-teal-600',
    border: 'border-teal-100',
    text: 'text-teal-600',
    badge: 'bg-teal-600/10 text-teal-600 border-teal-200',
  },
};

/* ══════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════ */
export default function DataEngineeringPage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-blue-500/30">
      {/* CSS ANIMATIONS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee { 0%{ transform:translateX(0); } 100%{ transform:translateX(-50%); }}
          .anim-marquee { animation: marquee 30s linear infinite; }
        `,
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5">
        {/* Background Image & Clean Overlay */}
        <div className="absolute inset-0 z-0 bg-[#020817]">
          <img
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=2000"
            alt="Data Engineering & Integration"
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            Data Engineering &amp; Integration
            <span className="block mt-3 text-blue-400 font-light">
              Scalable pipelines powering real-time enterprise platforms.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            We design, build, and migrate resilient data workflows — moving your business from brittle legacy SSIS batches to cloud-native ETL, event-driven pipelines, and continuous API integration.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Request a Pipeline Assessment
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ TECH MARQUEE ══════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {[1, 2, 3].map((set) => (
            <React.Fragment key={set}>
              {[
                'Azure Data Factory',
                'Databricks',
                'AWS Glue',
                'Apache Kafka',
                'Event Hubs',
                'Azure Logic Apps',
                'SSIS Modernisation',
                'Medallion Architecture',
                'CDC Streaming',
              ].map((tech, i) => (
                <React.Fragment key={i}>
                  <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">
                    {tech}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══════════ IMAGE-RICH PITCH BLOCK ══════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                alt="Complex Data Integration Pipelines"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">
                Data value is defined by how well it flows.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                Analytics and AI models are useless if they run on stale, incomplete, or disconnected data. We engineer <strong className="font-bold text-blue-700">self-healing, highly scalable integration pipelines</strong> that pull disparate structures into a unified operational platform—giving you confidence in the velocity and validity of your entire data estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROBLEMS vs DELIVERABLES ══════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Problems */}
            <div className="rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <XCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#020817]">
                  Sound familiar?
                </h2>
              </div>
              <ul className="space-y-6">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-4 group cursor-default">
                    <XCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-slate-600 leading-relaxed group-hover:text-[#020817] transition-colors">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 md:p-12 shadow-xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    What is included
                  </h2>
                </div>
                <ul className="space-y-6">
                  {deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-4 group cursor-default">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-slate-300 leading-relaxed group-hover:text-white transition-colors font-light">
                        {d.split(' [')[0]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 5 SUBSERVICES IMAGE-RICH GRID ══════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">
              Five Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              Comprehensive Data Engineering & Integration
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              From source assessment and API routing down to event-driven streaming and SSIS modernization. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subservices.map((s) => {
              const Icon = s.icon;
              // @ts-ignore
              const c = colorMap[s.color] || colorMap.blue;
              return (
                <div
                  key={s.number}
                  className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden"
                >
                  {/* Image Header */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Content Body */}
                  <div className="p-8 pt-4 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-white shadow-sm -mt-10 relative z-10 ${c.border} ${c.text}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${c.badge}`}
                      >
                        {s.engagement}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-slate-300 tracking-widest mb-1">
                      {s.number}
                    </div>
                    <h3
                      className={`text-lg font-bold text-[#020817] mb-2 group-hover:${c.text} transition-colors`}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light mb-6 leading-relaxed">
                      {s.description.split(' [')[0]}
                    </p>

                    <ul className="space-y-3 mt-auto">
                      {s.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${c.text}`} />
                          <span className="leading-relaxed font-light">{pt.split(' [')[0]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CASE STUDY ══════════ */}
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-[#020817] flex flex-col lg:flex-row border border-slate-800 shadow-2xl relative group">
            {/* Gradient top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 z-20" />

            {/* Image panel */}
            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"
                alt="Automated Pipeline Architecture Migration"
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020817]" />
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg">
                  Case Study
                </span>
              </div>
            </div>

            {/* Content panel */}
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10">
              <Activity className="w-20 h-20 text-blue-500/10 absolute right-10 top-10 group-hover:rotate-12 transition-transform duration-500" />

              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                National Retailer — Legacy SSIS Migration & Real-Time Sync
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                A nationwide retail brand struggled with delayed inventory reporting caused by failing overnight SSIS jobs. We architected a complete migration to Azure Data Factory utilizing Medallion Bronze/Silver/Gold transformations. We integrated Event Hubs for point-of-sale Change Data Capture (CDC), bringing inventory analytics from a 24-hour lag down to sub-minute latency.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">99.9%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Pipeline Uptime
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    with self-healing retries
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">&lt; 1 min</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Data Latency
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    using CDC streaming
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">Zero</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Manual Fixes
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    after ETL automation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHO THIS IS FOR + LOGISTICS ══════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Audience */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
              <h3 className="text-xl font-bold text-[#020817] mb-10 uppercase tracking-wide flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" /> Who this is for
              </h3>
              <div className="mb-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Industries Served [cite: 11]
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default"
                    >
                      {ind.split(' [')[0]}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Target Roles
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-bold hover:bg-blue-100 transition-colors cursor-default"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <div className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                  <Clock className="w-40 h-40 -mb-10 -mr-10 text-blue-900" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                  Engagement Timeline
                </h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">
                  4–14 weeks
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Depending on integration complexity and migration data volumes.
                </p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">
                  Architecture Output
                </h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">
                  Scalable & Versioned
                </div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  We deploy entirely via CI/CD with robust orchestration frameworks, ensuring infrastructure as code (IaC) compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="pb-24 px-6 bg-[#fafbfe]">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.28)]">
          {/* Decorative rings */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-4 block">
              Data Engineering & Integration
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Stop fighting brittle data pipelines.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Book a 30-minute discovery session with our lead data architects. We will evaluate your current ETL bottlenecks, assess integration requirements, and propose a modern architectural blueprint.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Book a Pipeline Architecture Review
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}