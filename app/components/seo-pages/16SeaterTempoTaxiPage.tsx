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
  Wind,
  Music,
} from "lucide-react";
import SixteenSeaterDetails from "@/_components/16seatTempo/SixteenSeaterDetails";
import SixteenSeaterGroupBenefits from "@/_components/16seatTempo/SixteenSeaterGroupBenefits";
import SixteenSeaterSeating from "@/_components/16seatTempo/SixteenSeaterSeating";
import SixteenSeaterTempoDetails from "@/_components/16seatTempo/SixteenSeaterTempoDetails";
import SixteenSeaterTempoFaq from "@/_components/16seatTempo/SixteenSeaterTempoFaq";
import SixteenSeaterTempoFare from "@/_components/16seatTempo/SixteenSeaterTempoFare";
import TempoTaxiFaq from "@/_components/12seatTempo/TempoTaxiFaq";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

const FEATURES = [
  { icon: Users, label: "16+1 Seating", sub: "Spacious pusher seats" },
  { icon: Luggage, label: "Large Luggage", sub: "Ample boot space" },
  { icon: Tv, label: "LED TV", sub: "Onboard entertainment" },
  { icon: Music, label: "Music System", sub: "Premium audio + mic" },
  { icon: Wind, label: "Powerful AC", sub: "Cool & comfortable" },
  { icon: ShieldCheck, label: "Verified Driver", sub: "Experienced & safe" },
];

export default function SixteenSeaterTempoTravellerTaxiPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a 16 Seater Luxury Tempo Traveller.

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
            {/* Luxury Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
              <Star className="h-3 w-3 fill-current" />
              Premium 16 Seater Fleet
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Luxury 16 Seater Tempo Traveller
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
              16 Seater Luxury Tempo Traveller on Rent for{" "}
              <span className="text-gold">Comfortable Group Travel</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              The perfect balance of space and luxury. Our 16 Seater Tempo
              Traveller features Maharaja pusher seats, LED TV, powerful AC, and
              a premium music system — ideal for mid-sized families, corporate
              outings, weddings, and pilgrimages.
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
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Get Instant Quote
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Book 16 Seater Traveller
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Fill this form and our team will reply in under 2 minutes.
            </p>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="mt-5 space-y-4">
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
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
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
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Passengers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="number"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      required
                      min="1"
                      max="16"
                      placeholder="e.g. 12"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      required
                      min={today}
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="10-digit mobile"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>
              </div>

              <div className="rounded-xl bg-gold/10 p-4">
                <p className="text-sm text-slate-700">
                  <ShieldCheck className="inline h-4 w-4 mr-1.5 text-gold" />
                  <strong className="text-gold">Selected:</strong> 16 Seater
                  Luxury Tempo Traveller —{" "}
                  <span className="text-slate-600">
                    {" "}
                    Custom quote on WhatsApp
                  </span>
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Get Quote on WhatsApp
                <span className="text-lg leading-none">→</span>
              </button>

              <p className="text-center text-xs text-slate-500">
                No advance payment • Instant reply • Transparent pricing
              </p>
            </form>
          </div>
        </div>
      </section>

  
      <div className="bg-slate-50">
        <SixteenSeaterDetails />
        <SixteenSeaterSeating />
        <SixteenSeaterTempoDetails />
        <SixteenSeaterGroupBenefits />
        <TempoTaxiFaq/>
  
      </div>
    </main>
  );
}
