import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { 
  ArrowRight, Calendar, User, Sparkles, 
  BookOpen, ChevronRight, Mail, Hash 
} from 'lucide-react';

// ✅ Added DB and Model imports
import { connectDB } from "@/lib/mongodb";
import BlogModel from "@/models/Blog";

// ✅ Forces dynamic rendering, replacing the need for fetch cache: "no-store"
export const dynamic = "force-dynamic";

/* ══════════════════════════════════════
   TYPES & DATA FETCHING
══════════════════════════════════════ */
interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  tags?: string[];
  status: string;
  createdAt: string;
}

// ✅ Replaced fetch with direct MongoDB query
async function getBlogs(): Promise<Blog[]> {
  try {
    await connectDB();

    const blogs = await BlogModel.find({})
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

// Utility to estimate read time
const getReadTime = (content: string = "") => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); // Avg reading speed: 200 wpm
  return `${minutes} min read`;
};

// Fallback topics if dynamic tags aren't sufficient
const FALLBACK_TOPICS = [
  'Generative AI', 'Machine Learning', 'Data Strategy', 
  'AI Ethics', 'MLOps', 'Enterprise AI', 'Computer Vision'
];

/* ══════════════════════════════════════
   MAIN ASYNC PAGE COMPONENT
══════════════════════════════════════ */
export default async function InsightsPage() {
  const allBlogs = await getBlogs();
  const publishedBlogs = allBlogs.filter((blog) => blog.status === "published");

  // Separate the most recent blog as the featured article
  const featuredArticle = publishedBlogs[0];
  const articlesData = publishedBlogs.slice(1);

  // Dynamically extract unique categories/tags for the topics section
  const dynamicTopics = Array.from(
    new Set(
      publishedBlogs.flatMap(blog => [blog.category, ...(blog.tags || [])])
    )
  ).filter(Boolean).slice(0, 12);
  
  const displayTopics = dynamicTopics.length > 3 ? dynamicTopics : FALLBACK_TOPICS;

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-600/30 overflow-x-hidden">

      {/* ════════ SECTION 1: HERO (DARK MOOD) ════════ */}
      <section className="relative pt-36 pb-48 md:pt-52 md:pb-64 px-6 overflow-hidden bg-black">
        {/* Abstract Topographic SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="#2563eb" strokeWidth="0.5" strokeOpacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/80 to-black" />
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-400/20 text-xs font-bold tracking-widest text-blue-400 uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Research & Editorial
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] font-syne mx-auto max-w-4xl">
              Enterprise AI <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 drop-shadow-sm">
                Intelligence Hub.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
              Executive-level thoughts, deep-dive research, and architectural trends shaping the future of intelligent data ecosystems.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: FEATURED ARTICLE (OVERLAPPING LIGHT/DARK) ════════ */}
      {featuredArticle && (
        <section className="relative px-6 max-w-7xl mx-auto z-20 -mt-32 pb-24">
          <FadeInUp>
            <Link href={`/blog/${featuredArticle.slug}`} className="block group">
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-2 hover:border-blue-600/50 transition-all duration-500">
                
                {/* Image Side */}
                <div className="relative h-64 lg:h-full w-full overflow-hidden bg-white/5">
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 lg:bg-gradient-to-r" />
                  {featuredArticle.image ? (
                    <Image 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title} 
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      <BookOpen size={48} />
                    </div>
                  )}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 backdrop-blur-md text-xs font-bold tracking-widest text-white uppercase shadow-lg">
                      <BookOpen className="w-3.5 h-3.5" />
                      Featured Insight
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20 bg-black/40 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6 text-sm font-medium text-white/60">
                    <span className="text-blue-400 font-bold uppercase tracking-wider">{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{getReadTime(featuredArticle.content || featuredArticle.excerpt)}</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-black text-white font-syne mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-300 line-clamp-3">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-white/60 leading-relaxed font-light mb-10 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <User className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Editorial Team</p>
                        <p className="text-xs text-white/40 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3" /> 
                          {new Date(featuredArticle.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300">
                      Read Full Brief
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeInUp>
        </section>
      )}

      {/* ════════ SECTION 3: ARTICLES GRID (LIGHT MOOD) ════════ */}
      {articlesData.length > 0 && (
        <section className="py-12 px-6 max-w-7xl mx-auto pb-24">
          <div className="flex items-center justify-between mb-12 border-b border-black/10 pb-6">
            <h2 className="text-3xl md:text-4xl font-black text-black font-syne tracking-tight">
              Latest Publications
            </h2>
            <Link href="#archive" className="hidden sm:flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
              View All Archive <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((article) => (
              <StaggerItem key={article._id} className="h-full">
                <Link href={`/blog/${article.slug}`} className="group bg-white border border-black/10 rounded-[2rem] overflow-hidden hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  
                  {/* Card Image Header */}
                  <div className="relative h-56 overflow-hidden bg-black/5">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    {article.image ? (
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-black/20">
                        <BookOpen size={40} />
                      </div>
                    )}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur text-[10px] font-bold tracking-widest text-black uppercase shadow-sm border border-black/5">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs font-bold text-black/40 mb-4 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                    
                    <h3 className="text-2xl font-black text-black font-syne mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-black/60 leading-relaxed font-light mb-8 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-black/5 pt-6 mt-auto">
                      <p className="text-sm font-medium text-black/60 flex items-center gap-2">
                        <User className="w-4 h-4 text-black/40" />
                        Editorial Team
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
                        Read
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* ════════ SECTION 4: TOPICS EXPLORATION (DARK MOOD) ════════ */}
      <section className="relative py-24 md:py-32 px-6 bg-black border-y border-white/10 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_100%)]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeInUp>
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
              // Knowledge Directory
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-syne mb-12 tracking-tight">
              Explore by Architecture & Strategy
            </h2>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {displayTopics.map((topic) => (
                <button
                  key={topic}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-blue-600 hover:bg-blue-600/20 hover:text-white transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                >
                  <Hash className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                  {topic}
                </button>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 5: PREMIUM NEWSLETTER CTA (VIBRANT BLUE MOOD) ════════ */}
      <section className="py-24 px-6 bg-white">
        <FadeInUp className="max-w-5xl mx-auto relative bg-blue-600 rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-2xl">
          
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
            <p className="text-white/80 text-lg mb-10 font-light leading-relaxed">
              Join industry leaders receiving our latest architectural briefs, data strategy frameworks, and AI deployment insights.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" action="/api/subscribe" method="POST">
              <input
                type="email"
                required
                placeholder="Enter your corporate email"
                className="flex-1 px-6 py-4 rounded-full bg-black/20 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/60 mt-6 font-medium tracking-wide">
              Secure & Confidential. We strictly respect enterprise privacy policies.
            </p>
          </div>
        </FadeInUp>
      </section>

    </main>
  );
}