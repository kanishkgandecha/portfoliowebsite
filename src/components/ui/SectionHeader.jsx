import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  const containerAlign = align === 'center' ? 'center' : 'flex-start';
  const textAlign = align === 'center' ? 'center' : 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ 
        marginBottom: '3.5rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: containerAlign, 
        textAlign: textAlign 
      }}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}
      
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'var(--text-primary)',
        lineHeight: 1.15,
        marginBottom: '0.75rem',
      }}>
        {title}
      </h2>

      {subtitle && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '560px',
          margin: align === 'center' ? '0 auto' : '0',
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
