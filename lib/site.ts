import {
  Activity,
  BadgeCheck,
  BellRing,
  Brain,
  Building2,
  FileLock2,
  HeartPulse,
  Landmark,
  LifeBuoy,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  Phone,
  RadioTower,
  ShieldCheck,
  Siren,
  Sparkles,
  Users
} from "lucide-react";

export const site = {
  name: "OPAi",
  title: "OPAi | Operational Police Ai for Canadian Police Officers",
  description:
    "OPAi, Operational Police Ai, is a premium mobile platform designed for Canadian police officers, supporting operational productivity, PTSD awareness, wellness resources, and secure public safety workflows.",
  url: "https://opaiapp.com",
  email: "hello@opaiapp.com"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "PTSD Awareness", href: "/ptsd-awareness" },
  { label: "Founder", href: "/founder-story" },
  { label: "Contact", href: "/contact" }
];

export const featureCards = [
  {
    icon: ShieldCheck,
    title: "Trusted safety layer",
    body: "A composed mobile experience for safety check-ins, resource discovery, and timely support."
  },
  {
    icon: Brain,
    title: "PTSD-aware design",
    body: "Built around calm interaction patterns, low-friction access, and trauma-informed content pathways."
  },
  {
    icon: BellRing,
    title: "Smart notifications",
    body: "Clear, respectful alerts for important moments without overwhelming the person using the app."
  },
  {
    icon: FileLock2,
    title: "Privacy-first foundation",
    body: "Security, consent, and careful data handling are core to the platform experience."
  },
  {
    icon: LifeBuoy,
    title: "Guided resources",
    body: "Fast access to support options, education, and practical next steps when clarity matters."
  },
  {
    icon: Activity,
    title: "Wellness insights",
    body: "Readable status views help people notice patterns and seek support earlier."
  }
];

export const policeFeatures = [
  {
    icon: Siren,
    title: "Officer wellness support",
    body: "Designed for quick access to wellness resources that fit the pace and sensitivity of public safety work."
  },
  {
    icon: RadioTower,
    title: "Operational clarity",
    body: "A direct, organized experience for communication, education, and service-aware information."
  },
  {
    icon: Landmark,
    title: "Community trust",
    body: "Supports a modern public-facing posture with transparent resources and accessible help pathways."
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
    date: "Origin",
    title: "A mission shaped by lived need",
    body: "OPAi begins with the belief that high-pressure service communities deserve calmer, smarter access to support."
  },
  {
    date: "Research",
    title: "Trauma-informed product planning",
    body: "The platform centers privacy, accessibility, trust, and a low-clutter experience for sensitive moments."
  },
  {
    date: "Build",
    title: "Mobile-first public safety design",
    body: "Core workflows are shaped for fast decisions, readable information, and support that feels close at hand."
  },
  {
    date: "Launch",
    title: "Community adoption",
    body: "OPAi is prepared for app distribution, organizational partnerships, and ongoing product refinement."
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
