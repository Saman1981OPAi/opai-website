import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-opai-blue text-white shadow-glow hover:bg-opai-blue-soft"
      : "border border-white/14 bg-white/[0.06] text-white hover:border-ptsd-green/60 hover:bg-white/[0.1]";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
