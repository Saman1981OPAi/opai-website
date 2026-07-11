import Image from "next/image";
import { ArrowRight, BrainCircuit, CalendarCheck2, Languages, RadioTower, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { HeroMotion } from "@/components/Motion";
import { OpaiScene } from "@/components/OpaiScene";

const operationalSignals = [
  { icon: RadioTower, label: "Shift ready" },
  { icon: BrainCircuit, label: "AI assisted" },
  { icon: Languages, label: "Translation" },
  { icon: CalendarCheck2, label: "Court aware" }
];

function CanadianMarker() {
  return (
    <span className="relative h-6 w-10 shrink-0 overflow-hidden rounded-[3px] border border-white/25">
      <Image
        src="/images/canadian-thin-blue-line-flag.png"
        alt="Canadian thin blue line flag"
        fill
        className="object-cover"
        sizes="40px"
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero-3d relative overflow-hidden">
      <div className="relative min-h-[calc(100svh-9.5rem)] border-b border-white/10">
        <OpaiScene />
        <Container className="relative z-10">
          <div className="flex min-h-[calc(100svh-9.5rem)] items-end pb-10 pt-44 sm:pt-52 lg:min-h-[calc(100svh-9.5rem)] lg:items-center lg:pb-12 lg:pt-8">
            <HeroMotion>
              <div className="max-w-2xl">
                <p className="mb-5 inline-flex min-h-10 max-w-full items-center gap-3 border-l-2 border-ptsd-green bg-black/55 px-3 py-2 text-[11px] font-semibold uppercase leading-4 text-white/82 backdrop-blur-md sm:text-sm sm:leading-5">
                  <CanadianMarker />
                  <span>For Canadian Law Enforcement AI Assistant</span>
                </p>

                <h1 className="text-5xl font-black leading-[0.94] text-white sm:text-6xl lg:text-8xl">
                  OPA<span className="text-opai-blue">i</span> Police
                </h1>
                <p className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Operational intelligence for Canadian policing.
                </p>
                <p className="mt-5 max-w-lg text-base leading-7 text-white/68 sm:text-lg">
                  One calm command layer for shift readiness, incidents, translation, court, training, and officer support.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/opai-police/" className="gap-2 px-5 sm:px-6">
                    Explore OPAi
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink href="/download/" variant="secondary" className="px-5 sm:px-6">
                    Join launch updates
                  </ButtonLink>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase text-white/52 sm:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="size-4 text-opai-blue-soft" aria-hidden="true" />
                    Privacy-led
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="size-2 bg-ptsd-green shadow-[0_0_14px_rgba(127,255,212,0.8)]" aria-hidden="true" />
                    PTSD awareness
                  </span>
                  <span>Pre-launch prototype</span>
                </div>
              </div>
            </HeroMotion>
          </div>
        </Container>
      </div>

      <div className="relative z-10 border-b border-white/10 bg-[#050b13]/94 backdrop-blur-xl">
        <Container>
          <div className="grid min-h-24 grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            {operationalSignals.map((signal) => (
              <div key={signal.label} className="flex min-h-20 items-center gap-3 px-3 py-4 sm:px-5">
                <signal.icon className="size-5 shrink-0 text-opai-blue-soft" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/78">{signal.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
