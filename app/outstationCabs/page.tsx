import Link from "next/link";
import { Car, Phone, MapPin, ShieldCheck, Clock, Star } from "lucide-react";
import VehicleFleet from "../components/Cab/Cabhub/VehicleFleet";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";
import OutstationFAQ from "../components/OutStationcabs/OutStationCabsFAQ";
import HillStationSpecial from "../components/OutStationcabs/HillStationSpecial";
import TrustAndQuality from "../components/OutStationcabs/rustAndQuality";
import SpecialOccasions from "../components/OutStationcabs/SpecialOccasions";

// import PopularDestinations from "@/components/outstation/PopularDestinations";
// import VehicleFleet from "@/components/outstation/VehicleFleet";
// import PricingCalculator from "@/components/outstation/PricingCalculator";
// import WhyChooseUs from "@/components/outstation/WhyChooseUs";
// import Testimonials from "@/components/outstation/Testimonials";
// import FAQ from "@/components/outstation/FAQ";
// import FinalCTA from "@/components/outstation/FinalCTA";

export default function OutstationCabsPage() {
  return (
    <main className="bg-stone-50">
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-stone-100 py-20 md:py-32">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Outstation & Road Trips
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-900 md:text-6xl">
            Explore Beyond the City <br className="hidden md:block" />
            <span className="text-gold">In Total Comfort</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 md:text-xl">
            Reliable, spacious, and affordable outstation cab services for
            weekend getaways, family trips, and business travel. One-way,
            round-trip, or multi-city tours.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#book"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-white transition-all hover:bg-amber-500 hover:shadow-lg"
            >
              <Car size={20} />
              Book Your Trip
            </Link>

            <Link
              href="tel:+916390008503"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-gold bg-white px-8 py-4 text-base font-semibold text-gold transition-all hover:bg-gold hover:text-white"
            >
              <Phone size={20} />
              Call now
            </Link>
          </div>
        </div>
      </section>

      <VehicleFleet />

      <WhyChooseUs />
      <SpecialOccasions />
      {/* <HillStationSpecial/> */}
      {/* <TrustAndQuality/> */}

      <Testimonials />
      <OutstationFAQ />
    </main>
  );
}
