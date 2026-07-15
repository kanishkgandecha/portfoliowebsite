import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Folder, Briefcase, User, Mail, FileText, CornerDownLeft } from 'lucide-react';

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

import { PALETTE_ACTIONS, PERSONAL } from '../../data/portfolio';

const ICON_MAP = {
  folder: Folder,
  briefcase: Briefcase,
  user: User,
  mail: Mail,
  'file-text': FileText,
  github: Github,
  linkedin: Linkedin,
};

export default function CommandPalette({ isOpen, onClose, scrollToSection }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const filteredActions = PALETTE_ACTIONS.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = (action) => {
    if (action.section) {
      scrollToSection(action.section);
    } else if (action.href) {
      window.open(action.href, '_blank', 'noopener,noreferrer');
    } else if (action.action === 'resume') {
      window.open(PERSONAL.resume, '_blank', 'noopener,noreferrer');
    } else if (action.action === 'email') {
      window.location.href = `mailto:${PERSONAL.email}`;
    }
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          handleAction(filteredActions[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredActions]);

  // Adjust scroll position of list when selection changes
  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const sheetVariants = isMobile ? {
    hidden: { y: '100%' },
    visible: { y: 0 },
    exit: { y: '100%' }
  } : {
    hidden: { scale: 0.96, y: -20 },
    visible: { scale: 1, y: 0 },
    exit: { scale: 0.96, y: -20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="palette-overlay"
          onClick={onClose}
        >
          <motion.div
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={isMobile ? { type: 'spring', damping: 25, stiffness: 220 } : { type: 'spring', duration: 0.45, bounce: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
              border: '1px solid var(--border-bright)',
            }}
            className="glass-bright command-palette-sheet"
          >
            {/* Search Input Container */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: isMobile ? '1rem' : '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border)',
              gap: '0.85rem'
            }}>
              <Search size={18} style={{ color: 'var(--text-secondary)' }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Where would you like to go?"
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                }}
              />
              {!isMobile && (
                <span style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-tertiary)',
                  background: 'rgba(255,255,255,0.06)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)'
                }}>
                  ESC
                </span>
              )}
            </div>

            {/* Actions List */}
            <div 
              ref={listRef}
              style={{
                maxHeight: isMobile ? '50vh' : '340px',
                overflowY: 'auto',
                padding: '0.5rem',
                paddingBottom: isMobile ? 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' : '0.5rem',
              }}
            >
              {filteredActions.length > 0 ? (
                filteredActions.map((action, index) => {
                  const Icon = ICON_MAP[action.icon] || Folder;
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={action.id}
                      onClick={() => handleAction(action)}
                      onMouseEnter={() => {
                        if (!isMobile) {
                          setSelectedIndex(index);
                        }
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: isMobile ? '0.95rem 1rem' : '0.8rem 1rem',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(255,255,255,0.08)' : 'transparent',
                        transition: 'background 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(52, 199, 89, 0.15)' : 'rgba(255,255,255,0.04)',
                          color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.15s ease',
                        }}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <div style={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                          }}>
                            {action.label}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: isSelected ? 'var(--text-secondary)' : 'var(--text-tertiary)',
                          }}>
                            {action.subtitle}
                          </div>
                        </div>
                      </div>

                      {isSelected && !isMobile && (
                        <motion.span 
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.68rem',
                            color: 'var(--text-tertiary)'
                          }}
                        >
                          <span>Select</span>
                          <CornerDownLeft size={10} />
                        </motion.span>
                      )}
                    </div>
                  );
                })
              ) : (
                <div style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  color: 'var(--text-tertiary)',
                  fontSize: '0.875rem'
                }}>
                  No results found for "{query}"
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
