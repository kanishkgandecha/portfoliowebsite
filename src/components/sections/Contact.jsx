import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, MapPin, Copy, Check, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Seeking Full-Stack, Native iOS, and Software Engineering opportunities."
        />

        {/* Main Glass Communication Desk Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-bright"
          style={{
            borderRadius: '24px',
            padding: 'var(--window-padding, 2.5rem)',
            maxWidth: '920px',
            margin: '2rem auto 0',
            border: '1px solid var(--border-bright)',
            boxShadow: 'var(--shadow-glass)',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }} className="md-grid-2col">
            
            {/* Left Column: Direct Message & Availability */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={20} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase' }}>
                  [ Direct Channel ]
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
              }}>
                Looking for a software engineer who can work across product, reliability, and systems?
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                I am actively seeking <strong>Full-Stack, Native iOS, and Software Engineering</strong> internship and graduate opportunities. Whether you have a role, a project, or a technical question, reach out at{' '}
                <strong>{PERSONAL.email}</strong>.
              </p>

              {/* Instant Copy Email Widget */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                rowGap: '0.6rem',
                background: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid var(--border-bright)',
                borderRadius: '14px',
                padding: '0.75rem 1rem',
                marginTop: '0.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0 }}>
                  <Mail size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    overflowWrap: 'anywhere',
                  }}>
                    {PERSONAL.email}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  onClick={handleCopyEmail}
                  aria-label={copied ? 'Email address copied' : 'Copy email address'}
                  aria-live="polite"
                  style={{ padding: '0.5rem 0.85rem', fontSize: '0.78rem', borderRadius: '8px', minHeight: '38px', flexShrink: 0 }}
                >
                  {copied ? (
                    <>
                      <Check size={13} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                      <span style={{ color: 'var(--accent)' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Right Column: Social & Document Links Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              
              {/* Phone Link */}
              <a 
                href={`tel:${PERSONAL.phone.replace(/\s+/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-solid)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-bright)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={18} style={{ color: 'var(--accent)' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Phone</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{PERSONAL.phone}</div>
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-tertiary)' }} />
              </a>

              {/* GitHub Link */}
              <a 
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-solid)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-bright)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <GithubIcon size={18} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>GitHub</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>github.com/kanishkgandecha</div>
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-tertiary)' }} />
              </a>

              {/* LinkedIn Link */}
              <a 
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-solid)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-bright)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <LinkedinIcon size={18} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>LinkedIn</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>linkedin.com/in/kanishk-gandecha</div>
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-tertiary)' }} />
              </a>

              {/* Resume Link */}
              <a 
                href={PERSONAL.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-solid)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-bright)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileText size={18} style={{ color: 'var(--accent)' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Resume PDF</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>View Resume — /resume.pdf</div>
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-tertiary)' }} />
              </a>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
