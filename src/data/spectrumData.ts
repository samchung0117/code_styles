import { ApproachInfo, ComparisonRow, QuizQuestion } from '../types';

export const APPROACHES: Record<string, ApproachInfo> = {
  'no-code': {
    id: 'no-code',
    title: 'No Code',
    subtitle: 'Visual Development Without Code',
    spectrumPosition: 0,
    color: {
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      badgeText: 'text-emerald-700',
      border: 'border-emerald-200',
      borderActive: 'border-emerald-500 ring-2 ring-emerald-500/20',
      accent: 'emerald',
      glow: 'shadow-emerald-500/10',
      tagBg: 'bg-emerald-100/70',
      tagText: 'text-emerald-800',
    },
    summary: 'Build complete applications entirely through graphical user interfaces, drag-and-drop elements, and pre-built features without touching code.',
    definition: 'No Code platforms take the concept of visual development a step further, removing the need for any coding whatsoever. The entire application is built using a graphical user interface and pre-built features.',
    keyPoints: [
      'Zero lines of code required',
      'Instant drag-and-drop visual interface',
      'Pre-configured hosting, databases, and deployment',
      'Empowers non-technical team members directly'
    ],
    user: 'Non-technical business users',
    skillsRequired: 'None',
    developmentSpeed: 'Extremely Fast',
    flexibility: 'Limited, relies on pre-built components',
    useCases: [
      'Simple internal tools',
      'Forms & survey collectors',
      'Basic marketing websites & landing pages',
      'Lightweight event portals'
    ],
    examplePlatforms: [
      'WordPress (Gutenberg/Elementor)',
      'Airtable & Webflow',
      'Zapier & Make',
      'Bubble & Notion'
    ],
    pros: [
      'Immediate time-to-market (hours or days)',
      'No specialized developer hiring required',
      'Low upfront development cost',
      'Intuitive WYSIWYG visual workflows'
    ],
    cons: [
      'Platform lock-in and vendor constraints',
      'Limited customization beyond template options',
      'Potential scalability bottlenecks for heavy logic'
    ],
    speedRating: 5,
    flexibilityRating: 2,
    skillRequirementRating: 1,
  },
  'low-code': {
    id: 'low-code',
    title: 'Low Code',
    subtitle: 'Accelerated Hybrid Development',
    spectrumPosition: 50,
    color: {
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
      badgeText: 'text-sky-700',
      border: 'border-sky-200',
      borderActive: 'border-sky-500 ring-2 ring-sky-500/20',
      accent: 'sky',
      glow: 'shadow-sky-500/10',
      tagBg: 'bg-sky-100/70',
      tagText: 'text-sky-800',
    },
    summary: 'Speed up development using visual builders and pre-built components while keeping full freedom to inject custom code and scripts where needed.',
    definition: 'Low Code platforms are designed to speed up the development process by using visual, drag-and-drop tools and pre-built components. They significantly reduce the need for manual coding, but they still allow developers to add custom code when needed for specific functionalities.',
    keyPoints: [
      'Visual foundation with code extension points',
      'Combines business agility with developer power',
      'Automates boilerplate UI, auth, and API wiring',
      'Bridges the gap between non-technical staff and software engineers'
    ],
    user: 'Citizen developers & professional developers',
    skillsRequired: 'Basic technical understanding',
    developmentSpeed: 'Very Fast',
    flexibility: 'Moderate, allows for some custom code',
    useCases: [
      'Business applications & operations portals',
      'Rapid interactive prototypes and MVPs',
      'App extensions & CRM integrations',
      'Workflow automations with custom business logic'
    ],
    examplePlatforms: [
      'Microsoft Power Apps',
      'Mendix',
      'OutSystems',
      'WordPress (Custom PHP/Hooks)',
      'Retool'
    ],
    pros: [
      'Substantial reduction in development cycles',
      'Frees senior engineers from repetitive boilerplate',
      'Maintains extensibility via custom API calls and scripts',
      'Standardized enterprise governance and access control'
    ],
    cons: [
      'Platform subscription and licensing costs',
      'Requires some scripting literacy for complex rules',
      'Subject to architecture limits of host platform'
    ],
    speedRating: 4,
    flexibilityRating: 3.5,
    skillRequirementRating: 2.5,
  },
  'high-code': {
    id: 'high-code',
    title: 'High Code',
    subtitle: 'Traditional Custom Engineering',
    spectrumPosition: 100,
    color: {
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      badgeText: 'text-indigo-700',
      border: 'border-indigo-200',
      borderActive: 'border-indigo-500 ring-2 ring-indigo-500/20',
      accent: 'indigo',
      glow: 'shadow-indigo-500/10',
      tagBg: 'bg-indigo-100/70',
      tagText: 'text-indigo-800',
    },
    summary: 'The conventional method of engineering bespoke software from scratch using raw programming languages, custom frameworks, and full architectural autonomy.',
    definition: 'High Code (Traditional Development) is the conventional method of software development. It involves writing code from scratch using programming languages (like Python, Java, C++, JavaScript) and frameworks.',
    keyPoints: [
      'Bespoke codebase tailored to exact specifications',
      'Complete ownership of software architecture and data',
      'Unrestricted performance optimization and custom protocols',
      'Requires seasoned software engineers and version control'
    ],
    user: 'Professional developers / programmers',
    skillsRequired: 'Deep programming knowledge',
    developmentSpeed: 'Slow (but comprehensive)',
    flexibility: 'Unlimited, full control over everything',
    useCases: [
      'Complex, custom, and large-scale applications',
      'Mission-critical systems & high-throughput architectures',
      'Proprietary algorithms & native hardware integrations',
      'Global SaaS platforms and microservices'
    ],
    examplePlatforms: [
      'JavaScript / TypeScript (React, Node.js)',
      'Python (Django, FastAPI, PyTorch)',
      'Java / Kotlin (Spring, Android)',
      'C++ / Rust / Go'
    ],
    pros: [
      'Zero platform bounds or vendor lock-in constraints',
      'Complete control over performance and data security',
      'Infinite scalability and bespoke UX/UI customization',
      'Direct integration with any legacy or emerging hardware'
    ],
    cons: [
      'Higher time investment and development cycles',
      'Requires specialized engineering talent',
      'Ongoing responsibility for maintenance, tests, and security patches'
    ],
    speedRating: 1.5,
    flexibilityRating: 5,
    skillRequirementRating: 5,
  },
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Target User',
    iconName: 'User',
    description: 'Who primarily designs, builds, and maintains the solution',
    noCode: 'Non-technical business users',
    lowCode: 'Citizen developers & professional developers',
    highCode: 'Professional developers / programmers',
  },
  {
    feature: 'Skills Required',
    iconName: 'GraduationCap',
    description: 'Technical background and programming proficiency needed',
    noCode: 'None',
    lowCode: 'Basic technical understanding',
    highCode: 'Deep programming knowledge',
  },
  {
    feature: 'Development Speed',
    iconName: 'Zap',
    description: 'Velocity from initial conception to production delivery',
    noCode: 'Extremely Fast',
    lowCode: 'Very Fast',
    highCode: 'Slow (but comprehensive)',
  },
  {
    feature: 'Flexibility & Control',
    iconName: 'Sliders',
    description: 'Freedom to customize UI, logic, data structures, and integrations',
    noCode: 'Limited, relies on pre-built components',
    lowCode: 'Moderate, allows for some custom code',
    highCode: 'Unlimited, full control over everything',
  },
  {
    feature: 'Typical Use Cases',
    iconName: 'Briefcase',
    description: 'Best-suited project types and organizational scenarios',
    noCode: 'Simple internal tools, forms, basic websites',
    lowCode: 'Business applications, prototypes, app extensions',
    highCode: 'Complex, custom, and large-scale applications',
  },
  {
    feature: 'Example Platforms & Tools',
    iconName: 'Layers',
    description: 'Representative ecosystems, engines, and languages',
    noCode: 'WordPress (Visual themes), Airtable, Webflow',
    lowCode: 'WordPress, Microsoft Power Apps, Mendix, etc.',
    highCode: 'JavaScript, Python, Java, C++, etc.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'team',
    question: 'Who will build and maintain this application?',
    options: [
      {
        label: 'Business staff or domain experts with no coding skills',
        description: 'Marketers, operations leads, or founders needing instant results without tech hire.',
        target: 'no-code',
      },
      {
        label: 'Tech-savvy analysts, citizen builders, or hybrid teams',
        description: 'Users comfortable with formulas and basic scripts collaborating with developers.',
        target: 'low-code',
      },
      {
        label: 'Dedicated software engineers and programming teams',
        description: 'Trained developers writing clean code, tests, CI/CD, and custom backends.',
        target: 'high-code',
      },
    ],
  },
  {
    id: 'urgency',
    question: 'What is your timeline and speed requirement?',
    options: [
      {
        label: 'Hours or days — we need it live immediately',
        description: 'Fast turnaround is essential; time-to-market outweighs granular customizations.',
        target: 'no-code',
      },
      {
        label: 'Weeks — fast delivery with leeway for custom workflows',
        description: 'Accelerated development with pre-built UI components and API connectors.',
        target: 'low-code',
      },
      {
        label: 'Months — comprehensive architecture built for long-term depth',
        description: 'Willing to invest substantial engineering time for unconstrained control.',
        target: 'high-code',
      },
    ],
  },
  {
    id: 'complexity',
    question: 'How complex is the underlying logic and system integration?',
    options: [
      {
        label: 'Standard layouts, standard data forms, or simple landing pages',
        description: 'Standard crud, contact captures, newsletters, or basic content repositories.',
        target: 'no-code',
      },
      {
        label: 'Internal line-of-business portal connecting ERPs, databases & APIs',
        description: 'Standard enterprise dashboards with specific conditional calculations and webhooks.',
        target: 'low-code',
      },
      {
        label: 'Proprietary core algorithms, high concurrency, or bespoke hardware',
        description: 'Fintech engines, real-time gaming, custom crypto/streaming, or deep AI pipelines.',
        target: 'high-code',
      },
    ],
  },
];
