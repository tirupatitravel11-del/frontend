"use client";

import { useState } from "react";

const PHONE_NUMBER = "+9163900";
const WHATSAPP_NUMBER = "91639003";

type TripType = "one-way" | "round-trip";

const URBANIA_MODELS = [
  "Force Urbania 9 Seater",
  "Force Urbania 12 Seater",
  "Force Urbania 13 Seater",
  "Force Urbania 14 Seater",
];

interface UrbaniaHeroProps {
  from: string;
  to: string;
  startingFare?: number;
}

export default function UrbaniaHero({
  from,
  to,
  startingFare = 3499,
}: UrbaniaHeroProps) {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [model, setModel] = useState(URBANIA_MODELS[0]);
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState(from);
  const [drop, setDrop] = useState(to);

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a Force Urbania.

Trip: ${tripType === "one-way" ? "One Way" : "Round Trip"}
Van Model: ${model}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image - Luxury Van Interior/Exterior */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="/urbania/urbania.png" // Luxury van interior
          alt="Force Urbania Luxury Van Interior"
          className="h-full w-full object-cover"
        /> */}
        {/* Light overlay to maintain text readability */}
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Decorative Gold Glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl z-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:gap-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-24">
        {/* ===== Left: Content ===== */}
        <div>
          <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            Force Urbania Available
          </span>

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Luxury Van Service
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-tight">
            {from} to {to} <span className="text-gold">Force Urbania</span>{" "}
            Rental at Fixed Fares
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Experience luxury travel with reclining pushback seats, individual
            AC vents, and premium interiors. Ideal for weddings, corporate
            events, and large group journeys.
          </p>

          {/* Urbania Specs */}
          <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <p className="text-xl font-bold text-gold sm:text-2xl">9–14</p>
              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Pushback Seats
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <p className="text-xl font-bold text-gold sm:text-2xl">6–8</p>
              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Large Bags
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <p className="text-xl font-bold text-gold sm:text-2xl">
                ₹{startingFare.toLocaleString("en-IN")}
              </p>
              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Starting Fare
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg sm:w-auto"
            >
              Call for Urbania
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ===== Right: Booking Card ===== */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Book Your Urbania
          </p>

          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Instant Van Confirmation
          </h2>

          {/* Trip Type Toggle */}
          <div className="mt-5 grid grid-cols-2 rounded-xl border border-slate-200 p-1">
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

          {/* Form */}
          <form onSubmit={handleBook} className="mt-5 space-y-4">
            {/* Model Selection */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Select Urbania Model
              </label>

              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                {URBANIA_MODELS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Pickup Location
                </label>

                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                  placeholder={`e.g. ${from} Sector 62`}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Drop Location
                </label>

                <input
                  type="text"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  required
                  placeholder={`e.g. ${to} Airport`}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={today}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              Book Urbania Now
              <span className="text-lg leading-none">→</span>
            </button>

            <p className="text-center text-xs text-slate-500">
              No advance payment • Instant confirmation on WhatsApp
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
