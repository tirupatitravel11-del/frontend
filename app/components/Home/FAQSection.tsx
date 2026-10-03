"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book a cab with Tirupati Travels?",
    answer:
      "You can book a cab by contacting Tirupati Travels through the website enquiry form or by calling our booking team. Share your pickup location, destination, travel date, and cab requirement to get booking assistance.",
  },
  {
    question: "What types of cab services are available?",
    answer:
      "Tirupati Travels offers cab options for local travel, airport transfers, sightseeing, one-way journeys, round trips, outstation travel, and other transportation requirements.",
  },
  {
    question: "Can I book a Tempo Traveller or Urbania for group travel?",
    answer:
      "Yes. Tempo Traveller and Force Urbania vehicles can be booked for family trips, group tours, pilgrimages, weddings, sightseeing, and outstation journeys. Vehicle availability depends on the travel date and route.",
  },
  {
    question: "Can I book a hotel through Tirupati Travels?",
    answer:
      "Yes. You can enquire about hotel booking through Tirupati Travels. Share your destination, check-in and check-out dates, and number of guests to get suitable hotel options.",
  },
  {
    question: "What types of hotels can I book?",
    answer:
      "Hotel options may include budget, standard, deluxe, and premium stays depending on the destination and availability. Hotel availability and pricing can vary based on travel dates and room requirements.",
  },
  {
    question: "Can I book a boat ride through Tirupati Travels?",
    answer:
      "Yes. Boat rides can be booked for selected destinations where boating services are available. Availability, timing, boat type, and pricing depend on the destination and local operating conditions.",
  },
  {
    question: "What are Tirupati Travels tour packages?",
    answer:
      "Tirupati Travels tour packages can combine travel services such as transportation, sightseeing, hotel stays, and other trip-related arrangements depending on the selected package and destination.",
  },
  {
    question: "Can I customize a tour package?",
    answer:
      "Yes. You can discuss your preferred destinations, travel dates, number of travelers, transportation, hotel requirements, and sightseeing plans with our team to enquire about a suitable travel arrangement.",
  },
  {
    question: "How can I get the price for a cab, hotel, boat ride, or package?",
    answer:
      "Pricing depends on the service, destination, travel date, number of travelers, vehicle type, hotel category, trip duration, and availability. Contact Tirupati Travels with your requirements to get the applicable booking details.",
  },
  {
    question: "Can I book multiple travel services together?",
    answer:
      "Yes. Depending on the destination and availability, you can enquire about combining transportation, hotel stays, sightseeing, boat rides, and tour arrangements for your trip.",
  },
  {
    question: "How far in advance should I make a booking?",
    answer:
      "Advance booking is recommended, especially during weekends, holidays, festivals, and peak travel periods. The required booking time can vary depending on the service, destination, and availability.",
  },
  {
    question: "How can I contact Tirupati Travels for a booking enquiry?",
    answer:
      "You can submit the booking enquiry form on the website or contact Tirupati Travels directly by phone or WhatsApp. Share your travel requirements and our team can assist you with the next steps.",
  },
];
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 border-b border-slate-300 py-12 sm:py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        {/* Heading */}
        <div className="mb-10 gap-6 md:mb-14 md:flex-row md:items-center md:justify-between text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            Everything You Need to Know About Vehicle Booking
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Find answers to common questions about booking Tempo Travellers,
            Urbania, and other vehicles with Tirupati Travels.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-5
                    text-left
                    transition
                    hover:bg-slate-50
                    sm:px-6
                  "
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}