import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata, policeFeatures } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/opai-police/");

export default function OpaiPolicePage() {
  return (
    <>
      <PageHero
        eyebrow="OPAi Police"
        title="The AI assistant built for law enforcement."
        body="OPAi Police is shaped for Canadian police officers who need practical support for productivity, shift readiness, incidents, translation, calendar management, court, training, notifications, and PTSD awareness."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {policeFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <SectionHeader
              eyebrow="Designed for trust"
              title="Readable, respectful, and ready for operational pressure."
              body="A law-enforcement AI assistant must feel credible at first glance and dependable after repeated use. OPAi keeps the interface calm, the language direct, and the workflows obvious."
            />
            <FadeIn className="glass rounded-[8px] p-8">
              <dl className="grid gap-6 sm:grid-cols-3">
                <div>
                  <dt className="text-sm text-white/48">Experience</dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">Mobile-first</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/48">Tone</dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">Calm</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/48">Focus</dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">Readiness</dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
