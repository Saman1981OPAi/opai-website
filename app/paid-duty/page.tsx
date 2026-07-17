import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/paid-duty/");

export default function PaidDutyPage() {
  return (
    <ProductPage
      eyebrow="Paid Duty"
      title="Keep paid-duty details together."
      body="A concise local workflow for duty details, dates, times, contacts, locations, notes, and reminders entered by the officer."
      icon={CalendarClock}
      features={[
        "Create and edit local paid-duty records",
        "Keep dates, times, locations, contacts, and notes together",
        "Schedule optional local reminders",
        "Review upcoming duties from a scan-friendly list"
      ]}
      guardrailTitle="Personal organizer, not an official roster"
      guardrail="Paid Duty does not replace service scheduling, payroll, supervision, policy, or official records. Officers remain responsible for confirming details through authorized systems and channels."
    />
  );
}
