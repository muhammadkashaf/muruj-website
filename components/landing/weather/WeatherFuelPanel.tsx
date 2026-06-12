import { ArrowRight, Fuel } from "lucide-react";
import { contactHref } from "@/components/landing/ui/landingUi";
import { fuelPrices } from "@/lib/data/weatherData";
import { Panel, PanelHeader } from "./WeatherPanel";

export default function WeatherFuelPanel() {
  return (
    <Panel className="p-5 sm:p-6 lg:col-span-4">
      <PanelHeader icon={Fuel} eyebrow="Fuel prices" title="Latest local estimate" />
      <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-forest/8 bg-white/70">
        {fuelPrices.map(([name, price], index) => (
          <div key={name} className={`flex items-center justify-between gap-3 px-4 py-3.5 ${index > 0 ? "border-t border-forest/7" : ""}`}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600">
                <Fuel className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{name}</p>
                <p className="mt-0.5 text-[10px] text-ink/40">PKR per litre</p>
              </div>
            </div>
            <p className="text-lg font-bold tracking-[-0.03em] text-forest">{price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-2 text-xs text-ink/48 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <span>Updated today · Skardu market</span>
        <a href={contactHref} className="group inline-flex cursor-pointer items-center gap-1.5 font-bold text-forest transition hover:text-alpine">
          View Fuel Rates
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </a>
      </div>
    </Panel>
  );
}
