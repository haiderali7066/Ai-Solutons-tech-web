import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Users,
  Clock,
  Lock,
  Scale,
  Search,
  Fingerprint,
  FileText,
  Activity,
  Sliders,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Data Governance & Compliance | AI Solution Technologies',
  description:
    'Enterprise data cataloging, PII classification, automated lineage, and bulletproof regulatory compliance frameworks.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'No one knows who owns specific datasets or where the authoritative "gold standard" data lives',
  'Sensitive PII or PHI is exposed to internal users without dynamic masking or anonymisation',
  'Failing data audits due to a total lack of automated end-to-end data lineage maps',
  'Imminent legal and financial risks under strict regulations like GDPR, CCPA, and HIPAA',
  'Data access requests bottleneck IT for weeks, stifling analytical agility',
  'Shadow BI tools create conflicting definitions for core enterprise business metrics',
];

const deliverables = [
  'Enterprise data governance strategy and operating model design',
  'Microsoft Purview / automated data catalog deployment and configuration',
  'Automated PII/PHI data discovery, classification, and sensitivity labelling',
  'Role-Based Access Control (RBAC) and row/column-level security logic',
  'End-to-end automated data lineage mapping from ingestion to reporting',
  'Data quality profiling rules, validation gates, and health dashboards',
  'Regulatory compliance architecture blueprints (GDPR, HIPAA, SOC 2)',
  'Data retention, data destruction, and lifecycle policy automation',
  'Data stewardship workflows, RACI matrices, and data council setup',
  'Centralised business glossary and unified semantic data definitions',
];

const subservices = [
  {
    icon: Scale,
    number: '01',
    title: 'Data Governance Frameworks',
    description:
      'Establish enterprise data councils, data stewardship structures, and formal policy operating models.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Data governance maturity assessment and strategic multi-year roadmap design',
      'RACI matrix assignment for functional data domain owners and technical stewards',
      'Data policy writing covering usage, processing boundaries, and operational lifecycles',
      'Setup and enablement of cross-functional enterprise data governance councils',
      'Change management programs to embed corporate data culture across business units',
      'Metrics and KPI scorecards to track data governance adoption and effectiveness',
    ],
    engagement: '6–10 weeks',
    color: 'blue',
  },
  {
    icon: Search,
    number: '02',
    title: 'Data Cataloguing & Discovery',
    description:
      'Automated scanning and indexing to discover, map, and search your entire cross-cloud data estate.',
    image: 'https://images.unsplash.com/photo-1507207611509-ec012433ff52?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Microsoft Purview or Collibra deployment across Azure, AWS, and SaaS platforms',
      'Automated asset scanning and discovery schedules for data lakes and warehouses',
      'Centralised business glossary setup with business-to-technical asset mapping',
      'Search experience optimization so analysts find verified data points instantly',
      'Data asset certification and promotion badges to denote verified sources',
      'Curating rich technical metadata, schemas, and structural classifications',
    ],
    engagement: '4–8 weeks',
    color: 'sky',
  },
  {
    icon: Lock,
    number: '03',
    title: 'Data Security & Privacy Masking',
    description:
      'Protect sensitive PII, PHI, and IP through automated security classification and encryption rules.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Automated pattern matching and classification rules for sensitive data fields',
      'Dynamic Data Masking (DDM) configuration for SQL and Lakehouse platforms',
      'Row-Level Security (RLS) and Column-Level Security (CLS) execution blueprints',
      'Enterprise sensitivity label propagation mapping (e.g., highly confidential labels)',
      'Just-In-Time (JIT) data access approval workflows and request logs',
      'Cryptographic data pseudonymisation and format-preserving tokenization structures',
    ],
    engagement: '6–8 weeks',
    color: 'indigo',
  },
  {
    icon: Fingerprint,
    number: '04',
    title: 'Data Lineage & Traceability',
    description:
      'Map comprehensive data dependency paths from raw source operational apps to executive dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Automated pipeline parsing to capture end-to-end dataset transformation lineage',
      'Visual lineage graphs tracing data assets through ETL/ELT pipelines',
      'Impact analysis mapping to preview downstream breakage before applying schema changes',
      'Historical lineage version tracking for audit verification and system transparency',
      'Cross-workspace data stream stitching for unified modern multi-tenant visibility',
      'Power BI report-to-source traceability validation paths for executive assurance',
    ],
    engagement: '6–10 weeks',
    color: 'cyan',
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'Data Quality Frameworks',
    description:
      'Automated anomaly profiling, validation logic gates, and proactive data health monitoring.',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Great Expectations or native cloud data quality engine integration profiles',
      'Validation checks for completeness, accuracy, uniqueness, and consistency thresholds',
      'Data quality gate barriers injected into ingestion pipelines to halt corrupt files',
      'Operational data health dashboards with automated trend exception reporting',
      'Alerting routines connecting pipeline quality metrics to IT management spaces',
      'Historical data drift analysis models tracking categorical field skew over time',
    ],
    engagement: '4–8 weeks',
    color: 'teal',
  },
  {
    icon: FileText,
    number: '06',
    title: 'Regulatory Compliance Alignment',
    description:
      'Harden database environments and logging setups to meet strict international privacy mandates.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    points: [
      'GDPR and CCPA technical preparation plans, including automated Right to be Forgotten rules',
      'HIPAA and healthcare data handling security patterns and transport encryption audit',
      'Audit log aggregation architectures mapping complete user read and query histories',
      'Data residency and sovereign cloud isolation compliance routing matrices',
      'Subject Access Request (SAR) automated data extraction routine configurations',
      'Independent security architecture reviews ahead of formal regulatory submittals',
    ],
    engagement: '8–12 weeks',
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
  'Chief Risk Officer (CRO)',
  'Data Protection Officer (DPO)',
  'Head of Data Governance',
  'General Counsel',
  'Enterprise Security Architect',
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
export default function DataGovernancePage() {
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            alt="Secure Enterprise Data Network Framework"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/95 via-[#060c21]/85 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            Data Governance &amp; Compliance
            <span className="block mt-3 text-blue-400 font-light">
              Turn data risk into an operational competitive edge.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Don't let data security slow down enterprise innovation. We construct automated cataloguing systems, 
            bulletproof privacy controls, and end-to-end data lineage that satisfy strict audits while accelerating trustworthy self-service analytics.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Request a Governance &amp; Risk Audit
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
                'Microsoft Purview',
                'Collibra Architecture',
                'GDPR Compliance Frameworks',
                'Dynamic Data Masking',
                'End-to-End Data Lineage',
                'PII Auto-Classification',
                'Row-Level Security (RLS)',
                'Business Glossary Definition',
                'HIPAA Secure Data Gates',
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
                alt="Secure Digital Governance Portal System"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">
                True governance acts as an accelerator, not a brake.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                Many organizations view compliance as a collection of manual forms and access restrictions that paralyze engineering teams. 
                We implement <strong className="font-bold text-blue-700">automated, passive cloud-native governance architecture</strong>. 
                By building security and discovery directly into storage layers, your data stays discoverable, clean, and perfectly compliant without stalling operations.
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
              Governance Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              Comprehensive Data Governance Capabilities
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              Deploy integrated software solutions and target corporate processes to guarantee total file accuracy, privacy, and regulatory safety.
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
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000"
                alt="Healthcare Corporate Audit Security Dashboard Mapping"
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
                Healthcare Consortium — Automated Patient PII &amp; PHI Cataloguing
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                A multi-region healthcare operator required automated verification mapping across their analytical cloud infrastructure to remain perfectly HIPAA and regional data privacy compliant. We deployed Microsoft Purview, scanning 14,000+ relational database schemas and object storages to tag sensitive patient records automatically.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    PII Catalogued
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    across multi-cloud assets automatically
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">&lt; 2 Sec</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Dynamic Masking
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    applied globally on unauthorized queries
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">Zero</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Manual Audit Checks
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    needed via live lineaging graphs
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
                  Framework Review Lifecycle
                </h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">
                  4–12 weeks
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Phased cataloging integrations mapped per priority database cluster or legal structure.
                </p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">
                  Security Boundaries
                </h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">
                  Zero Trust Policies
                </div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  All scanner metadata remains entirely internal to your tenant cloud perimeter, completely locked away from external entities.
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
              Data Security &amp; Cataloguing Review
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              De-risk your information landscape today.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Schedule a 30-minute discovery workshop with our security and governance engineers. We will isolate audit liabilities, review scanning tooling gaps, and blueprint an automated classification path.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Book an Enterprise Compliance Workshop
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