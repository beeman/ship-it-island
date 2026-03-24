import ogImage from "@/assets/og-image.png";
import type { NavLink } from "@/types/types";

const defaultSiteUrl = "https://ship-it-island.xyz";

const navLinks: NavLink[] = [
  { href: "/#how-it-works", text: "How It Works" },
  { href: "/#pricing", text: "Pricing" },
  { href: "/#faq", text: "FAQ" },
  { href: "/apply", text: "Apply" },
];

export const siteConfig = {
  author: "Ship It Island",
  contact: {
    email: "contact@ship-it-island.xyz",
    telegram: "@kellquan",
  },
  description:
    "Two weeks in Koh Samui to fix what's stuck and ship something real.",
  lang: "en",
  locale: "en_US",
  name: "Ship It Island",
  navLinks,
  ogImage: ogImage,
  twitter: "",
  url: import.meta.env.PUBLIC_SHIP_IT_ISLAND_SITE_URL ?? defaultSiteUrl,
};
