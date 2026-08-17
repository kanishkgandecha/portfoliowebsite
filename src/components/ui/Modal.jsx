import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

const Github = ({ size = 16, strokeWidth = 1.75 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import TechChip from './TechChip';
import Button from './Button';

// macOS style window wrapper for interactive content
function WindowWrapper({ projectId, children }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-surface-2)',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid var(--border)',
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

function PreviewTab({ projectId, accentColor }) {
  switch (projectId) {
    case 'developer-platform':
    case 'developer_platform':
      return (
        <div style={{ padding: '0.8rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
            {['v1.0.0', '7 AI Agents', 'pgvector HNSW'].map((text, i) => (
              <div key={i} style={{ background: 'var(--bg-secondary)', borderRadius: '4px', padding: '0.3rem', textAlign: 'center', fontSize: '9px', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                {text}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem', justifyContent: 'center' }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '6px', padding: '0.45rem 0.65rem', fontSize: '9px', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Pipeline: </span>
              <span>Ingestion → AST Static Rules → pgvector RAG → 7 Agents</span>
            </div>
            <div style={{ background: 'rgba(10, 132, 255, 0.08)', borderRadius: '6px', padding: '0.45rem 0.65rem', fontSize: '9px', color: 'var(--accent-blue)', border: '1px solid rgba(10, 132, 255, 0.2)' }}>
              <span>Findings grounded with source citations & evidence extraction</span>
            </div>
          </div>
        </div>
      );
    case 'medilink':
      return (
        <div style={{ padding: '0.8rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
            {['8.2 hrs', 'Synced', 'Gemini v1.5'].map((text, i) => (
              <div key={i} style={{ background: 'var(--bg-secondary)', borderRadius: '4px', padding: '0.3rem', textAlign: 'center', fontSize: '9px', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                {text}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem', justifyContent: 'flex-end' }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '6px 6px 6px 0px', padding: '0.4rem 0.6rem', fontSize: '9px', alignSelf: 'flex-start', maxWidth: '85%', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
              How is my health status today?
            </div>
            <div style={{ background: 'rgba(52, 199, 89, 0.08)', borderRadius: '6px 6px 0px 6px', padding: '0.4rem 0.6rem', fontSize: '9px', alignSelf: 'flex-end', maxWidth: '85%', color: 'var(--accent)', border: '1px solid rgba(52, 199, 89, 0.15)' }}>
              Gemini: Your metrics look optimal today.
            </div>
          </div>
        </div>
      );
    case 'electrohub':
      return (
        <div style={{ padding: '0.8rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border)', fontSize: '9px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>ElectroHub store</span>
            <span style={{ color: 'var(--text-secondary)' }}>🛒 Cart (2)</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', flex: 1 }}>
            {[
              { name: 'Retina Display', price: '$899' },
              { name: 'Magic Mouse', price: '$99' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-secondary)', borderRadius: '6px', padding: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
                <div style={{ width: '100%', height: '22px', background: 'rgba(255,255,255,0.03)', borderRadius: '3px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem', fontSize: '8px' }}>
                  <span style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                  <span style={{ color: accentColor }}>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'ai-resume':
      return (
        <div style={{ padding: '0.8rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', border: `3.5px solid ${accentColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: '-3.5px', borderRadius: '50%', border: '3.5px solid transparent', borderTopColor: accentColor, transform: 'rotate(50deg)' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)' }}>85%</span>
          </div>
          <div style={{ textAlign: 'center', fontSize: '9px', marginTop: '0.25rem' }}>
            <span style={{ color: 'var(--text-secondary)', display: 'block' }}>ATS System Score</span>
            <span style={{ color: 'var(--accent)', background: 'rgba(52, 199, 89, 0.06)', padding: '0.05rem 0.35rem', borderRadius: '3px', marginTop: '0.1rem', display: 'inline-block' }}>Format matches</span>
          </div>
        </div>
      );
    case 'weather':
      return (
        <div style={{ padding: '0.8rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '0.25rem', borderRadius: '4px', fontSize: '9px', textAlign: 'center', border: '1px solid var(--border)', color: 'var(--text-tertiary)' }}>
            🔍 Mumbai, India
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0.6rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border)', flex: 1 }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>29°C</span>
              <span style={{ fontSize: '8px', color: 'var(--text-secondary)' }}>Overcast Clouds</span>
            </div>
            <div style={{ fontSize: '20px' }}>☁️</div>
          </div>
        </div>
      );
    default:
      return (
        <div style={{ padding: '0.8rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', height: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--bg-secondary)', padding: '0.25rem', borderRadius: '4px', fontSize: '9px', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
            <span>🌾 Wholesale Market</span>
            <span style={{ color: 'var(--accent)' }}>Live</span>
          </div>
          <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border)', padding: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {[
              { name: 'Wheat (Bulk)', val: '₹1,800' },
              { name: 'Cotton (Wholesale)', val: '₹6,200' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: 'var(--text-secondary)' }}>
                <span>{item.name}</span>
                <span style={{ fontWeight: 650, color: 'var(--text-primary)' }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      );
  }
}

function ArchitectureTab({ projectId }) {
  const getArchNodes = () => {
    switch (projectId) {
      case 'developer-platform':
      case 'developer_platform':
        return { client: 'Next.js App Router', api: 'Fastify REST API', server: 'BullMQ / Redis Workers', db: 'PostgreSQL + pgvector' };
      case 'medilink':
        return { client: 'React UI', api: 'REST JWT', server: 'Node / Express', db: 'MongoDB' };
      case 'electrohub':
        return { client: 'React UI', api: 'REST API', server: 'Node / Express', db: 'MySQL' };
      default:
        return { client: 'Client View', api: 'API Endpoint', server: 'Worker Server', db: 'Data Model' };
    }
  };
  const nodes = getArchNodes();
  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: '0.8rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '9px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.45rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--accent-blue)' }}>[UI]</span>
          <span style={{ color: 'var(--text-primary)' }}>{nodes.client}</span>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '8px' }}>▼ {nodes.api}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.45rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--accent-purple)' }}>[SRV]</span>
          <span style={{ color: 'var(--text-primary)' }}>{nodes.server}</span>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '8px' }}>▼ Query Link</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.45rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--accent)' }}>[DB]</span>
          <span style={{ color: 'var(--text-primary)' }}>{nodes.db}</span>
        </div>
      </div>
    </div>
  );
}

function ApiTab({ projectId }) {
  const getEndpoints = () => {
    switch (projectId) {
      case 'developer-platform':
      case 'developer_platform':
        return [
          { method: 'POST', path: '/api/repos/ingest', desc: 'Isolated repository workspace ingestion' },
          { method: 'GET', path: '/api/analysis/agents', desc: '7 AI agent evidence-backed findings' }
        ];
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
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', height: '100%', fontFamily: 'var(--font-mono)', fontSize: '9px', justifyContent: 'center' }}>
      {getEndpoints().map((ep, idx) => (
        <div key={idx} style={{ background: 'var(--bg-secondary)', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
            <span style={{
              background: ep.method === 'GET' ? 'rgba(52, 199, 89, 0.12)' : 'rgba(0, 122, 255, 0.12)',
              color: ep.method === 'GET' ? 'var(--accent)' : 'var(--accent-blue)',
              padding: '0.05rem 0.25rem',
              borderRadius: '3px',
              fontSize: '8px',
              fontWeight: 700,
            }}>
              {ep.method}
            </span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{ep.path}</span>
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '8px' }}>{ep.desc}</div>
        </div>
      ))}
    </div>
  );
}

function SetupTab({ projectId }) {
  const getCmds = () => {
    switch (projectId) {
      case 'developer-platform':
      case 'developer_platform':
        return ['git clone https://github.com/kanishkgandecha/developer_platform', 'docker-compose up -d', 'npm run dev'];
      case 'medilink':
        return ['git clone medilink.git', 'npm install', 'npm run dev'];
      case 'electrohub':
        return ['git clone electrohub.git', 'docker-compose up -d'];
      default:
        return ['npm install', 'npm start'];
    }
  };
  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', height: '100%', fontFamily: 'var(--font-mono)', fontSize: '9px', justifyContent: 'center', background: 'var(--bg-secondary)' }}>
      {getCmds().map((cmd, idx) => (
        <div key={idx} style={{ color: 'var(--text-secondary)' }}>
          <span style={{ color: 'var(--accent)', marginRight: '0.35rem' }}>$</span>
          <span>{cmd}</span>
        </div>
      ))}
    </div>
  );
}

function ViewerTab() {
  return (
    <div style={{ padding: '1rem', display: 'flex', gap: '0.8rem', height: '100%', alignItems: 'center', overflow: 'hidden' }}>
      {/* Mock brain axial cross-section */}
      <div style={{
        width: '68px',
        height: '68px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.02)',
        border: '1px dashed var(--border-bright)',
        position: 'relative',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ width: '48px', height: '50px', borderRadius: '45%', border: '1px solid var(--text-tertiary)' }} />
        <div style={{ position: 'absolute', width: '28px', height: '30px', borderRadius: '40%', border: '1px solid var(--accent)', opacity: 0.8 }} />
        <div style={{ position: 'absolute', width: '10px', height: '12px', borderRadius: '50%', background: 'rgba(52, 199, 89, 0.15)' }} />
      </div>

      {/* Slice parameters metadata */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem', fontFamily: 'var(--font-mono)', fontSize: '8px' }}>
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
        <div style={{ width: '100%', height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', overflow: 'hidden', marginTop: '0.2rem' }}>
          <div style={{ width: '60%', height: '100%', background: 'var(--accent)' }} />
        </div>
      </div>
    </div>
  );
}

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

export default function Modal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('Preview');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setActiveTab('Preview');
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const isMedical = project.id === 'medilink';
  const tabs = isMedical
    ? ['Preview', 'Architecture', 'Viewer', 'API', 'Setup']
    : ['Preview', 'Architecture', 'API', 'Setup'];

  const sheetVariants = isMobile ? {
    hidden: { y: '100%', opacity: 1 },
    visible: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 1 }
  } : {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 15 }
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay-container">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          variants={sheetVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={isMobile ? { type: 'spring', damping: 26, stiffness: 210 } : { type: 'spring', duration: 0.5 }}
          className="glass-bright project-modal-sheet"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '640px',
            maxHeight: '85vh',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Header */}
          <div style={{
            padding: isMobile ? '1rem 1.25rem' : '1.25rem 2rem',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-secondary)',
          }}>
            <div>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 650,
                color: project.accentColor || 'var(--accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
              }}>
                Spec Sheet
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '0.15rem',
              }}>
                {project.title}
              </h2>
            </div>
            <Button variant="icon" onClick={onClose} aria-label="Close modal" style={{ width: '36px', height: '36px' }}>
              <X size={18} />
            </Button>
          </div>

          {/* Content (Scrollable) */}
          <div 
            className="modal-scroll"
            style={{
              flex: 1,
              padding: 'var(--window-padding)',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {/* Visual Inspector Area */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Tab Selector */}
              <div style={{
                display: 'flex',
                background: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border)',
                padding: '0.35rem 0.5rem',
                gap: '0.35rem',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
                border: '1px solid var(--border)',
                overflowX: 'auto',
              }}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: activeTab === tab ? 'var(--bg-surface)' : 'transparent',
                      border: 'none',
                      color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
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

              <div style={{ height: '220px', width: '100%' }}>
                <WindowWrapper projectId={project.id}>
                  <TabInspector projectId={project.id} tabName={activeTab} accentColor={project.accentColor} />
                </WindowWrapper>
              </div>
            </div>

            {/* Specs / Metrics Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              background: 'var(--bg-secondary)',
              borderRadius: '16px',
              border: '1px solid var(--border)',
            }}>
              {project.metrics?.map((metric) => (
                <div key={metric.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                  }}>
                    {metric.value}
                  </div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginTop: '0.15rem',
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--accent)',
                }}>
                  {project.status}
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginTop: '0.15rem',
                }}>
                  Deployment
                </div>
              </div>
            </div>

            {/* Detail sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 650,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>
                  Core Objective
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {project.modalDetails?.objective}
                </p>
              </div>

              <div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 650,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>
                  Core Architecture Highlights
                </h4>
                <ul style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.65rem',
                  paddingLeft: '1.25rem',
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}>
                  {project.modalDetails?.architecture.map((item, idx) => (
                    <li key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Sync list */}
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 650,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>
                  Ecosystem Stack
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map((tag) => (
                    <TechChip key={tag} label={tag} active={true} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '0.75rem',
            background: 'var(--bg-secondary)',
          }}>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="ghost">
                <Github size={15} />
                <span>Source Code</span>
              </Button>
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="primary">
                  <span>Live App</span>
                  <ExternalLink size={15} />
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
