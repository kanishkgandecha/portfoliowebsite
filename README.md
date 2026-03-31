# Kanishk Gandecha — Personal Portfolio

A modern, responsive personal portfolio website built with **React + Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

## 🚀 Quick Start

```bash
# 1. Navigate to the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Tech Stack

| Technology     | Purpose                |
|----------------|------------------------|
| React 19       | UI framework           |
| Vite 8         | Build tool             |
| Tailwind CSS 4 | Styling                |
| Framer Motion  | Animations             |
| Lucide React   | Icons                  |

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Replace with your actual resume
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Section.jsx
│   │       └── SectionTitle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Features

- ✅ Dark / Light mode toggle with `localStorage` persistence
- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Framer Motion page animations
- ✅ Typewriter effect in Hero
- ✅ Animated skill progress bars
- ✅ Project cards with hover effects
- ✅ Contact form UI (no backend)
- ✅ SEO meta tags

## 📦 Build for Production

```bash
npm run build
```

Built files go to the `dist/` folder.

## 🌐 Deploy

This portfolio can be deployed to:
- [Vercel](https://vercel.com) — `vercel deploy`
- [Netlify](https://netlify.com) — drag & drop `dist/`
- [GitHub Pages](https://pages.github.com)

## 💰 Indian Currency Note

> To display Indian currency (₹) anywhere in the project, use the `₹` symbol directly in JSX strings (e.g., `₹10,000`) instead of `$`. No code changes needed beyond updating string values in the relevant component.

## ✏️ Customization

- **Projects**: Edit `src/components/sections/Projects.jsx`
- **Resume**: Replace `public/resume.pdf` with your actual resume PDF
- **Colors**: Modify CSS custom properties in `src/index.css` under `:root`
- **Personal info**: Update `About.jsx`, `Contact.jsx`, and `Hero.jsx`

---

Made with ❤️ by Kanishk Gandecha
