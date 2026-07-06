import { Container } from "@/components/Container";
import { FadeIn } from "@/components/Motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-mesh-dark py-24 sm:py-28">
      <div className="fine-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative">
        <FadeIn className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-ptsd-green">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{body}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
