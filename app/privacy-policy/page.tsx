import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/privacy-policy/");

const sections = [
  {
    title: "Website privacy",
    body: "The public OPAi website does not use advertising, behavioural analytics, tracking pixels, or a fabricated visit counter. If you contact OPAi by email, the information you choose to send is used to respond to your inquiry."
  },
  {
    title: "Accounts and operational data",
    body: "The mobile application may process account details, consent choices, preferences, and officer-entered workflow information. Access controls, session safeguards, deletion choices, and data-minimization principles govern these features. OPAi is not an official police records system."
  },
  {
    title: "AI and OpenAI processing",
    body: "When a user explicitly requests AI assistance, report drafting, transcription, or translation, the submitted content is sent through the authenticated OPAi backend and may be processed by OpenAI. Provider response storage is disabled where supported, and operational logs exclude prompts, translations, audio, images, documents, transcripts, authorization values, and sensitive content. Do not submit confidential police records unless authorized."
  },
  {
    title: "Audio, images, and documents",
    body: "Media is transmitted only after an explicit user action for the selected transcription or translation task. File type, size, duration, page, request, and usage limits may apply. Temporary processing files are removed after success or failure, and content is not intentionally written to application logs."
  },
  {
    title: "Location and weather",
    body: "On iPhone, weather uses native Apple WeatherKit. Foreground location is requested only after the user chooses location-based weather. Users can deny location and select a Canadian city manually. OPAi does not request background location for weather or canvass. Cached weather supports limited offline display and includes Apple Weather attribution."
  },
  {
    title: "Mental-health resources",
    body: "Resource calls, texts, and websites open only after user confirmation. OPAi does not assess mental-health risk, contact a provider automatically, record which resource a person uses, store call history, or share resource selections. External providers apply their own privacy practices."
  },
  {
    title: "Security and retention",
    body: "OPAi uses security controls appropriate to the service boundary, including authenticated requests, quotas, validation, request limits, and privacy-safe operational logs. No digital system can be guaranteed perfectly secure. Data is retained only as needed for the requested feature, account obligations, security, law, and user-controlled local workflows."
  },
  {
    title: "Questions and requests",
    body: `For privacy, access, correction, or deletion questions, contact ${site.email}. OPAi is operated by 1001674341 ONTARIO INC.`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy choices should be visible and specific."
        body="This policy explains how OPAi handles website inquiries, account information, AI requests, user-initiated media, location-based weather, and verified resource actions."
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
