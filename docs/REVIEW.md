# Bharat Journal — Project Review

_Reviewed: October 2026 · 53 pages · 56 milestones · 16 visualisations · 30 ideas_

A thorough, prioritised review of the site across correctness, UI, UX, content,
motion, accessibility, SEO, performance and architecture — with concrete
recommendations to add, change, or delete.

Legend: **P0** = fix now · **P1** = high value · **P2** = nice to have

---

## Snapshot

| | |
|---|---|
| Framework | Astro 7 + MDX content collections |
| Styling | Tailwind CSS 4 (single `global.css` theme) |
| Charts | Observable Plot (server-rendered SVG) + custom hover tooltips |
| Search | Pagefind + Cmd/Ctrl-K command palette |
| Fonts | Self-hosted Quicksand + JetBrains Mono (8 woff2) |
| Themes | Light (orange + green) · Dark (cyberpunk neon) |
| Deploy | Not yet — repo at `github.com/anindya-dey/bharat-journal` |

---

## P0 — Correctness & dead code

> **Status: applied.** Items 1, 2 and 4 below were implemented (deleted
> `Callout.astro` + `Sparkline.astro`, pruned the unused schema fields and
> their frontmatter, and added global `:focus-visible` styles).

1. **Unused components.** `src/components/Callout.astro` and
   `src/components/Sparkline.astro` have **zero imports**. Delete both.
2. **Unused schema fields.** `src/content.config.ts` still declares
   `sparkline`, `statusNote`, and `relatedIdeas` — none are read anywhere
   (sparklines were removed from `/now`). Remove them to keep the schema honest.
3. **Thin/edge data.** `now/aadhaar.mdx` charts only 3 milestone points; label
   it clearly or source a fuller series. `now/food-production.mdx` uses the
   World Bank food-production **index** as a proxy — keep the caveat visible.
4. **No global focus styles.** Only the command palette handles focus. Add a
   `:focus-visible` ring for links/buttons/nav so keyboard users can see focus.

## P1 — High value

> **Status: applied.** Items 5–9 below were implemented (Vercel Analytics
> installed + deploy docs; per-theme OG images for then/now/next/about with
> a shared renderer; `/next` gained a status filter and sort; the `/now` index
> now shows related-idea chips; article pages gained `datePublished` JSON-LD
> and a "raise a correction" link).

5. **Deploy it.** Import the repo to Vercel and point
   `bharat-journal.anindyadey.com` at it (the `site` URL and sitemap already
   assume that domain).
6. **Per-page OG images.** `og-image.ts` is static; generate per-page cards
   (title + accent) for better social sharing.
7. **Analytics.** Add Vercel Analytics or Plausible to see what readers use.
8. **`/now` cross-links.** Cards link to ideas only inside the page; add
   "related ideas" chips on the `/now` index too.
9. **`/next` status filter.** Domain filters exist; add a status filter
   (proposed / in progress / achieved) and a sort (recent, A–Z).

## P2 — Polish

> **Status: applied.** Items 10–14 below were implemented (a year-jump
> scrubber on `/then`; an end-value bubble on every line chart + a line
> draw-on animation; count-up numbers on stat callouts; a `/schemes` index
> page with a central `src/data/schemes.ts` registry; a light
> `targetChannel` — "who could act" — field on all 30 ideas; empty states
> and `aria-live` filter counts on `/then` and `/next`; a first-time-visitor
> hint on the homepage).

10. **`/then` year jump.** The era nav jumps by era; add a year scrubber or
    search-in-timeline for the 56 milestones.
11. **Chart legends/end labels.** Add a value bubble at the last data point
    (the UPI-style annotation is the best-looking part — apply everywhere).
12. **Count-up numbers** on stat callouts and animated line draw-on (respect
    reduced motion).
13. **A "Schemes" index page** listing every scheme referenced, grouped by
    theme, with links (ties into the scheme-links work already done).
14. **Per-idea `targetChannel`** — re-add a light "who could act on this"
    field, distinct from submission tracking.

---

## UI

- **Two very different themes.** Light (orange/green) and dark (neon cyberpunk)
  share structure but read as different brands. Acceptable, but consider a
  shared accent so charts/CTAs feel related across themes.
- **Typography.** Quicksand everywhere is friendly; a display face (serif or a
  geometric like Sora) for headings would add editorial contrast.
- **Heading gradient.** The global `main h1, h2` gradient is broad — great on
  page titles, but watch it doesn't feel repetitive on many section headings.
- **Card hover.** Consistent lift; good. Add a subtle border-tint on hover for
  extra affordance.
- **Logo.** Tricolor gradient reads well; the compass on the tricolor is a nice
  brand mark. Keep.
- **Navbar.** Now has a centered flag; verify spacing at `md` widths where the
  links, flag, and logo are all visible.

## UX

- **Onboarding.** A first-time visitor gets no "start here" beyond the hero.
  Consider a one-line "How to read this" or a 3-step intro.
- **Detail pages** have breadcrumbs, related links and a "history behind it"
  block — good. Consider a "was this useful / report a correction" footer link
  on every article.
- **Search.** Palette + `/search` page both exist. Consider surfacing recent
  searches or popular pages when the query is empty.
- **Back-to-top, reading progress, scroll reveal** are all in place.
- **Empty states.** Filtered views that hide everything could show "no matches".

## Content

- **Voice is strong** — plain facts, "Where I saw it / What's missing / What
  India already has / The proposal or Already in motion". Keep.
- **Timeline** ends at 2014 by design; the rationale is stated. Good.
- **Scheme links** are inline and deduped. Consider a central `schemes.ts`
  registry so names/URLs stay consistent (and power a Schemes index).
- **Corrections** are promised; add a lightweight per-page "last updated" and a
  changelog for transparency.
- **Cite more primary sources** where possible (a few `now` pages lean on
  Wikipedia-compiled figures — fine, but primary where available is stronger).

## Animations & motion

- Present: scroll-reveal on card grids, chart fade-up, hover transitions.
- Missing: line draw-on, number count-up, and page/route transitions.
- **Reduced-motion is respected** globally — keep that for any additions.

## Accessibility

- Present: `aria-current` (nav), `aria-pressed` (filters), `sr-only` chart
  summaries, `<title>` in chart SVGs, reduced-motion.
- **Add:** `:focus-visible` styles; `aria-live` for filter result counts;
  ensure the centered-flag link has a clear label (it does).
- **Contrast:** verify muted `fog` and `text-ink/60` labels meet AA in both
  themes; the dark fog on near-black is the one to watch.

## SEO / metadata

- Present: canonical, OG + Twitter cards, JSON-LD, sitemap, RSS, robots.
- **Add:** per-page OG images; `Article` JSON-LD with dates on detail pages
  (partly there); `hreflang` if you ever add Hindi.

## Performance

- `dist` ≈ 3.6 MB (224 KB fonts, ~948 KB Pagefind index). Self-hosted fonts
  are good; consider **subsetting** to Latin + Devanagari only.
- Charts are inline SVG — fast, no runtime JS for rendering (only tooltips).
- No images yet; if you add any, use Astro's `<Image>`.
- Add long-lived cache headers on Vercel (fonts/icons are already immutable).

## Architecture / maintainability

- Componentisation is good (`Container`, `PageHeader`, `Prose`, `NextCTA`,
  `StatCallout`, `StatusBadge`, `SourceList`, `Breadcrumb`, charts).
- `charts.ts` helper is light; good.
- **CI now runs on push/PR** (`.github/workflows/ci.yml`: lint + build).
- **No unit tests.** CI covers build integrity; content correctness is
  guarded by the Zod schema (missing sources fail the build).

## Deletions

- `src/components/Callout.astro`, `src/components/Sparkline.astro`
- Schema fields: `sparkline`, `statusNote`, `relatedIdeas` (or wire them up)
- Any now-unused CSS (e.g., old `.tricolor-*` remnants, if any)

## Suggested order

1. **P0** — delete dead code, prune schema, add focus styles
2. **P1** — deploy (Vercel + DNS), per-page OG, analytics, `/next` status filter
3. **P2** — chart end-labels, count-ups, Schemes index, year scrubber
4. **Continuous** — CI on push; keep sources primary and corrections visible

---

_This report is a recommendation set, not a mandate. Each item is independently
shippable._
