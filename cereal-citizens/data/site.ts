export const anchors = {
  collectibles: "collectibles",
  xlBoxes: "xl-boxes",
  inTheWild: "in-the-wild",
  ourStory: "our-story",
  faq: "faq",
} as const;

export const navLinks = [
  { label: "Shop", href: `#${anchors.collectibles}` },
  { label: "Our Story", href: `#${anchors.ourStory}` },
  { label: "In the Wild", href: `#${anchors.inTheWild}` },
  { label: "FAQ", href: `#${anchors.faq}` },
];

export const socials = {
  handle: "@cerealcitizens",
  links: [
    { label: "Instagram", href: "https://instagram.com/cerealcitizens", icon: "instagram" },
    { label: "TikTok", href: "https://tiktok.com/@cerealcitizens", icon: "tiktok" },
    { label: "X", href: "https://x.com/cerealcitizens", icon: "x" },
  ],
} as const;
