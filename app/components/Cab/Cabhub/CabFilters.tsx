"use client";

import { useEffect, useState } from "react";
import {
  ArrowRightLeft,
  CalendarDays,
  ChevronDown,
  Search,
  Users,
} from "lucide-react";
import { cabRoutes } from "@/app/constants/cabRoutes";

interface CabFiltersProps {
  from?: string;
  to?: string;
  vehicle?: string;
  tripType?: string;
  setFrom?: (value: string) => void;
  setTo?: (value: string) => void;
  setVehicle?: (value: string) => void;
  setTripType?: (value: string) => void;
}

export default function CabFilters({
  from,
  to,
  vehicle,
  tripType,
  setFrom,
  setTo,
  setVehicle,
  setTripType,
}: CabFiltersProps) {
  const [localFrom, setLocalFrom] = useState(from ?? "");
  const [localTo, setLocalTo] = useState(to ?? "");
  const [localVehicle, setLocalVehicle] = useState(vehicle ?? "");
  const [localTripType, setLocalTripType] = useState(tripType ?? "round-trip");

  useEffect(() => {
    setLocalFrom(from ?? "");
  }, [from]);

  useEffect(() => {
    setLocalTo(to ?? "");
  }, [to]);

  useEffect(() => {
    setLocalVehicle(vehicle ?? "");
  }, [vehicle]);

  useEffect(() => {
    setLocalTripType(tripType ?? "round-trip");
  }, [tripType]);

  const currentFrom = from ?? localFrom;
  const currentTo = to ?? localTo;
  const currentVehicle = vehicle ?? localVehicle;
  const currentTripType = tripType ?? localTripType;

  const handleFromChange = (value: string) => {
    setFrom?.(value);
    setLocalFrom(value);
  };

  const handleToChange = (value: string) => {
    setTo?.(value);
    setLocalTo(value);
  };

  const handleVehicleChange = (value: string) => {
    setVehicle?.(value);
    setLocalVehicle(value);
  };

  const handleTripTypeChange = (value: string) => {
    setTripType?.(value);
    setLocalTripType(value);
  };
  const origins = [...new Set(cabRoutes.map((route) => route.origin))];
  const destinations = [
    ...new Set(cabRoutes.map((route) => route.destination)),
  ];
  const vehicleTypes = ["Sedan", "SUV", "Tempo Traveller"];

  return (
    <section className="bg-stone-50 px-4 py-10 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-stone-200 bg-white p-4 shadow-xl sm:p-6">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => handleTripTypeChange("one-way")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                currentTripType === "one-way"
                  ? "bg-gold text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              One-Way
            </button>

            <button
              type="button"
              onClick={() => handleTripTypeChange("round-trip")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                currentTripType === "round-trip"
                  ? "bg-gold text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              Round-Trip
            </button>

            <span className="hidden text-sm text-stone-400 sm:block">
              Select your journey details
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_1fr_1fr_auto] lg:items-end">
            <div>
              <label className="mb-2 block text-sm font-semibold text-stone-600">
                From
              </label>

              <div className="relative">
                <select
                  value={currentFrom}
                  onChange={(e) => handleFromChange(e.target.value)}
                  className="h-16 w-full appearance-none rounded-2xl border border-stone-200 bg-stone-50 px-4 pr-10 text-lg font-semibold text-stone-900 outline-none transition focus:border-gold"
                >
                  <option value="">Select pickup city</option>

                  {origins.map((origin) => (
                    <option key={origin} value={origin}>
                      {origin}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-500"
                />
              </div>
            </div>

            <button
              type="button"
              className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-white text-gold shadow-md transition hover:bg-gold hover:text-white lg:mb-2"
            >
              <ArrowRightLeft size={18} />
            </button>

            <div>
              <label className="mb-2 block text-sm font-semibold text-stone-600">
                To
              </label>

              <div className="relative">
                <select
                  value={currentTo}
                  onChange={(e) => handleToChange(e.target.value)}
                  className="h-16 w-full appearance-none rounded-2xl border border-stone-200 bg-stone-50 px-4 pr-10 text-lg font-semibold text-stone-900 outline-none transition focus:border-gold"
                >
                  <option value="">Select destination city</option>

                  {destinations.map((destination) => (
                    <option key={destination} value={destination}>
                      {destination}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-stone-600">
                Departure
              </label>

              <div className="flex h-16 items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4">
                <CalendarDays size={20} className="text-gold" />

                <input
                  type="date"
                  className="w-full bg-transparent text-sm font-semibold text-stone-700 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-stone-600">
                Return
              </label>

              <div
                className={`flex h-16 items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 ${
                  currentTripType === "one-way"
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                <CalendarDays size={20} className="text-gold" />

                <input
                  type="date"
                  disabled={currentTripType === "one-way"}
                  className="w-full bg-transparent text-sm font-semibold text-stone-700 outline-none"
                />
              </div>
            </div>

            <button
              type="button"
              className="flex h-16 items-center justify-center gap-2 rounded-2xl bg-gold px-6 font-bold text-white shadow-md transition hover:bg-[#c88912] lg:mb-0"
            >
              <Search size={20} />
              Search
            </button>
          </div>

          {/* <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-stone-100 pt-5 text-sm text-stone-600">
            <span className="flex items-center gap-2">
              <Users size={16} />
              Vehicle Type
            </span>

            {vehicleTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setVehicle(type)}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  vehicle === type
                    ? "bg-gold text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {type}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setVehicle("")}
              className="rounded-full px-3 py-2 text-sm font-semibold text-stone-600 transition hover:bg-stone-200"
            >
              All
            </button>
          </div> */}
          <div className="mt-5 border-t border-stone-100 pt-5">
            <div className="max-w-xs">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-600">
                <Users size={16} className="text-gold" />
                Vehicle Type
              </label>

              <div className="relative">
                <select
                  value={currentVehicle}
                  onChange={(e) => handleVehicleChange(e.target.value)}
                  className="h-14 w-full appearance-none rounded-2xl border border-stone-200 bg-stone-50 px-4 pr-10 text-base font-semibold text-stone-900 outline-none transition focus:border-gold"
                >
                  <option value="">All Vehicle Types</option>

                  {vehicleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
