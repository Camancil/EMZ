import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import InstagramFeed from "@/components/sections/InstagramFeed";
import HorarioTable from "@/components/sections/HorarioTable";
import LocationMap from "@/components/sections/LocationMap";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ServicesGrid />
      <InstagramFeed />
      <HorarioTable />
      <LocationMap />
      <CtaSection />
    </div>
  );
}
