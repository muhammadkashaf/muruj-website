import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container, Icon } from "@/components/landing/ui/landingUi";

const benefits = [
  ["route", "Real-Time Weather & Road Alerts", "Stay updated on changing weather, road conditions, and travel risks before you move.", "Live updates"],
  ["map", "Curated Skardu Itineraries", "Ready-made plans built around real routes, timing, stays, and local experiences.", "Ready-made plans"],
  ["guide", "Verified Local Guides", "Connect with experienced local guides who know the region, routes, and hidden spots.", "Trusted guides"],
  ["shield", "Secure Online Booking", "Book plans and services inside the app with safe local payment options.", "Safe payments"],
] as const;

function BenefitCard({ item, index }: { item: (typeof benefits)[number]; index: number }) {
  return (
    <article className={`flex h-full flex-col rounded-[1.7rem] p-6 transition hover:-translate-y-1 ${index === 1 ? "bg-forest text-white shadow-[0_25px_60px_var(--alpha-forest-20)]" : "glass-light"}`}>
      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${index === 1 ? "bg-action text-alpine" : "bg-forest/8 text-forest"}`}>
        <Icon name={item[0]} />
      </span>
      <h3 className="mt-7 text-lg font-bold tracking-tight">{item[1]}</h3>
      <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-white/75" : "text-ink/70"}`}>{item[2]}</p>
      <p className={`mt-auto pt-6 text-xs font-black uppercase tracking-[0.14em] ${index === 1 ? "text-action" : "text-forest/65"}`}>{item[3]}</p>
    </article>
  );
}

export default function BenefitsSection() {
  return (
    <section className="bg-sky-soft/50 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <Container>
        <SectionHeading eyebrow="One app, every step" title={<>Plan Skardu Smarter<br />With Everything in One App</>} description="From curated plans to road alerts and local guides, Muruj helps you explore Skardu with less stress and more confidence." />
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => <BenefitCard key={item[1]} item={item} index={index} />)}
        </div>
      </Container>
    </section>
  );
}
