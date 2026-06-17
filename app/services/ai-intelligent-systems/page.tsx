import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BrainCircuit,
  Users,
  Clock,
  ShieldCheck,
  Search,
  FileText,
  TrendingUp,
  AlertTriangle,
  Workflow,
  Lock,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'AI & Intelligent Systems | AI Solution Technologies',
  description:
    'AI on structured data, GenAI/RAG, agentic AI & intelligent automation.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'Variance analysis consumes days of manual effort every month-end',
  'Fraud and anomalies are discovered weeks after they occur',
  'ERP data is locked behind static reports — not conversational',
  'Reconciliations require a full team and still contain errors',
  'Documents and contracts cannot be searched with intelligence',
  'AI initiatives stall because the underlying data is not trusted',
];

const deliverables = [
  'AI readiness and data quality assessment',
  'Governed data foundation on Microsoft Fabric',
  'AI model build — forecasting, anomaly detection, classification',
  'Enterprise RAG knowledge base and retrieval pipeline',
  'Private AI assistant deployed within your Azure tenant',
  'Agentic workflow automation and orchestration',
  'Executive AI insights dashboard',
  'Full audit trail on every AI decision and output',
  'Continuous model monitoring and retraining',
  'Stakeholder training and operational handover',
];

const subservices = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'AI on ERP & Finance Systems [cite: 46]',
    description:
      'AI over Dynamics 365, SAP & NetSuite — forecasting and financial intelligence. [cite: 46]',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    points: [
      'AI-powered financial forecasting on GL, AP, AR, and cashflow [cite: 46]',
      'Automated variance analysis with ML-driven explanation [cite: 46]',
      'Revenue recognition anomaly detection and exception flagging [cite: 46]',
      'Working capital optimisation using predictive cashflow modelling [cite: 46]',
      'Explainable AI outputs aligned to CFO and auditor requirements [cite: 46]',
    ],
    engagement: '8–14 weeks',
    color: 'blue',
  },
  {
    icon: Search,
    number: '02',
    title: 'AI Financial Reconciliation [cite: 47]',
    description:
      'Automated matching, exception flagging, and month-end acceleration. [cite: 47]',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Bank statement to ledger reconciliation using ML matching [cite: 47]',
      'Intercompany reconciliation automation across group entities [cite: 47]',
      'Exception queue — unmatched items surfaced with context for review [cite: 47]',
      'Pattern learning from historical matches to improve accuracy [cite: 47]',
      'Audit trail for every automated match and exception decision [cite: 47]',
    ],
    engagement: '6–10 weeks',
    color: 'sky',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Enterprise RAG Implementation [cite: 48]',
    description:
      'AI over documents, SharePoint & SQL using Azure AI Search. [cite: 48]',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'RAG architecture design — chunking, embedding, and retrieval pipeline [cite: 48]',
      'Azure AI Search with vector, keyword, and hybrid search configuration [cite: 48]',
      'Document ingestion from PDF, Word, SharePoint, and Blob Storage [cite: 48]',
      'Grounding and citation — every AI answer linked to source document [cite: 48]',
      'Evaluation framework — retrieval precision and hallucination rate [cite: 48]',
    ],
    engagement: '6–10 weeks',
    color: 'indigo',
  },
  {
    icon: Lock,
    number: '04',
    title: 'Private Enterprise AI Assistant [cite: 49]',
    description:
      'Internal ChatGPT on your own data — secure, governed & compliant. [cite: 49]',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Azure OpenAI private deployment within your tenant [cite: 49]',
      'Multi-source knowledge base — SharePoint, SQL, and document libraries [cite: 49]',
      'Role-based access ensuring users only see authorised data [cite: 49]',
      'Teams and web app chat interface deployment [cite: 49]',
      'Content filtering, prompt injection protection, and responsible AI controls [cite: 49]',
    ],
    engagement: '6–10 weeks',
    color: 'cyan',
  },
  {
    icon: AlertTriangle,
    number: '05',
    title: 'AI Anomaly Detection [cite: 50]',
    description:
      'Fraud, outlier, and exception detection on transactional and operational data. [cite: 50]',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Statistical and ML anomaly detection on financial transactions [cite: 50]',
      'Fraud detection in procurement, expenses, and payments [cite: 50]',
      'Inventory and supply chain anomaly alerting [cite: 50]',
      'Real-time alerting via Teams, email, and Power BI [cite: 50]',
      'False positive reduction via supervised feedback loops [cite: 50]',
    ],
    engagement: '6–10 weeks',
    color: 'teal',
  },
  {
    icon: Workflow,
    number: '06',
    title: 'Agentic AI & Automation [cite: 51]',
    description:
      'AI agents for finance, workflow orchestration, and decision automation. [cite: 51]',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Finance and approval workflow AI agents [cite: 51]',
      'AI operational copilot — natural language to SQL over ERP data [cite: 51]',
      'Document AI with OCR, extraction, and classification automation [cite: 51]',
      'Agentic process orchestration — scheduling, routing, and escalation [cite: 51]',
      'Agentic AI for construction: BOQ tracking and cost variance AI [cite: 51]',
    ],
    engagement: '8–14 weeks',
    color: 'blue',
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
  'Water [cite: 11]'
];
const roles = ['CFO [cite: 39]', 'Executive Audiences [cite: 39]', 'Ops Managers [cite: 39]', 'Chief AI Officer', 'Head of Finance'];

const colorMap = {
  blue:    { icon: 'bg-blue-50 text-blue-600',    border: 'border-blue-100',    text: 'text-blue-600',    badge: 'bg-blue-600/10 text-blue-500 border-blue-200' },
  sky:     { icon: 'bg-sky-50 text-sky-600',      border: 'border-sky-100',     text: 'text-sky-600',     badge: 'bg-sky-600/10 text-sky-500 border-sky-200' },
  indigo:  { icon: 'bg-indigo-50 text-indigo-600',border: 'border-indigo-100',  text: 'text-indigo-600',  badge: 'bg-indigo-600/10 text-indigo-500 border-indigo-200' },
  cyan:    { icon: 'bg-cyan-50 text-cyan-600',    border: 'border-cyan-100',    text: 'text-cyan-600',    badge: 'bg-cyan-600/10 text-cyan-600 border-cyan-200' },
  teal:    { icon: 'bg-teal-50 text-teal-600',    border: 'border-teal-100',    text: 'text-teal-600',    badge: 'bg-teal-600/10 text-teal-600 border-teal-200' },
};

/* ══════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════ */
export default function AIIntelligentSystemsPage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-blue-500/30">

      {/* CSS ANIMATIONS - Maintained Straight Marquee Tilt Flow */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0%{ transform:translateX(0); } 100%{ transform:translateX(-50%); }}
        .anim-marquee { animation: marquee 30s linear infinite; }
      `}} />

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5">
        {/* Background Image & Clean Overlay */}
        <div className="absolute inset-0 z-0 bg-[#020817]">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000"
            alt="AI & Intelligent Systems"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            AI &amp; Intelligent Systems 
            <span className="block mt-3 text-blue-400 font-light">
              on the data your business already trusts.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            AI on structured data, GenAI/RAG, agentic AI & intelligent automation  — deployed directly inside your Azure tenant with full audit trails and citations on every output.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Book a 30-minute conversation
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
              {['Azure OpenAI', 'Microsoft Fabric', 'Azure AI Search', 'Dynamics 365', 'SAP', 'Power BI', 'Azure ML', 'NetSuite'].map((tech, i) => (
                <React.Fragment key={i}>
                  <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">{tech}</span>
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">Real Intelligence requires accurate foundations.</h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                Most AI vendors point you at a chatbot and say 'upload your documents'. We deploy AI <strong className="font-bold text-blue-700">directly on your governed ERP and finance data</strong> with full audit trails and source citations. The CFO can trust the answer because the AI shows exactly where it came from.
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
                <h2 className="text-2xl md:text-3xl font-black text-[#020817]">Sound familiar?</h2>
              </div>
              <ul className="space-y-6">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-4 group cursor-default">
                    <XCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-slate-600 leading-relaxed group-hover:text-[#020817] transition-colors">{p}</span>
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
                  <h2 className="text-2xl md:text-3xl font-black text-white">What is included</h2>
                </div>
                <ul className="space-y-6">
                  {deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-4 group cursor-default">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-slate-300 leading-relaxed group-hover:text-white transition-colors font-light">{d}</span>
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
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">Six Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              The full AI &amp; Intelligent Systems suite 
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              Each capability is deployable standalone or as part of a fully integrated AI estate built on your governed data foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subservices.map((s) => {
              const Icon = s.icon;
              // @ts-ignore
              const c = colorMap[s.color];
              return (
                <div
                  key={s.number}
                  className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden"
                >
                  {/* Image Header */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={s.image} 
                      alt={s.title.split('[')[0].trim()} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Content Body */}
                  <div className="p-8 pt-4 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-white shadow-sm -mt-10 relative z-10 ${c.border} ${c.text}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${c.badge}`}>
                        {s.engagement}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-slate-300 tracking-widest mb-1">{s.number}</div>
                    <h3 className={`text-lg font-bold text-[#020817] mb-2 group-hover:${c.text} transition-colors`}>
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light mb-6 leading-relaxed">{s.description}</p>

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
                alt="Finance AI Deployment"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
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
              <BrainCircuit className="w-20 h-20 text-blue-500/10 absolute right-10 top-10 group-hover:rotate-12 transition-transform duration-500" />

              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Distribution Group — AI Financial Intelligence
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                A distribution group running 3 ERPs on AUD $300M revenue deployed AI across Dynamics 365 and finance data.
                The CFO now asks "why did margins drop in QLD last week?" in natural language and receives cited answers —
                traced to source records — in seconds.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">$640K</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Duplicate invoices caught</div>
                  <div className="text-slate-500 text-sm mt-1">in the first quarter alone</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">95%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Reconciliation automated</div>
                  <div className="text-slate-500 text-sm mt-1">ML matching accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">Seconds</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">To cited answers</div>
                  <div className="text-slate-500 text-sm mt-1">from governed ERP data</div>
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
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Industries Served [cite: 11]</h4>
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
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Target Buyers</h4>
                <div className="flex flex-wrap gap-2.5">
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-bold hover:bg-blue-100 transition-colors cursor-default"
                    >
                      {role.split(' [')[0]}
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
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Delivery Timeline</h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">6–14 weeks</div>
                <p className="text-slate-500 text-sm font-light">Per AI capability — standalone or as a combined programme</p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">Deployment Model</h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">In-tenant</div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  AI runs entirely inside your Azure tenant — your data never leaves your environment.
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
              AI &amp; Intelligent Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Ready to put AI on your governed enterprise data?
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Book a 30-minute conversation. We will look at your current data setup, identify the right AI entry point,
              and outline what an engagement would look like — at no cost and no commitment.
            </p>
            
             <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Book a 30-minute conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}