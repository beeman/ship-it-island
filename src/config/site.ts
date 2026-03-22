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
    email: "QuanPratt.btc@gmail.com",
    telegram: "@kellquan",
  },
  description:
    "A 14-day execution sprint for Web3 projects ready to find the blocker, fix it, and ship a real improvement in Koh Samui.",
  lang: "en",
  locale: "en_US",
  name: "Ship It Island",
  navLinks,
  ogImage: ogImage,
  twitter: "",
  url: import.meta.env.PUBLIC_SHIP_IT_ISLAND_SITE_URL ?? defaultSiteUrl,
};
