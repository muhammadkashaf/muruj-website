"use client";

import { useEffect, useState } from "react";
import ScrollButton from "../ui/ScrollButton";
import { buttonPrimary, Container, Icon, Logo } from "../ui/landingUi";

const navItems = [
  { label: "Packages", sectionId: "packages" },
  { label: "Explore Skardu", sectionId: "explore" },
  { label: "AI Planner", sectionId: "planner" },
  { label: "Weather & Alerts", sectionId: "weather" },
  { label: "Guides", sectionId: "guides" },
  { label: "Contact", sectionId: "contact" },
] as const;

const navLinkClass = "cursor-pointer text-sm font-semibold text-white/80 transition hover:text-white";
const iconButtonClass =
  "grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20";
const closeButtonClass =
  "grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 pt-4">
        <Container>
          <nav className="glass relative flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
            <button type="button" onClick={scrollHome} aria-label="Muruj Travels home" className="shrink-0 cursor-pointer">
              <Logo />
            </button>

            <div className="hidden items-center gap-5 lg:flex">
              {navItems.map(({ label, sectionId }) => (
                <ScrollButton key={label} sectionId={sectionId} className={navLinkClass}>
                  {label}
                </ScrollButton>
              ))}
            </div>

            <ScrollButton sectionId="download" className={`!hidden lg:!inline-flex !px-5 !py-2.5 ${buttonPrimary}`}>
              Get the App
              <Icon name="arrow" className="h-4 w-4" />
            </ScrollButton>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className={`${iconButtonClass} lg:hidden`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </Container>
      </header>

      {open && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] cursor-pointer bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <div
        className={`
          fixed right-0 top-0 z-[70] flex h-full w-[280px] flex-col bg-nav-panel
          transition-transform duration-300 ease-in-out lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className={closeButtonClass}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
          {navItems.map(({ label, sectionId }) => (
            <ScrollButton
              key={label}
              sectionId={sectionId}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-2xl px-4 py-3.5 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </ScrollButton>
          ))}
        </nav>

        <div className="border-t border-white/10 px-4 py-6">
          <ScrollButton sectionId="download" onClick={() => setOpen(false)} className={`${buttonPrimary} w-full justify-center`}>
            Get the App
            <Icon name="arrow" className="h-4 w-4" />
          </ScrollButton>
        </div>
      </div>
    </>
  );
}
