import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Cpu, Layers, Database, Shield, Zap } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import ProjectCaseStudy from './ProjectCaseStudy';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const activeProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Click any project card to expand details and view software architecture."
        />

        {/* Projects Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginTop: '2rem',
        }}>
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'var(--bg-surface-solid)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '1.75rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ 
                translateY: -4, 
                borderColor: 'var(--border-bright)',
                boxShadow: 'var(--shadow-md)' 
              }}
            >
              {/* Top Accent Strip */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: project.accentColor || 'var(--accent)',
                  background: `${project.accentColor || 'var(--accent)'}15`,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '100px',
                  border: `1px solid ${project.accentColor || 'var(--accent)'}30`,
                }}>
                  {project.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  {project.year}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <motion.h3 
                  layoutId={`card-title-${project.id}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </motion.h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 500, marginTop: '0.15rem' }}>
                  {project.subtitle}
                </div>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginTop: '0.75rem',
                }}>
                  {project.description}
                </p>
              </div>

              {/* Architecture & Tech Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      background: 'var(--bg-surface-2)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer Action */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
              }}>
                <span>Expand Workspace Window</span>
                <ArrowRight size={14} style={{ color: 'var(--accent)' }} />
              </div>
            </motion.div>
          ))}
        </div>

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
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
