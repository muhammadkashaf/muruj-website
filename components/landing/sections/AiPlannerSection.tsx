import ScrollButton from "@/components/landing/ui/ScrollButton";
import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container, Icon, type IconName } from "@/components/landing/ui/landingUi";

const preferences: Array<[IconName, string, string]> = [
  ["calendar", "Number of Days", "5 Days"],
  ["users", "Group Type", "Family"],
  ["wallet", "Budget", "PKR 50K - 100K"],
];

const itinerary = [
  "Arrival in Skardu & Local Sightseeing",
  "Shangrila Resort & Upper Kachura Lake",
  "Khaplu Valley Exploration",
  "Deosai National Park Adventure",
  "Shopping & Departure",
];

export default function AiPlannerSection() {
  return (
    <section id="planner" className="relative scroll-mt-20 overflow-hidden bg-alpine py-24 text-white sm:py-32">
      <div className="topo-pattern pointer-events-none absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute inset-x-6 top-1/2 mx-auto h-[30rem] max-w-6xl -translate-y-1/2 rounded-full bg-forest/30 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="AI itinerary builder"
          title="Build Your Skardu Itinerary With AI"
          description="Tell Muruj your travel style, budget, group type, and interests. The app creates a practical day-by-day Skardu itinerary in seconds."
        />

        <div className="mx-auto mt-12 grid max-w-[1248px] grid-cols-1 items-stretch gap-7 sm:mt-14 xl:grid-cols-[464px_304px_480px] xl:gap-0">
          <div className="w-full rounded-[1.8rem] border border-white/15 bg-forest-mid p-6 shadow-[0_20px_60px_var(--alpha-black-22)] transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-8 xl:min-h-[510px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-action/25 bg-action/15 text-action">
                <Icon name="sparkles" />
              </span>
              <div>
                <h3 className="text-lg font-bold tracking-[-0.02em]">Tell us about your trip</h3>
                <p className="mt-1 text-sm font-medium text-white/60">Preference preview</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {preferences.map(([icon, label, value]) => (
                <div
                  key={label}
                  className="flex min-h-[68px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3.5"
                >
                  <span className="flex min-w-0 items-center gap-3 text-sm font-medium text-white/70">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.08] text-action">
                      <Icon name={icon} className="h-4 w-4" />
                    </span>
                    {label}
                  </span>
                  <span className="shrink-0 text-right text-sm font-bold">{value}</span>
                </div>
              ))}

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5">
                <p className="text-sm font-medium text-white/70">Interests</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Nature", "Adventure", "Photography"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-action/25 bg-action/10 px-3 py-1.5 text-xs font-bold text-tag-green"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex h-10 items-center justify-center xl:h-auto xl:self-center" aria-label="AI builds your plan">
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-action/20 bg-alpine/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/60 xl:hidden">
              <Icon name="sparkles" className="h-3.5 w-3.5 text-action" />
              AI builds your plan
            </span>
            <div className="relative hidden h-24 w-full items-center px-4 xl:flex" aria-hidden="true">
              <div className="route-line h-1 min-w-0 flex-1 text-action/70" />
              <span className="mx-3 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-action/55 bg-forest-panel text-action shadow-[0_8px_22px_var(--alpha-black-24)] ring-4 ring-alpine">
                <Icon name="sparkles" className="h-5 w-5" />
              </span>
              <div className="route-line h-1 min-w-0 flex-1 text-action/70" />
              <span className="ml-2 grid h-7 w-7 shrink-0 place-items-center text-action">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
              <span className="absolute left-1/2 top-[calc(50%+2.15rem)] -translate-x-1/2 whitespace-nowrap text-xs font-bold text-action/85">
                AI builds your plan
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col rounded-[2rem] border border-white/70 bg-white p-6 text-ink shadow-[0_26px_75px_var(--alpha-black-24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_var(--alpha-black-27)] sm:p-8 xl:min-h-[510px]">
            <div className="flex items-start justify-between gap-4 border-b border-forest/10 pb-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-forest/55">AI generated preview</p>
                <h3 className="mt-2.5 text-2xl font-bold tracking-[-0.03em] sm:text-[1.75rem]">Your Itinerary Is Ready!</h3>
                <p className="mt-2 text-sm font-medium leading-5 text-ink/60">5 Days · Starting from PKR 50K - 100K</p>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-forest/10 bg-forest/[0.07] text-forest">
                <Icon name="route" />
              </span>
            </div>

            <ol className="mt-5 flex-1">
              {itinerary.map((item, index) => (
                <li key={item} className="group relative flex gap-4 pb-4 last:pb-0">
                  {index < itinerary.length - 1 && (
                    <span className="absolute bottom-0 left-4 top-8 w-px bg-forest/15" aria-hidden="true" />
                  )}
                  <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-xs font-bold text-white ring-4 ring-white">
                    {index + 1}
                  </span>
                  <p className="min-w-0 flex-1 border-b border-forest/10 pb-4 text-sm font-semibold leading-6 text-ink/80 group-last:border-b-0 group-last:pb-0">
                    Day {index + 1}: {item}
                  </p>
                </li>
              ))}
            </ol>

            <ScrollButton
              sectionId="download"
              className="group mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-forest px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_34px_var(--alpha-forest-30)] transition duration-300 hover:-translate-y-0.5 hover:bg-forest-hover hover:shadow-[0_20px_40px_var(--alpha-forest-34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
            >
              Build My Trip in the App
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ScrollButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
