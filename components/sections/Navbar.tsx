"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, ctaText } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-[border-color] duration-300",
        scrolled ? "border-b border-gray-100" : "border-b border-transparent"
      )}
    >
      <nav aria-label="Main navigation" className="flex items-center justify-between px-6 py-3 sm:px-8">
        {/* ── Brand name ─────────────────────────────────── */}
        <Link
          href="/"
          className="text-sm text-gray-500 transition-colors hover:text-gray-700"
        >
          {siteConfig.name}
        </Link>

        {/* ── CTA link ───────────────────────────────────── */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#111111] transition-colors hover:text-gray-600"
        >
          <span className="hidden sm:inline">{ctaText}</span>
          <span className="sm:hidden">Demo</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </nav>
    </header>
  );
}
