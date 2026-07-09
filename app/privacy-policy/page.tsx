import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/privacy-policy/");

const sections = [
  {
    title: "Current public website and app preview",
    body: "The current OPAi public website and launch preview do not create user accounts, process payments, store incident data, upload documents, or transmit app activity to an OPAi backend."
  },
  {
    title: "Contact by email",
    body: "If you contact OPAi by email, we may use the information you provide to respond to your message, discuss launch updates, support partnerships, or answer product questions."
  },
  {
    title: "Future production services",
    body: "Future versions of OPAi may include accounts, secure synchronization, notifications, AI interactions, incident workflows, document metadata, translations, and support features. Privacy practices will be updated before those services collect or process personal information."
  },
  {
    title: "Security",
    body: "OPAi is being designed with administrative, technical, and organizational safeguards appropriate for public safety workflows. No digital system can be guaranteed to be perfectly secure."
  },
  {
    title: "Contact",
    body: "For privacy questions, contact Admin@opaiapp.com."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy built around trust."
        body="OPAi is being built with a careful privacy posture for Canadian police officers, public safety workflows, and future secure product services."
      />
      <section className="py-20">
        <Container className="max-w-4xl">
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
