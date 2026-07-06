import {
  BadgeCheck,
  BellRing,
  Brain,
  Building2,
  CalendarDays,
  ClipboardCheck,
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
  email: "Admin@opaiapp.com"
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
