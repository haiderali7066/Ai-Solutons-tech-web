import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart3,
  Users,
  Clock,
  PieChart,
  TrendingUp,
  BrainCircuit,
  Eye,
  Layers,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Business Intelligence & Analytics | AI Solution Technologies',
  description:
    'Turn complex raw data into actionable enterprise insights with interactive dashboards, semantic models, and predictive analytics.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'Executives make major decisions based on unverified gut feelings and conflicting reports',
  'Teams waste hours exporting data to excel files to manually build static charts',
  'Power BI dashboards load painfully slow due to unoptimized DAX and messy data models',
  'Critical business insights are buried deep under confusing, unorganized UI/UX layouts',
  'Historical reports show what happened but fail to forecast future trends or anomalies',
  'Siloed department metrics cause endless arguments over whose numbers are actually correct',
];

const deliverables = [
  'Enterprise Power BI, Tableau, and cloud native dashboard design',
  'High-performance DAX optimization and star-schema semantic modeling',
  'Executive, operational, and financial interactive reporting suites',
  'Automated refresh architectures and gateway performance tuning',
  'Self-service BI enablement frameworks for non-technical teams',
  'Predictive analytics dashboards integrating machine learning inputs',
  'Row-Level Security (RLS) and strict data access governance config',
  'KPI dictionary establishment and cross-department standardization',
  'Mobile-optimized responsive reports for on-the-go leadership tracking',
  'Comprehensive user adoption training and change management blueprints',
];

const subservices = [
  {
    icon: PieChart,
    number: '01',
    title: 'Enterprise Dashboard Design',
    description:
      'Transform complex data layers into intuitive, role-based visual storytelling systems.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Tailored executive scorecards, financial reporting, and operational views',
      'Advanced Power BI and Tableau visualization engineering',
      'UI/UX design principles applied to analytical layouts for rapid scanning',
      'Interactive drill-through paths, parameter parameters, and custom tooltips',
      'Cross-report consistent layout systems and localized brand styling',
    ],
    engagement: '4–8 weeks',
    color: 'blue',
  },
  {
    icon: Layers,
    number: '02',
    title: 'Semantic Modeling & DAX Tuning',
    description:
      'Build lightning-fast, secure data models optimized for enterprise-scale queries.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Star-schema dimensional modeling (Fact and Dimension table structures)',
      'High-performance, clean DAX calculation and measure engineering',
      'Aggregations and hybrid storage modeling for massive data environments',
      'Elimination of bidirectional filters and row-by-row compute bottlenecks',
      'DirectQuery, Import, and Fabric Direct Lake connection optimization',
    ],
    engagement: '4–10 weeks',
    color: 'sky',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Self-Service BI Enablement',
    description:
      'Empower your business users to securely query and build reports without technical backlogs.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Certified and promoted central datasets acting as a single source of truth',
      'Customized data dictionaries and calculation documentation layouts',
      'Workspace governance models separating data creators from visual consumers',
      'Hands-on team training bootcamps for Power BI desktop mastery',
      'Deployment templates, row-level security parameters, and workspace boundaries',
    ],
    engagement: '6–12 weeks',
    color: 'indigo',
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'Predictive & Advanced Analytics',
    description:
      'Go beyond rearview mirror data to see forecasts, statistical patterns, and trends.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Integration of Python, R, and AI/ML pipeline models natively into BI visuals',
      'Time-series forecasting, variance analyses, and trend correlation graphs',
      'What-if analysis parameters for dynamic operational scenario modeling',
      'Automated outlier and anomaly identification dashboards',
      'Cohort analyses, customer churn modeling, and segmentation visuals',
    ],
    engagement: '8–12 weeks',
    color: 'cyan',
  },
  {
    icon: Eye,
    number: '05',
    title: 'BI Governance & Distribution',
    description:
      'Secure your analytical insights while smoothing enterprise distribution and adoption.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Row-Level Security (RLS) and Object-Level Security (OLS) architecture',
      'Tenant administration setting audits, licensing optimization, and capacity maps',
      'Power BI apps creation and enterprise-wide publishing schedules',
      'ALM pipeline automation (Development, Test, Production deployment)',
      'Usage metrics audit analytics to identify and boost low-adoption areas',
    ],
    engagement: '4–8 weeks',
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
  'Head of Analytics',
  'Chief Financial Officer (CFO)',
  'Director of Business Intelligence',
  'VP of Operations',
  'Commercial Data Analyst',
  'Data Governance Lead',
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
export default function BusinessIntelligencePage() {
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
            alt="Business Intelligence and Corporate Analytics Dashboards"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            Business Intelligence &amp; Analytics
            <span className="block mt-3 text-blue-400 font-light">
              Stop looking at static logs. Start driving growth with clarity.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            We convert millions of rows of unorganized raw tables into pristine, interactive dashboards. Track company performance, forecast financial curves, and empower teams with managed semantic data spaces.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Request a BI Dashboard Assessment
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
                'Power BI Enterprise',
                'Tableau Solutions',
                'DAX Performance Optimization',
                'Star-Schema Modeling',
                'Row-Level Security (RLS)',
                'Predictive Forecasting',
                'Self-Service Analytics',
                'Paginated Reports',
                'ALM Deployment Pipelines',
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
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000"
                alt="Corporate Leadership Reviewing Analytics Dashboards"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">
                Data is only powerful when it is understood.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                Many modern companies drown in complex data points but starve for basic operational clarity. We eliminate spreadsheet backlogs by crafting a unified{' '}
                <strong className="font-bold text-blue-700">single source of visual truth</strong>. Every measure is pre-calculated, every dashboard loads instantly, and your leadership team can answer critical commercial questions within three mouse clicks.
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
                    <BarChart3 className="w-6 h-6" />
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

      {/* ══════════ 5 SUBSERVICES IMAGE-RICH GRID ══════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">
              Analytical Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              Business Intelligence Capabilities
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              Establish institutional reporting systems built on semantic modeling, automated publishing, and polished visual UI design.
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
                alt="Corporate Business Intelligence Review Case Study"
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
              <BarChart3 className="w-20 h-20 text-blue-500/10 absolute right-10 top-10 group-hover:rotate-12 transition-transform duration-500" />

              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Commercial Property Group — Star-Schema & Performance Redesign
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                An international estate management group had dashboards that took over 45 seconds to refresh because of messy data links and heavy, unoptimized calculations. We refactored their entire data layout into a clean star schema, optimized the underlying calculation measures, and introduced role-based viewing permissions. Dashboards now open instantly under 2 seconds.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">95%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Load-Time Reduction
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    measures load under 2 seconds
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Access Compliance
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    governed safely via Row-Level Security
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">20 Hours</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Saved Weekly
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    by removing manual spreadsheet work
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
                  Engagement Timeline
                </h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">
                  4–12 weeks
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Phased out based on count of dashboards, calculations, and visual layouts requested.
                </p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">
                  Visual Execution
                </h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">
                  Polished & Governed
                </div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  Delivered with organized workspace configurations and thorough documentation to maximize self-service ownership.
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
              Business Intelligence &amp; Analytics
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Turn your company data into actual operational leverage.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Schedule a 30-minute introductory sync with our lead analytics consultants. We will audit your dashboard load patterns, structural bottlenecks, and deliver an actionable modeling blueprint.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Book an Analytics Discovery Session
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