import React from 'react';

export default function Button({ children, variant = 'primary', iconOnly = false, className = '', ...props }) {
  const btnClass = variant === 'primary' ? 'btn-primary' : variant === 'ghost' ? 'btn-ghost' : 'btn-icon';
  const finalClass = variant === 'icon' ? 'btn-icon' : 'btn';

  return (
    <button className={`${finalClass} ${btnClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
