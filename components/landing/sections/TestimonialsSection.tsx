import { BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container, Icon } from "@/components/landing/ui/landingUi";

const trustMetrics = [
  ["1,000+", "Happy Travelers"],
  ["4.9/5", "Average Rating"],
  ["98%", "Satisfaction Rate"],
];

const testimonials = [
  {
    quote: "The guide recommendations and weather updates made the trip feel much safer and easier. We always knew what to expect next.",
    name: "Hamza K.",
    role: "Adventure Traveler",
    trip: "Skardu + Deosai Adventure",
  },
  {
    quote: "Muruj saved us hours of planning. We could see packages, routes, and alerts in one place before leaving.",
    name: "Ayesha R.",
    role: "Family Traveler",
    trip: "Standard Skardu",
  },
  {
    quote: "We planned our Skardu trip faster and booked everything through the app without back-and-forth calls.",
    name: "Sana M.",
    role: "Group Traveler",
    trip: "Skardu Weekend Escape",
  },
];

function Stars({ featured = false }: { featured?: boolean }) {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon key={star} name="star" className={`${featured ? "h-4.5 w-4.5" : "h-3.5 w-3.5"} fill-action text-action`} />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, featured = false }: { testimonial: (typeof testimonials)[number]; featured?: boolean }) {
  const initials = testimonial.name.split(" ").map((part) => part[0]).join("");

  return (
    <figure className={`${featured ? "order-first bg-forest px-7 py-9 text-white shadow-[0_25px_70px_var(--alpha-forest-18)] lg:order-none lg:-translate-y-5 lg:px-9 lg:py-11" : "self-center bg-white p-7 text-ink shadow-[0_20px_65px_var(--alpha-forest-08)]"} flex flex-col rounded-[1.8rem]`}>
      <div className="flex items-center justify-between gap-3">
        <Stars featured={featured} />
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${featured ? "bg-white/10 text-white/85" : "bg-action/12 text-forest"}`}>
          <BadgeCheck size={13} />
          Verified Traveler
        </span>
      </div>

      <blockquote className={`${featured ? "mt-8 text-xl font-semibold leading-8 text-white/90 sm:text-2xl sm:leading-9" : "mt-7 text-base font-semibold leading-7 text-ink/75"}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className={`mt-auto flex items-center gap-3 ${featured ? "pt-10" : "pt-8"}`}>
        <span className={`grid place-items-center rounded-full font-bold ${featured ? "h-13 w-13 bg-action text-sm text-alpine" : "h-10 w-10 bg-forest text-xs text-white"}`}>
          {initials}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold">{testimonial.name}</p>
          <p className={`mt-0.5 text-xs ${featured ? "text-white/60" : "text-ink/55"}`}>{testimonial.role}</p>
          <p className={`mt-2 truncate text-[10px] font-bold uppercase tracking-wider ${featured ? "text-action" : "text-forest/65"}`}>{testimonial.trip}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Traveler feedback" title="What Travelers Value Most" description="Planning support, local knowledge, and clearer travel decisions are at the heart of the Muruj experience." />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {trustMetrics.map(([value, label]) => (
            <div key={label} className="flex items-center gap-2.5 rounded-full border border-forest/8 bg-white px-4 py-2.5 shadow-[0_8px_24px_var(--alpha-forest-08)]">
              <span className="text-sm font-black text-forest">{value}</span>
              <span className="h-3 w-px bg-forest/15" />
              <span className="text-xs font-medium text-ink/60">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          <TestimonialCard testimonial={testimonials[1]} />
          <TestimonialCard testimonial={testimonials[0]} featured />
          <TestimonialCard testimonial={testimonials[2]} />
        </div>
      </Container>
    </section>
  );
}
