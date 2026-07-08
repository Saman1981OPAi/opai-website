import { founderTimeline } from "@/lib/site";
import { FadeIn } from "@/components/Motion";

type TimelineItem = {
  date: string;
  title: string;
  body: string;
};

export function Timeline({ items = founderTimeline }: { items?: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-opai-blue via-ptsd-green to-transparent sm:left-1/2" />
      <div className="grid gap-8">
        {items.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 0.06}
            className={`relative grid gap-4 pl-14 sm:grid-cols-2 sm:pl-0 ${
              index % 2 === 0 ? "" : "sm:[&>.timeline-card]:col-start-2"
            }`}
          >
            <span
              aria-hidden="true"
              className="absolute left-4 top-7 size-7 -translate-x-1/2 rounded-full border border-ptsd-green/60 bg-surface shadow-green-glow sm:left-1/2 sm:size-8"
            />
            <div className="timeline-card glass rounded-[8px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ptsd-green">{item.date}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
