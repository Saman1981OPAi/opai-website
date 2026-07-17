import type { Metadata } from "next";
import { Languages } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/translation/");

export default function TranslationPage() {
  return (
    <ProductPage
      eyebrow="Translation"
      title="Multiple translation modes, one verification rule."
      body="OPAi supports text, voice, turn-based conversation, image, and document translation through user-initiated workflows designed for clarity."
      icon={Languages}
      features={[
        "Text translation with language selection",
        "Voice and turn-based conversation translation",
        "Image text recognition and translation",
        "Document translation with file-size and type controls"
      ]}
      guardrailTitle="AI-generated translation"
      guardrail="Translations may be incomplete, inaccurate, or contextually wrong. Verify important content with a qualified interpreter or another reliable source before relying on it for legal, medical, safety, evidentiary, or operational decisions."
    />
  );
}
