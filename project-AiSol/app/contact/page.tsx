'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, ChevronDown } from 'lucide-react';

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const faqs = [
  {
    q: 'How long does an enterprise AI implementation typically take?',
    a: 'Timelines scale based on infrastructure complexity and data readiness. Rapid deployment modules go live in 6–8 weeks, while full-scale digital transformations average 3–6 months from discovery to full production.',
  },
  {
    q: 'What is your operational engagement model?',
    a: 'We offer agile, hybrid models tailored to enterprise needs — from dedicated project-based architecture delivery to embedded engineering teams functioning as an extension of your CTO office.',
  },
  {
    q: 'Do you provide post-deployment maintenance?',
    a: 'Yes. We provide comprehensive continuous monitoring to guard against data drift, optimize compute efficiency, and routinely upgrade models to scale with your growth.',
  },
  {
    q: 'Can your AI solutions integrate with our legacy tech stack?',
    a: 'Absolutely. A core strength is seamlessly integrating modern AI architectures into existing cloud infrastructure or on-premise servers via secure, robust API endpoints.',
  },
];

const offices = [
  {
    region: 'Australia',
    role: 'Global Headquarters',
    address: '33 East Street, Granville',
    city: 'Sydney, NSW 2142',
    flagUrl: 'https://flagcdn.com/au.svg',
    status: 'Primary Node',
    accent: 'from-blue-500 to-blue-700',
    dot: 'bg-blue-500',
  },
  {
    region: 'United Arab Emirates',
    role: 'MENA Enterprise Hub',
    address: 'Dubai Technology Center',
    city: 'Dubai, UAE',
    flagUrl: 'https://flagcdn.com/ae.svg',
    status: 'Active',
    accent: 'from-sky-400 to-cyan-600',
    dot: 'bg-sky-400',
  },
  {
    region: 'Saudi Arabia',
    role: 'Digital Transformation',
    address: 'Riyadh Digital City',
    city: 'Riyadh, KSA',
    flagUrl: 'https://flagcdn.com/sa.svg',
    status: 'Active',
    accent: 'from-violet-500 to-purple-700',
    dot: 'bg-violet-500',
  },
];

const contactCards = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Direct Line',
    value: '+61 466 558 862',
    href: 'tel:+61466558862',
    gradient: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-200',
    iconBg: 'bg-blue-600',
    hover: 'hover:border-blue-400',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'info@aisolutiontechnologies.com',
    href: 'mailto:info@aisolutiontechnologies.com',
    gradient: 'from-sky-500/10 to-cyan-600/5',
    border: 'border-sky-200',
    iconBg: 'bg-sky-500',
    hover: 'hover:border-sky-400',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Headquarters',
    value: '33 East Street, Granville\nNSW 2142, Sydney AU',
    href: null,
    gradient: 'from-violet-500/10 to-purple-600/5',
    border: 'border-violet-200',
    iconBg: 'bg-violet-600',
    hover: 'hover:border-violet-400',
  },
];

/* ══════════════════════════════════════
   COMPONENT
══════════════════════════════════════ */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes spin-ring {
          to { transform: rotate(360deg); }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.25; }
          50%       { transform: translateY(-30px) scale(1.08); opacity: 0.4; }
        }
        @keyframes shimmer-bar {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }
        .animate-spin-ring {
          animation: spin-ring 7s linear infinite;
        }
        .animate-float-a {
          animation: float-orb 8s ease-in-out infinite;
        }
        .animate-float-b {
          animation: float-orb 11s ease-in-out infinite reverse;
        }
        .shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          animation: shimmer-bar 3s ease-in-out infinite;
        }
        .faq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-panel.open {
          grid-template-rows: 1fr;
        }
        .faq-inner { overflow: hidden; }
      `}</style>

      <main className="min-h-screen bg-[#f4f6fb] font-sans selection:bg-blue-500/30">

        {/* ════════ HERO ════════ */}
        <section className="relative pt-32 pb-32 md:pt-52 md:pb-40 px-6 overflow-hidden bg-[#020817]">
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

          {/* Floating orbs */}
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/25 blur-[100px] pointer-events-none animate-float-a" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-[110px] pointer-events-none animate-float-b" />
          <div className="absolute top-1/2 right-10 w-[250px] h-[250px] rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none animate-float-a" style={{ animationDelay: '3s' }} />


          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-300 uppercase mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Initiate Contact
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white tracking-tight leading-[1.06] mb-6">
              Let's Build The<br className="hidden md:block" />{' '}
              <span
                className="font-black"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 45%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Future Together.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Connect with our engineering architects to map out a technology strategy that
              accelerates your enterprise workflows and operationalises your data.
            </p>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[['&lt; 4 hrs', 'Response time'], ['3 Continents', 'Global reach'], ['98%', 'Client retention']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div
                    className="text-2xl font-black mb-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #93c5fd, #c4b5fd)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    dangerouslySetInnerHTML={{ __html: num }}
                  />
                  <div className="text-xs text-slate-500 tracking-widest uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CONTACT MATRIX ════════ */}
        <section className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* LEFT: Contact cards */}
            <div className="w-full lg:col-span-5 space-y-4">

              {/* Availability tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available · Mon – Fri, 9AM – 6PM AEST
              </div>

              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className={`group relative flex items-start gap-5 bg-white border ${card.border} ${card.hover} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
                >
                  {/* Subtle gradient fill */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  {/* Icon */}
                  <div className={`shrink-0 w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    {card.icon}
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">{card.label}</p>
                    {card.href ? (
                     <a 
                        href={card.href}
                        className="font-bold text-[#0f172a] hover:text-blue-600 transition-colors leading-snug break-all"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="font-bold text-[#0f172a] leading-snug whitespace-pre-line">{card.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Decorative node map */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-[#020817] p-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-4 relative">Network Status</p>
                <div className="relative flex flex-col gap-3">
                  {offices.map((o) => (
                    <div key={o.region} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${o.dot} shadow-[0_0_6px_currentColor]`} />
                        <span className="text-sm text-slate-300 font-medium">{o.region}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">{o.status}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: Form with animated border */}
            <div className="w-full lg:col-span-7">
              {/* Spinning gradient ring wrapper */}
              <div className="relative rounded-[2.5rem] p-[2px] overflow-hidden">
                {/* The conic gradient that spins */}
                <div
                  className="absolute animate-spin-ring"
                  style={{
                    inset: '-120%',
                    background: 'conic-gradient(from 0deg, transparent 30%, #3b82f6 45%, #818cf8 55%, #22d3ee 65%, transparent 75%)',
                  }}
                />
                {/* Form card */}
                <div className="relative bg-white rounded-[2.4rem] p-8 sm:p-12 shadow-[0_40px_80px_-20px_rgba(148,163,184,0.12)]">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-black text-[#0f172a] tracking-tight mb-1">Send a Message</h2>
                      <p className="text-slate-400 text-sm font-light">We typically reply within 4 business hours.</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-700 uppercase tracking-widest shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </div>
                  </div>

                  {/* ── UseBasin form ── */}
                  <form
                    action="https://usebasin.com/f/271030bbdeb3"
                    method="POST"
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text" id="name" name="name" required
                          placeholder="Sarah Chen"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-300 text-sm focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email" id="email" name="email" required
                          placeholder="sarah@enterprise.com"
                          className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-300 text-sm focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        Company Name
                      </label>
                      <input
                        type="text" id="company" name="company"
                        placeholder="Your Organisation"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-300 text-sm focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="service" className="block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        Service Interest
                      </label>
                      <select
                        id="service" name="service"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] text-sm focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select a service area…</option>
                        <option value="ai-strategy">AI Strategy & Consulting</option>
                        <option value="ml-engineering">ML Engineering & Deployment</option>
                        <option value="data-platform">Data Platform Architecture</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        Project Details <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={4}
                        placeholder="Describe your infrastructure challenges or goals…"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[#0f172a] placeholder-slate-300 text-sm focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Honeypot spam trap (hidden from real users) */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />

                    <button
                      type="submit"
                      className="group w-full px-8 py-4 font-bold text-white rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #7c3aed 100%)',
                        backgroundSize: '200% 100%',
                        boxShadow: '0 10px 30px -8px rgba(37,99,235,0.45)',
                      }}
                    >
                      <span className="shimmer absolute inset-0 rounded-xl" />
                      <span className="relative">Send Message</span>
                      <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <p className="text-center text-[11px] text-slate-400 font-light">
                      🔒 Your information is kept strictly confidential and never shared.
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ════════ GLOBAL OFFICES ════════ */}
        <section className="py-24 px-6 bg-[#020817] overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase mb-3 block">Global Network</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Three Continents.{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #c4b5fd)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  One Mission.
                </span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto mt-3 font-light text-sm">
                Architecture hubs positioned across strategic international markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm p-8 hover:bg-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Top gradient stripe */}
                  <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${office.accent} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-8 rounded overflow-hidden shadow-md border border-white/10 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={office.flagUrl}
                        alt={`${office.region} flag`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black tracking-widest text-slate-400 uppercase">
                      <span className={`w-1.5 h-1.5 rounded-full ${office.dot} animate-pulse`} />
                      {office.status}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-1">{office.region}</h3>
                  <p
                    className="text-[10px] font-black tracking-widest uppercase mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${office.accent.includes('blue') ? '#60a5fa' : office.accent.includes('sky') ? '#38bdf8' : '#a78bfa'}, ${office.accent.includes('blue') ? '#818cf8' : office.accent.includes('sky') ? '#22d3ee' : '#c4b5fd'})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {office.role}
                  </p>

                  <div className="space-y-0.5">
                    <p className="text-slate-300 text-sm font-medium">{office.address}</p>
                    <p className="text-slate-500 text-sm font-light">{office.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase mb-3 block">Knowledge Base</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-blue-200 bg-blue-50/40 shadow-[0_4px_20px_-8px_rgba(37,99,235,0.12)]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                    >
                      <span className={`font-bold text-base transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
                        {faq.q}
                      </span>
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {/* Smooth expand */}
                    <div className={`faq-panel ${isOpen ? 'open' : ''}`}>
                      <div className="faq-inner">
                        <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed font-light">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}