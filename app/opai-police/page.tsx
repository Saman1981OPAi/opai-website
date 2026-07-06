import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { policeFeatures } from "@/lib/site";

export const metadata: Metadata = {
  title: "OPAi Police",
  description: "OPAi Police supports officer wellness, public safety communication, and trusted community resource access."
};

export default function OpaiPolicePage() {
  return (
    <>
      <PageHero
        eyebrow="OPAi Police"
        title="A modern wellness layer for public safety communities."
        body="OPAi Police is shaped for the realities of service work: pressure, privacy, trust, and a need for direct access to clear support."
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
              title="Readable, respectful, and ready for high-stakes environments."
              body="A public safety platform must feel credible at first glance and dependable after repeated use. OPAi keeps the interface calm, the language direct, and the pathways obvious."
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
                  <dd className="mt-2 text-2xl font-semibold text-white">Wellness</dd>
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
