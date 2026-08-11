"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

type TripType = "one-way" | "round-trip";

export default function Hero() {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("Noida");
  const [drop, setDrop] = useState("Delhi");

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a taxi.
Name: ${name}
Phone: ${phone}
Trip: ${tripType === "one-way" ? "One Way" : "Round Trip"}
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
      {/* ===== Decorative Gold Glow ===== */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* ===== Left: Content ===== */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Noida → Delhi Cab Service
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
            Noida to Delhi <span className="text-gold">Taxi Service</span> at
            Fixed Fares
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Book a clean, sanitized cab in minutes. Pickup from any Noida sector
            — drop anywhere in Delhi, including the airport. No hidden charges,
            no surge pricing.
          </p>

          {/* ===== Highlights ===== */}
          <ul className="mt-7 space-y-3 text-[15px] text-slate-700">
            {[
              "Fixed fares — pay what you booked",
              "Pickup from Sector 18, 62, 76, 137, Greater Noida & more",
              "24×7 available for airport & railway station drops",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* ===== CTA Buttons ===== */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* ===== Right: Booking Card ===== */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Quick Booking
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Book Your Taxi
          </h2>

          {/* ===== Trip Type Toggle ===== */}
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

          {/* ===== Form ===== */}
          <form onSubmit={handleBook} className="mt-5 space-y-4">
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
                  placeholder="e.g. Noida Sector 62"
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
                  placeholder="e.g. Connaught Place"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
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
                  placeholder="Full name"
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
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit mobile number"
                  placeholder="10-digit number"
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
              Book Now
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
