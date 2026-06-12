import { ShieldCheck } from "lucide-react";
import { travelSignals } from "@/lib/data/weatherData";
import { Panel } from "./WeatherPanel";

export default function WeatherSafetyPanel() {
  return (
    <Panel className="relative overflow-hidden border-action/18 bg-gradient-to-br from-white via-white to-safe-end p-6 sm:p-7 lg:col-span-7">
      <div aria-hidden="true" className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-action/10 blur-3xl" />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="relative max-w-xl">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.25rem] bg-forest text-action shadow-[0_14px_28px_var(--alpha-forest-20)]">
              <ShieldCheck className="h-7 w-7" strokeWidth={2} />
            </span>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-action/30 bg-action/14 px-3 py-1.5 text-[11px] font-bold text-forest">
                <span className="h-2 w-2 rounded-full bg-action shadow-[0_0_0_4px_var(--alpha-action-16)]" />
                Safe to travel today
              </div>
              <h3 className="mt-2 text-3xl font-bold tracking-[-0.055em] text-ink sm:text-4xl">Good to Travel</h3>
            </div>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-ink/62">
            Main routes are currently clear. Start early, confirm local updates, and avoid exposed road sections after dark.
          </p>
        </div>
        <div className="relative rounded-[1.5rem] border border-forest/8 bg-white/85 p-4 shadow-[0_12px_30px_var(--alpha-forest-08)] sm:min-w-40">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-forest/42">Travel score</p>
          <div className="mt-3 flex items-end gap-1 text-forest">
            <span className="text-4xl font-bold tracking-[-0.06em]">92</span>
            <span className="pb-1 text-sm font-bold text-forest/45">/100</span>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-forest/8">
            <div className="h-full w-[92%] rounded-full bg-action" />
          </div>
        </div>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        {travelSignals.map(({ icon: StatusIcon, label, value }) => (
          <div key={label} className="flex items-center gap-3 rounded-[1.25rem] border border-forest/7 bg-white/75 p-3.5 shadow-[0_8px_20px_var(--alpha-forest-045)]">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-action/12 text-forest">
              <StatusIcon className="h-[18px] w-[18px]" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[10px] text-ink/48">{label}</p>
              <p className="mt-0.5 text-sm font-bold text-ink">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
