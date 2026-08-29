import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Folder, Briefcase, User, Mail, FileText, CornerDownLeft, BookOpen, Cpu, Check, X } from 'lucide-react';
import { useDialogA11y } from '../../hooks/useDialogA11y';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { PALETTE_ACTIONS, PERSONAL } from '../../data/portfolio';

const ICON_MAP = {
  folder: Folder,
  briefcase: Briefcase,
  user: User,
  mail: Mail,
  book: BookOpen,
  cpu: Cpu,
  'file-text': FileText,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export default function CommandPalette({ isOpen, onClose, scrollToSection }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setQuery('');
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
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
      onClose();
    } else if (action.href) {
      // Internal routes (e.g. /projects/kue) navigate within the SPA;
      // external URLs open in a new tab.
      if (action.href.startsWith('/')) {
        navigate(action.href);
      } else {
        window.open(action.href, '_blank', 'noopener,noreferrer');
      }
      onClose();
    } else if (action.action === 'resume') {
      window.open(PERSONAL.resume, '_blank', 'noopener,noreferrer');
      onClose();
    } else if (action.action === 'email') {
      navigator.clipboard.writeText(PERSONAL.email);
      setCopiedToast(true);
      setTimeout(() => {
        setCopiedToast(false);
        onClose();
      }, 1200);
    }
  };

  // Focus trap, Escape-to-close, and focus restoration are shared with other dialogs.
  useDialogA11y({ isOpen, onClose, containerRef: dialogRef });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
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
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={isMobile ? { type: 'spring', damping: 25, stiffness: 220 } : { type: 'spring', duration: 0.45, bounce: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.75)',
              border: '1px solid var(--border-bright)',
              background: 'var(--bg-surface-solid)',
              position: 'relative',
            }}
          >
            {/* Toast Feedback Banner when Copy Email selected */}
            <AnimatePresence>
              {copiedToast && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{
                    background: 'var(--accent)',
                    color: '#000',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Check size={14} />
                  <span>Email address copied to clipboard!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search Input Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: isMobile ? '1rem' : '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border)',
              gap: '0.85rem'
            }}>
              <Search size={18} style={{ color: 'var(--accent)' }} aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search workspace..."
                aria-label="Search commands"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-listbox"
                aria-autocomplete="list"
                aria-activedescendant={filteredActions[selectedIndex] ? `palette-option-${filteredActions[selectedIndex].id}` : undefined}
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
                <span aria-hidden="true" style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-tertiary)',
                  background: 'rgba(255,255,255,0.06)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border)'
                }}>
                  ESC
                </span>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close command palette"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-tertiary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  flexShrink: 0,
                }}
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            {/* Raycast Action Items List */}
            <div
              ref={listRef}
              role="listbox"
              id="palette-listbox"
              aria-label="Commands"
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
                      id={`palette-option-${action.id}`}
                      role="option"
                      aria-selected={isSelected}
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
                        borderRadius: '12px',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(48, 209, 88, 0.1)' : 'transparent',
                        border: '1px solid',
                        borderColor: isSelected ? 'rgba(48, 209, 88, 0.25)' : 'transparent',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(48, 209, 88, 0.15)' : 'rgba(255,255,255,0.04)',
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
                            fontSize: '0.88rem',
                            fontWeight: isSelected ? 600 : 500,
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

                      {isSelected && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                          <span>Select</span>
                          <CornerDownLeft size={12} />
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div style={{
                  padding: '2.5rem 1rem',
                  textAlign: 'center',
                  color: 'var(--text-tertiary)',
                  fontSize: '0.88rem'
                }}>
                  No commands matching "{query}"
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
