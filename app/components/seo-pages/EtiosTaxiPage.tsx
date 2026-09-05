"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  Car,
  Users,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";

// Etios specific components
// import EtiosTaxiFitGuide from "@/_components/etios/EtiosTaxiFitGuide";
// import EtiosTaxiFaq from "@/_components/etios/EtiosTaxiFaq";
import HowToBook from "@/_components/Howtobook";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";
import EtiosStorySection from "@/_components/Etios/EtiosStorySection";
import EtiosAirport from "@/_components/Etios/EtiosAirport";
import HowItWorks from "../AirportTransfer/HowItWorks";
import EtiosTaxiFaq from "@/_components/Etios/EtiosTaxiFaq";
import EtiosTaxiComparison from "@/_components/Etios/EtiosTaxiComparison";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

const ETIOS_MODELS = [
  "Toyota Etios Sedan (4+1 Seater)",
  "Toyota Etios Liva (Hatchback)",
];

type TripType = "one-way" | "round-trip";

export default function EtiosTaxiPage({ page }: { page: SeoPageData }) {
  const route = { fromCity: page.city, toCity: "local destinations" };

  return (
    <main className="flex flex-col gap-0">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen overflow-hidden bg-white">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* LEFT SIDE: Content */}
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                Reliable & Spacious Sedan
              </span>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                {page.title || "Toyota Etios Taxi Rental"}{" "}
                <span className="text-gold">at Fixed Fares</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {page.description ||
                  "Experience legendary reliability and comfort with the Toyota Etios. Renowned for its exceptionally spacious boot, smooth ride quality, and budget-friendly fares, making it perfect for small families, airport transfers, and outstation trips."}
              </p>

              {/* Etios Specs Grid */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
                  <Users className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-lg font-bold text-slate-900 sm:text-xl">
                    4+1
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
                    Comfortable Seats
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
                  <Briefcase className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-lg font-bold text-slate-900 sm:text-xl">
                    3+
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
                    Large Bags (Huge Boot)
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
                  <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-lg font-bold text-slate-900 sm:text-xl">
                    Toyota
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
                    Legendary Reliability
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
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

            {/* RIGHT SIDE: Booking Form */}
            <div className="relative">
              <EtiosBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BELOW HERO SECTIONS ===== */}
      <div className="relative z-10 border-t border-slate-100 bg-white">
        {/* <EtiosTaxiFitGuide /> */}

        <EtiosStorySection />
        <EtiosTaxiComparison />
        {/* <PopularRoutes
               routes={data.popularRoutes}
               from={route.fromCity}
               to={route.toCity}
               pagetype={page.pageType}
             /> */}
        <EtiosAirport />
        <HowItWorks />
        <Testimonials />

        <EtiosTaxiFaq />
      </div>
    </main>
  );
}

// ===== CLIENT COMPONENT: BOOKING FORM =====
function EtiosBookingForm() {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [model, setModel] = useState(ETIOS_MODELS[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a Toyota Etios.

Trip Type: ${tripType === "one-way" ? "One Way" : "Round Trip"}
Vehicle Model: ${model}
Pickup Location: ${pickup || "Not specified"}
Drop Location: ${drop || "Not specified"}
Travel Date: ${date || "Not specified"}
Pickup Time: ${time || "Not specified"}

Please share the fare and availability.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-2xl shadow-slate-200/50 sm:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Book Your Etios</h3>
        <p className="mt-1 text-sm text-slate-500">
          Get instant confirmation on WhatsApp
        </p>
      </div>

      <form onSubmit={handleBook} className="space-y-4">
        {/* Trip Type Toggle */}
        <div className="grid grid-cols-2 rounded-xl border border-slate-200 bg-slate-50 p-1">
          {(["one-way", "round-trip"] as TripType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setTripType(type)}
              className={`rounded-lg py-2.5 text-sm font-semibold transition-all duration-300 ${
                tripType === type
                  ? "bg-gold text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {type === "one-way" ? "One Way" : "Round Trip"}
            </button>
          ))}
        </div>

        {/* Model Selection */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Select Vehicle Model
          </label>
          <div className="relative">
            <Car className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
            >
              {ETIOS_MODELS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Locations */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
                placeholder="Enter pickup address"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Drop Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                required
                placeholder="Enter destination"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Travel Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={today}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Pickup Time
            </label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-gold py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-gold/25 transition-all hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30"
        >
          Book Etios Now →
        </button>

        <p className="text-center text-xs text-slate-500">
          No advance payment • Instant confirmation on WhatsApp
        </p>
      </form>
    </div>
  );
}
