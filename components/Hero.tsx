import Image from "next/image";
import { BellRing, Brain, CheckCircle2, Cloud, FileText, ShieldCheck, SquareCheckBig } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FloatMotion, HeroMotion } from "@/components/Motion";
import { StoreButtons } from "@/components/StoreButtons";

function CanadianFlag() {
  return (
    <span
      className="grid h-8 w-12 shrink-0 grid-cols-[1fr_2fr_1fr] overflow-hidden rounded-[3px] border border-white/30 shadow-[0_0_18px_rgba(255,255,255,0.12)]"
      aria-label="Canadian flag"
      role="img"
    >
      <span className="bg-[#FF0000]" />
      <span className="grid place-items-center bg-white">
        <svg className="h-5 w-5 text-[#FF0000]" viewBox="0 0 64 64" aria-hidden="true">
          <path
            fill="currentColor"
            d="M32 4 27.7 18.2 18 12.5l3.9 13.4-12.8-1.5 9.7 9.5-6.3 5.2 14.6 2.1L25.5 56h13l-1.6-14.8 14.6-2.1-6.3-5.2 9.7-9.5-12.8 1.5L46 12.5l-9.7 5.7L32 4Z"
          />
        </svg>
      </span>
      <span className="bg-[#FF0000]" />
    </span>
  );
}

const heroFeatures = [
  {
    icon: Brain,
    title: "AI Assistant",
    body: "Get instant answers and intelligent help."
  },
  {
    icon: SquareCheckBig,
    title: "Task Management",
    body: "Create tasks, set deadlines, and stay on track."
  },
  {
    icon: BellRing,
    title: "Smart Reminders",
    body: "Never miss what matters with smart notifications."
  },
  {
    icon: FileText,
    title: "Notes & Organization",
    body: "Keep notes, ideas, and important info organized."
  },
  {
    icon: Cloud,
    title: "Sync Everywhere",
    body: "Access your data anytime, anywhere."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    body: "Your privacy matters. Your data is safe."
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03050A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(10,132,255,0.22),transparent_28%),radial-gradient(circle_at_78%_14%,rgba(110,219,143,0.12),transparent_24%),linear-gradient(180deg,#03050A_0%,#06101E_55%,#03050A_100%)]" />
      <div className="fine-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 opacity-40" aria-hidden="true">
        <div className="absolute bottom-0 left-0 h-16 w-full bg-[linear-gradient(90deg,transparent_0_4%,rgba(10,132,255,.22)_4%_4.4%,transparent_4.4%_9%,rgba(10,132,255,.18)_9%_9.5%,transparent_9.5%_14%)] bg-[length:90px_100%]" />
        <div className="absolute bottom-0 right-0 h-36 w-2/5 bg-[linear-gradient(to_top,rgba(10,132,255,.28),transparent)] [clip-path:polygon(0_100%,0_55%,6%_55%,6%_48%,12%_48%,12%_62%,18%_62%,18%_38%,24%_38%,24%_52%,31%_52%,31%_28%,33%_18%,35%_28%,35%_58%,42%_58%,42%_42%,49%_42%,49%_64%,55%_64%,55%_35%,62%_35%,62%_51%,69%_51%,69%_44%,76%_44%,76%_61%,83%_61%,83%_36%,90%_36%,90%_53%,100%_53%,100%_100%)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 opacity-15 lg:hidden" aria-hidden="true">
        <Image
          src="/images/opai-hero.png"
          alt=""
          fill
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>
      <Container className="relative grid items-center gap-10 py-12 sm:py-14 lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr] lg:py-10">
        <HeroMotion>
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-opai-blue/40 bg-opai-blue/10 px-4 py-2 text-sm font-semibold text-opai-blue-soft">
            <CanadianFlag />
            Built for Canadian police officers
          </p>
          <h1 className="max-w-4xl text-6xl font-black tracking-normal text-white sm:text-7xl lg:text-8xl">
            OPA<span className="text-opai-blue">i</span>
          </h1>
          <p className="mt-3 text-xl font-semibold uppercase tracking-[0.16em] text-white/78 sm:text-2xl">
            Operational Police Ai
          </p>
          <p className="mt-4 text-2xl font-semibold text-opai-blue sm:text-3xl">Organize. Plan. Focus. Achieve.</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
            OPAi is an all-in-one operational AI assistant created for Canadian police officers, helping members stay
            organized, save time, and manage the daily pressure of service with clarity and confidence.
          </p>

          <StoreButtons className="mt-8" />

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2">
              <CanadianFlag />
              Canada-only public safety focus
            </span>
            <span className="rounded-full border border-ptsd-green/30 bg-ptsd-green/10 px-4 py-2 text-ptsd-green">
              PTSD awareness remains part of the mission
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/founder-story" variant="secondary" className="min-h-11 px-5">
              Read my story
            </ButtonLink>
            <ButtonLink href="/opai-police" variant="secondary" className="min-h-11 px-5">
              OPAi Police
            </ButtonLink>
          </div>
        </HeroMotion>

        <FloatMotion className="relative hidden lg:block">
          <div className="absolute -inset-2 rounded-[8px] bg-gradient-to-tr from-opai-blue/25 via-transparent to-ptsd-green/20 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[8px]">
            <Image
              src="/images/opai-hero.png"
              alt="Premium mobile app mockup for OPAi public safety wellness"
              width={1536}
              height={864}
              priority
              className="h-auto w-full"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </div>
          <div className="glass absolute bottom-4 left-4 hidden max-w-xs rounded-[8px] p-4 sm:block">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="size-4 text-ptsd-green" aria-hidden="true" />
              Canada-first policing support
            </p>
            <p className="mt-2 text-xs leading-5 text-white/58">
              Operational productivity, wellness, and PTSD awareness for Canadian police officers.
            </p>
          </div>
        </FloatMotion>
      </Container>
      <Container className="relative pb-8">
        <div className="glass grid rounded-[8px] lg:grid-cols-6">
          {heroFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-4 border-white/10 p-5 lg:border-r lg:last:border-r-0">
              <feature.icon className="mt-1 size-8 shrink-0 text-opai-blue" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-white">{feature.title}</h2>
                <p className="mt-1 text-xs leading-5 text-white/62">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
