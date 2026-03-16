"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ctaText } from "@/lib/tokens";

// ─── Animation helpers ──────────────────────────────────────────
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

// ─── Trust logos ─────────────────────────────────────────────────
const trustLogos = [
  { key: "a-logo", src: "/assets/school%20logos/A-logo.svg", alt: "Logo A" },
  { key: "r-logo", src: "/assets/school%20logos/R-logo.svg", alt: "Logo R" },
  { key: "blue-logo", src: "/assets/school%20logos/blue-logo.svg", alt: "Blue logo" },
  { key: "dept-logo", src: "/assets/school%20logos/department-logo.svg", alt: "Department logo" },
  { key: "green-logo", src: "/assets/school%20logos/green-logo.svg", alt: "Green logo" },
  { key: "star-logo", src: "/assets/school%20logos/star-log.svg", alt: "Star logo" },
];

// ─── Component ──────────────────────────────────────────────────
export default function Hero() {
  const [demoPlaying, setDemoPlaying] = useState(false);

  const handleDemoPlay = () => {
    setDemoPlaying(true);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-20 sm:px-8 sm:pt-24 lg:pt-28">
        {/* ── Two-column grid ────────────────────────────── */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          {/* ── Left column ──────────────────────────────── */}
          <div>
            {/* Announcement pill */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-medium text-gray-600">
                <span className="inline-block size-1.5 rounded-full bg-[#4f7c5f]" />
                Now available — School year 2025/26
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
            >
              School management,
              <br />
              built for real schools.
            </motion.h1>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.2)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#111] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
              >
                {ctaText}
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-[#111111] transition-colors hover:bg-gray-50"
              >
                Contact the Team
              </Link>
            </motion.div>

            {/* Logo ticker */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-10 max-w-md overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <motion.div
                className="flex items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Two identical sets — each set includes trailing gap via pr */}
                {[0, 1].map((set) => (
                  <div
                    key={set}
                    className="flex shrink-0 items-center gap-8 pr-8"
                  >
                    {trustLogos.map((logo) => (
                      <Image
                        key={`${logo.key}-${set}`}
                        src={logo.src}
                        alt={logo.alt}
                        width={100}
                        height={24}
                        className="h-5 w-auto shrink-0 opacity-40 grayscale"
                      />
                    ))}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right column ─────────────────────────────── */}
          <motion.div {...fadeUp(0.35)} className="flex flex-col items-center">
            <video
              className="w-full rounded-2xl"
              src="/assets/hero%20video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </motion.div>
        </div>

        {/* ── Product demo video (YouTube) ──────────────── */}
        <motion.div
          {...fadeUp(0.45)}
          className="relative mx-auto mt-16 w-full max-w-[700px]"
        >
        </motion.div>
      </div>
    </section>
  );
}
