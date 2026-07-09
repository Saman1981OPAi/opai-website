import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/founder-story/");

export default function FounderStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder Story"
        title="Created by a medically retired Canadian police officer and PTSD survivor."
        body="OPAi was born from lived service experience and a clear mission: build technology that helps officers stay organized, productive, prepared, and more supported."
      />
      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Journey"
            title="The path from lived experience to Operational Police Ai."
            body="The founder story is reflected in the product choices: practical reminders, reduced friction, privacy, dignity in every interaction, and a design language that earns trust."
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
