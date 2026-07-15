import { useEffect, useRef, useMemo } from 'react';

// Generates a set of random stars for the background
function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));
}

// Orbital rings - static SVG, animated via CSS
function OrbitalRings() {
  return (
    <svg
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.04,
      }}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
    >
      <ellipse cx="400" cy="300" rx="350" ry="200" fill="none" stroke="#10B981" strokeWidth="1" />
      <ellipse cx="400" cy="300" rx="250" ry="140" fill="none" stroke="#10B981" strokeWidth="0.5" />
      <circle cx="400" cy="300" r="150" fill="none" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="4 8" />
    </svg>
  );
}

export default function AnimatedBackground({ showOrbitals = false, showStars = true, intensity = 1 }) {
  const canvasRef = useRef(null);
  const stars = useMemo(() => generateStars(showStars ? 80 : 0), [showStars]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating particles
    const particles = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity * intensity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [intensity]);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Animated dot grid */}
      <div className="animated-grid" style={{ position: 'absolute', inset: 0, opacity: intensity * 0.8 }} />

      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            background: '#EEF2FF',
            opacity: s.opacity * intensity,
            animation: `glow-pulse ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Orbital rings */}
      {showOrbitals && <OrbitalRings />}

      {/* Floating geometry */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%',
        width: '180px', height: '180px',
        border: `1px solid rgba(16,185,129,0.06)`,
        borderRadius: '24px',
        transform: 'rotate(25deg)',
        animation: 'float-slow 14s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: '120px', height: '120px',
        border: `1px solid rgba(245,158,11,0.05)`,
        borderRadius: '16px',
        transform: 'rotate(-15deg)',
        animation: 'float 18s ease-in-out 3s infinite',
      }} />

      {/* Green background glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle at center, rgba(16,185,129,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle at center, rgba(245,158,11,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
}
