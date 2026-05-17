'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeInUp, StaggerContainer, StaggerItem } from './AnimatedSection';

interface ServiceDetailTemplateProps {
  icon: string;
  title: string;
  slug: string;
  longDescription: string;
  useCases: string[];
  techStack: string[];
  benefits: { title: string; description: string }[];
  relatedServices: { title: string; slug: string }[];
}

export function ServiceDetailTemplate({
  icon,
  title,
  slug,
  longDescription,
  useCases,
  techStack,
  benefits,
  relatedServices,
}: ServiceDetailTemplateProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp className="text-center space-y-6 mb-16">
            <div className="text-8xl md:text-9xl">{icon}</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">{title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {longDescription}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Common Use Cases</h2>
            <p className="text-lg text-muted-foreground">See how organizations are implementing this service</p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-card border border-border p-8 hover:border-primary transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-lg text-white font-medium">{useCase}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 px-6 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-lg text-muted-foreground">We leverage industry-leading platforms and tools</p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-background border border-border p-6 text-center hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-white font-semibold">{tech}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Benefits</h2>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-lg">→</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-13 leading-relaxed">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how {title.toLowerCase()} can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold hover:glow-blue transition-all duration-200"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-block px-8 py-4 border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeInUp className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Related Services</h2>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service, idx) => (
                <StaggerItem key={idx}>
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 cursor-pointer"
                      whileHover={{ y: -4 }}
                    >
                      <p className="text-white font-semibold text-lg">{service.title}</p>
                      <p className="text-primary mt-4 flex items-center gap-2">
                        Learn More <span>→</span>
                      </p>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </main>
  );
}
