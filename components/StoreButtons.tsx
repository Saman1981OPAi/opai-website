import { Play, Smartphone } from "lucide-react";

function StoreButton({
  eyebrow,
  label,
  icon: Icon
}: {
  eyebrow: string;
  label: string;
  icon: typeof Smartphone;
}) {
  return (
    <a
      href="#download"
      aria-label={`${label} ${eyebrow}`}
      className="focus-ring group inline-flex min-h-16 min-w-60 items-center gap-4 rounded-[8px] border border-white/15 bg-white/[0.07] px-5 py-3 transition hover:border-opai-blue-soft/70 hover:bg-white/[0.11]"
    >
      <span className="grid size-10 place-items-center rounded-[8px] bg-white text-surface transition group-hover:bg-ptsd-green">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="text-left">
        <span className="block text-xs font-medium uppercase tracking-[0.18em] text-ptsd-green">{eyebrow}</span>
        <span className="block text-xl font-semibold leading-tight text-white">{label}</span>
      </span>
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <StoreButton eyebrow="iOS priority for" label="App Store" icon={Smartphone} />
      <StoreButton eyebrow="Paused for" label="Google Play" icon={Play} />
    </div>
  );
}
