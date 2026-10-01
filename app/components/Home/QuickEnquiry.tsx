"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "918726124680";

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

    const message = `Hello Tirupati Travels, I want to make a booking enquiry.

Name: ${name}
Phone Number: ${phone}
Vehicle/Service: ${service}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className={`relative z-20 ${className}`}>
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-black/10 sm:p-6">
        
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900">
            Book Your Vehicle
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Fill in your details and get a quick booking quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Enter 10-digit number"
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value.replace(/\D/g, ""))
              }
              required
              className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
            />
          </div>

          {/* Vehicle */}
          <div>
            <label
              htmlFor="service"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Choose Vehicle
            </label>

            <select
              id="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
              className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
            >
              <option value="">Select Vehicle</option>
              <option value="Tempo Traveller">Tempo Traveller</option>
              <option value="Force Urbania">Force Urbania</option>
              <option value="Cab">Cab</option>
              <option value="Other Vehicle">Other Vehicle</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-gold px-5 text-sm font-semibold text-white shadow-md transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            Get Booking Quote
          </button>
        </form>
      </div>
    </section>
  );
}