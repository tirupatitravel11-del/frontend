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
      <section className="relative min-h-[80vh] overflow-hidden bg-white lg:min-h-screen">
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
    </main>
  );
}
