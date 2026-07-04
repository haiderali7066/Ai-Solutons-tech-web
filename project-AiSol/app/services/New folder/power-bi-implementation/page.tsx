import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart3,
  Building2,
  Users,
  Clock,
  DollarSign,
  FileSpreadsheet,
  Database,
  Workflow,
  MonitorSmartphone,
  GraduationCap,
  ChevronDown
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA (Server-Side SEO)
══════════════════════════════════════ */
export const metadata = {
  title: 'Power BI Implementation & Dashboards | AI Solution Technologies',
  description: 'End-to-end Power BI implementation. We replace fragile Excel reporting with governed, automated dashboards your CFO actually trusts.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES & EXPANDED CONTENT
══════════════════════════════════════ */
const problems = [
  'Monthly reporting takes 5–10 working days',
  'Excel files breaking and out of sync',
  'Three departments, three different numbers',
  'No real-time KPI visibility',
  'Manual report compilation eating 20+ hours a week',
  'Decisions delayed waiting for reports',
];

const deliverables = [
  'Power BI Pro / Premium licensing strategy',
  'Data source connections (ERP, CRM, finance, ops)',
  'Star schema data modelling',
  'DAX measure development',
  'Executive dashboard design (3–7 dashboards)',
  'Row-level security (RBAC)',
  'Mobile-friendly layouts',
  'Hands-on training for your in-house team',
  '30-day post-launch support',
];

const processSteps = [
  {
    icon: <Database className="w-5 h-5" />,
    title: '1. Discovery & Architecture',
    desc: 'We map your existing data sources (ERP, CRM, SQL) and design the optimal data warehouse architecture.',
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: '2. Modelling & DAX',
    desc: 'Building the "Star Schema" foundation and programming the DAX measures for complex financial calculations.',
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    title: '3. Dashboard Design',
    desc: 'Creating high-fidelity, interactive dashboards tailored for executives, finance, and operations.',
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: '4. Handover & Training',
    desc: 'Deploying row-level security and training your team so they can confidently own and extend the models.',
  },
];

const faqs = [
  {
    q: 'Do we need Power BI Premium for this?',
    a: 'Not necessarily. For most mid-market organizations, Power BI Pro licenses ($10/user/month) are sufficient. We will audit your data volume and user count to recommend the most cost-effective licensing tier before we begin.'
  },
  {
    q: 'Can we connect to our legacy on-premise ERP?',
    a: 'Yes. We utilize the Microsoft On-Premises Data Gateway to create secure, scheduled refresh tunnels from your local servers (SQL, Oracle, or flat files) directly into the Power BI cloud.'
  },
  {
    q: 'Will my internal team be able to edit the dashboards?',
    a: 'Absolutely. We build "Golden Datasets" using best-practice Star Schema modelling. This means your internal analysts can connect to our published datasets and build their own reports without touching the underlying complex code.'
  }
];

const industries = ['Construction', 'Finance', 'Healthcare', 'Logistics', 'Professional Services', 'Government'];
const roles = ['CFO', 'Head of Finance', 'Operations Manager', 'Head of Reporting'];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT (100% Server Side)
══════════════════════════════════════ */
export default function PowerBIServicePage() {
  return (
    <main className="overflow-hidden bg-[#fafbfe] text-[#0f172a] font-sans selection:bg-blue-500/30">
      
      {/* PURE CSS ANIMATIONS INJECTED SERVER-SIDE */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes floatReverse { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(15px); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes gradientPan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        
        .anim-float { animation: float 6s ease-in-out infinite; }
        .anim-float-delayed { animation: floatReverse 7s ease-in-out infinite; }
        .anim-pulse { animation: pulseGlow 4s ease-in-out infinite; }
        .anim-marquee { animation: marquee 30s linear infinite; }
        .anim-gradient { background-size: 200% 200%; animation: gradientPan 10s ease infinite; }
        
        /* Native HTML Details/Summary Animation */
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] summary ~ * { animation: slideDown 0.3s ease-out forwards; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      {/* ════════ HERO SECTION ════════ */}
      <section className="relative overflow-hidden bg-[#020817] pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5 anim-gradient bg-gradient-to-br from-[#020817] via-[#0a1128] to-[#020817]">
        {/* Background Grid & Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Floating Abstract Dashboard Elements (CSS Animated) */}
        <div className="absolute right-[5%] top-[20%] w-64 h-40 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-md p-4 anim-float hidden lg:block shadow-2xl">
          <div className="w-1/2 h-3 bg-blue-500/20 rounded-full mb-4"></div>
          <div className="flex gap-2 mb-4">
            <div className="w-8 h-16 bg-blue-500/40 rounded-sm mt-auto"></div>
            <div className="w-8 h-20 bg-blue-400/60 rounded-sm mt-auto"></div>
            <div className="w-8 h-12 bg-blue-500/30 rounded-sm mt-auto"></div>
            <div className="w-8 h-24 bg-blue-500/80 rounded-sm mt-auto"></div>
          </div>
        </div>

        <div className="absolute left-[5%] bottom-[15%] w-48 h-48 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-md p-4 anim-float-delayed hidden lg:flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full border-4 border-blue-500/20 border-t-blue-400"></div>
          <div className="absolute w-20 h-20 rounded-full border-4 border-emerald-500/20 border-b-emerald-400"></div>
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none anim-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl mb-8">
            <BarChart3 className="w-4 h-4" />
            Service 01
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white font-syne">
            End-to-end Power BI — from data connection to dashboards 
            <span className="block mt-3 bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent pb-2">
              your CFO actually trusts.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            We replace fragile Excel reporting with governed Power BI dashboards. Connected to your ERP, finance and operational systems. Refreshing automatically. Mobile-friendly. Built so your team can extend them.
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

      {/* ════════ INTEGRATION MARQUEE ════════ */}
      <div className="bg-white border-b border-slate-100 py-6 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex gap-16 items-center anim-marquee px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Duplicated for seamless loop */}
          {[1, 2].map((set) => (
            <React.Fragment key={set}>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">SAP HANA</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Microsoft Dynamics 365</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Salesforce</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Oracle NetSuite</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">SQL Server</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Xero / QuickBooks</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════════ THE PITCH ════════ */}
      <section className="relative py-24 bg-[#fafbfe]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="group rounded-2xl bg-white border border-slate-200 p-10 md:p-14 text-center shadow-[0_10px_40px_rgba(15,23,42,0.03)] relative overflow-hidden transition-all duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]">
            
            {/* Animated Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <FileSpreadsheet className="absolute -right-10 -top-10 w-48 h-48 text-slate-50 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />
            
            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-[#020817] font-light font-syne">
              "If your team is exporting CSVs from your ERP into Excel every week — and the CFO doesn't fully trust the result — <strong className="font-black text-blue-600 relative inline-block">you need this.<span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span></strong>"
            </p>
            <p className="relative z-10 mt-6 text-slate-500 font-medium tracking-wide">
              End-to-end Power BI implementation: licensing strategy, data connections, modelling, DAX, dashboards, security, training.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ PROBLEMS VS DELIVERABLES ════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
            
            {/* Problems Column */}
            <div className="rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 border border-red-100">
                  <XCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#020817] font-syne">
                  Sound familiar?
                </h2>
              </div>
              
              <ul className="space-y-6">
                {problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-4 group cursor-default">
                    <div className="mt-0.5 shrink-0 bg-white rounded-full shadow-sm group-hover:scale-125 transition-transform duration-300">
                      <XCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-slate-600 leading-relaxed group-hover:text-[#020817] transition-colors">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included Column */}
            <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 md:p-12 shadow-xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none anim-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white font-syne">
                    What's included
                  </h2>
                </div>
                
                <ul className="space-y-6">
                  {deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group cursor-default">
                      <div className="mt-0.5 shrink-0 bg-[#020817] rounded-full group-hover:scale-125 transition-transform duration-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-slate-300 leading-relaxed group-hover:text-white transition-colors font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ IMPLEMENTATION PROCESS (NEW EXPANDED CONTENT) ════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase">
              Our Methodology
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-black tracking-tight text-[#020817] font-syne">
              The 3-to-8 Week Delivery Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 relative overflow-hidden group hover:border-blue-300 transition-colors duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-blue-50 transition-colors duration-500" />
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-[#020817] mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CASE STUDY ════════ */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-[#020817] flex flex-col lg:flex-row border border-slate-800 shadow-2xl relative group">
            
            {/* Animated Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 z-20"></div>

            {/* Image Side */}
            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Industry" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020817]" />
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg">
                  Case Study
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-10 md:p-16 relative z-10">
              <Building2 className="w-16 h-16 text-blue-500/10 absolute right-10 top-10 transform group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black text-white font-syne mb-6">
                Construction Group Overhaul
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                An Australian construction group (180 staff, 3 sites) had an 8–10 day monthly reporting cycle reliant on Excel exports from their ERP. We implemented a Power BI dashboard suite over 6 weeks.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2 flex items-center gap-2">
                    75% <ArrowRight className="w-5 h-5 text-emerald-400 transform rotate-45 group-hover/stat:-translate-y-1 group-hover/stat:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Drop in reporting effort</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2 flex items-center gap-2">
                    Daily <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover/stat:scale-110 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Project Profitability Review</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ LOGISTICS & TARGET AUDIENCE ════════ */}
      <section className="py-24 bg-[#fafbfe]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Target Audience */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-[#020817] mb-10 uppercase tracking-wide flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" /> Who this is for
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Core Industries</h4>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map(ind => (
                    <span key={ind} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors cursor-default">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Target Buyers</h4>
                <div className="flex flex-wrap gap-2.5">
                  {roles.map(role => (
                    <span key={role} className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics (Pricing & Delivery) */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <div className="rounded-2xl bg-[#020817] border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <DollarSign className="w-40 h-40 -mb-10 -mr-10" />
                </div>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">Investment</h4>
                <div className="text-3xl md:text-4xl font-black text-white font-syne mb-2">AUD $8K – $45K</div>
                <p className="text-slate-400 text-sm font-light">Most implementations sit at <strong className="text-white font-medium">$15–25K</strong></p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:scale-125 transition-transform duration-700">
                  <Clock className="w-40 h-40 -mb-10 -mr-10 text-blue-900" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Timeline</h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-2">3–8 weeks</div>
                <p className="text-slate-500 text-sm font-light">From initial kickoff to complete go-live</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ FAQ SECTION (NATIVE HTML INTERACTIVITY) ════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#020817] font-syne">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group rounded-xl border border-slate-200 bg-[#fafbfe] [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-[#020817]">
                  {faq.q}
                  <span className="relative ml-4 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-blue-600">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed font-light text-sm border-t border-slate-100 pt-4 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="bg-[#020817] px-6 py-24 border-t border-slate-800">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-slate-700 p-12 md:p-24 text-center shadow-2xl max-w-5xl mx-auto group">
          
          {/* Animated Background Rays */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent group-hover:opacity-[0.05] transition-opacity duration-1000"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-syne">
              Ready to discuss Power BI implementation?
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-300 font-light mb-10">
              Book a 30-minute conversation. We'll look at your current setup, discuss your goals, and outline what an engagement would look like — at no cost and no commitment.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-5 text-sm font-bold text-[#020817] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[0_15px_40px_rgba(251,191,36,0.3)] uppercase tracking-widest"
            >
              Book a 30-minute conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}