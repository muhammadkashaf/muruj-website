import ScrollButton from "@/components/landing/ui/ScrollButton";
import { contactHref, Container, Logo } from "@/components/landing/ui/landingUi";

export default function Footer() {
  const explore = [
    { label: "Packages", sectionId: "packages" },
    { label: "Explore Skardu", sectionId: "explore" },
    { label: "AI Trip Planner", sectionId: "planner" },
    { label: "Guides", sectionId: "guides" },
    { label: "Weather & Alerts", sectionId: "weather" },
  ] as const;
  const support = [
    ["Email Support", "mailto:hello@murujtravels.pk"],
    ["Payment Methods", contactHref],
  ] as const;
  return (
    <footer id="contact" className="scroll-mt-20 bg-footer-deep pb-8 pt-16 text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div><Logo className="h-auto w-[120px]" /><p className="mt-6 max-w-xs text-sm leading-7 text-white/70">A Skardu-based travel company helping visitors plan practical, memorable journeys with local support.</p></div>
          <FooterLinks title="Explore" links={explore} />
          <FooterLinks title="Support" links={support} />
          <div><p className="text-sm font-bold">Contact Us</p><div className="mt-6 space-y-4 text-sm text-white/70"><a href="mailto:hello@murujtravels.pk" className="block cursor-pointer transition hover:text-action">hello@murujtravels.pk</a><p>Skardu, Gilgit-Baltistan</p><p className="text-xs leading-5 text-white/60">Share your dates, group size, and budget for a tailored recommendation.</p></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"><p>©2026 Muruj Travels. All Rights Reserved.</p><p>Made for the mountains of Skardu.</p></div>
      </Container>
    </footer>
  );
}

type FooterLink = { label: string; sectionId: string } | readonly [string, string];

function FooterLinks({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div>
      <p className="text-sm font-bold">{title}</p>
      <div className="mt-6 space-y-3">
        {links.map((link) =>
          "sectionId" in link ? (
            <ScrollButton key={link.label} sectionId={link.sectionId} className="block text-left text-sm text-white/70 transition hover:text-action">
              {link.label}
            </ScrollButton>
          ) : (
            <a key={link[0]} href={link[1]} className="block cursor-pointer text-sm text-white/70 transition hover:text-action">
              {link[0]}
            </a>
          ),
        )}
      </div>
    </div>
  );
}
