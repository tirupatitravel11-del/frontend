"use client";

import { useState } from "react";
import { Phone, MessageCircle, Clock, MapPin, Calendar } from "lucide-react";
import WhyChooseUs from "@/_components/WhyChooseUs";
import HowItWorks from "../AirportTransfer/HowItWorks";
import BookingInformation from "@/_components/ContactNumber/BookingInformation";
import TaxiFaq from "@/_components/TaxiFaq";
import TaxiServiceFAQ from "@/_components/seo/TaxiServiceFaq";
import PopularRoutes from "@/_components/PopularRoutes";
import { generatePopularRoutes } from "@/app/lib/api/route-data/route-generator";
import type { SeoPageData } from "@/app/data/seoPages";
import UniversalSeoBookingForm from "./UniversalSeoBookingForm";

// 1. IMPORT YOUR GENERIC COMPONENTS HERE
// import AmazeTaxiFitGuide from "@/_components/amaze/AmazeTaxiFitGuide";
// import AmazeTaxiFaq from "@/_components/amaze/AmazeTaxiFaq";
// import WhyChooseUs from "@/_components/WhyChooseUs";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

type TripType = "one-way" | "round-trip";

const HIGHLIGHTS = [
  "Zero wait time — our team picks up instantly",
  "Custom quotes for outstation & multi-stop trips",
  "24×7 human support for flight & station pickups",
  "Verified and experienced drivers for every route",
];

export default function TaxiContactNumberPage({ page }: { page: SeoPageData }) {
  const { slug, title, description, intro, highlights, popularTrips, city } =
    page;
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const popularRoutes = generatePopularRoutes(page.city, "");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I want to book a taxi.\n\nTrip: ${tripType === "one-way" ? "One Way" : "Round Trip"}\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main>
      {/* ===== 1. HERO & BOOKING SECTION ===== */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left: Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              24/7 Taxi Dispatch Team
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
              Talk to Our <span className="text-gold">Taxi Booking</span>{" "}
              Support Team
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Speak directly to our human dispatchers for instant bookings,
              custom multi-stop quotes, and 24/7 emergency support.
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-slate-700">
              {HIGHLIGHTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Booking Card */}
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
      </section>

      {/* ===== 2. ADD YOUR OTHER COMPONENTS HERE ===== */}
      <div className="bg-slate-50">
        <BookingInformation />
        <WhyChooseUs />
        {popularRoutes.length > 0 && (
          <PopularRoutes
            routes={popularRoutes}
            from={popularRoutes[0].from}
            to="popular destinations"
            pagetype="taxi-contact-number"
          />
        )}
        <HowItWorks />
        <TaxiServiceFAQ />
      </div>
    </main>
  );
}
