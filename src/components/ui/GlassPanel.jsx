import React from 'react';

export default function GlassPanel({ children, className = '', style = {}, bright = false, ...props }) {
  const glassClass = bright ? 'glass-bright' : 'glass';
  return (
    <div 
      className={`${glassClass} ${className}`} 
      style={{
        position: 'relative',
        borderRadius: 'var(--card-radius)',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
