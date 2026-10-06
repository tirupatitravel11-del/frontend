import Link from "next/link";
import {
  Car,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
  Star,
  Users,
} from "lucide-react";
import PopularTours from "../components/Local-Seeing/PopularTours";
import CustomItinerary from "../components/Local-Seeing/CustomItinerary";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";
import SightseeingFAQ from "../components/Local-Seeing/SightseeingFAQ";
import HowItWorks from "../components/AirportTransfer/HowItWorks";
import VehicleFleet from "../components/Cab/Cabhub/VehicleFleet";

export default function LocalSightseeingPage() {
  return (
    <main >
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-stone-100 py-12 md:py-12 border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/50 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Local Sightseeing Tours
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-900 md:text-6xl">
            Explore the City's Hidden Gems <br className="hidden md:block" />
            <span className="text-gold">In Total Comfort</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 md:text-xl">
            Discover the best temples, ghats, markets, and historical sites with
            our comfortable, AC cabs and knowledgeable local drivers. Half-day,
            full-day, or fully customized itineraries.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* <Link
              href="#book"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-white transition-all hover:bg-amber-500 hover:shadow-lg"
            >
              <Car size={20} />
              Book Sightseeing Tour
            </Link> */}

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

      {/* <PopularTours /> */}

      <VehicleFleet />
      <HowItWorks />
      <CustomItinerary />
      <WhyChooseUs />

      <Testimonials />
      <SightseeingFAQ />

      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl text-center">
    

    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      Ready to Explore{" "}
      <span className="text-gold">More Places?</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
      Plan a comfortable local sightseeing trip and explore popular
      attractions, temples, landmarks, markets, and nearby places at your
      own pace. Choose a vehicle that suits your group and travel plans.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%20local%20sightseeing%20cab."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
      >
        Book Sightseeing
      </a>

      <a
        href="tel:+918726124680"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        Call Now
      </a>
    </div>

    <p className="mt-6 text-sm text-stone-400">
      City Tours • Temple Visits • Tourist Attractions • Local Places •
      Nearby Destinations
    </p>
  </div>
</section>
    </main>
  );
}
