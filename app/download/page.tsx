import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/download/");

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="App Access"
        title="Connect with the OPAi product team."
        body="Use verified OPAi channels for mobile access, product support, and organizational inquiries."
      />
      <section id="download" className="py-20">
        <Container>
          <FadeIn className="glass mx-auto max-w-4xl rounded-[8px] p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ptsd-green">Official channels</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">OPAi access and support.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              Contact the OPAi team for authorized access and support. Official distribution links are published here only through verified OPAi channels.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/support/">
                Contact support
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/features/" variant="secondary">
                Explore features
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
