import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Code2, Layers, Zap, Smartphone } from 'lucide-react';
import { PERSONAL, CERTIFICATIONS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

// Mirrors PERSONAL.focusAreas — the four primary capability labels used
// consistently across Hero, About, and page metadata.
export default function About() {
  const pillars = [
    {
      icon: Layers,
      title: 'Full-Stack Engineering',
      desc: 'React, Next.js, and TypeScript frontends over Node.js/Fastify/Express APIs, PostgreSQL, MongoDB, Redis, and Docker.',
    },
    {
      icon: Smartphone,
      title: 'Native iOS',
      desc: 'Swift, SwiftUI, and SwiftData apps with WidgetKit, ActivityKit, App Intents, and Apple platform integrations.',
    },
    {
      icon: Zap,
      title: 'Real-Time Systems',
      desc: 'Live data pipelines using PostgreSQL LISTEN/NOTIFY and Server-Sent Events for second-to-second updates.',
    },
    {
      icon: Code2,
      title: 'AI Developer Tools',
      desc: 'Orchestrating multi-agent AI workflows over deterministic static analysis and semantic code search.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="Background & Focus"
          subtitle="Computer Engineering student building full-stack web systems, native iOS applications, real-time platforms, and AI developer tools."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }} className="md-grid-2col">
          
          {/* Left Column: Academic & Background Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Main Background Card */}
            <div style={{
              background: 'var(--bg-surface-solid)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600 }}>
                  Engineering Background
                </h3>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.85rem' }}>
                I study Computer Engineering at <strong>K.J. Somaiya College of Engineering</strong> in Mumbai (CGPA: <strong>8.23</strong>).
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.85rem' }}>
                I'm a <strong>Full-Stack &amp; Native iOS Software Engineer</strong> — I build full-stack, real-time platforms with React/Next.js, Node.js, and PostgreSQL, and native apps with Swift and SwiftUI. Most recently: a Formula 1 live-data pipeline and a privacy-focused SwiftData-backed event planner.
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                I focus on data migration safety, reliability, privacy, and automated testing across everything I ship.
              </p>

              {/* Stats Row — verified engineering metrics only */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '0.75rem',
                marginTop: '1.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border)',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>
                    8.23
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>CGPA Score</div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    749
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>Kue Tests Passed</div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>
                    7
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>AI Agents Orchestrated</div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div style={{
              background: 'var(--bg-surface-solid)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '1.75rem 2rem',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Award size={20} style={{ color: 'var(--accent)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600 }}>
                  Certifications & Learning
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {CERTIFICATIONS.map((cert) => (
                  <div 
                    key={cert.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {cert.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>

                    <a
                      href={cert.credentialUrl || cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      style={{ width: '44px', height: '44px' }}
                      title={cert.credentialUrl ? 'View Certificate' : 'View Course'}
                      aria-label={`${cert.credentialUrl ? 'View certificate' : 'View course'}: ${cert.title}`}
                    >
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Interactive Core Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '0.25rem',
            }}>
              Core Focus Areas
            </h3>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    background: 'var(--bg-surface-solid)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '1.35rem 1.5rem',
                    transition: 'border-color 0.25s ease, transform 0.25s ease',
                  }}
                  whileHover={{ translateY: -2, borderColor: 'var(--border-bright)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(48, 209, 88, 0.08)',
                      border: '1px solid rgba(48, 209, 88, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      flexShrink: 0,
                    }}>
                      <Icon size={18} />
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {pillar.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '3rem' }}>
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
