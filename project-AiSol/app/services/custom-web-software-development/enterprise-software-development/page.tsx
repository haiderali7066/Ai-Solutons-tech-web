import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Code2,
  Cpu,
  Users,
  Clock,
  ShieldCheck,
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';

/* ══════════════════════════════════════
   METADATA (Server-Side SEO)
══════════════════════════════════════ */
export const metadata = {
  title: 'Enterprise Software Development | AI Solution Technologies',
  description: 'Build mission-critical, secure, and highly scalable enterprise applications designed to interface natively with your modern AI and data infrastructure.',
};

/* ══════════════════════════════════════
   DATA STRUCTURES & EXPANDED CONTENT
══════════════════════════════════════ */
const problems = [
  'Legacy systems slowing down core operations and fracturing workflows',
  'Off-the-shelf software requiring expensive, counter-intuitive customization',
  'Monolithic codebases burdened with immense technical debt',
  'Applications operating in siloes with no native integration for AI models',
  'Frequent downtime, performance bottlenecks, or security vulnerabilities',
  'Development initiatives stalled due to lack of specialized engineering talent',
];

const deliverables = [
  'Enterprise architecture & microservices design',
  'Cloud-native backend engineering (Node.js, .NET Core, Java, Go)',
  'Modern, high-performance web frontiers (React, Next.js)',
  'Legacy application modernization & refactoring',
  'Robust API design & enterprise service bus (ESB) integrations',
  'Strict role-based access control (RBAC) & enterprise security compliance',
  'Automated CI/CD pipelines & infrastructure as code (IaC)',
  'DevOps deployment, continuous monitoring, and SLA-backed support',
];

const industries = ['Logistics & Supply Chain', 'Manufacturing', 'Financial Services', 'Healthcare', 'Retail', 'Energy & Utilities'];
const roles = ['CIO', 'CTO', 'VP of Engineering', 'Head of Applications', 'CEO'];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT (100% Server Side)
══════════════════════════════════════ */
export default function EnterpriseSoftwareServicePage() {
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
      `}} />

      {/* ════════ HERO SECTION (WITH BACKGROUND IMAGE) ════════ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 border-b border-white/5">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0 bg-[#020817]">
          {/* High-quality enterprise software/engineering abstract image */}
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2000" 
            alt="Enterprise Technology Architecture" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/90 via-[#0a1128]/80 to-[#020817]" />
          
          {/* Grid Pattern */}
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
          <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
             <Code2 className="w-5 h-5 text-blue-400" />
             <div className="w-1/2 h-2 bg-blue-500/20 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="w-full h-3 bg-blue-500/10 rounded-sm"></div>
            <div className="w-4/5 h-3 bg-blue-400/20 rounded-sm"></div>
            <div className="w-full h-3 bg-indigo-500/30 rounded-sm"></div>
          </div>
        </div>

        <div className="absolute left-[5%] bottom-[15%] w-48 h-48 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-md p-4 anim-float-delayed hidden lg:flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full border-4 border-blue-500/20 border-t-blue-400"></div>
          <div className="absolute w-20 h-20 rounded-full border-4 border-emerald-500/20 border-b-emerald-400"></div>
          <ShieldCheck className="absolute w-8 h-8 text-white/50" />
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none anim-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-xl mb-8">
            <Sparkles className="w-4 h-4" />
            Core Engineering Services
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white font-syne">
            Custom enterprise systems built for flawless scale 
            <span className="block mt-3 bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent pb-2">
              — integrated with AI.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Ditch the constraints of rigid legacy applications. We engineer secure, multi-tenant cloud platforms and complex microservices that synchronize perfectly with your operational datasets.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]"
            >
              Consult with our software architects
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
          {[1, 2, 3].map((set) => (
            <React.Fragment key={set}>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Next.js & React</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">.NET Core</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Node.js</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">Kubernetes</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-bold tracking-widest text-slate-600 uppercase">AWS & Azure</span>
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
            
            <Layers className="absolute -right-10 -top-10 w-48 h-48 text-slate-50 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none" />
            
            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-[#020817] font-light font-syne">
              "Standard development teams treat apps like disconnected silos. We build the infrastructure from an data-first mindset: <strong className="font-black text-blue-600 relative inline-block">engineering enterprise software with native data pipelines<span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 -z-10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span></strong>, fully robust APIs, and auditable logic chains so your systems are ready for immediate AI adoption."
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

      {/* ════════ CASE STUDY ════════ */}
      <section className="py-24 bg-[#fafbfe] border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden bg-[#020817] flex flex-col lg:flex-row border border-slate-800 shadow-2xl relative group">
            
            {/* Animated Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 z-20"></div>

            {/* Image Side */}
            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics Application Infrastructure" 
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
              <Terminal className="w-16 h-16 text-blue-500/10 absolute right-10 top-10 transform group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-3xl md:text-4xl font-black text-white font-syne mb-6">
                Supply Chain Platform Modernization
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
                An international logistics provider replaced a highly unstable legacy core system with a custom microservices architecture. The new system processes millions of cargo records seamlessly and natively links operational telematics directly into corporate analytic endpoints.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2 flex items-center gap-2">
                    50% <Cpu className="w-5 h-5 text-emerald-400 transform group-hover/stat:scale-110 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Faster Processing Time</div>
                  <div className="text-slate-500 text-sm mt-1">across heavy transactional workflows</div>
                </div>
                <div className="group/stat">
                  <div className="text-4xl font-black text-white mb-2 flex items-center gap-2">
                    99.99% <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover/stat:scale-110 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">System Availability</div>
                  <div className="text-slate-500 text-sm mt-1">sustained under peak seasonal loads</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ LOGISTICS & TARGET AUDIENCE ════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Target Audience */}
            <div className="lg:col-span-7 rounded-2xl bg-[#fafbfe] border border-slate-200 p-8 md:p-12 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-bold text-[#020817] mb-10 uppercase tracking-wide flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" /> Who this is for
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Core Industries</h4>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map(ind => (
                    <span key={ind} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default">
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

            {/* Logistics (Delivery) */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              
              <div className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:scale-125 transition-transform duration-700">
                  <Clock className="w-40 h-40 -mb-10 -mr-10 text-blue-900" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Delivery Timeline</h4>
                <div className="text-3xl md:text-4xl font-black text-[#020817] font-syne mb-2">12–24 weeks</div>
                <p className="text-slate-500 text-sm font-light">From initial scoping validation to absolute deployment</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ PREMIUM CTA SECTION ════════ */}
      <section className="pb-24 px-6 bg-[#fafbfe]">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.28)]">
          {/* Decorative floating rings */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-4 block">Strategic Engineering</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Ready to engineer your next core platform?
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-10 font-light">
              Book a 30-minute conversation. We will evaluate your current system constraints, explore functional requirements, and frame out a definitive modernization blueprint — completely obligation free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-sm inline-flex items-center justify-center gap-2 group"
              >
                Book a 30-minute conversation 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}