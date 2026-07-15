import React from 'react';

export default function TechChip({ children, active = false, dimmed = false, onClick, ...props }) {
  const classNames = [
    'chip',
    active ? 'active' : '',
    dimmed ? 'dimmed' : ''
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classNames} 
      onClick={onClick}
      disabled={dimmed}
      style={{ border: '1px solid var(--border)' }}
      {...props}
    >
      {children}
    </button>
  );
}
