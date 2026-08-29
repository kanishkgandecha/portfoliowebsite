import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, FileText, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { PERSONAL } from '../../data/portfolio';
import Button from '../ui/Button';

export default function Hero() {
  const cardRef = useRef(null);
  
  // 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 24 });
  
  // Glare position percentage
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 20 });
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    // Normalize position -0.5 to 0.5
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'calc(var(--nav-height) + 2.5rem) 1.5rem 4.5rem',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(var(--border-bright) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }}
      />

      {/* Offset ambient glow (top-right corner, restrained opacity) */}
      <div className="bg-blob" style={{ width: '40vw', height: '40vw', top: '-20%', right: '-15%', background: 'rgba(48, 209, 88, 0.035)' }} />
      <div className="bg-blob" style={{ width: '45vw', height: '45vw', bottom: '-25%', left: '-20%', background: 'rgba(10, 134, 255, 0.03)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1120px' }}>
        
        {/* Main 2-Column Hero Layout (ID Card Prominence) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="md-grid-hero">
          
          {/* Left Column: Natural, Direct Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.65rem' }}
            className="hero-intro"
          >
            {/* Status Pill */}
            <div>
              <span className="status-available" style={{ 
                background: 'rgba(48, 209, 88, 0.08)', 
                padding: '0.4rem 0.95rem', 
                borderRadius: '100px', 
                border: '1px solid rgba(48, 209, 88, 0.25)',
                fontWeight: 600,
                fontSize: '0.8rem',
              }}>
                {PERSONAL.status}
              </span>
            </div>

            {/* Headline in simple, confident natural English */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 3.85rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
            }}>
              {PERSONAL.headline}
            </h1>

            {/* Short, conversational bio */}
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '540px',
            }}>
              {PERSONAL.shortBio}
            </p>

            {/* Focus Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }} className="hero-roles">
              {PERSONAL.focusAreas.map((area) => (
                <span 
                  key={area}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)',
                    background: 'var(--bg-surface-solid)',
                    border: '1px solid var(--border-bright)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px',
                  }}
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Action Buttons with clear hierarchy */}
            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '0.5rem' }} className="hero-ctas">
              <Button variant="primary" onClick={() => handleScrollTo('projects')}>
                <span>Explore Work</span>
                <ArrowRight size={15} />
              </Button>

              <a href={PERSONAL.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <FileText size={15} />
                <span>Resume</span>
              </a>

              <Button variant="ghost" onClick={() => handleScrollTo('contact')}>
                <span>Contact</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Physical Developer Identity Card Centerpiece (15-20% Prominence Increase) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000, display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                width: '100%',
                maxWidth: '470px',
                position: 'relative',
                borderRadius: '26px',
                cursor: 'pointer',
              }}
            >
              {/* Glass Card Container with enhanced internal spacing */}
              <div 
                className="glass-bright"
                style={{
                  position: 'relative',
                  borderRadius: '26px',
                  padding: '2.5rem 2.25rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-bright)',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                  background: 'var(--bg-glass-bright)',
                }}
              >
                {/* Specular glare overlay following cursor */}
                <motion.div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '26px',
                    pointerEvents: 'none',
                    background: useTransform(
                      [glareX, glareY],
                      ([gx, gy]) => `radial-gradient(600px circle at ${gx}% ${gy}%, rgba(255,255,255,0.09), transparent 40%)`
                    ),
                    zIndex: 2,
                  }}
                />

                {/* Top Bar: Verified Developer ID Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 3 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--accent)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                      [ DEVELOPER ID ]
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent)',
                    background: 'rgba(48, 209, 88, 0.1)',
                    border: '1px solid rgba(48, 209, 88, 0.25)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '100px',
                    fontWeight: 650,
                  }}>
                    VERIFIED
                  </div>
                </div>

                {/* Center Section: Avatar (90px) & Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 3 }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <picture>
                      <source type="image/webp" srcSet={PERSONAL.avatarSrcSet.webp} sizes="90px" />
                      <source type="image/jpeg" srcSet={PERSONAL.avatarSrcSet.jpg} sizes="90px" />
                      <img
                        src="/images/profile-320.jpg"
                        alt={PERSONAL.name}
                        width={90}
                        height={90}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        style={{
                          width: '90px',
                          height: '90px',
                          borderRadius: '22px',
                          objectFit: 'cover',
                          border: '2.5px solid var(--accent)',
                          boxShadow: '0 10px 24px rgba(0,0,0,0.3)',
                        }}
                      />
                    </picture>
                    <div style={{
                      position: 'absolute',
                      bottom: '-3px',
                      right: '-3px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      border: '3px solid var(--bg-surface)',
                    }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.65rem',
                      fontWeight: 750,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                    }}>
                      {PERSONAL.name}
                    </h2>
                    <span style={{ fontSize: '0.92rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {PERSONAL.title}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {PERSONAL.specialization}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      <MapPin size={13} style={{ color: 'var(--text-tertiary)' }} />
                      <span>{PERSONAL.location}</span>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div style={{ height: '1px', background: 'var(--border)', width: '100%', position: 'relative', zIndex: 3 }} />

                {/* Academic Details Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', position: 'relative', zIndex: 3 }}>
                  <div style={{ background: 'var(--bg-surface-solid)', padding: '0.75rem 0.95rem', borderRadius: '14px', border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                      Degree
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {PERSONAL.degree}
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-surface-solid)', padding: '0.75rem 0.95rem', borderRadius: '14px', border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                      University
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {PERSONAL.university}
                    </div>
                  </div>
                </div>

                {/* Footer Status Strip: Currently Building */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  rowGap: '0.4rem',
                  background: 'var(--bg-surface-solid)',
                  padding: '0.65rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  zIndex: 3,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', color: 'var(--text-secondary)', minWidth: 0 }}>
                    <Sparkles size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ overflowWrap: 'break-word' }}>{PERSONAL.currentlyBuilding}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent)', fontWeight: 600, flexShrink: 0 }}>
                    CGPA {PERSONAL.cgpa}
                  </span>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
