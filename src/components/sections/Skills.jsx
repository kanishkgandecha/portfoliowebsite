import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles, Check, Code, Database, Terminal, Layers } from 'lucide-react';
import { TECH_STACK, TECH_CATEGORIES } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

export default function Skills() {
  const [activeSkillId, setActiveSkillId] = useState(TECH_STACK[0]?.id || 'react');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech = activeCategory === 'all' 
    ? TECH_STACK 
    : TECH_STACK.filter(t => t.category === activeCategory);

  const activeSkill = TECH_STACK.find(t => t.id === activeSkillId) || TECH_STACK[0];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow="Skills"
          title="Technologies & Tools"
          subtitle="Click or hover any skill capsule to see recently used projects and specialties."
        />

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
          marginTop: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              background: activeCategory === 'all' ? 'var(--accent)' : 'var(--bg-surface-solid)',
              color: activeCategory === 'all' ? '#000' : 'var(--text-secondary)',
              border: '1px solid',
              borderColor: activeCategory === 'all' ? 'var(--accent)' : 'var(--border)',
              padding: '0.4rem 0.9rem',
              borderRadius: '100px',
              fontSize: '0.78rem',
              fontWeight: activeCategory === 'all' ? 600 : 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            All Technologies
          </button>
          {Object.entries(TECH_CATEGORIES).map(([catKey, catObj]) => (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              style={{
                background: activeCategory === catKey ? 'var(--accent)' : 'var(--bg-surface-solid)',
                color: activeCategory === catKey ? '#000' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeCategory === catKey ? 'var(--accent)' : 'var(--border)',
                padding: '0.4rem 0.9rem',
                borderRadius: '100px',
                fontSize: '0.78rem',
                fontWeight: activeCategory === catKey ? 600 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {catObj.label}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }} className="md-grid-2col">
          
          {/* Left Column: Skill Capsules Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}>
            {filteredTech.map((tech, idx) => {
              const isSelected = tech.id === activeSkillId;
              return (
                <motion.button
                  key={tech.id}
                  type="button"
                  onClick={() => setActiveSkillId(tech.id)}
                  onMouseEnter={() => setActiveSkillId(tech.id)}
                  onFocus={() => setActiveSkillId(tech.id)}
                  aria-pressed={isSelected}
                  aria-label={`${tech.label} — show details`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: isSelected ? 1.05 : 1,
                    y: [0, -2, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 },
                    scale: { duration: 0.2 },
                    opacity: { duration: 0.3 }
                  }}
                  style={{
                    background: isSelected ? 'rgba(48, 209, 88, 0.12)' : 'var(--bg-surface-solid)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--accent)' : 'var(--border-bright)',
                    padding: '0.65rem 1.1rem',
                    minHeight: '44px',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'inherit',
                    boxShadow: isSelected ? '0 0 15px rgba(48, 209, 88, 0.2)' : 'var(--shadow-sm)',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                >
                  <span aria-hidden="true" style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: isSelected ? 'var(--accent)' : 'var(--text-tertiary)',
                  }} />
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: isSelected ? 650 : 500,
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                  }}>
                    {tech.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Selected Skill Details Card */}
          <div style={{
            background: 'var(--bg-surface-solid)',
            border: '1px solid var(--border-bright)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: 'var(--shadow-md)',
            minHeight: '300px',
          }}>
            <AnimatePresence mode="wait">
              {activeSkill && (
                <motion.div
                  key={activeSkill.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Cpu size={20} style={{ color: 'var(--accent)' }} />
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {activeSkill.label}
                      </h3>
                    </div>

                    <span style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent)',
                      background: 'rgba(48, 209, 88, 0.1)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '100px',
                      border: '1px solid rgba(48, 209, 88, 0.25)',
                      textTransform: 'uppercase',
                    }}>
                      {activeSkill.category}
                    </span>
                  </div>

                  {/* Recently Used Block */}
                  <div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.04em' }}>
                      [ Recently Used In ]
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {activeSkill.recentlyUsed && activeSkill.recentlyUsed.map((proj) => (
                        <span 
                          key={proj}
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 500,
                            color: 'var(--accent)',
                            background: 'rgba(48, 209, 88, 0.06)',
                            border: '1px solid rgba(48, 209, 88, 0.2)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                          }}
                        >
                          <span>✓</span>
                          <span>{proj}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ height: '1px', background: 'var(--border)', width: '100%' }} />

                  {/* Specialties List */}
                  <div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
                      [ Key Specialties ]
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {activeSkill.specialties && activeSkill.specialties.map((spec) => (
                        <div key={spec} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent)' }}>•</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
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
