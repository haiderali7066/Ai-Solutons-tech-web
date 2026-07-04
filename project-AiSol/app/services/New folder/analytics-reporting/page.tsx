'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';

export default function AnalyticsReportingService() {
  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Empower your organization with real-time insights that drive strategic and tactical decisions.',
    },
    {
      title: 'Executive Visibility',
      description: 'Provide leadership with KPIs and metrics that matter, presented in intuitive dashboards.',
    },
    {
      title: 'Operational Intelligence',
      description: 'Monitor and optimize business operations with real-time performance metrics and alerts.',
    },
    {
      title: 'Customer Intelligence',
      description: 'Understand customer behavior, preferences, and lifetime value with advanced analytics.',
    },
    {
      title: 'Financial Analysis',
      description: 'Gain clarity on financial metrics, profitability, and cash flow with comprehensive reporting.',
    },
    {
      title: 'Self-Service Analytics',
      description: 'Enable business users to explore data and create reports without IT dependency.',
    },
  ];

  const relatedServices = [
    { title: 'Data Platform & Engineering', slug: 'data-platform' },
    { title: 'Data Governance & Compliance', slug: 'data-governance' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceDetailTemplate
        icon="📊"
        title="Analytics & Reporting"
        slug="analytics-reporting"
        longDescription="Transform raw data into actionable business intelligence. We design and implement comprehensive analytics solutions that provide visibility into every aspect of your business operations and customer interactions."
        useCases={[
          'Executive dashboards for business performance',
          'Customer analytics and segmentation',
          'Financial analytics and forecasting',
          'Operational metrics and KPI tracking',
          'Custom reporting and ad-hoc analysis',
          'Marketing analytics and attribution modeling',
        ]}
        techStack={['Power BI', 'Tableau', 'Looker', 'Qlik', 'Google Data Studio', 'Metabase', 'Superset']}
        benefits={benefits}
        relatedServices={relatedServices}
      />
      <Footer />
    </main>
  );
}
