'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';

export default function DataPlatformService() {
  const benefits = [
    {
      title: 'Real-Time Analytics',
      description: 'Enable instant insights with streaming data pipelines and real-time dashboards for faster decision-making.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Handle petabyte-scale datasets with distributed processing frameworks that grow with your data needs.',
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs through efficient data management, compression, and intelligent resource allocation.',
    },
    {
      title: 'Data Quality',
      description: 'Ensure data reliability with automated validation, quality checks, and comprehensive data lineage tracking.',
    },
    {
      title: 'Integration Ready',
      description: 'Seamlessly connect with 500+ data sources and business applications for unified data ecosystems.',
    },
    {
      title: 'Compliance & Security',
      description: 'Meet regulatory requirements with encryption, access controls, and comprehensive audit trails.',
    },
  ];

  const relatedServices = [
    { title: 'Analytics & Reporting', slug: 'analytics-reporting' },
    { title: 'Data Governance & Compliance', slug: 'data-governance' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceDetailTemplate
        icon="🗄️"
        title="Data Platform & Engineering"
        slug="data-platform"
        longDescription="Build scalable, enterprise-grade data infrastructure that powers analytics, machine learning, and business intelligence. Our platform engineering approach ensures your data architecture scales efficiently while maintaining security and compliance."
        useCases={[
          'Real-time analytics dashboards for executive insights',
          'ETL/ELT pipeline automation for data integration',
          'Data warehouse modernization from legacy systems',
          'Stream processing for IoT and event data',
          'Data lake architecture for enterprise analytics',
          'Multi-source data consolidation and unification',
        ]}
        techStack={['Apache Spark', 'Airflow', 'Kafka', 'Snowflake', 'AWS Glue', 'DBT', 'Presto', 'Delta Lake']}
        benefits={benefits}
        relatedServices={relatedServices}
      />
      <Footer />
    </main>
  );
}
