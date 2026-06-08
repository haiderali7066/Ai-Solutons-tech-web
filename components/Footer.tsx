'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
  { label: "Power BI Implementation", href: "/services/power-bi-implementation" },
  { label: "CFO Dashboards", href: "/services/cfo-dashboards" },
  { label: "Microsoft Fabric", href: "/services/microsoft-fabric" },
  { label: "Enterprise AI Assistant", href: "/services/enterprise-ai-assistant" },
  { label: "AI on ERP & Finance", href: "/services/ai-on-erp" },
],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/portfolio" },
      { label: "Our Process", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Get a Quote", href: "/contact" },
    ],
  },
];

  const socials = [
    {
      label: "𝕏",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      label: "GitHub",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatGlow { 
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.12; } 
            50% { transform: translateY(-20px) scale(1.08); opacity: 0.22; } 
          } 
          .animate-bg-glow { animation: floatGlow 10s ease-in-out infinite; } 
          .footer-link-underline::after { 
            content: ''; position: absolute; width: 0; height: 1px; bottom: -2px; left: 0; 
            background-color: #00D2FF; transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
          } 
          .footer-link-hover:hover .footer-link-underline::after { width: 100%; }
        `
      }} />

      <footer className="relative bg-[#030303] border-t border-white/[0.04] overflow-hidden font-[Poppins,sans-serif]">
        
        {/* Dynamic Multi-layered Background Architecture */}
        <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
          {/* Layer 1: Premium Ambient Video Loop */}
          <div className="absolute inset-0 opacity-[0.12] mix-blend-screen backdrop-blur-[1px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              {/* Ultra-clean abstract dark cyber network loop */}
              <source src="https://assets.mixkit.co/videos/preview/mixkit-dark-abstract-background-with-connecting-lines-41551-large.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Layer 2: Color-Graded Lighting Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-1" />
          <div className="absolute top-[-250px] left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00D2FF]/8 to-transparent blur-[140px] animate-bg-glow" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-[-200px] right-[5%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00D2FF]/6 to-transparent blur-[160px] animate-bg-glow" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 z-10">
          
          {/* Strategic Pre-Footer Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20 mb-20 border-b border-white/[0.05] items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#00D2FF] font-medium">
                  Enterprise Consultation Division
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl text-white font-light tracking-[-0.02em] leading-[1.15]">
                Engineered for scale.<br /> Built for <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#00D2FF]">extraordinary</span> impact.
              </h3>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-4 bg-white hover:bg-blue-400 text-[#050505] hover:text-white border border-transparent hover:border-white/20 px-9 py-4.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,210,255,0.3)] group"
              >
                Initiate Architecture
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
              </Link>
            </div>
          </div>

          {/* Primary Ecosystem Data Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
            
            {/* Corporate Brand System Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <Link href="/" className="inline-flex items-center gap-3 group no-underline">
                  <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(0,210,255,0)] group-hover:drop-shadow-[0_0_20px_rgba(0,210,255,0.5)]">
                    <Image 
                      src="/logo.png" 
                      alt="AI Solution Tech Logo" 
                      width={38} 
                      height={38} 
                      className="object-contain rounded-full border border-white/10"
                    />
                  </div>
                  <span className="font-semibold text-xl text-white tracking-[-0.02em]">
                    AI Solution Technologies<span className="text-[#00D2FF]">.</span>
                  </span>
                </Link>
                <p className="text-white/40 text-[0.85rem] font-light leading-relaxed max-w-[310px]">
AI Solution Technologies is a Microsoft-aligned data, analytics and AI consultancy. We help enterprises in Australia, UAE and Saudi Arabia modernise reporting, build governed data foundations, and deploy AI on data they can audit.                </p>
              </div>

              {/* Social Indexing System */}
              <div className="flex gap-2.5">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/[0.02] border border-white/[0.05] hover:border-[#00D2FF]/30 rounded-lg flex items-center justify-center text-white/40 hover:text-[#00D2FF] transition-all duration-300 hover:bg-[#00D2FF]/5 hover:-translate-y-0.5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Structured Corporate Link Sub-Matrix */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {cols.map((col, cIdx) => (
                <div key={cIdx} className="space-y-5">
                  <h4 className="text-[0.68rem] font-medium uppercase tracking-[0.25em] text-white/80">
                    {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          className="footer-link-hover text-[0.85rem] font-light text-white/40 hover:text-[#00D2FF] relative pb-0.5 transition-colors duration-400 flex items-center w-fit group"
                        >
                          <span className="footer-link-underline relative">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Modern Strategic Corporate Newsletter Element */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[0.68rem] font-medium uppercase tracking-[0.25em] text-white/80">
                Global Briefing
              </h4>
              <p className="text-white/40 text-[0.82rem] font-light leading-relaxed">
                Receive our quarterly telemetry reports, market briefs, and architectural analyses directly.
              </p>
              <form className="relative flex items-center mt-2 group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Corporate email address" 
                  className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-[#00D2FF]/50 rounded-lg px-4 py-3 text-xs font-light text-white placeholder-white/20 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,210,255,0.05)]"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10 hover:bg-[#00D2FF] text-white hover:text-[#050505] text-xs font-medium transition-all duration-300"
                >
                  Join
                </button>
              </form>
            </div>

          </div>

          {/* Institutional Compliance & Watermark Line */}
          <div className="pt-10 border-t border-white/[0.04] flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
            
            {/* Ambient Watermark Branding */}
            <div className="select-none pointer-events-none">
              <span className="text-[clamp(1.2rem,4vw,2.5rem)] font-black text-white/40 tracking-[-0.04em] leading-none uppercase">
                AI SOLUTION TECHNOLOGIES
              </span>
            </div>

            {/* Governance, Attributions, & Sync Systems */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
              <div className="flex gap-6">
                {["Privacy Standards", "Terms of Protocol", "SLA Agreements"].map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="text-[0.72rem] font-light text-white/30 hover:text-[#00D2FF] transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              
              <span className="text-[0.72rem] font-light text-white/30 text-center sm:text-right tracking-wide">
                &copy; 2026 AI Solution Technologies. All protocol designs reserved. <br /> Developed by Devntom Solutions
              </span>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}