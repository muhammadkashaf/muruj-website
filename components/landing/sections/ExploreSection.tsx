import DestinationMapPreview from "./DestinationMapPreview";
import ScrollButton from "@/components/landing/ui/ScrollButton";
import SectionHeading from "@/components/landing/ui/SectionHeading";
import { buttonDark, Container, Icon } from "@/components/landing/ui/landingUi";

export default function ExploreSection() {
  return (
    <section id="explore" className="scroll-mt-20 bg-mist py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="min-w-0">
          <SectionHeading
            align="left"
            eyebrow="Destination discovery"
            title="Discover Skardu Before You Travel"
            description="Find photo spots, fuel stops, restaurants, emergency services, and key locations before your trip begins."
          />
          <ScrollButton sectionId="download" className={`${buttonDark} group mt-8`}>
            Explore Spots in the App
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ScrollButton>
          <div className="mt-10 grid min-w-0 grid-cols-[repeat(3,minmax(0,1fr))] gap-3">
            {[
              ["42+", "Key Places"],
              ["18", "Photo Spots"],
              ["24/7", "Travel Support"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-0 border-l border-forest/15 pl-3 sm:pl-4">
                <p className="text-2xl font-bold text-forest">{value}</p>
                <p className="mt-1 text-[11px] leading-4 text-ink/65 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <DestinationMapPreview />
      </Container>
    </section>
  );
}
