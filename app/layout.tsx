import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DisclaimerBand } from "@/components/DisclaimerBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VisitCounter } from "@/components/VisitCounter";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | OPAi"
  },
  description: site.description,
  applicationName: "OPAi",
  keywords: [
    "OPAi",
    "Operational Police Ai",
    "OPAi Police",
    "Canadian police AI",
    "AI assistant for law enforcement",
    "police productivity app",
    "Canadian police officers",
    "Canadian police app",
    "shift readiness",
    "incident workflow",
    "police translation app",
    "court reminders",
    "training requalification",
    "police notifications",
    "PTSD awareness app",
    "public safety wellness",
    "police wellness app",
    "mental health resources",
    "community safety"
  ],
  authors: [{ name: "OPAi" }],
  creator: "OPAi",
  publisher: "OPAi",
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: "OPAi",
    images: [{ url: "/images/opai-hero.png", width: 1536, height: 864, alt: "OPAi mobile app preview" }],
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/opai-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#05070B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main id="main">{children}</main>
        <VisitCounter />
        <DisclaimerBand />
        <Footer />
      </body>
    </html>
  );
}
