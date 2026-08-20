"use client";

import { useState } from "react";

const FAQS = [
  {
    question:
      "What is the fare for a 16 seater Tempo Traveller from Noida to Delhi?",
    answer:
      "The 16 seater Tempo Traveller one-way fare from Noida to Delhi starts from ₹5,500. The final fare depends on the travel date, pickup location, drop location and trip requirements.",
  },
  {
    question:
      "How many passengers can travel in a 16 seater Tempo Traveller?",
    answer:
      "A 16 seater Tempo Traveller is designed for up to 16 passengers and is suitable for family groups, corporate teams, wedding groups and tours.",
  },
  {
    question:
      "Is the 16 seater Tempo Traveller air conditioned?",
    answer:
      "Yes. AC 16 seater Tempo Travellers are available for comfortable group travel. Exact vehicle features can vary depending on the vehicle assigned.",
  },
  {
    question:
      "Can I book a 16 seater Tempo Traveller for one-way travel?",
    answer:
      "Yes. You can book a private 16 seater Tempo Traveller for a one-way journey from Noida to Delhi, subject to availability.",
  },
  {
    question:
      "Is a 16 seater Tempo Traveller good for family trips?",
    answer:
      "Yes. It is a convenient option for large families because everyone can travel together in one private vehicle.",
  },
  {
    question:
      "Can I book a 16 seater Tempo Traveller for Delhi Airport?",
    answer:
      "Yes. You can book a 16 seater Tempo Traveller for group airport transfers between Noida and Delhi Airport.",
  },
  {
    question:
      "Can I use the 16 seater Tempo Traveller for outstation trips?",
    answer:
      "Yes. It is suitable for destinations such as Agra, Jaipur, Haridwar, Rishikesh and other outstation destinations.",
  },
  {
    question:
      "Does the 16 seater Tempo Traveller have luggage space?",
    answer:
      "Yes. The vehicle provides luggage space, although the exact luggage capacity depends on the specific vehicle configuration and the amount of passenger luggage.",
  },
  {
    question:
      "Is the Tempo Traveller fare per person?",
    answer:
      "The booking is generally charged for the complete private vehicle rather than per passenger. Final pricing depends on the route and trip requirements.",
  },
];

export default function SixteenSeaterTempoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            16 Seater Tempo Traveller FAQs
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Noida to Delhi 16 Seater Tempo Traveller FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Common questions about booking a 16 seater Tempo Traveller.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm sm:rounded-2xl ${
                  isOpen ? "border-gold/40" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                      isOpen
                        ? "border-gold bg-gold text-white"
                        : "border-slate-300 text-slate-500"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600 sm:px-6 sm:py-5">
                    {faq.answer}
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
