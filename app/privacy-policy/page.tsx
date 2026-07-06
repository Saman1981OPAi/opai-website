import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "OPAi privacy policy."
};

const sections = [
  {
    title: "Information we collect",
    body: "OPAi may collect account information, contact information, app usage information, device information, and information you choose to provide through forms or support workflows."
  },
  {
    title: "How we use information",
    body: "Information is used to operate the service, improve product quality, provide support, communicate updates, protect the platform, and comply with applicable obligations."
  },
  {
    title: "Sensitive information",
    body: "OPAi is designed with heightened care for wellness-related experiences. Production deployments should minimize sensitive data collection and clearly communicate consent choices."
  },
  {
    title: "Security",
    body: "We use administrative, technical, and organizational safeguards appropriate to the nature of the service. No digital system can be guaranteed to be perfectly secure."
  },
  {
    title: "Contact",
    body: "For privacy questions, contact Admin@opaiapp.com."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy built around trust."
        body="This policy is a production-ready starting point and should be reviewed by counsel before launch."
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
