import Image from "next/image";
import { Fragment } from "react";
import ScrollButton from "@/components/landing/ui/ScrollButton";
import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container, Icon, type IconName } from "@/components/landing/ui/landingUi";

const steps: Array<{
  icon: IconName;
  title: string;
  description: string;
  badge?: string;
}> = [
  {
    icon: "users",
    title: "Create Group Trip",
    description: "Create your Skardu trip and choose who joins.",
  },
  {
    icon: "link",
    title: "Share Invite Link",
    description: "Send one booking link to everyone in your group.",
  },
  {
    icon: "wallet",
    title: "Travelers Pay Separately",
    description: "Each traveler confirms and pays for their own booking securely.",
    badge: "Individual payments",
  },
];

export default function GroupTripSection() {
  return (
    <section className="relative overflow-hidden bg-alpine py-24 text-white sm:py-32">
      <Image
        src="/images/deosai.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        className="pointer-events-none object-cover object-center opacity-[0.12]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-alpine/90 via-alpine/82 to-alpine/95" />
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[30rem] w-[min(90vw,72rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest/35 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Group travel, simplified"
          title="Travel With Your Group, Pay Separately"
          description="Create a group booking link in the Muruj Travels app and let each traveler complete their own secure booking through JazzCash or EasyPaisa."
        />

        <div className="mx-auto mt-12 grid max-w-[1248px] gap-12 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)_80px_minmax(0,1fr)] lg:gap-0 xl:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)_96px_minmax(0,1fr)]">
          {steps.map(({ icon, title, description, badge }, index) => (
            <Fragment key={title}>
              <article
                className="relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-[1.8rem] border border-action/25 bg-group-card/80 p-7 shadow-[0_22px_65px_var(--alpha-black-24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-action/35 sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl border border-action/25 bg-action/15 text-action shadow-[0_10px_26px_var(--alpha-black-16)]">
                    <Icon name={icon} className="h-5.5 w-5.5" />
                  </span>
                  <span className="text-5xl font-black tracking-[-0.08em] text-white/[0.13]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto pt-10">
                  {badge && (
                    <span className="mb-3 inline-flex rounded-full border border-action/15 bg-action/[0.06] px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-muted-green">
                      {badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold tracking-[-0.025em]">{title}</h3>
                  <p className="mt-3 max-w-[19rem] text-sm leading-6 text-white/62">{description}</p>
                </div>
              </article>

              {index < steps.length - 1 && (
                <div className="hidden items-center px-2 text-action/80 lg:flex" aria-hidden="true">
                  <div className="h-0 min-w-0 flex-1 border-t-2 border-dotted border-action/60" />
                  <Icon name="arrow" className="-ml-0.5 h-5 w-5 shrink-0" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-9 text-center sm:mt-10">
          <ScrollButton
            sectionId="download"
            className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-group-cta px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_var(--alpha-black-20)] transition duration-300 hover:-translate-y-0.5 hover:bg-group-cta-hover hover:shadow-[0_16px_32px_var(--alpha-black-24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
          >
            Create Group Trip in the App
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </ScrollButton>
        </div>
      </Container>
    </section>
  );
}
