'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss how AI can transform your organization
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-2">ADDRESS</h4>
                  <p className="text-muted-foreground">
                    123 AI Boulevard<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-2">PHONE</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+14155551234" className="hover:text-primary transition-colors">
                      +1 (415) 555-1234
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-2">EMAIL</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:hello@aisolutions.com" className="hover:text-primary transition-colors">
                      hello@aisolutions.com
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-2">BUSINESS HOURS</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM PT
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-white font-semibold hover:glow-blue transition-all duration-200"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How long does an AI implementation typically take?',
                a: 'Implementation timelines vary based on project scope and complexity. Most projects take 3-9 months from discovery to deployment, with ongoing optimization.',
              },
              {
                q: 'What is your engagement model?',
                a: 'We offer flexible engagement models including project-based, time-and-materials, and dedicated team arrangements tailored to your needs.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we provide comprehensive post-implementation support including monitoring, optimization, and continuous improvement of your AI systems.',
              },
              {
                q: 'Can you work with our existing tech stack?',
                a: 'Absolutely. We specialize in integrating AI solutions with existing systems and can work with virtually any technology stack.',
              },
            ].map((faq, i) => (
              <div key={i} className="border border-border p-6 hover:border-primary transition-all duration-200">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-border">
              <h3 className="text-xl font-semibold text-white mb-3">San Francisco</h3>
              <p className="text-muted-foreground text-sm">
                123 AI Boulevard<br />
                San Francisco, CA 94105
              </p>
            </div>
            <div className="text-center p-8 border border-border">
              <h3 className="text-xl font-semibold text-white mb-3">New York</h3>
              <p className="text-muted-foreground text-sm">
                456 Tech Avenue<br />
                New York, NY 10001
              </p>
            </div>
            <div className="text-center p-8 border border-border">
              <h3 className="text-xl font-semibold text-white mb-3">London</h3>
              <p className="text-muted-foreground text-sm">
                789 Digital Street<br />
                London, UK E1 6AN
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
