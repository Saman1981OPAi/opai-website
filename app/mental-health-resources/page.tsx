import type { Metadata } from "next";
import { AlertTriangle, BadgeCheck, HeartPulse } from "lucide-react";
import { Container } from "@/components/Container";
import { MentalHealthResourceAction } from "@/components/MentalHealthResourceAction";
import { PageHero } from "@/components/PageHero";
import {
  mentalHealthDirectoryDisclaimer,
  mentalHealthNextReviewDate,
  mentalHealthResources,
  mentalHealthResourceSections,
  mentalHealthVerificationDate
} from "@/lib/mentalHealthResources";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/mental-health-resources/");

export default function MentalHealthResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mental Health Resources"
        title="Confidential support and crisis resources."
        body="A verified directory for immediate crisis support, first responders, community navigation, and Ontario regional services."
      />
      <section className="py-20">
        <Container>
          <div className="mb-12 border-l-2 border-ptsd-green bg-ptsd-green/[0.07] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-0.5 size-7 shrink-0 text-ptsd-green" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-semibold text-white">Immediate danger or emergency</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-white/68">
                  If there is immediate danger or an urgent need for police, fire, or ambulance assistance, call 9-1-1 where service is available.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-16">
            {mentalHealthResourceSections.map((section) => {
              const resources = mentalHealthResources.filter((resource) => resource.section === section.id);
              return (
                <section key={section.id} aria-labelledby={`resource-section-${section.id}`}>
                  <div className="flex items-center gap-3">
                    <HeartPulse className="size-6 text-ptsd-green" aria-hidden="true" />
                    <h2 id={`resource-section-${section.id}`} className="text-2xl font-semibold text-white sm:text-3xl">
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {resources.map((resource) => (
                      <article key={resource.id} className="glass rounded-[8px] p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-ptsd-green">{resource.service}</p>
                            <h3 className="mt-2 text-xl font-semibold text-white">{resource.organization}</h3>
                          </div>
                          <BadgeCheck className="size-6 shrink-0 text-opai-blue-soft" aria-label="Official source verified" />
                        </div>
                        <dl className="mt-5 grid gap-3 text-sm leading-6">
                          <div>
                            <dt className="text-white/44">Who it serves</dt>
                            <dd className="text-white/72">{resource.audience}</dd>
                          </div>
                          <div>
                            <dt className="text-white/44">Coverage and hours</dt>
                            <dd className="text-white/72">{resource.coverage}. {resource.hours}.</dd>
                          </div>
                          {resource.displayNumber ? (
                            <div>
                              <dt className="text-white/44">Contact</dt>
                              <dd className="font-semibold text-white">{resource.displayNumber}</dd>
                            </div>
                          ) : null}
                        </dl>
                        {resource.disclosure ? (
                          <p className="mt-4 rounded-[8px] border border-amber-300/25 bg-amber-300/[0.07] px-4 py-3 text-xs leading-5 text-amber-100/80">
                            {resource.disclosure}
                          </p>
                        ) : null}
                        <div className="mt-6 flex flex-wrap gap-3">
                          {resource.callNumber ? (
                            <MentalHealthResourceAction
                              href={`tel:${resource.callNumber}`}
                              kind="call"
                              label="Call"
                              organization={resource.organization}
                            />
                          ) : null}
                          {resource.textNumber ? (
                            <MentalHealthResourceAction
                              href={`sms:${resource.textNumber}`}
                              kind="text"
                              label="Text"
                              organization={resource.organization}
                            />
                          ) : null}
                          <MentalHealthResourceAction
                            href={resource.officialUrl}
                            kind="website"
                            label="Official website"
                            organization={resource.organization}
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-sm leading-7 text-white/58">
            <p>{mentalHealthDirectoryDisclaimer}</p>
            <p className="mt-3">
              Official sources verified {mentalHealthVerificationDate}. Next scheduled review {mentalHealthNextReviewDate} and before every public release.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
