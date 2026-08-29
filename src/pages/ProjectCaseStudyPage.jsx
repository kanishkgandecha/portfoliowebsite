import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS, SITE } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import {
  ProjectHero, ProjectBoundaries, ProjectMetrics, ProjectProblemSolution, ProjectFeatures,
  ProjectArchitecture, ProjectChallenges, ProjectTesting, ProjectSecurity, ProjectOutcome,
  ProjectTechnologyStack, ProjectLinks, ProjectBackFooter,
} from '../components/project/ProjectSections';

// One reusable template for every project. A project's `caseStudy` object
// (when present) supplies richer, grouped content; projects without one
// still render through the exact same components using their base fields
// (description/problem/solution/architecture/highlights/tags/metrics).
// Sections with no verified data for a given project simply don't render —
// nothing is invented to fill a gap.
function buildModel(project) {
  const cs = project.caseStudy;

  return {
    intro: cs?.intro ?? project.description,
    boundaries: cs?.boundaries ?? null,
    metrics: cs?.achievements ?? project.metrics ?? [],
    problem: cs?.problem ?? (project.problem ? { summary: project.problem } : null),
    solution: cs?.solution ?? (project.solution ? { summary: project.solution } : null),
    featureGroups: cs?.featureGroups ?? null,
    highlights: cs?.featureGroups ? null : (project.highlights ?? null),
    archSummary: cs?.architecture?.summary ?? null,
    archItems: cs?.architecture?.points ?? project.architecture ?? null,
    engineeringStories: cs?.engineeringStories ?? null,
    testing: cs?.testing ?? null,
    securityItems: cs?.privacy ?? cs?.security ?? null,
    securityTitle: cs?.privacy ? 'Privacy & Safety' : 'Security & Reliability',
    outcome: cs?.outcome ?? null,
    techGroups: cs?.techStackGroups ?? null,
    techFlat: cs?.techStackGroups ? null : (project.tags ?? null),
  };
}

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.id === slug);

  useDocumentMeta({
    title: project ? `${project.title} | Kanishk Gandecha` : 'Project Not Found | Kanishk Gandecha',
    description: project
      ? (project.caseStudy?.intro ?? project.description)
      : 'The requested project could not be found.',
    canonical: `${SITE.url}/projects/${slug}`,
  });

  if (!project) {
    return (
      <main>
        <section style={{ padding: 'calc(var(--nav-height) + 6rem) 0 6rem', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Project not found
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              There's no project at this address.
            </p>
            <Link to="/#projects" className="btn btn-primary" style={{ minHeight: '44px' }}>
              Back to Selected Work
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const m = buildModel(project);

  return (
    <main>
      <ProjectHero project={project} intro={m.intro} />
      <ProjectBoundaries boundaries={m.boundaries} />
      <ProjectMetrics metrics={m.metrics} accentColor={project.accentColor} />
      <ProjectProblemSolution problem={m.problem} solution={m.solution} />
      <ProjectFeatures groups={m.featureGroups} flat={m.highlights} accentColor={project.accentColor} />
      <ProjectArchitecture summary={m.archSummary} items={m.archItems} />
      <ProjectChallenges stories={m.engineeringStories} accentColor={project.accentColor} />
      <ProjectTesting testing={m.testing} accentColor={project.accentColor} />
      <ProjectSecurity items={m.securityItems} title={m.securityTitle} accentColor={project.accentColor} />
      <ProjectOutcome outcome={m.outcome} />
      <ProjectTechnologyStack groups={m.techGroups} flat={m.techFlat} />
      <ProjectLinks project={project} />
      <ProjectBackFooter />
    </main>
  );
}
