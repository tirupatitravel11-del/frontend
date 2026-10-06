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
  "Taxi booking assistance by phone and WhatsApp",
  "Fare enquiries for local and outstation trips",
  "One-way and round-trip travel options",
  "Airport pickup, drop-off, and sightseeing enquiries",
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
      <section className="relative overflow-hidden bg-stone-50 border-b border-slate-200">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-2 lg:py-12">
          {/* Left: Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              24/7 Taxi Dispatch Team
            </p>
           <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
  Contact Us for{" "}
  <span className="text-gold">Taxi Booking</span> & Fare Enquiries
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
        <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[4px] text-gold">
      Get in Touch
    </p>

    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      Planning a Trip?{" "}
      <span className="text-gold">Let&apos;s Talk</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
      Have a question about cab booking, Tempo Traveller, Urbania, hotels,
      sightseeing, or tour packages? Send us your enquiry and our team will
      help you plan your journey.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      

      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20have%20a%20travel%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        WhatsApp Us
      </a>

      <a
        href="tel:+918726124680"
        className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        Call Now
      </a>
    </div>

    <p className="mt-6 text-sm text-stone-400">
      Cab Booking • Tempo Traveller • Urbania • Hotel Booking • Tour Packages
    </p>
  </div>
</section>
      </div>
    </main>
  );
}
