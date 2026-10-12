import { renderOgPng, OG_HEADERS } from "../../lib/og";

const THEMES: Record<string, { title: string; accent: string; kicker: string }> = {
  then: {
    title: "How we got here",
    accent: "#ea580c",
    kicker: "THEN · THE TIMELINE",
  },
  now: {
    title: "Where we stand",
    accent: "#d97706",
    kicker: "NOW · DATA STORIES",
  },
  next: {
    title: "Where we could go",
    accent: "#16a34a",
    kicker: "NEXT · IDEAS",
  },
  about: {
    title: "About",
    accent: "#ea580c",
    kicker: "ABOUT · METHOD & SOURCES",
  },
};

export const GET = async ({ params }: { params: { theme: string } }) => {
  const t = THEMES[params.theme] ?? THEMES.about;
  const png = await renderOgPng(t.title, t.accent, t.kicker);
  return new Response(new Uint8Array(png), { headers: OG_HEADERS });
};

export function getStaticPaths() {
  return Object.keys(THEMES).map((theme) => ({ params: { theme } }));
}
