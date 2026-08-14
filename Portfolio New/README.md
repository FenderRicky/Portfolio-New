# Ricky Fender — Portfolio

Personal portfolio site for Vineeth Thadigotla, working under the name **Ricky Fender** — full-stack developer, UI/UX designer, and AI engineer.

An editorial, magazine-style single-page site: near-black canvas, red accents, oversized condensed type, asymmetric grid, numbered sections. Built to look like a design publication, not a SaaS template.

**Live:** _add your deployed URL here once live_

![Status](https://img.shields.io/badge/status-Live-33D17A?style=flat-square)

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **lucide-react** — icons
- Deployed on **Vercel**

No backend, no database, no auth — fully static.

## Features

- Single-scroll, numbered-section layout (About, Skills, Projects, Work History, Contact)
- Scroll-triggered reveal animations (`IntersectionObserver`), with a blur-to-sharp entrance
- Asymmetric hero with a portrait breaking out of the grid
- Fully responsive — custom breakpoints at 900px and 600px, not just a stacked fallback
- Animated mobile menu with staggered link entrance
- Cursor-following spotlight hover effect on project rows
- Infinite marquee of skill tags in the hero

## Project Structure

```
.
├── public/
│   └── image.png          # hero portrait — replace this to update the photo
├── src/
│   ├── App.tsx             # all page content & structure lives here
│   ├── index.css           # design system: colors, type, layout, animations
│   └── main.tsx             # React entry point
├── index.html
├── package.json
└── vite.config.ts
```

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs to `dist/`. Runs a TypeScript check (`tsc -b`) before building — the build will fail if there are type errors.

## Deploying on Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com](https://vercel.com).
3. Vercel auto-detects the Vite + React setup — no configuration or environment variables needed.
4. Deploy. Every push to `main` auto-redeploys.

## Updating Content

Everything — bio, skills, projects, work history, contact links — lives directly in `src/App.tsx` as plain data objects (`skills`, `projects`) and JSX near the top and bottom of the file. Edit the text or arrays directly; no CMS or data file to hunt through.

To change the hero photo, replace `public/image.png` with a new image of the same name (or update the `src` in the `<img>` tag in `App.tsx` if you rename it).

To change the color system or fonts, everything is defined as CSS variables at the top of `src/index.css`.

## Design System Reference

| Token | Value |
|---|---|
| Background | `#0A0A0A` |
| Primary accent (red) | `#C81E1E` |
| Secondary red | `#7A1414` |
| Body text | `#F5F5F5` |
| Muted text | `#8A8A8A` |
| Display font | Anton / Archivo Black / Syne Black |
| Body font | Inter / DM Sans |

---

Built by [Vineeth Thadigotla](https://github.com/FenderRicky) — Hyderabad, India.
