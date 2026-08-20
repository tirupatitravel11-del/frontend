"use client";

import { Check, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface TempoTravellerFareProps {
  from?: string;
  to?: string;
  oneWayFare?: number;
  roundTripFare?: number;
}

export default function TempoTravellerFare({
  from = "Noida",
  to = "Delhi",
  oneWayFare = 4500,
  roundTripFare = 7500,
}: TempoTravellerFareProps) {
  const bookWhatsApp = (tripType: string) => {
    const message = `Hello, I want to book a 12 Seater Tempo Traveller.

From: ${from}
To: ${to}
Trip Type: ${tripType}
Passengers: Up to 12`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Tempo Traveller Fare
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            {from} to {to} 12 Seater Tempo Traveller Fare
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Choose one-way or round-trip travel according to your group&apos;s
            requirements.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 sm:mt-12">
          {/* One Way */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              One Way
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {from} → {to}
            </h3>

            <p className="mt-5 text-3xl font-bold text-slate-900">
              ₹{oneWayFare.toLocaleString("en-IN")}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Starting fare for 12 seater
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Private Tempo Traveller",
                "Up to 12 passengers",
                "Air-conditioned vehicle",
                "Professional driver",
                "Door-to-door pickup",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <Check size={17} className="text-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => bookWhatsApp("One Way")}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-gold/90"
            >
              <MessageCircle size={17} />
              Book One Way
            </button>
          </div>

          {/* Round Trip */}
          <div className="relative rounded-2xl border-2 border-gold bg-white p-6 shadow-xl sm:p-8">
            <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Popular
            </span>

            <p className="text-xs font-bold uppercase tracking-widest text-gold">
              Round Trip
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {from} ↔ {to}
            </h3>

            <p className="mt-5 text-3xl font-bold text-gold">
              ₹{roundTripFare.toLocaleString("en-IN")}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Starting round-trip fare
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Private Tempo Traveller",
                "Up to 12 passengers",
                "Air-conditioned vehicle",
                "Professional driver",
                "Ideal for family & group trips",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <Check size={17} className="text-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-gold py-3 text-sm font-bold text-gold hover:bg-gold hover:text-white"
              >
                <Phone size={16} />
                Call
              </a>

              <button
                onClick={() => bookWhatsApp("Round Trip")}
                className="flex items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-bold text-white hover:bg-gold/90"
              >
                <MessageCircle size={16} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500 sm:text-sm">
          * Final fare may vary based on travel date, pickup/drop location,
          trip duration, tolls, parking and applicable taxes.
        </p>
      </div>
    </section>
  );
}