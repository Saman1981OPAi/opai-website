import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata, featureCards } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/features/");

const workflow = [
  "Organize officer-provided facts, audio, notes, and follow-ups in focused workflows.",
  "Use AI to draft, transcribe, translate, summarize, and identify missing information.",
  "Keep paid duty, canvass, court, calendar, training, and reminders visible.",
  "Use native iPhone weather and verified support resources without background tracking."
];

const featureAnchors: Record<string, string> = {
  Calendar: "calendar",
  Training: "training",
  Weather: "weather"
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Operational tools for modern law enforcement."
        body="OPAi Police combines AI assistance, report writing, audio transcription, translation, paid duty, canvass, calendar, training, weather, and verified mental-health resources."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, index) => {
              const anchor = featureAnchors[feature.title];
              return (
                <div key={feature.title} id={anchor} className="scroll-mt-28">
                  <FeatureCard {...feature} index={index} />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <Container>
          <SectionHeader
            eyebrow="Workflow"
            title="Useful reminders without administrative drag."
            body="The experience keeps officer actions explicit, labels AI output clearly, and reduces reading load without replacing policy, supervision, or official systems."
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
