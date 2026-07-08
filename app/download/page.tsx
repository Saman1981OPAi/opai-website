import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { StoreButtons } from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Download",
  description: "OPAi Police iOS launch planning and Android construction status."
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="OPAi Police is preparing for mobile launch."
        body="The current launch priority is iOS app development, App Store readiness, and public launch materials. Android remains under construction and compatible for later release, but Google Play submission is paused until the D-U-N-S Number for Ebrahimi Holdings is received."
      />
      <section id="download" className="py-20">
        <Container>
          <FadeIn className="glass mx-auto max-w-4xl rounded-[8px] p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ptsd-green">Mobile launch</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">iOS first. Android later.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              App Store readiness is the active review path. Android support stays in the shared codebase, but Google
              Play release work is paused until the required business verification is complete.
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
