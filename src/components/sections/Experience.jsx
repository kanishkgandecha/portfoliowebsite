import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronDown, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState('medmarvel');

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeader 
          eyebrow="Experience"
          title="Experience & Education"
          subtitle="Timeline of software internships and academic studies."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }} className="md-grid-2col">
          
          {/* Left Column: Work Experience Timeline */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}>
              <Briefcase size={20} style={{ color: 'var(--accent)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600 }}>
                Work Experience
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
              {EXPERIENCE.map((job, idx) => {
                const isExpanded = expandedItem === job.id;
                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    style={{
                      padding: '1.35rem 1.5rem',
                      cursor: 'pointer',
                      background: 'var(--bg-surface-solid)',
                      borderRadius: '16px',
                      border: '1px solid var(--border)',
                      borderLeft: job.current ? '4px solid var(--accent)' : '1px solid var(--border)',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                    onClick={() => toggleExpand(job.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <div>
                        <h4 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.05rem',
                          fontWeight: 650,
                          color: 'var(--text-primary)',
                        }}>
                          {job.role}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          <Building size={13} style={{ color: 'var(--text-tertiary)' }} />
                          <span>{job.company}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          color: job.current ? 'var(--accent)' : 'var(--text-secondary)',
                          background: job.current ? 'rgba(48, 209, 88, 0.08)' : 'rgba(255,255,255,0.04)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '100px',
                          border: job.current ? '1px solid rgba(48, 209, 88, 0.25)' : '1px solid var(--border)',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}>
                          <Calendar size={11} />
                          <span>{job.period}</span>
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
                              fontSize: '0.88rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.65,
                              marginBottom: '1rem',
                            }}>
                              {job.description}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
                              {job.responsibilities.map((resp, rIdx) => (
                                <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                  <CheckCircle2 size={14} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>

                            {/* Public Tech Stack Chips */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                              {job.tech.map((t) => (
                                <span 
                                  key={t}
                                  style={{
                                    fontSize: '0.72rem',
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--accent)',
                                    background: 'rgba(48, 209, 88, 0.06)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(48, 209, 88, 0.2)',
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

          {/* Right Column: Education Qualification Timeline */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}>
              <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600 }}>
                Academic Timeline
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    padding: '1.35rem 1.5rem',
                    background: 'var(--bg-surface-solid)',
                    borderRadius: '16px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 650, color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                        {edu.institution}
                      </p>
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      background: 'rgba(48, 209, 88, 0.08)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(48, 209, 88, 0.2)',
                    }}>
                      {edu.score}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.85rem', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                      {edu.highlights.map((h) => (
                        <span 
                          key={h}
                          style={{
                            fontSize: '0.7rem',
                            color: 'var(--text-secondary)',
                            background: 'var(--bg-surface-2)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
