import { AlertTriangle, HeartPulse, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";

const disclaimers = [
  {
    icon: ShieldCheck,
    title: "Productivity support only",
    body:
      "OPAi Police is a productivity and AI assistance tool, not a replacement for official police systems, supervision, service policy, legal advice, medical advice, or professional judgment."
  },
  {
    icon: AlertTriangle,
    title: "Verify AI outputs",
    body: "AI-generated responses may be incomplete or inaccurate and must be verified before use."
  },
  {
    icon: HeartPulse,
    title: "PTSD education only",
    body:
      "PTSD awareness content is educational only and is not medical treatment, diagnosis, therapy, or crisis intervention."
  }
];

export function DisclaimerBand() {
  return (
    <section className="border-y border-white/10 bg-[#03050A] py-10" aria-labelledby="important-disclaimers">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1fr_1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ptsd-green">Currently in Testing</p>
            <h2 id="important-disclaimers" className="mt-3 text-2xl font-semibold text-white">
              Important use notes
            </h2>
          </div>
          {disclaimers.map((item) => (
            <div key={item.title} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
              <item.icon className="size-6 text-opai-blue-soft" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/64">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
