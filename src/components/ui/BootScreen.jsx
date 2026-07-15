import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOT_MESSAGES, PERSONAL } from '../../data/portfolio';

export default function BootScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Show each line according to its delay
    const timers = BOOT_MESSAGES.map((msg, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        // Drive progress bar based on line index
        const prog = Math.min(100, Math.round(((i + 1) / (BOOT_MESSAGES.length - 1)) * 100));
        setProgress(prog);
      }, msg.delay)
    );

    // Start exit transition
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 700);
    }, 4600);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const getLineStyle = (msg) => {
    if (msg.highlight) return { color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' };
    if (msg.accent)    return { color: 'var(--emerald)', fontWeight: 600, letterSpacing: '0.08em' };
    if (msg.dim)       return { color: 'var(--text-secondary)', fontSize: '0.85rem' };
    return { color: 'var(--text-secondary)' };
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div style={{ width: '100%', maxWidth: '640px', padding: '0 2rem' }}>
            {/* Header bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '3rem', paddingBottom: '1rem',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                DEVOS v{PERSONAL.version}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--emerald)', letterSpacing: '0.05em' }}>
                {PERSONAL.university.toUpperCase()}
              </span>
            </div>

            {/* Terminal lines */}
            <div style={{ minHeight: '320px', marginBottom: '2.5rem' }}>
              {BOOT_MESSAGES.map((msg, i) => (
                <AnimatePresence key={i}>
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        lineHeight: 2,
                        ...getLineStyle(msg),
                      }}
                    >
                      {msg.text || '\u00A0'}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                flex: 1, height: '2px',
                background: 'var(--bg-elevated)',
                borderRadius: '1px', overflow: 'hidden',
              }}>
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ height: '100%', background: 'var(--emerald)', borderRadius: '1px', boxShadow: '0 0 8px var(--emerald)' }}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', width: '36px', textAlign: 'right' }}>
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
