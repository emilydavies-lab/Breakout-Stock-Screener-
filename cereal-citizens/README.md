# Cereal Citizens

*Same politics. A brighter B.C.* This is a one-page shop for limited-edition parody cereal collectibles (Rice Eby's, Lorne Pops) and their XL event boxes.

It's built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Fonts are self-hosted with `@fontsource`, so nothing is fetched from Google at build time. `reference.png` is the 1024 × 1536 design the page is built to match.

## Running it

```bash
cd cereal-citizens
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint
```

Visual and cart checks use Playwright against a running server. Set `PW_CHROMIUM` to use a Chromium that is already installed instead of downloading one.

```bash
npm run build && npm start &
npm run screenshots                 # full-page shots at 1024/1440/820/390 → ./screenshots
npm run test:cart                   # add, change qty, remove, subtotal, badge, drawer a11y
# e.g. PW_CHROMIUM=/opt/pw-browsers/chromium npm run test:cart
```

## Images

Put the files in `public/images/`. Each one is shown at this aspect ratio:

| File | Placeholder size | Used for |
| --- | --- | --- |
| `rice-ebys-box.png` | 800 × 1200 (2:3) | Blue box, product card + cart |
| `lorne-pops-box.png` | 800 × 1200 (2:3) | Yellow box, product card + cart |
| `hero-vancouver.jpg` | 2400 × 1592 (≈1.51:1) | Hero, full-bleed cover. On mobile it's cropped 4:5 and on tablet square, both toward the right |
| `xl-vancouver.jpg` | 2400 × 1052 (≈2.28:1) | XL Boxes, right 66%. 16:10 on mobile |
| `street-01.jpg` … `street-04.jpg` | 800 × 1140 (≈7:10) | Street gallery |

The files in the repo now are neutral placeholders, each labelled with its filename. To swap in real art, overwrite a file with the real one under the same name. `npm run placeholders` only creates files that are missing, so it never overwrites real art.

Box art is finished artwork. Always display it with `width`/`height` from `data/products.ts` and never crop, recolour or stretch it. If the real PNG has a different ratio, update `width`/`height` there. The card fixes the box's height and lets its width follow.

## Desktop scaling system

The reference is a 1024px-wide frame. From 1024px up:

```css
html { font-size: min(calc(100vw / 64), 26px); }
```

Every `lg:` measurement is written in `rem`, where **1rem = 16 reference px** (to convert, divide the reference pixel value by 16). The whole desktop layout therefore scales in proportion. At 1024 it lines up with the reference, at 1440 it is 1.406× larger, and it stops growing at 1664px, where it centres inside a `64rem` frame. Desktop elements are positioned absolutely on the reference grid inside each section. Section heights come to 1536px at 1024 wide.

Below 1024px the root font size is 16px, and tablet and mobile get their own flow layouts (stacked copy then photo, 1–2 column cards, a 2-column gallery).

`body { overflow-x: clip }` on desktop hides the few pixels a classic (non-overlay) scrollbar would otherwise push past the viewport, because `100vw` includes the scrollbar.

## Structure

```
app/            layout (fonts, CartProvider), page, globals.css (tokens + scaling)
components/     Header, Logo, Hero, FeatureIcons, CollectiblesSection, ProductCard,
                QuantitySelector, XLBoxesSection, StreetGallery (+ footer), CartDrawer,
                Button, HandDrawn (marker underline/circle), icons
data/           products.ts (catalogue + formatPrice), site.ts (nav, anchors, socials)
lib/            cart.tsx (useReducer + context), checkout.ts (payment hook)
scripts/        make-placeholders, screenshot, test-cart
```

## Connecting Shopify or Stripe

`lib/checkout.ts` exports `startCheckout(lines)`. It is the **only** place that talks to a payment provider. The cart drawer calls it with `[{ id, quantity }]`. It should return `{ ok: true, redirectUrl }` to send the shopper on, or `{ ok: false, message }` to show a message in the drawer. For now it returns *"Checkout opens soon. Your cart is saved on this page."*

**Shopify (Storefront API).** Add a `shopifyVariantId` to each product in `data/products.ts`. In `startCheckout`, send the `cartCreate` mutation with `lines: [{ merchandiseId, quantity }]` to `https://{shop}.myshopify.com/api/{version}/graphql.json`, including the `X-Shopify-Storefront-Access-Token` header. Then return `{ ok: true, redirectUrl: cart.checkoutUrl }`.

**Stripe Checkout.** Add a `stripePriceId` to each product. Create a route handler, `app/api/checkout/route.ts`, that runs server-side with `STRIPE_SECRET_KEY`. It calls `stripe.checkout.sessions.create({ mode: "payment", line_items: [{ price, quantity }], success_url, cancel_url, shipping_address_collection: { allowed_countries: ["CA"] } })` and returns `session.url`. In `startCheckout`, `POST` the lines to that route and return `{ ok: true, redirectUrl: url }`. Look up prices on the server. Never trust amounts sent from the client.
