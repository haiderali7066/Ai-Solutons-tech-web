import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FadeInUp } from '@/components/AnimatedSection';
import { 
  ArrowLeft, Calendar, User, BookOpen, 
  Share2, Hash, ChevronRight 
} from 'lucide-react';

/* ══════════════════════════════════════
   TYPES & DATA FETCHING
══════════════════════════════════════ */
interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Made required for the actual post
  image: string;
  category: string;
  tags?: string[];
  status: string;
  createdAt: string;
}

// Ensure you have an API route set up to fetch a single blog by slug
// e.g., /api/blogs/[slug]
async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/blogs/slug/${slug}`, { cache: "no-store" });
    
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Failed to fetch blog");
    }
    
    const data = await res.json();
    return data.blog || data; 
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Utility to estimate read time
const getReadTime = (content: string = "") => {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); 
  return `${minutes} min read`;
};

/* ══════════════════════════════════════
   MAIN ASYNC SLUG PAGE COMPONENT
══════════════════════════════════════ */
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  // Temporary debugging
  if (!blog) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-600/30 overflow-x-hidden">
      
      {/* ════════ SECTION 1: HERO & METADATA (DARK MOOD) ════════ */}
      <section className="relative pt-32 pb-48 md:pt-40 md:pb-64 px-6 overflow-hidden bg-black">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInUp>
            {/* Back Navigation */}
            <Link 
              href="/Blog" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors duration-300 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-6 text-sm font-medium text-white/80">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-xs font-bold tracking-widest text-blue-400 uppercase backdrop-blur-md">
                {blog.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 opacity-80">
                <BookOpen className="w-4 h-4" />
                {getReadTime(blog.content)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-syne mb-8">
              {blog.title}
            </h1>

            {/* Excerpt/Subtitle */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light mb-10 border-l-2 border-blue-600 pl-4">
              {blog.excerpt}
            </p>

            {/* Author & Date Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <User className="w-6 h-6 text-white/60" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Editorial Team</p>
                  <p className="text-xs text-white/40 flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5" /> 
                    {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>

              {/* Share Button (Placeholder logic) */}
              <button className="flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5">
                <Share2 className="w-4 h-4" />
                Share Brief
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ════════ SECTION 2: CONTENT & IMAGE (LIGHT MOOD) ════════ */}
      <section className="relative px-6 z-20 -mt-32 pb-24 max-w-4xl mx-auto">
        <FadeInUp>
          {/* Featured Image Banner */}
          {blog.image && (
            <div className="relative w-full h-64 md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 mb-16 bg-black">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Blog Content body
            Note: We highly recommend using `@tailwindcss/typography` 
            (add `prose prose-lg` classes) for automatic styling of raw HTML.
            Below is a structured container setup assuming you are passing HTML.
          */}
          <article 
            className="prose prose-lg md:prose-xl prose-blue max-w-none text-black/80 font-light leading-relaxed prose-headings:font-syne prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags Section */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-black/10">
              <p className="text-sm font-bold text-black/40 mb-4 uppercase tracking-wider">
                Related Topics
              </p>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-black/60 text-sm font-medium"
                  >
                    <Hash className="w-3.5 h-3.5 text-black/40" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </FadeInUp>
      </section>

      {/* ════════ SECTION 3: FOOTER CTA (DARK MOOD) ════════ */}
      <section className="py-20 px-6 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-black text-white font-syne mb-6 tracking-tight">
            Keep expanding your intelligence.
          </h3>
          <p className="text-white/60 mb-8 font-light">
            Return to the hub to read more executive-level thoughts and architectural trends shaping the future.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300"
          >
            Explore More Blog
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}