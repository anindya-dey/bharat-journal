# Bharat Journal

A public journal of India's progress and possibilities, in three linked views:

- **Then** — how we got here: a milestone timeline, 1947–2014
- **Now** — where we stand: data visualisations with cited sources
- **Next** — where we could go: proposals, tracked from submission to outcome

**Live site:** [bharat-journal.anindyadey.com](https://bharat-journal.anindyadey.com)

## Tech stack

- **Framework:** Astro + MDX content collections
- **Styling:** Tailwind CSS 4
- **Charts:** Observable Plot (rendered at build time)
- **Search:** Pagefind
- **Hosting:** Vercel

## Project structure

```
src/
├── components/       # UI components (layout, charts, badges)
├── layouts/          # Base page layout
├── pages/            # Routes: /then /now /next /about /search
├── content/          # MDX collections: ideas, visualisations
├── data/             # milestones dataset + site config
└── styles/           # Global CSS
```

## Content model

Three kinds of content, all versioned in git:

- **Milestones** (`src/data/milestones.ts`) — dated achievements 1947–2014,
  tagged by era and sector, rendered as a filterable timeline on `/then`
- **Visualisations** (`src/content/now/`) — one aspect per page: chart +
  story + sources + a "what's next" link. Every chart carries its dataset
  (JSON) with source URL and retrieved date. Build fails if a source is missing.
- **Ideas** (`src/content/next/`) — proposals with anatomy
  (where it was seen → what's missing → what India already has → proposal).
  Achieved ideas keep their URL and link to a related visualisation.

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at localhost:4321 |
| `pnpm build` | Production build + Pagefind index |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Astro check + TypeScript |

## Deployment (Vercel)

1. Push to `main` — CI (GitHub Actions) runs `pnpm lint` + `pnpm build`.
2. Import the repo on [Vercel](https://vercel.com) (framework preset: Astro).
   The build command is `pnpm build`; output directory `dist/`.
3. Add the custom domain `bharat-journal.anindyadey.com` in the project's
   domains settings, then add the CNAME it gives you to your DNS.
4. Vercel Analytics runs automatically (`@vercel/analytics` is installed).

## Data sources

All figures are sourced and dated; each visualisation lists its sources.
Where a figure could not be independently verified, it is marked as such.

## Corrections

This journal errs on the side of citability. If a figure or framing is wrong,
open an issue or PR — corrections are logged, not silently overwritten.
