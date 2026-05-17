'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';

export default function CloudMigrationService() {
  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Lower operational expenses through cloud cost optimization and elimination of on-premise infrastructure.',
    },
    {
      title: 'Scalability',
      description: 'Scale resources dynamically to meet demand without over-provisioning or infrastructure bottlenecks.',
    },
    {
      title: 'Business Continuity',
      description: 'Improve resilience with built-in redundancy, disaster recovery, and high availability features.',
    },
    {
      title: 'Performance',
      description: 'Accelerate applications with cloud-native architectures and global content delivery networks.',
    },
    {
      title: 'Security & Compliance',
      description: 'Benefit from enterprise-grade security certifications and compliance standards across cloud platforms.',
    },
    {
      title: 'Innovation Speed',
      description: 'Rapidly deploy new services and features with modern cloud development practices and tools.',
    },
  ];

  const relatedServices = [
    { title: 'CRM & Business Applications', slug: 'crm-applications' },
    { title: 'Data Platform & Engineering', slug: 'data-platform' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceDetailTemplate
        icon="☁️"
        title="Cloud Migration & Modernisation"
        slug="cloud-migration"
        longDescription="Seamlessly transition your infrastructure and applications to the cloud with minimal disruption. We handle the entire migration journey—from assessment and planning to implementation and optimization."
        useCases={[
          'Legacy application modernization and refactoring',
          'Lift and shift migrations for quick time-to-value',
          'Containerization and Kubernetes orchestration',
          'Serverless architecture implementation',
          'Multi-cloud strategy and management',
          'Hybrid cloud integration and management',
        ]}
        techStack={['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'Helm']}
        benefits={benefits}
        relatedServices={relatedServices}
      />
      <Footer />
    </main>
  );
}
