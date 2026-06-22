'use client';

import React, { useState } from 'react';

// --- CURATED DATA WITH CONDENSED INFO & LIVE UNSPLASH IMAGE LINKS ---
const teamData = {
  executives: [
    {
      id: 'ceo',
      name: 'Rania Jamil Choudhury',
      roleTitle: 'Founder & Chief Executive Officer',
      badge: 'Strategy & Vision',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Provides cross-functional strategic leadership aligning corporate vision with enterprise market growth.',
      responsibilities: [
        'Sets long-term corporate vision and strategic direction',
        'Drives executive alignment and cross-functional accountability',
        'Anchors critical enterprise and government relationships',
        'Secures investor relations and financial health milestones'
      ]
    },
    {
      id: 'coo',
      name: 'Chief Operating Officer',
      roleTitle: 'Chief Operating Officer',
      badge: 'Operations & Delivery',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Manages core business operations, scaling delivery capacity while maintaining rigorous quality guardrails.',
      responsibilities: [
        'Oversees global end-to-end service delivery tracks',
        'Balances resource allocation and structural capacity',
        'Optimizes internal PMO and customer success workflows',
        'Governs operational KPIs and structural efficiency'
      ]
    },
    {
      id: 'cto',
      name: 'Chief Technology Officer',
      roleTitle: 'Chief Technology Officer',
      badge: 'Technology & Architecture',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Architects complex ecosystem frameworks across Microsoft Fabric, Azure AI data engineering infrastructure.',
      responsibilities: [
        'Enforces enterprise technical architecture frameworks',
        'Directs Microsoft and Azure strategic technical alliances',
        'Maintains engineering standards for core Fabric solutions',
        'Architects zero-trust security and cloud governance models'
      ]
    },
    {
      id: 'caio',
      name: 'Chief AI & Innovation Officer',
      roleTitle: 'Chief AI & Innovation Officer',
      badge: 'AI Strategy & Innovation',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Leads artificial intelligence strategy, agentic automation fabrics, and enterprise RAG architecture implementation.',
      responsibilities: [
        'Defines R&D roadmaps for GenAI and autonomous frameworks',
        'Deploys secure enterprise RAG and conversational tools',
        'Enforces strict alignment with international AI frameworks',
        'Integrates cognitive agents into existing system pipelines'
      ]
    },
    {
      id: 'cdao',
      name: 'Chief Data & Analytics Officer',
      roleTitle: 'Chief Data & Analytics Officer',
      badge: 'Data Strategy & Analytics',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Oversees organizational data intelligence layouts, semantic asset modeling, and strict compliance tracks.',
      responsibilities: [
        'Establishes structural master data governance standards',
        'Directs automated lineage monitoring using Microsoft Purview',
        'Manages enterprise-wide Power BI Centers of Excellence',
        'Ensures adherence to global data regulatory policies'
      ]
    },
    {
      id: 'cro',
      name: 'Chief Revenue Officer',
      roleTitle: 'Chief Revenue Officer',
      badge: 'Revenue & Growth',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Drives dynamic market acquisition channels, partnership opportunities, and commercial scaling operations.',
      responsibilities: [
        'Controls high-velocity enterprise pipeline optimization',
        'Maintains key cloud provider marketplace strategies',
        'Coordinates targeted cross-sell and retention playbooks',
        'Aligns market propositions with regional demands'
      ]
    },
    {
      id: 'cmo',
      name: 'Chief Marketing Officer',
      roleTitle: 'Chief Marketing Officer',
      badge: 'Brand & Market Growth',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Fosters global brand positioning and digital pipeline growth across specialized technology verticals.',
      responsibilities: [
        'Directs global market positioning and research outputs',
        'Scales multichannel lead generation and SEO metrics',
        'Preserves digital assets and public capability footprints',
        'Architects structural partner co-marketing efforts'
      ]
    },
    {
      id: 'cfo',
      name: 'Chief Financial Officer',
      roleTitle: 'Chief Financial Officer',
      badge: 'Finance & Governance',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Governs corporate fiscal policy, precision allocation modeling, and regulatory accounting infrastructure.',
      responsibilities: [
        'Manages enterprise P&L structures and forecasting engines',
        'Secures rigorous financial compliance and auditing rules',
        'Structures value pricing models for strategic contracts',
        'Advises boards on regional resource growth capitalization'
      ]
    }
  ],
  seniorLeadership: [
    {
      id: 'hpd',
      name: 'Head of Product & SaaS Platforms',
      roleTitle: 'Head of Product & SaaS Platforms',
      badge: 'Product & SaaS',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Steers the structural roadmap and life-cycle development of HIVENOX and automated platforms.',
      responsibilities: [
        'Owns target product roadmaps and release cycles',
        'Synthesizes client data points into concrete architecture plans',
        'Optimizes monetization tiers and user conversion curves'
      ]
    },
    {
      id: 'hed',
      name: 'Head of Engineering & Delivery',
      roleTitle: 'Head of Engineering & Delivery',
      badge: 'Engineering & DevOps',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Coordinates high-performance engineering groups to ship cloud deployments reliably.',
      responsibilities: [
        'Directs engineering agile groups across core workstreams',
        'Enforces secure automated CI/CD code transport paths',
        'Maintains target performance parameters for systems'
      ]
    },
    {
      id: 'hcs',
      name: 'Head of Customer Success',
      roleTitle: 'Head of Customer Success',
      badge: 'Customer Success',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Guarantees scalable client business realization metrics across all deployed solutions.',
      responsibilities: [
        'Structures automated modern lifecycle onboarding modules',
        'Monitors active engagement risk indicators and client health',
        'Funnels critical operational loop feedback directly to product'
      ]
    },
    {
      id: 'hpm',
      name: 'Head of PMO & Implementations',
      roleTitle: 'Head of PMO & Implementations',
      badge: 'PMO & Governance',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Implements precision delivery frameworks across multi-tiered transformation portfolios.',
      responsibilities: [
        'Coordinates project dependencies and delivery paths',
        'Mitigates active blockers through structured risk logic',
        'Secures operational alignment with core service delivery'
      ]
    },
    {
      id: 'hpc',
      name: 'Head of People & Culture',
      roleTitle: 'Head of People & Culture',
      badge: 'People & Capability',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Handles technical sourcing models and continuous capability scaling strategies.',
      responsibilities: [
        'Optimizes international technical candidate recruitment tracks',
        'Designs strategic learning programs for specialized skill sets',
        'Maintains legal, visa, and cross-border organizational metrics'
      ]
    },
    {
      id: 'hgr',
      name: 'Head of Governance, Risk & Compliance',
      roleTitle: 'Head of Governance, Risk & Compliance',
      badge: 'GRC & Security',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Protects systems through strict policy monitoring and structural compliance frameworks.',
      responsibilities: [
        'Manages centralized operational threat ledger systems',
        'Leads validation for complex SOC 2 and ISO procedures',
        'Structures data processing compliance across jurisdictions'
      ]
    },
    {
      id: 'ea',
      name: 'Executive Assistant',
      roleTitle: 'EA & Corporate Operations Manager',
      badge: 'Operations & Admin',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Optimizes executive scheduling patterns and critical business operation functions.',
      responsibilities: [
        'Coordinates leadership operational pipelines and workflows',
        'Manages key administrative vendor service contracts',
        'Maintains compliance filing logs with statutory bodies'
      ]
    }
  ]
};

// --- SINGLE TEAM CARD COMPONENT WITH ACCORDION DROPDOWN ---
const TeamCard = ({ member }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
      <div className="p-5 flex gap-4 items-start">
        {/* Responsive Avatar Container */}
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative shadow-sm">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>

        {/* Core Detail Layout */}
        <div className="flex-1 min-w-0">
          <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded uppercase tracking-wider mb-1.5">
            {member.badge}
          </span>
          <h3 className="text-base font-bold text-gray-900 truncate">
            {member.name}
          </h3>
          <p className="text-xs text-blue-600 font-medium tracking-tight mb-2">
            {member.roleTitle}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Accordion Action Block */}
      <div className="px-5 pb-4 border-t border-gray-50 bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full pt-3 flex items-center justify-between text-left text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors focus:outline-none group"
        >
          <span>Key Responsibilities</span>
          <span className={`transform transition-transform duration-200 text-[10px] ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}>
            ▼
          </span>
        </button>

        {/* Animated Container */}
        <div className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <ul className="space-y-2 pl-1">
              {member.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                  <span className="leading-normal">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN WRAPPER SECTION WITH SUB-CATEGORY TABS ---
export default function LeadershipTeam() {
  const [activeTab, setActiveTab] = useState('executives');

  return (
    <section className="py-16 bg-gray-50/50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Short Executive Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Leadership Matrix
          </p>
          <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight sm:text-4xl">
            Our Leadership Team
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            AI Solution Technologies is led by enterprise technology veterans, data architects, and solution specialists spanning all functional vectors. Together, this multi-disciplinary team covers the full lifecycle of complex enterprise data governance, custom engineering, and automated RAG execution.
          </p>
        </div>

        {/* Navigation Category Switcher */}
        <div className="flex border-b border-gray-200 mb-8 max-w-md">
          <button
            onClick={() => setActiveTab('executives')}
            className={`flex-1 pb-3 text-sm font-semibold transition-all border-b-2 focus:outline-none ${activeTab === 'executives' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            Executive Leadership (C-Suite)
          </button>
          <button
            onClick={() => setActiveTab('seniorLeadership')}
            className={`flex-1 pb-3 text-sm font-semibold transition-all border-b-2 focus:outline-none ${activeTab === 'seniorLeadership' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
          >
            Functional Heads
          </button>
        </div>

        {/* Dynamic Card Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData[activeTab].map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}