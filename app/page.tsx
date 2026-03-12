import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import IntroTrust from "@/components/sections/IntroTrust";
import WhyUs from "@/components/sections/WhyUs";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import { siteConfig } from "@/lib/tokens";

/* ── JSON-LD Structured Data ──────────────────────────────────── */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  url: siteConfig.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    category: "School Management ERP",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is Lemin Loop different from a generic ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It was designed from the ground up for how schools operate — not adapted from an HR or finance system. Every module reflects real school workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Can it handle multiple campuses or branches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lemin Loop supports multi-site institutions with separate configurations per campus and a unified admin view.",
      },
    },
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most schools are fully live within 4–8 weeks depending on the number of modules and data migration complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need an IT team to manage it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The system is designed for administrators to configure and manage without technical support for day-to-day operations.",
      },
    },
    {
      "@type": "Question",
      name: "Is our data secure and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. You can choose self-hosted or cloud deployment. Your institution owns all its data with full export rights.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There's a mobile-friendly interface for teachers, parents, and students to access key functions on the go.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of support is included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All clients receive onboarding, training, and ongoing support. We're a partner in your deployment, not just a vendor.",
      },
    },
    {
      "@type": "Question",
      name: "Can it integrate with our existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lemin Loop supports integration with common accounting systems, biometric devices, and third-party APIs.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <IntroTrust />
        <WhyUs />
        <Features />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
