"use client";

import { useState, useMemo } from "react";
import { MapPin, Calendar, Car, ArrowRight, Loader2 } from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";

// ⚠️ Adjust the import path below to match where your vehicles.ts file is located
import {
  VEHICLES,
  type Vehicle,
  findVehicleFromSlug,
} from "@/app/lib/api/route-data/vehicles";
import toast from "react-hot-toast";
import axios from "axios";

const WHATSAPP_NUMBER = "918726124680";

type TripType = "one-way" | "round-trip";

/**
 * Returns available vehicle options based on current page data/service slug
 */
export function getVehiclesForPage(page: SeoPageData): Vehicle[] {
  const service = (page.service || "").toLowerCase();
  const slug = (page.slug || "").toLowerCase();

  // 1. Try the robust slug matcher first (handles route-specific pages like noida-to-delhi-dzire-taxi)
  const matchedVehicle = findVehicleFromSlug(slug);
  if (matchedVehicle) {
    return [matchedVehicle];
  }

  // 2. Fallback to keyword matching for specific vehicle pages
  if (slug.includes("dzire") || service.includes("dzire")) {
    return VEHICLES.filter((v) => v.slug === "dzire");
  }
  if (slug.includes("etios") || service.includes("etios")) {
    return VEHICLES.filter((v) => v.slug === "etios");
  }
  if (slug.includes("amaze") || service.includes("amaze")) {
    return VEHICLES.filter((v) => v.slug === "amaze");
  }
  if (slug.includes("innova") || service.includes("innova")) {
    return VEHICLES.filter((v) => v.slug === "innova-crysta");
  }
  if (slug.includes("ertiga") || service.includes("ertiga")) {
    return VEHICLES.filter((v) => v.slug === "ertiga");
  }
  if (slug.includes("12-seater")) {
    return VEHICLES.filter((v) => v.slug === "12-seater-tempo-traveller");
  }
  if (slug.includes("16-seater")) {
    return VEHICLES.filter((v) => v.slug === "16-seater-tempo-traveller");
  }
  if (slug.includes("20-seater")) {
    return VEHICLES.filter((v) => v.slug === "20-seater-tempo-traveller");
  }
  if (slug.includes("24-seater")) {
    return VEHICLES.filter((v) => v.slug === "24-seater-tempo-traveller");
  }
  if (slug.includes("luxury-tempo") || service.includes("luxury-tempo")) {
    return VEHICLES.filter((v) => v.slug === "luxury-tempo-traveller");
  }
  if (slug.includes("urbania") || service.includes("urbania")) {
    return VEHICLES.filter((v) => v.slug === "urbania");
  }

  // 3. Category level pages
  if (service === "sedan" || slug.includes("sedan")) {
    return VEHICLES.filter((v) => v.cabType.toLowerCase() === "sedan");
  }
  if (service === "suv" || slug.includes("suv")) {
    return VEHICLES.filter((v) => v.cabType.toLowerCase().includes("suv"));
  }
  if (service === "tempo" || slug.includes("tempo")) {
    return VEHICLES.filter((v) => v.cabType.toLowerCase().includes("tempo"));
  }

  // 4. General taxi / airport / contact pages: return default full list
  return VEHICLES;
}

export default function UniversalSeoBookingForm({
  page,
}: {
  page: SeoPageData;
}) {
  const [tripType, setTripType] = useState<TripType>("one-way");

  const vehicleOptions = useMemo(() => getVehiclesForPage(page), [page]);

  const [selectedVehicle, setSelectedVehicle] = useState<string>(
    vehicleOptions[0]?.name || "Maruti Swift Dzire",
  );

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const categoryTitle = useMemo(() => {
    const firstVehicle = vehicleOptions[0];
    if (firstVehicle) {
      if (firstVehicle.slug === "dzire") return "Dzire";
      if (firstVehicle.slug === "etios") return "Etios";
      if (firstVehicle.slug === "amaze") return "Amaze";
      if (firstVehicle.cabType.toLowerCase() === "sedan") return "Sedan";
      if (firstVehicle.slug === "innova-crysta") return "Innova";
      if (firstVehicle.slug === "ertiga") return "Ertiga";
      if (firstVehicle.cabType.toLowerCase().includes("suv")) return "SUV";
      if (firstVehicle.cabType.toLowerCase().includes("tempo"))
        return "Tempo Traveller";
      if (firstVehicle.slug === "urbania") return "Urbania";
    }
    return "Cab";
  }, [vehicleOptions]);

  const defaultPickup = page.city || "";

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const currentPickup = pickup.trim() || defaultPickup || "Not specified";
//     const currentDrop = drop.trim() || "Not specified";

//     const message = `Hello, I want to book a cab via Tirupati Travel.

// *Service:* ${page.title || categoryTitle + " Booking"}
// *Trip Type:* ${tripType === "one-way" ? "One Way" : "Round Trip"}
// *Vehicle Model:* ${selectedVehicle}
// *Pickup Location:* ${currentPickup}
// *Drop Location:* ${currentDrop}
// *Travel Date:* ${date || "As soon as possible"}

// Please confirm availability and best fare quote.`;

//     window.open(
//       `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
//       "_blank",
//     );
//   };

 const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!pickup.trim()) {
      toast.error("Please enter pickup location");
      return;
    }

    if (!drop.trim()) {
      toast.error("Please enter drop location");
      return;
    }
    if (pickup.trim().toLowerCase() === drop.trim().toLowerCase()) {
      toast.error("Pickup and drop location cannot be the same");
      return;
    }
    if (!date) {
      toast.error("Please select travel date");
      return;
    }

    if (date < today) {
      toast.error("Travel date cannot be in the past");
      return;
    }

    if (!phoneNo) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phoneNo)) {
      toast.error("Please enter a valid 10 digit Indian mobile number");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        process.env.apiUrl + "/api/create-booking-cab",
        {
          name,
          phoneNo,
          serviceType: "cab",
          pickup: pickup.trim(),
          drop: drop.trim(),
          date,
          vehicle: selectedVehicle,
          trip: tripType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Booking request submitted successfully!");

         const currentPickup = pickup.trim() || defaultPickup || "Not specified";
    const currentDrop = drop.trim() || "Not specified";

    const message = `Hello, I want to book a cab via Tirupati Travel.

*Service:* ${page.title || categoryTitle + " Booking"}
*Trip Type:* ${tripType === "one-way" ? "One Way" : "Round Trip"}
*Vehicle Model:* ${selectedVehicle}
*Pickup Location:* ${currentPickup}
*Drop Location:* ${currentDrop}
*Travel Date:* ${date || "As soon as possible"}

Please confirm availability and best fare quote.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

        // Reset form
        setDate("");
        setPickup("");
        setDrop("");
        setPhoneNo("");
        setName("");
        setTripType("one-way");
        setSelectedVehicle(vehicleOptions[0]?.name || "Maruti Swift Dzire")
      }
    } catch (error) {
      console.error("Booking API failed:", error);

      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-2xl shadow-slate-200/60 sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
          BOOK YOUR {categoryTitle.toUpperCase()}
        </p>
        <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Instant Cab Confirmation
        </h3>
      </div>

      <form onSubmit={handleBook} className="space-y-4">
        {/* Trip Type Toggle Pill */}
        <div className="grid grid-cols-2 rounded-full border border-slate-200 bg-slate-50 p-1">
          {(["one-way", "round-trip"] as TripType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setTripType(type)}
              className={`rounded-full py-2.5 text-xs font-bold transition-all duration-200 ${
                tripType === type
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {type === "one-way" ? "One Way" : "Round Trip"}
            </button>
          ))}
        </div>

        {/* Vehicle Selection */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Select {categoryTitle} Model
          </label>
          <div className="relative">
            <Car className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            {vehicleOptions.length > 1 ? (
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full rounded-full border border-amber-300/80 bg-white py-3 pl-11 pr-8 text-sm font-semibold text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                {vehicleOptions.map((v) => (
                  <option key={v.slug} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </select>
            ) : (
              <div className="w-full rounded-full border border-amber-300/80 bg-slate-50 py-3 pl-11 pr-4 text-sm font-bold text-slate-900">
                {vehicleOptions[0]?.name || selectedVehicle}
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Name
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Enter your name"}
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Phone
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  if (value.length <= 10) {
                    setPhoneNo(value);
                  }
                }}
                maxLength={10}
                inputMode="numeric"
                placeholder="980xxxxxxx"
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              {phoneNo.length > 0 && phoneNo.length < 10 && (
                <p className="mt-1 text-xs text-red-500">
                  Please enter a 10 digit mobile number
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Pickup & Drop Inputs */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder={defaultPickup || "e.g. Lucknow"}
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Drop Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="e.g. Agra"
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>
        </div>

        {/* Travel Date */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Travel Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>
        </div>

        {/* Action Button */}
    
          <button
                                  type="submit"
                                  disabled={loading}
                                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                  {loading ? (
                                    <>
                                      <Loader2 size={18} className="animate-spin" />
                                      Booking...
                                    </>
                                  ) : (
                                    ` BOOK ${categoryTitle.toUpperCase()} NOW`
                                  )}
                                </button>
      </form>
    </div>
  );
}
