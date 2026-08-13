"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is the SUV taxi fare from Noida to Delhi?",
    answer:
      "The one-way SUV fare from Noida to Delhi starts at ₹1,800 for the Ertiga, ₹2,200 for the Innova and ₹2,800 for the Innova Crysta. Round-trip fares are ₹3,300, ₹4,000 and ₹5,000 respectively. These are fixed, all-inclusive base fares covering fuel, driver allowance and AC.",
  },
  {
    question: "How many passengers can travel in an SUV?",
    answer:
      "The Ertiga and Innova comfortably seat 6 passengers, while the Innova Crysta and Hycross accommodate 6–7 passengers. All models offer ample legroom and space for 4–5 large suitcases, making them ideal for group travel.",
  },
  {
    question: "Which SUV models do you provide?",
    answer:
      "We provide Maruti Suzuki Ertiga, Toyota Innova, Innova Crysta and Innova Hycross — all air-conditioned, sanitized and well-maintained. You can request a specific model while booking, subject to availability.",
  },
  {
    question: "How much luggage fits in an SUV?",
    answer:
      "Our SUVs offer generous boot space: Ertiga fits 3 large bags, Innova fits 4 bags, while Innova Crysta and Hycross accommodate 5 large suitcases. This is perfect for airport trips, weddings and outstation journeys with heavy luggage.",
  },
  {
    question: "Is an SUV suitable for outstation trips from Noida?",
    answer:
      "Absolutely. SUVs are the most popular choice for outstation trips to Agra, Jaipur, Haridwar and beyond. The high ride height, stable suspension and spacious interiors make long highway journeys comfortable for the whole group.",
  },
  {
    question: "Can I book an SUV for airport drops from Noida?",
    answer:
      "Yes. SUVs are ideal for airport transfers with groups or heavy luggage. You get one comfortable cab instead of splitting into multiple vehicles. We recommend booking at least 3 hours before your flight departure.",
  },
  {
    question: "What's the difference between Ertiga, Innova and Crysta?",
    answer:
      "The Ertiga is the most economical 6-seater. The Innova offers more space and comfort at a mid-range price. The Innova Crysta and Hycross are premium options with superior interiors, more luggage space and additional features — perfect for VIP travel and special occasions.",
  },
  {
    question: "Are SUVs available at night for Noida to Delhi trips?",
    answer:
      "Yes, our SUVs are available 24×7, including early morning airport drops and late night returns. A flat night charge of ₹200 applies for trips between 10 PM and 6 AM.",
  },
  {
    question: "Can I cancel or reschedule my SUV booking?",
    answer:
      "Yes. Cancellation is free up to 2 hours before pickup, and rescheduling is always free with a simple call or WhatsApp message. Since there's no advance payment, you never lose money.",
  },
];

export default function SuvFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Everything riders ask us about booking an SUV from Noida to Delhi.
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
