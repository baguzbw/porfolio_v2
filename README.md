# Bagus Brang Wicaksono — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `data/profile.ts` — all content (name, experience, education, skills, achievements, projects). Edit this file to update the site.
- `app/` — 4 routes: Home (`/`), About (`/about`), Achievements (`/achievements`), Projects (`/projects`).
- `components/` — Sidebar nav, mobile nav drawer, theme toggle, cards, filters.

## Notes / things to fill in yourself

- `data/profile.ts` → `links.github`: placeholder handle, confirm your real GitHub URL.
- No profile photo included — sidebar uses initials on a gradient circle. To use a real photo: drop it in `public/`, then in `components/Sidebar.tsx` replace the initials `<div>` with a `next/image` `<Image>` pointing at it.
- Achievement `issued` dates are only filled in where known — add exact issue dates in `data/profile.ts` if you want them shown.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS (blue accent theme, `tailwind.config.ts`)
- next-themes (dark/light toggle, defaults to dark)
- lucide-react (icons)
- Plus Jakarta Sans (via `next/font/google`)

## Deploy

Push to GitHub, import into Vercel, no config needed.
