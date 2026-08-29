# Kanishk Gandecha — Portfolio

Personal portfolio site for Kanishk Gandecha, a Full-Stack & Native iOS
software engineer. Built as a React + Vite single-page app with a small
client-side router for dedicated project case-study pages.

🔗 Live: https://kanishkgandecha.me

---

## Tech Stack

- **React 19** + **Vite** — app shell and build tooling
- **React Router 7** — client-side routing (`/` and `/projects/:slug`)
- **Framer Motion** — page/section animations, respects `prefers-reduced-motion`
  via `MotionConfig`
- **lucide-react** — icons
- Hand-rolled CSS design system (`src/index.css`) — CSS custom properties for
  light/dark theming, no CSS framework classes in markup (Tailwind is present
  as a dependency but unused in JSX)
- Plain JavaScript (no TypeScript, no test runner) — `npm run lint` (ESLint)
  and `npm run build` are the available checks

## Architecture

All content lives in one data file, `src/data/portfolio.js` — personal info,
projects, experience, education, certifications, tech stack, and command
palette actions. Components render from that data rather than hardcoding
copy, so most content edits only touch that file.

**Routes**
- `/` — the full single-page site (Hero → About → Experience → Projects →
  Engineering Notes → Skills → Contact), each section addressable by hash
  (e.g. `/#projects`)
- `/projects/:slug` — a dedicated case-study page per project, rendered
  through one shared template (`src/pages/ProjectCaseStudyPage.jsx` +
  `src/components/project/ProjectSections.jsx`). A project shows only the
  sections it has verified data for — nothing is invented to fill a gap.

`src/components/ScrollManager.jsx` owns scroll behavior on route changes:
resets to the top on a fresh route, or jumps straight to a `#section` hash
when navigating there from another page (e.g. a project page's "Back to
Selected Work" link returns to `/#projects`).

## Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf              # served at /resume.pdf
│   ├── images/                 # profile photo (multiple sizes/formats) + OG image
│   ├── sitemap.xml, robots.txt
│   └── _headers, _redirects    # Netlify-style config (see Deployment)
├── src/
│   ├── components/
│   │   ├── layout/              # Navbar, Footer
│   │   ├── sections/            # Hero, About, Experience, Projects, EngineeringNotes, Skills, Contact
│   │   ├── project/              # Shared case-study section components
│   │   ├── ui/                   # Button, Badge, GlassPanel, TechChip, SectionHeader, CommandPalette, AppWindow
│   │   └── ScrollManager.jsx
│   ├── pages/                    # HomePage, ProjectCaseStudyPage
│   ├── hooks/                    # useActiveSection, useDialogA11y, useDocumentMeta, useMousePosition, useScrollDirection
│   ├── data/portfolio.js         # single source of truth for all content
│   ├── App.jsx, main.jsx, index.css
├── index.html                    # SEO/meta tags, structured data, no-JS fallback
├── vercel.json                   # Vercel SPA rewrite + resume.pdf cache headers
└── vite.config.js
```

## Getting Started

```bash
git clone https://github.com/kanishkgandecha/portfoliowebsite.git
cd portfoliowebsite
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint
```

## Deployment

Static build (`npm run build` → `dist/`), deployable to any static host.
Both `vercel.json` and `public/_redirects` / `public/_headers` are included
so the SPA routes (`/projects/:slug`) work and `/resume.pdf` is served with
revalidation-friendly caching, whether the host is Vercel or Netlify.

## Contact

- Email: kanishk.gandecha09@gmail.com
- LinkedIn: https://www.linkedin.com/in/kanishk-gandecha/
- GitHub: https://github.com/kanishkgandecha

## License

MIT
