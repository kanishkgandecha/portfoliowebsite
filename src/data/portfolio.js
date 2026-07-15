// ============================================================
// PORTFOLIO — Single Source of Truth
// Apple-philosophy design — v3.0.0
// ============================================================

export const PERSONAL = {
  name: 'Kanishk Gandecha',
  firstName: 'Kanishk',
  title: 'Full Stack Developer',
  headline: 'Building software that solves real-world problems.',
  shortBio:
    'I am a Computer Engineering student at K.J. Somaiya COE, Mumbai, passionate about building scalable full-stack products and integrating intelligent systems that make a meaningful difference.',
  roles: ['Full Stack Developer', 'MERN Stack Engineer', 'Software Engineering Intern'],
  email: 'gandechakanishk9@gmail.com',
  phone: '+91-9561500052',
  location: 'Mumbai, India',
  github: 'https://github.com/kanishkgandecha',
  linkedin: 'https://www.linkedin.com/in/kanishk-gandecha/',
  resume: 'https://drive.google.com/file/d/1pcbhkZWd2hu5kP6HAa2PONVxAoIB15GD/view?usp=sharing',
  cgpa: '9.13',
  university: 'K.J. Somaiya COE',
  universityFull: 'K.J. Somaiya College of Engineering',
  degree: 'B.Tech Computer Engineering',
  year: '2023 – 2027',
  status: 'Available for Internships',
  availableFrom: 'Immediately',
};

// ── Projects ──────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 'medilink',
    title: 'MediLink',
    subtitle: 'Healthcare Management Platform',
    category: 'Healthcare · AI',
    year: '2025',
    duration: '4 months',
    status: 'Completed',
    featured: true,
    accentColor: '#30D158', // Apple green
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI'],
    tagCategory: ['fullstack', 'ai'],
    github: 'https://github.com/kanishkgandecha',
    demo: null,
    // Short card content
    description: 'Full-stack MERN healthcare system with an AI chatbot, real-time health analytics, doctor directory, and comprehensive patient management.',
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
      'Automated health report generation',
      'Doctor directory with advanced search',
      'Real-time dashboard analytics',
      'Medical history tracking across visits',
      'Role-based access: patient, doctor, admin',
    ],
    metrics: [
      { label: 'Modules', value: '12' },
      { label: 'Lines of Code', value: '3,200+' },
      { label: 'Build Time', value: '4 months' },
    ],
  },
  {
    id: 'electrohub',
    title: 'ElectroHub',
    subtitle: 'E-Commerce Platform',
    category: 'E-Commerce',
    year: '2024',
    duration: '3 months',
    status: 'Completed',
    featured: true,
    accentColor: '#FF9F0A', // Apple orange
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    tagCategory: ['fullstack'],
    github: 'https://github.com/kanishkgandecha',
    demo: null,
    description: 'Full-featured electronics e-commerce platform with product catalog, shopping cart, user authentication, and a complete admin dashboard.',
    problem: 'Small electronics retailers needed an affordable, manageable online store without enterprise complexity and cost.',
    solution: 'ElectroHub delivers a complete commerce workflow — catalog management, cart, orders, and admin — built for simplicity and reliability.',
    architecture: [
      { layer: 'Frontend', detail: 'HTML/CSS/JS with Bootstrap 5' },
      { layer: 'Backend', detail: 'PHP with MVC-inspired structure' },
      { layer: 'Database', detail: 'MySQL with normalized schema' },
    ],
    highlights: [
      'Product catalog managing 100+ items',
      'Shopping cart with session persistence',
      'Full user authentication system',
      'Admin dashboard with CRUD operations',
      'Order management and tracking',
      'Category-based search and filtering',
    ],
    metrics: [
      { label: 'Products', value: '100+' },
      { label: 'Pages', value: '15+' },
      { label: 'Build Time', value: '3 months' },
    ],
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
    description: 'Resume scoring and feedback tool that provides instant, actionable analysis based on ATS-friendly metrics, keyword density, and formatting.',
    problem: 'Job seekers blindly submit resumes without knowing whether they will pass ATS filters, leading to missed opportunities.',
    solution: 'An instant analysis tool that scores resumes across 8 categories and provides specific, actionable improvement suggestions.',
    architecture: [
      { layer: 'Frontend', detail: 'React with Tailwind CSS' },
      { layer: 'Analysis Engine', detail: 'Client-side AI scoring logic' },
      { layer: 'Reporting', detail: 'Visual dashboard with chart components' },
    ],
    highlights: [
      'ATS compatibility score calculation',
      'Keyword density analysis',
      'Section completeness checker',
      'Visual score breakdown dashboard',
      'Specific improvement suggestions',
      '8 scoring categories',
    ],
    metrics: [
      { label: 'Categories', value: '8' },
      { label: 'Feedback', value: 'Instant' },
      { label: 'Accuracy', value: 'ATS-aligned' },
    ],
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
    description: 'Clean weather application with real-time city search, 5-day forecasting, and live meteorological metrics.',
    problem: 'Existing weather apps are overloaded with ads and irrelevant data. A focused, clean alternative was needed.',
    solution: 'A minimal dashboard that surfaces exactly what matters: current conditions and a 5-day forecast — presented clearly.',
    architecture: [
      { layer: 'Frontend', detail: 'Vanilla JS with CSS Grid layout' },
      { layer: 'API', detail: 'OpenWeather REST API' },
    ],
    highlights: [
      'Real-time city search with autocomplete',
      '5-day weather forecast',
      'Temperature, humidity, wind speed display',
      'Dynamic weather icon system',
      'Responsive grid layout',
    ],
    metrics: [
      { label: 'Coverage', value: 'Global' },
      { label: 'Forecast', value: '5 days' },
      { label: 'Refresh', value: 'Real-time' },
    ],
  },
  {
    id: 'agri',
    title: 'Agriculture Wholesale',
    subtitle: 'Farmer-to-Buyer Marketplace',
    category: 'AgriTech · UI',
    year: '2024',
    duration: '1 month',
    status: 'Prototype',
    featured: false,
    accentColor: '#30D158', // Apple green
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    tagCategory: ['frontend', 'fullstack'],
    github: 'https://github.com/kanishkgandecha',
    demo: null,
    description: 'Scalable vendor-based platform prototype connecting farmers directly to bulk buyers, eliminating middlemen.',
    problem: 'Agricultural middlemen inflate prices and significantly reduce farmer profit margins on wholesale transactions.',
    solution: 'A direct marketplace prototype demonstrating a farmer-to-buyer wholesale platform with vendor profiles and bulk ordering.',
    architecture: [
      { layer: 'Frontend', detail: 'HTML/CSS/JS with Bootstrap' },
      { layer: 'Data', detail: 'Mock data layer for prototype' },
    ],
    highlights: [
      'Vendor profile management',
      'Product listing with categories',
      'Bulk order request forms',
      'Category-based browsing',
      'B2B transaction flow',
    ],
    metrics: [
      { label: 'Model', value: 'B2B' },
      { label: 'Scope', value: 'State-level' },
      { label: 'Type', value: 'Marketplace' },
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    id: 'current-internship',
    role: 'Software Development Intern',
    company: 'Currently Seeking',
    companyShort: 'Open to Opportunities',
    period: 'Immediately Available',
    type: 'internship',
    current: true,
    description: 'Actively seeking a software engineering internship where I can contribute to a team, ship real products, and grow as a developer.',
    responsibilities: [
      'Open to full-stack, backend, or frontend roles',
      'Comfortable with MERN stack and Python environments',
      'Available for full-time internship immediately',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Python'],
  },
];

export const EDUCATION = [
  {
    id: 'kjsce',
    degree: 'B.Tech Computer Engineering',
    institution: 'K.J. Somaiya College of Engineering',
    location: 'Mumbai, India',
    period: '2023 – 2027',
    score: 'CGPA 9.13 / 10',
    current: true,
    highlights: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems',
      'Machine Learning Fundamentals',
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
  { id: 'react', label: 'React', category: 'frontend', projects: ['medilink', 'ai-resume'] },
  { id: 'js', label: 'JavaScript', category: 'frontend', projects: ['medilink', 'weather', 'ai-resume', 'electrohub', 'agri'] },
  { id: 'html', label: 'HTML', category: 'frontend', projects: ['electrohub', 'weather', 'agri'] },
  { id: 'css', label: 'CSS', category: 'frontend', projects: ['electrohub', 'weather', 'agri'] },
  { id: 'tailwind', label: 'Tailwind', category: 'frontend', projects: ['medilink', 'ai-resume'] },
  // Backend
  { id: 'nodejs', label: 'Node.js', category: 'backend', projects: ['medilink'] },
  { id: 'express', label: 'Express', category: 'backend', projects: ['medilink'] },
  { id: 'php', label: 'PHP', category: 'backend', projects: ['electrohub'] },
  { id: 'restapi', label: 'REST APIs', category: 'backend', projects: ['medilink', 'weather'] },
  // Database
  { id: 'mongodb', label: 'MongoDB', category: 'database', projects: ['medilink'] },
  { id: 'mysql', label: 'MySQL', category: 'database', projects: ['electrohub'] },
  // AI / ML
  { id: 'python', label: 'Python', category: 'ai', projects: ['ai-resume'] },
  { id: 'ai', label: 'Gemini AI', category: 'ai', projects: ['medilink', 'ai-resume'] },
  // Tools
  { id: 'git', label: 'Git', category: 'tools', projects: ['medilink', 'electrohub', 'ai-resume', 'weather', 'agri'] },
  { id: 'github', label: 'GitHub', category: 'tools', projects: ['medilink', 'electrohub', 'ai-resume', 'weather', 'agri'] },
];

export const TECH_CATEGORIES = {
  frontend: { label: 'Frontend' },
  backend: { label: 'Backend' },
  database: { label: 'Database' },
  ai: { label: 'AI / ML' },
  tools: { label: 'Tools' },
};

// ── Command Palette Actions ───────────────────────────────────────────────────

export const PALETTE_ACTIONS = [
  { id: 'projects', label: 'View Projects', subtitle: 'Browse my work', section: 'projects', icon: 'folder' },
  { id: 'experience', label: 'Experience', subtitle: 'Education & background', section: 'experience', icon: 'briefcase' },
  { id: 'about', label: 'About & Skills', subtitle: 'Technologies & certifications', section: 'about', icon: 'user' },
  { id: 'contact', label: 'Contact Me', subtitle: 'Let\'s work together', section: 'contact', icon: 'mail' },
  { id: 'resume', label: 'Download Resume', subtitle: 'Open in new tab', href: null, icon: 'file-text', action: 'resume' },
  { id: 'github', label: 'Open GitHub', subtitle: 'github.com/kanishkgandecha', href: 'https://github.com/kanishkgandecha', icon: 'github' },
  { id: 'linkedin', label: 'Open LinkedIn', subtitle: 'linkedin.com/in/kanishk-gandecha', href: 'https://www.linkedin.com/in/kanishk-gandecha/', icon: 'linkedin' },
  { id: 'email', label: 'Email Me', subtitle: 'gandechakanishk9@gmail.com', action: 'email', icon: 'mail' },
];
