import React from 'react';
import { motion } from 'framer-motion';

export default function AppWindow({ 
  children, 
  title = "Untitled Window", 
  subtitle = "", 
  rightText = "", 
  className = "", 
  style = {}, 
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: 'spring', stiffness: 90, damping: 15 }}
      className={`glass ${className}`}
      style={{
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-bright)',
        boxShadow: 'var(--shadow-lg)',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        ...style
      }}
      {...props}
    >
      {/* Title Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.25rem',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(0, 0, 0, 0.02)',
        userSelect: 'none',
      }}>
        {/* Left Side: Window Controls */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', width: '80px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56', opacity: 0.85 }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', opacity: 0.85 }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F', opacity: 0.85 }} />
        </div>

        {/* Center: Title */}
        <div style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.72rem', 
          fontWeight: 650, 
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          letterSpacing: '-0.01em',
        }}>
          <span>{title}</span>
          {subtitle && (
            <>
              <span style={{ color: 'var(--text-tertiary)' }}>—</span>
              <span style={{ color: 'var(--text-tertiary)' }}>{subtitle}</span>
            </>
          )}
        </div>

        {/* Right Side: Tab Status / Git details */}
        <div style={{ 
          width: '80px', 
          textAlign: 'right', 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.65rem', 
          color: 'var(--text-tertiary)',
        }}>
          {rightText}
        </div>
      </div>

      {/* Window Body */}
      <div style={{ width: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
}
