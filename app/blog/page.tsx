'use client';

import React from 'react';
import Link from 'next/link';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { 
  ArrowRight, Calendar, User, Sparkles, 
  BookOpen, ChevronRight, Mail, Hash 
} from 'lucide-react';

/* ══════════════════════════════════════
   MOCK DATA ENHANCED WITH IMAGES
══════════════════════════════════════ */
const featuredArticle = {
  id: 1,
  title: 'Generative AI: Beyond the Hype to Real Business Value',
  excerpt: 'Separating hype from reality. How enterprise leaders are architecting generative AI to solve complex operational bottlenecks securely.',
  date: 'February 24, 2026',
  author: 'Lisa Zhang',
  category: 'Enterprise Strategy',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
};

const articlesData = [
  {
    id: 2,
    title: 'Building Responsible AI: A Practical Guide',
    excerpt: 'Framework for implementing responsible AI practices across your organization while maintaining strict regulatory compliance.',
    date: 'February 18, 2026',
    author: 'Dr. Michael Brown',
    category: 'Governance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'The ROI of Enterprise AI: Metrics That Matter',
    excerpt: 'Learn how to measure and communicate the definitive financial impact of your intelligent automation initiatives to stakeholders.',
    date: 'February 10, 2026',
    author: 'Jennifer Park',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Data Vault 2.0: The Backbone of Modern Lakehouses',
    excerpt: 'Why scaling enterprises are abandoning traditional data warehousing for agile, audit-ready Data Vault architectures.',
    date: 'January 28, 2026',
    author: 'David Chen',
    category: 'Data Architecture',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Zero-Downtime Azure Cloud Migrations',
    excerpt: 'A technical deep-dive into executing seamless infrastructure transitions for highly governed Tier-1 sectors.',
    date: 'January 15, 2026',
    author: 'Marcus Vance',
    category: 'Cloud Engineering',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
];

const topics = [
  'Generative AI', 'Machine Learning', 'Data Strategy', 
  'AI Ethics', 'MLOps', 'Enterprise AI', 'Computer Vision', 
  'NLP', 'AI Governance', 'Business Intelligence', 
  'Security', 'Compliance'
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-500/30 overflow-x-hidden">

      {/* ════════ SECTION 1: HERO (DARK MOOD) ════════ */}
      <section className="relative pt-36 pb-48 md:pt-52 md:pb-64 px-6 overflow-hidden bg-[#020817]">
        {/* Abstract Topographic SVG Background */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-screen">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020817] via-[#020817]/80 to-[#020817]" />
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Research & Editorial
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] font-syne mx-auto max-w-4xl">
              Enterprise AI <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 drop-shadow-sm">
                Intelligence Hub.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
              Executive-level thoughts, deep-dive research, and architectural trends shaping the future of intelligent data ecosystems.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: FEATURED ARTICLE (OVERLAPPING LIGHT/DARK) ════════ */}
      <section className="relative px-6 max-w-7xl mx-auto z-20 -mt-32 pb-24">
        <FadeInUp>
          <div className="group relative bg-[#0f172a] rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-2 hover:border-blue-500/50 transition-all duration-500">
            
            {/* Image Side */}
            <div className="relative h-64 lg:h-full w-full overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-10 lg:bg-gradient-to-r" />
              <img 
                src={featuredArticle.image} 
                alt="Featured Article" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/80 backdrop-blur-md text-xs font-bold tracking-widest text-white uppercase shadow-lg">
                  <BookOpen className="w-3.5 h-3.5" />
                  Featured Insight
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20">
              <div className="flex items-center gap-3 mb-6 text-sm font-medium text-slate-400">
                <span className="text-blue-400">{featuredArticle.category}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white font-syne mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                {featuredArticle.title}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light mb-10">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{featuredArticle.author}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {featuredArticle.date}
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Read Full Brief
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* ════════ SECTION 3: ARTICLES GRID (LIGHT MOOD) ════════ */}
      <section className="py-12 px-6 max-w-7xl mx-auto pb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] font-syne tracking-tight">
            Latest Publications
          </h2>
          <Link href="#" className="hidden sm:flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
            View All Archive <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((article) => (
            <StaggerItem
              key={article.id}
              className="group bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card Image Header */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#0f172a]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur text-[10px] font-bold tracking-widest text-[#0f172a] uppercase shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </div>
                
                <h3 className="text-2xl font-black text-[#0f172a] font-syne mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-light mb-8 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                  <p className="text-sm font-medium text-slate-600 flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    {article.author}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-800 transition-colors"
                  >
                    Read
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ════════ SECTION 4: TOPICS EXPLORATION (DARK MOOD) ════════ */}
      <section className="relative py-24 md:py-32 px-6 bg-[#060c1c] border-y border-slate-800 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeInUp>
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-4 block">
              // Knowledge Directory
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-syne mb-12 tracking-tight">
              Explore by Architecture & Strategy
            </h2>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f172a]/50 border border-slate-700 text-slate-300 hover:border-blue-500 hover:bg-blue-900/20 hover:text-white transition-all duration-300 text-sm font-medium backdrop-blur-sm shadow-sm"
                >
                  <Hash className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  {topic}
                </button>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 5: PREMIUM NEWSLETTER CTA (VIBRANT LIGHT MOOD) ════════ */}
      <section className="py-24 px-6 bg-[#fafbfe]">
        <FadeInUp className="max-w-5xl mx-auto relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
          
          {/* Decorative floating glass rings */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[1px] border-white/20 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[1px] border-white/20 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 text-white mb-8 backdrop-blur-md shadow-inner">
              <Mail className="w-8 h-8" />
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 font-syne">
              Executive Intelligence, Delivered.
            </h2>
            <p className="text-blue-100 text-lg mb-10 font-light leading-relaxed">
              Join industry leaders receiving our latest architectural briefs, data strategy frameworks, and AI deployment insights.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your corporate email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 backdrop-blur-sm transition-all"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-blue-200/80 mt-6 font-medium tracking-wide">
              Secure & Confidential. We strictly respect enterprise privacy policies.
            </p>
          </div>
        </FadeInUp>
      </section>

    </main>
  );
}