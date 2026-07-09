import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/terms-of-service/");

const sections = [
  {
    title: "Use of the service",
    body: "You agree to use OPAi only for lawful purposes and in a way that does not harm the platform, other users, or the integrity of the service."
  },
  {
    title: "No emergency guarantee",
    body: "OPAi may provide wellness and resource information, but it is not a replacement for emergency services, clinical care, or professional advice."
  },
  {
    title: "Accounts and access",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for activity that occurs under your account."
  },
  {
    title: "Intellectual property",
    body: "The OPAi name, interface, content, and related assets are owned by OPAi or its licensors and may not be copied without permission."
  },
  {
    title: "Changes",
    body: "OPAi may update these terms as the product evolves. Continued use after updates means you accept the revised terms."
  }
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Clear expectations for using OPAi."
        body="These terms are a launch-ready baseline and should be reviewed by counsel before public release."
      />
      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="glass rounded-[8px] p-6">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/64">{section.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
