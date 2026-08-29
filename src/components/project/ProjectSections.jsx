import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowUpRight, Layers, ShieldCheck, FlaskConical,
  AlertTriangle, CheckCircle2, ExternalLink,
} from 'lucide-react';

// ============================================================================
// Shared, data-driven project case-study components.
// One template, used identically by every project route (/projects/:slug) —
// a project can have more or fewer populated sections depending on how much
// verified information exists for it, but every project renders through the
// exact same components, styling, and section order.
// ============================================================================

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const cardStyle = {
  background: 'var(--bg-surface-solid)',
  border: '1px solid var(--border)',
  borderRadius: '16px',
  padding: '1.25rem 1.5rem',
  boxShadow: 'var(--shadow-sm)',
};

const sectionTitleStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.35rem, 3vw, 1.65rem)',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.55rem',
  letterSpacing: '-0.02em',
};

// Generic section wrapper — every case-study section uses this identical
// shell (id, optional icon, h2 title, top border, consistent padding).
export function ProjectSection({ id, icon: Icon, title, children }) {
  return (
    <section id={id} style={{ padding: '2.75rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <h2 style={sectionTitleStyle}>
          {Icon && <Icon size={22} style={{ color: 'var(--accent)' }} aria-hidden="true" />}
          <span>{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}

// Source / demo action row — reused near the top of ProjectHero and again
// in ProjectLinks at the bottom. Hidden entirely when no verified URL exists.
export function ProjectSourceActions({ project, size = 'md' }) {
  if (!project.github && !project.demo) return null;
  const pad = size === 'sm' ? '0.5rem 1rem' : '0.6rem 1.15rem';
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ padding: pad, fontSize: '0.85rem', minHeight: '44px' }}
          aria-label={`View ${project.title} source on GitHub`}
        >
          <GithubIcon size={15} />
          <span>View Source</span>
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ padding: pad, fontSize: '0.85rem', minHeight: '44px' }}
          aria-label={`${project.title} live demo`}
        >
          <ExternalLink size={15} />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  );
}

// ── 1 & 2: Project overview, status & category ──────────────────────────────
export function ProjectHero({ project, intro }) {
  return (
    <section style={{ padding: 'calc(var(--nav-height) + 2.5rem) 0 2.5rem', background: 'var(--bg-primary)' }}>
      <div className="container">
        <Link
          to="/#projects"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem',
            color: 'var(--text-secondary)', marginBottom: '1.75rem', textDecoration: 'none', minHeight: '44px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <ArrowLeft size={15} aria-hidden="true" />
          <span>Back to Selected Work</span>
        </Link>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
          <span style={{
            fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600,
            color: project.accentColor, background: `${project.accentColor}15`,
            border: `1px solid ${project.accentColor}30`, padding: '0.3rem 0.75rem', borderRadius: '100px',
          }}>
            {project.category}
          </span>
          {project.status && project.status !== 'Completed' && (
            <span style={{
              fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 650, color: '#FF9F0A',
              background: 'rgba(255,159,10,0.1)', border: '1px solid rgba(255,159,10,0.3)', padding: '0.2rem 0.6rem', borderRadius: '100px',
            }}>
              {project.status}
            </span>
          )}
          <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
            {project.year}{project.duration ? ` · ${project.duration}` : ''}
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700,
          color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.6rem',
        }}>
          {project.title} — {project.subtitle}
        </h1>

        <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '720px', marginBottom: '1.5rem' }}>
          {intro}
        </p>

        <ProjectSourceActions project={project} />
      </div>
    </section>
  );
}

// ── Optional boundaries / scope callout (renders only when supplied) ───────
export function ProjectBoundaries({ boundaries }) {
  if (!boundaries || boundaries.length === 0) return null;
  return (
    <div className="container" style={{ paddingBottom: '2.5rem' }}>
      <div style={{ ...cardStyle, borderColor: 'rgba(255, 159, 10, 0.3)', background: 'rgba(255, 159, 10, 0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
          <AlertTriangle size={16} style={{ color: '#FF9F0A' }} aria-hidden="true" />
          <span style={{ fontSize: '0.78rem', fontWeight: 650, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            Scope &amp; boundaries
          </span>
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {boundaries.map((b, idx) => (
            <li key={idx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-tertiary)', flexShrink: 0 }}>—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── 3: Verified metrics ─────────────────────────────────────────────────────
export function ProjectMetrics({ metrics, accentColor }) {
  if (!metrics || metrics.length === 0) return null;
  return (
    <div className="container" style={{ paddingBottom: '0.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.85rem' }}>
        {metrics.map((m) => (
          <div key={m.label} style={{ ...cardStyle, textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: accentColor, lineHeight: 1.1 }}>
              {m.value}
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.4 }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 4 & 5: Problem & Solution (stacks vertically on mobile) ────────────────
export function ProjectProblemSolution({ problem, solution }) {
  if (!problem && !solution) return null;
  return (
    <ProjectSection id="problem-solution" title="Problem & Solution">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="md-grid-2col">
        {problem && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#FF453A', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 650 }}>
              [ The Problem ]
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: problem.challenges ? '0.85rem' : 0 }}>
              {problem.summary}
            </p>
            {problem.challenges && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {problem.challenges.map((c) => (
                  <span key={c} style={{
                    fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)',
                    background: 'var(--bg-surface-2)', border: '1px solid var(--border)', padding: '0.2rem 0.55rem', borderRadius: '6px',
                  }}>
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        {solution && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 650 }}>
              [ The Solution ]
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {solution.summary}
            </p>
          </div>
        )}
      </div>
    </ProjectSection>
  );
}

// ── 6: Major features — grouped (richer data) or a flat checklist ──────────
export function ProjectFeatures({ groups, flat, accentColor }) {
  if ((!groups || groups.length === 0) && (!flat || flat.length === 0)) return null;
  return (
    <ProjectSection id="features" title="Major Features">
      {groups ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {groups.map((group) => (
            <div key={group.title} style={cardStyle}>
              <h3 style={{
                fontSize: '0.76rem', fontFamily: 'var(--font-mono)', fontWeight: 650, color: accentColor,
                textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.65rem',
              }}>
                {group.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {group.items.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: 'flex', gap: '0.45rem' }}>
                    <span style={{ color: accentColor, flexShrink: 0 }}>·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.55rem' }} className="md-grid-2col">
          {flat.map((h, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span style={{ color: accentColor, marginTop: '1px' }} aria-hidden="true">✓</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}
    </ProjectSection>
  );
}

// ── 7: Architecture — a summary + points list; points may be plain strings
// or {layer, detail} pairs depending on how much detail exists for the project.
export function ProjectArchitecture({ summary, items }) {
  if (!summary && (!items || items.length === 0)) return null;
  return (
    <ProjectSection id="architecture" icon={Layers} title="Architecture">
      {summary && (
        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '780px' }}>
          {summary}
        </p>
      )}
      {items && (
        typeof items[0] === 'string' ? (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1.2rem' }}>
            {items.map((p, idx) => (
              <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{p}</li>
            ))}
          </ul>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {items.map((arch, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {arch.layer}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', marginTop: '0.25rem', fontWeight: 500 }}>
                  {arch.detail}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </ProjectSection>
  );
}

// ── 8: Difficult engineering problems — omitted unless documented ─────────
export function ProjectChallenges({ stories, accentColor }) {
  if (!stories || stories.length === 0) return null;
  return (
    <ProjectSection id="engineering" title="Difficult Engineering Problems">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {stories.map((story, idx) => (
          <div key={story.title} style={cardStyle}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 650, color: 'var(--text-primary)', marginBottom: '0.55rem' }}>
              {idx + 1}. {story.title}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.45rem' }}>
              <strong style={{ color: 'var(--text-tertiary)', fontWeight: 650 }}>Problem — </strong>
              {story.problem}
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              <strong style={{ color: accentColor, fontWeight: 650 }}>Fix — </strong>
              {story.solution}
            </p>
          </div>
        ))}
      </div>
    </ProjectSection>
  );
}

// ── 9: Testing & reliability — omitted unless verified test data exists ───
export function ProjectTesting({ testing, accentColor }) {
  if (!testing) return null;
  return (
    <ProjectSection id="testing" icon={FlaskConical} title="Testing & Reliability">
      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '780px' }}>
        {testing.summary}
      </p>
      {testing.deviceValidation && (
        <div style={{ ...cardStyle, marginBottom: '1rem', maxWidth: '560px' }}>
          <h3 style={{ fontSize: '0.8rem', fontWeight: 650, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
            Real-device validation
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {testing.deviceValidation.map((item, idx) => (
              <li key={idx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.45rem' }}>
                <CheckCircle2 size={14} style={{ color: accentColor, marginTop: '3px', flexShrink: 0 }} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {testing.disclaimer && (
        <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, fontStyle: 'italic', maxWidth: '780px' }}>
          {testing.disclaimer}
        </p>
      )}
    </ProjectSection>
  );
}

// ── 10: Security, privacy, or safety — omitted unless relevant/verified ───
export function ProjectSecurity({ items, title, accentColor }) {
  if (!items || items.length === 0) return null;
  return (
    <ProjectSection id="security" icon={ShieldCheck} title={title}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }} className="md-grid-2col">
        {items.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: accentColor, marginTop: '1px' }} aria-hidden="true">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </ProjectSection>
  );
}

// ── 11: Outcome — omitted unless an explicit, verified statement exists ───
export function ProjectOutcome({ outcome }) {
  if (!outcome) return null;
  return (
    <ProjectSection id="outcome" title="Outcome">
      <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '780px' }}>
        {outcome}
      </p>
    </ProjectSection>
  );
}

// ── 12: Technology stack — grouped (richer data) or a flat chip cloud ─────
export function ProjectTechnologyStack({ groups, flat }) {
  if ((!groups || groups.length === 0) && (!flat || flat.length === 0)) return null;
  return (
    <ProjectSection id="stack" title="Technology Stack">
      {groups ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {groups.map((group) => (
            <div key={group.category}>
              <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', marginBottom: '0.4rem' }}>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {group.items.map((item) => (
                  <span key={item} style={{
                    fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)',
                    background: 'var(--bg-surface-2)', border: '1px solid var(--border)', padding: '0.25rem 0.6rem', borderRadius: '6px',
                    overflowWrap: 'anywhere',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
          {flat.map((item) => (
            <span key={item} style={{
              fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)',
              background: 'var(--bg-surface-2)', border: '1px solid var(--border)', padding: '0.25rem 0.6rem', borderRadius: '6px',
              overflowWrap: 'anywhere',
            }}>
              {item}
            </span>
          ))}
        </div>
      )}
    </ProjectSection>
  );
}

// ── 14: Project links — repeats source/demo near the bottom of the page ───
export function ProjectLinks({ project }) {
  if (!project.github && !project.demo) return null;
  return (
    <section style={{ padding: '3rem 0 1rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ ...sectionTitleStyle, marginBottom: 0 }}>Project Links</h2>
        <ProjectSourceActions project={project} />
      </div>
    </section>
  );
}

// ── Back-to-work footer CTA ──────────────────────────────────────────────
export function ProjectBackFooter() {
  return (
    <section style={{ padding: '2rem 0 4.5rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/#projects" className="btn btn-ghost" style={{ minHeight: '44px' }}>
          <ArrowLeft size={15} aria-hidden="true" />
          <span>Back to Selected Work</span>
        </Link>
      </div>
    </section>
  );
}
