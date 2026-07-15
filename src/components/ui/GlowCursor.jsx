import { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function GlowCursor() {
  const { position } = useMousePosition();
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Smooth outer ring follows with delay
    let outerX = position.x;
    let outerY = position.y;
    let animId;

    const animate = () => {
      outerX += (position.x - outerX) * 0.12;
      outerY += (position.y - outerY) * 0.12;
      outer.style.left = `${outerX}px`;
      outer.style.top  = `${outerY}px`;
      animId = requestAnimationFrame(animate);
    };
    animate();

    // Inner dot is immediate
    inner.style.left = `${position.x}px`;
    inner.style.top  = `${position.y}px`;

    return () => cancelAnimationFrame(animId);
  }, [position]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  const baseStyle = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  };

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        style={{
          ...baseStyle,
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(16, 185, 129, 0.5)',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s',
          mixBlendMode: 'normal',
        }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        style={{
          ...baseStyle,
          width: '6px',
          height: '6px',
          background: '#10B981',
          boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)',
        }}
      />
    </>
  );
}
