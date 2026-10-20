/**
 * Domain taxonomy for /next ideas — coarse, human-browsable categories
 * (replaces the long tail of free-form theme chips).
 */
export const DOMAINS = [
  { id: "tourism-culture", label: "Tourism & Culture" },
  { id: "mobility-transport", label: "Mobility & Transport" },
  { id: "technology", label: "Technology" },
  { id: "space-science", label: "Space & Science" },
  { id: "energy-climate", label: "Energy & Climate" },
  { id: "human-development", label: "Human Development" },
  { id: "economy-industry", label: "Economy & Industry" },
  { id: "defence-security", label: "Defence & Security" },
] as const;

export type DomainId = (typeof DOMAINS)[number]["id"];

const THEME_TO_DOMAIN: Record<string, DomainId> = {
  // Tourism & Culture
  tourism: "tourism-culture",
  culture: "tourism-culture",
  sports: "tourism-culture",
  food: "tourism-culture",

  // Mobility & Transport
  mobility: "mobility-transport",
  transport: "mobility-transport",
  urban: "mobility-transport",
  "urban-renewal": "mobility-transport",
  infrastructure: "mobility-transport",

  // Technology
  technology: "technology",
  "advanced-tech": "technology",
  "digital-public-goods": "technology",
  connectivity: "technology",
  payments: "technology",
  security: "technology",
  research: "technology",

  // Space & Science
  "deep-space": "space-science",
  "deep-sea": "space-science",
  science: "space-science",

  // Energy & Climate
  energy: "energy-climate",
  climate: "energy-climate",
  water: "energy-climate",
  agriculture: "energy-climate",

  // Human Development
  education: "human-development",
  healthcare: "human-development",
  society: "human-development",
  youth: "human-development",
  rural: "human-development",

  // Economy & Industry
  industry: "economy-industry",
  manufacturing: "economy-industry",
  economy: "economy-industry",
  investment: "economy-industry",
  jobs: "economy-industry",
  livelihoods: "economy-industry",
  governance: "economy-industry",
  resilience: "economy-industry",

  // Defence & Security
  military: "defence-security",
  defence: "defence-security",
};

export function domainForIdea(themes: string[]): DomainId | "other" {
  for (const t of themes) {
    const d = THEME_TO_DOMAIN[t];
    if (d) return d;
  }
  return "other";
}
