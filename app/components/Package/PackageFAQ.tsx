"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of holiday packages do you offer?",
    answer:
      "Tirupati Travels offers holiday packages for family vacations, honeymoon trips, group tours, sightseeing, spiritual journeys, and leisure travel across popular destinations in India.",
  },
  {
    question: "Which destinations can I visit with your tour packages?",
    answer:
      "You can explore popular destinations across India, including Kashmir, Rajasthan, Kerala, Goa, Himachal Pradesh, Uttarakhand, North East India, Tamil Nadu, Sikkim, Gujarat, Odisha, Madhya Pradesh, Punjab, and Ladakh.",
  },
  {
    question: "Can I customize a holiday package?",
    answer:
      "Yes. You can share your destination, travel dates, number of travellers, and preferred travel requirements with our team. We can then assist you with a suitable travel plan.",
  },
  {
    question: "What is generally included in a holiday package?",
    answer:
      "Package inclusions depend on the selected tour. Depending on the package, inclusions may cover accommodation, sightseeing, transportation, meals, or other travel services mentioned in the package details.",
  },
  {
    question: "Can I book a package for a family or group?",
    answer:
      "Yes. Holiday packages can be planned for families, couples, friends, and groups. Share your group size and travel requirements to find a suitable package.",
  },
  {
    question: "How can I enquire about a holiday package?",
    answer:
      "You can contact Tirupati Travels by WhatsApp or phone. Share your destination, preferred travel dates, number of travellers, and package requirements, and our team will assist you.",
  },
  {
    question: "Can I book transportation along with my holiday package?",
    answer:
      "Yes. Depending on your destination and travel requirements, you can enquire about cab, Tempo Traveller, Urbania, and other transportation options along with your trip.",
  },
  {
    question: "How early should I book my holiday package?",
    answer:
      "It is generally helpful to enquire in advance, especially for peak travel periods. Availability of hotels, vehicles, and other services can depend on your travel dates.",
  },
];

export default function PackageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-srone-50 px-4 py-12 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-gold">
            Holiday Packages FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
            Find answers to common questions about our holiday packages,
            destinations, bookings, and travel arrangements.
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
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-semibold leading-6 text-stone-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-gold text-white"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
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