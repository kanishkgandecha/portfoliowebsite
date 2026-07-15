import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code2, GraduationCap, ExternalLink } from 'lucide-react';
import { PERSONAL, TECH_STACK, TECH_CATEGORIES, CERTIFICATIONS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import TechChip from '../ui/TechChip';
import AppWindow from '../ui/AppWindow';

export default function About() {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Group technologies by category
  const frontendTech = TECH_STACK.filter(t => t.category === 'frontend');
  const backendTech = TECH_STACK.filter(t => t.category === 'backend');
  const databaseTech = TECH_STACK.filter(t => t.category === 'database');
  const aiTech = TECH_STACK.filter(t => t.category === 'ai');
  const toolsTech = TECH_STACK.filter(t => t.category === 'tools');

  const renderTechGroup = (label, techs) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
      <span style={{
        fontSize: '0.68rem',
        fontWeight: 600,
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
      }}>
        {label}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {techs.map((tech) => {
          const isHighlighted = hoveredTech && hoveredTech.id === tech.id;
          const isDimmed = hoveredTech && hoveredTech.id !== tech.id && !hoveredTech.projects.some(p => tech.projects.includes(p));

          return (
            <TechChip
              key={tech.id}
              active={isHighlighted}
              dimmed={isDimmed}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {tech.label}
            </TechChip>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <SectionHeader 
          eyebrow="developer.json"
          title="About & Core Skills"
          subtitle="A summary of my professional interests, skills, and certifications."
        />

        <AppWindow title="About — Profile Window" rightText="developer.json">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
            padding: '2rem',
          }} className="md-grid-2col">
            
            {/* Left Column: Personal Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid var(--border)' 
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <GraduationCap size={18} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
                  <span>My Journey</span>
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  I'm a Computer Engineering student currently pursuing my B.Tech at <strong>K.J. Somaiya College of Engineering</strong> in Mumbai. My coding journey revolves around creating performant full-stack systems and finding elegant ways to embed AI logic in everyday web tools. I thrive at the cross-section of database optimization, API design, and client-side usability.
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginTop: '1rem',
                }}>
                  I build applications prioritizing visual simplicity and structured, clean code. When I'm not studying core computer science topics like DBMS, Operating Systems, or DSA, I'm typically experimenting with modern server models, refining UI states, or shipping modular product features.
                </p>
              </div>

              {/* Certifications Card */}
              <div style={{ 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid var(--border)' 
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <Award size={18} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
                  <span>Certifications</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {CERTIFICATIONS.map((cert) => (
                    <div 
                      key={cert.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        borderBottom: '1px solid var(--border)',
                        paddingBottom: '0.75rem',
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {cert.title}
                        </h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                          {cert.issuer}
                        </p>
                      </div>
                      
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-icon"
                        style={{ width: '28px', height: '28px', flexShrink: 0 }}
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Technology Constellation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem' 
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <Code2 size={18} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
                  <span>Ecosystem Stack</span>
                </h3>

                {renderTechGroup('Frontend', frontendTech)}
                {renderTechGroup('Backend', backendTech)}
                {renderTechGroup('Database', databaseTech)}
                {renderTechGroup('AI / Machine Learning', aiTech)}
                {renderTechGroup('Tools & Version Control', toolsTech)}
              </div>

              {/* Subtitle Interaction Panel */}
              <div style={{ height: '70px', position: 'relative', padding: '0 0.5rem' }}>
                <AnimatePresence mode="wait">
                  {hoveredTech ? (
                    <motion.div
                      key={hoveredTech.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--border)',
                        padding: '0.85rem 1.25rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-tertiary)' }}>Projects built using </span>
                      <strong style={{ color: 'var(--accent)' }}>{hoveredTech.label}</strong>
                      <span style={{ color: 'var(--text-tertiary)' }}>: </span>
                      <strong style={{ color: 'var(--text-primary)' }}>
                        {hoveredTech.projects.join(', ')}
                      </strong>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-tertiary)',
                        fontStyle: 'italic',
                        padding: '0.5rem 0.5rem',
                      }}
                    >
                      Hover over any skill chip to see connected portfolio projects.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </AppWindow>
      </div>
    </section>
  );
}
