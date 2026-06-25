import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug });

  if (!blog) {
    notFound();
  }

  // Calculate estimated reading time
  const wordCount = blog.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Progress Bar (Visual indicator) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/5 z-50">
        <div className="h-full bg-blue-600 animate-pulse w-1/3" />
      </div>

      <article className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        {/* Navigation */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black/60 border-y border-black/10 py-6">
            <div className="flex items-center gap-2">
              <User size={18} className="text-blue-600" />
              <span>Editorial Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-600" />
              <time>{new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-600" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {blog.image && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
            />
          </div>
        )}

        {/* Content Body */}
        <div 
          className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Footer CTA */}
      <footer className="border-t border-black/10 py-12 text-center bg-black/5">
        <p className="text-black/60 font-medium">Was this article helpful?</p>
      </footer>
    </main>
  );
}