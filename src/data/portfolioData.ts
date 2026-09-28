import { PortfolioProject, InitiativeItem, ProgramItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Paweł Prusko Portfolio',
  role: 'Senior User & Data Experience Designer',
  tel: '693 600 920',
  telLink: '+48693600920',
  email: 'pruskopawel@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/pawelprusko/',
  localization: 'Warsaw',
  summary:
    'Senior UX Designer and Data Experience Architect with 7+ years of expertise in turning complex enterprise data into intuitive, high-impact visual interfaces. Specialized in Data Visualization, Business Intelligence systems, and Explainable UX. Proven track record of bridging the gap between data engineering and user cognition-reducing cognitive friction, validating data logic pre-engineering, and designing scalable dashboard architectures for global clients (Pharma, FinTech, Heavy Industry).',
};

export const COMMERCIAL_PROJECTS: PortfolioProject[] = [
  {
    id: 'lyondell',
    name: 'Lyondell',
    subtitle: 'Real-Time Monitoring Dashboards for Heavy Industry',
    linkText: 'Link to presentation deck',
    actionType: 'deck',
  },
  {
    id: 'newag',
    name: 'Newag',
    subtitle: 'Inventory Dashboards for Manufacturing',
    linkText: 'Link to presentation deck',
    actionType: 'deck',
  },
  {
    id: 'finops',
    name: 'Finops Cloud Intelligence',
    subtitle: 'Financial Dashboards for Cloud Ecosystems',
    linkText: 'Link to presentation deck',
    actionType: 'deck',
  },
  {
    id: 'aws-cudos',
    name: 'AWS CUDOS',
    subtitle: 'Cloud Billing Analytics for Executive Strategy',
    linkText: 'Link to presentation deck',
    actionType: 'deck',
  },
];

export const INTERNAL_INITIATIVES: InitiativeItem[] = [
  {
    id: 'stx-next',
    organization: 'STX Next',
    bullets: [
      {
        title: 'Cross-Functional Governance & Standards',
        description:
          'Establishing global, cross-functional guidelines to standardize the workflow between designers, developers, and analysts across all data-oriented projects.',
      },
      {
        title: 'Enterprise Data Design Systems',
        description:
          'Crafting exclusive user flows and highly tailored data visualization layouts for corporate reporting systems, while simultaneously establishing core structural components of the internal Design System to ensure scalability and visual excellence.',
      },
    ],
    linkText: 'Link to the Platform Materials',
    linkUrl: 'mailto:pruskopawel@gmail.com?subject=STX%20Next%20Platform%20Materials%20Request',
  },
  {
    id: 'roche',
    organization: 'Roche',
    bullets: [
      {
        title: 'R Design System',
        description:
          'creating deeply customized educational materials and design (Figma) libraries fully devoted to the data visualization.',
      },
      {
        title: 'Tableau',
        description:
          'in collaboration with Roche Tableau product owner establishing official Tableau dashboard template and the set of chart-oriented color palettes available directly from the Roche Tableau platform for BI developers.',
      },
      {
        title: 'Roche Brand',
        description:
          'Establishing color palettes dedicated strictly to the data visualization, consistent with the Roche Brand look & feel.',
      },
    ],
    note: {
      prefix: "Can't provide the links but all materials should be available directly from the Roche internal resources (",
      links: ['RDS portal', 'Roche Brand platform', 'Tableau application'],
      suffix: ')',
    },
  },
];

export const EDUCATIONAL_PROGRAMS: ProgramItem[] = [
  {
    id: 'linkedin',
    title: 'LinkedIn Platform',
    description:
      'I regularly share expert insights on Data Experience Design and analytical interface architecture. My content educates technical and product specialists on how to build high-utility, cognitively optimized data products, seamlessly blending modern UX principles with the data.',
    linkText: 'Link to the Profile',
    linkUrl: 'https://www.linkedin.com/in/pawelprusko/',
    actionType: 'external',
  },
  {
    id: 'data-alchemist',
    title: 'Data Alchemist Blog',
    description:
      'On my blog, Data Alchemist, I share deep explorations into Data Experience Design, cognitive psychology, and analytical architecture. Through dedicated sections like the Data Alchemist Journal, Data Architecture Scrolls, and Data Psychology Notes, the blog provides technical and architectural reflections focused on eliminating cognitive noise, protecting human focus, and building high-resonance, human-centered data products.',
    linkText: 'Link to the Blog',
    linkUrl: 'https://www.linkedin.com/in/pawelprusko/',
    actionType: 'external',
  },
  {
    id: 'dataviz-ai',
    title: 'Dataviz AI Advocate',
    description:
      'Your personal Data Experience Design Assistant, unifying five specialized roles into one seamless strategic interface. Engineered to accelerate the development of data-oriented products through rapid research, general audits, and end-to-end collaborative workflows. From deep-dive data analysis and compelling storytelling to high-fidelity visualization design and interactive rapid prototypes, it guides you through every phase, validating final solutions like dashboards to ensure seamless end-user usability, strategic clarity, and actionable impact.',
    linkText: 'Link to the AI Agent',
    linkUrl: 'mailto:pruskopawel@gmail.com?subject=Dataviz%20AI%20Advocate%20Access%20Request',
    actionType: 'email',
  },
];

export const GDPR_CLAUSE =
  'I agree to the processing of personal data provided in this document for realizing the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).';
