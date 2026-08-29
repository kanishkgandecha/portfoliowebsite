import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, FlaskConical } from 'lucide-react';

// ── Reusable in-modal case-study block ──────────────────────────────────────
// Renders the richer "engineering case study" content stored on a project's
// `caseStudy` field. Only projects that define this field render anything —
// all other project modals are unaffected.

const sectionTitleStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.9rem',
  fontWeight: 650,
  color: 'var(--text-primary)',
  marginBottom: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
};

const cardStyle = {
  background: 'var(--bg-surface-2)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  padding: '1rem 1.1rem',
};

function Achievements({ achievements, accentColor }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '0.75rem',
      }}
    >
      {achievements.map((a) => (
        <div key={a.label} style={{ ...cardStyle, textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: accentColor || 'var(--accent)',
              lineHeight: 1.1,
            }}
          >
            {a.value}
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.4 }}>
            {a.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectCaseStudy({ project }) {
  const [expanded, setExpanded] = useState(false);
  const cs = project?.caseStudy;
  const contentId = `case-study-${project?.id}`;

  if (!cs) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Positioning + status */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            color: project.accentColor,
            background: `${project.accentColor}15`,
            border: `1px solid ${project.accentColor}30`,
            padding: '0.25rem 0.65rem',
            borderRadius: '100px',
          }}
        >
          {cs.positioning}
        </span>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{cs.status}</span>
      </div>

      {/* Intro */}
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{cs.intro}</p>

      {/* Achievement / metric cards */}
      <Achievements achievements={cs.achievements} accentColor={project.accentColor} />

      {/* Progressive disclosure toggle */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="btn btn-ghost"
        style={{
          alignSelf: 'flex-start',
          fontSize: '0.82rem',
          padding: '0.55rem 1.1rem',
        }}
      >
        <span>{expanded ? 'Hide full engineering case study' : 'View full engineering case study'}</span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-flex' }}
        >
          <ChevronDown size={15} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={contentId}
            key="case-study-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '0.25rem' }}>
              {/* Problem */}
              <div>
                <h4 style={sectionTitleStyle}>Problem</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  {cs.problem.summary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cs.problem.challenges.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-surface-2)',
                        border: '1px solid var(--border)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div>
                <h4 style={sectionTitleStyle}>Solution</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {cs.solution.summary}
                </p>
              </div>

              {/* Major features grid */}
              <div>
                <h4 style={sectionTitleStyle}>Major Features</h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.75rem',
                  }}
                >
                  {cs.featureGroups.map((group) => (
                    <div key={group.title} style={cardStyle}>
                      <div
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          color: project.accentColor,
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {group.title}
                      </div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {group.items.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              fontSize: '0.8rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5,
                              display: 'flex',
                              gap: '0.4rem',
                            }}
                          >
                            <span style={{ color: project.accentColor, flexShrink: 0 }}>·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h4 style={sectionTitleStyle}>Architecture</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  {cs.architecture.summary}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.1rem' }}>
                  {cs.architecture.points.map((p, idx) => (
                    <li key={idx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Difficult engineering problems (war-story format) or lighter engineering notes */}
              {cs.engineeringStories && (
                <div>
                  <h4 style={sectionTitleStyle}>Difficult Engineering Problems</h4>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '0.75rem',
                    }}
                  >
                    {cs.engineeringStories.map((story, idx) => (
                      <div key={story.title} style={cardStyle}>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 650,
                            color: 'var(--text-primary)',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {idx + 1}. {story.title}
                        </div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.4rem' }}>
                          <strong style={{ color: 'var(--text-tertiary)', fontWeight: 600 }}>Problem — </strong>
                          {story.problem}
                        </p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          <strong style={{ color: project.accentColor, fontWeight: 600 }}>Fix — </strong>
                          {story.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {cs.engineeringNotes && (
                <div>
                  <h4 style={sectionTitleStyle}>Engineering Highlights</h4>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '0.75rem',
                    }}
                  >
                    {cs.engineeringNotes.map((note) => (
                      <div key={note.title} style={cardStyle}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          {note.title}
                        </div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          {note.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testing & reliability — only when verified test data exists */}
              {cs.testing && (
                <div>
                  <h4 style={sectionTitleStyle}>
                    <FlaskConical size={14} style={{ color: project.accentColor }} />
                    <span>Testing & Reliability</span>
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                    {cs.testing.summary}
                  </p>
                  <div style={{ ...cardStyle, marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.74rem', fontWeight: 650, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      Real-device migration validation
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {cs.testing.deviceValidation.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.4rem' }}>
                          <span style={{ color: project.accentColor }}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {cs.testing.disclaimer}
                  </p>
                </div>
              )}

              {/* Privacy & safety, or the lighter Security & Reliability variant */}
              {(cs.privacy || cs.security) && (
                <div>
                  <h4 style={sectionTitleStyle}>
                    <ShieldCheck size={14} style={{ color: project.accentColor }} />
                    <span>{cs.privacy ? 'Privacy & Safety' : 'Security & Reliability'}</span>
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem' }}>
                    {(cs.privacy || cs.security).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: project.accentColor, marginTop: '1px' }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcome */}
              <div>
                <h4 style={sectionTitleStyle}>Outcome</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{cs.outcome}</p>
              </div>

              {/* Tech stack, grouped */}
              <div>
                <h4 style={sectionTitleStyle}>Technology Stack</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cs.techStackGroups.map((group) => (
                    <div key={group.category}>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', marginBottom: '0.35rem' }}>
                        {group.category}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {group.items.map((item) => (
                          <span
                            key={item}
                            style={{
                              fontSize: '0.72rem',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--text-secondary)',
                              background: 'var(--bg-surface-2)',
                              border: '1px solid var(--border)',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '6px',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
