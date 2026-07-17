import { FeatureCard } from "@/components/FeatureCard";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { platformPillars } from "@/lib/site";

export function PlatformRoadmap() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-20">
      <Container>
        <SectionHeader
          eyebrow="Platform foundation"
          title="One connected product system for OPAi."
          body="The mobile experience, design system, secure API boundary, and controlled data layer work together to keep officer workflows consistent and provider credentials off the device."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {platformPillars.map((pillar, index) => (
            <FeatureCard key={pillar.title} {...pillar} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
