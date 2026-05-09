# 2026 Portfolio

A modern, production-ready developer portfolio built with React and Vite. The site presents featured projects with deep-dive **case study** pages, scroll-based reveals, and a cohesive dark UI tuned for clarity and polish.

## Highlights

- **Single-page home** with hero, about, featured work, experience, skills, and contact — designed for scannability and strong first impressions.
- **Project case studies** on dedicated routes (`/case-study/...`) with screenshots, problem/solution narrative, technical architecture, and outcomes.
- **Responsive layout** with Tailwind CSS utility-first styling, glass-style cards, and restrained motion for accessibility and performance.
- **Static deployment friendly** — built output is plain assets suitable for Netlify, Vercel, GitHub Pages, or any static host.

## Tech Stack

| Layer        | Choice |
| ------------ | ------ |
| Framework    | [React](https://react.dev/) 19 |
| Build tool   | [Vite](https://vite.dev/) 7 |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) 4 |
| Routing      | [React Router](https://reactrouter.com/) 7 |

## Getting Started

**Requirements:** [Node.js](https://nodejs.org/) 20+ recommended.

```bash
npm install
npm run dev
```

The dev server starts (default: `http://localhost:5173`). Edit files under `src/`; the app hot-reloads.

## Scripts

| Command        | Description |
| -------------- | ----------- |
| `npm run dev`  | Start Vite dev server with HMR |
| `npm run build`| Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
  components/     # Shared UI (Navbar, Hero, FeaturedProjects, …)
  pages/          # Route-level pages and case studies
  hooks/          # e.g. scroll reveal helpers
public/
  screenshots/    # Case study imagery (served as static assets)
```

Case study routes are registered in `src/App.jsx`.

## Build & Deploy

```bash
npm run build
```

Upload the `dist/` folder to your host, or connect the repository to a platform that runs `npm run build` and publishes `dist` (for example Netlify or Vercel using their Vite presets).

`public/_redirects` is included for SPA-style routing on hosts that support it (e.g. Netlify).

## License & Contact

Portfolio content and design are personal work intended for professional presentation. For collaboration or inquiries, use the contact section on the live site or reach out through your preferred professional channel.

---

Built by **Zain Zahab** · 2026
