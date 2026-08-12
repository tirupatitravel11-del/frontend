"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is the sedan fare from Noida to Delhi?",
    answer:
      "The one-way sedan fare from Noida to Delhi starts at ₹1,599 and round-trip at ₹2,699. This is a fixed, all-inclusive base fare covering fuel, driver allowance and AC for up to 40 km and 4 hours. Tolls and parking are billed at actuals.",
  },
  {
    question: "How much luggage fits in a sedan?",
    answer:
      "Our sedans comfortably fit 3 large suitcases plus cabin bags. The Swift Dzire has a 378-litre boot, the Hyundai Aura 402 litres, and the Honda Amaze leads with 420 litres — making sedans the perfect choice for airport drops.",
  },
  {
    question: "Which sedan models do you provide?",
    answer:
      "We provide Maruti Swift Dzire, Honda Amaze and Hyundai Aura — all air-conditioned, sanitized and well-maintained. You can request a specific model while booking, subject to availability.",
  },
  {
    question: "Is the sedan fare per person or per car?",
    answer:
      "Per car. Every sedan is a private cab for you and your group — up to 4 passengers. The fare stays the same whether 1 person or 4 people travel, so it's excellent value for families.",
  },
  {
    question: "Is a sedan suitable for Noida to IGI Airport drops?",
    answer:
      "Absolutely. A sedan fits 4 passengers plus 3 large bags, which covers most airport trips. We recommend booking at least 3 hours before your flight departure, and our drivers track terminal entry routes for T1, T2 and T3.",
  },
  {
    question: "What if more than 4 people are travelling?",
    answer:
      "For 5 or more passengers, we recommend upgrading to an SUV like the Ertiga or Innova Crysta, which seats 6–7 comfortably. Call us and we'll suggest the right cab for your group size and luggage.",
  },
  {
    question: "Are sedans available at night for Noida to Delhi trips?",
    answer:
      "Yes, our sedans are available 24×7, including early morning airport drops and late night returns. A flat night charge of ₹200 applies for trips between 10 PM and 6 AM.",
  },
  {
    question: "Can I cancel or reschedule my sedan booking?",
    answer:
      "Yes. Cancellation is free up to 2 hours before pickup, and rescheduling is always free with a simple call or WhatsApp message. Since there's no advance payment, you never lose money.",
  },
];

export default function SedanFaq() {
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
    <section className="bg-slate-50 py-16">
      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Sedan FAQs
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Sedan Taxi Questions, Answered
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Everything riders ask us about booking a sedan from Noida to Delhi.
          </p>
        </div>

        {/* ===== Accordion ===== */}
        <div className="space-y-4">
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
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">
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
                  <div className="border-t border-slate-200 px-6 py-5 text-[15px] leading-7 text-slate-600">
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
