import type { LucideIcon } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Social Links Configuration
   ─────────────────────────────────────────────────────────────
   Single source of truth for all social media profiles.
   Update URLs here — the footer (and any future component)
   will pick them up automatically.
   ───────────────────────────────────────────────────────────── */

export interface SocialLink {
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://facebook.com/sergegabrielcollin",
    icon: Facebook,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/sergegabrielcollin",
    icon: Instagram,
  },
  {
    key: "twitter",
    label: "X",
    href: "https://x.com/sergegcollin",
    icon: Twitter,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/sergegabrielcollin",
    icon: Linkedin,
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@sergegabrielcollin",
    icon: Youtube,
  },
];
