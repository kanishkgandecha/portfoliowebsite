import { useEffect } from 'react';

/**
 * Imperatively updates document.title and key meta tags for the current route.
 *
 * This is a client-side-only affordance: it updates the browser tab title and
 * meta tags for any crawler that executes JavaScript (e.g. Googlebot), but it
 * cannot change what a non-JS social-card crawler (Twitter/Facebook link
 * unfurlers) sees on first paint, since this site is client-rendered without
 * server-side rendering or prerendering. The default tags in index.html cover
 * that first-paint case for the home route.
 */
export function useDocumentMeta({ title, description, canonical }) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;

    const setMeta = (selector, attr, value) => {
      if (!value) return null;
      let el = document.querySelector(selector);
      const created = !el;
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        } else if (selector.includes('name=')) {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      const previous = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return { el, previous, created };
    };

    const restored = [
      setMeta('meta[name="description"]', 'content', description),
      setMeta('meta[property="og:title"]', 'content', title),
      setMeta('meta[property="og:description"]', 'content', description),
      setMeta('meta[name="twitter:title"]', 'content', title),
      setMeta('meta[name="twitter:description"]', 'content', description),
    ].filter(Boolean);

    let canonicalEl = null;
    let previousCanonicalHref = null;
    let canonicalCreated = false;
    if (canonical) {
      canonicalEl = document.querySelector('link[rel="canonical"]');
      canonicalCreated = !canonicalEl;
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      previousCanonicalHref = canonicalEl.getAttribute('href');
      canonicalEl.setAttribute('href', canonical);
    }

    return () => {
      document.title = previousTitle;
      restored.forEach(({ el, previous, created }) => {
        if (created) {
          el.remove();
        } else if (previous !== null) {
          el.setAttribute('content', previous);
        }
      });
      if (canonicalEl) {
        if (canonicalCreated) {
          canonicalEl.remove();
        } else if (previousCanonicalHref !== null) {
          canonicalEl.setAttribute('href', previousCanonicalHref);
        }
      }
    };
  }, [title, description, canonical]);
}
