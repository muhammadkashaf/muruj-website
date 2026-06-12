"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container } from "@/components/landing/ui/landingUi";

const tourCards = [
  {
    title: "Deosai Plains",
    image: "/images/deosai.png",
    subtitle: "World's 2nd highest plateau, best Jul–Sep",
    message: "Hi Muruj! I want to know more about Deosai Plains trip.",
  },
  {
    title: "Shangrila Resort",
    image: "/images/shangrila.png",
    subtitle: "Iconic lakeside retreat, year-round beauty",
    message: "Hi Muruj! I want to know more about Shangrila Resort trip.",
  },
  {
    title: "Kachura Lakes",
    image: "/images/kachura.png",
    subtitle: "Twin lakes, crystal blue waters & pine forests",
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
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tourCards.map(({ title, image, subtitle, message }) => (
            <article key={title} className="group relative h-[340px] overflow-hidden rounded-[1.8rem] transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine via-alpine/5 to-transparent" />
              <span className="absolute right-5 top-5 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">Trip highlight</span>
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white"><div><p className="text-xl font-bold">{title}</p><p className="mt-1 text-xs text-white/70">{subtitle}</p></div><button type="button" onClick={() => openWhatsApp(message)} aria-label={`Ask about ${title}`} className="relative w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-400 transition-all duration-200 hover:scale-110 shrink-0 cursor-pointer"><ArrowRight size={18} className="absolute left-1/2 top-1/2 text-white -translate-x-[52%] -translate-y-1/2" /></button></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
