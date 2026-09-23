// End-to-end cart check against a running server (BASE_URL, default :3000).
import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(base, { waitUntil: "networkidle" });

const badge = page.getByTestId("cart-badge").last(); // desktop header badge
const dialog = page.getByRole("dialog", { name: "Your Cart" });
const step = (msg) => console.log("✓", msg);

// Empty state
await page.getByRole("button", { name: /^Cart, 0 items/ }).last().click();
await dialog.getByText("Your bowl is empty.").waitFor();
assert.equal(await page.evaluate(() => document.activeElement?.getAttribute("aria-label")), "Close cart");
assert.equal(await page.evaluate(() => document.body.style.overflow), "hidden");
await page.keyboard.press("Escape");
await dialog.waitFor({ state: "detached" });
step("empty drawer, focus on close, scroll lock, Escape closes");

// Add 2 × Rice Eby's
const rice = page.getByTestId("product-rice-ebys");
await rice.getByRole("button", { name: /Increase quantity/ }).click();
assert.equal(await rice.locator("output").textContent(), "2");
await rice.getByRole("button", { name: "Add to Cart" }).click();
await dialog.waitFor();
assert.equal(await badge.textContent(), "2");
assert.equal(await rice.locator("output").textContent(), "1", "selector resets to 1");
assert.equal(await page.getByTestId("cart-subtotal").textContent(), "$70 CAD");
step("add 2 Rice Eby's → badge 2, subtotal $70, selector reset");

// Overlay click closes
await page.getByTestId("cart-overlay").click({ position: { x: 20, y: 20 } });
await dialog.waitFor({ state: "detached" });
step("overlay click closes");

// Add 1 × Lorne Pops
await page.getByTestId("product-lorne-pops").getByRole("button", { name: "Add to Cart" }).click();
await dialog.waitFor();
assert.equal(await badge.textContent(), "3");
assert.equal(await page.getByTestId("cart-subtotal").textContent(), "$105 CAD");
step("add Lorne Pops → badge 3, subtotal $105");

// Change quantities inside the drawer
const lorneLine = dialog.getByTestId("line-lorne-pops");
await lorneLine.getByRole("button", { name: /Increase quantity/ }).click();
await lorneLine.getByRole("button", { name: /Increase quantity/ }).click();
assert.equal(await lorneLine.getByTestId("line-total").textContent(), "$105 CAD");
const riceLine = dialog.getByTestId("line-rice-ebys");
await riceLine.getByRole("button", { name: /Decrease quantity/ }).click();
assert.equal(await badge.textContent(), "4");
assert.equal(await page.getByTestId("cart-subtotal").textContent(), "$140 CAD");
step("quantity +/- in drawer → badge 4, subtotal $140");

// Remove Rice Eby's
await riceLine.getByRole("button", { name: /Remove/ }).click();
await riceLine.waitFor({ state: "detached" });
assert.equal(await badge.textContent(), "3");
assert.equal(await page.getByTestId("cart-subtotal").textContent(), "$105 CAD");
step("remove Rice Eby's → badge 3, subtotal $105");

// Checkout placeholder
await dialog.getByRole("button", { name: "Checkout" }).click();
await dialog.getByText("Checkout opens soon. Your cart is saved on this page.").waitFor();
step("checkout shows placeholder message");

// Remove last line → empty state
await lorneLine.getByRole("button", { name: /Remove/ }).click();
await dialog.getByText("Your bowl is empty.").waitFor();
assert.equal(await badge.textContent(), "0");
step("remove last → empty state, badge 0");

// Anchors and the XL Boxes page
await page.keyboard.press("Escape");
await page.getByRole("link", { name: "Shop the Collection" }).first().click();
await page.waitForFunction(() => location.hash === "#collectibles");
step("Shop the Collection scrolls to #collectibles");

await page.getByTestId("product-rice-ebys").getByRole("button", { name: "Add to Cart" }).click();
await dialog.waitFor();
await page.keyboard.press("Escape");
await page.getByRole("link", { name: "Shop XL Boxes" }).first().click();
await page.waitForURL("**/xl-boxes");
await page.getByRole("heading", { level: 1, name: "XL Boxes" }).waitFor();
assert.equal(await badge.textContent(), "1", "cart survives the page change");
step("Shop XL Boxes opens /xl-boxes and keeps the cart");

const xl = page.getByTestId("product-lorne-pops-xl");
assert.equal(await xl.getByText("$75 CAD").count(), 1);
await xl.getByRole("button", { name: /Increase quantity/ }).click();
await xl.getByRole("button", { name: "Add to Cart" }).click();
await dialog.waitFor();
assert.equal(await badge.textContent(), "3");
assert.equal(await page.getByTestId("cart-subtotal").textContent(), "$185 CAD");
step("add 2 Lorne Pops XL at $75 → badge 3, subtotal $185");

await page.keyboard.press("Escape");
await page.getByRole("link", { name: "Shop" }).first().click();
await page.waitForURL((url) => url.pathname === "/" && url.hash === "#collectibles");
assert.equal(await badge.textContent(), "3");
step("header Shop link returns to the collection with the cart intact");

const navLabels = await page.locator('nav[aria-label="Main"]').last().getByRole("link").allTextContents();
assert.deepEqual(navLabels, ["Shop"]);
step("menu only shows Shop");

await browser.close();
console.log("All cart checks passed.");
