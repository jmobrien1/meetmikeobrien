export interface CaseStudy {
  id: string;
  title: string;
  organization: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  approach: string;
  impact: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'mass-hix',
    title: 'Commonwealth of Massachusetts',
    organization: 'SMX',
    metric: '$55M',
    metricLabel: 'Annual Account Value',
    challenge:
      'The Commonwealth of Massachusetts needed to modernize its Healthcare Insurance Exchange — the largest cloud migration in state history. The engagement required navigating complex compliance requirements while maintaining critical citizen services.',
    approach:
      'Served as Executive Sponsor overseeing multi-year digital transformation. Led strategic pursuit, delivery oversight, and client relationship management. Grew the account through trust, consistent delivery, and proactive risk management.',
    impact:
      'Grew the overall Massachusetts account from $3M to $55M annually — 1,730% growth — making it the largest in the Digital Services business unit. Successfully delivered the largest cloud migration in Massachusetts history and won new business with 8 additional cabinet level agencies.',
    tags: ['Cloud Migration', 'Healthcare', 'State Government', 'Account Growth'],
  },
  {
    id: 'fed-law-enforcement',
    title: 'Federal Law Enforcement & National Security',
    organization: 'SMX',
    metric: '$500M+',
    metricLabel: 'Contract Captures',
    challenge:
      'Multiple federal agencies including the FBI, CISA, and Department of State needed digital transformation across complex, security-sensitive programs with strict compliance requirements.',
    approach:
      'Served as Executive Sponsor for multi-year digital transformation programs. Led cross-functional teams in cloud, data analytics, AI/ML, and agile delivery. Managed stakeholder relationships across agency leadership.',
    impact:
      'Captured over $500M in contract awards through strategic pursuit leadership. Achieved 25% year-over-year growth on existing accounts and consistently exceeded annual operating plans from 2020 to 2023.',
    tags: ['Federal', 'National Security', 'Digital Transformation', 'AI/ML'],
  },
  {
    id: 'federal-reserve',
    title: 'Federal Reserve 10-Year MSA',
    organization: 'Smartronix / SMX',
    metric: '10yr',
    metricLabel: 'Master Service Agreement',
    challenge:
      'The Federal Reserve required a long-term cloud services and modernization partner capable of meeting the highest standards of security, reliability, and operational excellence.',
    approach:
      'Led strategic capture and proposal development for a landmark managed services agreement. Established cloud solutions capabilities and built the trusted advisor relationship required for a decade-long partnership.',
    impact:
      'Won a 10-year Master Service Agreement — one of the most significant Federal deals captured. Established a foundation for ongoing cloud services and modernization work.',
    tags: ['Federal', 'Cloud Services', 'Managed Services', 'Long-term Partnership'],
  },
  {
    id: 'gsa-bpa',
    title: 'GSA Cloud Services BPA — $100M',
    organization: 'Aquilent',
    metric: '$100M',
    metricLabel: 'BPA Value',
    challenge:
      'GSA needed a cloud services blanket purchase agreement to streamline procurement of cloud solutions across federal agencies. The opportunity required rapid capability demonstration and partner ecosystem development.',
    approach:
      'Built and scaled a government cloud practice with full BD, capture, P&L, and partner management accountability. Achieved AWS Premier Partnership status to strengthen the competitive position.',
    impact:
      'Won the $100M GSA Cloud Services BPA and achieved $20M annual run rate within 3 months serving HHS-CMS and other Federal clients. Earned AWS Premier Partnership status.',
    tags: ['GSA', 'Cloud', 'AWS', 'BPA', 'Federal Procurement'],
  },
  {
    id: 'sgx',
    title: 'Seamless Government Experience (SGX)',
    organization: 'Thoughtworks',
    metric: '$5B+',
    metricLabel: 'Pipeline Built',
    challenge:
      'Government agencies struggle with fragmented, siloed services that force citizens to navigate multiple systems. Thoughtworks needed a flagship public sector platform offering built on composable, AI-driven architecture.',
    approach:
      'Authored "The Composable Agency" framework and scaled the SGX platform in partnership with Google Cloud. Built a PaaS-based platform deal — the first landmark deal of its kind at Thoughtworks.',
    impact:
      'Built a $5B+ strategic pipeline and closed $20M in AI and digital modernization engagements in the first year, exceeding forecast by 30%. Won the first landmark PaaS-based platform deal.',
    tags: ['AI', 'Composable Architecture', 'Google Cloud', 'PaaS', 'Platform'],
  },
  {
    id: 'propelai',
    title: 'PropelAI Platform Development',
    organization: 'PropelAI (Founder)',
    metric: '95%+',
    metricLabel: 'Compliance Extraction',
    challenge:
      'Government proposals are complex, compliance-heavy, and time-consuming. Firms spend hundreds of hours on each RFP response with inconsistent quality and frequent compliance gaps.',
    approach:
      'Built an AI-powered proposal generation platform using the APMP-aligned capture methodology, advanced NLP, and graph-based compliance extraction. Architected on n8n workflows, Claude AI, and RAG architecture.',
    impact:
      'Achieved 95%+ compliance requirement extraction (up from 40%) and 87/100 quality scores on autonomous generation. Multi-document processing across complex RFP packages.',
    tags: ['AI', 'NLP', 'RAG', 'n8n', 'Claude AI', 'GovCon'],
  },
  {
    id: 'clearpath',
    title: 'Clearpath Solutions Group — PE Transformation',
    organization: 'Clearpath Solutions Group',
    metric: '300%',
    metricLabel: 'Revenue Growth',
    challenge:
      'Clearpath Solutions Group was operating as a traditional value-added reseller (VAR) and needed to transform into a modern IT solutions provider with public sector market penetration to attract private equity investment.',
    approach:
      'Led the transformation from VAR to IT solutions provider. Took P&L responsibility for professional services, managed services, and cloud solutions. Added AWS and Azure capabilities to expand the service portfolio.',
    impact:
      'Increased services and cloud revenue 300% within 2 years. The capabilities built were key factors in the successful private equity acquisition by TH Lee.',
    tags: ['PE Transaction', 'Business Transformation', 'Cloud', 'Revenue Growth'],
  },
];
