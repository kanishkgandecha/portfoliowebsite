import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { PERSONAL } from '../../data/portfolio';
import Button from '../ui/Button';
import GlassPanel from '../ui/GlassPanel';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing simulator phrases
  const phrases = [
    "building scalable web apps...",
    "integrating intelligent AI...",
    "engineering full-stack systems...",
    "solving complex problems..."
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && typing) {
      setTyping(false);
      const timeout = setTimeout(() => {
        setSubIndex(phrases[index].length);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && !typing) {
      setTyping(true);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(phrases[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (typing ? 1 : -1));
    }, typing ? 60 : 30);

    return () => clearTimeout(timer);
  }, [subIndex, typing, index]);

  // Clean formatted development development metadata rows
  const devMetadata = [
    { label: 'branch', val: 'main', isMono: true },
    { label: 'stack', val: 'React · TypeScript · Node.js' },
    { label: 'focus', val: 'Full Stack & AI' },
    { label: 'status', val: 'Building', accent: true }
  ];

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        paddingTop: 'var(--nav-height)',
      }}
    >
      <style>{`
        @keyframes blink {
          from, to { background-color: transparent }
          50% { background-color: var(--accent) }
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      {/* Apple-style background blur blobs */}
      <div 
        className="bg-blob" 
        style={{
          width: '35vw',
          height: '35vw',
          top: '-10%',
          right: '5%',
          background: 'rgba(52, 199, 89, 0.06)', 
        }}
      />
      <div 
        className="bg-blob" 
        style={{
          width: '40vw',
          height: '40vw',
          bottom: '-15%',
          left: '-10%',
          background: 'rgba(10, 132, 255, 0.04)', 
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="md-grid-hero">
          
          {/* Left Column: Heading and Introduction */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants}>
              <span className="status-available">
                {PERSONAL.status}
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}>
                {PERSONAL.name}
              </h1>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: 'var(--text-secondary)',
                lineHeight: 1.25,
              }}>
                {PERSONAL.headline}
              </p>
            </motion.div>

            {/* Subtitle Roles List */}
            <motion.div 
              variants={itemVariants} 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              {PERSONAL.roles.map((role, idx) => (
                <span 
                  key={role} 
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    background: 'rgba(255,255,255,0.04)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '100px',
                    border: '1px solid var(--border)',
                  }}
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Short Bio Description */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.975rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '520px',
              }}
            >
              {PERSONAL.shortBio}
            </motion.p>

            {/* Typing simulator status line */}
            <motion.div variants={itemVariants} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              background: 'rgba(0,0,0,0.02)',
              padding: '0.45rem 0.8rem',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              width: 'fit-content'
            }}>
              <span style={{ color: 'var(--accent)' }}>&gt;</span>
              <span>{currentText}</span>
              <span className="blinking-cursor" style={{
                width: '6px',
                height: '13px',
                background: 'var(--accent)',
                display: 'inline-block',
                marginLeft: '1px',
              }} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants} 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginTop: '0.5rem',
              }}
            >
              <Button variant="primary" onClick={() => handleScroll('projects')}>
                <span>View Projects</span>
                <ArrowRight size={15} />
              </Button>
              <a href={PERSONAL.resume} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="ghost">
                  <FileText size={15} />
                  <span>Resume</span>
                </Button>
              </a>
              <Button variant="ghost" onClick={() => handleScroll('contact')}>
                <span>Contact</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Desktop Info Panel (Development Metadata) */}
          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.45 }}
            className="hidden md:block"
          >
            <GlassPanel style={{ padding: '2rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 650,
                color: 'var(--text-tertiary)',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                [metadata]
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {devMetadata.map((row) => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-tertiary)',
                      width: '70px',
                      flexShrink: 0,
                    }}>
                      {row.label}
                    </span>
                    <span style={{
                      fontFamily: row.isMono ? 'var(--font-mono)' : 'var(--font-body)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: row.accent ? 'var(--accent)' : 'var(--text-primary)',
                    }}>
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
