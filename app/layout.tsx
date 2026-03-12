import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leminloop.com"),
  title: {
    default: "Lemin Loop — School Management ERP",
    template: "%s — Lemin Loop",
  },
  description:
    "The modern school management ERP that streamlines administration, academics, and communication — all in one place.",
  keywords: [
    "school management system",
    "school ERP",
    "school administration software",
    "student management",
    "fee management",
    "academic management",
    "school software Kenya",
    "Lemin Loop",
  ],
  authors: [{ name: "Lemin Loop" }],
  creator: "Lemin Loop",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leminloop.com",
    siteName: "Lemin Loop",
    title: "Lemin Loop — School Management ERP",
    description:
      "The modern school management ERP that streamlines administration, academics, and communication — all in one place.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemin Loop — School Management ERP",
    description:
      "The modern school management ERP that streamlines administration, academics, and communication — all in one place.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
