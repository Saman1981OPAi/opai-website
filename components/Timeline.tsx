import { timeline } from "@/lib/site";
import { FadeIn } from "@/components/Motion";

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-opai-blue via-ptsd-green to-transparent sm:left-1/2" />
      <div className="grid gap-8">
        {timeline.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 0.06}
            className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 === 0 ? "" : "sm:[&>div]:col-start-2"}`}
          >
            <div className="glass ml-12 rounded-[8px] p-6 sm:ml-0">
              <div className="absolute left-0 top-7 size-8 rounded-full border border-ptsd-green/60 bg-surface shadow-green-glow sm:left-1/2 sm:-translate-x-1/2" />
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
