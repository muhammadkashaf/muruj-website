import SectionHeading from "@/components/landing/ui/SectionHeading";
import { Container } from "@/components/landing/ui/landingUi";
import WeatherAlertPanel from "@/components/landing/weather/WeatherAlertPanel";
import WeatherFuelPanel from "@/components/landing/weather/WeatherFuelPanel";
import WeatherRoutePanel from "@/components/landing/weather/WeatherRoutePanel";
import WeatherSafetyPanel from "@/components/landing/weather/WeatherSafetyPanel";
import WeatherSummaryPanel from "@/components/landing/weather/WeatherSummaryPanel";

export default function WeatherSection() {
  return (
    <section id="weather" className="scroll-mt-20 bg-weather-bg py-24 sm:py-32">
      <Container>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Travel intelligence"
            title="Stay Updated Before You Leave"
            description="Check live weather, road conditions, and fuel prices inside the app for a safer and smoother journey."
          />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <WeatherSafetyPanel />
          <WeatherAlertPanel />
          <WeatherSummaryPanel />
          <WeatherRoutePanel />
          <WeatherFuelPanel />
        </div>
      </Container>
    </section>
  );
}
