import { Route } from "lucide-react";
import { routeChecks } from "@/lib/data/weatherData";
import { Panel, PanelHeader } from "./WeatherPanel";

export default function WeatherRoutePanel() {
  return (
    <Panel className="p-5 sm:p-6 lg:col-span-3">
      <PanelHeader icon={Route} eyebrow="Route overview" title="Key route status" />
      <div className="mt-5 space-y-3">
        {routeChecks.map(([label, status]) => (
          <div key={label} className="flex min-w-0 items-center justify-between gap-3 rounded-[1.1rem] border border-forest/6 bg-gradient-to-r from-route-start to-route-end px-4 py-3 shadow-[0_6px_16px_var(--alpha-forest-035)]">
            <span className="flex min-w-0 items-center gap-2.5 truncate text-sm font-semibold text-ink/68">
              <span className={`h-2 w-2 shrink-0 rounded-full ${status === "Caution" ? "bg-amber-400 shadow-[0_0_0_4px_var(--alpha-amber-bright-14)]" : "bg-action shadow-[0_0_0_4px_var(--alpha-action-12)]"}`} />
              <span className="truncate">{label}</span>
            </span>
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${status === "Caution" ? "bg-amber-100/80 text-amber-800" : "bg-action/12 text-forest"}`}>
              {status}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-ink/48">Preview data. Confirm current route conditions with our team before departure.</p>
    </Panel>
  );
}
