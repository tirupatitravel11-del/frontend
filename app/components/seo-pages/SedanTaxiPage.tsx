"use client";

import {
  Users,
  Briefcase,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";
import HowItWorks from "../AirportTransfer/HowItWorks";
import Testimonials from "@/app/components/Home/Testimonials";
import PopularRoutes from "@/_components/PopularRoutes";
import { generatePopularRoutes } from "@/app/lib/api/route-data/route-generator";
import SedanFaqTaxi from "@/_components/sedan/SedanFaqTaxi";
import SedanFitGuideTaxi from "@/_components/sedan/SedanFitGuideTaxi";
import SedanStorySection from "@/_components/sedan/SedanStorySection";
import UniversalSeoBookingForm from "./UniversalSeoBookingForm";
import VehicleFleet from "../Cab/Cabhub/VehicleFleet";
import {
  ServiceOverviewAndMap,
  ServiceFareCalculator,
  ServiceDestinationsAndStops,
  ServiceRouteDetails,
  ServicePurposesAndPickups,
  ServiceBookingInfo,
} from "./ServiceFormatSections";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

export default function SedanTaxiPage({ page }: { page: SeoPageData }) {
  const { slug, title, description, intro, highlights, popularTrips, city } =
    page;
  const popularRoutes = generatePopularRoutes(page.city, "");

  return (
    <main className="flex flex-col gap-0">
      {/* 1. HERO SECTION: Route-specific heading, pickup, destination */}
      <section className="relative min-h-screen overflow-hidden bg-stone-50 border-b border-slate-200">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-12">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <div className="mt-2 flex items-center gap-5 text-sm text-gold">
                <div>
                  <span className="font-bold text-gold">★ 4.9/5</span>
                  <span className="ml-2">Rating</span>
                </div>
                <div className="h-5 w-px bg-white/30" />
                <div>
                  <span className="font-bold text-gold">1,250+</span> Customers
                </div>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                {page.title || "Premium Sedan Taxi Rental"}{" "}
                <span className="text-gold">at Fixed Fares</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {page.description ||
                  "Experience smooth, reliable, and budget-friendly travel with our premium sedan fleet in " +
                    city +
                    ". Perfect for small families, couples, and solo travelers seeking a comfortable ride with ample boot space for airport transfers and outstation trips."}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-lg border border-slate-200 bg-white px-2 py-3 text-center shadow-sm sm:px-3 sm:py-3">
                  <Users className="mx-auto mb-1.5 h-5 w-5 text-gold" />
                  <p className="text-base font-bold text-slate-900 sm:text-lg">
                    4+1
                  </p>
                  <p className="mt-0.5 text-sm font-medium uppercase leading-3 tracking-wide text-slate-500 sm:text-sm">
                    Comfortable Seats
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white px-2 py-3 text-center shadow-sm sm:px-3 sm:py-3">
                  <Briefcase className="mx-auto mb-1.5 h-5 w-5 text-gold" />
                  <p className="text-base font-bold text-slate-900 sm:text-lg">
                    2-3
                  </p>
                  <p className="mt-0.5 text-sm font-medium uppercase leading-3 tracking-wide text-slate-500 sm:text-sm">
                    Large Bags
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white px-2 py-3 text-center shadow-sm sm:px-3 sm:py-3">
                  <Zap className="mx-auto mb-1.5 h-5 w-5 text-gold" />
                  <p className="text-base font-bold text-slate-900 sm:text-lg">
                    AC
                  </p>
                  <p className="mt-0.5 text-sm font-medium uppercase leading-3 tracking-wide text-slate-500 sm:text-sm">
                    Fuel Efficient
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  Call to Book
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-900 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="relative">
              <UniversalSeoBookingForm
                page={{
                  slug: slug,
                  city: city,
                  service: "sedan",
                  title: title,
                  description: description,
                  intro: intro,
                  highlights: highlights,
                  popularTrips: popularTrips,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Route Overview (Distance, estimated travel time) & Route Map (Actual route and important highways) */}
      <ServiceOverviewAndMap city={city} mode="taxi" />

      {/* 4. Fare Calculator: Vehicle-wise route-specific starting fares */}
      <ServiceFareCalculator city={city} mode="taxi" />

      {/* 5 & 6. Popular Destinations (Destination ke aas-paas ke locations) & Major Stops (Highway stops, food breaks) */}
      <ServiceDestinationsAndStops city={city} mode="taxi" />

      {/* 7. Route Details: Toll, expressway, road conditions */}
      <ServiceRouteDetails city={city} mode="taxi" />

      {/* 8. Cab Options: Sedan, SUV, Innova, Tempo Traveller */}
      <VehicleFleet />
      <SedanFitGuideTaxi />

      {/* 9 & 10. Travel Purposes (Airport, office, family, business) & Nearby Pickup Areas (Localities) */}
      <ServicePurposesAndPickups city={city} mode="taxi" />

      {/* 11. FAQs: Route/city-specific questions and answers */}
      <SedanFaqTaxi city={city} />

      {/* 12. Booking Information: Cancellation, waiting, luggage, booking process */}
      <ServiceBookingInfo city={city} mode="taxi" />

      {/* Supporting Sections */}
      <SedanStorySection />

      {popularRoutes.length > 0 && (
        <PopularRoutes
          routes={popularRoutes}
          from={popularRoutes[0].from}
          to="popular destinations"
          pagetype="sedan-taxi"
        />
      )}

      <HowItWorks />
      <Testimonials />

      {/* Final CTA Banner */}
      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Book a <span className="text-gold">Comfortable Sedan in {city}?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
            Book a comfortable sedan for local travel, airport transfers,
            sightseeing, one-way trips, or outstation journeys. Choose a vehicle
            that fits your travel needs and get quick booking assistance from
            Tirupati Travels.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%20sedan%20taxi%20in%20${city}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
            >
              Book Sedan on WhatsApp
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-400">
            Local Travel • One Way • Round Trip • Airport Transfer • Outstation
          </p>
        </div>
      </section>
    </main>
  );
}
