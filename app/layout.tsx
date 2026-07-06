import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    locale: "en_US",
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
        <Footer />
      </body>
    </html>
  );
}
