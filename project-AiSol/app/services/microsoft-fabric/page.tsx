import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Layers,
  Users,
  Clock,
  ShieldCheck,
  Database,
  GitBranch,
  Zap,
  BarChart3,
  Sliders,
  LayoutGrid,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Microsoft Fabric Implementation & Services | AI Solution Technologies',
  description:
    'Unified analytics platform — Lakehouse, Data Factory, Real-Time Intelligence & Power BI.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'Data is fragmented across separate storage lakes, databases, and reporting silos',
  'Egress fees and data duplication run up massive cloud infrastructure bills',
  'Data engineers spend too much time managing infrastructure instead of building pipelines',
  'Analytics lag behind operations because real-time streaming isn\'t integrated',
  'Governing security, lineage, and compliance across 5+ disparate systems is impossible',
  'Power BI performance suffers from large datasets requiring complex refresh schedules',
];

const deliverables = [
  'Fabric tenant architecture configuration and capacity sizing',
  'Unified OneLake design with multi-domain access control',
  'Medallion-structured Lakehouse implementation (Delta format)',
  'Data Factory pipeline engineering and source integration',
  'Enterprise SQL Warehouse with star-schema optimizations',
  'Low-latency Real-Time Intelligence streams (KQL)',
  'Direct Lake semantic models for real-time Power BI reporting',
  'Data Activator automated alerting and operational workflows',
  'Microsoft Purview end-to-end data lineage configuration',
  'Operational governance blueprints and team technical enablement',
];

const subservices = [
  {
    icon: LayoutGrid,
    number: '01',
    title: 'Microsoft Fabric Implementation',
    description:
      'End-to-end Fabric workspace design, provisioning, and enterprise deployment.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Fabric tenant setup — capacity provisioning, workspace governance, and admin configuration',
      'One Lake architecture design — unified data lake with domain-level access zones',
      'Fabric SKU and capacity planning — F2 through F64 and Premium capacity alignment',
      'Migration from Azure Synapse, ADF, and standalone Azure services to unified Fabric',
      'Fabric security model — workspace roles, item permissions, and sensitivity labels',
      'Fabric trial-to-production transition planning and organisational rollout strategy',
    ],
    engagement: '4–8 weeks',
    color: 'blue',
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'Fabric Lakehouse & Data Engineering',
    description:
      'Bronze, Silver, and Gold Lakehouse design with Delta tables and scalable pipelines.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Fabric Lakehouse creation with Delta Lake format and managed table design',
      'Medallion architecture (Bronze/Silver/Gold) build on OneLake',
      'Fabric Data Factory pipelines for ingestion, transformation, and orchestration',
      'Spark notebooks and dataflows for complex data transformation logic',
      'Shortcuts configuration — connecting ADLS Gen2, AWS S3, and GCS to OneLake',
      'Incremental load patterns, watermarking, and CDC implementation in Fabric',
    ],
    engagement: '6–12 weeks',
    color: 'sky',
  },
  {
    icon: Database,
    number: '03',
    title: 'Fabric Data Warehouse',
    description:
      'Enterprise-scale SQL analytics warehouse within the Microsoft Fabric platform.',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Fabric Warehouse provisioning, schema design, and T-SQL object creation',
      'Dimensional modelling — star schema fact and dimension tables for BI consumption',
      'Cross-database queries between Fabric Warehouse and Lakehouse tables',
      'Performance tuning — statistics, distribution strategies, and query optimisation',
      'Warehouse security — column-level security, dynamic data masking, and RLS',
      'Fabric Warehouse vs Lakehouse SQL endpoint decision framework and implementation',
    ],
    engagement: '6–10 weeks',
    color: 'indigo',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Fabric Real-Time Intelligence',
    description:
      'Streaming data pipelines, Eventstream, and KQL databases for live operational analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Eventstream setup — ingestion from Event Hubs, Kafka, IoT Hub, and custom sources',
      'KQL database provisioning and table design for high-velocity time-series data',
      'Real-time dashboards in Fabric with auto-refresh and alert rule configuration',
      'Complex event processing — filtering, aggregation, and enrichment in Eventstream',
      'Real-Time Intelligence integration with Fabric Lakehouse for historical + live data',
      'Use cases: IoT telemetry, financial tick data, logistics tracking, and operational alerting',
    ],
    engagement: '8–12 weeks',
    color: 'cyan',
  },
  {
    icon: BarChart3,
    number: '05',
    title: 'Fabric Power BI & Semantic Models',
    description:
      'Native Power BI integration within Fabric — Direct Lake mode, certified datasets, and governed reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Direct Lake semantic model creation — query Lakehouse Delta tables at full speed',
      'Certified and promoted dataset governance within Fabric workspace',
      'Power BI report and dashboard development natively within Fabric',
      'Row-level security and object-level security on Fabric semantic models',
      'Deployment pipelines for dev, test, and production Power BI content management',
      'Fabric + Power BI Premium capacity consolidation and licence optimisation',
    ],
    engagement: '4–8 weeks',
    color: 'teal',
  },
  {
    icon: Sliders,
    number: '06',
    title: 'Fabric Data Activator & Governance',
    description:
      'Automated alerts, data activations, and Microsoft Purview governance across the Fabric estate.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Data Activator rule design — trigger actions from data changes in real time',
      'Alert configuration connecting Fabric items to Teams, email, and Power Automate',
      'Microsoft Purview integration for Fabric — lineage, classification, and catalog',
      'Fabric tenant governance — workspace policies, capacity admin, and audit logging',
      'Sensitivity label propagation from Purview to Fabric Lakehouse and Warehouse',
      'Fabric readiness assessment and governance maturity roadmap for enterprise adoption',
    ],
    engagement: '6–10 weeks',
    color: 'blue',
  },
];

const industries = [
  'Automotive',
  'Defence',
  'Mining',
  'Rail',
  'Clean Energy',
  'Health',
  'Oil, Gas & Energy',
  'Transport and Logistics',
  'Construction & Engineering',
  'IT & Communications',
  'Professional Services',
  'Water',
];

const roles = [
  'Chief Data Officer (CDO)',
  'CIO',
  'Head of Data & Analytics',
  'Enterprise Data Architect',
  'BI Director',
  'Lead Data Engineer',
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
export default function MicrosoftFabricPage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-blue-500/30">
      {/* CSS ANIMATIONS - Maintained Straight Marquee Tilt Flow */}
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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
            alt="Microsoft Fabric Core Infrastructure"
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            Microsoft Fabric Implementation
            <span className="block mt-3 text-blue-400 font-light">
              One unified architecture for all your enterprise data.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Eliminate silos, lower computing bills, and query massive data instantly with Direct Lake mode. 
            We design end-to-end OneLake landscapes, Medallion pipelines, and native Purview governance frameworks inside your tenant.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Book a Fabric Architecture Session
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
                'Microsoft Fabric',
                'OneLake Architecture',
                'Data Factory Pipelines',
                'Delta Lake Storage',
                'Synapse Data Warehouse',
                'Direct Lake Semantic Models',
                'KQL Real-Time Streams',
                'Data Activator Workflow',
                'Microsoft Purview',
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Unified Computing Infrastructure Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">
                Say goodbye to fragmented cloud resources.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                Traditionally, building data systems meant configuring separate servers for extraction, warehousing, data lakes, and visualization. 
                Microsoft Fabric consolidates everything into a single SaaS platform. We help you transition to an optimized{' '}
                <strong className="font-bold text-blue-700">OneLake single source of truth</strong>, completely bypassing manual file handling, complex orchestration, and redundant multi-service billing layers.
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
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 6 SUBSERVICES IMAGE-RICH GRID ══════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">
              Service Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              The Microsoft Fabric Service Stack
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              Deploy modular structural workloads or establish a fully integrated end-to-end Fabric analytics estate.
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
                      {s.description}
                    </p>

                    <ul className="space-y-3 mt-auto">
                      {s.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${c.text}`} />
                          <span className="leading-relaxed font-light">{pt}</span>
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
                alt="Corporate Enterprise Data Lake Migration Architecture"
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
              <Layers className="w-20 h-20 text-blue-500/10 absolute right-10 top-10 group-hover:rotate-12 transition-transform duration-500" />

              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Logistics Corporation — OneLake Data Estate Modernisation
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                An enterprise logistics provider operating multi-region fleets consolidated 4 disconnected datawarehouses and legacy analytics servers onto Microsoft Fabric. By utilizing Data Factory loops and OneLake shortcuts, they bypass complex manual ETL tasks completely.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">42%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Cloud TCO Reduction
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    consolidating duplicate SQL instances
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">0 min</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Report Sync Delay
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    via real-time Direct Lake pipelines
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">Single</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Fabric Governance View
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    managed securely in Purview
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
                  Industries Served
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default"
                    >
                      {ind}
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
                  Implementation Timeline
                </h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">
                  4–12 weeks
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Phased deployment per logical workspace module or capacity segment.
                </p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">
                  Deployment Model
                </h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">
                  Native Tenant SaaS
                </div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  Provisioned strictly inside your existing Microsoft enterprise boundary for total access and data custody control.
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
              Microsoft Fabric Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Ready to unify your cloud data architecture?
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Connect with our structural data engineers for a 30-minute workspace review. We will map out your current systems, detail capacity SKU optimization paths, and present a low-risk migration blueprint.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Book a 30-minute conversation
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