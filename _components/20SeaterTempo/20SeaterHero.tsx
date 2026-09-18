"use client";

import { useState } from "react";
import {
  Users,
  Star,
  ShieldCheck,
  Phone,
  MessageCircle,
  Armchair,
  Tv,
  Music,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

interface TwentySeaterHeroProps {
  from: string;
  to: string;
  fare:any
}

export default function TwentySeaterHero({ from, to,fare }: TwentySeaterHeroProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState("");
  const [travelDate, setTravelDate] = useState("");
const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
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
    if (!travelDate) {
      toast.error("Please select travel date");
      return;
    }

    if (travelDate < today) {
      toast.error("Travel date cannot be in the past");
      return;
    }

    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Please enter a valid 10 digit Indian mobile number");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
         process.env.apiUrl + '/api/create-booking-cab',
        {
          name,
          phoneNo:phone,
          serviceType: "cab",
          pickup: pickup.trim(),
          drop: drop.trim(),
          date:travelDate,
          from,
          to,
          fare: fare?.oneWayPrice,
          vehicle: "20 Seater Tempo Traveller",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Booking request submitted successfully!");

        const message = `Hello, I want to book a 20 Seater Tempo Traveller.

Pickup: ${pickup}
Drop: ${drop}
Travel Date: ${travelDate}
Passengers: Up to 20
Vehicle: 20 Seater Tempo Traveller
Phone: ${phone}
Fare: ₹${(fare?.oneWayPrice).toLocaleString("en-IN")}`;

        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
          "_blank",
        );

        // Reset form
        setTravelDate("");
        setPickup("");
        setDrop("");
        setPhone("");
        setName("")
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
      {/* Decorative Gold Glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* ================= LEFT: Content ================= */}
        <div>
          {/* Wedding Favourite Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            <Star className="h-3 w-3 fill-current" />
            Wedding Favourite • Most Booked
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            {from} → {to} Group Travel
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
            20 Seater Luxury Tempo Traveller{" "}
            <span className="text-gold">
              {from} to {to}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            The perfect size for wedding baraat, large family vacations, and
            corporate events. Maharaja pusher seats, LED TV, powerful AC and
            premium music system — all in one luxurious ride.
          </p>

          {/* Quick Specs */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Users className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">20+1</span>
              <span className="text-[10px] text-slate-500">Seats</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Armchair className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">2*2</span>
              <span className="text-[10px] text-slate-500">Seating</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Tv className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">
                LED TV
              </span>
              <span className="text-[10px] text-slate-500">Included</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
              <Music className="h-6 w-6 text-gold mb-1" />
              <span className="text-xs font-semibold text-slate-600">
                Music
              </span>
              <span className="text-[10px] text-slate-500">Premium</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="mt-6 rounded-xl border border-gold/30 bg-gold/5 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Starting Fare
                </p>
                <p className="text-2xl font-black text-gold">₹{fare.oneWayPrice.toLocaleString("en-IN")}</p>
                <p className="text-xs text-slate-500">
                  Local day tour • ₹35/km outstation
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Luggage
                </p>
                <p className="text-lg font-bold text-slate-900">10 Bags</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Book
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

        {/* ================= RIGHT: Booking Card ================= */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Book 20 Seater Tempo Traveller
          </h2>

          {/* Form */}
          <form onSubmit={handleBook} className="mt-5 space-y-4">
      

            <div className="grid gap-4 sm:grid-cols-2">

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Your Name
                </label>
                    <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Rahul Sharma"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
                
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  if (value.length <= 10) {
                    setPhone(value);
                  }
                }}
                maxLength={10}
                inputMode="numeric"
                placeholder="98xxxxxxxx"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />

              {phone.length > 0 && phone.length < 10 && (
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
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder={`e.g. Sector 62`}
               className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
               
                
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                 Drop Location
                </label>
                    <input
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder={`e.g.  Sector 62`}
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
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                required
                min={today}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div className="rounded-xl bg-gold/10 p-4">
              <p className="text-sm text-slate-700">
                <ShieldCheck className="inline h-4 w-4 mr-1.5 text-gold" />
                <strong className="text-gold">Selected:</strong> 20 Seater Tempo
                Traveller — Starting from ₹{fare.oneWayPrice.toLocaleString("en-IN")}
              </p>
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
                "Book Now →"
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
