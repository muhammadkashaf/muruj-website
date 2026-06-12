import Image from "next/image";
import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container, Icon } from "@/components/landing/ui/landingUi";

const packages = [
  {
    tag: "Popular",
    title: "Skardu Weekend Escape",
    duration: "2 Nights",
    price: "PKR 30K - 50K",
    description: "Perfect short getaway to explore the beauty of Skardu.",
    chips: ["Family", "Couple", "Weekend"],
    includes: ["Hotel stay", "Local transfers", "Guided sightseeing"],
    image: "/images/kachura.png",
  },
  {
    tag: "Best Seller",
    title: "Standard Skardu",
    duration: "5 Nights",
    price: "PKR 65K - 110K",
    description: "Most recommended package for families and groups.",
    chips: ["Family", "Adventure", "Comfort"],
    includes: ["Hotel stay", "Airport transfers", "Local guide"],
    image: "/images/shangrila.png",
  },
  {
    tag: "Premium",
    title: "Skardu + Deosai Adventure",
    duration: "7 Nights",
    price: "PKR 155K",
    description: "A premium adventure through Skardu and Deosai National Park.",
    chips: ["Adventure", "Photography", "Premium"],
    includes: ["Premium stay", "4x4 transport", "Local guide"],
    image: "/images/deosai.png",
  },
];

function PackageCard({ item }: { item: (typeof packages)[number] }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_70px_var(--alpha-forest-11)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_var(--alpha-forest-15)]">
      <div className="relative h-64 min-w-0 overflow-hidden">
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--alpha-alpine-92)_0%,var(--alpha-alpine-55)_28%,transparent_65%)]" />
        <span className="absolute left-5 top-5 rounded-full bg-action px-3 py-1.5 text-xs font-black uppercase tracking-widest text-alpine">{item.tag}</span>
        <div className="absolute inset-x-5 bottom-5 flex min-w-0 items-end justify-between gap-3 text-white">
          <div className="min-w-0">
            <p className="text-xs text-white/80">Starting from</p>
            <p className="mt-1 text-xl font-bold">{item.price}</p>
            <p className="text-xs text-white/80">per person</p>
          </div>
          <span className="shrink-0 rounded-full border border-white/25 bg-alpine/35 px-3 py-1.5 text-xs font-bold backdrop-blur">{item.duration}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-5 pt-6">
        <div>
          <h3 className="min-h-7 text-xl font-bold leading-7 tracking-[-0.03em]">{item.title}</h3>
          <p className="mt-2.5 min-h-12 text-sm leading-6 text-ink/70">{item.description}</p>
        </div>
        <div className="mt-5 min-h-8">
          <div className="flex flex-wrap gap-2">
            {item.chips.map((chip) => (
              <span key={chip} className="rounded-full bg-forest/6 px-3 py-1.5 text-xs font-bold leading-5 text-forest">{chip}</span>
            ))}
          </div>
        </div>
        <ul className="mt-5 min-h-33 space-y-3 border-t border-forest/8 py-5">
          {item.includes.map((include) => (
            <li key={include} className="flex items-center gap-2.5 text-sm leading-5 text-ink/70">
              <Icon name="check" className="h-4 w-4 shrink-0 text-forest" /> {include}
            </li>
          ))}
        </ul>
        <a href={`https://wa.me/923162996154?text=Hi%20Muruj!%20I%27m%20interested%20in%20the%20${encodeURIComponent(item.title)}%20package%20(${encodeURIComponent(item.price)}%2C%20${encodeURIComponent(item.duration)}).%20Can%20you%20share%20availability%20and%20details%3F`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex min-h-14 cursor-pointer items-center justify-between gap-4 border-t border-forest/8 pt-4 text-sm font-bold text-forest transition-colors hover:text-action">
          Ask for This Trip
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-action group-hover:text-alpine">
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
              <path d="m7.5 5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
}

export default function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-20 bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Curated journeys" title="Find the Right Skardu Trip for Your Travel Style" description="Compare curated Skardu packages by duration, budget, and inclusions, then ask our local team to tailor the trip around you." />
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => <PackageCard key={item.title} item={item} />)}
        </div>
      </Container>
    </section>
  );
}
