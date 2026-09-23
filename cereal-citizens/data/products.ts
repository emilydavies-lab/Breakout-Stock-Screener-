export type Product = {
  id: string;
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
    name: "Rice Eby’s",
    tagline: ["Snap, Crackle, Election!"],
    priceCents: 3500,
    currency: "CAD",
    image: {
      src: "/images/rice-ebys-box.png",
      width: 549,
      height: 800,
      alt: "Rice Eby’s limited election edition cereal box, blue packaging",
    },
  },
  {
    id: "lorne-pops",
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
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

/** 3500 → "$35 CAD"; keeps cents only when they are non-zero. */
export function formatPrice(cents: number, currency = "CAD") {
  const dollars = cents / 100;
  const amount = Number.isInteger(dollars) ? String(dollars) : dollars.toFixed(2);
  return `$${amount} ${currency}`;
}
