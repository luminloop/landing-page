import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/tokens";

// ─── Placeholder logos from logoipsum ────────────────────────────
const logos = [
  { key: "a-logo", src: "/assets/school%20logos/A-logo.svg", alt: "Logo A" },
  { key: "r-logo", src: "/assets/school%20logos/R-logo.svg", alt: "Logo R" },
  { key: "blue-logo", src: "/assets/school%20logos/blue-logo.svg", alt: "Blue logo" },
  { key: "dept-logo", src: "/assets/school%20logos/department-logo.svg", alt: "Department logo" },
  { key: "green-logo", src: "/assets/school%20logos/green-logo.svg", alt: "Green logo" },
  { key: "star-logo", src: "/assets/school%20logos/star-log.svg", alt: "Star logo" },
];

export default function IntroTrust() {
  return (
    <section className="bg-white pb-18 pt-8">
      <div className="mx-auto max-w-[750px] px-6">
        {/* Intro paragraph */}
        <p className="text-base leading-relaxed text-gray-700">
          {siteConfig.name} is a modern, configurable school management system
          built for administrators who need clarity, and IT teams who need
          control. Designed for institutions of any size.
        </p>

        {/* Trust label */}
        <p className="mt-10 text-sm font-semibold text-[#111111]">
          Trusted by schools of all sizes
        </p>

        {/* Logo grid */}
        <div className="mt-4 grid grid-cols-3 items-center rounded-xl border border-gray-100 bg-white sm:grid-cols-4 md:grid-cols-6">
          {logos.map(({ key, src, alt }) => (
            <div
              key={key}
              className="flex items-center justify-center border border-gray-100 px-6 py-5"
            >
              <Image
                src={src}
                alt={alt}
                width={100}
                height={28}
                className="h-7 w-auto opacity-70"
              />
            </div>
          ))}
        </div>

        {/* Customer stories link */}
        <Link
          href="#"
          className="mt-6 inline-block text-sm font-medium text-[#111111] transition-colors hover:text-gray-600"
        >
          Read customer stories ↗
        </Link>
      </div>
    </section>
  );
}
