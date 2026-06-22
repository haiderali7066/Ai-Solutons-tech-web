import React from 'react';

// --- DATA: Separated for clean code management ---
const teamData = {
  executives: [
    {
      id: 'ceo',
      name: 'Rania Jamil Choudhury',
      roleTitle: 'Founder & Chief Executive Officer',
      badge: 'Strategy & Vision',
      bio: 'Provides strategic leadership across all business functions, ensuring alignment between company vision, service offerings, customer needs, and long-term growth. Oversees major client relationships, strategic partnerships, and organisational performance.',
      responsibilities: [
        'Sets company vision, mission, and long-term strategic direction',
        'Leads executive leadership team and drives accountability across all functions',
        'Owns major client relationships and strategic partnership negotiations',
        'Represents AIST with government, enterprise, and investor stakeholders',
        'Ensures financial performance, growth targets, and organisational health'
      ]
    },
    {
      id: 'coo',
      name: 'Chief Operating Officer',
      roleTitle: 'Chief Operating Officer',
      badge: 'Operations & Delivery',
      bio: 'Leads day-to-day business operations, resource planning, and service delivery management. Ensures all departments collaborate effectively to deliver projects on time, within budget, and to the expected quality standards.',
      responsibilities: [
        'Oversees end-to-end service delivery across all client engagements',
        'Manages resource planning, capacity, and cross-team collaboration',
        'Drives operational efficiency, process improvement, and delivery governance',
        'Leads PMO, delivery, and customer success functions in coordination',
        'Reports on operational KPIs and resolves delivery escalations'
      ]
    },
    {
      id: 'cto',
      name: 'Chief Technology Officer',
      roleTitle: 'Chief Technology Officer',
      badge: 'Technology & Architecture',
      bio: 'Provides technical leadership across Microsoft Fabric, Data Engineering, Cloud Platforms, AI Solutions, CRM, and Enterprise Architecture. Establishes technology standards, security frameworks, and solution governance across all service lines.',
      responsibilities: [
        'Sets technical architecture standards and solution design governance',
        'Leads technology evaluation and Microsoft/Azure partnership alignment',
        'Oversees delivery of Microsoft Fabric, ADF, Synapse, and AI platform solutions',
        'Establishes security frameworks, DevOps standards, and cloud governance',
        'Supports pre-sales architecture, RFP responses, and client-facing solutioning'
      ]
    },
    {
      id: 'caio',
      name: 'Chief AI & Innovation Officer',
      roleTitle: 'Chief AI & Innovation Officer',
      badge: 'AI Strategy & Innovation',
      bio: 'Leads artificial intelligence strategy, innovation programs, intelligent automation, AI governance, and emerging technology. Drives development of AI-powered solutions, agentic AI frameworks, RAG systems, and next-generation product capabilities.',
      responsibilities: [
        'Defines AI strategy, roadmap, and product innovation agenda',
        'Leads design and delivery of RAG, agentic AI, and GenAI solutions',
        'Drives AI governance frameworks aligned to EU AI Act and APRA requirements',
        'Develops AI-powered automation and decision intelligence capabilities',
        'Partners with CTO and Head of Product to embed AI across all service lines'
      ]
    },
    {
      id: 'cdao',
      name: 'Chief Data & Analytics Officer',
      roleTitle: 'Chief Data & Analytics Officer',
      badge: 'Data Strategy & Analytics',
      bio: 'Responsible for enterprise data strategy, data governance, business intelligence, analytics, and data platform architecture. Provides leadership across Microsoft Fabric, Data Warehousing, Data Engineering, Power BI, and Governance services.',
      responsibilities: [
        'Sets enterprise data strategy, governance frameworks, and data quality standards',
        'Leads Microsoft Purview, data lineage, and compliance initiatives',
        'Oversees Power BI Centre of Excellence, semantic model design, and BI delivery',
        'Drives data architecture including Medallion Lakehouse and DW design patterns',
        'Supports APRA, GDPR, SDAIA, and regulatory data compliance programs'
      ]
    },
    {
      id: 'cro',
      name: 'Chief Revenue Officer',
      roleTitle: 'Chief Revenue Officer',
      badge: 'Revenue & Growth',
      bio: 'Leads revenue growth, sales operations, strategic partnerships, customer acquisition, and commercial performance. Works closely with clients to identify business opportunities and align AIST solutions with organisational needs.',
      responsibilities: [
        'Drives sales pipeline, revenue targets, and commercial strategy',
        'Manages key accounts, renewals, and upsell across existing clients',
        'Builds and manages strategic partnerships with Microsoft, AWS, and SaaS partners',
        'Leads go-to-market strategies for new service lines and products',
        'Works with CMO and Head of Customer Success to convert and retain clients'
      ]
    },
    {
      id: 'cmo',
      name: 'Chief Marketing Officer',
      roleTitle: 'Chief Marketing Officer',
      badge: 'Brand & Market Growth',
      bio: 'Drives brand awareness, market positioning, lead generation, digital marketing, and customer engagement. Promotes AIST expertise in AI, Data, Analytics, and Technology across all service lines and target industries.',
      responsibilities: [
        'Owns brand identity, market positioning, and thought leadership strategy',
        'Leads digital marketing, SEO, AEO, content strategy, and social media',
        'Drives lead generation campaigns across target industries and verticals',
        'Manages AIST website, capability statements, and marketing collateral',
        'Aligns marketing with CRO on pipeline targets and conversion strategy'
      ]
    },
    {
      id: 'cfo',
      name: 'Chief Financial Officer',
      roleTitle: 'Chief Financial Officer',
      badge: 'Finance & Governance',
      bio: 'Oversees financial management, budgeting, forecasting, commercial analysis, profitability, and financial governance. Ensures sustainable growth and supports strategic investment decisions across the organisation.',
      responsibilities: [
        'Manages P&L, budgeting, forecasting, and financial reporting',
        'Ensures financial compliance, audit readiness, and corporate governance',
        'Supports commercial pricing, deal structuring, and contract management',
        'Advises CEO and board on investment decisions, acquisitions, and growth funding',
        'Oversees accounts payable, receivable, payroll, and financial operations'
      ]
    }
  ],
  seniorLeadership: [
    {
      id: 'hpd',
      name: 'Head of Product & SaaS Platforms',
      roleTitle: 'Head of Product & SaaS Platforms',
      badge: 'Product & SaaS',
      bio: 'Leads the design, development, and growth of HIVENOX, AI Workers, SaaS products, and industry-specific solutions. Ensures products align with customer requirements, market demand, and business objectives.',
      responsibilities: [
        'Owns product roadmap for HIVENOX and AI Workers platforms',
        'Translates customer requirements into product features and releases',
        'Manages product lifecycle from discovery through to go-live and iteration',
        'Collaborates with engineering, AI, and sales on product strategy',
        'Drives SaaS pricing, packaging, and customer adoption metrics'
      ]
    },
    {
      id: 'hed',
      name: 'Head of Engineering & Delivery',
      roleTitle: 'Head of Engineering & Delivery',
      badge: 'Engineering & DevOps',
      bio: 'Manages technical delivery teams, software development, DevOps, quality assurance, and platform support. Responsible for delivering scalable, secure, and high-quality technology solutions across all client engagements.',
      responsibilities: [
        'Leads engineering squads across Data, AI, Cloud, and CRM workstreams',
        'Enforces DevOps practices: CI/CD, version control, IaC, and automated testing',
        'Manages delivery timelines, quality gates, and technical escalations',
        'Oversees Azure, Fabric, and cloud infrastructure management',
        'Supports CTO on architecture reviews and technical standards'
      ]
    },
    {
      id: 'hcs',
      name: 'Head of Customer Success',
      roleTitle: 'Head of Customer Success',
      badge: 'Customer Success',
      bio: 'Ensures customers successfully adopt and realise value from AIST solutions. Leads onboarding, support, service management, customer engagement, retention, and ongoing relationship development.',
      responsibilities: [
        'Manages customer onboarding, training, and solution adoption programs',
        'Tracks customer health scores, satisfaction, and renewal risk',
        'Leads support function and resolves escalated service issues',
        'Identifies expansion opportunities within existing customer base',
        'Feeds customer insights back to Product, Marketing, and Delivery teams'
      ]
    },
    {
      id: 'hpm',
      name: 'Head of PMO & Implementations',
      roleTitle: 'Head of PMO & Implementations',
      badge: 'PMO & Governance',
      bio: 'Provides governance and oversight across all projects and transformation programs. Responsible for project planning, implementation management, stakeholder engagement, risk management, and delivery assurance.',
      responsibilities: [
        'Governs all active projects across the delivery portfolio',
        'Manages project plans, milestones, dependencies, and stakeholder updates',
        'Implements risk management, issue tracking, and change control processes',
        'Ensures delivery methodology standards are applied across all engagements',
        'Reports project status, budget, and delivery health to COO and clients'
      ]
    },
    {
      id: 'hpc',
      name: 'Head of People & Culture',
      roleTitle: 'Head of People & Culture',
      badge: 'People & Capability',
      bio: 'Leads workforce planning, recruitment, capability development, employee engagement, performance management, and organisational culture. Ensures AIST attracts and retains highly skilled technology professionals.',
      responsibilities: [
        'Owns end-to-end recruitment for technical, consulting, and commercial roles',
        'Designs and delivers capability uplift and professional development programs',
        'Manages performance review cycles, OKRs, and culture initiatives',
        'Ensures compliance with employment law, visa arrangements, and HR policy',
        'Works with CEO on organisational design and headcount planning'
      ]
    },
    {
      id: 'hgr',
      name: 'Head of Governance, Risk & Compliance',
      roleTitle: 'Head of Governance, Risk & Compliance',
      badge: 'GRC & Security',
      bio: 'Oversees corporate governance, risk management, privacy, security, regulatory compliance, AI governance, and information management. Ensures all services are delivered in accordance with industry standards and regulatory requirements.',
      responsibilities: [
        'Manages enterprise risk register, governance calendar, and compliance obligations',
        'Leads ISO, SOC 2, and government security accreditation programs',
        'Oversees GDPR, APRA, SDAIA, and AI Act compliance across services',
        'Implements information security, privacy, and data protection frameworks',
        'Advises executive team on regulatory risk and compliance strategy'
      ]
    },
    {
      id: 'ea',
      name: 'Executive Assistant',
      roleTitle: 'EA & Corporate Operations Manager',
      badge: 'Operations & Admin',
      bio: 'Provides executive support, operational coordination, business administration, vendor management, and governance support. Acts as the central coordination point across all departments and the leadership team.',
      responsibilities: [
        'Supports CEO and executive team with scheduling, communications, and operations',
        'Manages vendor relationships, contracts, and procurement administration',
        'Coordinates board meetings, leadership forums, and governance documentation',
        'Oversees internal business operations, policies, and office administration',
        'Manages corporate compliance filings, ASIC, and regulatory submissions'
      ]
    }
  ]
};

// --- HELPER COMPONENT: Generates an initials avatar ---
const getInitials = (name) => {
  const parts = name.split(' ');
  if (parts.length > 1) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// --- COMPONENT: Individual Role Card ---
const TeamCard = ({ member }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Card Header Section */}
      <div className="p-6 pb-4 border-b border-gray-50 bg-gray-50/50">
        <div className="flex items-center gap-4 mb-4">
          {/* Avatar Placeholder */}
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner">
            {getInitials(member.name)}
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-blue-600 mt-1">
              {member.roleTitle}
            </p>
          </div>
        </div>
        
        {/* Specialty Badge */}
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
          {member.badge}
        </span>
        
        {/* Short Bio */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>

      {/* Responsibilities Section */}
      <div className="p-6 bg-white flex-grow">
        <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">
          Key Responsibilities
        </h4>
        <ul className="space-y-2">
          {member.responsibilities.map((resp, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-blue-500 mt-0.5 text-[10px]">▸</span>
              <span className="leading-tight">{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT: Page Layout ---
export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
            Our Leadership Team
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Unlocking the true value of your data.
          </h1>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong>AI Solution Technologies</strong> is led by a multi-disciplinary executive and leadership team spanning Strategy, Technology, AI & Innovation, Data & Analytics, Revenue, Marketing, Finance, Engineering, Product, and Governance. Each leader brings deep domain expertise and a shared commitment to delivering trusted, practical, and high-impact data and AI solutions for enterprise clients across Australia and beyond.
            </p>
            <p>
              Together, the team covers the full lifecycle of every engagement — from initial strategy and architecture through to implementation, delivery, customer success, and ongoing governance. This structure ensures clients have access to the right expertise at every stage of their data and AI journey.
            </p>
          </div>
        </div>

        {/* C-Suite Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Executive Leadership</h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.executives.map((exec) => (
              <TeamCard key={exec.id} member={exec} />
            ))}
          </div>
        </div>

        {/* Senior Leadership Grid */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Senior Leadership — Heads of Function</h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.seniorLeadership.map((leader) => (
              <TeamCard key={leader.id} member={leader} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}