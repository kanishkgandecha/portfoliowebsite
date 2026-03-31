import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll state for navbar background
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section highlighting
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle 50% of the viewport
      threshold: 0
    });

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleNav = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1.5rem', 
        height: '72px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="font-heading"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            textDecoration: 'none'
          }}
        >
          <span style={{ color: 'var(--accent)' }}>&lt;/&gt;</span> Kanishk.
        </button>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '2rem' }} className="md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '0.9rem', fontWeight: 500, fontFamily: 'var(--font-sans)',
                color: activeSection === link.href.substring(1) ? 'var(--accent)' : 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.href.substring(1)) {
                  e.currentTarget.style.color = 'var(--text-main)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.substring(1)) {
                  e.currentTarget.style.color = 'var(--text-muted)';
                }
              }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute', top: '72px', left: 0, right: 0,
          background: 'var(--bg-dark)', borderBottom: '1px solid var(--border-subtle)',
          padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.href)}
              style={{
                background: activeSection === link.href.substring(1) ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                border: 'none', cursor: 'pointer', padding: '0.8rem 1rem', borderRadius: '8px',
                fontSize: '1rem', fontWeight: 500, color: activeSection === link.href.substring(1) ? 'var(--accent)' : 'var(--text-main)',
                textAlign: 'left', transition: 'background-color 0.2s'
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
