import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container, Icon } from "@/components/landing/ui/landingUi";

const testimonials = [
  ["Muruj saved us hours of planning. We could see packages, routes, and alerts in one place before leaving.", "Ayesha R.", "Family Traveler"],
  ["The guide recommendations and weather updates made the trip feel much safer and easier.", "Hamza K.", "Adventure Traveler"],
  ["We planned our Skardu trip faster and booked everything through the app without back-and-forth calls.", "Sana M.", "Group Traveler"],
];

export default function TestimonialsSection() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Traveler feedback" title="What Travelers Value Most" description="Planning support, local knowledge, and clearer travel decisions are at the heart of the Muruj experience." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map(([quote, name, role], index) => (
            <figure key={name} className={`rounded-[1.7rem] p-7 ${index === 1 ? "bg-forest text-white shadow-[0_25px_70px_var(--alpha-forest-18)]" : "bg-white shadow-[0_20px_65px_var(--alpha-forest-08)]"}`}>
              <div className="flex gap-1">{[1,2,3,4,5].map((star) => <Icon key={star} name="star" className="h-3.5 w-3.5 fill-action text-action" />)}</div>
              <blockquote className={`mt-7 text-base font-semibold leading-7 ${index === 1 ? "text-white/80" : "text-ink/75"}`}>&ldquo;{quote}&rdquo;</blockquote>
              <figcaption className="mt-8 flex items-center gap-3"><span className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold ${index === 1 ? "bg-action text-alpine" : "bg-forest text-white"}`}>{name.split(" ").map((part) => part[0]).join("")}</span><div><p className="text-sm font-bold">{name}</p><p className={`mt-0.5 text-xs ${index === 1 ? "text-white/65" : "text-ink/60"}`}>{role}</p></div></figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
