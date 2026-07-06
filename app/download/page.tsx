import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { StoreButtons } from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Download",
  description: "OPAi Police mobile apps for iOS and Android are coming soon."
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="OPAi Police is coming soon to iOS and Android."
        body="The mobile app will support law-enforcement productivity, shift readiness, translation, calendar reminders, court, training, AI assistance, and PTSD awareness."
      />
      <section id="download" className="py-20">
        <Container>
          <FadeIn className="glass mx-auto max-w-4xl rounded-[8px] p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ptsd-green">Mobile apps</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Download when OPAi launches.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              App Store and Google Play destinations are prepared for launch. The buttons will point to the live mobile
              apps once OPAi Police is approved and available.
            </p>
            <StoreButtons className="mt-9 justify-center" />
            <div className="mt-8">
              <ButtonLink href="/contact" variant="secondary">
                Request launch updates
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
