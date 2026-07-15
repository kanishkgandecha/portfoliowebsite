import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, Command, Sun, Moon } from 'lucide-react';

const Github = ({ size = 16, strokeWidth = 1.75 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16, strokeWidth = 1.75 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { PERSONAL } from '../../data/portfolio';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const NAV_LINKS = [
  { id: 'home', label: 'Overview' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function FloatingNav({ activeSection, scrollToSection, onOpenPalette }) {
  const scrollDirection = useScrollDirection();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('appearance-theme');
      if (stored) return stored;
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('appearance-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const isNavHidden = scrollDirection === 'down' && scrolled;

  console.log("Navbar render. activeSection prop value is:", activeSection);

  return (
    <>
      {/* Universal Floating Navigation Capsule */}
      <motion.nav
        initial={{ y: -100, x: '-50%' }}
        animate={{ 
          y: 0, // Always visible, do not hide on scroll down
          x: '-50%',
          scale: scrolled ? 0.97 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 400,
          width: 'max-content',
          maxWidth: '92%',
        }}
      >
        <motion.div 
          className="glass-bright" 
          animate={{
            height: scrolled ? 40 : 48,
            paddingLeft: scrolled ? 16 : 22,
            paddingRight: scrolled ? 16 : 22,
            gap: scrolled ? '0.65rem' : '0.9rem',
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '100px',
          }}
        >
          {/* Cursive Logo / Home link */}
          <button 
            onClick={() => handleNavClick('home')}
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 600,
              fontSize: '1.35rem',
              color: 'var(--text-primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0 0.25rem',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            Kanishk
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden-mobile" style={{ alignItems: 'center', gap: '0.35rem' }}>
            <div style={{ width: '1px', height: '16px', background: 'var(--border)', margin: '0 0.5rem' }} />
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: isActive ? 'var(--bg-surface-2)' : 'transparent',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 600 : 450,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, color 0.2s ease, font-weight 0.2s ease',
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div style={{ width: '1px', height: '16px', background: 'var(--border)' }} />

          {/* Desktop Actions / Socials */}
          <div className="hidden-mobile" style={{ alignItems: 'center', gap: '0.4rem' }}>
            <a 
              href={PERSONAL.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '28px', height: '28px' }}
              title="GitHub"
            >
              <Github size={13} strokeWidth={1.75} />
            </a>
            <a 
              href={PERSONAL.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '28px', height: '28px' }}
              title="LinkedIn"
            >
              <Linkedin size={13} strokeWidth={1.75} />
            </a>
            <div style={{ width: '1px', height: '16px', background: 'var(--border)', margin: '0 0.25rem' }} />
          </div>

          {/* Shared Action Elements */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenPalette}
              className="btn-ghost"
              style={{
                padding: '0.35rem 0.65rem',
                borderRadius: '100px',
                fontSize: '0.72rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
              title="Search commands (Ctrl+K)"
            >
              <Command size={11} strokeWidth={1.75} />
              <span>K</span>
            </button>

            {/* Theme Toggler */}
            <button
              onClick={toggleTheme}
              className="btn-ghost"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={13} strokeWidth={1.75} /> : <Sun size={13} strokeWidth={1.75} />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="btn-ghost mobile-only-btn"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                padding: '0',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Menu"
            >
              <Menu size={13} strokeWidth={1.75} />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Drawer Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 500,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-icon"
              style={{ position: 'absolute', top: '2rem', right: '2rem' }}
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
                width: '100%',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: activeSection === link.id ? 600 : 450,
                    color: activeSection === link.id ? 'var(--accent)' : 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </button>
              ))}

              <div style={{ width: '60px', height: '1px', background: 'var(--border)', margin: '0.75rem 0' }} />

              <a 
                href={PERSONAL.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ width: '200px', justifyContent: 'center', borderRadius: '12px', padding: '0.75rem' }}
              >
                <FileText size={14} strokeWidth={1.75} /> Download Resume
              </a>

              <div style={{ display: 'flex', gap: '0.85rem', marginTop: '0.5rem' }}>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <Github size={16} />
                </a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
