"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/tokens";

export default function FinalCTA() {
  return (
    <section className="bg-white pb-18 pt-8">
      <div className="mx-auto max-w-[750px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden border border-white/10 bg-[#1e3d2f] px-6 py-16 text-center sm:px-12"
        >
          {/* Dot texture overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Label */}
            <p
              className="font-normal uppercase tracking-widest text-white/40"
              style={{ fontSize: "11px" }}
            >
              / Let&apos;s talk
            </p>

            {/* Headline */}
            <h2 className="mx-auto mt-6 max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Stop drowning in paperwork.
            </h2>

            {/* Sub-text */}
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Let your team focus on students. {siteConfig.name} handles the
              rest.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-[#c4b5fd] px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-900 transition-opacity hover:opacity-90"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white/20 bg-gray-900 px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                Book a Walkthrough
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
