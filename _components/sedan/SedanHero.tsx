"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

type TripType = "one-way" | "round-trip";

const SEDAN_MODELS = ["Swift Dzire", "Honda Amaze", "Toyota Etios"];

interface SedanHeroProps {
  from: string;
  to: string;
  startingFare?: number;
}

export default function SedanHero({
  from,
  to,
  startingFare = 1599,
}: SedanHeroProps) {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [model, setModel] = useState(SEDAN_MODELS[0]);
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState(from);
  const [drop, setDrop] = useState(to);

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a SEDAN taxi.

Trip: ${tripType === "one-way" ? "One Way" : "Round Trip"}
Car Model: ${model}
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
      {/* Decorative Gold Glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left: Content */}
        <div>
          <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold mb-4">
            Sedan Cabs Available
          </span>

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            {from} → {to} Cab Service
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
            {from} to {to} <span className="text-gold">Sedan Taxi</span> Service
            at Fixed Fares
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Travel in comfort with our premium Sedans. Perfect for families and
            business travel with extra legroom and space for 3 suitcases.
          </p>

          {/* Sedan Specs */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-gold">4</p>
              <p className="text-xs text-slate-500 mt-1">Seats</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-gold">3</p>
              <p className="text-xs text-slate-500 mt-1">Large Bags</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-gold">
                ₹{startingFare.toLocaleString("en-IN")}
              </p>
              <p className="text-xs text-slate-500 mt-1">Starting Fare</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              Call for Sedan
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right: Booking Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Book Your Sedan
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Instant Cab Confirmation
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
                Select Sedan Model
              </label>

              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                {SEDAN_MODELS.map((m) => (
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
              Book Sedan Now
              <span className="text-lg leading-none">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
