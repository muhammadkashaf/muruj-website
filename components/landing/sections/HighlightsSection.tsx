"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container } from "@/components/landing/ui/landingUi";

const destinations = [
  {
    title: "Deosai Plains",
    image: "/images/deosai.png",
    description: "A vast alpine wilderness where wildflowers, clear skies, and open horizons create an unforgettable sense of scale.",
    badge: "Most Visited",
    message: "Hi Muruj! I want to know more about Deosai Plains trip.",
  },
  {
    title: "Shangrila Resort",
    image: "/images/shangrila.png",
    description: "An iconic lakeside retreat framed by mountain views.",
    badge: "Family Favorite",
    message: "Hi Muruj! I want to know more about Shangrila Resort trip.",
  },
  {
    title: "Kachura Lakes",
    image: "/images/kachura.png",
    description: "Crystal blue water and pine forests made for quiet exploration.",
    badge: "Photography Favorite",
    message: "Hi Muruj! I want to know more about Kachura Lakes trip.",
  },
];

export default function HighlightsSection() {
  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/923162996154?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-sky-soft/55 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="See it before you go" title="Discover Skardu Highlights" description="Get inspired by some of the region's most memorable destinations before choosing your route." />

        <div className="mt-14 grid gap-5 lg:grid-cols-5 lg:grid-rows-2">
          {destinations.map((destination, index) => {
            const featured = index === 0;

            return (
              <article
                key={destination.title}
                className={`group relative min-h-[330px] overflow-hidden rounded-[1.8rem] shadow-[0_18px_55px_var(--alpha-forest-08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_var(--alpha-forest-14)] ${featured ? "lg:col-span-3 lg:row-span-2 lg:min-h-[620px]" : "lg:col-span-2 lg:min-h-0"}`}
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--alpha-alpine-92)_0%,var(--alpha-alpine-55)_28%,transparent_68%)]" />
                <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-alpine/45 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  {destination.badge}
                </span>
                <div className={`absolute inset-x-6 bottom-6 flex items-end justify-between gap-5 text-white ${featured ? "sm:inset-x-8 sm:bottom-8" : ""}`}>
                  <div className="max-w-xl">
                    <p className={`font-bold tracking-[-0.035em] ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{destination.title}</p>
                    <p className={`mt-2 leading-6 text-white/75 ${featured ? "max-w-lg text-sm sm:text-base" : "text-sm"}`}>{destination.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(destination.message)}
                    aria-label={`Ask about ${destination.title}`}
                    className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full bg-action text-alpine transition-all duration-300 hover:scale-105 hover:bg-action-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
