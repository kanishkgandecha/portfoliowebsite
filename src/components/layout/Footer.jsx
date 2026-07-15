import React from 'react';
import { PERSONAL } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 1.5rem',
      background: 'var(--bg-primary)',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: 'var(--text-tertiary)',
        }}>
          © {currentYear} {PERSONAL.name}. Built with React, Framer Motion, and pure CSS.
        </div>

        <div style={{
          fontSize: '0.8rem',
          color: 'var(--text-tertiary)',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
        }}>
          <a 
            href={PERSONAL.github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            GitHub
          </a>
          <a 
            href={PERSONAL.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            LinkedIn
          </a>
          <span style={{ color: 'var(--border)' }}>|</span>
          <span style={{ color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 650, letterSpacing: '0.04em' }}>
            V3.0.0
          </span>
        </div>
      </div>
    </footer>
  );
}
