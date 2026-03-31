// Section wrapper with centered max-width layout
export default function Section({ children, id, className = '' }) {
  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
