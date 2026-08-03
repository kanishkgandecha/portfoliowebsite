import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Layout & Core UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CommandPalette from './components/ui/CommandPalette';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import EngineeringNotes from './components/sections/EngineeringNotes';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

// Hooks
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['home', 'about', 'experience', 'projects', 'notes', 'skills', 'contact'];

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

      {/* Raycast-style Universal Command Palette */}
      <CommandPalette 
        isOpen={paletteOpen} 
        onClose={() => setPaletteOpen(false)}
        scrollToSection={scrollToSection}
      />

      {/* Core layout sections */}
      <main>
        {/* Hero Experience — Developer Identity Card Centerpiece */}
        <Hero />

        {/* Narrative About & Core Engineering Pillars */}
        <About />

        {/* Career Experience & Education Timeline */}
        <Experience />

        {/* Workspace Window Projects Showcase */}
        <Projects />

        {/* Technical Insights & Engineering Notes */}
        <EngineeringNotes />

        {/* Interactive Floating Skill Capsules */}
        <Skills />

        {/* Communication Desk & Contact Suite */}
        <Contact />
      </main>

      {/* Credits & Footer */}
      <Footer />
    </div>
  );
}
