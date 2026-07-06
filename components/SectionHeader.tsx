import { FadeIn } from "@/components/Motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, body, align = "left" }: SectionHeaderProps) {
  return (
    <FadeIn className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-ptsd-green">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">{body}</p> : null}
    </FadeIn>
  );
}
