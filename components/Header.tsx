"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Ribbon, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const normalizedPathname = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;

  return (
    <header className="sticky top-0 z-50 border-b border-opai-blue/20 bg-[#03050A]/88 backdrop-blur-xl">
      <a
        href="#main"
        className="focus-ring sr-only rounded-full bg-white px-4 py-2 text-surface focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="OPAi home">
          <span className="grid size-12 place-items-center rounded-full border border-opai-blue/60 bg-opai-blue/10 text-lg font-black text-white shadow-glow">
            OPA
          </span>
          <span>
            <span className="block text-xl font-black leading-none text-white">
              OPA<span className="text-opai-blue">i</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.24em] text-opai-blue-soft">Operational Police Ai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = normalizedPathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-4 py-2 text-sm transition ${
                  active ? "bg-white/10 text-white" : "text-white/64 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="mr-3 grid grid-cols-[2.25rem_minmax(0,13rem)] items-center gap-3 border-l border-ptsd-green/30 pl-4 text-left">
            <Ribbon className="size-9 text-ptsd-green" aria-hidden="true" />
            <p className="min-w-0 text-[11px] leading-4">
              <span className="block font-semibold uppercase tracking-[0.1em] text-ptsd-green">Supporting PTSD Awareness</span>
              <span className="mt-0.5 block text-ptsd-green/78">Every download helps break the stigma</span>
            </p>
          </div>
          <ButtonLink href="/download/" className="min-h-11 px-5">
            Download
          </ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </Container>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-surface/96 lg:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-[8px] px-4 py-3 text-base text-white/80 hover:bg-white/[0.06]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
