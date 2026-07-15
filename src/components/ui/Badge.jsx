export default function Badge({ children, variant = 'default', size = 'sm' }) {
  const variants = {
    emerald: 'badge badge-emerald',
    amber:   'badge badge-amber',
    cyan:    'badge badge-cyan',
    purple:  'badge badge-purple',
    default: 'badge badge-default',
  };

  const sizes = {
    xs: { fontSize: '0.65rem', padding: '0.15rem 0.4rem' },
    sm: { fontSize: '0.72rem', padding: '0.25rem 0.65rem' },
    md: { fontSize: '0.82rem', padding: '0.3rem 0.8rem' },
  };

  return (
    <span
      className={variants[variant] || variants.default}
      style={sizes[size] || sizes.sm}
    >
      {children}
    </span>
  );
}
