import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

// Layout & Core UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CommandPalette from './components/ui/CommandPalette';
import ScrollManager from './components/ScrollManager';

// Pages
import HomePage from './pages/HomePage';
import ProjectCaseStudyPage from './pages/ProjectCaseStudyPage';

// Hooks
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['home', 'about', 'experience', 'projects', 'notes', 'skills', 'contact'];

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProjectRoute = location.pathname.startsWith('/projects/');

  // Only watch home-page sections while actually on the home route — avoids
  // an IntersectionObserver left attached to stale/detached elements after
  // navigating away and back.
  const { activeSection, scrollToSection } = useActiveSection(SECTION_IDS, isHome);

  // Cross-route-aware section scrolling: nav links work the same whether
  // you're on the home page or a project route. From elsewhere, this is a
  // real `/#section` navigation (see ScrollManager); on the home page it's
  // the existing same-page smooth scroll — which also keeps the URL hash in
  // sync (cleared for "Overview"/home, set to `#section` otherwise) so the
  // address bar always reflects what's actually on screen. `replace: true`
  // updates the hash without adding a new back/forward history stop for
  // every nav click, and doesn't touch the pathname, so it can't interrupt
  // ScrollManager's route-change handling or the smooth scroll under way.
  const handleScrollTo = (id) => {
    if (!isHome) {
      navigate(`/#${id}`);
      return;
    }
    scrollToSection(id);
    navigate(id === 'home' ? '/' : `/#${id}`, { replace: true });
  };

  // "Projects" reads as active on the home page's Projects section AND on
  // any project case-study route, since you're viewing project content either way.
  const navActiveSection = isHome ? activeSection : (isProjectRoute ? 'projects' : '');

  // Monitor global hotkeys (Cmd+K / Ctrl+K to toggle search palette)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        color: 'var(--text-primary)',
        position: 'relative'
      }}>
        {/* Floating capsule navigation bar — identical on every route */}
        <Navbar
          activeSection={navActiveSection}
          scrollToSection={handleScrollTo}
          onOpenPalette={() => setPaletteOpen(true)}
        />

        {/* Raycast-style Universal Command Palette */}
        <CommandPalette
          isOpen={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          scrollToSection={handleScrollTo}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
        </Routes>

        {/* Credits & Footer */}
        <Footer />

        {/* Route-change scroll reset / hash-section landing (see component) */}
        <ScrollManager />
      </div>
    </MotionConfig>
  );
}
