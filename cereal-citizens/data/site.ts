export const anchors = {
  collectibles: "collectibles",
  xlBoxes: "xl-boxes",
  inTheWild: "in-the-wild",
} as const;

export const routes = {
  home: "/",
  collectibles: `/#${anchors.collectibles}`,
  xlBoxes: "/xl-boxes",
} as const;

export const navLinks = [{ label: "Shop", href: routes.collectibles }];

export const socials = {
  handle: "@cerealcitizens",
  links: [
    { label: "Instagram", href: "https://instagram.com/cerealcitizens", icon: "instagram" },
    { label: "TikTok", href: "https://tiktok.com/@cerealcitizens", icon: "tiktok" },
    { label: "X", href: "https://x.com/cerealcitizens", icon: "x" },
  ],
} as const;
