import { useState, useEffect, useRef } from 'react';

/**
 * Tracks which home-page section is currently in view via IntersectionObserver.
 *
 * `enabled` gates the whole thing: pass `false` while on a route that doesn't
 * contain these section ids (e.g. a project page) so the observer doesn't sit
 * around watching nothing. It's re-created every time `enabled` flips back to
 * `true`, so returning to the home route always re-attaches to the freshly
 * mounted section elements rather than stale/detached ones from a previous
 * mount.
 */
export function useActiveSection(sectionIds = [], enabled = true) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    // Detect when the smooth scroll has finished
    const handleScroll = () => {
      if (!isScrollingRef.current) return;

      // Debounce scroll end detection
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to spy on scroll transitions during manual scroll
    const observer = new IntersectionObserver(
      (entries) => {
        // Completely bypass observer updates if programmatically scrolling
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Spy on the middle-line intersection of the viewport for precise, stable matching
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sectionIds, enabled]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // 1. Instantly set the target active state to trigger Framer Motion layoutId transition
      isScrollingRef.current = true;
      setActiveSection(id);

      // 2. Clear any pending timeouts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // 3. Initiate smooth scroll
      el.scrollIntoView({ behavior: 'smooth' });

      // 4. Fallback timeout to release lock if no scroll events occur (already at target)
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  return { activeSection, scrollToSection };
}
