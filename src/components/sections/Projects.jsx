import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Github = ({ size = 16, strokeWidth = 1.75 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import { PROJECTS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import Modal from '../ui/Modal';
import AppWindow from '../ui/AppWindow';

// macOS style window wrapper for interactive content
function WindowWrapper({ projectId, children }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-surface-2)',
      borderRadius: '0',
      overflow: 'hidden',
    }}>
      {/* Safari Window Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-surface-2)',
        borderBottom: '1px solid var(--border)',
        height: '24px',
        padding: '0 0.5rem',
        gap: '0.5rem',
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5F56', opacity: 0.8 }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFBD2E', opacity: 0.8 }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27C93F', opacity: 0.8 }} />
        </div>
        <div style={{
          flex: 1,
          maxWidth: '160px',
          margin: '0 auto',
          background: 'var(--bg-secondary)',
          borderRadius: '4px',
          height: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '7px',
          color: 'var(--text-tertiary)',
          fontFamily: 'var(--font-mono)',
          border: '1px solid var(--border)',
        }}>
          {projectId}.local
        </div>
      </div>
      <div style={{ flex: 1, background: 'var(--bg-surface)', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

// ── Render Tabs Visual Layouts ────────────────────────────────────────────────

// 1. Preview Tab content
function PreviewTab({ projectId, accentColor }) {
  switch (projectId) {
    case 'medilink':
      return (
        <div style={{ padding: '0.6rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', height: '100%', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.35rem' }}>
            {['8.2 hrs', 'Synced', 'Gemini v1.5'].map((text, i) => (
              <div key={i} style={{ background: 'var(--bg-secondary)', borderRadius: '4px', padding: '0.2rem', textAlign: 'center', fontSize: '8px', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                {text}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.3rem', justifyContent: 'flex-end' }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '6px 6px 6px 0px', padding: '0.35rem 0.5rem', fontSize: '8px', alignSelf: 'flex-start', maxWidth: '85%', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
              How is my health status today?
            </div>
            <div style={{ background: 'rgba(52, 199, 89, 0.08)', borderRadius: '6px 6px 0px 6px', padding: '0.35rem 0.5rem', fontSize: '8px', alignSelf: 'flex-end', maxWidth: '85%', color: 'var(--accent)', border: '1px solid rgba(52, 199, 89, 0.15)' }}>
              Gemini: Your metrics look optimal today.
            </div>
          </div>
        </div>
      );
    case 'electrohub':
      return (
        <div style={{ padding: '0.6rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', height: '100%', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)', padding: '0.15rem 0.4rem', borderRadius: '4px', border: '1px solid var(--border)', fontSize: '8px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>ElectroHub store</span>
            <span style={{ color: 'var(--text-secondary)' }}>🛒 Cart (2)</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem', flex: 1 }}>
            {[
              { name: 'Retina Display', price: '$899' },
              { name: 'Magic Mouse', price: '$99' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-secondary)', borderRadius: '5px', padding: '0.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
                <div style={{ width: '100%', height: '18px', background: 'rgba(255,255,255,0.03)', borderRadius: '3px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.15rem', fontSize: '7px' }}>
                  <span style={{ color: 'var(--text-primary)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{item.name}</span>
                  <span style={{ color: accentColor }}>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'ai-resume':
      return (
        <div style={{ padding: '0.6rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '50%', border: `3.5px solid ${accentColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: '-3.5px', borderRadius: '50%', border: '3.5px solid transparent', borderTopColor: accentColor, transform: 'rotate(50deg)' }} />
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-primary)' }}>85%</span>
          </div>
          <div style={{ textAlign: 'center', fontSize: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', display: 'block' }}>ATS System Score</span>
            <span style={{ color: 'var(--accent)', background: 'rgba(52, 199, 89, 0.06)', padding: '0.05rem 0.35rem', borderRadius: '3px', marginTop: '0.1rem', display: 'inline-block' }}>Format matches</span>
          </div>
        </div>
      );
    case 'weather':
      return (
        <div style={{ padding: '0.6rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', height: '100%' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '0.2rem', borderRadius: '4px', fontSize: '8px', textAlign: 'center', border: '1px solid var(--border)', color: 'var(--text-tertiary)' }}>
            🔍 Mumbai, India
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.35rem 0.5rem', background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border)', flex: 1 }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>29°C</span>
              <span style={{ fontSize: '7px', color: 'var(--text-secondary)' }}>Overcast Clouds</span>
            </div>
            <div style={{ fontSize: '18px' }}>☁️</div>
          </div>
        </div>
      );
    default:
      return (
        <div style={{ padding: '0.6rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', height: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--bg-secondary)', padding: '0.2rem', borderRadius: '4px', fontSize: '8px', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
            <span>🌾 Wholesale Market</span>
            <span style={{ color: 'var(--accent)' }}>Live</span>
          </div>
          <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border)', padding: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {[
              { name: 'Wheat (Bulk)', val: '₹1,800' },
              { name: 'Cotton (Wholesale)', val: '₹6,200' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7px', color: 'var(--text-secondary)' }}>
                <span>{item.name}</span>
                <span style={{ fontWeight: 650, color: 'var(--text-primary)' }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

// 2. Architecture Tab content
function ArchitectureTab({ projectId }) {
  const getArchNodes = () => {
    switch (projectId) {
      case 'medilink':
        return { client: 'React UI', api: 'REST JWT', server: 'Node / Express', db: 'MongoDB' };
      case 'electrohub':
        return { client: 'HTML/JS', api: 'PHP Core', server: 'Apache Server', db: 'MySQL' };
      default:
        return { client: 'Client View', api: 'API Endpoint', server: 'Worker Server', db: 'Data Model' };
    }
  };
  const nodes = getArchNodes();
  return (
    <div style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: '0.6rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.35rem 0.5rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--accent-blue)' }}>[UI]</span>
          <span style={{ color: 'var(--text-primary)' }}>{nodes.client}</span>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '7px' }}>▼ {nodes.api}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.35rem 0.5rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--accent-purple)' }}>[SRV]</span>
          <span style={{ color: 'var(--text-primary)' }}>{nodes.server}</span>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '7px' }}>▼ Query Link</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.35rem 0.5rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--accent)' }}>[DB]</span>
          <span style={{ color: 'var(--text-primary)' }}>{nodes.db}</span>
        </div>
      </div>
    </div>
  );
}

// 3. API Tab content
function ApiTab({ projectId }) {
  const getEndpoints = () => {
    switch (projectId) {
      case 'medilink':
        return [
          { method: 'GET', path: '/api/v1/patients', desc: 'Fetch user list' },
          { method: 'POST', path: '/api/v1/chat', desc: 'Gemini health diagnostics' }
        ];
      case 'electrohub':
        return [
          { method: 'GET', path: '/api/products.php', desc: 'List inventory items' },
          { method: 'POST', path: '/api/cart.php', desc: 'Checkout current cart' }
        ];
      default:
        return [
          { method: 'GET', path: '/api/health', desc: 'Retrieve system status' }
        ];
    }
  };
  return (
    <div style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', height: '100%', fontFamily: 'var(--font-mono)', fontSize: '8.5px', justifyContent: 'center' }}>
      {getEndpoints().map((ep, idx) => (
        <div key={idx} style={{ background: 'var(--bg-secondary)', padding: '0.4rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
            <span style={{
              background: ep.method === 'GET' ? 'rgba(52, 199, 89, 0.12)' : 'rgba(0, 122, 255, 0.12)',
              color: ep.method === 'GET' ? 'var(--accent)' : 'var(--accent-blue)',
              padding: '0.05rem 0.25rem',
              borderRadius: '3px',
              fontSize: '7.5px',
              fontWeight: 700,
            }}>
              {ep.method}
            </span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{ep.path}</span>
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '7.5px' }}>{ep.desc}</div>
        </div>
      ))}
    </div>
  );
}

// 4. Setup Tab content
function SetupTab({ projectId }) {
  const getCmds = () => {
    switch (projectId) {
      case 'medilink':
        return ['git clone medilink.git', 'npm install', 'npm run dev'];
      case 'electrohub':
        return ['git clone electrohub.git', 'docker-compose up -d'];
      default:
        return ['npm install', 'npm start'];
    }
  };
  return (
    <div style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', height: '100%', fontFamily: 'var(--font-mono)', fontSize: '8px', justifyContent: 'center', background: 'var(--bg-secondary)' }}>
      {getCmds().map((cmd, idx) => (
        <div key={idx} style={{ color: 'var(--text-secondary)' }}>
          <span style={{ color: 'var(--accent)', marginRight: '0.35rem' }}>$</span>
          <span>{cmd}</span>
        </div>
      ))}
    </div>
  );
}

// 5. Viewer Tab content (Compelling Medical Imaging MRI slices dashboard view)
function ViewerTab() {
  return (
    <div style={{ padding: '0.75rem', display: 'flex', gap: '0.6rem', height: '100%', alignItems: 'center', overflow: 'hidden' }}>
      {/* Mock brain axial cross-section */}
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.02)',
        border: '1px dashed var(--border-bright)',
        position: 'relative',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Nested concentric shapes rendering mock slices */}
        <div style={{ width: '40px', height: '42px', borderRadius: '45%', border: '1px solid var(--text-tertiary)' }} />
        <div style={{ position: 'absolute', width: '22px', height: '24px', borderRadius: '40%', border: '1px solid var(--accent)', opacity: 0.8 }} />
        <div style={{ position: 'absolute', width: '8px', height: '10px', borderRadius: '50%', background: 'rgba(52, 199, 89, 0.15)' }} />
      </div>

      {/* Slice parameters metadata */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.2rem', fontFamily: 'var(--font-mono)', fontSize: '7.5px' }}>
        <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.15rem', color: 'var(--text-primary)', fontWeight: 600 }}>
          VTK.js MRI VIEWER
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
          <span>Slice</span>
          <span style={{ color: 'var(--accent)' }}>142 / 256</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
          <span>TR / TE</span>
          <span>2500 / 85ms</span>
        </div>
        {/* Slice slider bar */}
        <div style={{ width: '100%', height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', overflow: 'hidden', marginTop: '0.2rem' }}>
          <div style={{ width: '60%', height: '100%', background: 'var(--accent)' }} />
        </div>
      </div>
    </div>
  );
}

// Coordinate which panel renders based on selected tab name
function TabInspector({ projectId, tabName, accentColor }) {
  switch (tabName) {
    case 'Architecture':
      return <ArchitectureTab projectId={projectId} />;
    case 'API':
      return <ApiTab projectId={projectId} />;
    case 'Setup':
      return <SetupTab projectId={projectId} />;
    case 'Viewer':
      return <ViewerTab />;
    default:
      return <PreviewTab projectId={projectId} accentColor={accentColor} />;
  }
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Separate tab states for featured project card, and cardTabs dictionary mapping for other project cards
  const [featuredTab, setFeaturedTab] = useState('Preview');
  const [cardTabs, setCardTabs] = useState({});

  const handleTabChange = (projId, tab) => {
    setCardTabs(prev => ({
      ...prev,
      [projId]: tab
    }));
  };

  const getTabsForProject = (project) => {
    // Medical imaging/AI projects (like MediLink) feature the Viewer tab
    const isMedical = project.id === 'medilink';
    return isMedical
      ? ['Preview', 'Architecture', 'Viewer', 'API', 'Setup']
      : ['Preview', 'Architecture', 'API', 'Setup'];
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'Artificial Intelligence' }
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return project.featured;
    return project.tagCategory?.includes(selectedFilter);
  });

  const featuredProject = filteredProjects.find(p => p.featured && selectedFilter !== 'ai');
  const secondaryProjects = filteredProjects.filter(p => p.id !== (featuredProject?.id || ''));

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeader 
          eyebrow="~/projects"
          title="Selected Projects"
          subtitle="Explore product specs, high-level architectures, and API endpoints for each build."
        />

        {/* Filters Capsule */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '3.5rem',
        }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              style={{
                background: selectedFilter === filter.id ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                border: '1px solid',
                borderColor: selectedFilter === filter.id ? 'var(--border-bright)' : 'var(--border)',
                color: selectedFilter === filter.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '0.45rem 1rem',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedFilter !== filter.id) {
                  e.currentTarget.style.borderColor = 'var(--border-bright)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedFilter !== filter.id) {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <AppWindow title="Projects — Product Browser" rightText="git:main">
          {/* Projects Layout Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem' }}>
            
            {/* Featured Showcase Card */}
            {featuredProject && (
              <motion.div
                layoutId={`project-card-${featuredProject.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', duration: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                }}
                onClick={() => setActiveModalProject(featuredProject)}
              >
                <style>{`
                  @media (min-width: 900px) {
                    .featured-grid-layout {
                      grid-template-columns: 1.25fr 1fr !important;
                    }
                  }
                `}</style>
                <div className="featured-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                  {/* Mockup Preview Area with Tab Inspector */}
                  <div style={{ height: '100%', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
                    {/* Selector tabs bar */}
                    <div style={{
                      display: 'flex',
                      background: 'var(--bg-secondary)',
                      borderBottom: '1px solid var(--border)',
                      padding: '0.35rem 0.5rem',
                      gap: '0.35rem',
                      overflowX: 'auto',
                    }} onClick={e => e.stopPropagation()}>
                      {getTabsForProject(featuredProject).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setFeaturedTab(tab)}
                          style={{
                            background: featuredTab === tab ? 'var(--bg-surface)' : 'transparent',
                            border: 'none',
                            color: featuredTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            padding: '0.25rem 0.5rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    <div style={{ flex: 1 }}>
                      <WindowWrapper projectId={featuredProject.id}>
                        <TabInspector projectId={featuredProject.id} tabName={featuredTab} accentColor={featuredProject.accentColor} />
                      </WindowWrapper>
                    </div>
                  </div>

                  {/* Details Area */}
                  <div style={{
                    padding: '2rem 2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.25rem',
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 650, letterSpacing: '0.04em' }}>
                          FEATURED SYSTEM
                        </span>
                        <span style={{
                          fontSize: '0.72rem',
                          color: 'var(--text-secondary)',
                          background: 'var(--bg-secondary)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '6px',
                          border: '1px solid var(--border)',
                        }}>
                          {featuredProject.year}
                        </span>
                      </div>

                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                      }}>
                        {featuredProject.title}
                      </h3>

                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                      }}>
                        {featuredProject.description}
                      </p>

                      {/* Tech list */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
                        {featuredProject.tags.map((tag) => (
                          <span 
                            key={tag} 
                            style={{
                              fontSize: '0.72rem',
                              color: 'var(--text-secondary)',
                              background: 'var(--bg-secondary)',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '100px',
                              border: '1px solid var(--border)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--border)',
                      paddingTop: '1rem',
                    }}>
                      <span 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: featuredProject.accentColor,
                        }}
                      >
                        <span>Explore Spec Sheet</span>
                        <ArrowRight size={14} strokeWidth={1.75} />
                      </span>

                      <div style={{ display: 'flex', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
                        <a 
                          href={featuredProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-icon"
                          style={{ width: '32px', height: '32px' }}
                        >
                          <Github size={14} strokeWidth={1.75} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grid Layout for other projects */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
              gap: '1.5rem',
            }}>
              {secondaryProjects.map((project) => {
                const activeTab = cardTabs[project.id] || 'Preview';
                return (
                  <motion.div
                    key={project.id}
                    layoutId={`project-card-${project.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '12px',
                      border: '1px solid var(--border)',
                    }}
                    onClick={() => setActiveModalProject(project)}
                  >
                    {/* Selector tabs bar */}
                    <div style={{
                      display: 'flex',
                      background: 'var(--bg-secondary)',
                      borderBottom: '1px solid var(--border)',
                      padding: '0.3rem 0.5rem',
                      gap: '0.3rem',
                      overflowX: 'auto',
                    }} onClick={e => e.stopPropagation()}>
                      {getTabsForProject(project).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => handleTabChange(project.id, tab)}
                          style={{
                            background: activeTab === tab ? 'var(--bg-surface)' : 'transparent',
                            border: 'none',
                            color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                            fontSize: '0.65rem',
                            fontWeight: 500,
                            padding: '0.2rem 0.45rem',
                            borderRadius: '5px',
                            cursor: 'pointer',
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Visual browser preview */}
                    <div style={{ height: '130px', width: '100%' }}>
                      <WindowWrapper projectId={project.id}>
                        <TabInspector projectId={project.id} tabName={activeTab} accentColor={project.accentColor} />
                      </WindowWrapper>
                    </div>

                    {/* Details */}
                    <div style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flex: 1,
                    }}>
                      <div>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.75rem',
                        }}>
                          <span style={{
                            fontSize: '0.68rem',
                            fontWeight: 650,
                            textTransform: 'uppercase',
                            color: project.accentColor || 'var(--accent)',
                            letterSpacing: '0.04em',
                          }}>
                            {project.category}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                            {project.year}
                          </span>
                        </div>
                        
                        <h3 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.5rem',
                          lineHeight: 1.3,
                        }}>
                          {project.title}
                        </h3>

                        <p style={{
                          fontSize: '0.825rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '1.25rem',
                        }}>
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech stack */}
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.3rem',
                          marginBottom: '1rem',
                        }}>
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              style={{
                                fontSize: '0.7rem',
                                color: 'var(--text-secondary)',
                                background: 'var(--bg-secondary)',
                                padding: '0.15rem 0.5rem',
                                borderRadius: '100px',
                                border: '1px solid var(--border)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderTop: '1px solid var(--border)',
                          paddingTop: '0.85rem',
                        }}>
                          <span style={{
                            fontSize: '0.78rem',
                            fontWeight: 500,
                            color: project.accentColor || 'var(--accent)',
                          }}>
                            Spec Sheet
                          </span>
                          <div style={{ display: 'flex', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn-icon"
                              style={{ width: '28px', height: '28px' }}
                            >
                              <Github size={13} strokeWidth={1.75} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AppWindow>

      </div>

      {/* Modal Spec Sheet details */}
      <Modal 
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
