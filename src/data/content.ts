export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  focus: string[];
  summary?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  title?: string;
  quote: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Talent Acquisition' | 'People Strategy' | 'Culture' | 'Leadership';
  readTime: string;
  publishedDate: string;
  excerpt: string;
  content: string[];
  isComingSoon?: boolean;
}

export const BRAND_ASSETS = {
  logoUrl: 'https://cdn.phototourl.com/member/2026-10-08-437b81ad-2163-407c-a342-b15051e7b2d7.jpg',
  portraitUrl: 'https://cdn.phototourl.com/member/2026-10-08-a9ad607c-b34c-4829-b174-c0b182e3262c.jpg',
  name: 'Gabriela Centanino',
  primaryPositioning: 'Strategic Talent Acquisition & People Culture Consultant',
  alternativePositioning: 'Strategic Talent Acquisition | People Operations | Culture & Talent Strategy',
  email: 'gabriela.cent.seniorrecruiter@gmail.com',
};

export const TRUST_CATEGORIES = [
  'BEAUTY',
  'WELLNESS',
  'CPG',
  'HOSPITALITY',
  'TECHNOLOGY',
  'GROWTH-STAGE COMPANIES',
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Talent Acquisition Strategy',
    shortDescription:
      'Design thoughtful recruiting strategies that help organizations attract, assess, and hire exceptional people.',
    fullDescription:
      'High-growth organizations cannot afford reactive hiring. We audit existing talent pipelines, define precise competencies, configure structured hiring rubrics, and align recruitment capacity directly with business growth targets.',
    deliverables: [
      'Comprehensive Talent Acquisition Diagnostic & Roadmap',
      'Role Scoping & Competency Architecture Frameworks',
      'Structured Interview Stages & Evaluation Scorecards',
      'Market Mapping & Competitive Talent Benchmarking',
    ],
    idealFor: 'Founders and hiring executives looking to transform hiring from an ad-hoc scramble into a repeatable competitive advantage.',
  },
  {
    number: '02',
    title: 'Full-Cycle Recruitment',
    shortDescription:
      'From sourcing and screening to interviews, offers, and candidate experience, build recruiting processes that are structured, efficient, and human.',
    fullDescription:
      'End-to-end recruitment execution with executive-level polish. We drive targeted headhunting, high-touch candidate courtship, rigorous screening, and close orchestration to secure leaders and high-impact contributors.',
    deliverables: [
      'Executive & Key Specialist Search Execution',
      'Active Outbound Sourcing & Pipeline Cultivation',
      'Hiring Manager Calibration & Interview Briefings',
      'Offer Formulation, Negotiation & High-Touch Closing',
    ],
    idealFor: 'Companies seeking dedicated, discreet talent acquisition expertise for pivotal hires across corporate, creative, and operational leadership.',
  },
  {
    number: '03',
    title: 'People Operations',
    shortDescription:
      'Create scalable people systems, workflows, onboarding processes, and employee experiences that support growing teams.',
    fullDescription:
      'Solidify the administrative and infrastructural spine of your people team. We implement and optimize HR systems (Greenhouse, BambooHR, ADP), streamline global and hybrid onboarding, and establish compliant, transparent operating rhythms.',
    deliverables: [
      'HR Tech Stack Evaluation & Configuration (Greenhouse, BambooHR, ADP)',
      'First 90-Days High-Impact Onboarding Systems',
      'Job Leveling Frameworks & Salary Benchmarking Integration',
      'Scalable People Operating Workflows & Policy Alignment',
    ],
    idealFor: 'Growth-stage businesses expanding headcounts that need structured people operations without bureaucratic bloat.',
  },
  {
    number: '04',
    title: 'Culture & Employee Engagement',
    shortDescription:
      'Strengthen culture, communication, engagement, and retention through intentional people programs.',
    fullDescription:
      'Workplace culture is not about superficial perks; it is how values translate into everyday communication, decision-making, and psychological safety. We design targeted engagement listening mechanisms and culture rituals that retain top performers.',
    deliverables: [
      'Culture Health Assessments & Feedback Systems',
      'Hybrid & Distributed Team Engagement Frameworks',
      'DE&I Integration & B-Corp Operational Support',
      'Retention Strategy & Team Cohesion Initiatives',
    ],
    idealFor: 'Leadership teams committed to fostering intentional, cohesive workplace cultures across in-person, remote, or hybrid environments.',
  },
  {
    number: '05',
    title: 'Employer Brand & Candidate Experience',
    shortDescription:
      'Build an employer presence and candidate journey that communicates what makes an organization worth joining.',
    fullDescription:
      'Every candidate interaction reflects your brand reputation. We sculpt an authentic, magnetic candidate journey that turns applicants into brand advocates, reduces offer drop-offs, and articulates your true employee value proposition.',
    deliverables: [
      'End-to-End Candidate Journey Audits & Touchpoint Redesign',
      'Employer Value Proposition (EVP) Articulation',
      'Interview Team Candidate Care Training',
      'Post-Interview & Onboarding Feedback Loops',
    ],
    idealFor: 'Consumer, beauty, hospitality, and tech brands that recognize their recruiting experience directly impacts their market standing.',
  },
];

export const METHODOLOGY_STEPS = [
  {
    number: '01',
    name: 'Understand',
    tagline: 'Deep Discovery & Alignment',
    description:
      'Understand the business, leadership, culture, challenges, and growth goals. We conduct thorough discovery into your organizational dynamics, strategic bottlenecks, and upcoming milestones.',
  },
  {
    number: '02',
    name: 'Strategize',
    tagline: 'Architecting the Blueprint',
    description:
      'Develop a tailored talent and people strategy aligned with business priorities. We define explicit hiring profiles, workflows, compensation benchmarks, and success metrics.',
  },
  {
    number: '03',
    name: 'Build',
    tagline: 'Disciplined Implementation',
    description:
      'Implement recruiting processes, people systems, and culture initiatives. We roll out systems, manage active candidate pipelines, and train hiring managers with structured execution.',
  },
  {
    number: '04',
    name: 'Evolve',
    tagline: 'Continuous Refinement',
    description:
      'Measure, refine, and continuously improve the employee and candidate experience. We review time-to-fill, candidate feedback, and retention metrics to ensure durable success.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'rokit-casamata',
    role: 'Consultant / Talent Acquisition & HR Specialist',
    company: 'ROKiT / Casamata',
    period: '2023 – Present',
    isCurrent: true,
    focus: [
      'Full-cycle recruitment',
      'People operations',
      'Culture building',
      'DE&I',
      'Employee engagement',
      'Onboarding',
      'HR technology',
      'Greenhouse',
      'BambooHR',
      'ADP',
    ],
    summary:
      'Providing strategic full-cycle recruitment leadership and people operations consulting across diverse business divisions, optimizing ATS/HRIS infrastructure and elevating candidate experience.',
  },
  {
    id: 'foria',
    role: 'Recruiting & Culture Manager',
    company: 'Foria',
    period: '2021 – 2023',
    isCurrent: false,
    focus: [
      'People operations',
      'Recruiting',
      'Employer branding',
      'Engagement',
      'Hybrid team culture',
      'Salary benchmarking',
      'Job classification',
    ],
    summary:
      'Directed talent acquisition and organizational culture during pivotal growth phases, orchestrating compensation benchmarking, job architectures, and cohesive hybrid team engagement programs.',
  },
  {
    id: 'heat-makes-sense',
    role: 'Recruitment & Culture Specialist',
    company: 'Heat Makes Sense, Inc.',
    period: '2018 – 2021',
    isCurrent: false,
    focus: [
      'Talent acquisition',
      'Culture programs',
      'Employer branding',
      'Candidate experience',
      'DE&I',
      'Leadership development',
      'B-Corp support',
    ],
    summary:
      'Championed comprehensive talent acquisition and vibrant culture initiatives, spearheading candidate experience enhancements, diversity efforts, leadership development, and B-Corp alignment.',
  },
  {
    id: 'internet-brands',
    role: 'Corporate Recruiter',
    company: 'Internet Brands',
    period: '2016 – 2018',
    isCurrent: false,
    focus: [
      'High-volume recruitment',
      'Technology/media hiring',
      'Hiring manager partnerships',
      'Strategic sourcing',
      'Candidate pipelines',
    ],
    summary:
      'Managed full-lifecycle recruitment across diverse technology and media verticals, partnering closely with hiring managers to build deep candidate pipelines and accelerate key hiring cycles.',
  },
  {
    id: 'toast-labs',
    role: 'Community Marketing Manager',
    company: 'Toast Labs',
    period: '2015 – 2016',
    isCurrent: false,
    focus: [
      'Community growth',
      'Influencer partnerships',
      'Events',
      'Brand development',
      'Cross-functional marketing',
    ],
    summary:
      'Drove community engagement, influencer brand partnerships, and cross-functional marketing activations that built organic brand affinity and authentic stakeholder relationships.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Antioch University Santa Barbara',
    degree: 'B.A. — Liberal Arts and Sciences / Liberal Studies',
    period: '2011 – 2013',
  },
  {
    institution: 'Santa Barbara City College',
    degree: 'A.A. — Social Sciences',
    period: '2007 – 2011',
  },
];

export const VOLUNTEER_ORGS = [
  'Direct Relief',
  'Santa Monica Homeless Shelter',
  'Dream Foundation',
  'DAWG Canine Shelter',
  'Big Brothers Big Sisters',
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'cori-p',
    author: 'Cori P.',
    title: 'Operations Strategist | Supply Chain Expert | Project Manager',
    quote:
      'Gabby is an exceptional HR professional who excels in talent acquisition, culture, and project management. She is a strong communicator and organized project manager who consistently delivers exceptional results. She builds strong connections with candidates and team members and creates thoughtful, customized solutions.',
  },
  {
    id: 'martha-gil',
    author: 'Martha Gil',
    title: 'Colleague & Professional Peer',
    quote:
      'Gabriela is very team-oriented and professional in her relations with fellow peers.',
  },
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'why-hiring-speed-matters',
    title: 'Why Hiring Speed Matters (And How to Accelerate Without Compromising Quality)',
    category: 'Talent Acquisition',
    readTime: '5 min read',
    publishedDate: 'Strategic Perspective',
    excerpt:
      'In competitive talent markets, delayed feedback loops and bloated interview steps do not create rigor—they create candidate attrition. How leading companies streamline without lowering the bar.',
    content: [
      'High-performing candidates rarely remain active on the market for more than two to three weeks. When an organization’s interview process stretches into six or seven weeks, the loss is rarely subtle: top candidates receive competing offers, lose momentum, or conclude that slow hiring reflects indecisive leadership.',
      'Rigor is not defined by the sheer quantity of interview hours; it is defined by the clarity of the evaluation criteria. When interviewers know precisely what competencies they are assessing, a four-stage process yields vastly superior signal compared to an unstructured seven-stage marathon.',
      'By establishing calibrated scorecards, setting a strict 48-hour feedback SLA between stages, and giving hiring managers decisive authority, teams can cut time-to-offer in half while significantly elevating offer acceptance rates.',
    ],
    isComingSoon: false,
  },
  {
    id: 'building-candidate-experiences-that-people-remember',
    title: 'Building Candidate Experiences That People Remember',
    category: 'People Strategy',
    readTime: '6 min read',
    publishedDate: 'Strategic Perspective',
    excerpt:
      'Every interaction between a candidate and your company is an extension of your brand. Treating recruitment as a high-touch ambassadorial function changes everything.',
    content: [
      'Candidate experience is often relegated to automated rejection emails and polite calendar links. Yet in consumer, beauty, wellness, and high-growth sectors, candidates are frequently also customers, advocates, or future collaborators.',
      'A human-centered candidate journey prioritizes transparent expectations, respectful communication, thoughtful debriefs, and proactive compensation conversations early in the dialogue.',
      'When an organization treats rejected finalists with the same dignity and responsiveness as hired candidates, they build a durable network of advocates who recommend their peers and celebrate the company’s mission.',
    ],
    isComingSoon: false,
  },
  {
    id: 'recruitment-as-a-culture-function',
    title: 'Recruitment as a Culture Function',
    category: 'Culture',
    readTime: '4 min read',
    publishedDate: 'Strategic Perspective',
    excerpt:
      'Culture is not formed at the all-hands meeting; it is codified at the interview table. How hiring standards shape the psychological DNA of growing organizations.',
    content: [
      'Company culture is often described in aspirational handbooks, but its true contours are decided whenever a hiring manager decides what behaviors to tolerate, reward, or celebrate in prospective teammates.',
      'When hiring teams evaluate candidates solely on tactical output while overlooking collaboration, adaptability, and emotional intelligence, they inadvertently import cultural friction that can take quarters to remedy.',
      'Integrating cultural values into structured interview inquiries ensures that as an organization doubles or triples in size, the foundational ethos strengthens rather than dilutes.',
    ],
    isComingSoon: false,
  },
  {
    id: 'scaling-people-ops-without-losing-human-touch',
    title: 'Scaling People Operations Without Losing the Human Touch',
    category: 'People Strategy',
    readTime: '5 min read',
    publishedDate: 'Upcoming Brief',
    excerpt:
      'Navigating the transition from intimate early-stage camaraderie to structured HR systems: why tools like Greenhouse and BambooHR should empower, not dehumanize.',
    content: [
      'As headcounts expand beyond the initial core team, informal communication channels naturally experience strain. Suddenly, ad-hoc spreadsheets and casual verbal agreements result in compensation disparities and onboarding bottlenecks.',
      'Implementing robust HRIS and ATS infrastructure is essential, but technology must serve to liberate people leaders to have deeper, more substantive human conversations.',
      'A thoughtful people operations framework provides clean boundaries, predictable reviews, and transparent policies—creating the psychological safety employees need to excel.',
    ],
    isComingSoon: true,
  },
  {
    id: 'what-growth-stage-companies-get-wrong-about-hiring',
    title: 'What Growth-Stage Companies Get Wrong About Hiring',
    category: 'Talent Acquisition',
    readTime: '6 min read',
    publishedDate: 'Upcoming Brief',
    excerpt:
      'Common pitfalls founders encounter when scaling: over-indexing on pedigree over adaptability, unclear scope, and misjudged compensation pacing.',
    content: [
      'One of the most frequent missteps in growth-stage companies is hiring for brand pedigree rather than stage-specific grit. An executive who thrived with a 40-person support staff at a legacy conglomerate may struggle in an agile, zero-to-one build environment.',
      'Another critical oversight is failing to calibrate salary benchmarking to realistic market bands before initiating outreach, resulting in protracted searches and mismatched expectations.',
      'Strategic talent advisory helps leadership articulate the exact operating profile required for the next 18 months, mitigating costly hiring misalignments.',
    ],
    isComingSoon: true,
  },
  {
    id: 'building-teams-around-business-growth',
    title: 'Building Teams Around Business Growth',
    category: 'Leadership',
    readTime: '5 min read',
    publishedDate: 'Upcoming Brief',
    excerpt:
      'How aligning organizational design, headcount planning, and revenue milestones creates resilient, sustainable companies.',
    content: [
      'Headcount should never grow for its own sake. Effective talent acquisition begins with clear business metrics: what revenue, product, or customer experience milestone does this role directly unlock?',
      'By tying hiring plans to clear milestones and maintaining lean, focused teams, companies build durable margins while fostering high-trust cultures of autonomy and accountability.',
    ],
    isComingSoon: true,
  },
];
