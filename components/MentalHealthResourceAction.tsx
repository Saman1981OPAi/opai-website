"use client";

import { ExternalLink, MessageSquareText, PhoneCall } from "lucide-react";

type ResourceActionProps = {
  href: string;
  kind: "call" | "text" | "website";
  label: string;
  organization: string;
};

const actionIcons = {
  call: PhoneCall,
  text: MessageSquareText,
  website: ExternalLink
};

export function MentalHealthResourceAction({ href, kind, label, organization }: ResourceActionProps) {
  const Icon = actionIcons[kind];
  const opensNewTab = kind === "website";

  return (
    <a
      href={href}
      className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-[8px] border border-ptsd-green/35 bg-ptsd-green/[0.08] px-4 text-sm font-semibold text-ptsd-green transition hover:bg-ptsd-green/[0.14]"
      onClick={(event) => {
        const confirmed = window.confirm(`Continue to ${label} for ${organization}?`);
        if (!confirmed) event.preventDefault();
      }}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      target={opensNewTab ? "_blank" : undefined}
    >
      <Icon className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}
