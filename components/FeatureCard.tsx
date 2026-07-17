import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/Motion";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  href?: string;
  index?: number;
};

export function FeatureCard({ icon: Icon, title, body, href, index = 0 }: FeatureCardProps) {
  const content = (
    <>
      <div className="mb-7 grid size-12 place-items-center rounded-[8px] bg-opai-blue/15 text-opai-blue-soft ring-1 ring-opai-blue/20">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/64">{body}</p>
      {href ? <span className="mt-5 inline-flex text-sm font-semibold text-opai-blue-soft">Explore feature</span> : null}
    </>
  );

  return (
    <FadeIn delay={index * 0.05} className="glass rounded-[8px] p-6">
      {href ? (
        <Link href={href} className="focus-ring -m-2 block rounded-[8px] p-2">
          {content}
        </Link>
      ) : (
        content
      )}
    </FadeIn>
  );
}
