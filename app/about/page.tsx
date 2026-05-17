'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About <span className="text-primary">AI Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering AI transformation for enterprises worldwide
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square rounded-lg border border-border" />
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded in 2009, AI Solution Technologies emerged from a vision to democratize artificial intelligence for enterprises. What started as a small consulting firm has grown into a global leader in AI transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;ve worked with over 500 organizations, from Fortune 500 companies to innovative startups, helping them harness AI to drive meaningful business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To empower enterprises with transformative AI solutions that drive growth, efficiency, and innovation while maintaining the highest standards of ethics and responsibility.
              </p>
            </div>
            <div className="p-8 border border-border">
              <h3 className="text-2xl font-bold text-secondary mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We stay at the cutting edge of AI research and development, continuously exploring new technologies and methodologies to deliver next-generation solutions.
              </p>
            </div>
            <div className="p-8 border border-border">
              <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                Ethical AI is at our core. We prioritize responsible development, transparency, and alignment with our clients&apos; values and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer' },
              { name: 'James Wilson', role: 'Chief Technology Officer' },
              { name: 'Dr. Raj Patel', role: 'Head of Research' },
              { name: 'Emma Rodriguez', role: 'Chief Operations Officer' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg border border-border mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-3">15+</p>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-3">500+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-3">120+</p>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-3">$2B+</p>
              <p className="text-muted-foreground">Client Value Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s work together to transform your business with AI.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold hover:glow-blue transition-all duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
