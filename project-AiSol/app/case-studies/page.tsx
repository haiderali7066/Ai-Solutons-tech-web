'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Target, Zap, TrendingUp, ShieldCheck, 
  Layers, Cpu, Database, Network, Server, Activity, 
  Droplets, HardHat, AlertTriangle, ChevronRight, Clock, HelpCircle
} from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ══════════════════════════════════════
   HIGH-FIDELITY SOLUTION DATA
══════════════════════════════════════ */
const BLUEPRINTS_DATA = [
  {
    id: 'blueprint-01-mining',
    num: '01',
    title: 'Microsoft Fabric Integration',
    industry: 'Mining',
    tagline: 'Unifying mining operational data into a real-time, AI-ready platform on Microsoft Fabric.',
    overview: 'Mining operations generate enormous volumes of data across extraction, processing, equipment telemetry, logistics, and safety systems. Without a unified platform, this data remains siloed by site and system, making production visibility and predictive maintenance reactive rather than real-time. Microsoft Fabric — with its unified OneLake architecture, Real-Time Intelligence capabilities, and native Power BI integration — is the ideal platform to address this challenge at scale.',
    challenges: [
      'Equipment sensor and IoT data siloed across SCADA, PLC, and ERP systems with no unified view',
      'Production and yield reporting compiled manually from end-of-shift spreadsheet submissions',
      'Maintenance decisions driven by fixed schedules rather than live equipment condition data',
      'Safety monitoring dependent on lagging reports rather than real-time threshold alerting'
    ],
    approach: [
      { phase: 'Phase 1: Fabric Assessment', desc: 'Tenant readiness, capacity planning (F4–F32), source system inventory, OneLake architecture design.' },
      { phase: 'Phase 2: Medallion Lakehouse Build', desc: 'Bronze ingestion via Eventstream from IoT/SCADA; Silver cleansing; Gold dimensional models for BI.' },
      { phase: 'Phase 3: Real-Time Intelligence', desc: 'KQL databases for high-velocity telemetry; live equipment health dashboards; safety threshold alerting.' },
      { phase: 'Phase 4: AI & Predictive Models', desc: 'Azure ML for predictive maintenance; anomaly detection on sensor streams; Purview governance rollout.' }
    ],
    delivers: [
      'Equipment health and OEE visible in real time across all sites from a single Power BI workspace',
      'Production yield and shift performance reporting automated from Fabric — end-of-shift manual reporting eliminated',
      'Predictive maintenance models reduce reactive maintenance scheduling',
      'Full data lineage across all sensor, ERP, and reporting assets via Microsoft Purview'
    ],
    timeline: [
      { name: 'Phase 1: Assessment & Architecture', time: '2–4 Weeks', deliverable: 'Fabric readiness report' },
      { name: 'Phase 2: Lakehouse Build (Bronze–Gold)', time: '4–8 Weeks', deliverable: 'OneLake on production' },
      { name: 'Phase 3: Real-Time Dashboards', time: '3–5 Weeks', deliverable: 'Power BI live dashboards' },
      { name: 'Phase 4: Predictive AI Models', time: '6–10 Weeks', deliverable: 'ML models + alerting' }
    ],
    totalWeeks: '15–27 Weeks',
    result: 'Real-Time OEE & Asset Health Live',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80',
    icon: Database,
    techStack: {
      'Unified Platform': 'Microsoft Fabric (F4–F32 capacity), OneLake',
      'Real-Time Ingestion': 'Fabric Eventstream, Azure IoT Hub, Azure Event Hubs',
      'Data Storage': 'Fabric Lakehouse (Delta), KQL Databases, Fabric Data Warehouse',
      'Analytics': 'Power BI (Direct Lake mode), Fabric Real-Time Dashboards',
      'AI & ML': 'Azure Machine Learning, Azure AI Anomaly Detection',
      'Governance': 'Microsoft Purview, Microsoft Entra ID, Sensitivity Labels'
    }
  },
  {
    id: 'blueprint-02-energy',
    num: '02',
    title: 'Data Engineering & Integration',
    industry: 'Oil, Gas & Energy',
    tagline: 'Building resilient, multi-site data pipelines across rig, pipeline, and refinery systems.',
    overview: 'Oil, gas, and energy operations generate high-volume sensor and operational data across rigs, pipelines, and refineries — frequently siloed by site, vendor, and system. Building a unified, governed data pipeline across these environments requires expertise in real-time ingestion, complex ETL/ELT transformation logic, multi-source API integration, and change data capture from operational control systems.',
    challenges: [
      'Sensor and operational data from rigs, pipelines, and refineries siloed across sites with no central ingestion layer',
      'Safety and compliance reporting assembled manually from multiple systems each reporting cycle',
      'SSIS-era pipeline infrastructure unable to handle real-time data volumes or cloud-based destinations',
      'No consistent error handling, retry logic, or data lineage tracking across the pipeline estate'
    ],
    approach: [
      { phase: 'Phase 1: Architecture Assessment', desc: 'Site-by-site data source inventory; integration pattern selection; medallion architecture design.' },
      { phase: 'Phase 2: Real-Time Ingestion Build', desc: 'Azure Event Hubs and Fabric Eventstream for sensor streams; ADF for batch ERP integration; CDC from control systems.' },
      { phase: 'Phase 3: ETL/ELT Transformation', desc: 'Business rule application; data cleansing; Bronze-Silver-Gold medallion build; error handling and alerting.' },
      { phase: 'Phase 4: Serve & Compliance Automation', desc: 'Safety dashboards; HSE compliance reporting workflows; audit trail via Purview; executive operations view.' }
    ],
    delivers: [
      'Real-time operational data from all sites consolidated into a single Fabric Lakehouse',
      'HSE compliance reports generated automatically each reporting cycle from governed data',
      'Predictive maintenance alerts delivered to operations teams before equipment failure',
      'Full pipeline lineage documented in Purview — every data movement traceable to source'
    ],
    timeline: [
      { name: 'Phase 1: Assessment & Architecture', time: '3–5 Weeks', deliverable: 'Pipeline design document' },
      { name: 'Phase 2: Ingestion Pipelines', time: '6–10 Weeks', deliverable: 'Live data flowing to Fabric' },
      { name: 'Phase 3: ETL/ELT Transformation', time: '4–6 Weeks', deliverable: 'Gold layer ready for BI' },
      { name: 'Phase 4: Compliance Automation', time: '6–10 Weeks', deliverable: 'HSE reporting automated' }
    ],
    totalWeeks: '19–31 Weeks',
    result: 'HSE Compliance Reporting Automated',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1600&q=80',
    icon: Network,
    techStack: {
      'Real-Time Ingestion': 'Azure Event Hubs, Fabric Eventstream, Azure IoT Hub',
      'Batch Integration': 'Azure Data Factory, REST/SOAP API connectors',
      'Change Data Capture': 'CDC pipelines from SCADA / control databases',
      'Data Platform': 'Microsoft Fabric, OneLake, Delta Lake',
      'Orchestration': 'ADF triggers, Fabric Data Factory, Azure DevOps CI/CD',
      'Governance': 'Microsoft Purview, Data Lineage, Audit Logging'
    }
  },
  {
    id: 'blueprint-03-logistics',
    num: '03',
    title: 'Data Modelling & Warehousing',
    industry: 'Transport & Logistics',
    tagline: 'Designing a unified data model across fleet, carrier, and ERP systems for real-time logistics intelligence.',
    overview: 'Transport and logistics organisations manage fleet, route, carrier, and delivery data across telematics platforms, ERP systems, and third-party carrier portals — each with different definitions, identifiers, and update frequencies. Without a well-designed underlying data model, Power BI dashboards sit on fragile, inconsistent foundations. A robust star schema — with conformed dimensions for vehicle, route, carrier, and date — is the prerequisite for any meaningful analytics capability.',
    challenges: [
      'Delivery performance data spread across telematics, carrier portals, and ERP with no common key to join on',
      'Inconsistent vehicle and route identifiers across systems mean the same entity appears under multiple names',
      'No master data management discipline — same carrier in billing and operations is often two different records',
      'Reporting built directly on transactional tables rather than a governed semantic layer, leading to inconsistent KPIs'
    ],
    approach: [
      { phase: 'Phase 1: Data Architecture Assessment', desc: 'Source system inventory; entity relationship mapping; MDM scope definition across vehicle, route, carrier, date.' },
      { phase: 'Phase 2: Dimensional Model Design', desc: 'Star schema design — Fact_Deliveries with DIM_Route, DIM_Vehicle, DIM_Carrier, DIM_Date; SCD Type 2 for carrier changes.' },
      { phase: 'Phase 3: Warehouse Build', desc: 'Fabric Data Warehouse provisioning; T-SQL object creation; RLS and column-level security; performance tuning.' },
      { phase: 'Phase 4: Semantic Model & Certification', desc: 'Direct Lake semantic model in Power BI; certified dataset publication; DAX measures; BI CoE governance rollout.' }
    ],
    delivers: [
      'Single, consistent definition of on-time delivery across all dashboards and reporting tools',
      'Carrier performance and fleet utilisation reportable with a single click from a governed semantic model',
      'Demand forecasting models have a clean, well-structured feature layer to build on',
      'New Power BI reports buildable by business users against certified datasets — no dependency on IT for each report'
    ],
    timeline: [
      { name: 'Phase 1: Architecture & MDM Design', time: '2–4 Weeks', deliverable: 'Data model blueprint' },
      { name: 'Phase 2: Dimensional Model Build', time: '3–6 Weeks', deliverable: 'Star schema in Fabric DW' },
      { name: 'Phase 3: Warehouse & Security', time: '3–5 Weeks', deliverable: 'Warehouse production-ready' },
      { name: 'Phase 4: Semantic Model & CoE', time: '3–5 Weeks', deliverable: 'Certified datasets live' }
    ],
    totalWeeks: '11–20 Weeks',
    result: 'Single Source of On-Time Metrics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a00?auto=format&fit=crop&w=1600&q=80',
    icon: Layers,
    techStack: {
      'Data Warehouse': 'Microsoft Fabric Data Warehouse, Azure Synapse',
      'Modelling Framework': 'Star Schema, Data Vault 2.0 (Hub/Satellite/Link)',
      'MDM System': 'Golden record design, entity resolution, SCD Type 1/2/3',
      'Analytics Layer': 'Power BI Direct Lake, DAX semantic models, certified datasets',
      'Data Quality': 'Automated profiling, validation rules, quality dashboards',
      'Governance': 'Microsoft Purview, BI Centre of Excellence framework'
    }
  },
  {
    id: 'blueprint-04-construction',
    num: '04',
    title: 'Business Intelligence & Analytics',
    industry: 'Construction & Engineering',
    tagline: 'Replacing manual project cost reporting with a live construction command centre in Power BI.',
    overview: 'Construction and engineering firms manage project cost, progress, and subcontractor performance across multiple concurrent projects, typically through a combination of site-level spreadsheets and monthly consolidated reports. By the time cost overruns appear in reporting, the opportunity to intervene has often already passed. A well-designed Power BI solution — pulling BOQ, actuals, and progress data directly from source systems — shifts the commercial team from reactive month-end reporting to live operational intelligence.',
    challenges: [
      'BOQ vs actual cost variance only visible at month-end, after costs are already locked in',
      'Commercial teams spend 3–5 days per close cycle manually reconciling site cost reports',
      'Project directors lack a consolidated, multi-project margin view in real time',
      'Subcontractor progress data held in site spreadsheets with no connection to the financial system'
    ],
    approach: [
      { phase: 'Phase 1: BI Assessment & Mapping', desc: 'Source system identification; KPI definition with commercial team; report specification.' },
      { phase: 'Phase 2: Data Platform Integration', desc: 'ADF pipelines from ERP and project systems into Fabric Lakehouse; medallion build; cost and progress data model.' },
      { phase: 'Phase 3: Dashboard Development', desc: 'Power BI — BOQ vs actual by trade and project; variance alerts; CFO executive view; project director operational view.' },
      { phase: 'Phase 4: Self-Service Enablement', desc: 'Certified dataset publication; RLS by project access; CoE training for commercial team; governance framework rollout.' }
    ],
    delivers: [
      'BOQ vs actual cost variance visible in real time by trade package, project, and portfolio',
      'Month-end commercial reporting time reduced from 3–5 days to same-day automated refresh',
      'Project directors can see margin at risk across all concurrent projects from a single dashboard',
      'Finance and commercial teams working from the same certified dataset — no version conflicts'
    ],
    timeline: [
      { name: 'Phase 1: Assessment & Specification', time: '2–3 Weeks', deliverable: 'Report spec signed off' },
      { name: 'Phase 2: Data Platform & Pipelines', time: '4–7 Weeks', deliverable: 'Data flowing to Fabric' },
      { name: 'Phase 3: Dashboard Build', time: '3–5 Weeks', deliverable: 'Power BI dashboards live' },
      { name: 'Phase 4: Self-Service & CoE', time: '2–3 Weeks', deliverable: 'Team trained, certified' }
    ],
    totalWeeks: '11–18 Weeks',
    result: 'Month-End Close Time Reduced by 80%',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    icon: HardHat,
    techStack: {
      'BI Platform': 'Power BI (Direct Lake mode), Power BI Premium / Fabric capacity',
      'Data Platform': 'Microsoft Fabric Lakehouse, Azure Data Factory',
      'Semantic Layer': 'DAX measures, star schema, certified dataset publication',
      'Security Access': 'Row-Level Security by project, Column-Level Security for cost data',
      'Self-Service': 'Power BI dataflows, composite models, BI CoE toolkit',
      'Governance': 'Microsoft Purview, deployment pipelines (dev/test/prod)'
    }
  },
  {
    id: 'blueprint-05-health',
    num: '05',
    title: 'AI & Intelligent Systems',
    industry: 'Health',
    tagline: 'Deploying a governed, private AI assistant over clinical and policy documentation — with full audit trail.',
    overview: "Healthcare organisations hold large volumes of policy, procedure, clinical guideline, and operational documentation — often spread across SharePoint libraries, shared drives, and legacy document management systems. Staff spend significant time searching for the correct, current version of a policy or clinical protocol. A private, governed AI assistant — built on Azure OpenAI and Azure AI Search within the organisation's own tenant — addresses this directly while satisfying privacy, access control, and auditability requirements.",
    challenges: [
      'Policies and procedures spread across multiple SharePoint sites, shared drives, and legacy document systems',
      'Staff unable to quickly determine whether they have the current approved version of a clinical guideline',
      'Strict access control requirements — staff must only see documents they are authorized to access',
      'Every AI-assisted query must be logged and auditable for clinical governance and regulatory purposes'
    ],
    approach: [
      { phase: 'Phase 1: Privacy & Governance Design', desc: 'Data classification; access control design; Entra ID RBAC mapping; AI governance framework; Purview sensitivity labelling.' },
      { phase: 'Phase 2: Knowledge Base Build', desc: 'Document ingestion from SharePoint and approved stores; chunking and embedding pipeline; Azure AI Search index build.' },
      { phase: 'Phase 3: Private AI Deployment', desc: 'Azure OpenAI private tenant deployment; RAG architecture with citation grounding; Teams and web UI deployment; hallucination controls.' },
      { phase: 'Phase 4: Operational AI Expansion', desc: 'Operational analytics pilot; resourcing dashboards with RLS; model monitoring; responsible AI review cycle.' }
    ],
    delivers: [
      'Staff locate correct, current policies and clinical guidelines via natural language query in seconds',
      'Every AI response grounded and cited — no hallucinated policy content surfaced to clinical staff',
      'Role-based access enforced at retrieval layer — staff cannot surface documents outside their authorisation',
      'Full audit trail in Purview — every query, response, and source document logged for governance review'
    ],
    timeline: [
      { name: 'Phase 1: Privacy & Governance Design', time: '3–5 Weeks', deliverable: 'Access control framework' },
      { name: 'Phase 2: Knowledge Base Build', time: '4–7 Weeks', deliverable: 'AI Search index live' },
      { name: 'Phase 3: Private AI Deployment', time: '4–7 Weeks', deliverable: 'AI assistant in Teams' },
      { name: 'Phase 4: Operational AI Expansion', time: '5–9 Weeks', deliverable: 'Dashboards + monitoring' }
    ],
    totalWeeks: '16–28 Weeks',
    result: '100% Citation Grounding in Private Tenant',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    icon: Activity,
    techStack: {
      'AI Engine': 'Azure OpenAI (private tenant deployment, GPT-4o)',
      'Retrieval Framework': 'Azure AI Search — vector, keyword, and hybrid search',
      'Knowledge Sources': 'SharePoint, Blob Storage, approved document libraries',
      'Access Control': 'Microsoft Entra ID, RBAC, Zero Trust, Row-Level Security',
      'Governance Audit': 'Microsoft Purview — sensitivity labels, lineage, audit logging',
      'Interface Points': 'Microsoft Teams AI integration, custom web chat interface'
    }
  },
  {
    id: 'blueprint-06-rail',
    num: '06',
    title: 'Cloud Migration & Modernisation',
    industry: 'Rail',
    tagline: 'Migrating rail asset and maintenance systems from legacy on-premises infrastructure to a governed Azure platform.',
    overview: 'Rail operators frequently carry significant legacy infrastructure debt — on-premises SQL Server databases, SSIS pipeline estates, and maintenance management systems that predate cloud adoption. Migrating these workloads to Azure requires careful planning around cutover, safety-critical data integrity, parallel-run validation, and post-migration governance — particularly given the auditability requirements imposed on safety-critical rail operations.',
    challenges: [
      'Legacy on-premises SQL Server and SSIS infrastructure unable to support real-time analytics or cloud-native AI',
      'Asset and maintenance data held in systems with no lineage tracking or audit capability',
      'Migration risk is high given safety-critical nature of the data — no tolerance for data loss or integrity gaps',
      'Scheduling and on-time performance reporting disconnected from the asset management systems'
    ],
    approach: [
      { phase: 'Phase 1: Cloud Readiness Assessment', desc: 'Infrastructure inventory; data classification; migration strategy selection (rehost/replatform/refactor); Azure landing zone design.' },
      { phase: 'Phase 2: Azure Landing Zone & Security', desc: 'Subscription governance; Entra ID integration; zero-trust network design; Purview provisioning and classification.' },
      { phase: 'Phase 3: Data Migration', desc: 'SQL Server to Azure SQL Managed Instance; SSIS to ADF migration and re-engineering; cutover planning and parallel-run validation.' },
      { phase: 'Phase 4: Modernisation & Handover', desc: 'Fabric Lakehouse build on migrated data; Power BI performance dashboards; DevOps CI/CD; runbooks and operational handover.' }
    ],
    delivers: [
      'Legacy on-premises SQL Server and SSIS estate migrated to Azure with zero data loss validated in parallel run',
      'Full data lineage and audit trail established in Purview across all migrated assets',
      'Fleet and on-time performance dashboards live in Power BI — previously unavailable from on-premises infrastructure',
      'CI/CD pipeline established for ongoing data engineering — no more manual deployment of pipeline changes'
    ],
    timeline: [
      { name: 'Phase 1: Cloud Readiness Assessment', time: '2–4 Weeks', deliverable: 'Migration strategy doc' },
      { name: 'Phase 2: Landing Zone & Security', time: '3–5 Weeks', deliverable: 'Azure environment ready' },
      { name: 'Phase 3: Data Migration', time: '6–10 Weeks', deliverable: 'Data on Azure, validated' },
      { name: 'Phase 4: Modernisation & Handover', time: '5–9 Weeks', deliverable: 'Analytics live, CI/CD set' }
    ],
    totalWeeks: '16–28 Weeks',
    result: 'Zero Data Loss Infrastructure Cutover',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80',
    icon: Server,
    techStack: {
      'Cloud Platform': 'Microsoft Azure, Azure Landing Zone, Subscription Governance',
      'Database Target': 'SQL Server → Azure SQL Managed Instance / Fabric Lakehouse',
      'Pipeline Engine': 'SSIS → Azure Data Factory / Fabric Data Factory',
      'DevOps Ecosystem': 'Azure DevOps, GitHub, CI/CD pipelines, Bicep / Terraform IaC',
      'Security Core': 'Microsoft Entra ID, Zero Trust, Azure Policy, Key Vault',
      'Data Governance': 'Microsoft Purview — lineage, classification, audit, DLP'
    }
  },
  {
    id: 'blueprint-07-water',
    num: '07',
    title: 'Data Governance & Compliance',
    industry: 'Water',
    tagline: 'Establishing an end-to-end data governance framework across network, meter, and regulatory reporting data.',
    overview: 'Water utilities operate under strict environmental and regulatory reporting obligations while managing vast networks of sensors, meters, treatment systems, and asset management platforms. Data governance in this context is not a discretionary activity — it is a prerequisite for defensible regulatory submissions, accurate leak detection, and auditable asset management. A layered governance framework — spanning classification, lineage, access control, and compliance documentation — ensures every data asset can be traced, trusted, and reported on accurately.',
    challenges: [
      'Network sensor and meter data governed inconsistently across sites, making regulatory submissions vulnerable to challenge',
      'No data classification or sensitivity labelling across assets — high-value operational data treated the same as low-risk administrative data',
      'Regulatory and environmental reports assembled manually each cycle from multiple ungoverned sources',
      'No data lineage to demonstrate to regulators exactly where reported figures originate'
    ],
    approach: [
      { phase: 'Phase 1: Governance Assessment', desc: 'Data maturity assessment; regulatory obligation mapping; ownership and stewardship assignment; business glossary design.' },
      { phase: 'Phase 2: Purview Implementation', desc: 'Automated data discovery across Azure and on-premises; sensitivity labelling via MIP; lineage across ADF, Fabric, and Power BI.' },
      { phase: 'Phase 3: Access Control & Security', desc: 'RBAC design; row-level and column-level security in Power BI; Entra ID integration; zero-trust network access for data platform.' },
      { phase: 'Phase 4: Compliance Automation', desc: 'Regulatory reporting automation; audit evidence packages; AI risk classification and governance model rollout.' }
    ],
    delivers: [
      'Every data asset across the network classified, labelled, and assigned a data owner in Purview',
      'End-to-end lineage documented from sensor source through to regulatory submission — auditable on demand',
      'Regulatory reporting cycle time reduced as governed data feeds directly into automated reporting workflows',
      'Data governance maturity advanced from ad-hoc (Level 1) to Managed (Level 3) within the engagement'
    ],
    timeline: [
      { name: 'Phase 1: Governance Assessment', time: '2–4 Weeks', deliverable: 'Maturity assessment report' },
      { name: 'Phase 2: Purview Implementation', time: '4–7 Weeks', deliverable: 'Catalog and lineage live' },
      { name: 'Phase 3: Access Control & Security', time: '3–5 Weeks', deliverable: 'RBAC enforced platform-wide' },
      { name: 'Phase 4: Compliance Automation', time: '4–8 Weeks', deliverable: 'Automated reporting live' }
    ],
    totalWeeks: '13–24 Weeks',
    result: 'Maturity Level Advanced from L1 to L3',
    image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=1600&q=80',
    icon: Droplets,
    techStack: {
      'Governance Platform': 'Microsoft Purview — catalog, lineage, classification, DLP',
      'Sensitivity Control': 'Microsoft Information Protection (MIP), Purview labels',
      'Access Layer': 'Microsoft Entra ID, RBAC, Row-Level Security, Column-Level Security',
      'Compliance Scope': 'APRA, EPA, State water regulatory frameworks',
      'AI Safeguards': 'AI risk classification, EU AI Act alignment, explainability controls',
      'Policy Enforcer': 'Azure Policy, Purview access policies, audit logging'
    }
  },
  {
    id: 'blueprint-08-it',
    num: '08',
    title: 'CRM & Business Applications',
    industry: 'IT & Communications',
    tagline: 'Building a unified Customer 360 platform and churn prediction capability on Dynamics 365 and Microsoft Fabric.',
    overview: 'IT and communications organisations hold rich customer data across CRM, billing, support, network, and usage systems — but these systems rarely speak to each other at the level needed for meaningful churn prediction or proactive network issue management. By connecting Dynamics 365 CRM to Microsoft Fabric and building a governed Customer 360 model, organisations can surface churn risk directly in the agent workspace, link network issues to customer experience in real time, and build a data asset that compounds in value over time.',
    challenges: [
      'Customer data exists across Dynamics 365, billing, support ticketing, and network systems with no unified customer identifier',
      'Churn prediction models cannot be built without a consistent, joined customer feature set — which does not currently exist',
      'Network performance issues are identified and resolved without any visibility into which customers are impacted',
      'Account managers work from Dynamics 365 with no enriched insight — churn risk, usage trends, or support history are not surfaced'
    ],
    approach: [
      { phase: 'Phase 1: CRM & Data Assessment', desc: 'D365 data model review; source system inventory; customer identity resolution design; churn hypothesis definition.' },
      { phase: 'Phase 2: Customer 360 Platform Build', desc: 'D365 → Fabric CDC integration; billing, support, and network data ingestion; unified customer 360 model in Fabric Lakehouse.' },
      { phase: 'Phase 3: Analytics & Churn Model', desc: 'Customer 360 Power BI dashboard; Azure ML churn prediction model; network anomaly detection; NPS and satisfaction analytics.' },
      { phase: 'Phase 4: D365 Enrichment & Automation', desc: 'Churn score surfaced in D365 agent workspace; Power Automate retention workflow triggers; ongoing model retraining schedule.' }
    ],
    delivers: [
      'Single, governed Customer 360 profile combining CRM, billing, support, and network data',
      'Churn prediction model identifies at-risk customers weeks before they cancel or escalate',
      'Account managers see churn risk score and network impact directly in Dynamics 365 — no separate report needed',
      'Network issues correlated with customer impact in real time — support teams know which customers to proactively contact'
    ],
    timeline: [
      { name: 'Phase 1: CRM & Data Assessment', time: '2–4 Weeks', deliverable: 'Data model design' },
      { name: 'Phase 2: Customer 360 Build', time: '5–9 Weeks', deliverable: 'Unified model in Fabric' },
      { name: 'Phase 3: Analytics & Churn Model', time: '5–8 Weeks', deliverable: 'Dashboards + ML model live' },
      { name: 'Phase 4: D365 Enrichment', time: '3–5 Weeks', deliverable: 'Churn score in D365' }
    ],
    totalWeeks: '15–26 Weeks',
    result: 'Proactive Churn Score Embedded in CRM Workspace',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    icon: Target,
    techStack: {
      'CRM Core': 'Microsoft Dynamics 365 — Sales, Customer Service, Dataverse',
      'Integration Layer': 'D365 OData / DIXF → Fabric CDC, Azure Data Factory',
      'Data Platform': 'Microsoft Fabric, OneLake, Fabric Lakehouse',
      'Analytics Suite': 'Power BI — Customer 360, Churn, NPS, Network dashboards',
      'AI Model Ecosystem': 'Azure Machine Learning — churn prediction, network anomaly detection',
      'Automation Engine': 'Power Automate — retention workflow triggers, proactive notifications'
    }
  }
];

export default function DeepBlueprintsPage() {
  const [activeTab, setActiveTab] = useState<Record<string, 'overview' | 'architecture' | 'timeline'>>(() => {
    const initialTabs: Record<string, 'overview' | 'architecture' | 'timeline'> = {};
    BLUEPRINTS_DATA.forEach(b => { initialTabs[b.id] = 'overview'; });
    return initialTabs;
  });

  const toggleTab = (blueprintId: string, tab: 'overview' | 'architecture' | 'timeline') => {
    setActiveTab(prev => ({ ...prev, [blueprintId]: tab }));
  };

  return (
    <main className="min-h-screen bg-[#fafbfe] font-sans selection:bg-blue-600/30 overflow-x-hidden text-slate-800">
      
      {/* ════════ SECTION 1: CINEMATIC HERO (DARK) ════════ */}
      <section className="relative pt-36 pb-40 md:pt-52 md:pb-56 px-6 overflow-hidden bg-[#020817]">
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15 mix-blend-screen"
          aria-hidden="true"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-blue-600/20 to-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          <FadeInUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-bold tracking-widest text-blue-400 uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI Solution Technologies
            </span>
          </FadeInUp>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-none font-syne max-w-5xl mx-auto">
            Overview of Solutions we  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Provided.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
            Eight service lines. Eight industries. A comprehensive technical guide and architectural methodology blueprint for enterprise data and AI infrastructure delivery.
          </p>
        </div>
      </section>

      {/* ════════ SECTION 2: ARCHITECTURAL DEEP-DIVE GRID (WHITE & DARK MIX) ════════ */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 -mt-24 pb-32 space-y-24">
        {BLUEPRINTS_DATA.map((blueprint) => {
          const Icon = blueprint.icon;
          const currentTab = activeTab[blueprint.id] || 'overview';

          return (
            <FadeInUp key={blueprint.id}>
              {/* Giant Mixed Blueprint Container */}
              <div className="bg-white rounded-[3rem] border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 xl:grid-cols-12 group/card hover:shadow-2xl hover:border-slate-300/80 transition-all duration-500">
                
                {/* LEFT RAIL: The Industry Context Panel (Dark Glassmorphic Aesthetic) */}
                <div className="xl:col-span-4 bg-slate-950 p-8 sm:p-12 text-white relative flex flex-col justify-between overflow-hidden border-b xl:border-b-0 xl:border-r border-slate-800">
                  <div className="absolute inset-0 z-0 opacity-20 group-hover/card:scale-105 transition-transform duration-1000">
                    <img src={blueprint.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono font-bold tracking-widest text-blue-400">BLUEPRINT_ // {blueprint.num}</span>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 backdrop-blur-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <div>
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold uppercase tracking-wider text-slate-300">{blueprint.industry}</span>
                      <h2 className="text-3xl font-black font-syne tracking-tight mt-4 text-white leading-tight">{blueprint.title}</h2>
                    </div>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{blueprint.tagline}</p>
                  </div>

                  {/* Impact Status Card inside Rail */}
                  <div className="relative z-10 mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-emerald-400" /> Planned Architecture Impact
                      </p>
                      <p className="text-xl font-bold font-syne text-white mt-1 leading-tight">{blueprint.result}</p>
                    </div>
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-400" /> {blueprint.totalWeeks}
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> AI_READY</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT RAIL: The Enterprise Specification Matrix (Clean High-Contrast White) */}
                <div className="xl:col-span-8 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
                  <div>
                    {/* Navigation Filter Framework Tabs */}
                    <div className="flex border-b border-slate-100 pb-2 mb-8 overflow-x-auto gap-2 scrollbar-none">
                      <button 
                        onClick={() => toggleTab(blueprint.id, 'overview')}
                        className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-tight transition-all shrink-0 ${currentTab === 'overview' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
                      >
                        Architecture Overview
                      </button>
                      <button 
                        onClick={() => toggleTab(blueprint.id, 'architecture')}
                        className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-tight transition-all shrink-0 ${currentTab === 'architecture' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
                      >
                        Core Challenges & Approach
                      </button>
                      <button 
                        onClick={() => toggleTab(blueprint.id, 'timeline')}
                        className={`px-5 py-2.5 rounded-xl font-bold text-sm tracking-tight transition-all shrink-0 ${currentTab === 'timeline' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
                      >
                        Deployment Roadmap
                      </button>
                    </div>

                    {/* DYNAMIC WINDOW CONTAINER */}
                    <div className="min-h-[340px]">
                      
                      {/* TAB 1: OVERVIEW & TECH GRID */}
                      {currentTab === 'overview' && (
                        <div className="space-y-8 animate-fadeIn">
                          <div className="space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">Executive Summary</h4>
                            <p className="text-slate-600 font-light leading-relaxed text-base">{blueprint.overview}</p>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">Architecture Technology Stack</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {Object.entries(blueprint.techStack).map(([layer, tech]) => (
                                <div key={layer} className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex flex-col justify-center">
                                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">{layer}</span>
                                  <span className="text-sm font-bold text-slate-800 mt-0.5">{tech}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 2: CHALLENGES & APPROACH */}
                      {currentTab === 'architecture' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                          {/* Key Vulnerabilities / Challenges */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold flex items-center gap-1.5">
                              <AlertTriangle className="w-3.5 h-3.5" /> Industry Bottlenecks
                            </h4>
                            <ul className="space-y-3">
                              {blueprint.challenges.map((challenge, index) => (
                                <li key={index} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Architectural Implementation Methodology */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold flex items-center gap-1.5">
                              <Target className="w-3.5 h-3.5" /> Phased Execution Blueprint
                            </h4>
                            <div className="space-y-4">
                              {blueprint.approach.map((step, index) => (
                                <div key={index} className="border-l-2 border-slate-100 pl-4 space-y-1 hover:border-blue-500 transition-colors">
                                  <h5 className="text-xs font-bold text-slate-900">{step.phase}</h5>
                                  <p className="text-xs text-slate-500 font-light leading-relaxed">{step.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 3: TIMELINE & DELIVERABLES TABLE */}
                      {currentTab === 'timeline' && (
                        <div className="space-y-8 animate-fadeIn">
                          <div className="overflow-hidden border border-slate-100 rounded-2xl bg-slate-50/50">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="bg-slate-900 text-white text-[11px] font-mono uppercase tracking-wider">
                                  <th className="p-4 rounded-tl-2xl">Deployment Framework Phase</th>
                                  <th className="p-4">Duration</th>
                                  <th className="p-4 rounded-tr-2xl">Core Milestones</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 text-sm">
                                {blueprint.timeline.map((row, i) => (
                                  <tr key={i} className="hover:bg-white transition-colors">
                                    <td className="p-4 font-bold text-slate-800">{row.name}</td>
                                    <td className="p-4 font-mono text-xs text-slate-500 font-bold whitespace-nowrap">{row.time}</td>
                                    <td className="p-4 text-slate-600 font-light">{row.deliverable}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl space-y-2">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Platform Capabilities Out-Of-The-Box</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                              {blueprint.delivers.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Operational Footer Linkage */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-xs font-mono text-slate-400">ARCHITECTURE // SECURE DEPLOYMENT PROTOCOL</span>
                    <Link 
                      href={`/contact?blueprint=${blueprint.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-slate-900 group/link transition-colors"
                    >
                      Request Architecture Briefing
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </FadeInUp>
          );
        })}
      </section>

      {/* ════════ SECTION 3: REFINED METHODOLOGY OVERVIEW (WHITE) ════════ */}
      <section className="relative py-28 px-6 bg-white border-t border-slate-200/80 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <FadeInUp className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">Framework Blueprint Principles</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-syne tracking-tight">Our Execution Governance</h2>
            <p className="text-slate-500 text-lg font-light">
              We substitute experimental prototypes with hardened engineering, ensuring every data architecture deployment framework hits expected financial benchmarks.
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-[#fafbfe] border border-slate-200/60 p-10 rounded-[2.5rem] group hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">1. Infrastructure Audit</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Deep auditing of your current business endpoints, enterprise software records, and asset databases to target automation potential.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-[#fafbfe] border border-slate-200/60 p-10 rounded-[2.5rem] group hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">2. Custom Engineering</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                Zero packaged standard trade-offs. We engineer custom architectures strictly designed to mesh safely within regional compliance boundaries.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-[#fafbfe] border border-slate-200/60 p-10 rounded-[2.5rem] group hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">3. Accountable ROI Metrics</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">
                We establish hard production parameters prior to script deployment, using telemetry streams to trace accurate performance value.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════ SECTION 4: PREMIUM EMBEDDED CTA (DARK) ════════ */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none" />
        
        <FadeInUp className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-slate-400 uppercase">
            Initiate Engagement Pipeline
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-syne leading-tight">
            Ready to Implement a <br />Hardened Solution Blueprint?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Connect with our system architecture team to align your legacy operational infrastructure with modern AI readiness rules.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl"
            >
              Schedule System Architecture Briefing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInUp>
      </section>

    </main>
  );
}