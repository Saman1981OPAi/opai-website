import type { LucideIcon } from "lucide-react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";

type ProductPageProps = {
  body: string;
  eyebrow: string;
  features: string[];
  guardrail: string;
  guardrailTitle: string;
  icon: LucideIcon;
  title: string;
};

export function ProductPage({
  body,
  eyebrow,
  features,
  guardrail,
  guardrailTitle,
  icon: Icon,
  title
}: ProductPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={body} />
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <FadeIn>
              <div className="mb-6 grid size-14 place-items-center rounded-[8px] border border-opai-blue/30 bg-opai-blue/10 text-opai-blue-soft">
                <Icon className="size-7" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Focused tools, clear control.</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex min-w-0 gap-3 rounded-[8px] border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-white/72">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-opai-blue-soft" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.08} className="border-l-2 border-ptsd-green bg-ptsd-green/[0.07] p-6 sm:p-8">
              <ShieldCheck className="size-7 text-ptsd-green" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-semibold text-white">{guardrailTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">{guardrail}</p>
            </FadeIn>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
