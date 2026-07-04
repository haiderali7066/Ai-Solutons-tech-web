'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';

export default function DataGovernanceService() {
  const benefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requirements with comprehensive governance frameworks.',
    },
    {
      title: 'Data Quality',
      description: 'Ensure reliable data through automated validation, cleansing, and quality monitoring processes.',
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate data risks including security breaches, unauthorized access, and data loss.',
    },
    {
      title: 'Operational Efficiency',
      description: 'Reduce data management overhead through automation and standardized processes.',
    },
    {
      title: 'Data Monetization',
      description: 'Unlock data value by understanding assets, lineage, and quality for strategic initiatives.',
    },
    {
      title: 'Privacy Protection',
      description: 'Protect customer and employee privacy through data minimization and access controls.',
    },
  ];

  const relatedServices = [
    { title: 'Data Platform & Engineering', slug: 'data-platform' },
    { title: 'Analytics & Reporting', slug: 'analytics-reporting' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceDetailTemplate
        icon="🔐"
        title="Data Governance & Compliance"
        slug="data-governance"
        longDescription="Establish comprehensive data governance frameworks that ensure quality, security, and compliance across your organization. We help you build the policies, processes, and technologies needed for responsible data management."
        useCases={[
          'Data quality management and monitoring',
          'GDPR and privacy compliance implementation',
          'Data lineage and impact analysis',
          'Security and access control frameworks',
          'Data cataloging and metadata management',
          'Regulatory reporting and audit trails',
        ]}
        techStack={['Collibra', 'Apache Atlas', 'Informatica', 'Alation', 'Varonis', 'Immuta', 'Atlan']}
        benefits={benefits}
        relatedServices={relatedServices}
      />
      <Footer />
    </main>
  );
}
