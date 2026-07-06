import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { differentiators } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OPAi, Operational Police Ai, the law-enforcement AI assistant supporting productivity, officer readiness, and PTSD awareness."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OPAi"
        title="Operational Police Ai, built with purpose."
        body="OPAi is a professional AI platform for law enforcement, beginning with OPAi Police for Canadian police officers and expanding from a trusted product foundation."
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
