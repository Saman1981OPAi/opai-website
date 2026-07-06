import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Founder Story",
  description: "The founder story behind OPAi and its mission to support PTSD awareness and public safety wellness."
};

export default function FounderStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder Story"
        title="A mission to make support feel closer, calmer, and easier to reach."
        body="OPAi is built around a simple belief: when people are under pressure, the right support should be clear, respectful, and immediately accessible."
      />
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Journey"
            title="The path from purpose to product."
            body="The founder story is reflected in the product choices: reduced friction, dignity in every interaction, and a design language that earns trust."
            align="center"
          />
          <div className="mt-14">
            <Timeline />
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
