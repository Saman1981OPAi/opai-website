"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Activity, MousePointerClick } from "lucide-react";
import { Container } from "@/components/Container";

const COUNTER_START = 100000;
const STORAGE_KEY = "opai-site-visit-counter";

function formatCount(count: number) {
  return new Intl.NumberFormat("en-CA").format(count);
}

function readStoredCount() {
  if (typeof window === "undefined") {
    return COUNTER_START;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  const parsed = stored ? Number.parseInt(stored, 10) : COUNTER_START;

  return Number.isFinite(parsed) && parsed >= COUNTER_START ? parsed : COUNTER_START;
}

export function VisitCounter() {
  const pathname = usePathname();
  const [count, setCount] = useState(COUNTER_START);
  const [lastAction, setLastAction] = useState("Counting page visits");
  const isHomePage = pathname === "/";

  useEffect(() => {
    const nextCount = readStoredCount() + 1;

    window.localStorage.setItem(STORAGE_KEY, String(nextCount));
    setCount(nextCount);
    setLastAction("Page visit counted");
  }, [pathname]);

  const displayCount = useMemo(() => formatCount(count), [count]);

  const countAnotherVisit = () => {
    const nextCount = readStoredCount() + 1;

    window.localStorage.setItem(STORAGE_KEY, String(nextCount));
    setCount(nextCount);
    setLastAction("Repeat visit counted");
  };

  if (!isHomePage) {
    return null;
  }

  return (
    <section className="border-t border-opai-blue/20 bg-[#03050A] py-10" aria-label="OPAi site visit counter">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-[8px] border border-opai-blue/35 bg-white/[0.045] px-6 py-5 text-center shadow-glow">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ptsd-green">
            <Activity className="size-4" aria-hidden="true" />
            Site Visit Counter
          </div>
          <p className="text-4xl font-black text-white sm:text-5xl" aria-live="polite">
            {displayCount}
          </p>
          <p className="mt-2 text-sm leading-6 text-white/62">
            {lastAction}. Every page navigation, refresh, and back-or-forward visit adds to the count in this browser.
          </p>
          <button
            type="button"
            onClick={countAnotherVisit}
            className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-opai-blue/60 bg-opai-blue/10 px-5 text-sm font-semibold text-opai-blue-soft transition hover:bg-opai-blue/20"
          >
            <MousePointerClick className="size-4" aria-hidden="true" />
            Count another visit
          </button>
        </div>
      </Container>
    </section>
  );
}
