"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/tokens";

// ─── Benefit items ──────────────────────────────────────────────
interface BenefitItem {
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    title: "Built for schools, not adapted for them",
    description:
      "Designed specifically for how schools operate — not a generic ERP retrofitted for education. Every module reflects real school workflows.",
  },
  {
    title: "One system, zero silos",
    description:
      "Admissions, scheduling, fees, exams, HR and more — all connected in a single platform your whole institution can rely on.",
  },
  {
    title: "Configurable to your institution",
    description:
      "Set up the system to match your school's structure. Custom fields, workflows, reports, and layouts — no developer needed.",
  },
  {
    title: "Built on a proven open foundation",
    description:
      "Powered by ERPNext's battle-tested framework, customized deeply for education. Backed by years of real-world school deployments.",
  },
  {
    title: "Transparent, predictable pricing",
    description:
      "No per-user fees that punish growth. One setup, full access — for everyone from the bursar to the principal.",
  },
  {
    title: "Your data, your control",
    description:
      "Self-hosted or cloud. Your institution owns its data entirely, with full access to export, audit, and migrate at any time.",
  },
];

// ─── Component ──────────────────────────────────────────────────
export default function WhyUs() {
  return (
    <section className="bg-white pb-18 pt-8">
      <div className="mx-auto max-w-[750px] px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-normal uppercase tracking-widest text-gray-400" style={{ fontSize: '11px' }}
        >
          Benefits
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 font-semibold text-[#111111]" style={{ fontSize: '20px' }}
        >
          Why {siteConfig.name}?
        </motion.h2>

        {/* Numbered list */}
        <div className="mt-10">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Separator above each item (except the first) */}
              {i > 0 && <hr className="border-gray-100" />}

              <div className="flex gap-4 py-5">
                {/* Number */}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-[#111111]">
                  {i + 1}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
