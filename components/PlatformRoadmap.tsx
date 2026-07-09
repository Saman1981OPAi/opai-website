import { FeatureCard } from "@/components/FeatureCard";
import { Timeline } from "@/components/Timeline";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { platformPillars, timeline } from "@/lib/site";

export function PlatformRoadmap() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-20">
      <Container>
        <SectionHeader
          eyebrow="Platform foundation"
          title="One connected product system for OPAi."
          body="Project 001 through Project 012 now define the public website, shared design system, mobile app shell, authentication foundation, AI safety workflow, shift readiness, incidents, translation, calendar, and notification planning."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {platformPillars.map((pillar, index) => (
            <FeatureCard key={pillar.title} {...pillar} index={index} />
          ))}
        </div>
        <div className="mt-16">
          <SectionHeader
            eyebrow="Roadmap"
            title="Built in layers, from brand to officer workflows."
            body="OPAi is being developed step by step so each release can be reviewed, tested, and improved before production systems are connected."
            align="center"
          />
          <div className="mt-14">
            <Timeline items={timeline} />
          </div>
        </div>
      </Container>
    </section>
  );
}
