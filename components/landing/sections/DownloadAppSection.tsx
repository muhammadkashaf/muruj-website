import { buttonPrimary, Container, Icon, type IconName, PhonePreview } from "@/components/landing/ui/landingUi";

const planTripHref =
  "https://wa.me/923162996154?text=Hi%20Muruj!%20I%27d%20like%20to%20plan%20my%20trip%20to%20Skardu.%20Can%20you%20help%20me%20with%20dates%2C%20group%20size%20and%20budget%3F";

function StoreBadge({ store }: { store: "App Store" | "Google Play" }) {
  return (
    <div className="flex h-14 w-45 items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-white transition-all duration-200 hover:bg-white/10">
      <span className="grid h-10 w-10 place-items-center rounded-xl">
        {store === "App Store" ? (
          <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 466 511.98">
            <g id="Layer_x0020_1">
              <path fill="var(--google-red)" fillRule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z" />
              <path fill="var(--google-yellow)" fillRule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z" />
              <path fill="var(--google-green)" fillRule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z" />
              <path fill="var(--google-blue)" fillRule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z" />
            </g>
          </svg>
        )}
      </span>
      <span><span className="block text-xs text-white/70">Coming soon on</span><span className="block text-sm font-bold text-white">{store}</span></span>
    </div>
  );
}



export default function DownloadAppSection() {
  return (
    <section id="download" className="relative scroll-mt-20 overflow-hidden bg-alpine py-24 text-white sm:py-28">
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-action/12 blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-app-glow/12 blur-3xl" />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex min-h-130 items-center justify-center">
          <PhonePreview large />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-action">Your Skardu co-pilot</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Everything You Need For Skardu, In One App</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/78">From packages and AI planning to travel alerts, guides, and group booking, Muruj helps you plan smarter before your journey begins.</p>
          <div className="mt-8 space-y-3">
            {[["sparkles", "Plan smarter with AI"], ["shield", "Travel safely with live alerts"], ["wallet", "Book easily through the app"]].map(([icon, text]) => <p key={text} className="flex items-center gap-3 text-sm font-semibold text-white/75"><span className="grid h-8 w-8 place-items-center rounded-full bg-action/15 text-emerald-400"><Icon name={icon as IconName} className="h-4 w-4" /></span>{text}</p>)}
          </div>
          <div className="mt-9 flex flex-wrap gap-3"><StoreBadge store="App Store" /><StoreBadge store="Google Play" /></div>
          <div className="mt-8 rounded-3xl border border-emerald-800/60 bg-white/8 p-5">
            <p className="text-sm font-bold text-action">Need help before the app launches?</p>
            <p className="mt-2 text-sm leading-6 text-white/75">Tell our Skardu-based team your dates, group size, and budget. We will help you choose the right trip.</p>
            <a href={planTripHref} target="_blank" rel="noopener noreferrer" className={`${buttonPrimary} mt-5 w-full sm:w-auto`}>Plan My Trip <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
        </div>
      </Container>
    </section>
  );
}
