import Image from "next/image";
import Link from "next/link";
import { Phone, Car } from "lucide-react";
import HowToBook from "@/_components/Howtobook";
import HowItWorks from "../components/AirportTransfer/HowItWorks";
import VehicleFleet from "../components/Cab/Cabhub/VehicleFleet";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";
import AirportFAQ from "../components/AirportTransfer/airportFAQ";
import AirportExperience from "../components/AirportTransfer/AirportExperience";


// 👇 IMPORT YOUR COMPONENTS HERE AS YOU BUILD THEM 👇
// import HowItWorks from "@/components/airport/HowItWorks";
// import VehicleFleet from "@/components/airport/VehicleFleet";
// import WhyChooseUs from "@/components/airport/WhyChooseUs";
// import PopularRoutes from "@/components/airport/PopularRoutes";

export default function AirportTransferPage() {
  return (
    <main className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-stone-100 py-20 md:py-32">
        {/* Optional: Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Airport Transfers
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-900 md:text-6xl">
            Start Your Journey in <br className="hidden md:block" />
            <span className="text-gold">Comfort</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 md:text-xl">
            Reliable, professional, and punctual  services to and from
            the airport. Sit back, relax, and let us handle the driving.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#book"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-white transition-all hover:bg-amber-500 hover:shadow-lg"
            >
              <Car size={20} />
              Book Your Ride
            </Link>

            <Link
              href="tel:+911234567890"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-gold bg-white px-8 py-4 text-base font-semibold text-gold transition-all hover:bg-gold hover:text-white"
            >
              <Phone size={20} />
              Call Now
            </Link>
          </div>

     
        </div>
      </section>

  

   

      <HowItWorks />

      <VehicleFleet />
      <AirportExperience/>

      <WhyChooseUs />

     

      <Testimonials />
      <AirportFAQ/>

      {/* <FAQ /> */}
    </main>
  );
}
