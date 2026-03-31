// Reusable Button component
// Note: If you need to display Indian currency (₹), use '₹' in button labels instead of '$'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white btn-glow shadow-lg shadow-indigo-500/30 active:scale-95',
    outline:
      'border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white active:scale-95',
    ghost:
      'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 active:scale-95',
    gradient:
      'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white hover:opacity-90 btn-glow shadow-lg active:scale-95',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
