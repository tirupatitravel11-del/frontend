"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of hotels can I book?",
    answer:
      "You can choose from a variety of hotel options including budget hotels, luxury properties, family-friendly stays, business hotels, and premium accommodations depending on your destination.",
  },
  {
    question: "How do I search for a hotel?",
    answer:
      "Enter your destination, check-in date, check-out date, rooms, and guests in the hotel search form. Click the Search button to find available hotels that match your requirements.",
  },
  {
    question: "Can I choose my check-in and check-out dates?",
    answer:
      "Yes. You can select your preferred check-in and check-out dates while searching for hotels. Available properties will be shown according to your selected dates.",
  },
  {
    question: "Can I book multiple rooms?",
    answer:
      "Yes. You can select the number of rooms and guests according to your requirements while searching for a hotel.",
  },
  {
    question: "What amenities are available at hotels?",
    answer:
      "Hotel amenities vary by property and may include Wi-Fi, parking, breakfast, restaurants, air conditioning, swimming pools, room service, and other facilities.",
  },
  {
    question: "Are hotel prices inclusive of taxes?",
    answer:
      "Taxes and additional charges may vary depending on the hotel and room selected. The applicable charges and final booking amount are displayed before you confirm your reservation.",
  },
  {
    question: "Can I cancel my hotel booking?",
    answer:
      "Yes, cancellation may be available depending on the hotel's cancellation policy and the room you select. Please check the cancellation terms before confirming your booking.",
  },
  {
    question: "How can I get help with my hotel booking?",
    answer:
      "Our customer support team can assist you with hotel searches, booking-related questions, cancellations, and other concerns before or during your stay.",
  },
];

export default function HotelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-16 md:py-20">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
            Hotel Booking FAQs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Find answers to common questions about hotel bookings, rooms,
            amenities, prices, cancellations, and your stay.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-gold"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-stone-100 px-6 pb-6 pt-4">
                    <p className="leading-7 text-stone-600">{faq.answer}</p>
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
