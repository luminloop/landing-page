"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/tokens";

// ─── Data ───────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: `How is ${siteConfig.name} different from a generic ERP?`,
    answer:
      "It was designed from the ground up for how schools operate — not adapted from an HR or finance system. Every module reflects real school workflows.",
  },
  {
    question: "Can it handle multiple campuses or branches?",
    answer: `Yes. ${siteConfig.name} supports multi-site institutions with separate configurations per campus and a unified admin view.`,
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most schools are fully live within 4–8 weeks depending on the number of modules and data migration complexity.",
  },
  {
    question: "Do we need an IT team to manage it?",
    answer:
      "No. The system is designed for administrators to configure and manage without technical support for day-to-day operations.",
  },
  {
    question: "Is our data secure and private?",
    answer:
      "Completely. You can choose self-hosted or cloud deployment. Your institution owns all its data with full export rights.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes. There's a mobile-friendly interface for teachers, parents, and students to access key functions on the go.",
  },
  {
    question: "What kind of support is included?",
    answer:
      "All clients receive onboarding, training, and ongoing support. We're a partner in your deployment, not just a vendor.",
  },
  {
    question: "Can it integrate with our existing tools?",
    answer: `${siteConfig.name} supports integration with common accounting systems, biometric devices, and third-party APIs.`,
  },
];

// ─── Component ──────────────────────────────────────────────────
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-white pb-18 pt-8">
      <div className="mx-auto max-w-[750px] px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-normal uppercase tracking-widest text-gray-400"
          style={{ fontSize: "11px" }}
        >
          Got a query?
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 font-semibold text-[#111111]"
          style={{ fontSize: "20px" }}
        >
          Frequently asked questions
        </motion.h2>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 text-base font-medium text-[#111111]">
                    {faq.question}
                  </span>

                  {/* + icon that rotates 45° to become × */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="shrink-0 text-xl leading-none text-gray-400"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer with height animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
