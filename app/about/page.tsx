'use client';

import React, { useState } from 'react';
import { 
  Target, Lightbulb, Clock, Shield, 
  Users, Zap, Award, BarChart, 
  ChevronRight, Building2, Globe2 
} from 'lucide-react';

/* ══════════════════════════════════════
   DATA STRUCTURES
══════════════════════════════════════ */
const companyTimeline = [
  {
    id: '2017', year: '2017', title: 'Foundation & Vision',
    description: 'Founded in 2017, we became an independent company and listed the same year. We started our path with a vision to meet the surging demand for data-centric intelligence. Our primary goal was engineering systems for data collection and oversight tailored specifically for smaller enterprises.',
    statLabel: 'Initial Market', statValue: 'SMB Sector'
  },
  {
    id: '2018', year: '2018', title: 'Product Creation & Alliances',
    description: 'Prioritized product creation, debuting a cloud-centric data unification hub that allowed firms to merge information from various origins. We forged alliances with local firms, proving the worth of high-quality data perspectives.',
    statLabel: 'Core Release', statValue: 'Cloud Hub v1'
  },
  {
    id: '2019', year: '2019-2021', title: 'Analytical Expansion',
    description: 'Broadened our offerings to incorporate analytical instruments and released sophisticated modeling and mapping software to assist users in pulling practical value from their logs. Remained sector-aligned, honing in on commerce and banking.',
    statLabel: 'Sector Focus', statValue: 'Finance & Retail'
  },
  {
    id: '2022', year: '2022', title: 'Applied AI & NLP',
    description: 'Our central objective was applying AI to tackle practical challenges. Initial ventures centered on natural language processing (NLP) and predictive modeling for the evolution and scaling of mid-market companies. Teamed up with regional brands to build momentum.',
    statLabel: 'Tech Focus', statValue: 'NLP Models'
  },
  {
    id: '2023', year: '2023', title: 'Integrity & Medical Scaling',
    description: 'Branched out into fresh sectors, starting with medical care and banking by providing customized AI services. Crafted frameworks to guarantee moral AI applications, earning a strong reputation in AI integrity and standards.',
    statLabel: 'Compliance', statValue: 'Ethical AI Frameworks'
  },
  {
    id: '2024', year: '2024', title: 'Unified Ecosystem & Green IT',
    description: 'Broadening and inventing with portfolio growth. Debuted a unified ecosystem merging diverse AI utilities (NLP, visual recognition, cloud hosting). Deployed AI modules for ecological preservation and bolstered headcount with global data experts.',
    statLabel: 'Workforce', statValue: 'Global Scale-up'
  }
];

const teamMembers = [
  {
    name: "Rania Jamil Choudhury",
    role: "Founder & CEO",
    img: "/rania.jpeg",
  },
  {
    name: "Osama Sagheer",
    role: "Full Stack Developer",
    img: "/osama.jpeg",
  },
  {
    name: "Ahmed Nadeem Khan",
    role: "Business Development Manager",
    img: "/ahmed-nadeem.jpeg",
  },
  {
    name: "Ahmed Khan",
    role: "Technical Lead",
    img: "/ahmed.jpeg",
  },
];

const whyUsFeatures = [
  { icon: Award, title: 'Quality Comes First', desc: 'Uncompromising standards in our code, algorithms, and service delivery.' },
  { icon: Users, title: 'Flexible Cooperation', desc: 'Agile engagement models designed to adapt to your enterprise scaling needs.' },
  { icon: Clock, title: 'On-time Delivery', desc: 'Rigorous project management ensuring milestones are met without fail.' },
  { icon: BarChart, title: 'Transparent Costs', desc: 'Clear, predictable pricing structures with no hidden architectural fees.' },
  { icon: Shield, title: 'Qualified Developers', desc: 'Vetted, elite engineering talent specializing in deep enterprise integration.' },
  { icon: Zap, title: 'Quick Scale-up', desc: 'Rapid resource deployment to accelerate your digital transformation timelines.' }
];

const corporateStats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '280+', label: 'Success Stories' },
  { value: '56K+', label: 'Companies Trust Us' },
  { value: '100%', label: 'Results Guaranteed' },
  { value: '12K+', label: 'Employees Globally' },
];

/* ══════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════ */
export default function AboutPage() {
  const [activeEra, setActiveEra] = useState<string>('2017');

  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-600/30 overflow-x-hidden text-slate-900">
      
      {/* ════════ SECTION 1: CINEMATIC HERO (DARK MODE) ════════ */}
      <section className="relative pt-36 pb-32 md:pt-48 md:pb-40 px-6 bg-[#020817]">
        {/* Background Graphic Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25 mix-blend-screen"
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-syne">
            Ai Solution Technologies
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium tracking-wide mb-8">
            We Provide You Flexible AI Solutions
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
AI Solution Technologies is a Microsoft-aligned data, analytics and AI consultancy. We help enterprises in Australia, UAE and Saudi Arabia modernise reporting, build governed data foundations, and deploy AI on data they can audit.          </p>
        </div>
      </section>

      {/* ════════ SECTION 2: GLOBAL METRICS BAR ════════ */}
      <section className="bg-blue-600 border-b border-blue-700 py-10 px-6 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-blue-500/50">
          {corporateStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-black text-white font-syne mb-1 drop-shadow-sm">{stat.value}</span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-200 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ SECTION 3: OUR HISTORY & STORY (NEW TEXT-HEAVY VISUAL SECTION) ════════ */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Our Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight font-syne">
              Our History & Foundation.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              We were founded in 2017, became an independent company at the end of 2017, and were listed the same year. Our innovation and expertise have positioned us as a key player in driving global AI transformation for businesses.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              What began as a localized data intelligence unit has rapidly expanded into a multinational enterprise architecture firm. Our staff growth has bolstered our headcount by onboarding top-tier data experts, developers, and client success agents across 30 countries in Europe and beyond, exponentially improving our operational output.
            </p>
            <div className="pt-6 flex gap-6">
              <div className="flex items-center gap-3">
                <Globe2 className="text-blue-600 w-8 h-8" />
                <span className="font-bold text-[#0f172a]">Global Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="text-blue-600 w-8 h-8" />
                <span className="font-bold text-[#0f172a]">Enterprise Scale</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
             <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                alt="Corporate Architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="text-4xl font-black font-syne mb-2">2017</div>
                <div className="text-sm tracking-widest uppercase text-blue-300 font-bold">Year of Inception</div>
              </div>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 4: EVOLUTIONARY TIMELINE / MAJOR MILESTONES ════════ */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* LEFT: Accordion List */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-8 font-syne">
              Major Milestones.
            </h2>
            
            <div className="flex flex-col border-b border-slate-200/60">
              {companyTimeline.map((item) => {
                const isOpen = activeEra === item.id;
                return (
                  <div key={item.id} className="border-t border-slate-200/60">
                    <button onClick={() => setActiveEra(item.id)} className="w-full py-5 flex items-center justify-between text-left transition-all duration-300 group focus:outline-none">
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-bold tracking-wider font-mono transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`}>
                          {item.year} //
                        </span>
                        <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#0f172a]' : 'text-slate-500 group-hover:text-slate-800'}`}>
                          {item.title}
                        </span>
                      </div>
                      <span className={`text-xl font-light transition-transform duration-300 px-2 ${isOpen ? 'text-blue-600 rotate-180' : 'text-slate-400'}`}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 ml-14">
                        <p className="text-slate-600 text-sm leading-relaxed font-light">{item.description}</p>
                        <div className="mt-4 pt-4 border-t border-slate-200 flex gap-8 items-center">
                          <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{item.statLabel}</div>
                            <div className="text-sm font-black text-blue-600 tracking-tight mt-0.5">{item.statValue}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Blueprint Visualizer Stack */}
          <div className="w-full lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[400px] flex flex-col items-center justify-center py-8">
              <svg className="absolute inset-y-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50% 0 Q 48% 25% 50% 50% T 50% 100%" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle r="4" fill="#2563eb" className="animate-pulse">
                  <animateMotion dur="8s" repeatCount="indefinite" path="M 50% 0 Q 48% 25% 50% 50% T 50% 100%" />
                </circle>
              </svg>

              {companyTimeline.map((item) => {
                const isSelected = activeEra === item.id;
                return (
                  <div
                    key={item.id} onClick={() => setActiveEra(item.id)}
                    className={`relative w-full max-w-[320px] h-[64px] rounded-full flex items-center justify-center border transition-all duration-500 cursor-pointer text-center z-10 ${
                      isSelected ? 'bg-[#0f172a] border-[#0f172a] text-white shadow-xl scale-105 z-20' : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    style={{ marginTop: '-12px' }}
                  >
                    <div className="px-6 flex flex-col items-center justify-center">
                      <span className={`text-sm font-bold tracking-tight font-syne ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </span>
                      <span className={`text-[9px] font-mono tracking-widest uppercase mt-0.5 ${isSelected ? 'text-blue-400 font-bold' : 'text-slate-400'}`}>
                        Fiscal Year {item.year}
                      </span>
                    </div>
                    {isSelected && <span className="absolute right-5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 5: CEO SPOTLIGHT & MISSION ════════ */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: CEO Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl shadow-blue-900/10 border border-slate-200 aspect-[4/5] group">
              <img 
                src="/rania.jpeg" 
                alt="Rania Jamil Choudhury - CEO" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase rounded mb-3">
                  Founder & Chief Executive Officer
                </span>
                <h3 className="text-3xl font-black text-white font-syne mb-1">Rania Jamil Choudhury</h3>
                <p className="text-blue-300 text-sm font-medium tracking-wide mb-4">Strategic | Innovative | Future-Focused</p>
                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* RIGHT: Corporate Mission & CEO Vision text */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#0f172a] font-syne mb-6">Meet Our CEO</h2>
              <p className="text-slate-600 leading-relaxed font-light mb-6 text-lg">
                Rania Jamil Choudhury leads Ai Solution Technologies' strategic direction, growth, and international expansion. With deep expertise across AI, data, enterprise technology, and digital transformation, she has positioned Ai Solution Technologies as a trusted partner for government and enterprise clients seeking secure, scalable, and intelligent solutions.
              </p>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                Her vision is to build more than a technology company. She is creating a platform-led business that helps organisations move from fragmented systems to integrated, AI-powered operations. Through Cortex Intell, Ai Solution Technologies is developing intelligent platforms that connect data, decisions, and automation to support the future of high-performing and autonomous enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <Target className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-[#0f172a] mb-3">Our Mission</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <Lightbulb className="w-8 h-8 text-sky-500 mb-4" />
                <h4 className="text-xl font-bold text-[#0f172a] mb-3">Our Vision</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  A vision statement for a company or organization focuses on the potential inherent in the company's future; it's about what they intend to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 6: WHY US (FEATURES GRID WITH IMAGE BG) ════════ */}
      <section className="relative py-24 px-6 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2 block">Our Differentiators</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-syne">
              Why Our Services are Better Than Others?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsFeatures.map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-24 px-6 bg-white overflow-hidden border-y border-slate-100">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">Partnerships</span>
    <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight font-syne">
      Brands We Work With.
    </h2>
  </div>

  {/* Logo Marquee Container with Masking */}
  <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    
    <div className="animate-marquee whitespace-nowrap flex items-center space-x-24 px-12">
      {['Microsoft', 'AWS Partner', 'Salesforce', 'Oracle', 'SAP', 'Cisco', 'Telstra', 'Westpac'].map((brand) => (
        <div key={brand} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
            <div className="w-3 h-3 bg-slate-400 group-hover:bg-white rounded-full transition-colors duration-500" />
          </div>
          <span className="text-xl font-black text-slate-300 group-hover:text-slate-800 transition-colors duration-500 font-syne tracking-tight">
            {brand}
          </span>
        </div>
      ))}
    </div>

    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-24 px-12">
      {['Microsoft', 'AWS Partner', 'Salesforce', 'Oracle', 'SAP', 'Cisco', 'Telstra', 'Westpac'].map((brand) => (
        <div key={`dup-${brand}`} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
            <div className="w-3 h-3 bg-slate-400 group-hover:bg-white rounded-full transition-colors duration-500" />
          </div>
          <span className="text-xl font-black text-slate-300 group-hover:text-slate-800 transition-colors duration-500 font-syne tracking-tight">
            {brand}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ════════ SECTION 8: THE TEAM ════════ */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-[#fafbfe]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">Our Expert Team Members</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight font-syne">Top Skilled Experts.</h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            Our team comprises experts in machine learning, data science, and software engineering, all committed to delivering cutting-edge AI products and services globally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-200 border border-slate-200">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold text-blue-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ SECTION 9: PREMIUM CTA ════════ */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.28)]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 font-syne">
              Ready to engineer your future?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-light">
              Join the 56,000+ companies utilizing Ai Solution Technologies to streamline operations and dominate their sectors globally.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                Work With Us <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}