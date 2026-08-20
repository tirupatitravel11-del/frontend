"use client";

import { useState } from "react";
import {
  Users,
  Star,
  ShieldCheck,
  Phone,
  MessageCircle,
  Armchair,
  Tv,
  Music,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface TwentySeaterHeroProps {
  from: string;
  to: string;
}

export default function TwentySeaterHero({ from, to }: TwentySeaterHeroProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I want to book a 20 Seater Luxury Tempo Traveller.

Route: ${from} → ${to}
Vehicle: 20 Seater Tempo Traveller
Passengers: ${passengers}
Travel Date: ${travelDate}
Name: ${name}
Phone: ${phone}

Please share the detailed quote.`;

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
        {/* ================= LEFT: Content ================= */}
        <div>
          {/* Wedding Favourite Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            <Star className="h-3 w-3 fill-current" />
            Wedding Favourite • Most Booked
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Group Travel
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
            20 Seater Luxury Tempo Traveller{" "}
            <span className="text-gold">
              {from} to {to}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            The perfect size for wedding baraat, large family vacations, and
            corporate events. Maharaja pusher seats, LED TV, powerful AC and
            premium music system — all in one luxurious ride.
          </p>

          {/* Quick Specs */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Users className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">20+1</span>
              <span className="text-[10px] text-slate-500">Seats</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Armchair className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">2*2</span>
              <span className="text-[10px] text-slate-500">Seating</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Tv className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">
                LED TV
              </span>
              <span className="text-[10px] text-slate-500">Included</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Music className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">
                Music
              </span>
              <span className="text-[10px] text-slate-500">Premium</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="mt-6 rounded-xl border border-gold/30 bg-gold/5 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Starting Fare
                </p>
                <p className="text-2xl font-black text-gold">₹9,500</p>
                <p className="text-xs text-slate-500">
                  Local day tour • ₹35/km outstation
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Luggage
                </p>
                <p className="text-lg font-bold text-slate-900">10 Bags</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Book
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Book 20 Seater Tempo Traveller
          </h2>

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
                  Passengers
                </label>
                <input
                  type="number"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  required
                  min="1"
                  max="20"
                  placeholder="e.g. 18"
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
                <strong className="text-gold">Selected:</strong> 20 Seater Tempo
                Traveller — Starting from ₹9,500
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              <p className="h-4 w-4" />
              Book now
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
