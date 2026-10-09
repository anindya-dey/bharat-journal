import sharp from "sharp";

const SVG = (size: number, color: string) => `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.2)}" fill="${color}"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
    font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(size * 0.62)}"
    font-weight="700" fill="#faf9f6">भ</text>
</svg>`;

export async function GET({ params }: { params: { size: string } }) {
  const size = Number(params.size) || 512;
  const png = await sharp(Buffer.from(SVG(size, "#1d3557"))).png().toBuffer();
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export function getStaticPaths() {
  return [16, 32, 180, 192, 512].map((size) => ({
    params: { size: String(size) },
  }));
}
