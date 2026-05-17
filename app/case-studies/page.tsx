'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/constants';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Case <span className="text-primary">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world results from our work with leading organizations
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {CASE_STUDIES.map((study, index) => (
              <div
                key={study.id}
                className="bg-card border border-border p-12 hover:border-primary transition-all duration-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="inline-block px-3 py-1 bg-background text-secondary text-xs font-medium mb-4">
                      {study.industry}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="space-y-3 border-t border-border pt-6">
                      <p className="text-sm font-semibold text-secondary">KEY ACHIEVEMENTS</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-2xl font-bold text-primary">{study.result}</p>
                          <p className="text-sm text-muted-foreground">Primary Result</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-secondary">$24M</p>
                          <p className="text-sm text-muted-foreground">Estimated ROI</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-border p-8 flex items-center justify-center min-h-64">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-4">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">Success Story</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Rigorous Analysis</h3>
              <p className="text-muted-foreground">
                We thoroughly analyze your business processes, data, and objectives to identify the highest-impact AI opportunities.
              </p>
            </div>
            <div className="p-8 border border-border">
              <h3 className="text-2xl font-bold text-secondary mb-4">Custom Solutions</h3>
              <p className="text-muted-foreground">
                No one-size-fits-all approach. We design and build solutions specifically tailored to your industry and use cases.
              </p>
            </div>
            <div className="p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Measurable Results</h3>
              <p className="text-muted-foreground">
                We establish clear KPIs and continuously monitor performance to ensure your AI initiatives deliver expected outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Aggregate Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                $2.1B
              </p>
              <p className="text-muted-foreground">Total Client Value Created</p>
            </div>
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                3.8x
              </p>
              <p className="text-muted-foreground">Average ROI Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                92%
              </p>
              <p className="text-muted-foreground">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how AI can transform your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold hover:glow-blue transition-all duration-200"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
