import { CloudSun } from "lucide-react";
import { forecast, weatherMetrics } from "@/lib/data/weatherData";
import { Panel, PanelHeader } from "./WeatherPanel";

export default function WeatherSummaryPanel() {
  return (
    <Panel className="p-5 sm:p-6 lg:col-span-5">
      <PanelHeader icon={CloudSun} eyebrow="Weather summary" title="Skardu, Pakistan" />
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-5xl font-bold tracking-[-0.08em] text-ink">12°</p>
          <p className="mt-1 text-sm font-medium text-ink/58">Partly cloudy</p>
        </div>
        <span className="grid h-20 w-20 place-items-center rounded-[1.75rem] bg-gradient-to-br from-amber-50 to-sky-soft text-sun shadow-[0_16px_32px_var(--alpha-forest-08)] ring-1 ring-forest/5">
          <CloudSun className="h-11 w-11" strokeWidth={2} />
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {weatherMetrics.map(({ icon: MetricIcon, label, value }) => (
          <div key={label} className="rounded-[1.1rem] border border-forest/5 bg-weather-card p-3">
            <MetricIcon className="h-[18px] w-[18px] text-forest/65" strokeWidth={2} />
            <p className="mt-2 text-[10px] text-ink/45">{label}</p>
            <p className="mt-1 text-xs font-bold text-ink">{value}</p>
          </div>
        ))}
      </div>
      <div className="hide-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-5 sm:overflow-visible" aria-label="Five day compact weather forecast">
        {forecast.map(({ day, high, low, icon: ForecastIcon }) => (
          <div key={day} className="min-w-[76px] shrink-0 rounded-2xl border border-forest/7 bg-white/92 px-2.5 py-2 text-[11px] shadow-[0_3px_10px_var(--alpha-forest-045)] sm:min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-ink/58">{day}</span>
              <ForecastIcon className="h-[18px] w-[18px] shrink-0 text-sun-strong" strokeWidth={2} />
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="font-bold text-ink">{high}</span>
              <span className="text-ink/25">/</span>
              <span className="text-ink/45">{low}</span>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
