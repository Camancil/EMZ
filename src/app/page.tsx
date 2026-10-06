import Hero from "@/components/sections/Hero";
import PilaresGrid from "@/components/sections/PilaresGrid";
import ProgramasDestacados from "@/components/sections/ProgramasDestacados";
import InstagramSection from "@/components/sections/InstagramSection";
import HorarioTable from "@/components/sections/HorarioTable";
import LocationMap from "@/components/sections/LocationMap";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <PilaresGrid />
      <ProgramasDestacados />
      <InstagramSection />
      <HorarioTable />
      <LocationMap />
      <CtaSection />
    </div>
  );
}
