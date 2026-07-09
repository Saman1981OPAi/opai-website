import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { awarenessCards, createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/ptsd-awareness/");

const principles = [
  "Use calm, plain language.",
  "Reduce urgency unless urgency is necessary.",
  "Protect privacy and consent.",
  "Make support easy to find."
];

export default function PtsdAwarenessPage() {
  return (
    <>
      <PageHero
        eyebrow="PTSD Awareness"
        title="Awareness built with care, not noise."
        body="PTSD support deserves dignity. OPAi presents education and pathways in a way that feels grounded, accessible, and human."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {awarenessCards.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <Container>
          <SectionHeader
            eyebrow="Principles"
            title="Trauma-informed interaction choices."
            body="The product avoids heavy-handed drama and focuses on comprehension, autonomy, and clear support."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <FadeIn key={principle} delay={index * 0.05} className="rounded-[8px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-base font-medium text-white">{principle}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
