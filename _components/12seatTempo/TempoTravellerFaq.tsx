"use client";

import { useState } from "react";

const FAQS = [
  {
    question:
      "What is the fare for a 12 seater Tempo Traveller from Noida to Delhi?",
    answer:
      "The 12 seater Tempo Traveller one-way fare from Noida to Delhi starts from ₹4,500. The final fare depends on the travel date, pickup and drop location and trip requirements.",
  },
  {
    question: "How many passengers can travel in the Tempo Traveller?",
    answer:
      "The vehicle is designed for up to 12 passengers and is suitable for family trips, group transfers, corporate outings and events.",
  },
  {
    question: "Is the 12 seater Tempo Traveller air conditioned?",
    answer:
      "Yes. AC Tempo Traveller vehicles are available for comfortable group travel.",
  },
  {
    question: "Can I book the Tempo Traveller for a one-way journey?",
    answer:
      "Yes. You can book a 12 seater Tempo Traveller for a one-way journey from Noida to Delhi, subject to availability.",
  },
  {
    question: "Is it suitable for a family trip?",
    answer:
      "Yes. A 12 seater Tempo Traveller is particularly useful for families travelling together because everyone can stay in the same vehicle.",
  },
  {
    question: "Can I book it for Delhi Airport?",
    answer:
      "Yes. A 12 seater Tempo Traveller can be booked for group airport transfers between Noida and Delhi Airport.",
  },
  {
    question: "Can I use a 12 seater Tempo Traveller for an outstation trip?",
    answer:
      "Yes. It can be used for outstation trips such as Agra, Jaipur, Haridwar, Rishikesh and other destinations.",
  },
  {
    question: "Is the fare charged per person?",
    answer:
      "The quoted fare is generally for the complete private vehicle, not per passenger. The final price depends on the trip requirements.",
  },
];

export default function TempoTravellerFaq() {
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
            Tempo Traveller FAQs
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            12 Seater Tempo Traveller Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Everything you need to know before booking a 12 seater Tempo
            Traveller.
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