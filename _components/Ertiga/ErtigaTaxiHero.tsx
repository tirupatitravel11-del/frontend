"use client";

import React, { useState } from "react";
import { Car, MapPin, Users, Briefcase, Wind, ShieldCheck, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
type TripType = "one-way" | "round-trip";
const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";
export default function ErtigaTaxiHero({ from,
  to,
  fare}: any) {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [model, setModel] = useState("Ertiga taxi");
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split("T")[0];

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
          from,
          to,
          fare:
            tripType == "one-way" ? fare?.oneWayPrice : fare?.roundTripPrice,
          vehicle: model,
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

        const message = `Hello, I want to book a ${model}.

Pickup: ${pickup}
Drop: ${drop}
Travel Date: ${date}
Vehicle: ${model}
Phone: ${phoneNo}
Trip:${(fare?.tripType === "one-way"
          ? "one-way"
          : "round-trip"
        )}
Fare: ₹${(fare?.tripType === "one-way"
          ? fare?.oneWayPrice
          : fare?.roundTripPrice
        )?.toLocaleString("en-IN")}`;

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

           <form onSubmit={handleBook} className="mt-5 space-y-4">
           
<div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                  placeholder={`enter your name`}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Phone no
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
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Pickup Location
                </label>

                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                  placeholder={`e.g. ${from} Sector 62`}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Drop Location
                </label>

                <input
                  type="text"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  required
                  placeholder={`e.g. ${to} Airport`}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Travel Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={today}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

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
                            "Book Ertiga Now →"
                          )}
                        </button>

            <p className="text-center text-xs text-slate-500">
              No advance payment • Instant confirmation on WhatsApp
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
