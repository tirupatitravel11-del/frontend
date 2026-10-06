import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";
import PopularTours from "../Local-Seeing/PopularTours";
import CustomItinerary from "../Local-Seeing/CustomItinerary";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../Home/Testimonials";
import SightseeingFAQ from "../Local-Seeing/SightseeingFAQ";
import HowItWorks from "../AirportTransfer/HowItWorks";
import VehicleFleet from "../Cab/Cabhub/VehicleFleet";
import UniversalSeoBookingForm from "./UniversalSeoBookingForm";
import AyodhyaRoutesSection from "@/_components/AyodhyaRoutesSection";
import PopularRoutes from "@/_components/PopularRoutes";
import { generatePopularRoutes } from "@/app/lib/api/route-data/route-generator";

export default function LocalSightseeingPage({ page }: { page: SeoPageData }) {
  const { slug, title, description, intro, highlights, popularTrips, city } =
    page;
  const popularRoutes = generatePopularRoutes(city, "");
  const isAyodhya =
    city?.toLowerCase() === "ayodhya" || slug?.toLowerCase().includes("ayodhya");

  return (
    <main className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden bg-stone-50 lg:min-h-screen border-b border-slate-300">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-slate-100/80 blur-2xl" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-screen">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="max-w-3xl">
              <div className="mb-6 h-1 w-12 rounded-full bg-gold" />
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-gold">
                Local Sightseeing Tours • {city}
              </p>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                {title || `Local Sightseeing in ${city}`}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                {description ||
                  `Explore top attractions, temples, historical sites, and vibrant markets in ${city} with our comfortable AC cabs and expert local drivers.`}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="tel:+918726124680"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-gold bg-white px-7 py-3.5 text-center text-sm font-bold text-gold transition-all hover:bg-gold hover:text-white sm:px-8 sm:py-4"
                >
                  <Phone size={18} />
                  Call to Book Now
                </Link>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <UniversalSeoBookingForm
              page={{
                slug,
                city,
                service: "local-sightseeing",
                title,
                description,
                intro,
                highlights,
                popularTrips,
              }}
            />
          </div>
        </div>
      </section>

      {/* <PopularTours /> */}
      <VehicleFleet />
      <HowItWorks />
      <CustomItinerary />
      <WhyChooseUs />
      {isAyodhya ? (
        <AyodhyaRoutesSection />
      ) : (
        popularRoutes.length > 0 && (
          <PopularRoutes
            routes={popularRoutes}
            from={popularRoutes[0].from}
            to="popular destinations"
            pagetype="taxi"
          />
        )
      )}
      <Testimonials />
      <SightseeingFAQ />
      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
  {/* Background Decorations */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl text-center">
    {/* <p className="text-sm font-semibold uppercase tracking-[4px] text-gold">
      Local Sightseeing
    </p> */}

    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      Ready to Explore{" "}
      <span className="text-gold">More Places?</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
      Plan a comfortable local sightseeing trip with a vehicle that suits
      your group and travel plans. Visit popular attractions, temples,
      landmarks, and nearby places at your own pace.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%20local%20sightseeing%20cab."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
      >
        Book Sightseeing on WhatsApp
      </a>

      <a
        href="tel:+918726124680"
        className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        Call Now
      </a>
    </div>

    <p className="mt-6 text-sm text-stone-400">
      City Tours • Temple Visits • Tourist Attractions • Nearby Places
    </p>
  </div>
</section>
    </main>
  );
}
