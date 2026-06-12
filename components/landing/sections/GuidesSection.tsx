"use client";

import Image from "next/image";
import { ArrowRight, Languages, MapPinned, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";
import ScrollButton from "@/components/landing/ui/ScrollButton";
import { Container, Icon } from "@/components/landing/ui/landingUi";

type Guide = {
  name: string;
  initials: string;
  languages: string;
  experience: string;
  trips: string;
  specialty: string;
  rating: string;
  reviews: string;
  imageSrc?: string;
};

const trustMetrics = [
  { value: "500+", label: "Guided Trips", icon: MapPinned },
  { value: "4.9", label: "Average Rating", icon: Star },
  { value: "Verified", label: "Local Experts", icon: ShieldCheck },
  { value: "Multilingual", label: "Support", icon: Languages },
];

const guides: Guide[] = [
  {
    name: "Ali Batistani",
    initials: "AB",
    languages: "Urdu, English, Balti",
    experience: "5+ years",
    trips: "216 trips",
    specialty: "Family Tours",
    rating: "4.9",
    reviews: "216 reviews",
  },
  {
    name: "Ghulam Hussain",
    initials: "GH",
    languages: "Urdu, English, Shina",
    experience: "7+ years",
    trips: "180 trips",
    specialty: "Photography Guide",
    rating: "4.8",
    reviews: "180 reviews",
  },
  {
    name: "Tashif Khan",
    initials: "TK",
    languages: "Urdu, English, Balti",
    experience: "4+ years",
    trips: "174 trips",
    specialty: "Trekking Specialist",
    rating: "4.9",
    reviews: "174 reviews",
  },
];

function GuideInitials({ guide }: { guide: Guide }) {
  return (
    <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-white/20 bg-gradient-to-br from-white/25 to-alpine/30 text-3xl font-bold text-white shadow-xl">
      {guide.initials}
    </div>
  );
}

function GuideAvatar({ guide }: { guide: Guide }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!guide.imageSrc || imageFailed) {
    return <GuideInitials guide={guide} />;
  }

  return (
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-xl ring-4 ring-white/25">
      <Image
        src={guide.imageSrc}
        alt={`${guide.name} - Verified Guide`}
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
  return (
    <article className="group overflow-hidden rounded-[1.8rem] bg-white shadow-[0_20px_65px_var(--alpha-forest-10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_72px_var(--alpha-forest-14)]">
      <div className="relative h-44 overflow-hidden rounded-t-2xl bg-forest-muted p-6">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/5" />
        <div className="absolute -right-2 top-8 h-20 w-20 rounded-full bg-white/5" />
        <div className="flex h-full items-end">
          <GuideAvatar guide={guide} />
        </div>
        <span className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider text-forest">
          <Icon name="shield" className="h-3.5 w-3.5 fill-action text-action" />
          Verified Guide
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-action/12 px-3 py-1 text-xs font-bold text-forest">
              {guide.specialty}
            </span>
            <h3 className="mt-3 text-xl font-bold">{guide.name}</h3>
            <p className="mt-1 text-xs text-ink/60">Speaks: {guide.languages}</p>
          </div>
          <div className="shrink-0 rounded-2xl bg-amber-soft px-3 py-2 text-center">
            <span className="flex items-center justify-center gap-1 text-lg font-black text-ink">
              <Icon name="star" className="h-4 w-4 fill-action text-action" />
              {guide.rating}
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold text-ink/50">{guide.reviews}</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 divide-x divide-forest/10 rounded-2xl border border-forest/8 bg-mist px-3 py-3 text-center">
          <div>
            <p className="text-sm font-bold text-ink">{guide.experience}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink/50">Experience</p>
          </div>
          <div>
            <p className="text-sm font-bold text-ink">{guide.trips}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink/50">Completed</p>
          </div>
        </div>

        <ScrollButton sectionId="download" className="mt-5 flex w-full items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-emerald-700">
          Ask About This Guide
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
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

        <div className="mt-10 grid overflow-hidden rounded-[1.6rem] border border-forest/8 bg-white shadow-[0_16px_50px_var(--alpha-forest-08)] sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map(({ value, label, icon: MetricIcon }, index) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-5 py-5 ${
                index === 1
                  ? "border-t border-forest/8 sm:border-l sm:border-t-0"
                  : index === 2
                    ? "border-t border-forest/8 lg:border-l lg:border-t-0"
                    : index === 3
                      ? "border-t border-forest/8 sm:border-l lg:border-t-0"
                      : ""
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-action/12 text-forest">
                <MetricIcon size={18} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-base font-black text-ink">{value}</p>
                <p className="mt-0.5 text-xs text-ink/55">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <h3 className="shrink-0 text-lg font-bold tracking-[-0.02em] text-ink sm:text-xl">Meet Some Of Our Top Rated Local Guides</h3>
          <span className="h-px flex-1 bg-forest/10" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => <GuideCard key={guide.name} guide={guide} />)}
        </div>
      </Container>
    </section>
  );
}
