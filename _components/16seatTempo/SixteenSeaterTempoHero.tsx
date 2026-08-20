"use client";

import { useState } from "react";
import {
  Users,
  Luggage,
  Phone,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface Props {
  from: string;
  to: string;
  startingFare?: number;
}

export default function SixteenSeaterTempoHero({
  from,
  to,
  startingFare = 5500,
}: Props) {
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState(from);
  const [drop, setDrop] = useState(to);

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a 16 Seater Tempo Traveller.

Pickup: ${pickup}
Drop: ${drop}
Travel Date: ${date}
Passengers: Up to 16
Vehicle: 16 Seater Tempo Traveller`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT */}
        <div>
          <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold sm:px-4 sm:text-xs">
            16 Seater Tempo Traveller
          </span>

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Group Travel
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-tight">
            {from} to {to}{" "}
            <span className="text-gold">
              16 Seater Tempo Traveller
            </span>{" "}
            Rental
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Book a comfortable 16 seater Tempo Traveller for family trips,
            corporate outings, weddings, events and group travel. Travel
            together in one spacious AC vehicle instead of booking multiple
            cars.
          </p>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <Users className="mx-auto text-gold" size={22} />

              <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                16
              </p>

              <p className="text-[11px] text-slate-500 sm:text-xs">
                Passengers
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <Luggage className="mx-auto text-gold" size={22} />

              <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                10+
              </p>

              <p className="text-[11px] text-slate-500 sm:text-xs">
                Bags
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
              <p className="text-lg font-bold text-gold sm:text-2xl">
                ₹{startingFare.toLocaleString("en-IN")}
              </p>

              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Starting Fare
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md hover:bg-gold/90 sm:w-auto"
            >
              <Phone size={16} />
              Call for Booking
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold hover:bg-gold hover:text-white sm:w-auto"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* BOOKING CARD */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Book Your 16 Seater
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
            Instant Booking Confirmation
          </h2>

          <form onSubmit={handleBook} className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Pickup Location
              </label>

              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
                placeholder={`e.g. ${from} Sector 62`}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Drop Location
              </label>

              <input
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                required
                placeholder={`e.g. ${to} Airport`}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CalendarDays size={16} />
                Travel Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={today}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-gold/90"
            >
              Book 16 Seater Now →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}