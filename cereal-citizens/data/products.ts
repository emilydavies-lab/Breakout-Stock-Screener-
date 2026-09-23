export type Product = {
  id: string;
  /** "collectible" boxes are on the home page; "xl" boxes on /xl-boxes. */
  kind: "collectible" | "xl";
  name: string;
  /** Tagline split into the lines shown on the product card. */
  tagline: string[];
  priceCents: number;
  currency: "CAD";
  image: { src: string; width: number; height: number; alt: string };
};

export const products: Product[] = [
  {
    id: "rice-ebys",
    kind: "collectible",
    name: "Rice Eby’s",
    tagline: ["Snap, Crackle, Election!"],
    priceCents: 3500,
    currency: "CAD",
    image: {
      src: "/images/rice-ebys-box.png",
      width: 547,
      height: 800,
      alt: "Rice Eby’s limited election edition cereal box, blue packaging",
    },
  },
  {
    id: "lorne-pops",
    kind: "collectible",
    name: "Lorne Pops",
    tagline: ["Putting the Pop", "Back in B.C."],
    priceCents: 3500,
    currency: "CAD",
    image: {
      src: "/images/lorne-pops-box.png",
      width: 549,
      height: 800,
      alt: "Lorne Pops limited election edition cereal box, yellow packaging",
    },
  },
  {
    id: "rice-ebys-xl",
    kind: "xl",
    name: "Rice Eby\u2019s XL",
    tagline: ["Snap, Crackle, Election!"],
    priceCents: 7500,
    currency: "CAD",
    image: {
      src: "/images/rice-ebys-box.png",
      width: 547,
      height: 800,
      alt: "Rice Eby\u2019s XL box, the oversized blue election edition",
    },
  },
  {
    id: "lorne-pops-xl",
    kind: "xl",
    name: "Lorne Pops XL",
    tagline: ["Putting the Pop", "Back in B.C."],
    priceCents: 7500,
    currency: "CAD",
    image: {
      src: "/images/lorne-pops-box.png",
      width: 549,
      height: 800,
      alt: "Lorne Pops XL box, the oversized yellow election edition",
    },
  },
];

export const collectibles = products.filter((p) => p.kind === "collectible");
export const xlBoxes = products.filter((p) => p.kind === "xl");

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

/** 3500 → "$35 CAD"; keeps cents only when they are non-zero. */
export function formatPrice(cents: number, currency = "CAD") {
  const dollars = cents / 100;
  const amount = Number.isInteger(dollars) ? String(dollars) : dollars.toFixed(2);
  return `$${amount} ${currency}`;
}
