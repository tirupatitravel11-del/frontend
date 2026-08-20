"use client";

import {
  Check,
  Phone,
  MessageCircle,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

interface Props {
  from?: string;
  to?: string;
  oneWayFare?: number;
  roundTripFare?: number;
}

export default function TwentyFourSeaterTempoFare({
  from = "Noida",
  to = "Delhi",
  oneWayFare = 7500,
  roundTripFare = 12000,
}: Props) {
  const features = [
    "Private 24 Seater Tempo Traveller",
    "Up to 24 passengers",
    "Air-conditioned vehicle",
    "Professional driver",
    "Spacious luggage area",
    "Suitable for family and corporate groups",
  ];

  const bookWhatsApp = (tripType: string) => {
    const message = `Hello, I want to book a 24 Seater Tempo Traveller.

From: ${from}
To: ${to}
Trip Type: ${tripType}
Passengers: Up to 24`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            24 Seater Tempo Traveller Fare
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {from} to {to} 24 Seater Tempo Traveller Fare
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Book a private 24 seater Tempo Traveller for your complete group.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2">
          {/* ONE WAY */}
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
              Starting fare
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <Check
                    size={17}
                    className="mt-0.5 shrink-0 text-gold"
                  />

                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => bookWhatsApp("One Way")}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-gold/90"
            >
              <MessageCircle size={17} />
              Book One Way
            </button>
          </div>

          {/* ROUND TRIP */}
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
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <Check
                    size={17}
                    className="mt-0.5 shrink-0 text-gold"
                  />

                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold py-3 text-sm font-bold text-gold hover:bg-gold hover:text-white"
              >
                <Phone size={16} />
                Call
              </a>

              <button
                onClick={() => bookWhatsApp("Round Trip")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-bold text-white hover:bg-gold/90"
              >
                <MessageCircle size={16} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500 sm:text-sm">
          * Final fare may vary depending on travel date, pickup/drop
          location, trip duration, tolls, parking and applicable taxes.
        </p>
      </div>
    </section>
  );
}
