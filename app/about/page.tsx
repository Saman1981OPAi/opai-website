import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { differentiators } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about OPAi, the intelligent AI assistant supporting productivity, public safety, and PTSD awareness."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OPAi"
        title="Your intelligent AI assistant, built with purpose."
        body="OPAi helps people organize, plan, focus, and achieve while raising awareness for PTSD and supporting public safety communities."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <FeatureCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
