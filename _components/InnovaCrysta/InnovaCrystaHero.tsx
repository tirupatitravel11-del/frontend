"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

type TripType = "one-way" | "round-trip";

const INNOVA_MODELS = ["Toyota Innova Crysta"];

interface InnovaCrystaHeroProps {
  from: string;
  to: string;
  startingFare?: number;
  fare:any
}

export default function InnovaCrystaHero({
  from,
  to,
  startingFare = 2799,
  fare
}: InnovaCrystaHeroProps) {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [model, setModel] = useState(INNOVA_MODELS[0]);
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState(from);
  const [drop, setDrop] = useState(to);

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book an Innova Crysta taxi.

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
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-gold/5 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-24">
        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Badge */}
          <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold sm:px-4 sm:text-xs">
            Innova Crysta Available
          </span>

          {/* Small Heading */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Innova Crysta Service
          </p>

          {/* H1 */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-tight">
            {from} to {to}{" "}
            <span className="text-gold">Innova Crysta Taxi</span>{" "}
            Service at Best Price
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
            Travel in comfort with our premium Toyota Innova Crysta. Perfect
            for families, business travel, airport transfers and outstation
            journeys with spacious seating and ample luggage space.
          </p>

          {/* ================= INNOVA SPECS ================= */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
            {/* Seats */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <p className="text-xl font-bold text-gold sm:text-2xl">6</p>

              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Seats
              </p>
            </div>

            {/* Luggage */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <p className="text-xl font-bold text-gold sm:text-2xl">5</p>

              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Large Bags
              </p>
            </div>

            {/* Fare */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <p className="text-lg font-bold text-gold sm:text-2xl">
                ₹{fare.oneWayPrice.toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Starting Fare
              </p>
            </div>
          </div>

          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            {/* Call */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg sm:w-auto"
            >
              Call for Innova Crysta
            </a>

            {/* WhatsApp */}
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

        {/* ================= RIGHT BOOKING CARD ================= */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          {/* Card Label */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Book Your Innova Crysta
          </p>

          {/* Card Heading */}
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Instant Cab Confirmation
          </h2>

          {/* ================= TRIP TYPE ================= */}
          <div className="mt-4 grid grid-cols-2 rounded-xl border border-slate-200 p-1 sm:mt-5">
            {(["one-way", "round-trip"] as TripType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTripType(type)}
                className={`rounded-lg py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  tripType === type
                    ? "bg-gold text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {type === "one-way" ? "One Way" : "Round Trip"}
              </button>
            ))}
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleBook} className="mt-4 space-y-4 sm:mt-5">
            {/* Vehicle Selection */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Select Vehicle
              </label>

              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                {INNOVA_MODELS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Pickup & Drop */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Pickup */}
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

              {/* Drop */}
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

            {/* Travel Date */}
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

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              Book Innova Crysta Now

              <span className="text-lg leading-none">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}