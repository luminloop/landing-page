// ─── Design Tokens ───────────────────────────────────────────────
// Single source of truth for all design constants used across the
// Lemin Loop landing page. Import from here — never hard-code values.

export const siteConfig = {
  name: "Lemin Loop",
  description:
    "The modern school management ERP that streamlines administration, academics, and communication — all in one place.",
  url: "https://leminloop.com",
} as const;

// ─── Navigation ──────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const ctaText = "Request a Demo" as const;
