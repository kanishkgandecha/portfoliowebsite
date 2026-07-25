// ============================================================
// PORTFOLIO — Single Source of Truth
// Software Engineer Portfolio — v3.0.0
// ============================================================

export const PERSONAL = {
  name: 'Kanishk Gandecha',
  firstName: 'Kanishk',
  title: 'Software Engineer',
  headline: 'Building scalable full-stack applications, AI systems & medical visualization tools.',
  shortBio:
    'Computer Engineering student passionate about building scalable full-stack applications, AI-powered solutions, and high-performance browser-based visualization systems. Experienced in modern web technologies including React, TypeScript, Node.js, VTK.js, and REST APIs.',
  roles: ['Full Stack Developer', 'Software Engineer', 'Frontend & Visualization Engineer'],
  email: 'gandechakanishk9@gmail.com',
  phone: '+91 95615 00052',
  location: 'Mumbai, India',
  github: 'https://github.com/kanishkgandecha',
  linkedin: 'https://www.linkedin.com/in/kanishk-gandecha/',
  resume: 'https://drive.google.com/file/d/1eJhVm0OvVJMIwQGzzfksa7NSs4K_wQHu/view?usp=sharing',
  cgpa: '8.23',
  university: 'K.J. Somaiya COE',
  universityFull: 'K.J. Somaiya College of Engineering',
  degree: 'B.Tech Computer Engineering',
  year: '2023 – Present',
  status: 'Available for Internships',
  availableFrom: 'Immediately',
};

// ── Internship Highlights ─────────────────────────────────────────────────────

export const INTERNSHIP_HIGHLIGHTS = [
  {
    id: 'enterprise-web',
    title: 'Enterprise-grade Web Development',
    category: 'Full Stack Engineering',
    desc: 'Building robust, production-ready web applications with clean architecture and scalable state management.',
    icon: 'layers'
  },
  {
    id: 'med-vis',
    title: 'Medical Visualization',
    category: 'Graphics & Rendering',
    desc: 'Developing specialized browser-based medical rendering interfaces for complex 2D and 3D volume datasets.',
    icon: 'eye'
  },
  {
    id: 'interactive-rendering',
    title: 'Interactive Rendering',
    category: 'High Performance Web',
    desc: 'Creating smooth, GPU-accelerated browser graphics and interactive rendering workflows with VTK.js.',
    icon: 'cpu'
  },
  {
    id: 'rest-api',
    title: 'REST API Development',
    category: 'Backend Infrastructure',
    desc: 'Designing secure, performant RESTful microservices, endpoints, and database connection pipelines.',
    icon: 'server'
  },
  {
    id: 'perf-opt',
    title: 'Performance Optimization',
    category: 'System Performance',
    desc: 'Minimizing render cycles, optimizing client bundles, and ensuring high-frame-rate browser execution.',
    icon: 'zap'
  },
  {
    id: 'rbac',
    title: 'Role Based Access Control',
    category: 'Security & Access',
    desc: 'Enforcing granular user permissions, JWT security, multi-vendor rules, and access guards.',
    icon: 'shield'
  },
  {
    id: 'production-ui',
    title: 'Production UI Development',
    category: 'Frontend Engineering',
    desc: 'Crafting responsive, accessible, Apple-caliber user interfaces focused on usability and precision.',
    icon: 'layout'
  }
];

// ── Projects ──────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 'medilink',
    title: 'MediLink',
    subtitle: 'AI-Powered Health Management',
    category: 'MERN · AI · Healthcare',
    year: '2025',
    duration: '4 months',
    status: 'Completed',
    featured: true,
    accentColor: '#30D158', // Apple green
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI'],
    tagCategory: ['fullstack', 'ai'],
    github: 'https://github.com/kanishkgandecha',
    demo: null,
    // Short card content
    description: 'AI-powered healthcare management platform featuring report analysis, chatbot assistance, and health tracking.',
    // Modal-only content
    problem: 'Healthcare data is fragmented across disconnected systems. Patients lack AI-driven insights into their health patterns, and doctors struggle with incomplete patient histories.',
    solution: 'MediLink unifies health records, AI-powered analysis via Gemini API, and doctor communication into a single cohesive platform — streamlining the entire healthcare workflow.',
    architecture: [
      { layer: 'Frontend', detail: 'React 18 with component-driven architecture' },
      { layer: 'Backend', detail: 'Node.js + Express REST API' },
      { layer: 'Database', detail: 'MongoDB with Mongoose ODM' },
      { layer: 'AI Layer', detail: 'Gemini API for health chatbot & insights' },
      { layer: 'Auth', detail: 'JWT with role-based access control' },
    ],
    highlights: [
      'AI health chatbot powered by Gemini API',
      'Automated health report analysis and tracking',
      'Doctor directory with advanced search & scheduling',
      'Real-time dashboard analytics and medical history',
      'Role-based access: patient, doctor, admin',
    ],
    metrics: [
      { label: 'Modules', value: '12' },
      { label: 'Lines of Code', value: '3,200+' },
      { label: 'Build Time', value: '4 months' },
    ],
    modalDetails: {
      objective: 'Build an end-to-end full-stack healthcare ecosystem incorporating intelligent AI report diagnostics and real-time medical record synchronization.',
      architecture: [
        'Component-driven React 18 client architecture',
        'Node.js & Express RESTful API microservice pattern',
        'MongoDB document schema optimized for indexing medical logs',
        'Gemini API integration for real-time diagnostic synthesis',
        'JWT role-based access guards protecting patient records'
      ]
    }
  },
  {
    id: 'electrohub',
    title: 'ElectroHub',
    subtitle: 'Full-Stack E-Commerce Platform',
    category: 'Full Stack · E-Commerce',
    year: '2024',
    duration: '3 months',
    status: 'Completed',
    featured: true,
    accentColor: '#FF9F0A', // Apple orange
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    tagCategory: ['fullstack'],
    github: 'https://github.com/kanishkgandecha',
    demo: null,
    description: 'Full-stack e-commerce platform with authentication, cart, checkout, and admin dashboard.',
    problem: 'Retail operations require smooth transaction workflows, inventory management, and role-restricted admin access.',
    solution: 'ElectroHub delivers a complete commerce workflow — catalog management, cart persistence, orders, and admin controls.',
    architecture: [
      { layer: 'Frontend', detail: 'React with responsive component UI' },
      { layer: 'Backend', detail: 'Node.js & Express REST API' },
      { layer: 'Database', detail: 'MySQL with normalized schema' },
      { layer: 'Auth', detail: 'Session & JWT user authentication' },
    ],
    highlights: [
      'Product catalog managing 100+ items with instant filtering',
      'Shopping cart with persistence and order calculation',
      'Full user authentication & session management system',
      'Admin dashboard with full CRUD operations for product inventory',
      'Order management and fulfillment tracking',
    ],
    metrics: [
      { label: 'Products', value: '100+' },
      { label: 'Pages', value: '15+' },
      { label: 'Build Time', value: '3 months' },
    ],
    modalDetails: {
      objective: 'Engineered a full-stack electronics e-commerce suite featuring complete order workflows, relational database management, and administrative inventory controls.',
      architecture: [
        'React frontend interface with reactive cart management',
        'Express REST backend serving transactional endpoints',
        'MySQL relational schema with ACID compliant transaction handling',
        'Role-Based Access Control protecting admin inventory functions'
      ]
    }
  },
  {
    id: 'ai-resume',
    title: 'AI Resume Analyzer',
    subtitle: 'Intelligent ATS Scoring Tool',
    category: 'AI · Productivity',
    year: '2025',
    duration: '2 months',
    status: 'Completed',
    featured: false,
    accentColor: '#BF5AF2', // Apple purple
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'AI'],
    tagCategory: ['ai', 'frontend'],
    github: 'https://github.com/kanishkgandecha',
    demo: null,
    description: 'AI-based resume scoring platform with visual analytics and intelligent feedback.',
    problem: 'Job seekers blindly submit resumes without knowing whether they will pass ATS filters, leading to missed opportunities.',
    solution: 'An instant analysis tool that scores resumes across key categories and provides specific, actionable feedback.',
    architecture: [
      { layer: 'Frontend', detail: 'React with Tailwind CSS UI' },
      { layer: 'Analysis Engine', detail: 'AI scoring algorithms & keyword engine' },
      { layer: 'Reporting', detail: 'Visual dashboard with chart components' },
    ],
    highlights: [
      'ATS compatibility score calculation',
      'Keyword density and section completeness analysis',
      'Visual score breakdown dashboard',
      'Specific, actionable feedback generation',
    ],
    metrics: [
      { label: 'Categories', value: '8' },
      { label: 'Feedback', value: 'Instant' },
      { label: 'Accuracy', value: 'ATS-aligned' },
    ],
    modalDetails: {
      objective: 'Provide job seekers with automated, intelligent ATS feedback and visual analytics on resume formatting and keyword density.',
      architecture: [
        'React SPA with Tailwind CSS design system',
        'Intelligent text parsing and scoring algorithms',
        'Visual chart analytics breakdown for user insights'
      ]
    }
  },
  {
    id: 'weather',
    title: 'Weather Dashboard',
    subtitle: 'Real-Time Weather Intelligence',
    category: 'API · Frontend',
    year: '2024',
    duration: '1 month',
    status: 'Completed',
    featured: false,
    accentColor: '#0A84FF', // Apple blue
    tags: ['JavaScript', 'CSS', 'OpenWeather API', 'HTML'],
    tagCategory: ['frontend'],
    github: 'https://github.com/kanishkgandecha',
    demo: null,
    description: 'Real-time weather application using OpenWeather API.',
    problem: 'Users need a lightweight, accurate weather tool free of ad clutter and unnecessary friction.',
    solution: 'A minimal dashboard that surfaces real-time conditions and 5-day forecasts with precision.',
    architecture: [
      { layer: 'Frontend', detail: 'Vanilla JS with responsive CSS Grid' },
      { layer: 'API', detail: 'OpenWeather REST API' },
    ],
    highlights: [
      'Real-time city search with dynamic API data fetching',
      '5-day weather forecast breakdown',
      'Temperature, humidity, and wind metric displays',
      'Dynamic weather icon status engine',
    ],
    metrics: [
      { label: 'Coverage', value: 'Global' },
      { label: 'Forecast', value: '5 days' },
      { label: 'Refresh', value: 'Real-time' },
    ],
    modalDetails: {
      objective: 'Deliver an efficient, real-time meteorological dashboard utilizing external RESTful weather APIs.',
      architecture: [
        'Pure JavaScript client fetching live meteorological data',
        'Asynchronous OpenWeather REST API handling',
        'Responsive CSS Grid interface for cross-device usability'
      ]
    }
  },
];

// ── Experience ────────────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    id: 'medmarvel',
    role: 'Software Development Intern',
    company: 'MedMarvel Software Solutions Pvt Ltd',
    companyShort: 'MedMarvel',
    period: 'June 2026 – July 2026',
    type: 'internship',
    current: true,
    description: 'Engineered scalable frontend components, backend services, and browser-based medical visualization modules with interactive rendering workflows.',
    responsibilities: [
      'Built scalable frontend components using React.js and TypeScript',
      'Developed backend microservices and REST APIs using Node.js and Express.js',
      'Engineered browser-based medical visualization modules and interactive rendering workflows using VTK.js',
      'Implemented Role-Based Access Control (RBAC) and performance optimization strategies for high-frequency client interaction',
      'Utilized standard Git workflows for version control, code reviews, and team collaboration'
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'RBAC', 'VTK.js', 'Medical Visualization', 'Performance Optimization', 'Git'],
  },
  {
    id: 'billing-internship',
    role: 'Software Development Intern',
    company: 'Software Development Intern',
    companyShort: 'Billing & Invoice System',
    period: 'December 2025',
    type: 'internship',
    current: false,
    description: 'Digitized manual invoicing processes by architecting a full-stack Billing & Invoice Management System featuring multi-vendor workflows.',
    responsibilities: [
      'Architected a multi-vendor workflow system that digitized manual invoicing operations',
      'Built interactive React frontend interfaces and robust Node.js backend APIs',
      'Designed normalized relational database schemas and enforced fine-grained Role-Based Access Control (RBAC)'
    ],
    tech: ['React.js', 'Node.js', 'REST APIs', 'Database Schema', 'RBAC'],
  },
];

export const EDUCATION = [
  {
    id: 'kjsce',
    degree: 'B.Tech Computer Engineering',
    institution: 'K.J. Somaiya College of Engineering',
    location: 'Mumbai, India',
    period: '2023 – Present',
    score: 'CGPA 8.23',
    current: true,
    highlights: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Role Based Access Control',
      'Computer Networks',
      'Operating Systems',
    ],
  },
  {
    id: 'class12',
    degree: 'Class XII — Science',
    institution: 'CBSE Board',
    location: 'India',
    period: '2022 – 2023',
    score: '72.6%',
    current: false,
    highlights: [],
  },
  {
    id: 'class10',
    degree: 'Class X',
    institution: 'CBSE Board',
    location: 'India',
    period: '2020 – 2021',
    score: '88.6%',
    current: false,
    highlights: [],
  },
];

export const CERTIFICATIONS = [
  {
    id: 'ibm-swe',
    title: 'Introduction to Software Engineering',
    issuer: 'IBM via Coursera',
    year: '2024',
    link: 'https://www.coursera.org/learn/introduction-to-software-engineering',
  },
  {
    id: 'ibm-ml',
    title: 'Machine Learning with Python',
    issuer: 'IBM via Coursera',
    year: '2024',
    link: 'https://www.coursera.org/learn/machine-learning-with-python',
  },
];

// ── Technology Stack ──────────────────────────────────────────────────────────

export const TECH_STACK = [
  // Frontend
  { id: 'react', label: 'React.js', category: 'frontend', projects: ['medilink', 'electrohub', 'ai-resume'] },
  { id: 'js-fe', label: 'JavaScript', category: 'frontend', projects: ['medilink', 'weather', 'ai-resume', 'electrohub'] },
  { id: 'html', label: 'HTML', category: 'frontend', projects: ['electrohub', 'weather'] },
  { id: 'css', label: 'CSS', category: 'frontend', projects: ['electrohub', 'weather'] },
  
  // Backend
  { id: 'nodejs', label: 'Node.js', category: 'backend', projects: ['medilink', 'electrohub'] },
  { id: 'express', label: 'Express.js', category: 'backend', projects: ['medilink', 'electrohub'] },
  { id: 'restapi', label: 'REST APIs', category: 'backend', projects: ['medilink', 'electrohub', 'weather'] },
  
  // Languages
  { id: 'javascript', label: 'JavaScript', category: 'languages', projects: ['medilink', 'electrohub', 'ai-resume', 'weather'] },
  { id: 'php', label: 'PHP', category: 'languages', projects: [] },
  
  // Databases
  { id: 'mongodb', label: 'MongoDB', category: 'databases', projects: ['medilink'] },
  { id: 'mysql', label: 'MySQL', category: 'databases', projects: ['electrohub'] },
  
  // Visualization
  { id: 'vtkjs', label: 'VTK.js', category: 'visualization', projects: ['medilink'] },
  { id: 'interactive-rendering', label: 'Interactive Rendering', category: 'visualization', projects: ['medilink'] },
  { id: 'med-vis', label: 'Medical Visualization', category: 'visualization', projects: ['medilink'] },
  
  // Concepts
  { id: 'dsa', label: 'DSA', category: 'concepts', projects: [] },
  { id: 'oop', label: 'OOP', category: 'concepts', projects: [] },
  { id: 'dbms', label: 'DBMS', category: 'concepts', projects: ['medilink', 'electrohub'] },
  { id: 'rbac', label: 'RBAC', category: 'concepts', projects: ['medilink', 'electrohub'] },
  
  // Tools
  { id: 'git', label: 'Git', category: 'tools', projects: ['medilink', 'electrohub', 'ai-resume', 'weather'] },
  { id: 'github', label: 'GitHub', category: 'tools', projects: ['medilink', 'electrohub', 'ai-resume', 'weather'] },
];

export const TECH_CATEGORIES = {
  frontend: { label: 'Frontend' },
  backend: { label: 'Backend' },
  languages: { label: 'Languages' },
  databases: { label: 'Databases' },
  visualization: { label: 'Visualization' },
  concepts: { label: 'Concepts' },
  tools: { label: 'Tools' },
};

// ── Command Palette Actions ───────────────────────────────────────────────────

export const PALETTE_ACTIONS = [
  { id: 'projects', label: 'View Projects', subtitle: 'Browse my work', section: 'projects', icon: 'folder' },
  { id: 'experience', label: 'Experience', subtitle: 'Internships & education', section: 'experience', icon: 'briefcase' },
  { id: 'about', label: 'About & Skills', subtitle: 'Skills & certifications', section: 'about', icon: 'user' },
  { id: 'contact', label: 'Contact Me', subtitle: 'Get in touch', section: 'contact', icon: 'mail' },
  { id: 'resume', label: 'Download Resume', subtitle: 'Open Google Drive PDF', href: null, icon: 'file-text', action: 'resume' },
  { id: 'github', label: 'Open GitHub', subtitle: 'github.com/kanishkgandecha', href: 'https://github.com/kanishkgandecha', icon: 'github' },
  { id: 'linkedin', label: 'Open LinkedIn', subtitle: 'linkedin.com/in/kanishk-gandecha', href: 'https://www.linkedin.com/in/kanishk-gandecha/', icon: 'linkedin' },
  { id: 'email', label: 'Email Me', subtitle: 'gandechakanishk9@gmail.com', action: 'email', icon: 'mail' },
];
