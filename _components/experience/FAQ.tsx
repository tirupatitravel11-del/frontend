"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What travel services does Tirupati Travels provide?",
    answer:
      "Tirupati Travels provides cab and taxi booking, Tempo Traveller and Urbania rentals, hotel booking, sightseeing, and tour packages for local and outstation travel.",
  },
  {
    question: "How can I book a cab with Tirupati Travels?",
    answer:
      "You can contact Tirupati Travels by phone or WhatsApp with your pickup location, destination, travel date, pickup time, and preferred vehicle. Our team can then assist you with availability and booking details.",
  },
  {
    question: "What types of vehicles are available?",
    answer:
      "Vehicle options include sedans, SUVs, Innova Crysta, Tempo Travellers, and Force Urbania. Vehicle availability may depend on the travel date, route, and group size.",
  },
  {
    question: "Do you provide one-way and round-trip cab services?",
    answer:
      "Yes. You can enquire about both one-way and round-trip cab services depending on your travel route and requirements.",
  },
  {
    question: "Can I book a cab for airport pickup or drop?",
    answer:
      "Yes. Airport pickup and drop services are available for supported locations. Share your airport, pickup or drop location, travel date, and time to enquire about availability.",
  },
  {
    question: "Do you provide Tempo Traveller and Urbania for group travel?",
    answer:
      "Yes. Tempo Traveller and Urbania vehicles are suitable for family trips, group tours, pilgrimages, weddings, sightseeing, and outstation journeys.",
  },
  {
    question: "Can I book a hotel through Tirupati Travels?",
    answer:
      "Yes. You can enquire about hotel stays in popular destinations across India. Share your destination, travel dates, number of guests, and preferred stay requirements for booking assistance.",
  },
  {
    question: "Do you offer tour packages?",
    answer:
      "Yes. Tirupati Travels offers tour packages covering popular destinations, sightseeing, spiritual journeys, family trips, and group travel.",
  },
  {
    question: "How is the cab fare calculated?",
    answer:
      "Cab fares can vary based on the vehicle, route, distance, journey type, travel date, and other applicable travel requirements. Contact us for the fare applicable to your trip.",
  },
  {
    question: "How can I contact Tirupati Travels for booking?",
    answer:
      "You can contact Tirupati Travels on WhatsApp or call 8726124680 to discuss your travel requirements and booking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-slate-100 px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className=" mb-8 max-w-7xl ">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-gold">
            FAQs
          </p>

          <h2 className="mt-3 text-7xl font-bold leading-tight text-stone-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
            Find answers to common questions about cab booking, hotels,
            Tempo Travellers, Urbania, and tour packages.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-gold/40 bg-gold/[0.03] shadow-sm"
                    : "border-stone-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-semibold leading-6 text-stone-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-gold text-white"
                        : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-stone-600 sm:px-6 sm:text-base">
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