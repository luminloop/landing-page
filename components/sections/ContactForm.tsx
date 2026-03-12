"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/tokens";

// ─── Types ──────────────────────────────────────────────────────
interface FormFields {
  email: string;
  firstName: string;
  lastName: string;
  schoolName: string;
  role: string;
  studentCount: string;
}

interface FormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  schoolName?: string;
  role?: string;
  studentCount?: string;
}

const initialFields: FormFields = {
  email: "",
  firstName: "",
  lastName: "",
  schoolName: "",
  role: "",
  studentCount: "",
};

const roles = [
  "Principal / Head Teacher",
  "Deputy Principal",
  "Administrator",
  "IT Manager / Director",
  "Finance / Bursar",
  "Other",
];

const studentCounts = [
  "Under 200",
  "200 – 500",
  "500 – 1,000",
  "1,000 – 3,000",
  "3,000+",
];

// ─── Component ──────────────────────────────────────────────────
export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!fields.email.trim()) {
      next.email = "Email is required";
    } else if (!fields.email.includes("@") || !fields.email.includes(".")) {
      next.email = "Enter a valid email address";
    }

    if (!fields.firstName.trim()) next.firstName = "First name is required";
    if (!fields.lastName.trim()) next.lastName = "Last name is required";
    if (!fields.schoolName.trim()) next.schoolName = "School name is required";
    if (!fields.role) next.role = "Please select your role";
    if (!fields.studentCount)
      next.studentCount = "Please select student count";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  // ── Shared styles ──────────────────────────────────────────────
  const inputClass =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-[#111111] outline-none transition-colors focus:border-gray-500";
  const labelClass = "block text-sm font-medium text-gray-700";
  const errorClass = "mt-1 text-xs text-red-500";
  const selectClass =
    "w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-[#111111] outline-none transition-colors focus:border-gray-500";

  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row">
      {/* ── LEFT COLUMN — Text content ───────────────────── */}
      <div className="flex w-full flex-col justify-start bg-white px-6 pb-18 pt-12 sm:px-12 lg:w-1/2 lg:px-16 lg:pt-20">
        <h1 className="max-w-md text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl lg:text-5xl">
          Get a demo of the school platform built for your institution.
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-gray-500">
          See how {siteConfig.name} works for schools like yours:
        </p>

        <ul className="mt-4 space-y-2 text-base leading-relaxed text-gray-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-gray-400">•</span>
            Replace manual admin processes with automated workflows
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-gray-400">•</span>
            Give every department a single source of truth
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-gray-400">•</span>
            Go live in weeks with full onboarding support
          </li>
        </ul>
      </div>

      {/* ── RIGHT COLUMN — Form ──────────────────────────── */}
      <div className="flex w-full flex-col justify-start bg-[#fdf5f2] px-6 pb-18 pt-12 sm:px-12 lg:w-1/2 lg:px-16 lg:pt-20">
        {submitted ? (
          /* ── Success state ──────────────────────────────── */
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <CheckCircle className="size-12 text-green-600" strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-semibold text-[#111111]">
              Request received.
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              We&apos;ll be in touch within one business day.
            </p>
            <Link
              href="/"
              className="mt-6 text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              ← Back to home
            </Link>
          </div>
        ) : (
          /* ── Form ───────────────────────────────────────── */
          <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md">
            {/* School Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                School Email
              </label>
              <p className="mt-0.5 text-xs text-gray-400">
                Please use your official school email address
              </p>
              <input
                id="email"
                type="email"
                placeholder="principal@school.ac.ke"
                value={fields.email}
                onChange={(e) => update("email", e.target.value)}
                className={`mt-1.5 ${inputClass}`}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            {/* First Name + Last Name */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={fields.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className={`mt-1.5 ${inputClass}`}
                />
                {errors.firstName && (
                  <p className={errorClass}>{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={fields.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className={`mt-1.5 ${inputClass}`}
                />
                {errors.lastName && (
                  <p className={errorClass}>{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* School Name */}
            <div className="mt-5">
              <label htmlFor="schoolName" className={labelClass}>
                School Name
              </label>
              <input
                id="schoolName"
                type="text"
                placeholder="Enter your school's name"
                value={fields.schoolName}
                onChange={(e) => update("schoolName", e.target.value)}
                className={`mt-1.5 ${inputClass}`}
              />
              {errors.schoolName && (
                <p className={errorClass}>{errors.schoolName}</p>
              )}
            </div>

            {/* Your Role */}
            <div className="mt-5">
              <label htmlFor="role" className={labelClass}>
                Your Role
              </label>
              <select
                id="role"
                value={fields.role}
                onChange={(e) => update("role", e.target.value)}
                className={`mt-1.5 ${selectClass}`}
              >
                <option value="">Select your role</option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.role && <p className={errorClass}>{errors.role}</p>}
            </div>

            {/* Number of Students */}
            <div className="mt-5">
              <label htmlFor="studentCount" className={labelClass}>
                Number of Students
              </label>
              <select
                id="studentCount"
                value={fields.studentCount}
                onChange={(e) => update("studentCount", e.target.value)}
                className={`mt-1.5 ${selectClass}`}
              >
                <option value="">Select student count</option>
                {studentCounts.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.studentCount && (
                <p className={errorClass}>{errors.studentCount}</p>
              )}
            </div>

            {/* Legal */}
            <p className="mt-6 text-xs leading-relaxed text-gray-400">
              By submitting this form, you agree to our{" "}
              <Link href="#" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Request a Demo →
            </button>

            {/* Divider + Sign in row */}
            <hr className="my-6 border-gray-200" />

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Already using {siteConfig.name}?
              </span>
              <Link
                href="#"
                className="font-medium text-[#111111] transition-colors hover:text-gray-600"
              >
                Sign in →
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
