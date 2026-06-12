import Image from "next/image";
import type { ReactNode } from "react";
import { iconPaths, type IconName } from "./landingIcons";

export type { IconName };

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  );
}

export const buttonPrimary =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-action px-6 py-3.5 text-sm font-bold text-alpine shadow-[0_14px_35px_var(--alpha-action-30)] transition hover:-translate-y-0.5 hover:bg-action-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-action";
export const buttonDark =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-alpine px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest";
export const buttonOutline =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
export const contactHref =
  "mailto:hello@murujtravels.pk?subject=Help%20me%20plan%20my%20Skardu%20trip";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/images/muruj-logo.png"
      alt="Muruj Travels"
      width={99}
      height={35}
      priority
    />
  );
}

export function PhonePreview({ large = false }: { large?: boolean }) {
  const sizeClasses = large
    ? "h-[619px] w-[286px] sm:h-[688px] sm:w-[318px]"
    : "h-[584px] w-[270px] sm:h-[632px] sm:w-[292px]";

  return (
    <div className={cn("phone-shadow relative mx-auto overflow-hidden rounded-[2.8rem] border-[7px] border-phone-frame bg-phone-screen p-2 text-ink", sizeClasses)}>
      <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-phone-frame" />
      <div className="absolute inset-2 z-10 overflow-hidden rounded-[2.15rem] bg-phone-screen">
        <Image
          src="/images/muruj-app-home.png"
          alt="Muruj Travels mobile app home screen"
          fill
          loading="eager"
          sizes={large ? "(max-width: 640px) 286px, 318px" : "(max-width: 640px) 270px, 292px"}
          className="object-contain"
        />
      </div>
      <div aria-hidden="true" className="overflow-hidden rounded-[2.15rem] bg-phone-screen">
        <div className="bg-alpine px-4 pb-4 pt-9 text-white">
          <div className="flex items-center justify-between">
            <Logo className="h-auto w-17.5" />
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
              <Icon name="menu" className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/50">Your next escape</p>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="text-xl font-bold">Skardu</p>
              <p className="mt-0.5 text-[10px] text-white/55">Gilgit-Baltistan, Pakistan</p>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-action text-alpine">
              <Icon name="pin" className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="space-y-3 p-3">
          <div className="relative h-28 overflow-hidden rounded-2xl">
            <Image src="/images/kachura.png" alt="" fill sizes="280px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-alpine/80 to-transparent" />
            <div className="absolute inset-x-3 bottom-3 flex items-end justify-between text-white">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-action">Popular</p>
                <p className="mt-1 text-xs font-bold">Weekend Escape</p>
              </div>
              <p className="text-[10px] font-bold">From 30K</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-soft text-forest">
                <Icon name="cloud" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] text-ink/45">Skardu weather</p>
                <p className="text-xs font-bold">Partly Cloudy</p>
              </div>
            </div>
            <p className="text-lg font-bold">12°C</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["map", "Explore"],
              ["calendar", "Trips"],
              ["guide", "Guides"],
            ].map(([icon, label]) => (
              <div key={label} className="rounded-xl bg-white p-2 text-center shadow-sm">
                <Icon name={icon as IconName} className="mx-auto h-4 w-4 text-forest" />
                <p className="mt-1 text-[8px] font-semibold text-ink/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
