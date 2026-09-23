// Usage: node scripts/screenshot.mjs [outDir] [widths...]
// Scrolls through the page so lazy images load, then captures full-page shots.
import { chromium } from "playwright";

const out = process.argv[2] ?? "screenshots";
const widths = process.argv.slice(3).map(Number);
const base = process.env.BASE_URL ?? "http://localhost:3000";

// Uses the preinstalled Chromium when PW_CHROMIUM is set (e.g. /opt/pw-browsers/chromium).
const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
for (const width of widths.length ? widths : [1024, 1440, 820, 390]) {
  const page = await browser.newPage({ viewport: { width, height: width === 1024 ? 1536 : 900 } });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? null : new Promise((r) => img.addEventListener("load", r, { once: true })),
      ),
    );
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => document.fonts.ready);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  await page.screenshot({ path: `${out}/page-${width}.png`, fullPage: true });
  console.log(`${width}px: height ${h}, scrollWidth ${sw}`);
  await page.close();
}
await browser.close();
