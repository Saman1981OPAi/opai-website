import Link from "next/link";
import { Facebook, Instagram, Mail, Ribbon } from "lucide-react";
import { Container } from "@/components/Container";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-opai-blue/20 bg-black py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-full">
            <span className="grid size-14 place-items-center rounded-full border border-opai-blue/60 bg-opai-blue/10 text-base font-black text-white shadow-glow">
              OPA
            </span>
            <span>
              <span className="block text-2xl font-black">OPA<span className="text-opai-blue">i</span></span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-opai-blue-soft">Ontario Police AI</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            OPAi is more than an app. It is a mission to improve productivity and raise PTSD awareness.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/48">Quick links</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded text-sm text-white/68 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/48">Company</h2>
          <div className="mt-5 grid gap-3">
            <Link href="/download" className="focus-ring rounded text-sm text-white/68 hover:text-white">
              Download
            </Link>
            <Link href="/privacy-policy" className="focus-ring rounded text-sm text-white/68 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="focus-ring rounded text-sm text-white/68 hover:text-white">
              Terms of Service
            </Link>
            <a href={`mailto:${site.email}`} className="focus-ring rounded text-sm text-white/68 hover:text-white">
              {site.email}
            </a>
          </div>
        </div>

        <div className="grid gap-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/48">Connect</h2>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href={index === 2 ? `mailto:${site.email}` : "#"}
                  aria-label={index === 0 ? "Facebook" : index === 1 ? "Instagram" : "Email"}
                  className="focus-ring grid size-10 place-items-center rounded-[8px] border border-opai-blue/30 bg-opai-blue/10 text-opai-blue-soft hover:bg-opai-blue/20"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <Ribbon className="size-11 shrink-0 text-ptsd-green" aria-hidden="true" />
            <p className="text-sm leading-6">
              <span className="block font-semibold text-ptsd-green">Supporting PTSD Awareness</span>
              <span className="text-white/62">Every download helps break the stigma.</span>
            </p>
          </div>
        </div>
      </Container>
      <Container className="mt-10 border-t border-white/10 pt-6">
        <p className="text-center text-sm text-white/42">Copyright 2026 OPAi. All rights reserved. Made in Canada.</p>
      </Container>
    </footer>
  );
}
