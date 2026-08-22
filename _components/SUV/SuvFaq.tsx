"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";


interface SuvFaqProps {
  from: string;
  to: string;
}



export default function SuvFaq({
  from,
  to,
}: SuvFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

 const FAQS = [
  {
    question: `What is the starting fare for an SUV taxi from ${from} to ${to}?`,
    answer: `The starting fare for an SUV taxi begins at ₹1,800 for the Ertiga, ₹2,200 for the Innova, and ₹2,800 for the Innova Crysta for local or one-way trips from ${from} to ${to}. Round-trip and outstation fares are calculated based on distance or as a fixed package. These are fixed, all-inclusive base fares covering fuel, driver allowance and AC.`,
  },
  {
    question: `How many passengers can travel in an SUV from ${from} to ${to}?`,
    answer: `The Ertiga and Innova comfortably seat 6 passengers, while the Innova Crysta and Hycross accommodate 6–7 passengers. All models offer ample legroom and space for luggage, making them ideal for family and group travel from ${from} to ${to}.`,
  },
  {
    question: `Which SUV models do you provide for travel from ${from} to ${to}?`,
    answer: `We provide Maruti Suzuki Ertiga, Toyota Innova, Innova Crysta and Innova Hycross — all air-conditioned and maintained for comfortable travel. You can request a specific model while booking from ${from} to ${to}, subject to availability.`,
  },
  {
    question: `How much luggage fits in an SUV for travel from ${from} to ${to}?`,
    answer: `Our SUVs offer generous luggage space. Ertiga can accommodate around 3 large bags, Innova around 4 bags, while Innova Crysta and Hycross can accommodate approximately 5 large suitcases, depending on passenger count and luggage size.`,
  },
  {
    question: `Is an SUV suitable for long outstation trips from ${from} to ${to}?`,
    answer: `Absolutely. SUVs are a popular choice for outstation trips from ${from} to ${to}. Their higher ride height, stable suspension and spacious interiors make long highway journeys more comfortable for families and groups.`,
  },
  {
    question: `Can I book an SUV for airport transfers from ${from} to ${to}?`,
    answer: `Yes. SUVs are ideal for airport transfers from ${from} to ${to}, especially for groups or passengers travelling with heavy luggage. You can travel together in one comfortable vehicle instead of splitting into multiple cabs.`,
  },
  {
    question: `What's the difference between Ertiga, Innova and Crysta for travel from ${from} to ${to}?`,
    answer: `The Ertiga is an economical option for up to 6 passengers. The Innova offers additional space and comfort, while the Innova Crysta and Hycross are premium options with enhanced interiors, luggage space and features. The right choice depends on your group size, luggage and travel requirements from ${from} to ${to}.`,
  },
  {
    question: `Are SUVs available at night from ${from} to ${to}?`,
    answer: `Yes. SUVs can be booked for early morning, daytime and late-night travel from ${from} to ${to}, subject to vehicle availability. Any applicable night charges will be communicated during booking.`,
  },
  {
    question: `Can I cancel or reschedule my SUV booking from ${from} to ${to}?`,
    answer: `Yes. You can contact us to cancel or reschedule your SUV booking from ${from} to ${to}. Cancellation and rescheduling conditions may depend on how close the request is to the scheduled pickup time.`,
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
    <section className="bg-slate-50 py-10 sm:py-16">
      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            SUV FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            SUV Taxi Questions, Answered
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything riders ask us about booking an SUV from {from} to {to}.
          </p>
        </div>

        {/* ===== Accordion ===== */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen ? "border-gold/40" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
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
