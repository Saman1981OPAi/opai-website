import Link from "next/link";
import { CheckCircle2, Ribbon, ShieldCheck, Smartphone, UserRound } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { FadeIn } from "@/components/Motion";
import { StoreButtons } from "@/components/StoreButtons";

const whyItems = [
  "Increase productivity and save time on duty",
  "Organize responsibilities across demanding shifts",
  "Make better decisions with operational AI support",
  "Stay focused on what matters most in Canadian policing",
  "Built with purpose. Driven by police experience."
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="pb-16 pt-6">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.82fr_0.82fr]">
            <FadeIn className="glass relative overflow-hidden rounded-[8px] p-6">
              <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-opai-blue/18 to-transparent sm:block" />
              <div className="relative max-w-xl">
                <div className="mb-5 flex size-12 items-center justify-center rounded-[8px] border border-opai-blue/30 bg-opai-blue/10">
                  <UserRound className="size-6 text-opai-blue-soft" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-opai-blue-soft">
                  Built from experience
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Created by a Canadian former police officer.</h2>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Operational Police Ai was shaped by service, personal struggle, and a clear mission: build technology
                  that helps Canadian police officers become more productive while supporting mental health and raising
                  PTSD awareness.
                </p>
                <Link
                  href="/founder-story"
                  className="focus-ring mt-6 inline-flex min-h-10 items-center rounded-[8px] border border-opai-blue/60 px-4 text-sm font-semibold text-opai-blue-soft hover:bg-opai-blue/10"
                >
                  Read my story
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="glass rounded-[8px] p-6">
              <div className="mb-5 flex size-12 items-center justify-center rounded-[8px] border border-ptsd-green/30 bg-ptsd-green/10">
                <Ribbon className="size-7 text-ptsd-green" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ptsd-green">PTSD Awareness</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                PTSD is real. It affects first responders, military members, healthcare workers, survivors of violence,
                and countless others.
              </p>
              <p className="mt-5 text-base font-semibold leading-7 text-ptsd-green">
                End the stigma.
                <br />
                Support survivors.
                <br />
                Spread awareness.
                <br />
                Inspire hope.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="glass rounded-[8px] p-6">
              <div className="mb-5 flex size-12 items-center justify-center rounded-[8px] border border-opai-blue/30 bg-opai-blue/10">
                <ShieldCheck className="size-7 text-opai-blue-soft" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-opai-blue-soft">Why OPAi?</p>
              <ul className="mt-4 grid gap-3">
                {whyItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/72">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-opai-blue" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <FadeIn className="glass mx-auto grid max-w-5xl gap-6 rounded-[8px] border-opai-blue/40 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="grid size-14 place-items-center rounded-[8px] border border-opai-blue/50 bg-opai-blue/10">
              <Smartphone className="size-7 text-opai-blue-soft" aria-hidden="true" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Download OPAi Today</p>
              <p className="mt-1 text-sm text-white/64">Operational Police Ai for Canadian police officers.</p>
            </div>
            <StoreButtons className="sm:justify-end" />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
