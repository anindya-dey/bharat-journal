import sharp from "sharp";

const width = 1200;
const height = 630;
const navy = "#1d3557";
const saffron = "#d97706";
const paper = "#faf9f6";

const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${navy}"/>
      <stop offset="100%" stop-color="#101c2d"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <path d="M 830 520 Q 880 300 930 250 Q 1000 190 1130 170" stroke="${saffron}" stroke-width="5" fill="none" opacity="0.9"/>
  <text x="80" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700" fill="${paper}">Then. Now.</text>
  <text x="80" y="420" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700" fill="${saffron}">Next.</text>
  <text x="84" y="480" font-family="Verdana, sans-serif" font-size="30" fill="${paper}" opacity="0.75">Bharat Journal — a record of progress and possibilities</text>
  <text x="84" y="540" font-family="Verdana, sans-serif" font-size="22" fill="${paper}" opacity="0.5">bharat-journal.anindyadey.com</text>
</svg>`;

export async function GET() {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
