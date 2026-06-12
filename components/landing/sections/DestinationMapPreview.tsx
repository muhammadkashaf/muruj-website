"use client";

import dynamic from "next/dynamic";
import ScrollButton from "@/components/landing/ui/ScrollButton";
import { Icon } from "@/components/landing/ui/landingUi";

const LockedDestinationMap = dynamic(() => import("./LockedDestinationMap"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 animate-pulse bg-map-canvas motion-reduce:animate-none" />,
});

const filters = [
  ["hotel", "Hotels"],
  ["heart", "Restaurants"],
  ["fuel", "Fuel Stations"],
  ["menu", "More"],
] as const;

export default function DestinationMapPreview() {
  return (
    <div className="relative min-h-127.5 w-full min-w-0 max-w-full overflow-hidden rounded-[2.2rem] border border-forest/10 bg-map-canvas shadow-[0_25px_70px_var(--alpha-forest-14)] sm:min-h-[540px]">
      <LockedDestinationMap />
z-500
      <div className="absolute left-3 right-3 top-3 z-500 flex gap-1.5 overflow-x-auto rounded-2xl border border-white/80 bg-white/90 p-1.5 shadow-[0_8px_24px_var(--alpha-forest-10)] backdrop-blur-xl sm:left-5 sm:right-auto sm:top-5 sm:gap-2">
        {filters.map(([icon, label], index) => (
          <span
            key={label}
            className={`flex min-w-0 shrink items-center gap-1 rounded-xl border px-2.5 py-2 text-[8px] font-extrabold transition sm:shrink-0 sm:gap-1.5 sm:px-3 sm:text-[10px] ${
              index === 0
                ? "border-action/25 bg-action/15 text-alpine shadow-[inset_0_0_0_1px_var(--alpha-white-70)]"
                : "border-forest/5 bg-white/82 text-forest/75 hover:bg-white"
            }`}
          >
            <Icon name={icon} className={`h-3 w-3 shrink-0 ${index === 0 ? "text-forest" : "text-forest/60"}`} />
            <span className="truncate">{label}</span>
          </span>
        ))}
      </div>

      <div className="absolute bottom-3 left-3 right-3 z-500 rounded-3xl border border-forest/8 bg-white/95 p-3 shadow-[0_12px_34px_var(--alpha-forest-13)] backdrop-blur-xl sm:bottom-5 sm:left-auto sm:right-5 sm:w-[256px] sm:p-3.5">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-clay/12 text-clay-dark ring-1 ring-clay/12">
            <Icon name="camera" className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-extrabold text-ink sm:text-sm">Sheosar Lake View Point</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px] font-medium text-ink/62">
              <span>Photography Spot</span>
              <span className="text-ink/30">·</span>
              <span className="flex items-center gap-1 font-bold text-forest">
                <Icon name="star" className="h-3 w-3 fill-action text-action" />
                4.8 rating
              </span>
            </div>
          </div>
        </div>
        <p className="mt-2 text-[10px] leading-4 text-ink/58">Popular scenic stop near Deosai route.</p>
        <ScrollButton
          sectionId="download"
          className="group mt-3 flex min-h-10 w-full items-center justify-between rounded-2xl bg-forest px-3.5 py-2.5 text-[11px] font-bold text-white shadow-[0_8px_18px_var(--alpha-forest-16)] transition hover:bg-alpine"
        >
          View Spot Details
          <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </ScrollButton>
      </div>
    </div>
  );
}
