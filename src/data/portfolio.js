// ============================================================
// PORTFOLIO — Single Source of Truth
// Software Engineer Portfolio — v5.0.0
// ============================================================

export const PERSONAL = {
  name: 'Kanishk Gandecha',
  firstName: 'Kanishk',
  title: 'Software Engineer',
  avatar: '/images/profile.jpg',
  headline: 'I build full-stack web applications, AI systems, and interactive browser tools.',
  shortBio:
    'Computer engineering student in Mumbai focused on clean code, performant systems, and intuitive user experiences.',
  roles: ['Full Stack Developer', 'Software Engineer', 'Frontend & Visualization Engineer'],
  email: 'gandechakanishk9@gmail.com',
  phone: '+91 95615 00052',
  location: 'Mumbai, India',
  github: 'https://github.com/kanishkgandecha',
  linkedin: 'https://www.linkedin.com/in/kanishk-gandecha/',
  resume: 'https://drive.google.com/drive/folders/1bKMwqs1M5A9CwXHbS2NTxqez4pjJDhtG?usp=sharing',
  cgpa: '8.23',
  university: 'K.J. Somaiya COE',
  universityFull: 'K.J. Somaiya College of Engineering',
  degree: 'B.Tech Computer Engineering',
  year: '2023 – Present',
  status: 'Available for Internships',
  availableFrom: 'Immediately',
  latestProject: 'Developer Platform',
  githubActivity: '120+ commits this month',
  focusAreas: [
    'Full Stack',
    'Interactive Visualization',
    'AI Integration',
    'Performance Engineering'
  ]
};

// ── Internship Highlights ─────────────────────────────────────────────────────

export const INTERNSHIP_HIGHLIGHTS = [
  {
    id: 'enterprise-web',
    title: 'Full-Stack Web Development',
    category: 'Full Stack Engineering',
    desc: 'Building reliable web applications with clean React architecture and state management.',
    icon: 'layers'
  },
  {
    id: 'interactive-vis',
    title: 'Interactive Visualization',
    category: 'Graphics & Rendering',
    desc: 'Building interactive browser viewports for 2D and 3D volume data.',
    icon: 'eye'
  },
  {
    id: 'interactive-rendering',
    title: 'Interactive Rendering',
    category: 'High Performance Web',
    desc: 'Creating fast browser graphics and rendering workflows.',
    icon: 'cpu'
  },
  {
    id: 'rest-api',
    title: 'REST API Development',
    category: 'Backend Infrastructure',
    desc: 'Designing REST APIs, database models, and backend services.',
    icon: 'server'
  },
  {
    id: 'perf-opt',
    title: 'Performance Optimization',
    category: 'System Performance',
    desc: 'Optimizing bundle sizes and reducing render cycles for 60fps execution.',
    icon: 'zap'
  },
  {
    id: 'rbac',
    title: 'Role Based Access Control',
    category: 'Security & Access',
    desc: 'Building role-based access control and JWT authentication.',
    icon: 'shield'
  },
  {
    id: 'production-ui',
    title: 'Production UI Development',
    category: 'Frontend Engineering',
    desc: 'Building responsive, accessible user interfaces.',
    icon: 'layout'
  }
];

// ── Projects ──────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 'developer-platform',
    title: 'Developer Platform',
    subtitle: 'Code Intelligence & Multi-Agent AI Platform',
    category: 'Full Stack · AI · Static Analysis',
    year: '2026',
    duration: 'v1.0.0',
    status: 'Completed',
    featured: true,
    accentColor: '#0A84FF', // Apple blue
    tags: [
      'GitHub OAuth', 'Repository Ingestion', 'Static Analysis', 'AST Parsing',
      'Semantic Search', 'pgvector', 'OpenAI', 'RAG', '7 AI Agents',
      'BullMQ', 'Redis', 'PostgreSQL', 'Docker', 'Next.js', 'Fastify', 'Prisma'
    ],
    tagCategory: ['fullstack', 'ai'],
    github: 'https://github.com/kanishkgandecha/developer_platform',
    demo: null,
    description: 'An end-to-end code intelligence platform that ingests GitHub repositories, performs deterministic static analysis, enables semantic code search, and runs seven specialized AI agents to produce evidence-backed architectural, security, performance, quality, and dependency insights.',
    problem: 'Understanding complex GitHub repositories requires combining deterministic static analysis with deep semantic context and specialized AI inspection without raw code execution risks.',
    solution: 'Developer Platform securely ingests repos in isolated workspaces, parses TypeScript/JS ASTs and polyglot code, builds HNSW pgvector indices, and orchestrates seven specialized AI agents over BullMQ async queues.',
    architecture: [
      { layer: 'Frontend', detail: 'Next.js, React, TypeScript & Tailwind CSS' },
      { layer: 'Backend API', detail: 'Fastify REST API & Prisma ORM' },
      { layer: 'Async Queues', detail: 'BullMQ & Redis worker queue architecture' },
      { layer: 'Static & Vector Engine', detail: 'TypeScript Compiler AST & PostgreSQL pgvector HNSW index' },
      { layer: 'AI Multi-Agent', detail: '7 specialized OpenAI agents with RAG evidence citations' },
      { layer: 'Infrastructure & Safety', detail: 'Docker Compose, isolated workspace extraction & IDOR security' }
    ],
    highlights: [
      'GitHub OAuth authentication & secure workspace repository ingestion',
      'AST parsing using TypeScript compiler API and polyglot heuristics',
      'PostgreSQL + pgvector HNSW index with OpenAI embeddings for hybrid search',
      'Seven specialized AI agents (Architecture, Quality, Security, Performance, Risk, Docs, Summary)',
      'BullMQ + Redis asynchronous job queues with stale-job recovery',
      'Ownership IDOR protections, encrypted tokens, and prompt-injection guardrails'
    ],
    metrics: [
      { label: 'AI Agents', value: '7' },
      { label: 'Release', value: 'v1.0.0' },
      { label: 'Queue System', value: 'BullMQ' },
    ],
    modalDetails: {
      objective: 'Build an end-to-end V1 code intelligence system that ingests raw GitHub repositories into isolated workspaces, builds AST dependency graphs, indexes code with pgvector, and coordinates 7 specialized AI agents.',
      architecture: [
        'Secure Ingestion: Downloaded repository archives are processed in isolated workspaces with no raw code execution.',
        'Code Intelligence: AST parsing via TypeScript compiler API with heuristic parsing for Python, Java, C/C++, and Go.',
        'Semantic Search: OpenAI embeddings with pgvector HNSW index, cosine similarity, hybrid ranking, and incremental hashing.',
        '7 AI Agents: Architecture, Quality, Security, Performance, Dependency Risk, Documentation, and Executive Summary agents using structured completions and evidence citations.',
        'Reliability & Security: BullMQ queues, Redis, PostgreSQL, Fastify API, ownership IDOR protections, and stale-job recovery.'
      ]
    }
  },
  {
    id: 'medilink',
    title: 'MediLink',
    subtitle: 'Health Management Platform',
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
    description: 'Health platform with AI report analysis, doctor search, and health tracking.',
    problem: 'Health records are often scattered. Patients find it hard to track reports, and doctors lack complete histories.',
    solution: 'MediLink combines records, Gemini AI analysis, and appointment booking into one platform.',
    architecture: [
      { layer: 'Frontend', detail: 'React 18 with component architecture' },
      { layer: 'Backend', detail: 'Node.js + Express REST API' },
      { layer: 'Database', detail: 'MongoDB with Mongoose ODM' },
      { layer: 'AI Layer', detail: 'Gemini API for report analysis & chat' },
      { layer: 'Auth', detail: 'JWT with role-based access control' },
    ],
    highlights: [
      'AI health chatbot powered by Gemini API',
      'Automated report parsing and tracking',
      'Doctor directory with filtering & scheduling',
      'Real-time health dashboard',
      'Role-based access for patients and doctors',
    ],
    metrics: [
      { label: 'Modules', value: '12' },
      { label: 'Lines of Code', value: '3,200+' },
      { label: 'Build Time', value: '4 months' },
    ]
  },
  {
    id: 'electrohub',
    title: 'ElectroHub',
    subtitle: 'E-Commerce Store',
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
    description: 'E-commerce application with user auth, cart persistence, checkout, and admin tools.',
    problem: 'Online stores need reliable cart handling, inventory updates, and admin permissions.',
    solution: 'ElectroHub handles catalog browsing, persistent cart items, orders, and product CRUD controls.',
    architecture: [
      { layer: 'Frontend', detail: 'React with responsive component UI' },
      { layer: 'Backend', detail: 'Node.js & Express REST API' },
      { layer: 'Database', detail: 'MySQL relational schema' },
      { layer: 'Auth', detail: 'Session & JWT user authentication' },
    ],
    highlights: [
      'Product catalog managing 100+ items with filtering',
      'Shopping cart with persistence and total calculation',
      'User authentication and session management',
      'Admin dashboard with CRUD operations for inventory',
      'Order tracking and status updates',
    ],
    metrics: [
      { label: 'Products', value: '100+' },
      { label: 'Pages', value: '15+' },
      { label: 'Build Time', value: '3 months' },
    ]
  },
  {
    id: 'ai-resume',
    title: 'AI Resume Analyzer',
    subtitle: 'Resume Scoring Tool',
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
    description: 'Tool that parses resumes, calculates ATS scores, and highlights missing keywords.',
    problem: 'Job seekers often submit resumes without knowing if ATS filters will accept them.',
    solution: 'An instant analysis tool that scores resumes and gives clear, actionable suggestions.',
    architecture: [
      { layer: 'Frontend', detail: 'React with Tailwind CSS' },
      { layer: 'Analysis Engine', detail: 'Text parsing and keyword scoring engine' },
      { layer: 'Reporting', detail: 'Visual chart dashboard for score breakdown' },
    ],
    highlights: [
      'ATS compatibility score calculation',
      'Keyword density and section completeness analysis',
      'Visual breakdown dashboard',
      'Specific suggestions for resume improvement',
    ],
    metrics: [
      { label: 'Categories', value: '8' },
      { label: 'Feedback', value: 'Instant' },
      { label: 'Accuracy', value: 'ATS-aligned' },
    ]
  },
  {
    id: 'weather',
    title: 'Weather Dashboard',
    subtitle: 'Weather App',
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
    description: 'Lightweight weather dashboard using OpenWeather API.',
    problem: 'Users need a simple weather tool free of ad clutter and long load times.',
    solution: 'A minimal dashboard that shows live conditions and 5-day forecasts.',
    architecture: [
      { layer: 'Frontend', detail: 'Vanilla JS with responsive CSS Grid' },
      { layer: 'API', detail: 'OpenWeather REST API' },
    ],
    highlights: [
      'Real-time city search with live API data',
      '5-day weather forecast breakdown',
      'Temperature, humidity, and wind metrics',
      'Dynamic weather icon updates',
    ],
    metrics: [
      { label: 'Coverage', value: 'Global' },
      { label: 'Forecast', value: '5 days' },
      { label: 'Refresh', value: 'Real-time' },
    ]
  },
];

// ── Engineering Notes ─────────────────────────────────────────────────────────

export const ENGINEERING_NOTES = [
  {
    id: 'code-intelligence-rag',
    title: 'Multi-Agent Code Intelligence & Vector Search',
    category: 'AI & Systems Architecture',
    date: '2026',
    readTime: '4 min read',
    summary: 'Orchestrating deterministic AST static analysis with pgvector semantic retrieval and bounded multi-agent AI execution.',
    bullets: [
      'Ingesting repository archives in isolated workspaces with strict path-safety checks, preventing raw code execution risks.',
      'Constructing hybrid search indices by pairing OpenAI embeddings with PostgreSQL pgvector HNSW indices and incremental content hashing.',
      'Coordinating seven specialized AI agents (Security, Performance, Architecture, Quality, Risk, Docs, Summary) over BullMQ async queues with stale-job recovery.'
    ]
  },
  {
    id: 'performance-optimization',
    title: 'Browser Performance & Frame Budgets',
    category: 'Frontend Engineering',
    date: '2026',
    readTime: '3 min read',
    summary: 'Keeping web apps at 60fps by avoiding layout thrashing and heavy re-renders.',
    bullets: [
      'Using CSS transform and opacity properties exclusively for hardware acceleration.',
      'Decoupling heavy event listeners (mousemove, scroll) with requestAnimationFrame throttle.',
      'Enforcing strict memoization boundaries to prevent unnecessary React re-render cascades.'
    ]
  },
  {
    id: 'react-architecture',
    title: 'React Code Organization',
    category: 'Architecture',
    date: '2026',
    readTime: '4 min read',
    summary: 'Structuring React apps with reusable components and custom hooks.',
    bullets: [
      'Encapsulating complex interaction states into reusable custom hooks (e.g., mouse position, scroll directions).',
      'Leveraging Framer Motion shared-layout transitions for physical-feeling UI morphs.',
      'Designing clean prop signatures and accessible fallback structures.'
    ]
  },
  {
    id: 'interactive-visualization',
    title: 'Browser Rendering & Graphics',
    category: 'Graphics & Rendering',
    date: '2026',
    readTime: '3 min read',
    summary: 'Rendering complex data and volume slices directly in the browser.',
    bullets: [
      'Managing WebGL/GPU memory lifecycles during real-time slice interaction.',
      'Constructing responsive viewports with sub-millisecond interaction feedback.',
      'Ensuring high-dpi canvas crispness across diverse high-resolution displays.'
    ]
  },
  {
    id: 'rbac-security',
    title: 'API Security & Access Control',
    category: 'Backend & Security',
    date: '2025',
    readTime: '3 min read',
    summary: 'Building role-based access control and JWT authentication in Express.',
    bullets: [
      'Enforcing stateless JWT verification with automated token refreshment.',
      'Designing normalized relational schemas and ACID-compliant transactional flows.',
      'Guarding confidential patient and multi-vendor operational pipelines.'
    ]
  }
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
    description: 'Built frontend components, backend services, and browser-based rendering modules.',
    responsibilities: [
      'Built frontend components using React.js and TypeScript',
      'Developed backend microservices and REST APIs using Node.js and Express.js',
      'Engineered browser-based interactive rendering modules for multi-dimensional data',
      'Implemented Role-Based Access Control (RBAC) and performance optimization strategies for client interaction',
      'Used standard Git workflows for version control, code reviews, and team collaboration'
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'RBAC', 'Interactive Visualization', 'Performance Optimization', 'Git'],
  },
  {
    id: 'billing-internship',
    role: 'Software Development Intern',
    company: 'Billing & Invoice System',
    companyShort: 'Billing & Invoice System',
    period: 'December 2025',
    type: 'internship',
    current: false,
    description: 'Digitized manual invoicing processes by building a full-stack Billing & Invoice Management System.',
    responsibilities: [
      'Built a multi-vendor workflow system that digitized manual invoicing operations',
      'Built interactive React frontend interfaces and Node.js backend APIs',
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
  {
    id: 'nextjs',
    label: 'Next.js',
    category: 'frontend',
    recentlyUsed: ['Developer Platform'],
    specialties: ['App Router Architecture', 'Server Components', 'React 19 Hooks'],
    projects: ['developer-platform']
  },
  {
    id: 'fastify',
    label: 'Fastify',
    category: 'backend',
    recentlyUsed: ['Developer Platform'],
    specialties: ['High-Performance REST APIs', 'Plugin Architecture', 'Schema Validation'],
    projects: ['developer-platform']
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL & pgvector',
    category: 'databases',
    recentlyUsed: ['Developer Platform'],
    specialties: ['HNSW Vector Indexing', 'Cosine Similarity', 'Prisma ORM Schemas'],
    projects: ['developer-platform']
  },
  {
    id: 'redis',
    label: 'Redis & BullMQ',
    category: 'backend',
    recentlyUsed: ['Developer Platform'],
    specialties: ['Async Job Queues', 'Worker Architecture', 'Stale-Job Recovery'],
    projects: ['developer-platform']
  },
  {
    id: 'openai-rag',
    label: 'OpenAI & RAG',
    category: 'tools',
    recentlyUsed: ['Developer Platform'],
    specialties: ['7 Multi-Agent Workflows', 'Structured Completions', 'Retrieved Context Citations'],
    projects: ['developer-platform']
  },
  {
    id: 'docker',
    label: 'Docker & Compose',
    category: 'tools',
    recentlyUsed: ['Developer Platform'],
    specialties: ['Multi-Container Stacks', 'Isolated Workspaces', 'Environment Security'],
    projects: ['developer-platform']
  },
  {
    id: 'react',
    label: 'React.js',
    category: 'frontend',
    recentlyUsed: ['Developer Platform', 'Portfolio', 'MediLink', 'ElectroHub'],
    specialties: ['Component Architecture', 'State Management', 'Custom Hooks', 'Performance Optimization'],
    projects: ['developer-platform', 'medilink', 'electrohub', 'ai-resume']
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    category: 'frontend',
    recentlyUsed: ['Developer Platform', 'Portfolio', 'MedMarvel Modules'],
    specialties: ['AST Compiler API', 'Strict Type Systems', 'Interface Contracts'],
    projects: ['developer-platform', 'medilink']
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    category: 'languages',
    recentlyUsed: ['Portfolio', 'MediLink', 'Weather Dashboard'],
    specialties: ['Async/Await & Promises', 'ES6+ Syntax', 'DOM Manipulation'],
    projects: ['developer-platform', 'medilink', 'electrohub', 'ai-resume', 'weather']
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    category: 'backend',
    recentlyUsed: ['MediLink', 'ElectroHub'],
    specialties: ['Express Microservices', 'RESTful Routing', 'Middleware Design'],
    projects: ['medilink', 'electrohub']
  },
  {
    id: 'express',
    label: 'Express.js',
    category: 'backend',
    recentlyUsed: ['MediLink', 'ElectroHub'],
    specialties: ['API Controller Architecture', 'JWT Authentication', 'Error Middleware'],
    projects: ['medilink', 'electrohub']
  },
  {
    id: 'restapi',
    label: 'REST APIs',
    category: 'backend',
    recentlyUsed: ['Developer Platform', 'Portfolio', 'MediLink', 'ElectroHub', 'Weather'],
    specialties: ['Endpoint Design', 'JSON Serialization', 'HTTP Status Standards'],
    projects: ['developer-platform', 'medilink', 'electrohub', 'weather']
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    category: 'databases',
    recentlyUsed: ['MediLink'],
    specialties: ['Document Schemas', 'Mongoose ODM', 'Indexing & Queries'],
    projects: ['medilink']
  },
  {
    id: 'mysql',
    label: 'MySQL',
    category: 'databases',
    recentlyUsed: ['ElectroHub'],
    specialties: ['Relational Normalization', 'ACID Transactions', 'SQL Queries'],
    projects: ['electrohub']
  },
  {
    id: 'interactive-vis',
    label: 'Interactive Visualization',
    category: 'visualization',
    recentlyUsed: ['Portfolio', 'MedMarvel Modules'],
    specialties: ['GPU-Accelerated Rendering', 'WebGL Slicing', 'High-Frequency Viewports'],
    projects: ['medilink']
  },
  {
    id: 'python',
    label: 'Python',
    category: 'languages',
    recentlyUsed: ['ML & Analytics'],
    specialties: ['Scripting', 'Data Analysis', 'Machine Learning Models'],
    projects: []
  },
  {
    id: 'tailwindcss',
    label: 'Tailwind CSS',
    category: 'frontend',
    recentlyUsed: ['Developer Platform', 'Portfolio', 'AI Resume Analyzer'],
    specialties: ['Design Token Utility', 'Responsive Breakpoints', 'Theme Management'],
    projects: ['developer-platform', 'ai-resume']
  },
  {
    id: 'git',
    label: 'Git & GitHub',
    category: 'tools',
    recentlyUsed: ['Developer Platform', 'Portfolio', 'MediLink', 'ElectroHub'],
    specialties: ['Feature Branching', 'Pull Requests', 'Version Control'],
    projects: ['developer-platform', 'medilink', 'electrohub', 'ai-resume', 'weather']
  }
];

export const TECH_CATEGORIES = {
  frontend: { label: 'Frontend' },
  backend: { label: 'Backend' },
  languages: { label: 'Languages' },
  databases: { label: 'Databases' },
  visualization: { label: 'Visualization' },
  tools: { label: 'Tools' },
};

// ── Command Palette Actions ───────────────────────────────────────────────────

export const PALETTE_ACTIONS = [
  { id: 'projects', label: 'Search Projects', subtitle: 'Browse software projects', section: 'projects', icon: 'folder' },
  { id: 'notes', label: 'Engineering Notes', subtitle: 'Architecture & technical insights', section: 'notes', icon: 'book' },
  { id: 'experience', label: 'View Experience', subtitle: 'Internships & education', section: 'experience', icon: 'briefcase' },
  { id: 'about', label: 'About Me', subtitle: 'Background & core focus', section: 'about', icon: 'user' },
  { id: 'skills', label: 'Explore Technologies', subtitle: 'Tech stack & specialties', section: 'skills', icon: 'cpu' },
  { id: 'contact', label: 'Contact', subtitle: 'Get in touch directly', section: 'contact', icon: 'mail' },
  { id: 'resume', label: 'Download Resume', subtitle: 'Open Google Drive PDF', href: null, icon: 'file-text', action: 'resume' },
  { id: 'github', label: 'Open GitHub', subtitle: 'github.com/kanishkgandecha', href: 'https://github.com/kanishkgandecha', icon: 'github' },
  { id: 'linkedin', label: 'Open LinkedIn', subtitle: 'linkedin.com/in/kanishk-gandecha', href: 'https://www.linkedin.com/in/kanishk-gandecha/', icon: 'linkedin' },
  { id: 'email', label: 'Copy Email', subtitle: 'gandechakanishk9@gmail.com', action: 'email', icon: 'mail' },
];
