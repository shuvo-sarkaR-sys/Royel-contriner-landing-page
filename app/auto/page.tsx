import { Metadata } from "next";
import { MechanicHeader } from "./MechanicHeader";
import { MechanicTestimonialSection } from "./MechanicTestimonialSection";
import { MechanicServicesSection } from "./MechanicServicesSection";
import { MechanicPromiseSection } from "./MechanicPromiseSection";

export default function Home() {
  return (
    <>
      <main className="pt-10 md:pt-20 space-y-40">
        <div className="max-w-6xl m-auto px-5">
          <MechanicHeader />
        </div>
        <div className="max-w-6xl m-auto px-5">
          <MechanicServicesSection />
        </div>
        <div className="max-w-6xl m-auto px-5">
          <MechanicTestimonialSection />
        </div>
        <MechanicPromiseSection />
      </main>
    </>
  );
}
