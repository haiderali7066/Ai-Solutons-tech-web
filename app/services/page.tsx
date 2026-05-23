'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Database,
  LineChart,
  ShieldCheck,
  Sparkles,
  Zap,
  Layers,
  Server,
  Search,
} from 'lucide-react';

import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/AnimatedSection';

const servicesData = [
  {
    num: '01',
    title: 'AI & Intelligent Automation',
    desc: 'AI-powered decision systems, predictive intelligence, workflow automation, OCR, and autonomous AI agents.',
    tags: ['Agentic AI', 'Machine Learning', 'OCR Automation'],
    href: '/services/ai-intelligent-automation',
    icon: <BrainCircuit className="w-7 h-7" strokeWidth={1.7} />,
  },
  {
    num: '02',
    title: 'Data Platforms & Engineering',
    desc: 'Modern lakehouse architecture, enterprise data foundations, Data Vault 2.0, MDM, and scalable data engineering pipelines.',
    tags: ['Data Lakehouse', 'Azure Data', 'Data Vault 2.0'],
    href: '/services/data-platforms-engineering',
    icon: <Database className="w-7 h-7" strokeWidth={1.7} />,
  },
  {
    num: '03',
    title: 'Cloud & Enterprise Modernisation',
    desc: 'Azure migration, API-first integration, infrastructure transformation, and modern enterprise architecture.',
    tags: ['Cloud Strategy', 'Azure Migration', 'API-First'],
    href: '/services/cloud-enterprise-modernisation',
    icon: <Cloud className="w-7 h-7" strokeWidth={1.7} />,
  },
  {
    num: '04',
    title: 'Analytics & Executive Intelligence',
    desc: 'Power BI dashboards, real-time analytics, executive reporting, forecasting, and operational visibility platforms.',
    tags: ['Power BI', 'Data Visualisation', 'Real-Time BI'],
    href: '/services/analytics-executive-intelligence',
    icon: <LineChart className="w-7 h-7" strokeWidth={1.7} />,
  },
  {
    num: '05',
    title: 'AI Agents & Workforce Automation',
    desc: 'Intelligent AI workers and autonomous operational agents designed to automate repetitive business processes at scale.',
    tags: ['Intelligent Agents', 'Workflow RPA', 'Process Optimisation'],
    href: '/services/ai-agents-workforce-automation',
    icon: <Bot className="w-7 h-7" strokeWidth={1.7} />,
  },
  {
    num: '06',
    title: 'Governance, Security & Compliance',
    desc: 'Enterprise governance frameworks, lineage management, access controls, auditability, and regulatory compliance solutions.',
    tags: ['Governance', 'Lineage Management', 'Compliance'],
    href: '/services/governance-security-compliance',
    icon: <ShieldCheck className="w-7 h-7" strokeWidth={1.7} />,
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Understanding business operations, infrastructure, workflows, and enterprise data ecosystems.',
    icon: <Search className="w-5 h-5" />,
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Designing scalable AI, cloud, automation, and modern enterprise data platforms.',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'Deploying intelligent systems, automation pipelines, integrations, and cloud-native infrastructure.',
    icon: <Server className="w-5 h-5" />,
  },
  {
    num: '04',
    title: 'Optimisation',
    desc: 'Continuous monitoring, scaling, governance, and performance optimisation for enterprise growth.',
    icon: <Zap className="w-5 h-5" />,
  },
];

const capabilities = [
  'AI-Powered Automation',
  'Enterprise Data Platforms',
  'Cloud Infrastructure',
  'Machine Learning Solutions',
  'Executive Dashboards',
  'Workflow Automation',
  'API Integrations',
  'Governance & Security',
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0f172a]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#020817] pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="smallGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        {/* Glow */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl">
              <Sparkles className="w-4 h-4" />
              Enterprise AI Solutions
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white">
              Intelligent
              <span className="block bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Enterprise Systems
              </span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-400 font-light">
              AI-powered enterprise transformation through cloud engineering,
              data platforms, intelligent automation, and scalable digital
              infrastructure.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
              >
                Start Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase">
              Services
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-[#020817]">
              Enterprise Technology
              <span className="block text-slate-500">
                Built For Scale
              </span>
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              End-to-end enterprise services combining AI, data, cloud,
              analytics, and intelligent automation systems.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {servicesData.map((service) => (
              <StaggerItem
                key={service.num}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      {service.icon}
                    </div>

                    <span className="text-sm font-bold text-slate-300">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-[#020817] transition-colors duration-300 group-hover:text-blue-700">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-grow text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#020817] transition-colors duration-300 hover:text-blue-600"
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DARK FEATURE SECTION */}
      <section className="relative overflow-hidden bg-[#020817] py-28">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <FadeInUp>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Structured Data
              <span className="block text-slate-400">
                Meets Artificial Intelligence
              </span>
            </h2>

            <p className="mt-8 text-lg text-slate-400 leading-relaxed">
              We engineer trusted enterprise ecosystems where AI operates on
              clean, governed, and scalable data infrastructure — enabling
              automation, predictive intelligence, and executive visibility.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />

                  <span className="text-sm text-slate-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <BrainCircuit className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white">
                      AI-Driven Operations
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Enterprise-grade automation systems
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Deploy autonomous AI systems that automate workflows,
                    optimise operations, process documents, and deliver
                    intelligent decision support across your organisation.
                  </p>

                  <p>
                    Built on secure cloud infrastructure and structured
                    enterprise data foundations for scalability and governance.
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInUp className="text-center mb-20">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.25em]">
              Process
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-[#020817]">
              Our Delivery Framework
            </h2>
          </FadeInUp>

          <div className="space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="group rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                    {step.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-bold tracking-wider text-blue-600">
                        PHASE {step.num}
                      </span>

                      <h3 className="text-2xl font-black tracking-tight text-[#020817]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020817] px-6 py-24">
        <FadeInUp className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-12 md:p-20 text-center shadow-[0_40px_120px_rgba(37,99,235,0.35)] max-w-6xl mx-auto">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full border border-white/10" />

          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-xl">
              Enterprise Transformation
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Ready To Modernise
              <span className="block">
                Your Enterprise Infrastructure?
              </span>
            </h2>

            <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-blue-100">
              Build scalable AI systems, cloud-native platforms, and intelligent
              automation frameworks designed for modern organisations.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 transition-all duration-300 hover:scale-105"
            >
              Book Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}