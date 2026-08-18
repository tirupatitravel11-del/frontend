"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

const FAQS = [
  {
    question: "What is the Honda Amaze taxi fare from Noida to Delhi?",
    answer:
      "The one-way Honda Amaze taxi fare from Noida to Delhi starts at ₹1,649 and the round-trip fare starts at ₹2,749. The final fare may vary depending on the pickup location, trip type and travel requirements.",
  },
  {
    question: "How many passengers can travel in a Honda Amaze?",
    answer:
      "Honda Amaze is a 5-seater sedan and is suitable for families, couples and small groups travelling from Noida to Delhi.",
  },
  {
    question: "How much luggage can fit in a Honda Amaze?",
    answer:
      "The current Honda Amaze has around 416 litres of boot space, making it suitable for several suitcases and cabin bags. Actual luggage capacity depends on the size and shape of the bags.",
  },
  {
    question: "Is Honda Amaze available for one-way travel from Noida to Delhi?",
    answer:
      "Yes. You can book a private Honda Amaze for a one-way journey from Noida to Delhi with pickup from your preferred location.",
  },
  {
    question: "Can I book a Honda Amaze from Noida to Delhi Airport?",
    answer:
      "Yes. Honda Amaze is suitable for Noida to Delhi airport transfers, especially for families and travellers carrying moderate luggage.",
  },
  {
    question: "Is Honda Amaze suitable for family travel?",
    answer:
      "Yes. Honda Amaze is a practical family taxi because it provides five seats, air conditioning and generous boot space for luggage.",
  },
  {
    question: "Is the Honda Amaze taxi fare per person or per car?",
    answer:
      "The taxi fare is charged per private car rather than per person. The same base fare applies whether one passenger or a full group travels within the vehicle's seating capacity.",
  },
  {
    question: "Is Honda Amaze available 24x7 from Noida to Delhi?",
    answer:
      "Honda Amaze taxis can be booked for early morning, daytime and late-night travel, subject to vehicle availability.",
  },
  {
    question: "What if more than 5 people are travelling?",
    answer:
      "For groups larger than 5 passengers, we recommend choosing an Ertiga, Innova Crysta or Tempo Traveller depending on the number of passengers and luggage.",
  },
  {
    question: "Can I request Honda Amaze specifically while booking?",
    answer:
      "Yes. You can request a Honda Amaze while booking your Noida to Delhi taxi. Vehicle allocation is subject to availability at the time of travel.",
  },
];

export default function AmazeFaq() {
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
    <section className="bg-slate-50 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Honda Amaze FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Noida to Delhi Amaze Taxi Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Everything you need to know about booking a Honda Amaze taxi from
            Noida to Delhi.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm ${
                  isOpen ? "border-gold/40" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
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

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Need a Honda Amaze for your Noida to Delhi journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md hover:bg-gold/90"
          >
            Call & Book Amaze
          </a>
        </div>
      </div>
    </section>
  );
}