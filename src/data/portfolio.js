// ============================================================
// PORTFOLIO — Single Source of Truth
// Software Engineer Portfolio — v6.0.0
// ============================================================

export const SITE = {
  url: 'https://kanishkgandecha.me',
  ogImage: 'https://kanishkgandecha.me/images/og-image.jpg',
};

export const PERSONAL = {
  name: 'Kanishk Gandecha',
  firstName: 'Kanishk',
  // Broad role stays "Software Engineer"; `specialization` is the primary
  // positioning layered on top. `displayTitle` is the composed form used
  // wherever a single, prominent identity string is needed (page title,
  // structured data, profile card).
  title: 'Software Engineer',
  specialization: 'Full-Stack & Native iOS',
  displayTitle: 'Full-Stack & Native iOS Software Engineer',
  avatar: '/images/profile.jpg',
  avatarSmall: {
    webp: '/images/profile-64.webp',
    jpg: '/images/profile-64.jpg',
  },
  avatarSrcSet: {
    webp: '/images/profile-160.webp 160w, /images/profile-320.webp 320w',
    jpg: '/images/profile-160.jpg 160w, /images/profile-320.jpg 320w',
  },
  headline: 'I build production-grade full-stack systems and native iOS applications.',
  shortBio:
    'Full-Stack and Native iOS software engineer building scalable web platforms, privacy-focused Apple applications, real-time systems, and AI developer tools—from interfaces and APIs to databases, system integrations, testing, and deployment.',
  roles: ['Full-Stack & Native iOS Software Engineer', 'Full-Stack Developer', 'iOS Developer'],
  email: 'kanishk.gandecha09@gmail.com',
  phone: '+91 95615 00052',
  location: 'Mumbai, India',
  github: 'https://github.com/kanishkgandecha',
  linkedin: 'https://www.linkedin.com/in/kanishk-gandecha/',
  resume: '/resume.pdf',
  cgpa: '8.23',
  university: 'K.J. Somaiya COE',
  universityFull: 'K.J. Somaiya College of Engineering',
  degree: 'B.Tech Computer Engineering',
  year: '2023 – Present',
  status: 'Available for Internships',
  availableFrom: 'Immediately',
  latestProject: 'Kue 2.0',
  // Primary capability labels — consistent across Hero, About, and metadata.
  // Full-Stack is listed before Native iOS everywhere per current positioning.
  focusAreas: [
    'Full-Stack Engineering',
    'Native iOS',
    'Real-Time Systems',
    'AI Developer Tools',
  ],
  currentlyBuilding: 'Currently building: full-stack systems, native iOS apps, and AI developer tools',
};

// ── Internship Highlights ─────────────────────────────────────────────────────

export const INTERNSHIP_HIGHLIGHTS = [
  {
    id: 'ios-native',
    title: 'Native iOS Development',
    category: 'Swift & SwiftUI',
    desc: 'Building privacy-focused SwiftUI applications with SwiftData persistence and widgets.',
    icon: 'layers'
  },
  {
    id: 'enterprise-web',
    title: 'Full-Stack Web Development',
    category: 'Full Stack Engineering',
    desc: 'Building reliable web applications with clean React architecture and state management.',
    icon: 'layout'
  },
  {
    id: 'realtime-systems',
    title: 'Real-Time Systems',
    category: 'Live Data Pipelines',
    desc: 'Building real-time event pipelines with SSE and database-level pub/sub.',
    icon: 'zap'
  },
  {
    id: 'rest-api',
    title: 'REST API Development',
    category: 'Backend Infrastructure',
    desc: 'Designing REST APIs, database models, and backend services.',
    icon: 'server'
  },
  {
    id: 'ai-dev-tools',
    title: 'AI Developer Tools',
    category: 'Multi-Agent Systems',
    desc: 'Orchestrating specialized AI agents over static analysis and semantic search.',
    icon: 'cpu'
  },
  {
    id: 'rbac',
    title: 'Role Based Access Control',
    category: 'Security & Access',
    desc: 'Building role-based access control and JWT authentication.',
    icon: 'shield'
  },
  {
    id: 'reliability',
    title: 'Reliability & Testing',
    category: 'Data Integrity',
    desc: 'Data migration, fail-closed validation, and automated test coverage.',
    icon: 'server'
  }
];

// ── Projects ──────────────────────────────────────────────────────────────────
// `tier: 'primary'` projects appear in the main Selected Work grid, in array order.
// `tier: 'earlier'` projects appear in the smaller Earlier Projects section.

export const PROJECTS = [
  // ── 1. Kue 2.0 — flagship iOS project. Full case study lives at /projects/kue;
  // the card only ever shows the one-liner + 3 metrics + a View Case Study link.
  {
    id: 'kue',
    tier: 'primary',
    title: 'Kue 2.0',
    subtitle: 'Privacy-Focused iOS Event Planner',
    category: 'Native iOS · SwiftUI',
    year: '2026',
    duration: 'v2.0',
    status: 'Built & Tested',
    accentColor: '#5E5CE6', // Apple indigo
    tags: [
      'Swift', 'SwiftUI', 'SwiftData', 'WidgetKit', 'ActivityKit', 'App Intents',
      'EventKit', 'Vision', 'Speech', 'AVFoundation', 'UserNotifications', 'Core Spotlight', 'XCTest'
    ],
    tagCategory: ['ios', 'mobile'],
    github: 'https://github.com/kanishkgandecha/Kue',
    demo: null,
    description: 'A native SwiftUI event planner with recurring events, widgets, Live Activities, Calendar integration, OCR, voice input, and explicit outcome tracking.',
    metrics: [
      { label: 'Unit/Integration Tests', value: '749' },
      { label: 'UI Tests', value: '98' },
      { label: 'Warnings / Errors', value: '0 / 0' },
    ],
    caseStudy: {
      positioning: 'Native iOS Project · v2.0',
      statusLine: 'Second major version (v2.0), rebuilt from Kue 1.0. Built and tested — not currently presented as an App Store release.',
      achievements: [
        { value: '749', label: 'Unit & integration tests passed' },
        { value: '98', label: 'UI tests passed — 0 failures, 0 skipped' },
        { value: '0', label: 'Warnings across final Kue, Widget, Share & Personal builds' },
        { value: '0', label: 'Errors across final clean build configurations' },
        { value: '1', label: 'Real-device migration path validated end to end' },
      ],
      intro: 'Kue 2.0 is a privacy-focused native iOS application for planning and tracking exams, trips, birthdays, deadlines, appointments, and other important events. An event can carry dates, tasks, reminders, schedules, recurrence rules, widgets, Calendar links, and an explicit lifecycle state. Unlike a basic countdown app, Kue never silently marks an event completed when its end time passes — unresolved past events enter Needs Review until the user explicitly completes, reschedules, skips, or cancels them. It is built with Swift, SwiftUI, and SwiftData, and integrates with WidgetKit, ActivityKit, App Intents, EventKit, Vision, Speech, AVFoundation, UserNotifications, and Core Spotlight through protocol-based System/Fake abstractions so core behavior can be tested deterministically.',
      boundaries: [
        'Kue is built and tested.',
        'It is not presented as an App Store release.',
        'CloudKit architecture is compatible/ready, but not publicly deployed or production-verified.',
        'Simulator and fake-tested system integrations are not equivalent to complete physical-device verification.',
        'Real-device verification applies specifically to the migration path described below.',
      ],
      problem: {
        summary: 'Important events are often fragmented across calendars, reminder lists, countdown apps, and notes. A useful product has to communicate both when an event occurs and what preparation or follow-up remains — while a set of underlying engineering problems stay invisible to the user.',
        challenges: [
          'Recurring-event exceptions',
          'External Calendar changes',
          'Notification permissions',
          'Data migration',
          'Widget selection',
          'Backups',
          'Simulator vs. physical-device behavior',
        ],
      },
      solution: {
        summary: 'A unified event model powers a date-grouped home experience with search, templates, tasks, schedules, reminders, recurrence, countdowns, and Calendar links — surfaced through widgets and a Focus Mode that emphasize user control and transparent system state over automatic behavior.',
      },
      featureGroups: [
        {
          title: 'Event Lifecycle',
          items: [
            'Creation, editing, duplication, deletion, search, filtering, sorting & templates',
            'Tasks, schedules, reminders, countdowns & explicit outcome tracking',
            'Explicit "Needs Review" state for unresolved past events',
          ],
        },
        {
          title: 'Recurrence & Calendar',
          items: [
            'Recurring events with per-occurrence exceptions',
            '"This Event" vs "This and Future Events" editing',
            'Apple Calendar import, export, update, conflict detection & missing-event handling',
          ],
        },
        {
          title: 'Capture Tools',
          items: [
            'Vision OCR for screenshots & photos with validation, bounded downsampling & EXIF handling',
            'On-device-only voice input with permission handling, cancellation safety & silence timeout',
            'Stale-callback protection for capture workflows',
          ],
        },
        {
          title: 'Widgets & Live Activities',
          items: [
            'Home Screen & Lock Screen widgets in multiple sizes',
            'Dedicated Countdown widget attached to one explicitly selected event',
            'Live Activities & Dynamic Island with explicit one-event Focus Mode',
          ],
        },
        {
          title: 'System Integrations',
          items: [
            'Siri, Shortcuts & App Intents',
            'Core Spotlight search & deep links',
            'Control Center and Lock Screen controls',
          ],
        },
        {
          title: 'Notifications',
          items: [
            'Pre-event reminders & starting-now notifications',
            'Outcome follow-ups with actionable buttons',
            'Transparent, inspectable reminder states',
          ],
        },
        {
          title: 'Backup & Onboarding',
          items: [
            'Versioned .kuebackup export & non-destructive merge-by-UUID restoration',
            'First-run onboarding & privacy explanations',
            'Backup guidance, accessibility & localization readiness',
          ],
        },
      ],
      architecture: {
        summary: 'The interface is built in SwiftUI over SwiftData persistence with a versioned migration chain. Recurrence is modeled explicitly, each event carries an explicit lifecycle state, and multiple app-extension targets (Widget, Share, Personal) share this core through protocol-based dependency injection.',
        points: [
          'SwiftUI interface with SwiftData persistence and a versioned migration chain',
          'Explicit recurrence model and event lifecycle (no silent auto-completion)',
          'Multiple app-extension targets: Widget, Share, and Personal',
          'Protocol-based dependency injection with System/Fake seams for Calendar, OCR, voice, cloud sync, Spotlight, Live Activities & notifications',
          'CloudKit-compatible / CloudKit-ready design with deterministic conflict handling, a sync outbox, and test fakes — public multi-device CloudKit sync is not deployed or production-verified',
        ],
      },
      engineeringStories: [
        {
          title: 'Legacy-data migration',
          problem: 'SwiftData could not identify a real Kue 1.0 store version, making a naive migration unsafe.',
          solution: 'Solved with exact metadata signatures, SQLite Online Backup, fail-closed validation, rollback, relationship validation, and durable reopen checks.',
        },
        {
          title: 'Recurring-event crash',
          problem: '"This and Future Events" editing caused a detached-fault crash when reconciling occurrences.',
          solution: 'Required values are now resolved before deletion, and reconciliation runs against a fresh ModelContext.',
        },
        {
          title: 'Dedicated widget configuration',
          problem: 'A countdown widget could silently switch away from the event the user had explicitly selected.',
          solution: 'Widget configuration now pins to the user-selected event so it cannot drift to a different one.',
        },
        {
          title: 'Test isolation',
          problem: 'Xcode simulator clones interfered with UI test runs, producing flaky results.',
          solution: 'Introduced isolated UI-test stores, deterministic orientation reset, and serial execution.',
        },
      ],
      testing: {
        summary: 'Kue reached 749 passing unit and integration tests and 98 passing UI tests with zero failures and zero skipped tests, alongside zero warnings and zero errors across the final Kue, Widget, Share, and Personal build configurations.',
        deviceValidation: [
          'Kue 1.0 events remained intact after migration on a real iPhone',
          'Data persisted correctly after app termination and relaunch',
          'A post-migration write succeeded without corrupting existing data',
          'The migrated store exported successfully to a .kuebackup file',
        ],
        disclaimer: 'Automated and simulator-based testing (including System/Fake abstractions) covers most integrations deterministically, but does not by itself prove every hardware integration is production-ready. Physical-device verification above is limited to the migration path described; it is not a claim of complete device verification across all Apple integrations.',
      },
      privacy: [
        'On-device-only OCR and voice processing — no audio or images leave the device for these features',
        'Explicit permission education before requesting Calendar, notification, microphone, or photo access',
        'Minimal persistence of sensitive data: titles, tasks, locations, notes, OCR text & transcripts',
        'Bounded image memory limits and safe cancellation for capture workflows',
        'Checksummed backups with validation before deserialization',
        'Merge-by-UUID restoration that never silently overwrites existing data',
        'SQLite-safe migration backups with rollback on failure',
        'Fail-closed handling of unknown or corrupted stores',
      ],
      outcome: 'The project reached clean builds with zero warnings and zero errors, passed 749 unit/integration tests and 98 UI tests, and successfully preserved real Kue 1.0 data through a real-device migration, termination/relaunch cycle, post-migration write, and backup export. Kue 2.0 is not currently being presented as a publicly released app.',
      techStackGroups: [
        { category: 'Application', items: ['Swift', 'SwiftUI', 'SwiftData', 'Xcode'] },
        { category: 'Apple Integrations', items: ['WidgetKit', 'ActivityKit', 'App Intents', 'EventKit', 'Vision', 'Speech', 'AVFoundation', 'UserNotifications', 'Core Spotlight'] },
        { category: 'Persistence & Recovery', items: ['SwiftData Migrations', 'SQLite C API', 'Versioned Backups', 'Checksum Validation'] },
        { category: 'Architecture', items: ['Protocol-Oriented DI', 'System/Fake Adapters', 'Deterministic Conflict Handling', 'Sync Outbox', 'Multi-Target Architecture'] },
        { category: 'Testing', items: ['XCTest', 'Swift Testing', 'UI Testing', 'Isolated Stores', 'Deterministic Simulator Config'] },
        { category: 'Tools', items: ['Git', 'Xcode Build Tooling'] },
      ],
    },
  },

  // ── 2. Developer Platform ──────────────────────────────────────────────────
  {
    id: 'developer-platform',
    tier: 'primary',
    title: 'Developer Platform',
    subtitle: 'Code Intelligence & Multi-Agent AI Platform',
    category: 'Full Stack · AI · Static Analysis',
    year: '2026',
    duration: 'v1.0.0',
    status: 'Completed',
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
  },

  // ── 3. F1 Live Platform ────────────────────────────────────────────────────
  {
    id: 'f1-live-platform',
    tier: 'primary',
    title: 'F1 Live Platform',
    subtitle: 'Real-Time Formula 1 Platform',
    category: 'Real-Time Full-Stack Platform',
    year: '2026',
    duration: 'In Development',
    status: 'In Development',
    accentColor: '#E10600', // Formula 1 red
    tags: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Server-Sent Events'],
    tagCategory: ['fullstack', 'realtime'],
    github: 'https://github.com/kanishkgandecha/sports-app',
    demo: null,
    description: 'A Formula 1 live platform built as a monorepo with separate web, API, and ingestion services and a real-time event pipeline using PostgreSQL LISTEN/NOTIFY and Server-Sent Events.',
    problem: 'Live Formula 1 data changes second-to-second, so the platform needs a real-time delivery pipeline rather than polling, while keeping ingestion, API, and web concerns cleanly separated.',
    solution: 'F1 Live Platform runs as a monorepo with dedicated web, API, and ingestion services. PostgreSQL LISTEN/NOTIFY fans out database changes, which are streamed to the browser over Server-Sent Events.',
    architecture: [
      { layer: 'Web', detail: 'Next.js & TypeScript' },
      { layer: 'API', detail: 'Fastify service layer' },
      { layer: 'Database', detail: 'PostgreSQL & Prisma ORM' },
      { layer: 'Real-Time Pipeline', detail: 'PostgreSQL LISTEN/NOTIFY & Server-Sent Events' },
      { layer: 'Structure', detail: 'Monorepo with separate web, API & ingestion services' },
    ],
    highlights: [
      'Monorepo with separate web, API, and ingestion services',
      'Real-time event pipeline via PostgreSQL LISTEN/NOTIFY',
      'Server-Sent Events streaming live updates to the browser',
      'Prisma-managed PostgreSQL schema',
      'Focused solely on Formula 1 data',
    ],
    metrics: [
      { label: 'Status', value: 'In Dev' },
      { label: 'Services', value: 'Web · API · Ingestion' },
      { label: 'Realtime', value: 'SSE' },
    ],
  },

  // ── 4. MediLink ────────────────────────────────────────────────────────────
  {
    id: 'medilink',
    tier: 'primary',
    title: 'MediLink',
    subtitle: 'Hospital Management System',
    category: 'MERN · Healthcare',
    year: '2025',
    duration: null,
    status: 'Completed',
    accentColor: '#30D158', // Apple green
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    tagCategory: ['fullstack'],
    github: 'https://github.com/kanishkgandecha/medilink',
    demo: null,
    description: 'A MERN hospital management platform with protected APIs and role-specific workflows for eight user types across appointments, pharmacy, billing, wards, lab reports, and staff management.',
    problem: 'Hospital operations span many distinct roles — reception, pharmacy, billing, wards, lab, and staff management — each needing different data access without a fragile, ad-hoc permissions model.',
    solution: 'MediLink implements role-specific workflows for eight user types on top of a shared MongoDB schema, with every API route protected and scoped by role.',
    architecture: [
      { layer: 'Frontend', detail: 'React with component architecture' },
      { layer: 'Backend', detail: 'Node.js + Express REST API' },
      { layer: 'Database', detail: 'MongoDB with Mongoose ODM' },
      { layer: 'Auth', detail: 'JWT with role-based access control' },
    ],
    highlights: [
      'Role-specific workflows for 8 user types: appointments, pharmacy, billing, wards, lab reports & staff management',
      'Protected REST APIs with JWT authentication',
      'Role-based access control enforced across every module',
      'MongoDB schema design with Mongoose ODM',
      'Deployed, working MERN hospital management platform',
    ],
    metrics: [
      { label: 'User Types', value: '8' },
      { label: 'Core Modules', value: '6' },
      { label: 'Stack', value: 'MERN' },
    ],
  },

  // ── Earlier Projects (smaller / earlier-stage work) ───────────────────────
  {
    id: 'electrohub',
    tier: 'earlier',
    title: 'ElectroHub',
    subtitle: 'E-Commerce Store',
    category: 'Full Stack · E-Commerce',
    year: '2024',
    duration: null,
    status: 'Completed',
    accentColor: '#FF9F0A', // Apple orange
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    tagCategory: ['fullstack'],
    // No verified per-project repository URL — source link intentionally hidden.
    github: null,
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
    // No verified metrics (product counts, page counts, build duration) —
    // omitted rather than presented as unsubstantiated claims.
    metrics: [],
  },
  {
    id: 'ai-resume-analyzer',
    tier: 'earlier',
    title: 'AI Resume Analyzer',
    subtitle: 'Resume Scoring Tool',
    category: 'AI · Productivity',
    year: '2025',
    duration: null,
    status: 'Completed',
    accentColor: '#BF5AF2', // Apple purple
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'AI'],
    tagCategory: ['ai', 'frontend'],
    // No verified per-project repository URL — source link intentionally hidden.
    github: null,
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
    // No verified metrics (category counts, accuracy claims) — omitted
    // rather than presented as unsubstantiated claims.
    metrics: [],
  },
  {
    id: 'weather-dashboard',
    tier: 'earlier',
    title: 'Weather Dashboard',
    subtitle: 'Weather App',
    category: 'API · Frontend',
    year: '2024',
    duration: null,
    status: 'Completed',
    accentColor: '#0A84FF', // Apple blue
    tags: ['JavaScript', 'CSS', 'OpenWeather API', 'HTML'],
    tagCategory: ['frontend'],
    // No verified per-project repository URL — source link intentionally hidden.
    github: null,
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
    // No verified project-outcome metrics — Global/5-day/Real-time describe
    // the OpenWeather API's own capability, not this project's results, so
    // the metric strip is omitted rather than presented as an achievement.
    metrics: [],
  },
];

// ── Engineering Notes ─────────────────────────────────────────────────────────

export const ENGINEERING_NOTES = [
  {
    id: 'swiftdata-fail-closed-migration',
    title: 'Designing a Fail-Closed SwiftData Migration',
    category: 'iOS Engineering',
    date: '2026',
    readTime: '4 min read',
    summary: 'Migrating real Kue 1.0 data into Kue 2.0 safely, when SwiftData had no reliable way to identify the legacy store version.',
    bullets: [
      'Identifying a genuine Kue 1.0 store by exact metadata signature instead of trusting SwiftData version inference.',
      'Taking a SQLite Online Backup before touching the store, so a failed migration can roll back cleanly.',
      'Failing closed on any unknown or corrupted store, with relationship validation and a durable reopen check before declaring success.',
      'Validating on a real iPhone: Kue 1.0 events stayed intact through migration, app termination/relaunch, a post-migration write, and a .kuebackup export.'
    ]
  },
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
    current: false, // internship has ended — not current employment
    description: 'Completed internship building frontend components, backend services, and browser-based rendering modules.',
    responsibilities: [
      'Built responsive frontend features using React.js and TypeScript',
      'Developed backend microservices and REST APIs using Node.js and Express.js',
      'Engineered browser-based interactive rendering and 2D/3D visualization workflows using Three.js and Niivue',
      'Implemented Role-Based Access Control (RBAC) and performance optimization strategies for client interaction',
      'Used standard Git workflows for version control, code reviews, and team collaboration'
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'RBAC', 'Three.js', 'Niivue', 'Git'],
  },
  {
    id: 'billing-freelance',
    role: 'Freelance Full-Stack Developer',
    company: 'Wholesale Agricultural Vendor',
    companyShort: 'Wholesale Agricultural Vendor',
    period: 'December 2025',
    type: 'freelance',
    current: false,
    description: 'Built a billing and invoice management system that digitized manual records and supported multi-vendor transaction workflows.',
    responsibilities: [
      'Built a billing and invoice management system that digitized manual records for a wholesale agricultural vendor',
      'Implemented a React/TypeScript frontend and Node.js/Express APIs for multi-vendor transaction workflows',
      'Designed database schemas and role-based access for business records'
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'RBAC'],
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

// `credentialUrl` is the personal certificate/credential link, when one is verified.
// When it is null, the UI shows "View Course" pointing at the public course page
// instead of implying that page is the personal certificate.
export const CERTIFICATIONS = [
  {
    id: 'ibm-swe',
    title: 'Introduction to Software Engineering',
    issuer: 'IBM via Coursera',
    year: '2024',
    link: 'https://www.coursera.org/learn/introduction-to-software-engineering',
    credentialUrl: null,
  },
  {
    id: 'ibm-ml',
    title: 'Machine Learning with Python',
    issuer: 'IBM via Coursera',
    year: '2024',
    link: 'https://www.coursera.org/learn/machine-learning-with-python',
    credentialUrl: null,
  },
];

// ── Technology Stack ──────────────────────────────────────────────────────────

export const TECH_STACK = [
  // ── iOS ──
  {
    id: 'swift',
    label: 'Swift',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Value-Type Modeling', 'Protocol-Oriented Design', 'Concurrency'],
    projects: ['kue']
  },
  {
    id: 'swiftui',
    label: 'SwiftUI',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Declarative Layouts', 'Adaptive UI', 'Accessibility'],
    projects: ['kue']
  },
  {
    id: 'swiftdata',
    label: 'SwiftData',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Versioned Migrations', 'Fail-Closed Validation', 'Relationship Modeling'],
    projects: ['kue']
  },
  {
    id: 'widgetkit',
    label: 'WidgetKit',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Home & Lock Screen Widgets', 'Dedicated Countdown Widget', 'Timeline Providers'],
    projects: ['kue']
  },
  {
    id: 'activitykit',
    label: 'ActivityKit',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Live Activities', 'Dynamic Island', 'One-Event Focus Mode'],
    projects: ['kue']
  },
  {
    id: 'app-intents',
    label: 'App Intents',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Siri & Shortcuts', 'Control Center Controls', 'Lock Screen Controls'],
    projects: ['kue']
  },
  {
    id: 'eventkit',
    label: 'EventKit',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Apple Calendar Import/Export', 'Conflict Detection', 'Missing-Event Handling'],
    projects: ['kue']
  },
  {
    id: 'vision',
    label: 'Vision',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['On-Device OCR', 'Bounded Downsampling', 'EXIF Handling'],
    projects: ['kue']
  },
  {
    id: 'speech',
    label: 'Speech',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['On-Device Voice Input', 'Permission Handling', 'Cancellation Safety'],
    projects: ['kue']
  },
  {
    id: 'avfoundation',
    label: 'AVFoundation',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Audio Session Management', 'Capture Workflows'],
    projects: ['kue']
  },
  {
    id: 'usernotifications',
    label: 'UserNotifications',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['Pre-Event Reminders', 'Actionable Notifications', 'Transparent Reminder States'],
    projects: ['kue']
  },
  {
    id: 'core-spotlight',
    label: 'Core Spotlight',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['System Search Indexing', 'Deep Links'],
    projects: ['kue']
  },
  {
    id: 'xctest',
    label: 'XCTest',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['749 Unit/Integration Tests', 'Isolated Test Stores', 'Deterministic Simulator Config'],
    projects: ['kue']
  },
  {
    id: 'swift-testing',
    label: 'Swift Testing',
    category: 'ios',
    recentlyUsed: ['Kue 2.0'],
    specialties: ['98 UI Tests', 'Modern Swift Test Syntax'],
    projects: ['kue']
  },

  // ── Full-Stack / Frontend ──
  {
    id: 'nextjs',
    label: 'Next.js',
    category: 'frontend',
    recentlyUsed: ['Developer Platform', 'F1 Live Platform'],
    specialties: ['App Router Architecture', 'Server Components', 'React 19 Hooks'],
    projects: ['developer-platform', 'f1-live-platform']
  },
  {
    id: 'react',
    label: 'React.js',
    category: 'frontend',
    recentlyUsed: ['Developer Platform', 'Portfolio', 'MediLink', 'ElectroHub'],
    specialties: ['Component Architecture', 'State Management', 'Custom Hooks', 'Performance Optimization'],
    projects: ['developer-platform', 'medilink', 'electrohub', 'ai-resume-analyzer']
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    category: 'frontend',
    recentlyUsed: ['Developer Platform', 'F1 Live Platform', 'Portfolio'],
    specialties: ['AST Compiler API', 'Strict Type Systems', 'Interface Contracts'],
    projects: ['developer-platform', 'f1-live-platform', 'medilink']
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    category: 'languages',
    recentlyUsed: ['Portfolio', 'MediLink', 'Weather Dashboard'],
    specialties: ['Async/Await & Promises', 'ES6+ Syntax', 'DOM Manipulation'],
    projects: ['developer-platform', 'medilink', 'electrohub', 'ai-resume-analyzer', 'weather-dashboard']
  },
  {
    id: 'tailwindcss',
    label: 'Tailwind CSS',
    category: 'frontend',
    recentlyUsed: ['Developer Platform', 'Portfolio', 'AI Resume Analyzer'],
    specialties: ['Design Token Utility', 'Responsive Breakpoints', 'Theme Management'],
    projects: ['developer-platform', 'ai-resume-analyzer']
  },

  // ── Backend ──
  {
    id: 'fastify',
    label: 'Fastify',
    category: 'backend',
    recentlyUsed: ['Developer Platform', 'F1 Live Platform'],
    specialties: ['High-Performance REST APIs', 'Plugin Architecture', 'Schema Validation'],
    projects: ['developer-platform', 'f1-live-platform']
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
    projects: ['developer-platform', 'medilink', 'electrohub', 'weather-dashboard']
  },

  // ── Databases ──
  {
    id: 'postgresql',
    label: 'PostgreSQL & pgvector',
    category: 'databases',
    recentlyUsed: ['Developer Platform', 'F1 Live Platform'],
    specialties: ['HNSW Vector Indexing', 'LISTEN/NOTIFY Pub-Sub', 'Prisma ORM Schemas'],
    projects: ['developer-platform', 'f1-live-platform']
  },
  {
    id: 'prisma',
    label: 'Prisma',
    category: 'databases',
    recentlyUsed: ['Developer Platform', 'F1 Live Platform'],
    specialties: ['Type-Safe Schemas', 'Migrations', 'Query Building'],
    projects: ['developer-platform', 'f1-live-platform']
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

  // ── Visualization ──
  {
    id: 'interactive-vis',
    label: 'Interactive Visualization',
    category: 'visualization',
    recentlyUsed: ['MedMarvel Modules'],
    specialties: ['Three.js Scene Rendering', 'Niivue Medical Imaging', 'High-Frequency Viewports'],
    projects: []
  },

  // ── AI ──
  {
    id: 'openai-rag',
    label: 'OpenAI & RAG',
    category: 'ai',
    recentlyUsed: ['Developer Platform'],
    specialties: ['7 Multi-Agent Workflows', 'Structured Completions', 'Retrieved Context Citations'],
    projects: ['developer-platform']
  },

  // ── Tools ──
  {
    id: 'docker',
    label: 'Docker & Compose',
    category: 'tools',
    recentlyUsed: ['Developer Platform'],
    specialties: ['Multi-Container Stacks', 'Isolated Workspaces', 'Environment Security'],
    projects: ['developer-platform']
  },
  {
    id: 'git',
    label: 'Git & GitHub',
    category: 'tools',
    recentlyUsed: ['Kue 2.0', 'Developer Platform', 'Portfolio', 'MediLink', 'ElectroHub'],
    specialties: ['Feature Branching', 'Pull Requests', 'Version Control'],
    projects: ['kue', 'developer-platform', 'medilink', 'electrohub', 'ai-resume-analyzer', 'weather-dashboard']
  },
  {
    id: 'python',
    label: 'Python',
    category: 'languages',
    recentlyUsed: ['ML & Analytics'],
    specialties: ['Scripting', 'Data Analysis', 'Machine Learning Models'],
    projects: []
  },
];

export const TECH_CATEGORIES = {
  ios: { label: 'iOS' },
  frontend: { label: 'Frontend' },
  backend: { label: 'Backend' },
  languages: { label: 'Languages' },
  databases: { label: 'Databases' },
  visualization: { label: 'Visualization' },
  ai: { label: 'AI' },
  tools: { label: 'Tools' },
};

// ── Command Palette Actions ───────────────────────────────────────────────────

export const PALETTE_ACTIONS = [
  { id: 'projects', label: 'Search Projects', subtitle: 'Browse software projects', section: 'projects', icon: 'folder' },
  { id: 'kue', label: 'View Kue Case Study', subtitle: 'Flagship iOS project — /projects/kue', href: '/projects/kue', icon: 'folder' },
  { id: 'notes', label: 'Engineering Notes', subtitle: 'Architecture & technical insights', section: 'notes', icon: 'book' },
  { id: 'experience', label: 'View Experience', subtitle: 'Internships & education', section: 'experience', icon: 'briefcase' },
  { id: 'about', label: 'About Me', subtitle: 'Background & core focus', section: 'about', icon: 'user' },
  { id: 'skills', label: 'Explore Technologies', subtitle: 'Tech stack & specialties', section: 'skills', icon: 'cpu' },
  { id: 'contact', label: 'Contact', subtitle: 'Get in touch directly', section: 'contact', icon: 'mail' },
  { id: 'resume', label: 'Open Resume', subtitle: 'Open /resume.pdf', href: null, icon: 'file-text', action: 'resume' },
  { id: 'github', label: 'Open GitHub', subtitle: 'github.com/kanishkgandecha', href: 'https://github.com/kanishkgandecha', icon: 'github' },
  { id: 'linkedin', label: 'Open LinkedIn', subtitle: 'linkedin.com/in/kanishk-gandecha', href: 'https://www.linkedin.com/in/kanishk-gandecha/', icon: 'linkedin' },
  { id: 'email', label: 'Copy Email', subtitle: 'kanishk.gandecha09@gmail.com', action: 'email', icon: 'mail' },
];
