import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${light ? "text-white" : "text-ink"}`}>
      <p className={`mb-4 text-xs font-black uppercase tracking-[0.24em] ${light ? "text-action" : "text-forest/65"}`}>{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-5xl">{title}</h2>
      <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-white/78" : "text-ink/70"}`}>{description}</p>
    </div>
  );
}
