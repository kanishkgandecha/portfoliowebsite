import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronDown, Award } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import GlassPanel from '../ui/GlassPanel';
import TechChip from '../ui/TechChip';
import AppWindow from '../ui/AppWindow';

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState('current-internship');

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow="~/experience"
          title="Education & Experience"
          subtitle="A detailed breakdown of my academic qualifications and development experience."
        />

        <AppWindow title="Experience — Timeline Window" rightText="bash:history">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
            padding: 'var(--window-padding)',
          }} className="md-grid-2col">
            
            {/* Left Column: Experience */}
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                paddingLeft: '0.25rem',
              }}>
                <Briefcase size={18} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600 }}>
                  Experience
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
                {EXPERIENCE.map((job) => {
                  const isExpanded = expandedItem === job.id;
                  return (
                    <motion.div
                      key={job.id}
                      layout
                      style={{
                        padding: '1.25rem 1.5rem',
                        cursor: 'pointer',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '12px',
                        border: '1px solid var(--border)',
                        borderLeft: job.current ? '3px solid var(--accent)' : '1px solid var(--border)',
                        transition: 'border-color 0.2s ease, background 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                      onClick={() => toggleExpand(job.id)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                        <div>
                          <h4 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                          }}>
                            {job.role}
                          </h4>
                          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                            {job.company}
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                          <span style={{
                            fontSize: '0.7rem',
                            color: job.current ? 'var(--accent)' : 'var(--text-secondary)',
                            background: job.current ? 'rgba(52, 199, 89, 0.08)' : 'rgba(255,255,255,0.03)',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '100px',
                            border: job.current ? '1px solid rgba(52, 199, 89, 0.2)' : '1px solid var(--border)',
                            fontWeight: 500,
                          }}>
                            {job.period}
                          </span>
                          <ChevronDown 
                            size={16} 
                            style={{
                              color: 'var(--text-tertiary)',
                              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.25s ease'
                            }} 
                          />
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                              <p style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.65,
                                marginBottom: '1rem',
                              }}>
                                {job.description}
                              </p>

                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                                {job.responsibilities.map((resp, idx) => (
                                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent)', marginTop: '2px' }}>•</span>
                                    <span>{resp}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Tech Stack */}
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                {job.tech.map((t) => (
                                  <span 
                                    key={t}
                                    style={{
                                      fontSize: '0.72rem',
                                      color: 'var(--accent)',
                                      background: 'rgba(52, 199, 89, 0.05)',
                                      padding: '0.15rem 0.5rem',
                                      borderRadius: '100px',
                                      border: '1px solid rgba(52, 199, 89, 0.15)',
                                    }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Education */}
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                paddingLeft: '0.25rem',
              }}>
                <GraduationCap size={18} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600 }}>
                  Education
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
                {/* Timeline segment */}
                <div className="timeline-line" style={{ left: '16px', borderLeftColor: 'var(--border)' }} />

                {EDUCATION.map((edu) => (
                  <div 
                    key={edu.id}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      position: 'relative'
                    }}
                  >
                    {/* Timeline node */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      zIndex: 2,
                      marginTop: '4px',
                      flexShrink: 0
                    }}>
                      <div className={`timeline-dot ${edu.current ? 'current' : ''}`} style={{ width: '8px', height: '8px' }} />
                    </div>

                    {/* Glass / Solid Panel */}
                    <div style={{
                      flex: 1,
                      padding: '1.25rem 1.5rem',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '12px',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                      }}>
                        <div>
                          <h4 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                          }}>
                            {edu.degree}
                          </h4>
                          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                            {edu.institution}
                          </div>
                        </div>

                        <span style={{
                          fontSize: '0.72rem',
                          color: 'var(--text-tertiary)',
                          fontFamily: 'var(--font-mono)',
                        }}>
                          {edu.period}
                        </span>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                        marginTop: '0.5rem',
                      }}>
                        <Award size={14} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
                        <span>{edu.score}</span>
                      </div>

                      {edu.highlights.length > 0 && (
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.35rem',
                          marginTop: '1rem',
                          borderTop: '1px solid var(--border)',
                          paddingTop: '0.75rem',
                        }}>
                          {edu.highlights.map((course) => (
                            <span 
                              key={course}
                              style={{
                                fontSize: '0.68rem',
                                color: 'var(--text-secondary)',
                                background: 'rgba(255,255,255,0.02)',
                                padding: '0.15rem 0.5rem',
                                borderRadius: '4px',
                                border: '1px solid var(--border)',
                              }}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </AppWindow>
      </div>
    </section>
  );
}
