"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Users, Building, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/tokens";

// ─── Types ──────────────────────────────────────────────────────
interface MetricStat {
  value: string;
  label: string;
}

// ─── Data ───────────────────────────────────────────────────────
const stats: MetricStat[] = [
  { value: "65%", label: "reduction in admin workload" },
  { value: "3×", label: "faster fee collection" },
  { value: "98%", label: "parent portal adoption" },
  { value: "40+", label: "hours saved per week" },
];

const casePills = [
  { icon: Users, text: "200–500 Students" },
  { icon: Building, text: "Primary School" },
  { icon: Calendar, text: "Est. 2018" },
];

// ─── Bento grid cell types ───────────────────────────────────────
// ─── Bento grid cell types ───────────────────────────────────────
interface BentoQuote {
  type: "quote";
  quote: string;
  name: string;
  role: string;
  avatar: string;
  gridClass: string;
}

interface BentoLogoQuote {
  type: "logo-quote";
  logoName: string;
  logoSrc: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  gridClass: string;
}

type BentoCell = BentoQuote | BentoLogoQuote;

// Cells with explicit grid positions to create the staggered bento layout
const bentoCells: BentoCell[] = [
  // Col 1, Rows 1–2 (tall)
  {
    type: "logo-quote",
    logoName: "St. Mary's Girls",
    logoSrc: "/assets/school%20logos/green-logo.svg",
    quote:
      "Our bursar used to spend three days every term chasing fees. Now it takes a morning. The automated reminders alone paid for the system. The difference in our finance office is night and day.",
    name: "Grace Otieno",
    role: "Bursar, St. Mary's Girls School",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
    gridClass: "lg:col-start-1 lg:row-start-1 lg:row-end-3",
  },
  // Col 2, Row 1
  {
    type: "quote",
    quote:
      "Having admissions, fees, and exams all in one place means our end-of-term reports generate themselves.",
    name: "Winnie Achieng",
    role: "Deputy Principal, Lakeside Academy",
    avatar:
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=80&h=80&fit=crop&crop=face",
    gridClass: "lg:col-start-2 lg:row-start-1",
  },
  // Col 3, Row 1
  {
    type: "quote",
    quote:
      "Parents actually thank us now for how easy it is to check results and pay fees online.",
    name: "Samuel Njoroge",
    role: "Principal, Sunrise Academy",
    avatar:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=80&h=80&fit=crop&crop=face",
    gridClass: "lg:col-start-3 lg:row-start-1",
  },
  // Col 2, Row 2
  {
    type: "quote",
    quote:
      "The IT setup was far simpler than we expected. Our team was trained and live within three weeks.",
    name: "Brian Omondi",
    role: "IT Manager, Hillcrest Schools",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    gridClass: "lg:col-start-2 lg:row-start-2",
  },
  // Col 3, Rows 2–3 (tall)
  {
    type: "logo-quote",
    logoName: "Crescent Schools",
    logoSrc: "/assets/school%20logos/star-log.svg",
    quote: `We evaluated four systems before choosing ${siteConfig.name}. The others were built for generic businesses and bolted onto schools. This one actually understood how a timetable works, how exam grading flows, how a school term is structured. The difference was obvious in the first demo.`,
    name: "Dr. Fatuma Hassan",
    role: "Director, Crescent Group of Schools",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face",
    gridClass: "lg:col-start-3 lg:row-start-2 lg:row-end-4",
  },
  // Col 1, Row 3
  {
    type: "quote",
    quote:
      "Our board now gets real-time enrollment and finance dashboards instead of waiting for end-of-term reports.",
    name: "Christine Waweru",
    role: "CEO, Edu-Group Holdings",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    gridClass: "lg:col-start-1 lg:row-start-3",
  },
  // Col 2, Row 3
  {
    type: "quote",
    quote:
      "We finally stopped losing student records between departments. Everything is in one place and the audit trail is perfect.",
    name: "Peter Maina",
    role: "Registrar, Nairobi Christian School",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    gridClass: "lg:col-start-2 lg:row-start-3",
  },
];

// ─── Component ──────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section className="bg-white pb-18 pt-8">
      {/* Section label + heading in centered column */}
      <div className="mx-auto max-w-[750px] px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-normal uppercase tracking-widest text-gray-400"
          style={{ fontSize: "11px" }}
        >
          User Reviews
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 font-semibold text-[#111111]"
          style={{ fontSize: "20px" }}
        >
          Take it from our schools
        </motion.h2>
      </div>

      {/* ── PART A: Case Study Metrics Block ─────────────── */}
      <div className="mx-auto max-w-[750px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 overflow-hidden border border-gray-200 bg-white"
        >
          {/* Top row — two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left column */}
            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p
                  className="font-normal uppercase tracking-widest text-gray-400"
                  style={{ fontSize: "11px" }}
                >
                  Case Study
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-[#111111] sm:text-3xl">
                  Customer story
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-500">
                  How Greenfield Academy reduced administrative overhead by 65%
                  and improved parent satisfaction.
                </p>

                {/* Metadata pills */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {casePills.map((pill) => {
                    const Icon = pill.icon;
                    return (
                      <span
                        key={pill.text}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                      >
                        <Icon className="size-3" strokeWidth={1.5} />
                        {pill.text}
                      </span>
                    );
                  })}
                </div>
              </div>

              <Link
                href="#"
                className="mt-6 text-sm text-gray-500 transition-colors hover:text-gray-700"
              >
                Read story ›
              </Link>
            </div>

            {/* Right column — school photo placeholder */}
            <div className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden bg-gray-100">
              {/* School logo badge */}
              <div className="absolute left-4 top-4 z-10 rounded-lg bg-white px-3 py-2 shadow-sm">
                <Image
                  src="/assets/school%20logos/blue-logo.svg"
                  alt="Greenfield Academy"
                  width={100}
                  height={24}
                  className="h-5 w-auto"
                />
              </div>

              {/* School building photo */}
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&crop=center"
                alt="Greenfield Academy school building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom row — 4 stats */}
          <div className="grid grid-cols-2 border-t border-gray-200 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between px-6 py-8 ${
                  i > 0 ? "border-l border-gray-200" : ""
                } ${i >= 2 ? "max-md:border-t max-md:border-gray-200" : ""} ${i === 2 ? "max-md:border-l-0" : ""}`}
              >
                <span className="text-4xl font-bold text-[#111111] sm:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-3 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── PART B: Bento Testimonial Grid ───────────────── */}
      <div className="mx-auto max-w-[750px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {bentoCells.map((cell, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between border border-gray-200 bg-white p-6 ${cell.gridClass}`}
            >
              {/* Logo (only for logo-quote cells) */}
              {cell.type === "logo-quote" && (
                <div className="mb-4">
                  <Image
                    src={cell.logoSrc}
                    alt={cell.logoName}
                    width={120}
                    height={28}
                    className="h-7 w-auto"
                  />
                </div>
              )}

              {/* Quote — pushed down in tall cells, at top in short cells */}
              <p className="mt-auto text-sm font-medium leading-relaxed text-[#111111]">
                &ldquo;{cell.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={cell.avatar}
                  alt={cell.name}
                  width={32}
                  height={32}
                  className="size-8 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-[#111111]">
                    {cell.name}
                  </p>
                  <p className="text-xs text-gray-400">{cell.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
