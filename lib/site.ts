import {
  BadgeCheck,
  BellRing,
  Brain,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Code2,
  Database,
  FileLock2,
  Files,
  Gavel,
  GraduationCap,
  HeartPulse,
  Languages,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  Phone,
  RadioTower,
  Server,
  Siren,
  Sparkles,
  Smartphone,
  Users
} from "lucide-react";
import type { Metadata } from "next";

export const site = {
  name: "OPAi",
  title: "OPAi | Operational Police Ai for Canadian Police Officers",
  description:
    "OPAi, Operational Police Ai, is a premium mobile platform designed for Canadian police officers, supporting operational productivity, PTSD awareness, wellness resources, and secure public safety workflows.",
  url: "https://opaiapp.com",
  email: "Admin@opaiapp.com"
};

export const seoKeywords = [
  "OPAi",
  "OPAi Police",
  "Canadian police AI",
  "AI assistant for law enforcement",
  "police productivity app",
  "PTSD awareness",
  "Canadian policing technology",
  "Operational Police Ai",
  "Canadian police officers",
  "law enforcement AI assistant",
  "police wellness app"
];

export const seoPages = [
  {
    path: "/",
    title: site.title,
    description: site.description,
    priority: 1,
    changeFrequency: "weekly" as const
  },
  {
    path: "/about/",
    title: "About OPAi and Operational Police Ai",
    description:
      "Learn about OPAi, Operational Police Ai, the Canadian police AI platform supporting officer productivity, readiness, and PTSD awareness.",
    priority: 0.8,
    changeFrequency: "monthly" as const
  },
  {
    path: "/features/",
    title: "OPAi Police Features",
    description:
      "Explore OPAi Police features for shift readiness, incident workflows, translation, court, training, calendar reminders, AI assistance, and PTSD awareness.",
    priority: 0.9,
    changeFrequency: "monthly" as const
  },
  {
    path: "/opai-police/",
    title: "OPAi Police Canadian AI Assistant",
    description:
      "OPAi Police is a Canadian police AI assistant and productivity app for officer readiness, incidents, translation, court, training, reminders, and PTSD awareness.",
    priority: 0.95,
    changeFrequency: "monthly" as const
  },
  {
    path: "/ptsd-awareness/",
    title: "PTSD Awareness and OPAi Police Wellness Support",
    description:
      "Learn how OPAi supports PTSD awareness with calm education, wellness-oriented design, stigma reduction, and resource access for public safety communities.",
    priority: 0.8,
    changeFrequency: "monthly" as const
  },
  {
    path: "/founder-story/",
    title: "Founder Story",
    description:
      "Read the founder story behind OPAi, created from Canadian policing experience to support officers with productivity tools and PTSD awareness.",
    priority: 0.75,
    changeFrequency: "monthly" as const
  },
  {
    path: "/download/",
    title: "Download OPAi Police",
    description:
      "OPAi Police is now in testing for iOS, with Android compatibility under construction. Request launch updates for the Canadian police productivity app.",
    priority: 0.8,
    changeFrequency: "weekly" as const
  },
  {
    path: "/contact/",
    title: "Contact OPAi",
    description:
      "Contact OPAi for partnerships, App Store readiness, launch updates, media, product questions, and Canadian policing technology inquiries.",
    priority: 0.7,
    changeFrequency: "monthly" as const
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy",
    description:
      "Review the OPAi privacy policy for the public website, app preview, future secure services, contact information, and privacy-by-design commitments.",
    priority: 0.5,
    changeFrequency: "yearly" as const
  },
  {
    path: "/terms-of-service/",
    title: "Terms of Service",
    description:
      "Review the OPAi terms of service for website and app preview use, limitations, intellectual property, and future product access.",
    priority: 0.5,
    changeFrequency: "yearly" as const
  }
];

export function canonicalUrl(path = "/") {
  return `${site.url}${path === "/" ? "/" : path}`;
}

export function getSeoPage(path: string) {
  return seoPages.find((page) => page.path === path) ?? seoPages[0];
}

export function createPageMetadata(path: string): Metadata {
  const page = getSeoPage(path);
  const url = canonicalUrl(page.path);

  return {
    title: page.path === "/" ? { absolute: page.title } : page.title,
    description: page.description,
    keywords: seoKeywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "OPAi",
      images: [{ url: "/images/opai-hero.png", width: 1536, height: 864, alt: "OPAi Police mobile app preview" }],
      locale: "en_CA",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/images/opai-hero.png"]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OPAi",
  legalName: "1001246299 ONTARIO INC.",
  url: site.url,
  email: site.email,
  logo: `${site.url}/images/brand/opai-police-ptsd-emblem.png`,
  sameAs: [site.url]
};

export const softwareStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OPAi Police",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android",
  description:
    "OPAi Police is a Canadian police productivity app and AI assistant for law enforcement workflows, currently in testing.",
  url: site.url,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "CAD"
  },
  publisher: {
    "@type": "Organization",
    name: "OPAi"
  }
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Features", href: "/features/" },
  { label: "OPAi Police", href: "/opai-police/" },
  { label: "PTSD Awareness", href: "/ptsd-awareness/" },
  { label: "Founder", href: "/founder-story/" },
  { label: "Contact", href: "/contact/" }
];

export const featureCards = [
  {
    icon: Siren,
    title: "Start My Shift",
    body: "A reminder screen for cruiser, equipment, radio, MDT, court, follow-up, training, and requalification checks without creating administrative burden."
  },
  {
    icon: ClipboardCheck,
    title: "New Incident",
    body: "Guided incident organization for type, time, location, people involved, witnesses, notes, photos, documents, audio, evidence references, and AI report drafting."
  },
  {
    icon: Languages,
    title: "Translation",
    body: "Dedicated text, voice, conversation, document, and camera translation workflows shaped for police-context communication."
  },
  {
    icon: CalendarDays,
    title: "Calendar",
    body: "AI-assisted scheduling for court dates, meetings, training, requalification, shift reminders, follow-up deadlines, and notifications."
  },
  {
    icon: Gavel,
    title: "Court Reminders",
    body: "Clear reminders for court dates, preparation windows, follow-ups, and important deadlines that cannot be missed."
  },
  {
    icon: GraduationCap,
    title: "Training & Requalification",
    body: "Track firearms, Use of Force, CEW, CPR, First Aid, annual requalification, and other training deadlines."
  },
  {
    icon: Brain,
    title: "AI Assistant",
    body: "Police-focused AI actions for drafting, reviewing reports, reviewing grounds, translation, policy search, note summaries, and follow-up lists."
  },
  {
    icon: Files,
    title: "Notes & Files",
    body: "Organize notes, documents, photos, audio, and evidence references with privacy-aware handling and clear consent."
  },
  {
    icon: BellRing,
    title: "Notifications",
    body: "Standard reminders, persistent reminders, and optional call-style alerts for court, training, and qualification deadlines."
  }
];

export const policeFeatures = [
  {
    icon: Siren,
    title: "Officer readiness",
    body: "Designed around shift preparation, court dates, training deadlines, and the operational reminders that help officers stay prepared."
  },
  {
    icon: RadioTower,
    title: "Operational clarity",
    body: "A direct, organized experience for incidents, translation, calendar management, notes, files, and police-focused AI assistance."
  },
  {
    icon: FileLock2,
    title: "Security-first foundation",
    body: "Built toward encryption, role-based access, audit logs, biometric login, Canadian privacy compliance, and consent-led access."
  }
];

export const awarenessCards = [
  {
    icon: HeartPulse,
    title: "Recognize the signs",
    body: "Accessible education helps people understand stress responses, triggers, and when to seek support."
  },
  {
    icon: Users,
    title: "Support networks",
    body: "Clear next steps for family, peers, and teams who want to help without causing more pressure."
  },
  {
    icon: MessageCircle,
    title: "Stigma reduction",
    body: "Language and flows are built to normalize care, not dramatize it."
  }
];

export const timeline = [
  {
    date: "Project 001",
    title: "Official corporate website",
    body: "The opaiapp.com website establishes the OPAi brand, explains OPAi Police, shares the founder story, supports PTSD awareness, and provides launch-ready app download destinations."
  },
  {
    date: "Project 002",
    title: "Reusable design system",
    body: "A shared OPAi design language is being shaped for the website, iOS app, Android app, backend dashboards, and future desktop experiences."
  },
  {
    date: "Project 003",
    title: "Mobile app for iOS and Android",
    body: "OPAi Police is designed as a cross-platform mobile app with officer readiness, incidents, AI assistance, translation, scheduling, resources, and secure workflow foundations."
  },
  {
    date: "Projects 004-005",
    title: "Secure API and database foundation",
    body: "The platform roadmap includes a FastAPI backend and normalized PostgreSQL database for authentication, incidents, reports, AI conversations, reminders, evidence metadata, translations, and synchronization."
  }
];

export const founderTimeline = [
  {
    date: "Origin",
    title: "Built from lived police experience",
    body: "OPAi was created by a medically retired Canadian police officer and PTSD survivor who saw the need for better officer support."
  },
  {
    date: "Research",
    title: "Operational workflows first",
    body: "The platform centers shift readiness, incident organization, translation, calendar management, court reminders, and training reminders."
  },
  {
    date: "Build",
    title: "Mobile-first police design",
    body: "Core workflows are shaped for fast decisions, readable information, privacy, and support that feels close at hand."
  },
  {
    date: "Launch",
    title: "Website, design system, app MVP",
    body: "OPAi begins with the official website, then moves into the design system, mobile screens, and the future app architecture."
  }
];

export const platformPillars = [
  {
    icon: Smartphone,
    title: "Mobile application",
    body: "A Canadian police officer app for shift readiness, incidents, AI assistance, translation, resources, calendar workflows, notes, files, and reminders."
  },
  {
    icon: Code2,
    title: "Design system",
    body: "Reusable colors, typography, spacing, buttons, cards, navigation patterns, accessibility rules, and product standards across every OPAi surface."
  },
  {
    icon: Server,
    title: "Backend API",
    body: "A secure service foundation planned for authentication, AI interactions, incidents, calendars, notifications, translation, document storage, and sync."
  },
  {
    icon: Database,
    title: "Database layer",
    body: "A normalized PostgreSQL model for users, incidents, reports, AI conversations, reminders, evidence metadata, translations, settings, and audit history."
  }
];

export const stats = [
  { value: "24/7", label: "resource access" },
  { value: "2", label: "mobile platforms" },
  { value: "0", label: "clutter by design" }
];

export const differentiators = [
  {
    icon: Sparkles,
    title: "Premium product language",
    body: "Every screen and interaction is built to feel polished, focused, and reliable."
  },
  {
    icon: LockKeyhole,
    title: "Enterprise posture",
    body: "The product story is ready for institutions, partners, and app-store review."
  },
  {
    icon: BadgeCheck,
    title: "Human-centered quality",
    body: "Support tools are only useful when people trust them enough to open them."
  }
];

export const contactOptions = [
  { icon: MessageCircle, title: "Partnerships", body: "Discuss pilots, agencies, schools, and community rollouts." },
  { icon: Building2, title: "Organizations", body: "Bring OPAi into a team environment with care and clarity." },
  { icon: Phone, title: "Product support", body: "Ask about app availability, launch planning, and onboarding." },
  { icon: MapPinned, title: "Media and outreach", body: "Request founder background, awareness material, and updates." }
];

export type FeatureItem = (typeof featureCards)[number];
