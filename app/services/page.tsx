import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Database,
  Network,
  Layers,
  BarChart3,
  BrainCircuit,
  CloudUpload,
  ShieldCheck,
  Briefcase,
  Code2,
  Workflow,
  Lightbulb,
  Cpu,
  RefreshCcw,
  Plus,
  Minus,
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA
══════════════════════════════════════ */
export const metadata = {
  title: 'Enterprise Data, AI & Software Solutions | AI Solution Technologies',
  description:
    'Comprehensive digital transformation services spanning Microsoft Fabric, Data Engineering, AI Systems, Cloud Migration, and Custom Software Development.',
};

/* ══════════════════════════════════════
   DATA & CONTENT
══════════════════════════════════════ */
const techEcosystem = [
  'Microsoft Fabric',
  'Power BI',
  'Azure Data Lake',
  'Databricks',
  'Snowflake',
  'OpenAI / LLMs',
  'Next.js / React',
  'Node.js & Python',
  'Dynamics 365',
  'AWS & GCP',
  'Terraform',
];

const mainServices = [
  {
    icon: Database,
    number: '01',
    title: 'Microsoft Fabric',
    slug: '/services/microsoft-fabric',
    description: 'End-to-end analytics and data platform implementation uniting your entire data estate.',
    subservices: [
      'Microsoft Fabric Implementation',
      'Fabric Lakehouse & Data Engineering',
      'Fabric Data Warehouse',
      'Fabric Real-Time Intelligence',
      'Fabric Power BI & Semantic Models',
      'Fabric Data Activator & Governance',
    ],
    color: 'blue',
  },
  {
    icon: Network,
    number: '02',
    title: 'Data Engineering & Integration',
    slug: '/services/data-engineering-integration',
    description: 'Robust pipelines and scalable infrastructure engineered to move and transform data reliably.',
    subservices: [
      'Data Pipeline Architecture',
      'ETL / ELT Services',
      'Data Integration Solutions',
      'API & System Integration',
      'Real-Time Data Processing',
    ],
    color: 'indigo',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Data Modelling & Warehousing',
    slug: '/services/data-modelling-warehousing',
    description: 'Structuring your data for optimal query performance, accuracy, and enterprise scalability.',
    subservices: [
      'Data Architecture Design',
      'Dimensional Modelling',
      'Master Data Management (MDM)',
      'Data Warehouse Solutions',
      'Data Quality Management',
    ],
    color: 'sky',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Business Intelligence & Analytics',
    slug: '/services/business-intelligence-analytics',
    description: 'Transforming raw data into actionable visual insights for executive and operational decision-making.',
    subservices: [
      'Power BI Consulting',
      'CFO & Executive Dashboards',
      'Self-Service BI Enablement',
      'Operational Analytics',
      'Advanced Analytics & Forecasting',
    ],
    color: 'teal',
  },
  {
    icon: BrainCircuit,
    number: '05',
    title: 'AI & Intelligent Systems',
    slug: '/services/ai-intelligent-systems',
    description: 'Deploying secure, custom artificial intelligence to automate workflows and uncover hidden patterns.',
    subservices: [
      'AI on ERP & Finance Systems',
      'AI Financial Reconciliation',
      'Enterprise RAG Implementation',
      'Private Enterprise AI Assistant',
      'AI Anomaly Detection',
      'Agentic AI & Automation',
    ],
    color: 'cyan',
  },
  {
    icon: CloudUpload,
    number: '06',
    title: 'Cloud Migration & Modernisation',
    slug: '/services/cloud-migration-modernisation',
    description: 'Seamlessly transitioning legacy infrastructure to agile, resilient, and secure cloud environments.',
    subservices: [
      'Cloud Strategy & Roadmap',
      'Azure / AWS Migration',
      'ERP Cloud Migration Data Layer',
      'Data Platform Build',
      'DevOps for Data',
    ],
    color: 'blue',
  },
  {
    icon: ShieldCheck,
    number: '07',
    title: 'Data Governance & Compliance',
    slug: '/services/data-governance-compliance',
    description: 'Establishing strict frameworks to secure assets, ensure privacy, and maintain regulatory adherence.',
    subservices: [
      'Data Governance Frameworks',
      'Microsoft Purview',
      'Privacy & Regulatory Compliance',
      'Security & Access Control',
      'AI Governance & Compliance',
    ],
    color: 'indigo',
  },
  {
    icon: Briefcase,
    number: '08',
    title: 'CRM & Business Applications',
    slug: '/services/crm-business-applications',
    description: 'Connecting customer data and operational platforms to drive unified business intelligence.',
    subservices: [
      'Dynamics 365 Integration',
      'CRM Analytics & Reporting',
      'Cortex Intell Platform',
      'Power Platform Consulting',
      'Payroll Compliance & Remediation',
    ],
    color: 'sky',
  },
  {
    icon: Code2,
    number: '09',
    title: 'Custom Web & Software Development',
    slug: '/services/custom-web-software-development',
    description: 'Bespoke web applications and enterprise software systems built for high performance and scale.',
    subservices: [
      'Custom Web Application Development',
      'Enterprise Software Development',
    ],
    color: 'teal',
  },
];

const methodology = [
  {
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'Deep-dive analysis into your current data ecosystem, business objectives, and technical bottlenecks.',
  },
  {
    icon: Workflow,
    title: 'Architecture Blueprinting',
    description: 'Designing robust, scalable cloud and data architectures mapped strictly to your operational requirements.',
  },
  {
    icon: Cpu,
    title: 'Iterative Engineering',
    description: 'Agile development and integration with regular milestone deliverables and transparent code reviews.',
  },
  {
    icon: RefreshCcw,
    title: 'Deployment & Handoff',
    description: 'Zero-downtime migrations, automated CI/CD deployment, comprehensive training, and IP transfer.',
  },
];

const industries = [
  'Financial Services',
  'Healthcare & Life Sciences',
  'Manufacturing & Supply Chain',
  'Retail & E-Commerce',
  'Energy & Utilities',
  'Public Sector',
  'Telecommunications',
  'Professional Services',
];

const faqs = [
  {
    q: 'How do you ensure data security during a cloud migration?',
    a: 'We implement zero-trust architectures, end-to-end encryption (at rest and in transit), and strict Role-Based Access Control (RBAC). Our migrations utilize secure private links and comply with industry standards like SOC2, GDPR, and HIPAA.',
  },
  {
    q: 'Can you integrate custom AI models with our existing ERP system?',
    a: 'Yes. We specialize in securely connecting Private Enterprise AI Assistants and RAG (Retrieval-Augmented Generation) implementations directly into core ERP systems to automate financial reconciliation, anomaly detection, and reporting without exposing sensitive data.',
  },
  {
    q: 'What is your typical engagement timeline?',
    a: 'Timelines vary by scope. Focused BI and dashboarding projects can take 4-8 weeks, while comprehensive enterprise data warehousing or custom software platforms typically range from 12 to 24 weeks, delivered in bi-weekly agile sprints.',
  },
  {
    q: 'Do we retain ownership of the developed software and data pipelines?',
    a: 'Absolutely. We operate on a 100% intellectual property transfer model. Upon project completion and final milestone sign-off, all source code, architecture blueprints, and data models are fully owned by your organization.',
  },
];

const colorMap = {
  blue: {
    icon: 'bg-blue-50 text-blue-600',
    text: 'text-blue-600',
    link: 'text-blue-600 hover:text-blue-700',
    hover: 'hover:border-blue-300',
  },
  sky: {
    icon: 'bg-sky-50 text-sky-600',
    text: 'text-sky-600',
    link: 'text-sky-600 hover:text-sky-700',
    hover: 'hover:border-sky-300',
  },
  indigo: {
    icon: 'bg-indigo-50 text-indigo-600',
    text: 'text-indigo-600',
    link: 'text-indigo-600 hover:text-indigo-700',
    hover: 'hover:border-indigo-300',
  },
  teal: {
    icon: 'bg-teal-50 text-teal-600',
    text: 'text-teal-600',
    link: 'text-teal-600 hover:text-teal-700',
    hover: 'hover:border-teal-300',
  },
  cyan: {
    icon: 'bg-cyan-50 text-cyan-600',
    text: 'text-cyan-600',
    link: 'text-cyan-600 hover:text-cyan-700',
    hover: 'hover:border-cyan-300',
  },
};

/* ══════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans antialiased selection:bg-blue-500/30">
      {/* CSS ANIMATIONS FOR MARQUEE AND FAQ */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee { 0%{ transform:translateX(0); } 100%{ transform:translateX(-50%); }}
          .anim-marquee { animation: marquee 30s linear infinite; }
          
          /* Smooth accordion expansion */
          details > summary { list-style: none; }
          details > summary::-webkit-details-marker { display: none; }
          details[open] summary ~ * { animation: sweep .3s ease-in-out; }
          @keyframes sweep {
            0%    {opacity: 0; margin-top: -10px}
            100%  {opacity: 1; margin-top: 0px}
          }
        `,
        }}
      />

      {/* ══════════ ADVANCED VIDEO HERO ══════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-36 border-b border-white/5 bg-[#020817]">
        
        {/* HTML5 Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            // Replace with your actual video source
            src="https://cdn.pixabay.com/video/2022/02/16/107800-678038699_large.mp4"
          >
            Your browser does not support the video tag.
          </video>
          {/* Gradients and Overlays to ensure text pops */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/40 via-transparent to-[#020817]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            Solutions & Capabilities
          </span>
          
          {/* Heading with 2 Plain Colors */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
            Enterprise Data, AI & <br className="hidden sm:block" />
            <span className="text-blue-500">Software Engineering</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light mb-12">
            Transforming complex data landscapes into intelligent, scalable, and secure operational assets. We provide end-to-end architecture, AI implementation, and bespoke software development to modernize your enterprise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] w-full sm:w-auto justify-center"
            >
              Consult an Architect
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/20 w-full sm:w-auto justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ TECH ECOSYSTEM MARQUEE ══════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {[1, 2, 3].map((set) => (
            <React.Fragment key={set}>
              {techEcosystem.map((tech, i) => (
                <React.Fragment key={i}>
                  <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">
                    {tech}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ══════════ SERVICES OVERVIEW & 9 CORE AREAS ══════════ */}
      <section id="services" className="py-32 bg-[#fafbfe] scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#020817] mb-6">
              9 Core Service Capabilities
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              From foundational Microsoft Fabric data engineering to deployable agentic AI and custom full-stack web platforms, our multidisciplinary teams deliver unified technical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((s) => {
              const Icon = s.icon;
              // @ts-ignore
              const c = colorMap[s.color] || colorMap.blue;
              return (
                <div
                  key={s.number}
                  className={`group rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden relative z-10 hover:shadow-2xl ${c.hover}`}
                >
                  {/* Accent Top Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${c.icon.split(' ')[0]} bg-opacity-100`} style={{ backgroundColor: 'currentColor' }} />
                  
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.icon}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-slate-100 transition-colors duration-500 group-hover:text-slate-200">
                        {s.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-[#020817] mb-4">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 font-light mb-8 leading-relaxed min-h-[4rem]">
                      {s.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Subservices
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {s.subservices.map((sub, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <Plus className={`w-4 h-4 shrink-0 mt-0.5 ${c.text} opacity-50 group-hover/item:opacity-100 group-hover/item:rotate-90 transition-all duration-300`} />
                            <span className="text-sm font-medium text-slate-600 leading-snug group-hover/item:text-[#020817] transition-colors">
                              {sub}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Main Service Link */}
                      <Link 
                        href={s.slug}
                        className={`inline-flex items-center text-sm font-bold transition-all ${c.link} group/btn`}
                      >
                        Explore this service
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ DELIVERY METHODOLOGY ══════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#020817]">
              Delivery Methodology
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-slate-200 z-0" />
            
            {methodology.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-[8px] border-white flex items-center justify-center mb-6 shadow-[0_0_0_1px_rgba(226,232,240,1)] group-hover:scale-110 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#020817] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ INDUSTRIES ══════════ */}
      <section className="py-24 bg-[#020817] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-2xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Architecting intelligence across <span className="text-blue-400">complex industries.</span>
              </h2>
              <p className="text-slate-400 font-light text-lg leading-relaxed mb-8">
                We understand that every sector has unique regulatory constraints, latency requirements, and data velocity challenges. Our solutions are explicitly tailored to industry-specific operational realities, ensuring rapid adoption and compliant scaling.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors group"
              >
                View our Industry Case Studies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default text-center sm:text-left">
                  <span className="text-sm font-medium text-slate-200">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ACCORDION FAQ SECTION (NO JS STATE REQUIRED) ══════════ */}
      <section className="py-32 bg-[#fafbfe]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4">
              Clarity & Transparency
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#020817]">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 md:p-8 text-[#020817] select-none">
                  <h4 className="text-lg font-semibold tracking-tight flex items-start gap-4">
                    <span className="text-blue-500 font-black">Q.</span>
                    {faq.q}
                  </h4>
                  <span className="relative size-5 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors">
                    <Plus className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" />
                    <Minus className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-slate-600 font-light leading-relaxed md:pl-[4.5rem]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="pb-32 px-6 bg-[#fafbfe]">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.28)]">
          {/* Decorative rings */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-4 block">
              Start Your Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Ready to unify your data and deploy intelligent systems?
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Connect with our lead architects to discuss your infrastructure, analyze your operational bottlenecks, and blueprint a scalable, future-proof solution.
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