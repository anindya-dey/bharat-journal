import { renderOgPng, OG_HEADERS } from "../lib/og";

export const GET = async () => {
  const png = await renderOgPng(
    "Bharat Journal",
    "#ea580c",
    "THEN · NOW · NEXT",
  );
  return new Response(new Uint8Array(png), { headers: OG_HEADERS });
};
