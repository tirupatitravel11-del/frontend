"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

interface SedanFaqProps {
  from: string;
  to: string;
}



export default function SedanFaq({
  from,
  to,
}: SedanFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const FAQS = [
  {
    question: `What is the starting fare for a sedan taxi from ${from} to ${to}?`,
    answer: `The starting fare for a sedan taxi from ${from} to ${to} begins at ₹1,599 for one-way trips and ₹2,699 for round trips. Local packages are typically based on a 40 km and 4-hour limit. These are fixed, all-inclusive base fares covering fuel, driver allowance and AC. Tolls and parking are billed at actuals.`,
  },
  {
    question: `How much luggage fits in a sedan for travel from ${from} to ${to}?`,
    answer: `Our sedans can comfortably accommodate luggage along with passengers for travel from ${from} to ${to}. Actual luggage capacity depends on the sedan model and the size of your bags.`,
  },
  {
    question: `Which sedan models do you provide from ${from} to ${to}?`,
    answer: `We provide sedan options such as Maruti Swift Dzire, Honda Amaze and other available models. Vehicles are air-conditioned and maintained for comfortable travel from ${from} to ${to}. You can request a specific model while booking, subject to availability.`,
  },
  {
    question: `Is the sedan fare from ${from} to ${to} per person or per car?`,
    answer: `The sedan fare from ${from} to ${to} is charged per private car, not per person. A sedan can generally accommodate up to 4 passengers, and the fare is based on the vehicle booking rather than the number of passengers.`,
  },
  {
    question: `Is a sedan suitable for airport transfers from ${from} to ${to}?`,
    answer: `Yes. A sedan is suitable for airport transfers from ${from} to ${to}, especially for up to 4 passengers travelling with moderate luggage. We recommend booking your airport taxi in advance to ensure vehicle availability.`,
  },
  {
    question: `What if more than 4 people are travelling from ${from} to ${to}?`,
    answer: `For groups of more than 4 passengers travelling from ${from} to ${to}, we recommend choosing a larger vehicle such as an Ertiga or Innova Crysta. These vehicles provide additional seating and luggage space for families and groups.`,
  },
  {
    question: `Are sedan taxis available at night from ${from} to ${to}?`,
    answer: `Yes. Sedan taxis can be booked for early morning, daytime and late-night travel from ${from} to ${to}, subject to vehicle availability. Any applicable night charges will be communicated during booking.`,
  },
  {
    question: `Can I cancel or reschedule my sedan booking from ${from} to ${to}?`,
    answer: `Yes. You can contact us to cancel or reschedule your sedan booking from ${from} to ${to}. Cancellation and rescheduling conditions may depend on how close the request is to the scheduled pickup time.`,
  },
];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* FAQ schema for Google rich results */
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
      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Sedan FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Sedan Taxi Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Everything riders ask us about booking a sedan from {from} to {to}.
          </p>
        </div>

        {/* ===== Accordion ===== */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 sm:rounded-2xl ${
                  isOpen ? "border-gold/40" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="min-w-0 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600 sm:px-6 sm:py-5 sm:text-[15px] sm:leading-7">
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