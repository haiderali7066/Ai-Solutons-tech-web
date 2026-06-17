import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Code2,
  Monitor,
  Cpu,
  Layers,
  ShieldCheck,
  Braces,
  Users,
  Clock,
  Laptop,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Custom Web Software Development | AI Solution Technologies',
  description:
    'Bespoke digital products, high-performance web applications, cloud-native architectures, and enterprise software systems built for scale.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const problems = [
  'Off-the-shelf SaaS solutions force you to compromise your unique business workflows',
  'Legacy software systems are slow, insecure, and increasingly expensive to maintain',
  'Monolithic applications create severe deployment bottlenecks and limit feature scaling',
  'Poor user experiences (UX) decrease customer retention and lower internal operational efficiency',
  'Disparate legacy business tools lack secure, unified real-time data sync via APIs',
  'Internal development teams are bogged down handling structural tech debt instead of shipping features',
];

const deliverables = [
  'Full-stack architecture blueprint and technology stack validation',
  'Component-driven frontend development using Next.js, React, or TypeScript',
  'Scalable, secure backend architectures built with Node.js, Python, or .NET Core',
  'Custom RESTful, GraphQL, or gRPC API design and ecosystem integration',
  'Cloud-native deployment infrastructure setup across AWS, Azure, or GCP',
  'Intuitive, conversion-optimized UI/UX design wireframes and interactive prototypes',
  'Relational and non-relational database modeling (PostgreSQL, MongoDB, Redis)',
  'Comprehensive test-driven automated coverage (Unit, Integration, E2E)',
  'CI/CD automated deployment pipelines with zero-downtime rollouts',
  'Comprehensive source documentation, training blueprints, and transition handovers',
];

const subservices = [
  {
    icon: Code2,
    number: '01',
    title: 'Custom Web Applications',
    description:
      'End-to-end strategy, architectural design, and production engineering of bespoke web applications.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Tailored platform blueprints aligning directly with your unique operational rules',
      'Robust multi-tenant architectures optimized for modern B2B SaaS applications',
      'Elastic, horizontal auto-scaling design engineered to handle unpredictable traffic spikes',
      'State-of-the-art authentication frameworks (OAuth2, OIDC, SAML, Multi-Factor Auth)',
      'Enterprise-grade audit logs, role-based access control (RBAC), and data privacy layers',
    ],
    engagement: '12–24 weeks',
    color: 'blue',
  },
  {
    icon: Monitor,
    number: '02',
    title: 'Frontend Engineering',
    description:
      'High-performance, dynamic interfaces built utilizing component-driven single page or server-side rendering systems.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Next.js and React SPAs / SSR setups delivering sub-second initial page load speeds',
      'Strict TypeScript implementation ensuring clean, predictable, and self-documenting codebases',
      'Highly responsive web layouts styled cleanly via Tailwind CSS or customized design systems',
      'Strict adherence to WCAG 2.1 AA web accessibility compliance guidelines',
      'Advanced front-end state management configurations (Zustand, Redux Toolkit, TanStack Query)',
    ],
    engagement: '8–16 weeks',
    color: 'sky',
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Backend & API Architecture',
    description:
      'Resilient server logic, performant database routing, and secure API gateways engineered for maximum throughput.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Distributed microservices or clean, modular monoliths leveraging Node.js and Go',
      'Secure, predictable API endpoint design (RESTful frameworks, GraphQL, or gRPC networks)',
      'Optimized query performance profiles across PostgreSQL, MySQL, and specialized NoSQL layers',
      'Distributed message brokers and queuing infrastructure configurations (RabbitMQ, Redis Streams)',
      'Robust server-side processing mechanics for heavy background tasks and automated cron jobs',
    ],
    engagement: '10–20 weeks',
    color: 'indigo',
  },
  {
    icon: Layers,
    number: '04',
    title: 'Cloud-Native & DevOps',
    description:
      'Containerized environment patterns and continuous deployment pipelines providing secure infrastructure as code.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Docker container multi-stage builds and centralized orchestration deployment strategies',
      'Infrastructure as Code (IaC) configuration scripts built with Terraform or cloud native tools',
      'Automated continuous delivery (CI/CD) workflows via GitHub Actions or GitLab CI',
      'Centralized monitoring clusters tracking infrastructure health (Prometheus, Grafana, ELK)',
      'Bespoke zero-downtime canary or blue-green strategy production deployments',
    ],
    engagement: '6–12 weeks',
    color: 'cyan',
  },
  {
    icon: Laptop,
    number: '05',
    title: 'UI/UX Product Design',
    description:
      'Immersive digital experiences crafted through user research, wireframing, and production-ready interface systems.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Deep user persona development mapping precise multi-step interface workflows',
      'Low-fidelity UX blueprints validating feature structural intent before writing code',
      'Pixel-perfect high-fidelity UI visual components designed explicitly inside Figma',
      'Custom web design asset libraries constructed ensuring deep cross-feature consistency',
      'Rapid interactive clickable prototyping sessions maximizing early customer feedback',
    ],
    engagement: '4–10 weeks',
    color: 'teal',
  },
  {
    icon: Braces,
    number: '06',
    title: 'Legacy Modernization',
    description:
      'Strategic decoupling, tech debt refactoring, and progressive migration of outdated applications into modern cloud webs.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
    points: [
      'Systematic decomposition of complex legacy monoliths into lightweight services',
      'Database migration strategies safeguarding data persistence and zero records loss',
      'Seamless implementation of strangler-fig migration patterns to avoid system downtime',
      'Comprehensive reverse engineering of undocumented, brittle source code setups',
      'Significant code minification and modern architectural refactoring frameworks',
    ],
    engagement: '12–26 weeks',
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
  'Chief Technology Officer (CTO)',
  'VP of Product',
  'Head of Engineering',
  'Chief Executive Officer (CEO)',
  'Director of Innovation',
  'Enterprise Software Architect',
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
export default function CustomWebSoftwareDevelopmentPage() {
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
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=2000"
            alt="Custom Web Software Infrastructure Engineering"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white">
            Custom Web Software Development
            <span className="block mt-3 text-blue-400 font-light">
              Bespoke digital platforms engineered for enterprise scale.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Stop forcing your operational workflows to adapt to rigid, templated SaaS products. 
            We build secure, high-throughput web applications, clean microservices, and dynamic front-end design systems tailored explicitly to your goals.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Consult with a Lead Architect
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
                'Next.js / React',
                'TypeScript',
                'Node.js Ecosystem',
                'PostgreSQL DB',
                'GraphQL Gateways',
                'Docker Containers',
                'Amazon Web Services',
                'Microsoft Azure Cloud',
                'Tailwind CSS UI',
                'Terraform IaC',
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
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000"
                alt="Product Design System and Frontend Architecture Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-14">
              <h2 className="text-3xl md:text-4xl font-light text-[#020817] mb-6">
                Your software should be your competitive advantage.
              </h2>
              <p className="text-xl leading-relaxed text-slate-600 font-light">
                When you run core enterprise workflows on generic off-the-shelf software, your growth limits map directly to their feature roadmaps. 
                Our approach delivers <strong className="font-bold text-blue-700">clean, production-ready source code</strong> completely owned by you. No user-seat licensing limits, no unaddressed security vulnerabilities, and no architectural bottlenecks holding back your feature deployment.
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
                  The Challenges
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
                    The Blueprint Deliverables
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
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#020817] leading-snug">
              Bespoke Web Engineering Services
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">
              From user experience strategy down to optimized server microservices, we build reliable digital systems.
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
                src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=1000"
                alt="Enterprise SaaS Software Metrics Interface"
                className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020817]" />
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg">
                  Product Spotlight
                </span>
              </div>
            </div>

            {/* Content panel */}
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10">
              <ShieldCheck className="w-20 h-20 text-blue-500/10 absolute right-10 top-10 group-hover:rotate-12 transition-transform duration-500" />

              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Clean Energy Provider — Unified Management Operating System
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                A scaling clean energy operator replaced 3 separate fragmented commercial software platforms with a custom, unified Next.js real-time management dashboard. Built on a containerized Node.js microservices framework, the customized system handles automated customer provisioning, invoicing workflows, and real-time solar farm generation metrics streaming.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white mb-1">65%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Operational Lift
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    by automating manual entry
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">2.4s</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Speed Improvement
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    over previous legacy dashboards
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Code Ownership
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    zero ongoing user-licensing fees
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
                  Target Industries
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
                  Typical Project Span
                </h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] mb-2">
                  8–24 weeks
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Delivered in progressive Agile milestones with functional bi-weekly preview builds.
                </p>
              </div>

              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3 relative z-10">
                  Intellectual Property
                </h4>
                <div className="text-2xl font-black text-white mb-2 relative z-10">
                  100% Owned by You
                </div>
                <p className="text-slate-400 text-sm font-light relative z-10">
                  All source code, environment documentation, and design assets shift directly to your legal custody upon production milestone signs.
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
              Start Your Project
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Let&apos;s map out your software architecture.
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Connect with our principal software engineering team for a technical scoping session. We will help map your core user flows, validate proposed technology selections, and supply an actionable software roadmap.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-sm group"
            >
              Request an Architecture Strategy Call
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