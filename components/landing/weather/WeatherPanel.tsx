import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-0 rounded-[1.75rem] border border-white/80 bg-white/95 shadow-[0_22px_60px_var(--alpha-forest-09)] ring-1 ring-forest/[0.035] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_var(--alpha-forest-11)] motion-reduce:transform-none ${className}`}>
      {children}
    </div>
  );
}

export function PanelHeader({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-forest/8 bg-gradient-to-br from-white to-route-end text-forest shadow-[0_8px_20px_var(--alpha-forest-08)]">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/45">{eyebrow}</p>
        <h3 className="mt-1 text-[15px] font-bold tracking-[-0.02em] text-ink">{title}</h3>
      </div>
    </div>
  );
}
