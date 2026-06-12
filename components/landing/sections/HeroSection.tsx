import Image from "next/image";
import type { ReactNode } from "react";
import Header from "@/components/landing/sections/Header";
import ScrollButton from "@/components/landing/ui/ScrollButton";
import { buttonOutline, buttonPrimary, Container, Icon, type IconName, PhonePreview } from "@/components/landing/ui/landingUi";

function TrustChip({ icon, children, className }: { icon: IconName; children: ReactNode; className: string }) {
  return (
    <div
      style={{
        background: "var(--alpha-trust-bg)",
        backdropFilter: 'blur(16px)',
        border: "1px solid var(--alpha-white-15)",
        boxShadow: "0 8px 32px var(--alpha-black-60)",
      }}
      className={`float-slow absolute z-20 hidden items-center gap-2.5 rounded-full 
    px-4 py-2.5 text-xs font-semibold text-white xl:flex ${className}`}>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-action text-alpine shrink-0">
        <Icon name={icon} className="h-3.5 w-3.5" />
      </span>
      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
}

export default function HeroSection() {
  const planTripHref =
    "https://wa.me/923162996154?text=Hi%20Muruj!%20I%27d%20like%20to%20plan%20my%20trip%20to%20Skardu.%20Can%20you%20help%20me%20with%20dates%2C%20group%20size%20and%20budget%3F";

  return (
    <section className="relative min-h-190 overflow-hidden bg-alpine text-white lg:min-h-205">
      <Image src="/images/skardu-hero.png" alt="Aerial view of an alpine lake and mountains near Skardu" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--alpha-alpine-97)_0%,var(--alpha-alpine-78)_46%,var(--alpha-alpine-33)_100%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-alpine via-transparent to-alpine/30" />
      <Header />
      <Container className="relative z-10 grid min-h-190 items-center gap-12 pb-16 pt-32 lg:min-h-205 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur">
            <Icon name="compass" className="h-4 w-4 text-action" />
            Built in Skardu, for smarter journeys
          </div>

          {/* FIXED: removed whitespace-nowrap, proper responsive font sizes */}
          <h1 className="text-[1.9rem] font-bold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem]">
            <span className="block sm:whitespace-nowrap">Explore Skardu With</span>
            <span className="block text-action sm:whitespace-nowrap">Pakistan&apos;s Tech-Forward</span>
            <span className="block sm:whitespace-nowrap">Travel Company</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Book curated Skardu trips, get live weather and road updates, plan with AI, and travel with verified local guides.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={planTripHref} className={buttonPrimary}>
              Plan My Trip <Icon name="arrow" className="h-4 w-4" />
            </a>
            <ScrollButton sectionId="packages" className={buttonOutline}>
              View Skardu Packages
            </ScrollButton>
          </div>


          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-white/72">
            {["Local Skardu experts", "Secure app booking", "Traveler-first support"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-action/15 text-action">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex min-h-135 w-full max-w-xl items-center justify-center lg:justify-end">
          <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-action/15 blur-3xl" />

          {/* Pills — xl+ only taake tablet pe clip na ho */}
          <TrustChip icon="lock" className="left-0 top-20 hidden! xl:flex!">
            Secure Booking
          </TrustChip>
          <TrustChip icon="guide" className="right-0 top-10 [animation-delay:1s] hidden! xl:flex!">
            Verified Guides
          </TrustChip>
          <TrustChip icon="route" className="-left-4 bottom-24 [animation-delay:2s] hidden! xl:flex!">
            Live Road Alerts
          </TrustChip>
          <TrustChip icon="heart" className="right-0 bottom-14 [animation-delay:3s] hidden! xl:flex!">
            WhatsApp Support
          </TrustChip>

          <PhonePreview />
        </div>
      </Container>
    </section>
  );
}
