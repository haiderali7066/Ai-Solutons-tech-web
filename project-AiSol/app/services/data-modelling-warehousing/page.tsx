import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Database,
  Shapes,
  Gauge,
  Layers,
  TableProperties,
  BarChart3,
  Users,
  Clock,
  Cpu,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Data Modelling & Warehousing Services | AI Solution Technologies',
  description:
    'Enterprise-grade analytical architectures — Star Schema, Data Vault 2.0, dbt optimization, and high-performance cloud data warehouses.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'Dashboard queries are sluggish, causing executives to abandon automated reports',
  'Different departments report conflicting numbers for the exact same business metric',
  'Cloud computing bills are skyrocketing due to unoptimized, full-table scans',
  'Lack of historical tracking makes it impossible to analyze point-in-time trends accurately',
  'The current database is an undocumented "data swamp" with zero lineage mapping',
  'Engineers spend hours manually building aggregate tables whenever BI requests change',
];

const deliverables = [
  'Enterprise cloud data warehouse deployment (Snowflake, BigQuery, Synapse)',
  'Star-schema dimensional modeling (Fact and Dimension table architecture)',
  'Data Vault 2.0 system blueprint for highly agile corporate environments',
  'dbt (Data Build Tool) project structure with automated documentation',
  'Slowly Changing Dimensions (SCD Type 2) configuration for historical audits',
  'Compute optimization, clustering keys, and materialized view tuning',
  'Unified semantic layer setup for single-source-of-truth enterprise metrics',
  'Data regression testing frameworks to catch schema breakages early',
  'Comprehensive ERDs and interactive data catalog definitions',
  'Technical training blueprints for internal business intelligence teams',
];

const subservices = [
  {
    icon: Shapes,
    number: '01',
    title: 'Dimensional Modelling (Star Schema)',
    description:
      'Designing intuitive, highly performant relational models optimized specifically for analytics and BI consumption.',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Fact and Dimension framework implementation tailored to core business processes',
      'Slowly Changing Dimensions (SCD Types 1, 2, and 3) for pinpoint time-travel analysis',
      'Conformed dimensions architecture to eradicate cross-departmental data misalignment',
      'Degenerate and junk dimension optimization to dramatically clean up fact tables',
      'Granularity scoping designed to protect performance without discarding critical atomic data',
    ],
    engagement: '4–8 weeks',
    color: 'blue',
  },
  {
    icon: Database,
    number: '02',
    title: 'Cloud Data Warehousing',
    description:
      'Provisioning, scaling, and structuring secure enterprise-grade cloud data warehouses.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Tailored deployment layouts for Snowflake, Google BigQuery, and Azure Synapse',
      'Separation of compute and storage footprints to drive down baseline operational costs',
      'Role-Based Access Control (RBAC) maps down to database, schema, and column tiers',
      'Secure data sharing and multi-tenant isolation policies for enterprise safety',
      'Workload isolation strategies preventing heavy ingestion loads from lagging live reporting',
    ],
    engagement: '8–12 weeks',
    color: 'sky',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Data Vault 2.0 Architectures',
    description:
      'Building ultra-flexible, auditable data foundations designed for rapid change and massive scale.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Hub, Link, and Satellite logical mapping directly isolating your business keys',
      'Parallel loading architectures built to handle multi-terabyte raw batch files instantly',
      'Non-destructive schema evolutionary setups accommodating structural changes with zero downtime',
      'Point-in-Time (PIT) and Bridge optimization layer builds for fast delivery to information marts',
      'End-to-end load immutability providing an unshakeable system audit log for compliance',
    ],
    engagement: '8–14 weeks',
    color: 'indigo',
  },
  {
    icon: TableProperties,
    number: '04',
    title: 'Analytics Engineering with dbt',
    description:
      'Moving SQL transforms out of black-box schedulers into version-controlled, fully tested pipelines.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Modular dbt project setup utilizing clean staging, intermediate, and mart layers',
      'Automated schema assertions alongside referential integrity and data quality validation tests',
      'Auto-updating column-level lineage graphs and interactive developer documentation',
      'Incremental transformation models mapped out to slash redundant cloud run overheads',
      'CI/CD deployment automation running safety checks on branch pull requests',
    ],
    engagement: '6–10 weeks',
    color: 'cyan',
  },
  {
    icon: Gauge,
    number: '05',
    title: 'Performance Tuning & Query Opt',
    description:
      'Diagnosing architecture bottlenecks to accelerate dashboards and crush compute bills.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Clustering keys, micro-partitioning, and table distribution optimizations',
      'Materialized view strategies built to serve high-frequency pre-aggregated metrics',
      'Deep query profile analyses identifying and eliminating costly Cartesian joins',
      'Automated compute warehouse scaling parameters tailored to real usage patterns',
      'Caching mechanism alignment ensuring repeat dashboard views incur zero compute charge',
    ],
    engagement: '3–6 weeks',
    color: 'teal',
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
  'Director of Analytics',
  'Enterprise Data Architect',
  'BI Manager',
  'Head of Data Infrastructure',
  'Lead Business Intelligence Engineer',
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
export default function DataModellingWarehousingPage() {
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
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Enterprise Data Warehouse Matrix"
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            Data Modelling &amp; Warehousing
            <span className="block mt-3 text-blue-400 font-light">
              High-performance architectures engineered for analytical speed.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Turn unorganized data points into structured, optimized assets. We build single-source-of-truth warehouses, 
            resilient Data Vault frameworks, and high-performance Star Schemas that scale seamlessly without generating runaway cloud compute bills.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Book a Data Modeling Consultation
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
                'Snowflake Architecture',
                'Google BigQuery',
                'dbt Core / Cloud',
                'Star Schema Modeling',
                'Data Vault 2.0',
                'Slowly Changing Dimensions',
                'Azure Synapse SQL',
                'Looker Semantic Layers',
                'Data Mart Engineering',
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                alt="Analytical Database Optimization Visual Layout"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">
                Raw cloud storage is a cost liability without intentional schema layout.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                Dumping system transactions into a data lake creates a messy data graveyard, not a business solution. 
                True analytical power requires deliberate structure. We bridge the gap between raw data storage and intuitive reporting by organizing your assets into clean, <strong className="font-bold text-blue-700">highly performant, version-controlled analytical models</strong>. This strategy eliminates query confusion, accelerates critical dashboards, and keeps cloud compute overhead perfectly contained.
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
                  Operational Warning Signs
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
                    Architectural Solutions
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

      {/* ══════════ 5 SUBSERVICES IMAGE-RICH GRID ══════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">
              Core Frameworks
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              Targeted Warehousing Capabilities
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              Deploy modular information marts, transform with analytics engineering code frameworks, or fine-tune multi-cluster compute setups.
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
                alt="Corporate Modern Analytics Engineering Architecture"
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
              <Cpu className="w-20 h-20 text-blue-500/10 absolute right-10 top-10 group-hover:rotate-12 transition-transform duration-500" />

              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Financial Services Group — Warehouse Migration & dbt Optimization
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                A scaling financial services group with terabytes of raw operational tables suffered from massive Snowflake query timeouts and run-away credit billing. We redesigned their raw landing schemas into a modern Data Vault 2.0 core, feeding optimized Star-Schema data marts using dbt. This structure established explicit historical audit trails while protecting core query speeds.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">68%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Compute Cost Drop
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    via precise incremental clustering
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">12x</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Query Acceleration
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    on core executive dashboards
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Lineage Clarity
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    mapped through automated data catalogs
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
                <Users className="w-5 h-5 text-blue-600" /> Intended Alignment
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
                  Typical Engagement
                </h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">
                  6–12 weeks
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Phased from schema mapping and logic validation to production pipeline migration.
                </p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">
                  Deliverable Standard
                </h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">
                  Code-As-Architecture
                </div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  Every schema, table, parameter, and testing rule is fully written and deployed via declarative Git infrastructure repositories.
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
              Architecture Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Establish an unshakeable analytical core.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Connect with our principal warehousing architects for a 30-minute infrastructure review. We will evaluate your current join pain-points, review cluster cost overheads, and sketch a clean data-mart delivery roadmap.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Request Warehouse Architecture Review
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