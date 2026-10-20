# Ideas Backlog

Raw ideas that haven't been written up as full `/next` proposals yet. This is
a holding pen, not a commitment — an idea here needs the full anatomy (where
it was seen, what's missing, what India already has, the ask) and a real fact
check before it becomes a published page under `src/content/next/`.

When an idea is drafted into a proposal, move it from this file into the
site and delete the entry here.

## From the Chakravyuh / security-grid review (2026-10-20)

- **Sagar Chakravyuh** — a maritime-specific sub-doctrine explicitly fusing
  the unmanned naval fleet proposal, undersea cable-repair drones and
  deep-ocean capability into one named layer, the way Mission Sudarshan
  Chakra named the air layer. Would sit alongside the Chakravyuh grid
  proposal as its naval component.
- **A vault succession protocol** — the governance/legal layer missing from
  the national vault network's redundancy design: who is authorised to open
  a vault or activate the continuity-of-government bunker in a real crisis,
  and how that chain of authority itself survives if the usual decision-makers
  can't be reached.
- **Heritage digital-twin scanning** — photogrammetry-scan every ASI
  monument and store the 3D record in the national vault network, linking
  the tourism proposals, CISF's existing monument-security mandate, and the
  vault for the first time.
- **A Chakravyuh command node in every satellite capital** — making the
  satellite-capitals proposal physically load-bearing for the security grid,
  not just an administrative one.
- **Critical-infrastructure SCADA security** — a dedicated layer for
  power-grid and water-system control systems, the economic-corridor gap
  the Chakravyuh doctrine names but doesn't yet have its own fielded
  proposal for.

## Overlap review (2026-10-20)

A full review of all 96 `/next` proposals found six pairs/trios with
substantial overlap — same target ministry desk, same underlying ask —
and merged them, bringing the count to 88:

- `tri-service-space-command` + `counter-space-interceptor-fleet` +
  `space-situational-awareness` → `military-space-command`
- `human-lunar-landing-roadmap` + `lunar-isru-resource-prospecting` +
  `lunar-colony-isru-city` → `lunar-programme-roadmap` (one proposal, three
  phases)
- `unmanned-underwater-vehicles` + `naval-unmanned-surface-vessels` →
  `unmanned-naval-fleet`
- `sixth-generation-fighter` + `loyal-wingman-drone-swarms` →
  `next-generation-air-combat`
- `military-exoskeletons` + `autonomous-border-sentry-robots` →
  `high-altitude-soldier-technology`
- `urban-air-mobility` + `air-taxi-intercity-corridors` →
  `urban-air-mobility` (kept the original slug, now covers both tiers)

Clusters that looked adjacent but were **not** merged, because each has a
distinct target channel and a separately actionable ask: the 5
tourism-experience proposals, the 7 agriculture proposals, the
vault/continuity-bunker/underground-research-cities trio, and the
strategic-resource-independence doctrine plus its two specific case
studies (rare earths, API precursors).

## Format notes (for later ideas)

- Check `src/content.config.ts` for the required frontmatter before writing:
  `title`, `description`, `origin`, `status`, `themes` (array, reuse existing
  vocabulary where possible — see `src/lib/domains.ts` for how themes map to
  the site's seven/eight display categories), `targetChannel`, `updated`.
- Before adding a new idea, check it isn't substantial overlap with an
  existing one — see the overlap review above, and re-run it periodically
  as the backlog grows.
