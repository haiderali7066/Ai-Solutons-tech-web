import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Briefcase,
  Users,
  Clock,
  TrendingUp,
  LineChart,
  GitMerge,
  ShieldAlert,
  Layers,
  Sparkles,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'CRM & Business Applications | AI Solution Technologies',
  description:
    'Enterprise CRM design, legacy migration, automated pipeline tracking, and cross-platform business applications.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'Customer data is trapped in isolated team spreadsheets and disjointed silos',
  'Sales pipelines lack clear visibility, causing missed deals and inaccurate forecasting',
  'Account managers waste hours manually logging interactions and standard client emails',
  'Marketing campaigns operate blindly without closed-loop revenue attribution models',
  'Siloed core systems (ERP, Billing, Support) completely fail to communicate with customer touchpoints',
  'Adoption rates are abysmal because the system is overly complicated and poorly configured',
];

const deliverables = [
  'Enterprise CRM architecture, layout mapping, and security modeling',
  'Legacy CRM data migration and transformation workflows',
  'Multi-channel contact and centralized account management trees',
  'Automated sales pipeline progression logic and deal alerting',
  'Omnichannel support ticketing and operational queue setup',
  'Bidirectional integration with ERP, invoicing, and messaging systems',
  'Custom business dashboards and pipeline velocity reporting',
  'Marketing automation sync with closed-loop conversion workflows',
  'Data health governance audits and automated validation protocols',
  'Comprehensive administrative documentation and staff training playbooks',
];

const subservices = [
  {
    icon: Users,
    number: '01',
    title: 'CRM Strategy & Workspace Architecture',
    description:
      'Designing custom customer hubs engineered for performance, security, and growth.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Tenant discovery — layout structure mapping and field schema optimization',
      'Unified data structures — matching client profiles across global business units',
      'Advanced operational security — custom role hierarchies and row-level data boundaries',
      'Clean migration plans — step-by-step risk management from legacy databases',
      'Platform audit blueprints — clarifying storage bottlenecks and redundant custom items',
    ],
    engagement: '4–6 weeks',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    number: '02',
    title: 'Sales & Pipeline Automation',
    description:
      'Transforming chaotic funnels into high-velocity, automated engines.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Automated pipeline configuration — guided milestone paths and validation check gates',
      'Dynamic deal triggers — immediate alerts via email, Slack, or Teams for hot leads',
      'Intelligent lead distribution — rules-based routing based on tier or geography',
      'Accurate pipeline tracking — granular historical logging for predictive win-rates',
      'Native quote-to-cash workflows — linking approved deals to automated invoice runs',
    ],
    engagement: '6–10 weeks',
    color: 'sky',
  },
  {
    icon: LineChart,
    number: '03',
    title: 'Customer Service & Retention Applications',
    description:
      'Building operational ticket applications that transform retention metrics.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Omnichannel intake systems — converting chats, emails, and forms into active files',
      'SLA tracking engines — automated escalations preventing account breach vulnerabilities',
      'Centralized client hubs — displaying historical support logs alongside commercial deals',
      'Self-service knowledge flows — indexing support document networks directly to cases',
      'CSAT & NPS analytics — triggering automated experience scorecards post-resolution',
    ],
    engagement: '6–8 weeks',
    color: 'indigo',
  },
  {
    icon: GitMerge,
    number: '04',
    title: 'Cross-Platform Integrations',
    description:
      'Eradicating information isolation by securely syncing core enterprise nodes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Bidirectional ERP systems linkage — syncing ledger profiles, inventory, and payment structures',
      'Marketing suite alignments — tracking campaign interactions all the way to closed revenue',
      'Communication engine overrides — logging outbound phone, email, and meeting loops cleanly',
      'Custom webhook engineering — instantly matching third-party tool records via API nodes',
      'Conflict-resolution data rules — enforcing trusted master records during dual updates',
    ],
    engagement: '8–12 weeks',
    color: 'cyan',
  },
  {
    icon: Sparkles,
    number: '05',
    title: 'Data Governance & Validation Apps',
    description:
      'Deploying custom control apps to clean, structure, and future-proof records.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Deduplication patterns — automated scans catching overlapping client footprints',
      'Input validation protocols — enforcing accurate formatting criteria upon entry',
      'Address & identity validation — integrating third-party tools for accurate localized data',
      'Audit log analytics — tracing field modifications back to specific system sources',
      'Automated archiving loops — moving cold legacy accounts into tier-two storage zones',
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
  'Chief Commercial Officer (CCO)',
  'VP of Sales Operations',
  'Director of Customer Experience',
  'CIO / IT Director',
  'Business Applications Lead',
  'CRM Product Manager',
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
export default function CRMBusinessApplicationsPage() {
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
            alt="Enterprise Business Software Architecture"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            CRM &amp; Business Applications
            <span className="block mt-3 text-blue-400 font-light">
              Unify your operational workflows around your customer.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Stop letting disconnected software kill your deal velocity. We construct robust CRM systems, cross-platform data syncs, and automated tracking modules designed to transform raw interactions into clean revenue engines.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Consult an Application Architect
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
                'Enterprise CRM Systems',
                'Pipeline Automation',
                'Omnichannel Support Ticketing',
                'API Middleware Middleware',
                'ERP Data Synced',
                'Governance & Validation Apps',
                'Automated SLA Routing',
                'Custom Database Schemas',
                'Account Hierarchy Trees',
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
                src="https://plus.unsplash.com/premium_photo-1733306696471-807493ff845b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teams monitoring internal commercial pipelines"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">
                Your software landscape shouldn&apos;t match your internal politics.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                When sales, fulfillment, and operations operate out of distinct tools, your customer pays the price through mixed messages and operational delays. We design clean, integrated <strong className="font-bold text-blue-700">CRM workspace layouts</strong> that bridge historical interaction trails with underlying financial real-time actions.
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
                  <ShieldAlert className="w-6 h-6" />
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

      {/* ══════════ 5 SUBSERVICES IMAGE-RICH GRID ══════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">
              Capability Breakdown
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              Comprehensive Application Capabilities
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              Establish deep, structured workspaces configured safely to accelerate manual tasks and protect data longevity.
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
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1000"
                alt="Commercial account review operations"
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
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
                Professional Services Enterprise — Consolidated Operations Migration
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                A multi-location consulting enterprise was losing critical client tracking intelligence across isolated local systems and loose documents. We rebuilt their complete customer operations database from scratch, deploying automated stage validation metrics and bridging field records via secure webhooks straight into their accounting tools.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">34%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Pipeline Velocity Gain
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    via automated milestone tracking
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">14 hrs</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Saved Per Week
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    by removing dual ledger updates
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Record Visibility
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    across finance and field management
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
                <Briefcase className="w-5 h-5 text-blue-600" /> Who this is for
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
                  Engagement Delivery
                </h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">
                  4–12 weeks
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Phased modular releases focused on minimizing active team pipeline downtime.
                </p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">
                  Security Boundaries
                </h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">
                  Enterprise Compliant
                </div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  All systems configured directly within your cloud security framework, satisfying structural internal data governance guidelines.
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
              CRM Business Application Review
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Reclaim control of your operational visibility.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Connect directly with our corporate applications team for a comprehensive 30-minute workspace review. We will pinpoint your pipeline visibility blind spots, structure integration paths, and provide a clean modernization strategy.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Request a CRM Workspace Review
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