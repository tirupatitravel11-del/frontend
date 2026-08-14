"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is the starting fare for a sedan taxi?",
    answer:
      "The starting fare for a sedan taxi begins at ₹1,599 for one-way trips and ₹2,699 for round trips. Local packages are typically based on a 40 km and 4-hour limit. These are fixed, all-inclusive base fares covering fuel, driver allowance, and AC. Tolls and parking are billed at actuals.",
  },
  {
    question: "How much luggage fits in a sedan?",
    answer:
      "Our sedans comfortably fit 3 large suitcases plus cabin bags. The Swift Dzire has a 378-litre boot, the Hyundai Aura 402 litres, and the Honda Amaze leads with 420 litres — making sedans the perfect choice for airport drops and family trips.",
  },
  {
    question: "Which sedan models do you provide?",
    answer:
      "We provide Maruti Swift Dzire, Honda Amaze, and Hyundai Aura — all air-conditioned, sanitized, and well-maintained. You can request a specific model while booking, subject to availability.",
  },
  {
    question: "Is the sedan fare per person or per car?",
    answer:
      "Per car. Every sedan is a private cab for you and your group — up to 4 passengers. The fare stays the same whether 1 person or 4 people travel, so it's excellent value for families and couples.",
  },
  {
    question: "Is a sedan suitable for airport transfers?",
    answer:
      "Absolutely. A sedan fits up to 4 passengers plus 3 large bags, which covers most airport trips. We recommend booking at least 3 hours before your flight departure, and our drivers are well-versed with airport terminal entry routes.",
  },
  {
    question: "What if more than 4 people are travelling?",
    answer:
      "For 5 or more passengers, we recommend upgrading to an SUV like the Ertiga or Innova Crysta, which seats 6–7 comfortably. Call us and we'll suggest the right cab for your group size and luggage.",
  },
  {
    question: "Are sedans available at night for early morning or late-night trips?",
    answer:
      "Yes, our sedans are available 24×7, including early morning airport drops and late-night outstation returns. A standard night charge applies for trips starting or ending between 10 PM and 6 AM.",
  },
  {
    question: "Can I cancel or reschedule my sedan booking?",
    answer:
      "Yes. Cancellation is free up to 2 hours before pickup, and rescheduling is always free with a simple call or WhatsApp message. Since there's no advance payment required, you never lose money.",
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
            Everything riders ask us about booking a sedan from Noida to Delhi.
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