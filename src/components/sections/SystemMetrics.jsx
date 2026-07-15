import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { SYSTEM_METRICS } from '../../data/portfolio';

function CountUp({ target, duration = 1500 }) {
  const [value, setValue] = useState('0');
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        // For non-numeric, just set immediately
        const numericTarget = parseFloat(target);
        if (isNaN(numericTarget)) { setValue(target); return; }

        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * numericTarget;
          // Format same as target
          if (target.includes('.')) {
            setValue(current.toFixed(2));
          } else if (target.endsWith('+')) {
            setValue(Math.floor(current) + '+');
          } else {
            setValue(Math.floor(current).toString());
          }
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value}</span>;
}

export default function SystemMetrics() {
  return (
    <section id="metrics" style={{ padding: 'var(--section-padding)', position: 'relative', background: 'var(--bg-void)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <SectionHeader
          number="—"
          label="SYSTEM METRICS"
          title="Live System Status"
          subtitle="Real-time metrics from the developer runtime environment."
          align="center"
        />

        {/* Metrics grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {SYSTEM_METRICS.map((metric, i) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="os-card"
              style={{ padding: '2rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '80%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)`,
              }} />

              {/* Value */}
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 800, color: metric.color,
                lineHeight: 1, marginBottom: '0.4rem',
                textShadow: `0 0 30px ${metric.color}40`,
              }}>
                <CountUp target={metric.value} />
              </div>

              {/* Unit */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--text-dim)', letterSpacing: '0.1em',
                marginBottom: '0.75rem', textTransform: 'uppercase',
              }}>
                {metric.unit}
              </div>

              {/* Divider */}
              <div style={{ width: '30px', height: '1px', background: `${metric.color}40`, margin: '0 auto 0.75rem' }} />

              {/* Label */}
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                {metric.label}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                {metric.description}
              </div>

              {/* Status dot for "OPEN" metric */}
              {metric.value === 'OPEN' && (
                <div style={{ marginTop: '1rem' }}>
                  <span className="status-dot" style={{ color: 'var(--emerald)', fontSize: '0.65rem', justifyContent: 'center' }}>
                    HIRING
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
