import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { contactOptions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact OPAi for partnerships, launch updates, media, and product questions."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with OPAi."
        body="For partnerships, product inquiries, launch updates, or media requests, reach the team through the form or direct email."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactOptions.map((option, index) => (
                <FeatureCard key={option.title} {...option} index={index} />
              ))}
            </div>
            <div>
              <ContactForm />
              <p className="mt-5 text-sm text-white/52">
                Prefer email? Contact <a className="text-opai-blue-soft hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
