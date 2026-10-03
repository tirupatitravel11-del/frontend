"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TaxiFAQProps {
  cityName?: string;
}

export default function TaxiFAQ({
  cityName = "your city",
}: TaxiFAQProps) {
  const faqs = [
    {
      q: `How can I book a taxi in ${cityName}?`,
      a: `You can book a taxi in ${cityName} by selecting your preferred vehicle, entering your pickup and drop locations, choosing your travel date and time, and clicking the Book Cab Now button. Your booking details will be sent to Tirupati Travels on WhatsApp for availability and fare confirmation.`,
    },
    {
      q: `What types of taxi services are available in ${cityName}?`,
      a: `Tirupati Travels provides taxi options for local travel, airport transfers, sightseeing, one-way journeys, round trips, and outstation travel in and around ${cityName}.`,
    },
    {
      q: `Can I book a taxi for airport pickup or drop in ${cityName}?`,
      a: `Yes. You can book a taxi for airport pickup and drop services. Enter the airport and your required pickup or destination location in the booking form and share the details through WhatsApp.`,
    },
    {
      q: `Can I book a one-way taxi from ${cityName}?`,
      a: `Yes. One-way taxi bookings are available for suitable routes from ${cityName} to your destination. Enter your pickup and drop locations to enquire about availability and fare.`,
    },
    {
      q: `Can I book a round-trip taxi in ${cityName}?`,
      a: `Yes. You can select Round Trip in the booking form and provide your travel date and return date. The complete journey details will be shared on WhatsApp for confirmation.`,
    },
    {
      q: `What vehicles can I book in ${cityName}?`,
      a: `Vehicle availability depends on the selected service and route. Options may include sedans, SUVs, Innova Crysta, Ertiga, and other suitable vehicles. You can select the available vehicle from the booking form.`,
    },
    {
      q: `Can I book a taxi for sightseeing in ${cityName}?`,
      a: `Yes. You can enquire about taxi services for local sightseeing and visiting popular attractions in ${cityName}. Share your pickup location, preferred travel date, time, and destination details to check availability.`,
    },
    {
      q: `How is the taxi fare calculated?`,
      a: `Taxi fares can vary depending on the vehicle, route, distance, trip type, and travel requirements. The final fare and vehicle availability will be confirmed after you share your booking details.`,
    },
    {
      q: `How far in advance should I book a taxi?`,
      a: `It is recommended to enquire and book your taxi in advance, especially for airport transfers, sightseeing, holidays, weekends, weddings, and group travel.`,
    },
    {
      q: `How do I confirm my taxi booking?`,
      a: `After submitting your booking details, you will be redirected to WhatsApp. Tirupati Travels can then confirm vehicle availability, fare, and other booking details with you.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions About Taxi Booking
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Find answers about taxi booking, airport transfers,
            sightseeing, one-way trips, round trips, and outstation
            taxi services in {cityName}.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                    {faq.q}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}