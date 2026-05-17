'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';

export default function CRMApplicationsService() {
  const benefits = [
    {
      title: 'Sales Acceleration',
      description: 'Streamline sales processes with intelligent lead scoring and automated workflows to close deals faster.',
    },
    {
      title: 'Customer Intelligence',
      description: 'Gain 360-degree customer views with unified data and behavioral insights across all touchpoints.',
    },
    {
      title: 'Team Productivity',
      description: 'Empower teams with automation and intelligent recommendations that reduce manual data entry.',
    },
    {
      title: 'Revenue Growth',
      description: 'Increase customer lifetime value through better engagement, cross-sell, and retention strategies.',
    },
    {
      title: 'Integration Ecosystem',
      description: 'Connect your CRM with marketing, service, and back-office systems for seamless data flow.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with customizable dashboards and predictive sales forecasting.',
    },
  ];

  const relatedServices = [
    { title: 'Analytics & Reporting', slug: 'analytics-reporting' },
    { title: 'AI & Intelligence', slug: 'ai-intelligence' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceDetailTemplate
        icon="💼"
        title="CRM & Business Applications"
        slug="crm-applications"
        longDescription="Implement and customize CRM and business applications that streamline customer interactions and operational efficiency. From Salesforce to Microsoft Dynamics, we deliver solutions that drive revenue and improve customer satisfaction."
        useCases={[
          'Salesforce customization and implementation',
          'Customer journey mapping and optimization',
          'Sales pipeline and funnel optimization',
          'Customer service automation and chatbots',
          'Workflow automation and process optimization',
          'Marketing automation and lead management',
        ]}
        techStack={['Salesforce', 'Microsoft Dynamics 365', 'SAP', 'Zapier', 'Power Platform', 'Flow', 'Apps Script']}
        benefits={benefits}
        relatedServices={relatedServices}
      />
      <Footer />
    </main>
  );
}
