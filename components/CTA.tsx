import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/Motion";

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <FadeIn className="glass rounded-[8px] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ptsd-green">Built for rollout</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Bring OPAi Police to officers who need it.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
                Explore the app vision, contact the team, or start a conversation about pilots, partnerships,
                organizational deployment, and future secure platform integrations.
              </p>
            </div>
            <ButtonLink href="/contact/" className="lg:justify-self-end">
              Contact OPAi
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
