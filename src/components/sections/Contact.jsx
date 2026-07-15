import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, MapPin, Calendar, Copy, Check, ArrowRight } from 'lucide-react';

const Github = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

import AppWindow from '../ui/AppWindow';
import { PERSONAL } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    { id: 'email', label: 'Email Address', value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, icon: Mail, copyable: true },
    { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/kanishk-gandecha', href: PERSONAL.linkedin, icon: Linkedin },
    { id: 'github', label: 'GitHub', value: 'github.com/kanishkgandecha', href: PERSONAL.github, icon: Github },
    { id: 'resume', label: 'Download Resume', value: 'Google Drive PDF', href: PERSONAL.resume, icon: FileText }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow="POST /api/contact"
          title="Get In Touch"
          subtitle="Open for internships, development collaborations, or general engineering questions."
        />

        <AppWindow title="Contact — Communication Window" rightText="sh:mail">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
            padding: '2rem',
          }} className="md-grid-2col">
            
            {/* Left Column: Connect Form / Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ 
                padding: '2rem',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  Availability Details
                </h3>
                
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}>
                  I am actively seeking <strong>Software Engineering Internships</strong> for immediately available, remote, or hybrid roles in Mumbai. I am open to working with both startups and established product teams.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                    }}>
                      <MapPin size={16} strokeWidth={1.75} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</span>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{PERSONAL.location}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                    }}>
                      <Calendar size={16} strokeWidth={1.75} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Timeline</span>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{PERSONAL.availableFrom}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Connection Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 1.5rem',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '12px',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                      }}>
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <span style={{
                          fontSize: '0.68rem',
                          color: 'var(--text-tertiary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}>
                          {item.label}
                        </span>
                        <div style={{
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          color: 'var(--text-primary)',
                        }}>
                          {item.value}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {item.copyable && (
                        <Button
                          variant="icon"
                          onClick={handleCopyEmail}
                          style={{ width: '32px', height: '32px' }}
                          title="Copy email to clipboard"
                        >
                          <AnimatePresence mode="wait" initial={false}>
                            {copied ? (
                              <motion.span
                                key="check"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                              >
                                <Check size={14} style={{ color: 'var(--accent)' }} />
                              </motion.span>
                            ) : (
                              <motion.span
                                key="copy"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                              >
                                <Copy size={14} />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Button>
                      )}

                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button variant="icon" style={{ width: '32px', height: '32px' }} title="Visit link">
                          <ArrowRight size={14} />
                        </Button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </AppWindow>
      </div>
    </section>
  );
}
