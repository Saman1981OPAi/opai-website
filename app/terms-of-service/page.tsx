import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/terms-of-service/");

const sections = [
  {
    title: "Lawful and professional use",
    body: "Use OPAi only for lawful purposes and in accordance with applicable law, service policy, supervision, authorization, privacy obligations, and professional judgment. Do not use OPAi to bypass official systems or controls."
  },
  {
    title: "Productivity assistance only",
    body: "OPAi is not an official police-service system and does not replace records management, dispatch, evidence systems, supervision, policy, training, legal advice, medical advice, emergency services, or professional judgment."
  },
  {
    title: "AI, reports, and transcription",
    body: "AI output may be incomplete or inaccurate and must be verified. Report Writing must not be treated as a source of facts. Audio transcripts must be compared with the original recording. The user remains responsible for every correction, decision, record, and submission."
  },
  {
    title: "Translation",
    body: "AI-generated translation can be wrong or omit context. Important legal, medical, safety, evidentiary, and operational content must be verified with a qualified interpreter or another reliable source."
  },
  {
    title: "Paid Duty, Canvass, calendar, and reminders",
    body: "These personal organization tools do not replace official schedules, payroll, notes, records, notifications, or service procedures. Reminders are optional aids and are not guaranteed to fire, synchronize, or satisfy an official deadline."
  },
  {
    title: "Weather and external resources",
    body: "Weather information may be delayed, unavailable, or inaccurate and is not an emergency warning service. Mental-health links are a directory only. External providers, Apple Weather, and linked websites are governed by their own terms and privacy practices."
  },
  {
    title: "Accounts and security",
    body: "Users are responsible for protecting credentials, devices, and sessions and for promptly reporting suspected unauthorized access. Access may be limited or suspended to protect users, the platform, or legal obligations."
  },
  {
    title: "Ownership, availability, and changes",
    body: "The OPAi name, interface, content, and related assets are owned by 1001674341 ONTARIO INC. or its licensors. Features may be updated, limited, or withdrawn where necessary for safety, security, compliance, or service quality."
  },
  {
    title: "Contact",
    body: `Questions about these terms can be sent to ${site.email}.`
  }
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Use OPAi as assistance, never as authority."
        body="These terms define responsible use of OPAi Police and the limits that keep official systems, policy, supervision, and professional judgment in control."
      />
      <section className="py-20">
        <Container className="max-w-4xl">
          <p className="mb-8 text-sm text-white/48">Last updated: July 16, 2026</p>
          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="glass rounded-[8px] p-6">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/64">{section.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
