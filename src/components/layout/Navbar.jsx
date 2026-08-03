import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Sun, Moon, Home, Folder, Briefcase, User, Mail, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL } from '../../data/portfolio';

const NAV_LINKS = [
  { id: 'home', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'notes', label: 'Notes' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const MOBILE_NAV_LINKS = [
  { id: 'home', label: 'Overview', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Timeline', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function FloatingNav({ activeSection, scrollToSection, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('appearance-theme');
      if (stored) return stored;
      return 'dark';
    }
    return 'dark';
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
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
  };

  return (
    <>
      {/* ── Cohesive Desktop Navigation Bar (Single Unified Component) ── */}
      <motion.nav
        initial={{ y: -100, x: '-50%' }}
        animate={{ 
          y: 0,
          x: '-50%',
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        className="hidden-mobile"
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 400,
          width: 'max-content',
          maxWidth: '95%',
        }}
      >
        <motion.div 
          className="glass-bright" 
          animate={{
            height: scrolled ? 46 : 52,
            paddingLeft: scrolled ? 16 : 22,
            paddingRight: scrolled ? 16 : 22,
            gap: scrolled ? '0.75rem' : '1rem',
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '100px',
            boxShadow: 'var(--shadow-glass)',
          }}
        >
          {/* Cursive "Kanishk" Signature Brand / Docked Identity Badge */}
          <AnimatePresence mode="wait">
            {scrolled ? (
              <motion.button
                key="docked-badge"
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleNavClick('home')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-bright)',
                  borderRadius: '100px',
                  padding: '0.25rem 0.75rem 0.25rem 0.3rem',
                  cursor: 'pointer',
                }}
                title="Return to Hero centerpiece"
              >
                <img 
                  src={PERSONAL.avatar} 
                  alt={PERSONAL.name}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid var(--accent)',
                  }}
                />
                <span style={{ 
                  fontFamily: "'Dancing Script', cursive, sans-serif", 
                  fontSize: '1.15rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)' 
                }}>
                  Kanishk
                </span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
              </motion.button>
            ) : (
              <motion.button
                key="text-logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => handleNavClick('home')}
                style={{
                  fontFamily: "'Dancing Script', cursive, sans-serif",
                  fontWeight: 700,
                  fontSize: '1.65rem',
                  color: 'var(--text-primary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0 0.4rem',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                Kanishk
              </motion.button>
            )}
          </AnimatePresence>

          {/* Nav Links with active sliding indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', position: 'relative' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    position: 'relative',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 600 : 450,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    zIndex: 1,
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-active"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'var(--bg-surface-2)',
                        borderRadius: '100px',
                        border: '1px solid var(--border-bright)',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          <div style={{ width: '1px', height: '16px', background: 'var(--border)', margin: '0 0.15rem' }} />

          {/* Integrated Workspace Status Widget Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--bg-surface-2)',
            padding: '0.25rem 0.75rem',
            borderRadius: '100px',
            border: '1px solid var(--border)',
            fontSize: '0.72rem',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 0 2px rgba(48, 209, 88, 0.25)',
            }} />
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{PERSONAL.status}</span>
            <span style={{ color: 'var(--text-tertiary)' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={11} />
              <span>{PERSONAL.location}</span>
            </span>
          </div>

          {/* Search Commands & Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: '0.25rem' }}>
            <button
              onClick={onOpenPalette}
              className="btn-ghost"
              style={{
                padding: '0.3rem 0.6rem',
                borderRadius: '100px',
                fontSize: '0.72rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
              title="Open Command Palette (Cmd+K)"
            >
              <Command size={11} strokeWidth={1.75} />
              <span style={{ fontFamily: 'var(--font-mono)' }}>K</span>
            </button>

            <button
              onClick={toggleTheme}
              className="btn-ghost"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={14} strokeWidth={1.75} /> : <Sun size={14} strokeWidth={1.75} />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* ── Mobile Bottom Navigation Bar ── */}
      <div 
        className="mobile-bottom-nav-container"
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 2rem)',
          maxWidth: '480px',
          zIndex: 400,
        }}
      >
        <div 
          className="glass-bright"
          style={{
            display: 'flex',
            width: '100%',
            borderRadius: '20px',
            padding: '0.4rem',
            paddingBottom: 'calc(0.4rem + env(safe-area-inset-bottom, 0px))',
            justifyContent: 'space-around',
            alignItems: 'center',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {MOBILE_NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2px',
                  height: '42px',
                  background: isActive ? 'var(--bg-surface-2)' : 'transparent',
                  border: 'none',
                  borderRadius: '12px',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, color 0.2s ease',
                  padding: '3px 0',
                }}
              >
                <Icon size={16} strokeWidth={isActive ? 2.25 : 1.75} />
                <span style={{ fontSize: '0.6rem', fontWeight: isActive ? 600 : 500 }}>{link.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Mobile Action FABs ── */}
      <div 
        className="mobile-bottom-nav-container"
        style={{
          position: 'fixed',
          bottom: 'calc(5.5rem + env(safe-area-inset-bottom, 0px))',
          left: '1.25rem',
          zIndex: 400,
        }}
      >
        <button
          onClick={toggleTheme}
          className="glass-bright"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '1px solid var(--border-bright)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {theme === 'light' ? <Moon size={15} strokeWidth={1.75} /> : <Sun size={15} strokeWidth={1.75} />}
        </button>
      </div>

      <div 
        className="mobile-bottom-nav-container"
        style={{
          position: 'fixed',
          bottom: 'calc(5.5rem + env(safe-area-inset-bottom, 0px))',
          right: '1.25rem',
          zIndex: 400,
        }}
      >
        <button
          onClick={onOpenPalette}
          className="glass-bright"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '1px solid var(--border-bright)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <Command size={15} strokeWidth={1.75} />
        </button>
      </div>
    </>
  );
}
