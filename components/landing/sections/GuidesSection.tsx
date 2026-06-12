"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ScrollButton from "@/components/landing/ui/ScrollButton";
import { Container, Icon } from "@/components/landing/ui/landingUi";

type Guide = [
  name: string,
  initials: string,
  languages: string,
  experience: string,
  specialties: string,
  rating: string,
  imageSrc?: string,
];

const guides: Guide[] = [
  ["Ali Batistani", "AB", "Urdu, English, Balti", "5+ Years Experience", "Religion, Culture, Tours", "4.9 (216)"],
  ["Ghulam Hussain", "GH", "Urdu, English, Shina", "7+ Years Experience", "Photography, Tours", "4.8 (180)"],
  ["Tashif Khan", "TK", "Urdu, English, Balti", "4+ Years Experience", "Adventure, Hiking", "4.9 (174)"],
];

function SpecialtyTag({ specialty }: { specialty: string }) {
  const specialtyClass =
    specialty.includes("Adventure") || specialty.includes("Hiking")
      ? "border border-orange-200 bg-orange-50 text-orange-700"
      : specialty.includes("Photography")
        ? "border border-blue-200 bg-blue-50 text-blue-700"
        : specialty.includes("Culture") || specialty.includes("Religion") || specialty.includes("Tours")
          ? "border border-purple-200 bg-purple-50 text-purple-700"
          : "border border-gray-200 bg-gray-50 text-gray-600";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${specialtyClass}`}>
      {specialty}
    </span>
  );
}

function GuideInitials({ guide }: { guide: Guide }) {
  return (
    <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-white/20 bg-gradient-to-br from-white/25 to-alpine/30 text-3xl font-bold text-white shadow-xl">
      {guide[1]}
    </div>
  );
}

function GuideAvatar({ guide }: { guide: Guide }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = guide[6];

  if (!imageSrc || imageFailed) {
    return <GuideInitials guide={guide} />;
  }

  return (
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-xl ring-4 ring-white/25">
      <Image
        src={imageSrc}
        alt={`${guide[0]} - Verified Guide`}
        fill
        className="object-cover object-top"
        sizes="96px"
        priority
        onError={() => setImageFailed(true)}
      />
    </div>
  );
}

function GuideCard({ guide }: { guide: Guide }) {
  const [rating, reviews] = guide[5].split(" ");
  const specialties = guide[4].split(", ");

  return (
    <article className="group cursor-pointer overflow-hidden rounded-[1.8rem] bg-white shadow-[0_20px_65px_var(--alpha-forest-10)] transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-44 overflow-hidden rounded-t-2xl bg-forest-muted p-6">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/5" />
        <div className="absolute -right-2 top-8 h-20 w-20 rounded-full bg-white/5" />
        <div className="flex h-full items-end">
          <GuideAvatar guide={guide} />
        </div>
        <span className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider text-forest">
          <Icon name="shield" className="h-3 w-3 fill-action text-action" />
          <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Verified Guide
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">{guide[0]}</h3>
            <p className="mt-1 text-xs text-ink/65">Speaks: {guide[2]}</p>
          </div>
          <span className="flex items-center gap-1.5">
            <Icon name="star" className="h-4 w-4 fill-action text-action" />
            <span className="text-sm font-bold">{rating}</span>
            <span className="text-xs text-gray-400">{reviews}</span>
          </span>
        </div>
        <div className="mt-5 grid gap-3">
          <p className="w-full rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-center text-xs text-gray-500">{guide[3]}</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <SpecialtyTag key={specialty} specialty={specialty} />
            ))}
          </div>
        </div>
        <ScrollButton sectionId="download" className="mt-2 flex w-full items-center justify-between border-t border-gray-100 pt-3 text-sm font-semibold text-emerald-700">
          Ask About This Guide
          <ArrowRight size={15} className="transition-transform duration-150 group-hover:translate-x-1" />
        </ScrollButton>
      </div>
    </article>
  );
}

export default function GuidesSection() {
  return (
    <section id="guides" className="scroll-mt-20 bg-mist py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl text-ink">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-widest text-emerald-700">
            LOCAL KNOWLEDGE
          </span>
          <h2 className="text-5xl font-black leading-[1.12] tracking-tight">Travel With Verified Local Guides</h2>
          <p className="mt-5 text-base leading-7 text-ink/70 sm:text-lg">Explore Skardu with experienced local guides who know the routes, weather, culture, and best photo spots. View profiles and connect through the app.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{guides.map((guide) => <GuideCard key={guide[0]} guide={guide} />)}</div>
      </Container>
    </section>
  );
}
