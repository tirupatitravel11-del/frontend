"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "916390008503";

export default function QuickEnquiry({
  className = "",
}: {
  className?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Hello, I want to make a booking enquiry.

Name: ${name}
Phone Number: ${phone}
Service Type: ${service}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className={`relative z-20 ${className}`}>
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-6 shadow-2xl ring-1 ring-black/10 sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_1fr]"
        >
          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="h-14 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 text-gray-900 outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="9876543210"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              className="h-14 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 text-gray-900 outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
            />
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Service Type
            </label>
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
              className="h-14 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 text-gray-900 outline-none focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
            >
              <option value="">Select Service</option>
              <option>Cab Booking</option>
              <option>Tour Package</option>
              <option>Hotel Booking</option>
              <option>Boat Ride</option>
            </select>
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="h-14 w-full rounded-2xl bg-gold font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
