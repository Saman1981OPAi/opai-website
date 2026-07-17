import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DisclaimerBand } from "@/components/DisclaimerBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  canonicalUrl,
  organizationStructuredData,
  seoKeywords,
  site,
  softwareStructuredData,
  websiteStructuredData
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | OPAi"
  },
  description: site.description,
  applicationName: "OPAi",
  keywords: seoKeywords,
  authors: [{ name: "OPAi" }],
  creator: "OPAi",
  publisher: "OPAi",
  alternates: {
    canonical: canonicalUrl("/")
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: canonicalUrl("/"),
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
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#05070B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [organizationStructuredData, softwareStructuredData, websiteStructuredData];

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main id="main">{children}</main>
        <DisclaimerBand />
        <Footer />
      </body>
    </html>
  );
}
