import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import ProjectCaseStudy from './ProjectCaseStudy';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// ── Card action row: real, independent links — every project uses the exact
// same component and interaction, whether it's the flagship or an earlier one.
function ProjectActions({ project }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
      <Link
        to={`/projects/${project.id}`}
        className="btn btn-primary"
        style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', minHeight: '40px' }}
      >
        <span>View Case Study</span>
        <ArrowRight size={14} />
      </Link>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', minHeight: '40px' }}
          aria-label={`View ${project.title} source on GitHub`}
        >
          <GithubIcon size={14} />
          <span>View Source</span>
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', minHeight: '40px' }}
          aria-label={`${project.title} live demo`}
        >
          <ExternalLink size={14} />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  );
}

// ── One card component for every project, primary or earlier. `compact`
// only adjusts spacing/type scale — never color, controls, or behavior.
function ProjectCard({ project, compact = false }) {
  const metrics = project.metrics || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      style={{
        background: 'var(--bg-surface-solid)',
        border: '1px solid var(--border)',
        borderRadius: compact ? '16px' : '20px',
        padding: compact ? '1.35rem' : '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: compact ? '1rem' : '1.25rem',
        boxShadow: 'var(--shadow-sm)',
        position: 'relative',
      }}
    >
      {/* Category + status + year */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{
          fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: project.accentColor || 'var(--accent)',
          background: `${project.accentColor || 'var(--accent)'}15`, padding: '0.2rem 0.6rem', borderRadius: '100px',
          border: `1px solid ${project.accentColor || 'var(--accent)'}30`,
        }}>
          {project.category}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {project.status && project.status !== 'Completed' && (
            <span style={{
              fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 650, color: '#FF9F0A',
              background: 'rgba(255,159,10,0.1)', border: '1px solid rgba(255,159,10,0.3)', padding: '0.15rem 0.5rem', borderRadius: '100px',
            }}>
              {project.status}
            </span>
          )}
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
            {project.year}
          </span>
        </div>
      </div>

      {/* Name & one-line description */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: compact ? '1.1rem' : '1.35rem', fontWeight: 700,
          color: 'var(--text-primary)', letterSpacing: '-0.02em',
        }}>
          {project.title}
        </h3>
        <div style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 500, marginTop: '0.15rem' }}>
          {project.subtitle}
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.75rem' }}>
          {project.description}
        </p>
      </div>

      {/* Up to three verified metrics */}
      {metrics.length > 0 && (
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          {metrics.slice(0, 3).map((m) => (
            <div key={m.label}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: project.accentColor || 'var(--accent)' }}>
                {m.value}
              </div>
              <div style={{ fontSize: '0.66rem', color: 'var(--text-tertiary)', maxWidth: '110px', lineHeight: 1.3 }}>{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tech chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {project.tags.slice(0, compact ? 5 : project.tags.length).map((tag) => (
          <span key={tag} style={{
            fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)',
            background: 'var(--bg-surface-2)', padding: '0.2rem 0.55rem', borderRadius: '6px', border: '1px solid var(--border)',
            overflowWrap: 'anywhere',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Actions row — real, independent, keyboard-accessible controls */}
      <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border)' }}>
        <ProjectActions project={project} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const primaryProjects = PROJECTS.filter((p) => p.tier === 'primary');
  const earlierProjects = PROJECTS.filter((p) => p.tier === 'earlier');

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Full-stack platforms, native iOS, and real-time systems — open View Case Study for architecture and engineering depth."
        />

        {/* Primary Selected Work grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginTop: '2rem',
        }}>
          {primaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

<<<<<<< HEAD
        {/* Workspace Window Expanded Viewport Overlay */}
        <AnimatePresence>
          {selectedId && activeProject && (
            <div 
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`card-container-${activeProject.id}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: '100%',
                  maxWidth: '820px',
                  maxHeight: '90vh',
                  background: 'var(--bg-surface-solid)',
                  border: '1px solid var(--border-bright)',
                  borderRadius: '24px',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* macOS Workspace Window Titlebar Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-2)',
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div 
                      onClick={() => setSelectedId(null)} 
                      style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FF5F56', cursor: 'pointer' }} 
                      title="Close window"
                    />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27C93F' }} />
                  </div>

                  <div style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}>
                    <span>workspace://projects/{activeProject.id}</span>
                  </div>

                  <button
                    onClick={() => setSelectedId(null)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-tertiary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Window Scrollable Body Content */}
                <div className="modal-scroll" style={{ padding: '2rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  
                  {/* Header Title & Tags */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: activeProject.accentColor, background: `${activeProject.accentColor}15`, padding: '0.2rem 0.6rem', borderRadius: '100px', border: `1px solid ${activeProject.accentColor}30` }}>
                        {activeProject.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                        {activeProject.year} • {activeProject.duration}
                      </span>
                    </div>

                    <motion.h2 
                      layoutId={`card-title-${activeProject.id}`}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.85rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {activeProject.title} — {activeProject.subtitle}
                    </motion.h2>
                  </div>

                  {/* Problem & Solution Columns */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.1rem 1.25rem' }}>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#FF453A', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                        [ The Problem ]
                      </div>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {activeProject.problem}
                      </p>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.1rem 1.25rem' }}>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 600 }}>
                        [ The Solution ]
                      </div>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Diagram Breakdown */}
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Layers size={16} style={{ color: 'var(--accent)' }} />
                      <span>Architecture Stack Highlights</span>
                    </h4>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      {activeProject.architecture.map((arch, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                          <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600 }}>
                            {arch.layer}
                          </div>
                          <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', marginTop: '0.25rem', fontWeight: 500 }}>
                            {arch.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                      Key Capabilities & Deliverables
                    </h4>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem' }}>
                      {activeProject.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent)', marginTop: '1px' }}>✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Extended engineering case study (only rendered when a project defines one) */}
                  {activeProject.caseStudy && <ProjectCaseStudy project={activeProject} />}

                  {/* Actions & Metrics Footer */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      {activeProject.metrics.map((m) => (
                        <div key={m.label}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>
                            {m.value}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {activeProject.github && (
                        <a 
                          href={activeProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-ghost"
                          style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                        >
                          <GithubIcon size={14} />
                          <span>View Codebase</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
=======
        {/* Earlier Projects — same card, smaller footprint */}
        {earlierProjects.length > 0 && (
          <div style={{ marginTop: '3.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 650, color: 'var(--text-primary)',
              marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              <Layers size={17} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
              <span>Earlier Projects</span>
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}>
              {earlierProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
>>>>>>> 3229452 (fix(portfolio): finalize project navigation and remove unsupported weather metrics)
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
