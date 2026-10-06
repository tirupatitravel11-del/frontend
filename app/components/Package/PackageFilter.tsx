"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  CalendarDays,
  Compass,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

const ROW =
  "flex items-center gap-4 px-5 py-4 transition-colors hover:bg-stone-50 focus-within:bg-stone-50";

const ICON_CIRCLE =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold";

const LABEL =
  "block text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400";

const INPUT =
  "mt-1 w-full bg-transparent text-base font-bold text-stone-800 outline-none placeholder:font-medium placeholder:text-stone-300";

export default function PackageFilter() {
  const [fromCity, setFromCity] = useState("New Delhi");
  const [destination, setDestination] = useState("Goa");
  const [departureDate, setDepartureDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const swap = () => {
    setFromCity(destination);
    setDestination(fromCity);
  };

  const handleSearch = () => {
    console.log({
      fromCity,
      destination,
      departureDate,
    });
  };

  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-[0_25px_70px_-25px_rgba(0,0,0,0.45)] ring-1 ring-white/30">
      {/* HEADER */}
      <div className="border-b border-stone-200 px-5 py-5 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-gold">
              Trip Planner
            </p>

            <h2 className="mt-1 text-2xl font-bold text-stone-900">
              Plan Your Holiday
            </h2>

            <p className="mt-1.5 text-sm leading-5 text-stone-500">
              Tell us where you want to go and when.
            </p>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* FROM / DESTINATION */}
      <div className="relative">
        {/* FROM */}
        <div className={ROW}>
          <span className={ICON_CIRCLE}>
            <MapPin className="h-5 w-5" />
          </span>

          <div className="min-w-0 flex-1 pr-10">
            <label htmlFor="from-city" className={LABEL}>
              Starting From
            </label>

            <input
              id="from-city"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              placeholder="Enter starting city"
              className={INPUT}
            />
          </div>
        </div>

        <div className="mx-5 h-px bg-stone-200" />

        {/* DESTINATION */}
        <div className={ROW}>
          <span className={ICON_CIRCLE}>
            <Compass className="h-5 w-5" />
          </span>

          <div className="min-w-0 flex-1 pr-10">
            <label htmlFor="destination" className={LABEL}>
              Where Do You Want to Go?
            </label>

            <input
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              className={INPUT}
            />
          </div>
        </div>

        {/* SWAP */}
        <button
          type="button"
          onClick={swap}
          aria-label="Swap starting city and destination"
          className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-stone-500 shadow-md ring-1 ring-stone-200 transition hover:text-gold hover:ring-gold/50 active:scale-95"
        >
          <ArrowRightLeft className="h-4 w-4" />
        </button>
      </div>

      <div className="mx-5 h-px bg-stone-200" />

      {/* DATE */}
      <div className={ROW}>
        <span className={ICON_CIRCLE}>
          <CalendarDays className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <label htmlFor="departure" className={LABEL}>
            Travel Date
          </label>

          <input
            id="departure"
            type="date"
            min={today}
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className={`mt-1 w-full bg-transparent text-base font-bold outline-none [color-scheme:light] [&::-webkit-calendar-picker-indicator]:cursor-pointer ${
              departureDate ? "text-stone-800" : "text-stone-400"
            }`}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-stone-200 bg-stone-50 p-4">
        <button
          type="button"
          onClick={handleSearch}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-base font-bold text-white shadow-lg shadow-gold/20 transition hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <Search className="h-5 w-5" strokeWidth={2.5} />
          Find Holiday Packages
        </button>

        <p className="mt-3 text-center text-xs text-stone-400">
          Choose your destination and travel date to explore available packages.
        </p>
      </div>
    </div>
  );
}