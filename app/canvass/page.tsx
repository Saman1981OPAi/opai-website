import type { Metadata } from "next";
import { MapPinned } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/canvass/");

export default function CanvassPage() {
  return (
    <ProductPage
      eyebrow="Canvass"
      title="Track local canvass progress with less friction."
      body="Record officer-entered addresses, outcomes, brief notes, and follow-up needs in a structured local workflow."
      icon={MapPinned}
      features={[
        "Add addresses and concise local notes",
        "Mark contact and no-contact outcomes",
        "Flag follow-up needs without automatic action",
        "Review progress without background location tracking"
      ]}
      guardrailTitle="Officer-directed and policy-led"
      guardrail="Canvass does not direct police activity, assess investigative value, collect background location, or replace official notes and records. Use must follow applicable law, service policy, consent rules, and professional judgment."
    />
  );
}
