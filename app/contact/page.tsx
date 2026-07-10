import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { contactOptions, createPageMetadata, externalLinks, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/contact/");

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
              <div className="mt-6 rounded-[16px] border border-opai-blue/20 bg-white/[0.04] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/48">Official OPAi channels</h2>
                <div className="mt-4 grid gap-3 text-sm">
                  <a className="text-opai-blue-soft hover:text-white" href={externalLinks.whatsappChannel} rel="noopener noreferrer" target="_blank">
                    WhatsApp Channel
                  </a>
                  <a className="text-opai-blue-soft hover:text-white" href={externalLinks.instagram} rel="noopener noreferrer" target="_blank">
                    Instagram @opaiapp
                  </a>
                  <a className="text-opai-blue-soft hover:text-white" href={externalLinks.facebook} rel="noopener noreferrer" target="_blank">
                    Facebook
                  </a>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/52">
                  These links open outside the website. OPAi does not add tracking parameters to these public channel links.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
