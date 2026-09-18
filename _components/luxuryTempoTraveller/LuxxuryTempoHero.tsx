"use client";

import { useState } from "react";
import {
  Users,
  Star,
  ShieldCheck,
  Phone,
  MessageCircle,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

type SeaterType = string;
type TripType = "one-way" | "round-trip";

interface LuxuryTempoHeroProps {
  from: string;
  to: string;
  fares: any[];
}

export default function LuxuryTempoHero({
  from,
  to,
  fares,
}: LuxuryTempoHeroProps) {
  const [selectedSeater, setSelectedSeater] = useState<SeaterType>(
    fares[0]?.slug || ""
  );

  const [tripType, setTripType] = useState<TripType>("one-way");

  const [pickup, setPickup] = useState(from);
  const [drop, setDrop] = useState(to);

  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  // Seater options
  const SEATER_OPTIONS = fares.map((fare: any) => ({
    id: fare.slug,
    label: fare.vehicle,
    oneWayFare: fare.oneWay?.oneWayFare || 0,
    roundTripFare: fare.oneWay?.roundTripFare || 0,
    perKm: fare.perKm || 0,
  }));

  // Currently selected vehicle
  const selectedFare =
    SEATER_OPTIONS.find((option) => option.id === selectedSeater) ||
    SEATER_OPTIONS[0];

  const selectedVehicle = selectedFare?.label || "";

  // Current fare according to trip
  const selectedPrice =
    tripType === "one-way"
      ? selectedFare?.oneWayFare || 0
      : selectedFare?.roundTripFare || 0;

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();

    // Name validation
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    // Pickup validation
    if (!pickup.trim()) {
      toast.error("Please enter pickup location");
      return;
    }

    // Drop validation
    if (!drop.trim()) {
      toast.error("Please enter drop location");
      return;
    }

    // Same pickup/drop validation
    if (pickup.trim().toLowerCase() === drop.trim().toLowerCase()) {
      toast.error("Pickup and drop location cannot be the same");
      return;
    }

    // Date validation
    if (!travelDate) {
      toast.error("Please select travel date");
      return;
    }

    if (travelDate < today) {
      toast.error("Travel date cannot be in the past");
      return;
    }

    // Phone validation
    if (!phoneNo) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phoneNo)) {
      toast.error("Please enter a valid 10 digit Indian mobile number");
      return;
    }

    // Vehicle validation
    if (!selectedVehicle) {
      toast.error("Please select a vehicle");
      return;
    }

    // Fare validation
    if (!selectedPrice || selectedPrice <= 0) {
      toast.error("Fare is not available for selected vehicle");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.apiUrl}/api/create-booking-cab`,
        {
          name: name.trim(),
          phoneNo,
          serviceType: "cab",

          pickup: pickup.trim(),
          drop: drop.trim(),

          date: travelDate,

          from,
          to,

          fare: selectedPrice,

          vehicle: selectedVehicle,

          // Backend ke liye clean value
          trip: tripType === "one-way" ? "one-way" : "round-trip",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Booking request submitted successfully!");

        // WhatsApp message
        const whatsappMessage = `Hello, I want to book a ${selectedVehicle}.

Name: ${name}
Pickup: ${pickup}
Drop: ${drop}
Travel Date: ${travelDate}
Vehicle: ${selectedVehicle}
Phone: ${phoneNo}
Trip: ${tripType === "one-way" ? "One Way" : "Round Trip"}
Fare: ₹${selectedPrice.toLocaleString("en-IN")}`;

        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );

        // Reset form
        setName("");
        setPhoneNo("");
        setTravelDate("");
        setPickup(from);
        setDrop(to);
        setTripType("one-way");
        setSelectedSeater(fares[0]?.slug || "");
      }
    } catch (error) {
      console.error("Booking API failed:", error);

      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative Gold Glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">

        {/* ================= LEFT ================= */}
        <div>
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            <Star className="h-3 w-3 fill-current" />
            Premium Luxury Fleet
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Luxury Tempo Traveller Service
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
            Luxury Tempo Traveller on Rent from{" "}
            <span className="text-gold">
              {from} to {to}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Travel together in style. Maharaja pusher seats, LED TV, powerful
            AC and premium music system — perfect for weddings, pilgrimages
            and family vacations.
          </p>

          {/* Seater Options */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-slate-700">
              Choose Your Seater Capacity:
            </p>

            <div className="flex flex-wrap gap-2">
              {SEATER_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedSeater(option.id)}
                  className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedSeater === option.id
                      ? "border-gold bg-gold text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-gold/40 hover:bg-gold/5"
                  }`}
                >
                  {option.label}

                  <span className="ml-1.5 text-xs opacity-80">
                    (₹{option.oneWayFare.toLocaleString("en-IN")})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Call for Quote
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ================= RIGHT BOOKING ================= */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Get Instant Quote
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Book Your Luxury Traveller
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Fill this form and our team will reply in under 2 minutes.
          </p>

          {/* FORM */}
          <form onSubmit={handleBook} className="mt-5 space-y-4">

            {/* Name + Phone */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                  maxLength={50}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Phone No
                </label>

                <input
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 10) {
                      setPhoneNo(value);
                    }
                  }}
                  required
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="98xxxxxxxx"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />

                {phoneNo.length > 0 && phoneNo.length < 10 && (
                  <p className="mt-1 text-xs text-red-500">
                    Please enter a 10 digit mobile number
                  </p>
                )}
              </div>
            </div>

            {/* Pickup + Drop */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Pickup */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Pickup Location
                </label>

                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder={`e.g. ${from} Sector 62`}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>

              {/* Drop */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Drop Location
                </label>

                <input
                  type="text"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder={`e.g. ${to} Airport`}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
            </div>

            {/* Travel Date */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Travel Date
              </label>

              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                required
                min={today}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            {/* Trip Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Trip Type
              </label>

              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={() => setTripType("one-way")}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                    tripType === "one-way"
                      ? "border-gold bg-gold text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-gold"
                  }`}
                >
                  One Way
                  <span className="mt-1 block text-xs opacity-80">
                    ₹{selectedFare?.oneWayFare?.toLocaleString("en-IN")}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setTripType("round-trip")}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                    tripType === "round-trip"
                      ? "border-gold bg-gold text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-gold"
                  }`}
                >
                  Round Trip
                  <span className="mt-1 block text-xs opacity-80">
                    ₹{selectedFare?.roundTripFare?.toLocaleString("en-IN")}
                  </span>
                </button>

              </div>
            </div>

            {/* Selected Vehicle */}
            <div className="rounded-xl bg-gold/10 p-4">
              <p className="text-sm text-slate-700">
                <ShieldCheck className="mr-1.5 inline h-4 w-4 text-gold" />

                <strong className="text-gold">
                  Selected:
                </strong>{" "}

                {selectedVehicle || "No vehicle selected"}

                <span className="mx-1">—</span>

                {tripType === "one-way" ? "One Way" : "Round Trip"}

                <span className="mx-1">—</span>

                <strong>
                  ₹{selectedPrice.toLocaleString("en-IN")}
                </strong>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Booking...
                </>
              ) : (
                <>
                  <MessageCircle className="h-4 w-4" />
                  Get Quote on WhatsApp
                  <span className="text-lg leading-none">→</span>
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              No advance payment • Instant reply • Transparent pricing
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}