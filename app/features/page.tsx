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
  description: "Explore OPAi product features for safety, wellness, PTSD awareness, privacy, and resource access."
};

const workflow = [
  "Open the app with a clean, low-friction interface.",
  "Review safety, wellness, or PTSD awareness resources.",
  "Use check-ins and guided prompts to move toward the right next step.",
  "Connect with support pathways designed for dignity and privacy."
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Focused tools for safety, wellness, and trusted support."
        body="OPAi is designed around fast comprehension, human-centered interaction, and a premium experience that stays out of the way."
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
            title="Clear steps instead of cognitive overload."
            body="The experience is structured for stressful moments, when people need fewer decisions and more confidence."
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
