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
      <section className="relative min-h-[80vh] overflow-hidden bg-stone-50 border-b border-slate-200 lg:min-h-screen">
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
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-12 sm:px-6 lg:min-h-screen">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="max-w-3xl">
              {/* Accent line */}
              <div className="mb-6 h-1 w-12 rounded-full bg-gold" />

              {/* Small Heading */}
              <div className="mt-2 flex items-center gap-5 text-sm text-gold">
                <div>
                  <span className="font-bold text-gold">★ 4.9/5</span>
                  <span className="ml-2">Rating</span>
                </div>

                <div className="h-5 w-px bg-white/30" />

                <div>
                  <span className="font-bold text-gold">1,250+</span>{" "}
                  Customers
                </div>
              </div>

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

      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
  {/* Background Decorations */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl text-center">
    

    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      Travel Together in{" "}
      <span className="text-gold">Comfort &amp; Style</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
      Book a spacious Tempo Traveller for family trips, group tours,
      pilgrimages, weddings, sightseeing, and outstation journeys. Choose a
      vehicle that fits your group and enjoy a comfortable journey together.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%20Tempo%20Traveller."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
      >
        Book Tempo Traveller on WhatsApp
      </a>

      <a
        href="tel:+918726124680"
        className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        Call Now
      </a>
    </div>

    <p className="mt-6 text-sm text-stone-400">
      Family Trips • Group Tours • Pilgrimage • Weddings • Sightseeing •
      Outstation
    </p>
  </div>
</section>
    </>
  );
}
