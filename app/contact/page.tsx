import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Get a personalized demo of Lemin Loop, the school management ERP built for your institution.",
  openGraph: {
    title: "Request a Demo — Lemin Loop",
    description:
      "Get a personalized demo of Lemin Loop, the school management ERP built for your institution.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
