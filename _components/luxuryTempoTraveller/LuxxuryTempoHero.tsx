"use client";

import { useState } from "react";
import { Users, Star, ShieldCheck, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

type SeaterType = string;

interface LuxuryTempoHeroProps {
  from: string;
  to: string;
  fares: any[];
}
// const SEATER_OPTIONS = [
//   { id: "9-seater", label: "9 Seater", fare: "₹4,500", capacity: "Small Groups" },
//   { id: "12-seater", label: "12 Seater", fare: "₹5,000", capacity: "Most Popular" },
//   { id: "16-seater", label: "16 Seater", fare: "₹6,000", capacity: "Group Tours" },
//   { id: "20-seater", label: "20 Seater", fare: "₹7,500", capacity: "Weddings" },
//   { id: "26-seater", label: "26 Seater", fare: "₹9,000", capacity: "Corporate" },
// ];

export default function LuxuryTempoHero({ from, to ,fares}: LuxuryTempoHeroProps) {
const [selectedSeater, setSelectedSeater] =
  useState<SeaterType>(fares[0]?.slug || "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const today = new Date().toISOString().split("T")[0];
const SEATER_OPTIONS = fares.map((fare:any) => ({
  id: fare.slug,
  label: fare.vehicle,
  fare: `₹${fare.oneWay.toLocaleString("en-IN")}`,
  roundTrip: `₹${fare.roundTrip.toLocaleString("en-IN")}`,
  perKm: fare.perKm,
}));
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedOption = SEATER_OPTIONS.find(opt => opt.id === selectedSeater);

    const message = `Hello, I want to book a Luxury Tempo Traveller.

Route: ${from} → ${to}
Seater: ${selectedOption?.label}
Passengers: ${passengers}
Travel Date: ${travelDate}
Name: ${name}
Phone: ${phone}

Please share the detailed quote.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
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
            Premium Luxury Fleet
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Luxury Tempo Traveller Service
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
            Luxury Tempo Traveller on Rent from{" "}
            <span className="text-gold">{from} to {to}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Travel together in style. Maharaja pusher seats, LED TV, powerful AC
            and premium music system — perfect for weddings, pilgrimages and
            family vacations.
          </p>

          {/* Seater Quick Filters */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Choose Your Seater Capacity:
            </p>
            <div className="flex flex-wrap gap-2">
              {SEATER_OPTIONS.map((option:any) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedSeater(option.id as SeaterType)}
                  className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedSeater === option.id
                      ? "border-gold bg-gold text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-gold/40 hover:bg-gold/5"
                  }`}
                >
                  {option.label}
                  <span className="ml-1.5 text-xs opacity-80">
                    ({option.fare})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Luxury Highlights */}
          {/* <ul className="mt-8 space-y-3 text-[15px] text-slate-700">
            {[
              "Maharaja Pusher Seats with armrests & reclining",
              "LED TV + Premium Music System + Mic",
              "Experienced drivers with 10+ years on highways",
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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Get Instant Quote
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Book Your Luxury Traveller
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Fill this form and our team will reply in under 2 minutes.
          </p>

          {/* Form */}
          <form onSubmit={handleWhatsAppSubmit} className="mt-5 space-y-4">
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

            <div className="grid gap-4 sm:grid-cols-2">
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

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  required
                  min="1"
                  max="26"
                  placeholder="e.g. 12"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Travel Date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                required
                min={today}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div className="rounded-xl bg-gold/10 p-4">
              <p className="text-sm text-slate-700">
                <ShieldCheck className="inline h-4 w-4 mr-1.5 text-gold" />
                <strong className="text-gold">Selected:</strong>{" "}
                {SEATER_OPTIONS.find((opt:any) => opt.id === selectedSeater)?.label} — 
                Starting from {SEATER_OPTIONS.find((opt:any) => opt.id === selectedSeater)?.fare}
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
  );
}