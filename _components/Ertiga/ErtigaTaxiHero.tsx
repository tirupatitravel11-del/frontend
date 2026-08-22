"use client";

import React, { useState } from "react";
import { Car, MapPin, Users, Briefcase, Wind, ShieldCheck } from "lucide-react";

export default function ErtigaTaxiHero({ from,
  to,
  fare}: any) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger your booking logic, modal, or navigation here
    alert(`Booking requested from ${pickup} to ${destination}`);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative Gold Glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl z-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:gap-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-24">
        {/* ===== Left: Text & Features ===== */}
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            <Car className="w-3.5 h-3.5" />
            Premium Ertiga Service
          </span>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Ertiga Cab Service
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-tight">
            Spacious <span className="text-gold">Ertiga</span> Taxi for Your
            Family
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Experience the comfort of a{" "}
            <b className="text-slate-900">7-Seater MPV</b> with ample luggage
            space and Dual AC. Perfect for outstation trips, local rides, and
            family travels.
          </p>

          {/* Key Features Badges */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <Users className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-[11px] sm:text-xs text-slate-500">
                7-Seater
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <Briefcase className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-[11px] sm:text-xs text-slate-500">
                Big Luggage
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <Wind className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-[11px] sm:text-xs text-slate-500">
                Dual AC
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
              <ShieldCheck className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-[11px] sm:text-xs text-slate-500">
                Safe Ride
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            * Outstation fares starting from <b className="text-gold">₹{fare.oneWayPrice}</b>
            .
          </p>
        </div>

        {/* ===== Right: Quick Booking Form ===== */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Quick Booking
          </p>

          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl flex items-center">
            Book Your Ertiga Now
          </h2>

          <form onSubmit={handleBooking} className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Pickup Location
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Airport, Railway Station"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Destination
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. City Center, Hotel Name"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              Book Your Ertiga
              <span className="text-lg leading-none">→</span>
            </button>

            <p className="text-center text-xs text-slate-500">
              No hidden charges • 24x7 Support • Verified Drivers
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
