import sharp from "sharp";

export const OG_W = 1200;
export const OG_H = 630;

export const OG_HEADERS: Record<string, string> = {
  "Content-Type": "image/png",
  "Cache-Control": "public, max-age=31536000, immutable",
};

const escapeXml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function ogSvg(title: string, accent: string, kicker: string): string {
  const t = escapeXml(title);
  const k = escapeXml(kicker);
  return `<svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#16223a"/>
      <stop offset="100%" stop-color="#0a0714"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="#16a34a"/>
    </linearGradient>
  </defs>
  <rect width="${OG_W}" height="${OG_H}" fill="url(#bg)"/>
  <rect width="${OG_W}" height="10" fill="url(#accent)"/>
  <text x="84" y="150" font-family="Verdana, sans-serif" font-size="24" fill="#ff9933" opacity="0.9">${k}</text>
  <text x="84" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="104" font-weight="700" fill="#faf9f6">${t}</text>
  <text x="84" y="400" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" fill="url(#accent)">Then. Now. Next.</text>
  <text x="84" y="520" font-family="Verdana, sans-serif" font-size="26" fill="#faf9f6" opacity="0.6">A journal of progress and possibilities of Bharat</text>
  <text x="84" y="570" font-family="Verdana, sans-serif" font-size="22" fill="#faf9f6" opacity="0.4">bharat-journal.anindyadey.com</text>
</svg>`;
}

export async function renderOgPng(
  title: string,
  accent: string,
  kicker: string,
): Promise<Buffer> {
  return await sharp(Buffer.from(ogSvg(title, accent, kicker)))
    .png()
    .toBuffer();
}
