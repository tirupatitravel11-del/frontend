"use client";

import { useMemo, useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Car,
  Clock,
  ArrowRight,
} from "lucide-react";

import type { SeoPageData } from "@/app/data/seoPages";

import {
  VEHICLES,
  type Vehicle,
  findVehicleFromSlug,
} from "@/app/lib/api/route-data/vehicles";

import toast from "react-hot-toast";

const WHATSAPP_NUMBER = "918726124680";

type JourneyType = "one-way" | "round-trip";

/**
 * Get vehicles according to the current SEO page / URL.
 *
 * URL is treated as the main source of truth for vehicle-specific pages.
 */
export function getVehiclesForPage(page: SeoPageData): Vehicle[] {
  const service = (page.service || "").toLowerCase();
  const slug = (page.slug || "").toLowerCase();

  /**
   * First try the existing vehicle slug matcher.
   */
  const matchedVehicle = findVehicleFromSlug(slug);

  if (matchedVehicle) {
    return [matchedVehicle];
  }

  /**
   * Sedan / individual vehicle pages
   */
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

  /**
   * Tempo Traveller pages
   */
  if (slug.includes("12-seater")) {
    return VEHICLES.filter(
      (v) => v.slug === "12-seater-tempo-traveller",
    );
  }

  if (slug.includes("16-seater")) {
    return VEHICLES.filter(
      (v) => v.slug === "16-seater-tempo-traveller",
    );
  }

  if (slug.includes("20-seater")) {
    return VEHICLES.filter(
      (v) => v.slug === "20-seater-tempo-traveller",
    );
  }

  if (slug.includes("24-seater")) {
    return VEHICLES.filter(
      (v) => v.slug === "24-seater-tempo-traveller",
    );
  }

  if (
    slug.includes("luxury-tempo") ||
    service.includes("luxury-tempo")
  ) {
    return VEHICLES.filter(
      (v) => v.slug === "luxury-tempo-traveller",
    );
  }

  /**
   * Force Tempo Traveller category pages.
   */
  if (
    slug.includes("tempo-traveller") ||
    slug.includes("tempo-traveler") ||
    service.includes("tempo-traveller") ||
    service.includes("tempo traveller") ||
    service.includes("tempo-traveler") ||
    service.includes("tempo traveler")
  ) {
    return VEHICLES.filter((v) =>
      v.cabType.toLowerCase().includes("tempo"),
    );
  }

  /**
   * Urbania
   */
  if (
    slug.includes("urbania") ||
    service.includes("urbania")
  ) {
    return VEHICLES.filter((v) => v.slug === "urbania");
  }

  /**
   * Sedan category
   */
  if (
    service === "sedan" ||
    slug.includes("sedan")
  ) {
    return VEHICLES.filter(
      (v) => v.cabType.toLowerCase() === "sedan",
    );
  }

  /**
   * SUV category
   */
  if (
    service === "suv" ||
    slug.includes("suv")
  ) {
    return VEHICLES.filter((v) =>
      v.cabType.toLowerCase().includes("suv"),
    );
  }

  /**
   * Generic Tempo category
   */
  if (
    service === "tempo" ||
    slug.includes("tempo")
  ) {
    return VEHICLES.filter((v) =>
      v.cabType.toLowerCase().includes("tempo"),
    );
  }

  /**
   * Default
   */
  return VEHICLES;
}

interface UniversalSeoBookingFormProps {
  page: SeoPageData;
}

export default function UniversalSeoBookingForm({
  page,
}: UniversalSeoBookingFormProps) {
  const vehicleOptions = useMemo(
    () => getVehiclesForPage(page),
    [page],
  );

  const [journeyType, setJourneyType] =
    useState<JourneyType>("one-way");

  const [selectedVehicle, setSelectedVehicle] = useState(
    vehicleOptions[0]?.name || "Maruti Swift Dzire",
  );

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [returnDate, setReturnDate] = useState("");

  /**
   * Keep selected vehicle synced whenever the page changes.
   */
  useEffect(() => {
    if (vehicleOptions.length > 0) {
      setSelectedVehicle(vehicleOptions[0].name);
    }
  }, [vehicleOptions]);

  const today = new Date().toISOString().split("T")[0];

  /**
   * Detect the actual category from URL/service first.
   *
   * This prevents a Tempo Traveller page from falling back
   * to "Cab" even if vehicle data changes.
   */
  const vehicleLabel = useMemo(() => {
    const slug = (page.slug || "").toLowerCase();
    const service = (page.service || "").toLowerCase();

    /**
     * TEMPO TRAVELLER
     *
     * Highest priority because this is the main issue:
     * URLs containing tempo / tempo-traveller should always
     * display Tempo Traveller.
     */
    if (
      slug.includes("tempo-traveller") ||
      slug.includes("tempo-traveler") ||
      slug.includes("tempo") ||
      service.includes("tempo-traveller") ||
      service.includes("tempo traveller") ||
      service.includes("tempo-traveler") ||
      service.includes("tempo traveler") ||
      service === "tempo" ||
      service.includes("tempo")
    ) {
      return "Tempo Traveller";
    }

    /**
     * URBANIA
     */
    if (
      slug.includes("urbania") ||
      service.includes("urbania")
    ) {
      return "Urbania";
    }

    /**
     * Specific vehicles
     */
    if (
      slug.includes("dzire") ||
      service.includes("dzire")
    ) {
      return "Dzire";
    }

    if (
      slug.includes("etios") ||
      service.includes("etios")
    ) {
      return "Etios";
    }

    if (
      slug.includes("amaze") ||
      service.includes("amaze")
    ) {
      return "Amaze";
    }

    if (
      slug.includes("innova") ||
      service.includes("innova")
    ) {
      return "Innova";
    }

    if (
      slug.includes("ertiga") ||
      service.includes("ertiga")
    ) {
      return "Ertiga";
    }

    /**
     * Category pages
     */
    if (
      service === "sedan" ||
      slug.includes("sedan")
    ) {
      return "Sedan";
    }

    if (
      service === "suv" ||
      slug.includes("suv")
    ) {
      return "SUV";
    }

    /**
     * Fall back to the vehicle list.
     */
    const firstVehicle = vehicleOptions[0];

    if (!firstVehicle) {
      return "Cab";
    }

    if (firstVehicle.slug === "dzire") {
      return "Dzire";
    }

    if (firstVehicle.slug === "etios") {
      return "Etios";
    }

    if (firstVehicle.slug === "amaze") {
      return "Amaze";
    }

    if (firstVehicle.slug === "innova-crysta") {
      return "Innova";
    }

    if (firstVehicle.slug === "ertiga") {
      return "Ertiga";
    }

    if (firstVehicle.slug === "urbania") {
      return "Urbania";
    }

    if (
      firstVehicle.cabType
        .toLowerCase()
        .includes("tempo")
    ) {
      return "Tempo Traveller";
    }

    if (
      firstVehicle.cabType.toLowerCase() === "sedan"
    ) {
      return "Sedan";
    }

    if (
      firstVehicle.cabType
        .toLowerCase()
        .includes("suv")
    ) {
      return "SUV";
    }

    return "Cab";
  }, [
    page.slug,
    page.service,
    vehicleOptions,
  ]);

  /**
   * Dynamic lowercase label for sentences.
   *
   * Example:
   * Tempo Traveller -> tempo traveller
   * Cab -> cab
   */
  const vehicleLabelLower = vehicleLabel.toLowerCase();

  /**
   * Category heading.
   *
   * Examples:
   * Select Tempo Traveller Model
   * Select Sedan Model
   * Select SUV Model
   */
  const categoryTitle = vehicleLabel;

  const handleBookNow = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!pickup.trim()) {
      toast.error("Please enter pickup location");
      return;
    }

    if (!drop.trim()) {
      toast.error("Please enter drop location");
      return;
    }

    if (
      pickup.trim().toLowerCase() ===
      drop.trim().toLowerCase()
    ) {
      toast.error(
        "Pickup and drop location cannot be the same",
      );
      return;
    }

    if (!date) {
      toast.error("Please select travel date");
      return;
    }

    if (date < today) {
      toast.error(
        "Travel date cannot be in the past",
      );
      return;
    }

    if (!time) {
      toast.error("Please select pickup time");
      return;
    }

    if (
      journeyType === "round-trip" &&
      !returnDate
    ) {
      toast.error("Please select return date");
      return;
    }

    if (
      journeyType === "round-trip" &&
      returnDate < date
    ) {
      toast.error(
        "Return date cannot be before travel date",
      );
      return;
    }

    const journey =
      journeyType === "one-way"
        ? "One Way"
        : "Round Trip";

    /**
     * Dynamic WhatsApp message.
     *
     * Tempo page:
     * "I want to book a tempo traveller."
     *
     * Cab page:
     * "I want to book a cab."
     */
    const message = [
      "Hello Tirupati Travels 👋",
      "",
      `I want to book a ${vehicleLabelLower}.`,
      "",
      "*Booking Details*",
      "",
      `*Journey:* ${journey}`,
      `*Vehicle:* ${selectedVehicle}`,
      `*Pickup:* ${pickup.trim()}`,
      `*Drop:* ${drop.trim()}`,
      `*Travel Date:* ${date}`,
      `*Pickup Time:* ${time}`,
      ...(journeyType === "round-trip"
        ? [`*Return Date:* ${returnDate}`]
        : []),
      "",
      `Please confirm ${vehicleLabelLower} availability and fare.`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    /**
     * Open WhatsApp
     */
    window.location.href = whatsappUrl;
  };

  return (
    <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-2xl shadow-slate-200/60 sm:p-7">
      {/* Header */}
      <div className="mb-6">
        <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Book Your {vehicleLabel}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Enter your journey details and continue on
          WhatsApp to confirm {vehicleLabelLower}{" "}
          availability and fare.
        </p>
      </div>

      <form
        onSubmit={handleBookNow}
        className="space-y-4"
      >
        {/* Journey Type */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Journey Type
          </label>

          <div className="grid grid-cols-2 rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => {
                setJourneyType("one-way");
                setReturnDate("");
              }}
              className={`rounded-lg py-2.5 text-sm font-bold transition ${
                journeyType === "one-way"
                  ? "bg-amber-500 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              One Way
            </button>

            <button
              type="button"
              onClick={() =>
                setJourneyType("round-trip")
              }
              className={`rounded-lg py-2.5 text-sm font-bold transition ${
                journeyType === "round-trip"
                  ? "bg-amber-500 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Round Trip
            </button>
          </div>
        </div>

        {/* Vehicle */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Select {categoryTitle} Model
          </label>

          <div className="relative">
            <Car className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            {vehicleOptions.length > 1 ? (
              <select
                value={selectedVehicle}
                onChange={(e) =>
                  setSelectedVehicle(e.target.value)
                }
                className="w-full appearance-none rounded-full border border-amber-300/80 bg-white py-3 pl-11 pr-8 text-sm font-semibold text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                {vehicleOptions.map((vehicle) => (
                  <option
                    key={vehicle.slug}
                    value={vehicle.name}
                  >
                    {vehicle.name}
                  </option>
                ))}
              </select>
            ) : (
              <div className="w-full rounded-full border border-amber-300/80 bg-slate-50 py-3 pl-11 pr-4 text-sm font-bold text-slate-900">
                {vehicleOptions[0]?.name ||
                  selectedVehicle}
              </div>
            )}
          </div>
        </div>

        {/* Pickup + Drop */}
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
                onChange={(e) =>
                  setPickup(e.target.value)
                }
                placeholder={
                  page.city ||
                  "Enter pickup location"
                }
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
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
                onChange={(e) =>
                  setDrop(e.target.value)
                }
                placeholder="Enter drop location"
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>
        </div>

        {/* Date + Time */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Travel Date
            </label>

            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                min={today}
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Pickup Time
            </label>

            <div className="relative">
              <Clock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="time"
                value={time}
                onChange={(e) =>
                  setTime(e.target.value)
                }
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>
        </div>

        {/* Return Date */}
        {journeyType === "round-trip" && (
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Return Date
            </label>

            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="date"
                value={returnDate}
                onChange={(e) =>
                  setReturnDate(e.target.value)
                }
                min={date || today}
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>
        )}

        {/* Book Now */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-gold/90 active:scale-[0.99]"
        >
          Book {vehicleLabel} Now
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}