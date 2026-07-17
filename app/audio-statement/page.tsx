import type { Metadata } from "next";
import { FileAudio } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/audio-statement/");

export default function AudioStatementPage() {
  return (
    <div id="transcription">
      <ProductPage
        eyebrow="Audio Statement"
        title="From user-initiated audio to reviewable text."
        body="Capture or import an audio statement, request AI transcription, and review the text alongside the original recording before deciding how to use it."
        icon={FileAudio}
        features={[
          "Record or import supported audio after an explicit user action",
          "Apply duration, file-type, request, and daily usage limits",
          "Return an editable transcript with processing details",
          "Keep audio and transcript content out of operational logs"
        ]}
        guardrailTitle="Listen, compare, verify"
        guardrail="AI transcription may contain omissions, substitutions, or inaccurate wording. Users must listen to the source audio, correct the transcript, follow applicable policy and law, and avoid submitting confidential police records unless authorized."
      />
    </div>
  );
}
