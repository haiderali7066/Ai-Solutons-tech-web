import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ChevronDown } from 'lucide-react';

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const faqs = [
  {
    q: 'How long does an enterprise AI implementation typically take?',
    a: 'Timelines scale based on infrastructure complexity and data readiness. Most rapid deployment modules are live within 6–8 weeks, while full-scale enterprise digital transformations average 3–6 months from discovery to full production.',
  },
  {
    q: 'What is your operational engagement model?',
    a: 'We offer agile, hybrid models tailored to enterprise needs. This ranges from dedicated project-based architecture delivery to embedded engineering teams functioning as an extension of your CTO office.',
  },
  {
    q: 'Do you provide post-deployment maintenance?',
    a: 'Yes. We provide comprehensive continuous post-launch monitoring to guard against data drift, optimize compute efficiency, and routinely upgrade models to scale with your growth.',
  },
  {
    q: 'Can your AI solutions integrate with our legacy tech stack?',
    a: 'Absolutely. A core strength of AI Solution Technologies is seamlessly integrating modern trained AI architectures into existing cloud infrastructure or on-premise servers utilizing secure, robust API endpoints.',
  },
];

const offices = [
  {
    region: 'Australia',
    role: 'Global Headquarters',
    address: '33 East Street, Granville',
    city: 'Sydney, NSW 2142',
    flagUrl: 'https://flagcdn.com/au.svg',
    color: 'bg-blue-600'
  },
  {
    region: 'United Arab Emirates',
    role: 'MENA Enterprise Hub',
    address: 'Dubai Technology Center',
    city: 'Dubai, UAE',
    flagUrl: 'https://flagcdn.com/ae.svg',
    color: 'bg-sky-500'
  },
  {
    region: 'Saudi Arabia',
    role: 'Digital Transformation',
    address: 'Riyadh Digital City',
    city: 'Riyadh, KSA',
    flagUrl: 'https://flagcdn.com/sa.svg',
    color: 'bg-indigo-600'
  }
];

/* ══════════════════════════════════════
   MAIN SERVER-SIDE PAGE COMPONENT
══════════════════════════════════════ */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-500/30">

      {/* ════════ HERO SECTION (DARK MODE) ════════ */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden bg-[#020817]">
        {/* Ambient Tech Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Initiate Contact
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] mb-6">
            Let's Build The <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 font-bold">Future Together.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Connect with our engineering architects to map out a technology strategy that accelerates your enterprise workflows and operationalizes your data.
          </p>
        </div>
      </section>

      {/* ════════ CONTACT MATRIX (FORM & INFO) ════════ */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto -mt-16 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT: Premium Contact Info Cards */}
          <div className="w-full lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="group bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-6 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Direct Line</h4>
              <a href="tel:+61466558862" className="text-2xl font-bold text-[#0f172a] hover:text-blue-600 transition-colors">
                +61 466 558 862
              </a>
            </div>

            {/* Email Card */}
            <div className="group bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl mb-6 border border-sky-100 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Email Address</h4>
              <a href="mailto:info@aisolutiontechnologies.com" className="text-lg font-bold text-[#0f172a] hover:text-blue-600 transition-colors break-words">
                info@aisolutiontechnologies.com
              </a>
            </div>

            {/* Address Card */}
            <div className="group bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl mb-6 border border-indigo-100 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Headquarters</h4>
              <p className="text-lg font-bold text-[#0f172a] leading-tight">
                33 East Street, Granville<br/>
                <span className="text-slate-500 text-base font-medium">NSW 2142, Sydney, AU</span>
              </p>
            </div>

          </div>

          {/* RIGHT: Static Native Server Form */}
          <div className="w-full lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_30px_60px_-20px_rgba(148,163,184,0.15)]">
              <h2 className="text-3xl font-black text-[#0f172a] tracking-tight mb-2">Send a Message</h2>
              <p className="text-slate-500 text-sm mb-10 font-light">Our enterprise specialists typically respond within 4 hours during business days.</p>
              
              <form action="/api/contact" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1">Full Name</label>
                    <input
                      type="text" id="name" name="name" required
                      className="w-full px-5 py-4 bg-[#fafbfe] border border-slate-200 rounded-2xl text-[#0f172a] placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="e.g. Sarah Chen"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1">Work Email</label>
                    <input
                      type="email" id="email" name="email" required
                      className="w-full px-5 py-4 bg-[#fafbfe] border border-slate-200 rounded-2xl text-[#0f172a] placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="sarah@enterprise.com"
                    />
                  </div>
                </div>

                {/* Company Input */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1">Company Name</label>
                  <input
                    type="text" id="company" name="company"
                    className="w-full px-5 py-4 bg-[#fafbfe] border border-slate-200 rounded-2xl text-[#0f172a] placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    placeholder="Your Organization"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1">Project Details</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    className="w-full px-5 py-4 bg-[#fafbfe] border border-slate-200 rounded-2xl text-[#0f172a] placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                    placeholder="Briefly describe your infrastructure challenges or goals..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-5 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 bg-blue-700 hover:bg-blue-600 text-white shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-1 group"
                >
                  Initialize Deployment
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ════════ GLOBAL OFFICES MATRIX ════════ */}
      <section className="py-24 px-6 border-y border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-4">Global Network</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">Operating physical infrastructure and architecture hubs across strategic international sectors.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-[#fafbfe] border border-slate-200/60 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-8 rounded overflow-hidden shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={office.flagUrl} 
                      alt={`${office.region} flag`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full ${office.color} shadow-[0_0_12px_currentColor] animate-pulse`} />
                </div>
                <h3 className="text-2xl font-black text-[#0f172a] mb-1">{office.region}</h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">{office.role}</p>
                <div className="space-y-1">
                  <p className="text-slate-700 font-medium">{office.address}</p>
                  <p className="text-slate-500 text-sm font-light">{office.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ NATIVE ACCORDION SECTION ════════ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Knowledge Base</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group border border-slate-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden hover:border-blue-300 transition-colors duration-300"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 text-left outline-none">
                <span className="text-lg font-bold pr-8 text-slate-800 group-open:text-blue-700 transition-colors">
                  {faq.q}
                </span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-50 text-slate-400 group-open:bg-blue-50 group-open:text-blue-600 transition-all duration-300 group-open:rotate-180">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-slate-500 leading-relaxed font-light">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

    </main>
  );
}