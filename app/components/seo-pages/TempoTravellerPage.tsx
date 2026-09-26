import Link from "next/link";
import { MapPin, Calendar, Clock } from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";
import VehicleFleet from "../Cab/Cabhub/VehicleFleet"; // Adjust path if needed
import TempoTravellerFleetDetailsTaxi from "@/_components/seo/TempoTravellerFleetDetailsTaxi";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../Home/Testimonials";
import HowItWorks from "../AirportTransfer/HowItWorks";
import TempoTravellerFAQTaxi from "@/_components/seo/TempoTravellerFAQTaxi";
import PerfectFor from "@/_components/seo/PerfectFor";
import PopularRoutes from "@/_components/PopularRoutes";
import { generatePopularRoutes } from "@/app/lib/api/route-data/route-generator";
import UniversalSeoBookingForm from "./UniversalSeoBookingForm";

export default function TempoTravellerPage({ page }: { page: SeoPageData }) {
 
  return <ServicePage page={page} />;
}

function ServicePage({ page }: { page: SeoPageData }) {
   const { slug, title, description, intro, highlights, popularTrips, city } =
    page;
  const popularRoutes = generatePopularRoutes(page.city, "");

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[80vh] overflow-hidden bg-white lg:min-h-screen">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-slate-100/80 blur-2xl" />
        </div>

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-screen">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="max-w-3xl">
              {/* Accent line */}
              <div className="mb-6 h-1 w-12 rounded-full bg-gold" />

              {/* Small Heading */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-gold">
                Group Travel • Spacious • Comfortable
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                {page.title || "Tempo Traveller in Ayodhya"}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                {page.description ||
                  "Book spacious and comfortable Tempo Travellers for group travel, family trips, temple tours, and outstation journeys with professional drivers and ample luggage space."}
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-gold/25 transition-all hover:shadow-xl hover:shadow-gold/30 hover:brightness-110 sm:px-8 sm:py-4"
                >
                  Book a Traveller
                </Link>

                <a
                  href="tel:+918726124680"
                  className="rounded-full border-2 border-slate-900 px-7 py-3.5 text-center text-sm font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:shadow-lg sm:px-8 sm:py-4"
                >
                  Call to Book
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - Booking Form */}
            <UniversalSeoBookingForm
              page={{
                slug: slug,
                city: city,
                service: "taxi",
                title: title,
                description: description,
                intro: intro,
                highlights: highlights,
                popularTrips: popularTrips,
              }}
            />
          </div>
        </div>
      </section>

      <TempoTravellerFleetDetailsTaxi />
      {popularRoutes.length > 0 && (
        <PopularRoutes
          routes={popularRoutes}
          from={popularRoutes[0].from}
          to="popular destinations"
          pagetype="tempo-traveller"
        />
      )}
      <HowItWorks />
      <PerfectFor />
      <WhyChooseUs />
      <TempoTravellerFAQTaxi city={city} />
    </>
  );
}
