import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import InstagramSection from "@/components/sections/InstagramSection";
import HorarioTable from "@/components/sections/HorarioTable";
import LocationMap from "@/components/sections/LocationMap";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ServicesGrid />
      <InstagramSection />
      <HorarioTable />
      <LocationMap />
      <CtaSection />
    </div>
  );
}
