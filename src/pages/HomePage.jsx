import React from 'react';

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import EngineeringNotes from '../components/sections/EngineeringNotes';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

// Route-change scroll behavior (reset to top, or land on a `#section` hash
// coming from a project page) is handled centrally by <ScrollManager /> in
// App.jsx, not here — this page only renders content.
export default function HomePage() {
  return (
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
  );
}
