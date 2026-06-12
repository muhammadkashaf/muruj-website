import { ArrowRight, TriangleAlert } from "lucide-react";
import { contactHref } from "@/components/landing/ui/landingUi";
import { Panel } from "./WeatherPanel";

export default function WeatherAlertPanel() {
  return (
    <Panel className="relative overflow-hidden border-amber-200/80 bg-gradient-to-br from-route-start to-amber-soft p-5 shadow-[0_22px_60px_var(--alpha-amber-09)] sm:p-6 lg:col-span-5">
      <div aria-hidden="true" className="absolute -right-12 -top-14 h-44 w-44 rounded-full bg-amber-300/15 blur-3xl" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-[1.25rem] bg-amber-100 text-amber-700 shadow-[0_12px_28px_var(--alpha-amber-brown-12)] ring-1 ring-amber-200/70">
            <TriangleAlert className="h-7 w-7" strokeWidth={2} />
          </span>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700/65">Road alert</p>
            <h3 className="mt-1 text-[15px] font-bold tracking-[-0.01em] text-amber-950">Use caution on exposed routes</h3>
          </div>
        </div>
        <span className="rounded-full border border-amber-200 bg-white/70 px-2.5 py-1 text-[10px] font-bold text-amber-800">Moderate</span>
      </div>
      <p className="mt-5 text-sm leading-6 text-amber-950/68">
        Some routes may have landslide risk after rainfall. Avoid rushing through mountain bends and check with a local guide before leaving.
      </p>
      <a href={contactHref} className="group mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-amber-900">
        Check Latest Road Update
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
      </a>
    </Panel>
  );
}
