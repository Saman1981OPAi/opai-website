import {
  AudioLines,
  BadgeCheck,
  Brain,
  Building2,
  CalendarDays,
  ClipboardPenLine,
  CloudSun,
  Code2,
  Database,
  FileAudio,
  FileLock2,
  GraduationCap,
  HeartPulse,
  Languages,
  ListChecks,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  Phone,
  Server,
  Sparkles,
  Smartphone,
  Users
} from "lucide-react";
import type { Metadata } from "next";

export const site = {
  name: "OPAi",
  title: "OPAi | Operational Police Ai for Canadian Law Enforcement Officers",
  description:
    "OPAi Police is a Canadian law-enforcement productivity platform for AI assistance, report writing, translation, scheduling, officer workflows, and verified mental-health resources.",
  url: "https://opaiapp.com",
  email: "Admin@opaiapp.com"
};

export const externalLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61591569999710",
  instagram: "https://www.instagram.com/opaiapp/",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb8HFSMEQIaoXOL6YO1a"
} as const;

export const seoKeywords = [
  "OPAi",
  "OPAi Police",
  "Canadian police AI",
  "AI assistant for law enforcement",
  "police productivity app",
  "report writing assistant",
  "police translation app",
  "paid duty organizer",
  "canvass notes",
  "PTSD awareness",
  "mental health resources",
  "Canadian policing technology",
  "Operational Police Ai",
  "Canadian law enforcement officers"
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
    description: "Learn about OPAi, its Canadian policing focus, product principles, and officer-centred mission.",
    priority: 0.8,
    changeFrequency: "monthly" as const
  },
  {
    path: "/features/",
    title: "OPAi Police Features",
    description:
      "Explore OPAi Police features for AI assistance, report writing, audio transcription, translation, paid duty, canvass, calendar, training, weather, and mental-health resources.",
    priority: 0.95,
    changeFrequency: "monthly" as const
  },
  {
    path: "/opai-police/",
    title: "OPAi Police Canadian Law-Enforcement Assistant",
    description:
      "OPAi Police brings focused AI, organization, translation, scheduling, and support tools into one mobile experience for Canadian law-enforcement officers.",
    priority: 0.95,
    changeFrequency: "monthly" as const
  },
  {
    path: "/audio-statement/",
    title: "Audio Statement and AI Transcription",
    description:
      "Capture or import an audio statement, request AI transcription, review the wording, and keep officer-controlled notes organized.",
    priority: 0.85,
    changeFrequency: "monthly" as const
  },
  {
    path: "/report-writing/",
    title: "Report Writing",
    description:
      "Organize officer-provided facts into a clear report draft without adding facts, conclusions, or evidence that were not supplied.",
    priority: 0.9,
    changeFrequency: "monthly" as const
  },
  {
    path: "/translation/",
    title: "Police-Context Translation",
    description:
      "Use text, voice, conversation, image, and document translation with clear verification reminders for operational communication.",
    priority: 0.9,
    changeFrequency: "monthly" as const
  },
  {
    path: "/paid-duty/",
    title: "Paid Duty Organizer",
    description: "Organize paid-duty details, local notes, dates, times, contacts, and reminders in a concise mobile workflow.",
    priority: 0.8,
    changeFrequency: "monthly" as const
  },
  {
    path: "/canvass/",
    title: "Canvass Organizer",
    description:
      "Record addresses, contact outcomes, follow-ups, and concise local notes during an officer-directed canvass.",
    priority: 0.8,
    changeFrequency: "monthly" as const
  },
  {
    path: "/mental-health-resources/",
    title: "Verified Mental Health Resources",
    description:
      "Access a verified Canadian directory of crisis, first-responder, community, and Ontario mental-health resources.",
    priority: 0.9,
    changeFrequency: "monthly" as const
  },
  {
    path: "/ptsd-awareness/",
    title: "PTSD Awareness and Officer Wellness",
    description:
      "Learn how OPAi supports stigma reduction, respectful wellness education, and access to verified support resources.",
    priority: 0.8,
    changeFrequency: "monthly" as const
  },
  {
    path: "/founder-story/",
    title: "Founder Story",
    description:
      "Read the founder story behind OPAi, shaped by Canadian policing experience, productivity needs, and PTSD awareness.",
    priority: 0.7,
    changeFrequency: "monthly" as const
  },
  {
    path: "/download/",
    title: "Access OPAi Police",
    description:
      "Learn how to contact OPAi about authorized mobile access and where public App Store availability will be announced after Apple approval.",
    priority: 0.75,
    changeFrequency: "weekly" as const
  },
  {
    path: "/contact/",
    title: "Contact OPAi",
    description: "Contact OPAi for product support, organizational inquiries, partnerships, media, and accessibility assistance.",
    priority: 0.7,
    changeFrequency: "monthly" as const
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy",
    description:
      "Review OPAi privacy practices for the website, account information, AI processing, user-initiated media, location, and support requests.",
    priority: 0.6,
    changeFrequency: "yearly" as const
  },
  {
    path: "/terms-of-service/",
    title: "Terms of Service",
    description:
      "Review the terms governing lawful use, professional judgment, AI verification, translations, resource information, and OPAi intellectual property.",
    priority: 0.6,
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
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "OPAi",
      images: [{ url: "/images/opai-hero.png", width: 1536, height: 864, alt: "OPAi Police mobile experience" }],
      locale: "en_CA",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/images/opai-hero.png"]
    },
    robots: { index: true, follow: true }
  };
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OPAi",
  legalName: "1001674341 ONTARIO INC.",
  url: site.url,
  email: site.email,
  logo: `${site.url}/images/brand/opai-police-ptsd-emblem.png`,
  sameAs: [externalLinks.instagram, externalLinks.facebook, externalLinks.whatsappChannel]
};

export const softwareStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OPAi Police",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android",
  description: site.description,
  url: site.url,
  publisher: { "@type": "Organization", name: "OPAi" }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en-CA",
  publisher: { "@type": "Organization", name: "OPAi" }
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

export const productLinks = [
  { label: "Audio Statement", href: "/audio-statement/" },
  { label: "Report Writing", href: "/report-writing/" },
  { label: "Translation", href: "/translation/" },
  { label: "Paid Duty", href: "/paid-duty/" },
  { label: "Canvass", href: "/canvass/" },
  { label: "Mental Health Resources", href: "/mental-health-resources/" }
];

export const featureCards = [
  {
    icon: Brain,
    title: "OPAi Assistant",
    body: "Focused AI assistance for organizing information, building next steps, and supporting officer-led decisions with visible verification reminders.",
    href: "/opai-police/"
  },
  {
    icon: ClipboardPenLine,
    title: "Report Writing",
    body: "Turn officer-provided facts into a structured draft without inventing facts, evidence, observations, or conclusions.",
    href: "/report-writing/"
  },
  {
    icon: FileAudio,
    title: "Audio Statement",
    body: "Capture or import an audio statement, request transcription, and review the result before using or exporting it.",
    href: "/audio-statement/"
  },
  {
    icon: AudioLines,
    title: "AI Transcription",
    body: "Convert user-initiated audio into editable text with privacy-safe processing and a clear accuracy warning.",
    href: "/audio-statement/#transcription"
  },
  {
    icon: Languages,
    title: "Translation",
    body: "Translate text, voice, conversations, images, and documents, with every output labelled for verification.",
    href: "/translation/"
  },
  {
    icon: CalendarDays,
    title: "Paid Duty",
    body: "Organize local paid-duty details, dates, times, contacts, notes, and reminders in one concise workflow.",
    href: "/paid-duty/"
  },
  {
    icon: ListChecks,
    title: "Canvass",
    body: "Track addresses, contact outcomes, follow-ups, and brief notes during an officer-directed canvass.",
    href: "/canvass/"
  },
  {
    icon: CalendarDays,
    title: "Calendar",
    body: "Keep court, meetings, follow-ups, paid duty, and other officer-entered commitments visible and organized.",
    href: "/features/#calendar"
  },
  {
    icon: GraduationCap,
    title: "Training",
    body: "Track training and requalification dates with local reminders and clear due-date visibility.",
    href: "/features/#training"
  },
  {
    icon: CloudSun,
    title: "Weather",
    body: "Use native Apple WeatherKit on iPhone with foreground location, manual Canadian-city selection, caching, and Apple attribution.",
    href: "/features/#weather"
  },
  {
    icon: HeartPulse,
    title: "Mental Health Resources",
    body: "Find verified Canadian crisis, first-responder, community, and Ontario resources without diagnosis, tracking, or automatic contact.",
    href: "/mental-health-resources/"
  }
];

export const policeFeatures = [
  {
    icon: Smartphone,
    title: "Officer-focused mobile design",
    body: "Concise screens, icon-first actions, responsive layouts, and workflows designed for repeated use on iPhone and iPad."
  },
  {
    icon: Brain,
    title: "AI with visible guardrails",
    body: "AI outputs remain assistance only. Reports use supplied facts, translations require verification, and professional judgment stays with the officer."
  },
  {
    icon: FileLock2,
    title: "Privacy-led architecture",
    body: "Authenticated backend access, request limits, content-free operational logs, explicit media actions, and clear consent controls shape the platform."
  }
];

export const awarenessCards = [
  {
    icon: HeartPulse,
    title: "Recognize the signs",
    body: "Accessible education can help people recognize stress responses, triggers, and when to seek qualified support."
  },
  {
    icon: Users,
    title: "Find verified resources",
    body: "OPAi links to verified crisis, first-responder, community, and Ontario resources through a dedicated directory."
  },
  {
    icon: MessageCircle,
    title: "Reduce stigma",
    body: "Calm, direct language helps normalize support without presenting OPAi as diagnosis, treatment, or crisis intervention."
  }
];

export const founderTimeline = [
  {
    date: "Origin",
    title: "Built from lived police experience",
    body: "OPAi was created by a medically retired Canadian police officer and PTSD survivor who saw the need for more practical officer support."
  },
  {
    date: "Focus",
    title: "Operational workflows first",
    body: "The product centres report writing, translation, scheduling, local organization, and fast access to verified support resources."
  },
  {
    date: "Design",
    title: "Mobile clarity under pressure",
    body: "Concise language, icon-first actions, readable hierarchy, privacy choices, and clear safety boundaries guide every screen."
  },
  {
    date: "Mission",
    title: "Technology that supports judgment",
    body: "OPAi helps officers organize their work while keeping service policy, official systems, supervision, and professional judgment in control."
  }
];

export const platformPillars = [
  {
    icon: Smartphone,
    title: "Mobile experience",
    body: "One officer-focused interface for AI assistance, report writing, translation, calendars, paid duty, canvass, weather, and resources."
  },
  {
    icon: Code2,
    title: "Shared design system",
    body: "Reusable colour, typography, spacing, navigation, accessibility, and interaction rules keep every OPAi surface consistent."
  },
  {
    icon: Server,
    title: "Secure API boundary",
    body: "Authenticated services keep provider credentials off the mobile device and enforce quotas, limits, validation, and privacy-safe logs."
  },
  {
    icon: Database,
    title: "Controlled data layer",
    body: "Structured account and workflow data is separated from transient AI content and governed by consent, access control, and deletion choices."
  }
];

export const differentiators = [
  {
    icon: Sparkles,
    title: "Focused product language",
    body: "Concise labels and icon-first actions reduce reading load and keep essential tasks easy to scan."
  },
  {
    icon: LockKeyhole,
    title: "Security posture",
    body: "Backend-only provider credentials, authentication, quotas, request limits, and privacy-safe logs protect the service boundary."
  },
  {
    icon: BadgeCheck,
    title: "Human verification",
    body: "AI and translation outputs remain clearly labelled and must be checked against source information and professional requirements."
  }
];

export const contactOptions = [
  { icon: MessageCircle, title: "Product support", body: "Get help with OPAi access, features, privacy, and account questions." },
  { icon: Building2, title: "Organizations", body: "Discuss pilots, teams, accessibility, and organizational deployment." },
  { icon: Phone, title: "Partnerships", body: "Start a conversation about training, research, community, or technology partnerships." },
  { icon: MapPinned, title: "Media and outreach", body: "Request company information, founder background, or awareness materials." }
];

export type FeatureItem = (typeof featureCards)[number];
