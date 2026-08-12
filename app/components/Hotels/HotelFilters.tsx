"use client";

import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Search,
  Users,
  Building2,
  MapPin,
} from "lucide-react";

export default function HotelFilters() {
  const [location, setLocation] = useState("Mumbai");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [rooms, setRooms] = useState("1");
  const [adults, setAdults] = useState("2");

  const [price, setPrice] = useState("");

  const handleSearch = () => {
    if (!location) {
      alert("Please enter a city or location");
      return;
    }

    if (!checkIn) {
      alert("Please select check-in date");
      return;
    }

    if (!checkOut) {
      alert("Please select check-out date");
      return;
    }

  
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg">
        {/* TOP OPTIONS */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setRooms("4")}
              className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
            >
              <Building2 size={16} />
              Opt for 4 Rooms
            </button>

            <button
              type="button"
              className="text-sm font-medium text-stone-600 hover:text-stone-900"
            >
              Group Deals
            </button>

            <span className="rounded bg-pink-500 px-2 py-0.5 text-[11px] font-bold text-white">
              NEW
            </span>
          </div>

          <div className="text-xs font-medium text-stone-500">
            Find your perfect stay
          </div>
        </div>

        {/* SEARCH BAR - 2 ROW LAYOUT FOR BETTER ALIGNMENT */}
        <div className="flex flex-col gap-4">
          {/* ROW 1: Location + Check-In + Check-Out */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* LOCATION */}
            <div className="min-w-0">
              <label className="mb-2 block text-sm font-semibold leading-5 text-stone-700">
                City
              </label>

              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Mumbai"
                  className="h-14 w-full rounded-2xl border border-stone-200 bg-stone-50 pl-11 pr-4 text-base font-bold text-stone-900 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/10"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-stone-500">
                  India
                </span>
              </div>
            </div>

            {/* CHECK IN */}
            <div className="min-w-0">
              <label className="mb-2 block text-sm font-semibold text-stone-700">
                Check-In
              </label>

              <div className="flex h-14 items-center gap-2 rounded-2xl border border-stone-200 bg-stone-50 px-3 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/10">
                <CalendarDays size={18} className="shrink-0 text-gold" />

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="min-w-0 w-full bg-transparent text-sm font-semibold text-stone-700 outline-none"
                />
              </div>
            </div>

            {/* CHECK OUT */}
            <div className="min-w-0">
              <label className="mb-2 block text-sm font-semibold text-stone-700">
                Check-Out
              </label>

              <div className="flex h-14 items-center gap-2 rounded-2xl border border-stone-200 bg-stone-50 px-3 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/10">
                <CalendarDays size={18} className="shrink-0 text-gold" />

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="min-w-0 w-full bg-transparent text-sm font-semibold text-stone-700 outline-none"
                />
              </div>
            </div>
          </div>

          {/* ROW 2: Rooms & Guests + Price + Search Button */}
          <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1.4fr_1fr_auto]">
            {/* ROOMS & GUESTS */}
            <div className="min-w-0">
              <label className="mb-2 block text-sm font-semibold text-stone-700">
                Rooms & Guests
              </label>

              <div className="flex h-14 items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-3">
                <Users size={18} className="shrink-0 text-gold" />

                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-stone-900 outline-none"
                  >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4">4 Rooms</option>
                  </select>

                  <span className="text-stone-300">•</span>

                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-stone-900 outline-none"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5">5 Adults</option>
                    <option value="6">6 Adults</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="min-w-0">
              <label className="mb-2 block text-sm font-semibold text-stone-700">
                Price Per Night
              </label>

              <div className="relative">
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="h-14 w-full appearance-none rounded-2xl border border-stone-200 bg-stone-50 px-4 pr-10 text-sm font-semibold text-stone-900 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/10"
                >
                  <option value="">Any Price</option>
                  <option value="0-1500">₹0 - ₹1500</option>
                  <option value="1500-2500">₹1500 - ₹2500</option>
                  <option value="2500-4000">₹2500 - ₹4000</option>
                  <option value="4000-6000">₹4000 - ₹6000</option>
                  <option value="6000+">₹6000+</option>
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
                />
              </div>
            </div>

            {/* SEARCH */}
            <div className="flex h-14 items-stretch">
              <button
                type="button"
                onClick={handleSearch}
                className="flex h-full items-center justify-center gap-2 rounded-2xl bg-gold px-8 font-bold text-white shadow-md transition hover:bg-[#c88912]"
              >
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
