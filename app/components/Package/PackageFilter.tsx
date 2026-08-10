"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  CalendarDays,
  Compass,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";

const ROW =
  "flex items-center gap-4 px-6 py-4 transition-colors hover:bg-stone-50 focus-within:bg-stone-50";

const ICON_CIRCLE =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold";

const LABEL =
  "block text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400";

const INPUT =
  "mt-0.5 w-full bg-transparent text-lg font-bold text-stone-800 outline-none placeholder:font-medium placeholder:text-stone-300";

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
    console.log({ fromCity, destination, departureDate });
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-24px_rgba(28,25,23,0.25)] ring-1 ring-stone-200/80">
      {/* ---------- HEADER ---------- */}
      <div className="flex items-center justify-between gap-3 border-b border-stone-200/80 px-6 py-4">
        <p className="text-sm font-bold uppercase tracking-wider text-stone-900">
          Plan Your Trip
        </p>
        <p className="flex items-center gap-1.5 text-xs font-semibold text-gold">
          <ShieldCheck size={14} />
          No hidden fees
        </p>
      </div>

      {/* ---------- FROM / TO (with swap) ---------- */}
      <div className="relative">
        {/* FROM */}
        <div className={ROW}>
          <span className={ICON_CIRCLE}>
            <MapPin size={18} />
          </span>
          <div className="min-w-0 flex-1 pr-10">
            <label htmlFor="from-city" className={LABEL}>
              From City
            </label>
            <input
              id="from-city"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              placeholder="Enter city"
              className={INPUT}
            />
          </div>
        </div>

        <div className="mx-6 h-px bg-stone-200/80" />

        {/* TO */}
        <div className={ROW}>
          <span className={ICON_CIRCLE}>
            <Compass size={18} />
          </span>
          <div className="min-w-0 flex-1 pr-10">
            <label htmlFor="destination" className={LABEL}>
              Destination
            </label>
            <input
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where to?"
              className={INPUT}
            />
          </div>
        </div>

        {/* SWAP BUTTON */}
        <button
          type="button"
          onClick={swap}
          aria-label="Swap from and destination"
          className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-stone-500 shadow-sm ring-1 ring-stone-200 transition hover:text-gold hover:ring-gold/50 active:scale-95"
        >
          <ArrowRightLeft size={15} />
        </button>
      </div>

      <div className="mx-6 h-px bg-stone-200/80" />

      {/* ---------- DEPARTURE DATE ---------- */}
      <div className={ROW}>
        <span className={ICON_CIRCLE}>
          <CalendarDays size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <label htmlFor="departure" className={LABEL}>
            Tour Date
          </label>
          <input
            id="departure"
            type="date"
            min={today}
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className={`mt-0.5 w-full bg-transparent text-base font-semibold outline-none [color-scheme:light] [&::-webkit-calendar-picker-indicator]:cursor-pointer ${
              departureDate ? "text-stone-800" : "text-stone-400"
            }`}
          />
        </div>
      </div>

      {/* ---------- CTA ---------- */}
      <div className="border-t border-stone-200/80 p-4">
        <button
          type="button"
          onClick={handleSearch}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-base font-bold text-white shadow-lg shadow-gold/30 transition-all hover:bg-[#c88912] hover:shadow-gold/40 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <Search size={19} strokeWidth={2.75} />
          Search Packages
        </button>
      </div>
    </div>
  );
}
