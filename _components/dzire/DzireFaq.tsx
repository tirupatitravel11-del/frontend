"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is the Dzire taxi fare from Noida to Delhi?",
    answer:
      "The one-way Swift Dzire taxi fare from Noida to Delhi starts at ₹1,599, while the round-trip fare starts at ₹2,699. The final fare may vary depending on the pickup location, trip type and travel requirements. Tolls, parking and applicable taxes are billed at actuals.",
  },

  {
    question: "How many passengers can travel in a Swift Dzire?",
    answer:
      "A Maruti Suzuki Swift Dzire can comfortably accommodate up to 4 passengers. It is a good choice for couples, families and small groups travelling from Noida to Delhi.",
  },

  {
    question: "How much luggage can fit in a Swift Dzire?",
    answer:
      "Swift Dzire offers a spacious boot of around 378 litres and can comfortably carry around 2–3 large suitcases along with smaller cabin bags, depending on the luggage size.",
  },

  {
    question: "Is Swift Dzire available for one-way travel from Noida to Delhi?",
    answer:
      "Yes. You can book a private Swift Dzire for a one-way journey from Noida to Delhi. The cab can pick you up from your preferred location in Noida and drop you at your destination in Delhi.",
  },

  {
    question: "Can I book a Dzire from Noida to Delhi Airport?",
    answer:
      "Yes, Swift Dzire is suitable for Noida to Delhi airport transfers. It can accommodate up to 4 passengers with moderate luggage and is a practical choice for airport drops and pickups.",
  },

  {
    question: "Which Swift Dzire model do you provide?",
    answer:
      "We provide Maruti Suzuki Swift Dzire taxis that are air-conditioned, well-maintained and suitable for local, airport and outstation travel. Specific vehicle allocation is subject to availability.",
  },

  {
    question: "Is the Dzire taxi fare per person or per car?",
    answer:
      "The fare is charged per private car, not per person. Whether 1 passenger or up to 4 passengers travel, the base fare remains the same for the booked Swift Dzire.",
  },

  {
    question: "Is Swift Dzire available 24x7 from Noida to Delhi?",
    answer:
      "Swift Dzire taxis can be booked for early morning, daytime and late-night travel, subject to vehicle availability. Contact us to confirm your preferred pickup time.",
  },

  {
    question: "Is Swift Dzire suitable for family travel?",
    answer:
      "Yes. Swift Dzire is a practical option for small families travelling with up to 4 passengers. It offers comfortable seating, air conditioning and useful boot space for luggage.",
  },

  {
    question: "What if more than 4 people are travelling?",
    answer:
      "If more than 4 passengers are travelling, we recommend choosing a larger vehicle such as Ertiga or Innova Crysta. These vehicles provide additional seating and luggage space for families and groups.",
  },

  {
    question: "Can I request a Swift Dzire specifically while booking?",
    answer:
      "Yes. You can request a Swift Dzire while booking your Noida to Delhi taxi. Vehicle allocation depends on availability at the time of your journey.",
  },

  {
    question: "Can I cancel or reschedule my Dzire taxi booking?",
    answer:
      "Yes. You can contact us to cancel or reschedule your Swift Dzire booking. Cancellation and rescheduling conditions may depend on how close the request is to the scheduled pickup time.",
  },
];

export default function DzireFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ================= FAQ SCHEMA ================= */

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* ================= HEADER ================= */}

        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Swift Dzire FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Noida to Delhi Dzire Taxi Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Everything you need to know about booking a Swift Dzire taxi from
            Noida to Delhi, including fares, luggage, passengers and airport
            transfers.
          </p>
        </div>

        {/* ================= ACCORDION ================= */}

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 sm:rounded-2xl ${
                  isOpen
                    ? "border-gold/40 shadow-md"
                    : "border-slate-200"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="min-w-0 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  {/* Arrow */}
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

                {/* Answer */}
                {isOpen && (
                  <div className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600 sm:px-6 sm:py-5 sm:text-[15px] sm:leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-8 text-center sm:mt-10">
          <p className="text-sm text-slate-600">
            Need a Swift Dzire for your Noida to Delhi journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Dzire
          </a>
        </div>
      </div>
    </section>
  );
}