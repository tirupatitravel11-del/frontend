"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface OneWayHeroProps {
  from: string;
  to: string;
  startingFare?: number;
}

export default function OneWayHero({
  from,
  to,
  startingFare = 1299,
}: OneWayHeroProps) {
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState(from);
  const [drop, setDrop] = useState(to);

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a ONE WAY taxi.

Pickup: ${pickup}
Drop: ${drop}
Date: ${date}`;

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
        {/* ===== Left: Content ===== */}
        <div>
          {/* Savings Badge */}
          <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            💸 Save up to 50% vs Round Trip
          </span>

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            {from} → {to} One Way Cab
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
            {from} to {to}{" "}
            <span className="text-gold">One Way Taxi</span> — Pay Only for the
            Drop
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Why pay for a return journey you don&apos;t need? Book a one-way
            cab from {from} and we drop you anywhere in {to} — with zero
            charges for the driver&apos;s empty return.
          </p>

          {/* Highlights */}
          <ul className="mt-7 space-y-3 text-[15px] text-slate-700">
            {[
              "No return charges — pay only for your journey",
              "Fixed fare quoted upfront — no surge, no meter",
              `Doorstep pickup in ${from}, drop anywhere in ${to}`,
              "24×7 available for early morning & late night drops",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* Stats Row */}
          <div className="mt-9 flex flex-wrap gap-8 border-t border-slate-200 pt-6">
            <div>
              <p className="text-2xl font-bold text-slate-900">50%</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Avg. Savings
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">₹0</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Return Charge
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                ₹{startingFare.toLocaleString("en-IN")}
              </p>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Starting Fare
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
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
            One Way Booking
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Book Your Drop
          </h2>

          {/* One-Way Info Strip */}
          <div className="mt-4 rounded-xl bg-gold/10 px-4 py-3 text-sm font-semibold text-gold">
            One Way • No Return Charges • Fixed Fare
          </div>

          {/* Form */}
          <form onSubmit={handleBook} className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Pickup Location
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
                placeholder={`e.g. ${from}`}
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
              Book One Way Drop
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