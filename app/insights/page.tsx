'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { INSIGHTS } from '@/lib/constants';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const ALL_INSIGHTS = [
  ...INSIGHTS,
  {
    id: 4,
    title: 'Generative AI: Beyond the Hype to Real Business Value',
    excerpt: 'Separating hype from reality. How companies are actually using generative AI to solve real business problems.',
    date: 'February 24, 2024',
    author: 'Lisa Zhang',
  },
  {
    id: 5,
    title: 'Building Responsible AI: A Practical Guide',
    excerpt: 'Framework for implementing responsible AI practices across your organization while maintaining compliance.',
    date: 'February 18, 2024',
    author: 'Dr. Michael Brown',
  },
  {
    id: 6,
    title: 'The ROI of Enterprise AI: Metrics That Matter',
    excerpt: 'Learn how to measure and communicate the business impact of your AI initiatives to stakeholders.',
    date: 'February 10, 2024',
    author: 'Jennifer Park',
  },
];

export default function Insights() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            AI <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, research, and trends shaping the future of AI
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary p-12 md:p-16">
            <div className="inline-block px-3 py-1 bg-background text-primary text-xs font-medium mb-6">
              FEATURED
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              {INSIGHTS[0].title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {INSIGHTS[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {INSIGHTS[0].date} • By {INSIGHTS[0].author}
                </p>
              </div>
              <Link
                href="#"
                className="px-6 py-2 bg-primary text-white hover:glow-blue transition-all duration-200"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">All Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALL_INSIGHTS.slice(1).map((insight) => (
              <article
                key={insight.id}
                className="bg-card border border-border p-8 hover:border-primary transition-all duration-200"
              >
                <p className="text-sm text-secondary font-medium mb-3">{insight.date}</p>
                <h3 className="text-2xl font-bold text-white mb-3 hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{insight.excerpt}</p>
                
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground">By {insight.author}</p>
                  <Link
                    href="#"
                    className="text-primary hover:text-secondary transition-colors font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Popular Topics</h2>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Generative AI',
              'Machine Learning',
              'Data Strategy',
              'AI Ethics',
              'MLOps',
              'Enterprise AI',
              'Computer Vision',
              'Natural Language Processing',
              'AI Governance',
              'Business Intelligence',
              'AI Security',
              'Compliance',
            ].map((topic) => (
              <button
                key={topic}
                className="px-4 py-2 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200 text-sm"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest AI insights and industry trends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground"
            />
            <button className="px-8 py-3 bg-primary text-white font-semibold hover:glow-blue transition-all duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We care about your data. Read our privacy policy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
