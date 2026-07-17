import type { Metadata } from "next";
import { ClipboardPenLine } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/report-writing/");

export default function ReportWritingPage() {
  return (
    <ProductPage
      eyebrow="Report Writing"
      title="Structure the facts. Keep the officer in control."
      body="OPAi helps organize officer-provided information into a clear draft that can be reviewed, corrected, and adapted to service requirements."
      icon={ClipboardPenLine}
      features={[
        "Organize supplied facts into a readable chronology",
        "Identify missing fields without filling them in",
        "Review wording for clarity and completeness",
        "Keep drafts editable before any operational use"
      ]}
      guardrailTitle="No invented facts"
      guardrail="OPAi must not create observations, evidence, quotations, legal grounds, investigative steps, or conclusions that the officer did not provide. Every draft requires verification against source notes, evidence, policy, and professional judgment."
    />
  );
}
