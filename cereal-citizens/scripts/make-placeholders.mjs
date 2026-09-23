// Creates neutral, correctly sized placeholders for any missing image in
// public/images. Real artwork/photography dropped in with the same filename
// is never overwritten.
import { existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const dir = join(process.cwd(), "public/images");
const images = [
  ["rice-ebys-box.png", 130, 190],
  ["lorne-pops-box.png", 139, 189],
  ["hero-vancouver.jpg", 1024, 679],
  ["xl-vancouver.jpg", 675, 296],
  ["street-01.jpg", 197, 285],
  ["street-02.jpg", 208, 285],
  ["street-03.jpg", 200, 285],
  ["street-04.jpg", 195, 285],
];

for (const [name, w, h] of images) {
  const out = join(dir, name);
  if (existsSync(out)) continue;
  const fs = Math.round(Math.min(w, h) / 14);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="100%" height="100%" fill="#D9D6CF"/>
    <rect x="${fs / 2}" y="${fs / 2}" width="${w - fs}" height="${h - fs}" fill="none" stroke="#B9B5AC" stroke-width="${Math.max(2, fs / 10)}" stroke-dasharray="${fs / 2} ${fs / 3}"/>
    <text x="50%" y="50%" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="${fs}" fill="#6E6A62">${name}</text>
    <text x="50%" y="${h / 2 + fs * 1.4}" text-anchor="middle" font-family="DejaVu Sans, sans-serif" font-size="${fs * 0.6}" fill="#8C887F">${w} × ${h} placeholder</text>
  </svg>`;
  const img = sharp(Buffer.from(svg));
  await (name.endsWith(".png") ? img.png() : img.jpeg({ quality: 82 })).toFile(out);
  console.log("created", name);
}
