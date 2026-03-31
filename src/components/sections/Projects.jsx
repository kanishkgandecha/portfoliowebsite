import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size || "24"} height={size || "24"} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const projects = [
  {
    title: 'MediLink',
    desc: 'MERN stack healthcare system featuring an AI chatbot, health suggestions, and comprehensive user tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    github: 'https://github.com/kanishkgandecha',
    featured: true
  },
  {
    title: 'Portfolio Website',
    desc: 'A robust personal portfolio designed visually from scratch. Built with React, Tailwind v4, and minimal Framer Motion.',
    tags: ['React', 'Tailwind', 'UI/UX'],
    github: 'https://github.com/kanishkgandecha/portfolio',
    featured: true
  },
  {
    title: 'ElectroHub',
    desc: 'E-commerce platform with a functional cart, user login system, and an admin dashboard managing over 100 products.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/kanishkgandecha',
  },
  {
    title: 'AI Resume Analyzer',
    desc: 'Resume scoring tool providing immediate simple visual feedback based on ATS-friendly metrics.',
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/kanishkgandecha',
  },
  {
    title: 'Weather Dashboard',
    desc: 'API-based weather application enabling real-time city search and 5-day forecasting metrics.',
    tags: ['JavaScript', 'CSS', 'OpenWeather API'],
    github: 'https://github.com/kanishkgandecha',
  },
  {
    title: 'Agriculture Wholesale Prototype',
    desc: 'A simple and scalable vendor-based platform prototype designed for agricultural wholesale transactions.',
    tags: ['Frontend', 'UI Design'],
    github: 'https://github.com/kanishkgandecha',
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           style={{ marginBottom: '3rem' }}
        >
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--accent)' }}>03.</span> Projects
            <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)', marginLeft: '1rem', maxWidth: '300px' }} />
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((p, idx) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card"
              style={{
                display: 'flex', flexDirection: 'column', 
                padding: '2rem', height: '100%',
                backgroundColor: 'var(--bg-card)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(14, 165, 233, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--accent)', opacity: 0.9 }}>📁</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="GitHub">
                    <GithubIcon size={22} />
                  </a>
                </div>
              </div>

              {/* Featured Badge */}
              {p.featured && (
                <div style={{
                  display: 'inline-block',
                  marginBottom: '1rem',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#10b981',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '9999px',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  width: 'fit-content'
                }}>
                  ⭐ Featured Project
                </div>
              )}
              
              <h3 className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {p.title}
              </h3>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                {p.desc}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontSize: '0.75rem', fontWeight: 500, fontFamily: 'var(--font-mono)', color: 'var(--accent)', background: 'rgba(14, 165, 233, 0.08)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
