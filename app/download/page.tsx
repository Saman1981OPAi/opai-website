import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { StoreButtons } from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Download",
  description: "Download OPAi for iOS and Android."
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Get OPAi on your mobile device."
        body="The OPAi mobile experience is prepared for App Store and Google Play distribution with a premium, low-friction product flow."
      />
      <section id="download" className="py-20">
        <Container>
          <FadeIn className="glass mx-auto max-w-4xl rounded-[8px] p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ptsd-green">Mobile apps</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">Download when OPAi launches.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64">
              Use the large store buttons below for the production app destinations. They are styled and ready for live
              App Store and Google Play links.
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
