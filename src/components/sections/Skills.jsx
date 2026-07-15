import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { SKILLS_NODES, SKILL_CONNECTIONS, SKILL_CATEGORIES } from '../../data/portfolio';

const SVG_W = 760;
const SVG_H = 500;

function SkillNode({ node, isActive, isConnected, isDimmed, onClick }) {
  const cat = SKILL_CATEGORIES[node.category];
  const color = cat?.color || '#8892A4';

  const glowColor = isActive ? color : isConnected ? `${color}80` : 'transparent';
  const textColor = isDimmed ? 'var(--text-dim)' : isActive ? color : isConnected ? 'var(--text-secondary)' : 'var(--text-secondary)';
  const circleStroke = isActive ? color : isConnected ? `${color}80` : 'var(--border)';
  const circleFill = isActive ? `${color}20` : isConnected ? `${color}08` : 'var(--bg-surface)';
  const opacity = isDimmed ? 0.3 : 1;

  return (
    <g
      transform={`translate(${node.x}, ${node.y})`}
      onClick={() => onClick(node)}
      style={{ cursor: 'pointer', opacity, transition: 'opacity 0.3s' }}
    >
      {/* Glow ring */}
      {(isActive || isConnected) && (
        <circle r={isActive ? 22 : 18} fill="none" stroke={glowColor} strokeWidth={isActive ? 1.5 : 0.8}
          style={{ filter: isActive ? `drop-shadow(0 0 8px ${color})` : 'none', transition: 'all 0.3s' }} />
      )}

      {/* Main circle */}
      <circle r={16} fill={circleFill} stroke={circleStroke} strokeWidth={1}
        style={{ transition: 'all 0.3s' }} />

      {/* Label */}
      <text
        y="28" textAnchor="middle"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fill: textColor, transition: 'fill 0.3s', userSelect: 'none' }}
      >
        {node.label}
      </text>

      {/* Icon text */}
      <text y="5" textAnchor="middle"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', fill: isActive ? color : 'var(--text-dim)', userSelect: 'none', transition: 'fill 0.3s' }}
      >
        {node.icon}
      </text>
    </g>
  );
}

export default function Skills() {
  const [activeId, setActiveId] = useState(null);
  const svgRef = useRef(null);

  // Find which nodes are connected to the active node
  const connectedIds = activeId
    ? SKILL_CONNECTIONS
        .filter(([a, b]) => a === activeId || b === activeId)
        .map(([a, b]) => (a === activeId ? b : a))
    : [];

  const activeNode = SKILLS_NODES.find((n) => n.id === activeId);

  const handleClick = (node) => {
    setActiveId((prev) => (prev === node.id ? null : node.id));
  };

  const getConnectionOpacity = (a, b) => {
    if (!activeId) return 0.12;
    if (a === activeId || b === activeId) return 0.7;
    return 0.03;
  };

  const getConnectionColor = (a, b) => {
    if (activeId && (a === activeId || b === activeId)) {
      const node = a === activeId ? SKILLS_NODES.find((n) => n.id === a) : SKILLS_NODES.find((n) => n.id === a);
      return SKILL_CATEGORIES[node?.category]?.color || '#10B981';
    }
    return '#8892A4';
  };

  return (
    <section id="skills" style={{ padding: 'var(--section-padding)', position: 'relative', background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <SectionHeader
          number="05"
          label="TECH STACK"
          title="Technology Ecosystem"
          subtitle="Click any skill to reveal connections and projects. The constellation shows how technologies relate."
        />

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}
        >
          {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
                {cat.label}
              </span>
            </div>
          ))}
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginLeft: 'auto' }}>
            Click a node to explore
          </span>
        </motion.div>

        {/* Main ecosystem area */}
        <div className="md-grid-skills" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}>

          {/* SVG constellation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="os-card"
            style={{
              padding: '1.5rem', background: 'var(--bg-surface)',
              borderRadius: '16px', overflow: 'hidden', position: 'relative',
            }}
          >
            {/* Background grid */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
              <div className="animated-grid" style={{ position: 'absolute', inset: 0 }} />
            </div>

            <svg
              ref={svgRef}
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              style={{ width: '100%', height: 'auto', maxHeight: '500px', display: 'block', position: 'relative', zIndex: 1 }}
            >
              {/* Connection lines */}
              {SKILL_CONNECTIONS.map(([a, b]) => {
                const nodeA = SKILLS_NODES.find((n) => n.id === a);
                const nodeB = SKILLS_NODES.find((n) => n.id === b);
                if (!nodeA || !nodeB) return null;
                const color = getConnectionColor(a, b);
                const opacity = getConnectionOpacity(a, b);
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={nodeA.x} y1={nodeA.y}
                    x2={nodeB.x} y2={nodeB.y}
                    stroke={color}
                    strokeWidth={activeId && (a === activeId || b === activeId) ? 1.5 : 0.8}
                    strokeOpacity={opacity}
                    style={{ transition: 'stroke-opacity 0.3s, stroke-width 0.3s' }}
                  />
                );
              })}

              {/* Category cluster labels */}
              {Object.entries({
                Frontend: { x: 180, y: 65 },
                Backend: { x: 590, y: 65 },
                Database: { x: 640, y: 460 },
                'AI / ML': { x: 185, y: 460 },
                Tools: { x: 415, y: 18 },
                'Core CS': { x: 430, y: 490 },
              }).map(([label, pos]) => (
                <text key={label} x={pos.x} y={pos.y} textAnchor="middle"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', fill: 'var(--text-dim)', letterSpacing: '0.1em', userSelect: 'none' }}>
                  {label.toUpperCase()}
                </text>
              ))}

              {/* Skill nodes */}
              {SKILLS_NODES.map((node) => {
                const isActive = activeId === node.id;
                const isConnected = connectedIds.includes(node.id);
                const isDimmed = activeId && !isActive && !isConnected;
                return (
                  <SkillNode
                    key={node.id}
                    node={node}
                    isActive={isActive}
                    isConnected={isConnected}
                    isDimmed={isDimmed}
                    onClick={handleClick}
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Detail panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="os-card"
                  style={{ padding: '1.5rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{activeNode.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {activeNode.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em',
                        color: SKILL_CATEGORIES[activeNode.category]?.color,
                        marginTop: '0.15rem',
                      }}>
                        {SKILL_CATEGORIES[activeNode.category]?.label?.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Experience level */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                      PROFICIENCY
                    </div>
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} style={{
                          flex: 1, height: '4px', borderRadius: '2px',
                          background: i < activeNode.level
                            ? SKILL_CATEGORIES[activeNode.category]?.color || 'var(--emerald)'
                            : 'var(--border)',
                          transition: 'background 0.3s',
                        }} />
                      ))}
                    </div>
                  </div>

                  {/* Projects using this skill */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                      USED IN
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {activeNode.projects.map((p) => (
                        <div key={p} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                          color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem',
                        }}>
                          <span style={{ color: SKILL_CATEGORIES[activeNode.category]?.color || 'var(--emerald)' }}>›</span>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connected skills */}
                  {connectedIds.length > 0 && (
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                        CONNECTS TO
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {connectedIds.map((cid) => {
                          const cn = SKILLS_NODES.find((n) => n.id === cid);
                          return cn ? (
                            <button
                              key={cid}
                              onClick={() => handleClick(cn)}
                              style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                                color: SKILL_CATEGORIES[cn.category]?.color || 'var(--text-secondary)',
                                background: `${SKILL_CATEGORIES[cn.category]?.color}10` || 'var(--bg-elevated)',
                                border: `1px solid ${SKILL_CATEGORIES[cn.category]?.color}30` || 'var(--border)',
                                borderRadius: '6px', padding: '0.2rem 0.55rem',
                                transition: 'all 0.2s',
                              }}
                            >
                              {cn.label}
                            </button>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="os-card"
                  style={{ padding: '1.5rem', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem', opacity: 0.5 }}>⬡</div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    Select a node to explore proficiency, connected skills, and related projects.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Summary stats */}
            <div className="os-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                ECOSYSTEM STATS
              </div>
              {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => {
                const count = SKILLS_NODES.filter((n) => n.category === key).length;
                return (
                  <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.color }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{cat.label}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: cat.color }}>{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
