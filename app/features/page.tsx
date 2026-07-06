import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { featureCards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore OPAi Police features for shift readiness, incidents, translation, calendar, court, training, AI assistance, notes, files, and notifications."
};

const workflow = [
  "Start a shift with quick reminders instead of a forced checklist.",
  "Capture an incident with notes, people, media, documents, and evidence references in one flow.",
  "Use AI to draft, review, translate, summarize, search, and prepare follow-ups.",
  "Stay ahead of court, training, requalification, and shift reminders."
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Operational tools for modern law enforcement."
        body="OPAi Police is designed for shift readiness, incident organization, translation, court reminders, training reminders, calendar management, AI assistance, and PTSD awareness."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <Container>
          <SectionHeader
            eyebrow="Workflow"
            title="Useful reminders without administrative drag."
            body="The experience is structured for officers who need clarity, speed, and confidence without being forced through unnecessary reporting steps."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <FadeIn key={step} delay={index * 0.05} className="glass rounded-[8px] p-6">
                <p className="text-sm font-semibold text-ptsd-green">0{index + 1}</p>
                <p className="mt-4 text-base leading-7 text-white/72">{step}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
