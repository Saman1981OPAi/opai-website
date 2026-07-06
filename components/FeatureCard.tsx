import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/Motion";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  index?: number;
};

export function FeatureCard({ icon: Icon, title, body, index = 0 }: FeatureCardProps) {
  return (
    <FadeIn delay={index * 0.05} className="glass rounded-[8px] p-6">
      <div className="mb-7 grid size-12 place-items-center rounded-[8px] bg-opai-blue/15 text-opai-blue-soft ring-1 ring-opai-blue/20">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/64">{body}</p>
    </FadeIn>
  );
}
