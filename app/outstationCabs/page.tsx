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
    <main >
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-stone-100 py-12 md:py-12 border-b border-slate-200">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/50 blur-3xl" />
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
              href="tel:+918726124680"
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

      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl text-center">
   

    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      Ready for Your{" "}
      <span className="text-gold">Outstation Journey?</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
      Book a comfortable cab for one-way trips, round trips, family travel,
      sightseeing, or long-distance journeys. Share your route and travel
      details with Tirupati Travels and get assistance with your booking.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20an%20outstation%20cab."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
      >
        Book Outstation Cab
      </a>

      <a
        href="tel:+918726124680"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        Call Now
      </a>
    </div>

    <p className="mt-6 text-sm text-stone-400">
      One Way • Round Trip • Family Travel • Sightseeing • Long Distance
      Journeys
    </p>
  </div>
</section>
    </main>
  );
}
