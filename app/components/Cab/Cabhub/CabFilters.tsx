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
import axios from "axios";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  const handleSearch = async () => {

    if (!currentFrom || !currentTo) {
      alert("Please select From and To city");
      return;
    }

    try {
      const res = await axios.post(process.env.apiUrl + "/api/search-route", {
        from: currentFrom,
        to: currentTo,
      });

      router.push(res.data.url);

    } catch (error) {
      console.error("Route search failed:", error);
    }
  };
  const origins = [...new Set(cabRoutes.map((route) => route.origin))];
  const destinations = [
    ...new Set(cabRoutes.map((route) => route.destination)),
  ];
  const vehicleTypes = ["Sedan", "SUV", "Tempo Traveller"];

  return (
    <section className="w-full rounded-3xl border border-stone-200 bg-white p-4 shadow-lg sm:p-5">
      {/* Trip Type Toggle */}
      <div className="mb-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleTripTypeChange("one-way")}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${currentTripType === "one-way"
            ? "bg-gold text-white"
            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
        >
          One-Way
        </button>

        <button
          type="button"
          onClick={() => handleTripTypeChange("round-trip")}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${currentTripType === "round-trip"
            ? "bg-gold text-white"
            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
        >
          Round-Trip
        </button>
      </div>

      {/* Form Fields */}
      <div className="space-y-3">
        {/* From */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-stone-600">
            From
          </label>
          <div className="relative">
            <select
              value={currentFrom}
              onChange={(e) => handleFromChange(e.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 px-3 pr-9 text-sm font-semibold text-stone-900 outline-none transition focus:border-gold"
            >
              <option value="">Select pickup city</option>
              {origins.map((origin) => (
                <option key={origin} value={origin}>
                  {origin}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
            />
          </div>
        </div>

        {/* To */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-stone-600">
            To
          </label>
          <div className="relative">
            <select
              value={currentTo}
              onChange={(e) => handleToChange(e.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 px-3 pr-9 text-sm font-semibold text-stone-900 outline-none transition focus:border-gold"
            >
              <option value="">Select destination city</option>
              {destinations.map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
            />
          </div>
        </div>

        {/* Dates Row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Departure */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">
              Departure
            </label>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3">
              <CalendarDays size={16} className="text-gold" />
              <input
                type="date"
                className="w-full bg-transparent text-xs font-semibold text-stone-700 outline-none"
              />
            </div>
          </div>

          {/* Return */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">
              Return
            </label>
            <div
              className={`flex h-12 items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 ${currentTripType === "one-way" ? "cursor-not-allowed opacity-50" : ""
                }`}
            >
              <CalendarDays size={16} className="text-gold" />
              <input
                type="date"
                disabled={currentTripType === "one-way"}
                className="w-full bg-transparent text-xs font-semibold text-stone-700 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-stone-600">
            <Users size={14} className="text-gold" />
            Vehicle Type
          </label>
          <div className="relative">
            <select
              value={currentVehicle}
              onChange={(e) => handleVehicleChange(e.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 px-3 pr-9 text-sm font-semibold text-stone-900 outline-none transition focus:border-gold"
            >
              <option value="">All Vehicle Types</option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="button"
          onClick={handleSearch}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 text-sm font-bold text-white shadow-md transition hover:bg-[#c88912]"
        >
          <Search size={18} />
          Book Your Cab
        </button>
      </div>
    </section>
  );
}
