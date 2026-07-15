import { useState, useEffect, useCallback } from 'react';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function useKonamiCode() {
  const [triggered, setTriggered] = useState(false);
  const [sequence, setSequence] = useState([]);

  const handleKey = useCallback((e) => {
    setSequence((prev) => {
      const next = [...prev, e.key].slice(-KONAMI.length);
      if (next.join(',') === KONAMI.join(',')) {
        setTriggered(true);
      }
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const dismiss = useCallback(() => {
    setTriggered(false);
    setSequence([]);
  }, []);

  return { triggered, dismiss };
}
