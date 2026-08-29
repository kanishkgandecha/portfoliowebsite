import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Route-aware scroll management, mounted once at the app shell level.
 *
 * On every PATHNAME change (i.e. an actual route transition — not a same-page
 * nav click, which is handled separately by useActiveSection's smooth
 * scrollIntoView so it isn't disturbed here):
 *   - If the new location carries a hash (e.g. navigating to `/#projects`
 *     from a project page), scroll straight to that section.
 *   - Otherwise, reset scroll to the very top.
 *
 * Runs in useLayoutEffect so the reset happens synchronously after the DOM
 * update but before the browser paints — no visible flash of the wrong
 * scroll position, and no smooth-scroll animation on the initial route
 * landing (per spec: instant, not smooth, for a fresh route open).
 */
export default function ScrollManager() {
  const location = useLocation();

  // The browser's own automatic scroll restoration on back/forward
  // (`history.scrollRestoration`) fights with React Router's popstate
  // handling — it can reapply a stale snapshot around the same time this
  // component's effect runs. Take full manual control once, on mount.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const previous = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
      return () => {
        window.history.scrollRestoration = previous;
      };
    }
    return undefined;
  }, []);

  useLayoutEffect(() => {
    // The site sets `scroll-behavior: smooth` globally on <html> (for
    // same-page anchor scrolling elsewhere), which would otherwise turn
    // this reset into a slow animated scroll. Force `behavior: 'instant'`
    // explicitly so a fresh route always lands immediately, per spec.
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Intentionally keyed on pathname only — a hash-only change while
    // staying on the same route (none currently happen in this app) should
    // not re-trigger this; same-page section nav has its own smooth-scroll
    // mechanism and must not be interrupted by this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return null;
}
