'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { INDUSTRIES } from '@/lib/constants';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function Industries() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Industries We <span className="text-primary">Serve</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep industry expertise across sectors transforming with AI
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.id}
                className="bg-card border border-border p-8 hover:border-primary transition-all duration-200 group"
              >
                <div className="text-6xl mb-6">{industry.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-3">{industry.name}</h2>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-secondary mb-3">SOLUTIONS</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Process Automation</li>
                    <li>✓ Predictive Analytics</li>
                    <li>✓ Decision Intelligence</li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-block px-6 py-2 border border-primary text-primary text-sm hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Explore Solutions
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Industry Focus Areas</h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square rounded-lg border border-border" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We help financial institutions implement AI for fraud detection, risk assessment, and algorithmic trading. Our solutions protect assets while improving customer experiences.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Real-time fraud detection</li>
                  <li>✓ Credit risk modeling</li>
                  <li>✓ Portfolio optimization</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our AI solutions improve patient outcomes through diagnostic assistance, drug discovery acceleration, and operational efficiency enhancement in healthcare organizations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Medical imaging analysis</li>
                  <li>✓ Patient risk prediction</li>
                  <li>✓ Treatment optimization</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square rounded-lg border border-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square rounded-lg border border-border" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Transform your operations with predictive maintenance, quality control automation, and supply chain optimization powered by advanced AI and machine learning.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Equipment health monitoring</li>
                  <li>✓ Defect detection</li>
                  <li>✓ Demand forecasting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Cross-Industry Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Data Architecture', desc: 'Enterprise data pipelines and infrastructure' },
              { title: 'ML Ops', desc: 'MLOps platforms and model deployment' },
              { title: 'Analytics', desc: 'Business intelligence and analytics' },
              { title: 'Compliance', desc: 'Regulatory compliance and governance' },
            ].map((cap, i) => (
              <div key={i} className="p-6 border border-border">
                <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let&apos;s Discuss Your Industry Challenges
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our specialists understand your industry inside and out.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold hover:glow-blue transition-all duration-200"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
