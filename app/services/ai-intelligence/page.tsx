'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';

export default function AIIntelligenceService() {
  const benefits = [
    {
      title: 'Predictive Insights',
      description: 'Forecast future trends and outcomes with advanced machine learning models trained on your historical data.',
    },
    {
      title: 'Process Automation',
      description: 'Automate complex business processes using intelligent systems that learn and improve over time.',
    },
    {
      title: 'Risk Mitigation',
      description: 'Detect anomalies and potential risks before they impact your business with real-time monitoring.',
    },
    {
      title: 'Personalization',
      description: 'Deliver customized experiences to customers with recommendation engines and behavioral analytics.',
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with proprietary AI models that give you insights competitors don\'t have access to.',
    },
    {
      title: 'Continuous Learning',
      description: 'Systems that improve automatically as they encounter new data, becoming smarter over time.',
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
        icon="🧠"
        title="AI & Intelligence"
        slug="ai-intelligence"
        longDescription="Harness the power of artificial intelligence to drive transformative business outcomes. From predictive analytics to computer vision, we develop intelligent systems tailored to your specific challenges and opportunities."
        useCases={[
          'Predictive analytics models for demand forecasting',
          'Natural language processing for customer insights',
          'Computer vision systems for quality control',
          'Recommendation engines for personalization',
          'Anomaly detection for fraud and risk management',
          'Generative AI integration for content and automation',
        ]}
        techStack={['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI API', 'Hugging Face', 'LangChain', 'XGBoost', 'CatBoost']}
        benefits={benefits}
        relatedServices={relatedServices}
      />
      <Footer />
    </main>
  );
}
