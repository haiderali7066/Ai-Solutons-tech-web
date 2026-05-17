'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <FadeInUp className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to address every aspect of your business transformation
          </p>
        </FadeInUp>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <StaggerItem
                key={service.id}
                className="bg-card border border-border p-12 hover:border-primary transition-all duration-200"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                
                {/* Service Details */}
                <div className="space-y-3 mb-8 border-t border-border pt-8">
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-2">KEY BENEFITS</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Measurable ROI</li>
                      <li>✓ Expert implementation</li>
                      <li>✓ Ongoing support</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'Understand your business goals and challenges' },
              { num: '02', title: 'Strategy', desc: 'Develop comprehensive AI transformation plan' },
              { num: '03', title: 'Implementation', desc: 'Deploy solutions with expert guidance' },
              { num: '04', title: 'Optimization', desc: 'Monitor and continuously improve' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-primary mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss which services are right for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold hover:glow-blue transition-all duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
