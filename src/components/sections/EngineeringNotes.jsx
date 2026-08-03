import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ChevronRight, Check } from 'lucide-react';
import { ENGINEERING_NOTES } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

export default function EngineeringNotes() {
  const [activeNoteId, setActiveNoteId] = useState(ENGINEERING_NOTES[0]?.id || null);

  const activeNote = ENGINEERING_NOTES.find((n) => n.id === activeNoteId);

  return (
    <section id="notes" className="section section--alt">
      <div className="container">
        <SectionHeader 
          eyebrow="Notes"
          title="Engineering Notes"
          subtitle="Technical insights on performance, architecture, browser graphics, and security."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          alignItems: 'start',
          marginTop: '2rem',
        }} className="md-grid-2col">
          
          {/* Left Column: Notes List Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {ENGINEERING_NOTES.map((note) => {
              const isActive = note.id === activeNoteId;
              return (
                <motion.div
                  key={note.id}
                  onClick={() => setActiveNoteId(note.id)}
                  style={{
                    padding: '1.15rem 1.35rem',
                    background: isActive ? 'var(--bg-surface-solid)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--border-bright)' : 'transparent',
                    borderLeft: isActive ? '4px solid var(--accent)' : '1px solid transparent',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  whileHover={{ background: 'var(--bg-surface-solid)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}>
                      {note.category}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={11} />
                      <span>{note.readTime}</span>
                    </span>
                  </div>

                  <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 650,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    marginTop: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <span>{note.title}</span>
                    <ChevronRight size={16} style={{ opacity: isActive ? 1 : 0.4, transform: isActive ? 'translateX(2px)' : 'none', transition: 'all 0.2s ease' }} />
                  </h4>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Selected Note Viewer Panel */}
          <div style={{
            background: 'var(--bg-surface-solid)',
            border: '1px solid var(--border-bright)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: 'var(--shadow-md)',
            minHeight: '340px',
          }}>
            <AnimatePresence mode="wait">
              {activeNote && (
                <motion.div
                  key={activeNote.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <BookOpen size={18} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase' }}>
                      [ Note // {activeNote.category} ]
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}>
                    {activeNote.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {activeNote.summary}
                  </p>

                  <div style={{ height: '1px', background: 'var(--border)', width: '100%' }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Architectural Takeaways
                    </div>

                    {activeNote.bullets.map((bullet, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(48, 209, 88, 0.1)', border: '1px solid rgba(48, 209, 88, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <Check size={11} style={{ color: 'var(--accent)' }} />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
