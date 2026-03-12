"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  CalendarDays,
  CreditCard,
  Users,
  ClipboardList,
  Smartphone,
  CheckSquare,
  BarChart2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/tokens";

// ─── Feature items ──────────────────────────────────────────────
interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: FeatureItem[] = [
  {
    title: "Admissions & Enrollment",
    description:
      "Manage applications, document collection, and enrollment with a clear pipeline view.",
    icon: UserPlus,
  },
  {
    title: "Academic Scheduling",
    description:
      "Build timetables, assign classrooms, and manage periods without the spreadsheet chaos.",
    icon: CalendarDays,
  },
  {
    title: "Fees & Finance",
    description:
      "Configure fee structures, track payments, send reminders, and generate financial reports.",
    icon: CreditCard,
  },
  {
    title: "Staff & HR",
    description:
      "Onboard staff, manage contracts, run payroll, and track leave from one place.",
    icon: Users,
  },
  {
    title: "Examinations & Gradebooks",
    description:
      "Set up exams, record marks, generate report cards, and track academic performance over time.",
    icon: ClipboardList,
  },
  {
    title: "Parent & Student Portal",
    description:
      "Give parents and students access to results, fee statements, timetables, and announcements.",
    icon: Smartphone,
  },
  {
    title: "Attendance Tracking",
    description:
      "Automated daily attendance for students and staff with exportable records and alerts.",
    icon: CheckSquare,
  },
  {
    title: "Analytics & Reports",
    description:
      "Real-time dashboards for administrators and IT leads — see everything, decide faster.",
    icon: BarChart2,
  },
];

// ─── Component ──────────────────────────────────────────────────
export default function Features() {
  return (
    <section className="bg-white pb-18 pt-8">
      <div className="mx-auto max-w-[750px] px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-normal uppercase tracking-widest text-gray-400"
          style={{ fontSize: "11px" }}
        >
          Features
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 font-semibold text-[#111111]"
          style={{ fontSize: "20px" }}
        >
          What {siteConfig.name} has to offer you
        </motion.h2>

        {/* Feature grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 border border-gray-200 sm:grid-cols-2"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            // Determine border classes for table-grid effect
            const isRightCol = i % 2 === 1;
            const isNotFirstRow = i >= 2;
            return (
              <div
                key={i}
                className={`p-6 ${isRightCol ? "sm:border-l sm:border-gray-200" : ""} ${isNotFirstRow ? "border-t border-gray-200" : ""}`}
              >
                <Icon className="size-5 text-gray-700" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-semibold text-[#111111]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
