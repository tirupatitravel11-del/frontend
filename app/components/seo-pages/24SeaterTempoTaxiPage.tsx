"use client";

import { useState } from "react";
import {
  Users,
  Star,
  ShieldCheck,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Luggage,
  Tv,
  Music,
  Wind,
} from "lucide-react";
import TwentyFourDetails from "@/_components/24seatTempo/TwentyFourDetails";
import TwentyFourSeaterGroupBenefits from "@/_components/24seatTempo/TwentyFourSeaterGroupBenefits";
import TwentyFourSeaterSeating from "@/_components/24seatTempo/TwentyFourSeaterSeating";
import TwentyFourSeaterTempoDetails from "@/_components/24seatTempo/TwentyFourSeaterTempoDetails";
import TwentyFourSeaterTempoFaq from "@/_components/24seatTempo/TwentyFourSeaterTempoFaq";
import TwentyFourSeaterTempoFare from "@/_components/24seatTempo/TwentyFourSeaterTempoFare";
import TempoTaxiFaq from "@/_components/12seatTempo/TempoTaxiFaq";
import PopularRoutes from "@/_components/PopularRoutes";
import { generatePopularRoutes } from "@/app/lib/api/route-data/route-generator";
import type { SeoPageData } from "@/app/data/seoPages";
import UniversalSeoBookingForm from "./UniversalSeoBookingForm";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

const FEATURES = [
  { icon: Users, label: "24+1 Seating", sub: "Maximum capacity" },
  { icon: Luggage, label: "Huge Luggage", sub: "Extra-large boot space" },
  { icon: Tv, label: "LED TV", sub: "Onboard entertainment" },
  { icon: Music, label: "Music System", sub: "Premium audio + mic" },
  { icon: Wind, label: "Powerful AC", sub: "Dual-zone cooling" },
  { icon: ShieldCheck, label: "Verified Driver", sub: "Experienced & safe" },
];

export default function TwentyFourSeaterTempoTravellerPage({
  page,
}: {
  page: SeoPageData;
}) {
  const { slug, title, description, intro, highlights, popularTrips, city } =
    page;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const popularRoutes = generatePopularRoutes(page.city, "");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a 24 Seater Tempo Traveller.

Pickup: ${pickup || "Not specified"}
Drop: ${drop || "Not specified"}
Passengers: ${passengers || "Not specified"}
Travel Date: ${travelDate || "Not specified"}
Name: ${name}
Phone: ${phone}

Please share the detailed quote and availability.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative Gold Glow */}
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
          {/* ================= LEFT: Content ================= */}
          <div>
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
              <Star className="h-3 w-3 fill-current" />
              Maximum Capacity Fleet
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              24 Seater Tempo Traveller
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
              24 Seater Tempo Traveller on Rent for{" "}
              <span className="text-gold">Very Large Group Travel</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Our largest and most spacious option for big wedding convoys,
              large corporate events, school and college trips, and grand
              pilgrimages.
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-gold" />
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      {feature.label}
                    </p>
                    <p className="text-xs text-slate-500">{feature.sub}</p>
                  </div>
                );
              })}
            </div>

            {/* Highlights */}
            {/* <ul className="mt-8 space-y-3 text-[15px] text-slate-700">
              {[
                "Biggest vehicle in our fleet — fits up to 24 passengers comfortably",
                "Ideal for large weddings, corporate retreats, and grand pilgrimages",
                "Extra-large luggage compartment for heavy group baggage",
                "Premium amenities including LED TV, music system, and microphone",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul> */}

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call for Quote
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ================= RIGHT: Booking Card ================= */}
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

      {/* ========================================================= */}
      {/* ===== ADD THE REST OF YOUR COMPONENTS BELOW THIS LINE ===== */}
      {/* ========================================================= */}
      <div className="bg-slate-50">
        <TwentyFourDetails />
        <TwentyFourSeaterSeating />
        <TwentyFourSeaterTempoDetails />
        <TwentyFourSeaterGroupBenefits />
        {/* <TwentyFourSeaterTempoFare /> */}
        {popularRoutes.length > 0 && (
          <PopularRoutes
            routes={popularRoutes}
            from={popularRoutes[0].from}
            to="popular destinations"
            pagetype="tempo-traveller"
          />
        )}
        <TempoTaxiFaq city={city} />
      </div>
    </main>
  );
}
