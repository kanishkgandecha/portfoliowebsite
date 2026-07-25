import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Eye, Cpu, Server, Zap, Shield, Layout } from 'lucide-react';
import { INTERNSHIP_HIGHLIGHTS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import AppWindow from '../ui/AppWindow';

const ICON_MAP = {
  layers: Layers,
  eye: Eye,
  cpu: Cpu,
  server: Server,
  zap: Zap,
  shield: Shield,
  layout: Layout,
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 16 }
  }
};

export default function InternshipHighlights() {
  return (
    <section id="highlights" className="section">
      <div className="container">
        <SectionHeader 
          eyebrow="internship.spec"
          title="Internship Highlights"
          subtitle="Engineering impact and technical milestones achieved during professional internship roles."
        />

        <AppWindow title="Highlights — Engineering Impact" rightText="spec:highlights">
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.25rem',
              padding: 'var(--window-padding)',
            }}
          >
            {INTERNSHIP_HIGHLIGHTS.map((item) => {
              const Icon = ICON_MAP[item.icon] || Layers;
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.35rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '14px',
                    border: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-bright)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(52, 199, 89, 0.08)',
                        border: '1px solid rgba(52, 199, 89, 0.2)',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <span style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-tertiary)',
                        fontFamily: 'var(--font-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}>
                        {item.category}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 650,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                    }}>
                      {item.title}
                    </h3>

                    <p style={{
                      fontSize: '0.825rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AppWindow>
      </div>
    </section>
  );
}
