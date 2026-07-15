import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout & Core UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CommandPalette from './components/ui/CommandPalette';

// Sections
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

// Hooks
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['home', 'projects', 'experience', 'about', 'contact'];

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { activeSection, scrollToSection } = useActiveSection(SECTION_IDS);

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
    <div style={{ 
      background: 'var(--bg-primary)', 
      minHeight: '100vh',
      color: 'var(--text-primary)',
      position: 'relative'
    }}>
      {/* Floating capsule navigation bar */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {/* Universal Search Command Palette */}
      <CommandPalette 
        isOpen={paletteOpen} 
        onClose={() => setPaletteOpen(false)}
        scrollToSection={scrollToSection}
      />

      {/* Core layout sections */}
      <main>
        {/* Hero Experience */}
        <Hero />

        {/* Shipped Products showcase */}
        <Projects />

        {/* Experience & Timeline logs */}
        <Experience />

        {/* Skills Constellation & Journey */}
        <About />

        {/* Communication Desk panel */}
        <Contact />
      </main>

      {/* Credits & copyright */}
      <Footer />
    </div>
  );
}
