"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is the starting rental fare for a Force Urbania?",
    answer:
      "Force Urbania rental fares typically start from ₹3,500 for a 9-seater, ₹4,500 for a 12-seater, and ₹5,500 for a 17-seater for local full-day bookings. Outstation fares are calculated per kilometer or as a customized fixed package based on your route. All base fares include fuel, driver allowance, and AC.",
  },
  {
    question: "What makes the Force Urbania different from a Tempo Traveller?",
    answer:
      "The Force Urbania is a premium luxury van built on a monocoque chassis, which provides car-like safety, superior stability, and a much smoother ride compared to traditional ladder-frame Tempo Travellers. It also features plush pushback seats, individual AC vents, and a quieter cabin for a first-class travel experience.",
  },
  {
    question: "How many passengers can travel in your Urbania vans?",
    answer:
      "We offer multiple configurations to suit your group size: 9+1, 12+1, 13+1, 16+1, and 17+1 seaters. Whether it's a small family outing or a large wedding guest transfer, we have the right seating layout (1x1 or 2x1) for you.",
  },
  {
    question: "Is there enough luggage space for a large group?",
    answer:
      "Yes. Depending on the seating configuration, our Urbania vans can comfortably accommodate 5 to 9 large suitcases. The 1x1 seating layouts offer dedicated rear luggage space, making them perfect for airport transfers and multi-day outstation trips with heavy bags.",
  },
  {
    question: "Are the Urbania vans fully air-conditioned?",
    answer:
      "Absolutely. All our Force Urbania vans are equipped with powerful, dual-AC systems featuring individual overhead AC vents and reading lights for every single passenger, ensuring personalized comfort throughout the journey.",
  },
  {
    question: "Can I book an Urbania for wedding functions or corporate events?",
    answer:
      "Yes, Urbania is our most requested vehicle for weddings and corporate travel. Its premium interior, professional chauffeur, and reliable punctuality make it the perfect choice for shuttling VIP guests, family members, or corporate teams between venues and hotels.",
  },
  {
    question: "Is the Urbania suitable for long outstation highway trips?",
    answer:
      "The Force Urbania is highly recommended for long highway journeys across the country. The superior suspension, high-back pushback recliner seats, and spacious legroom significantly reduce travel fatigue on long interstate drives or pilgrimage tours.",
  },
  {
    question: "Are Urbania rentals available for local city sightseeing tours?",
    answer:
      "Yes, we offer specialized local tour packages (usually 8 hours / 80 km). It’s an excellent way for large groups or joint families to explore the city comfortably together without the hassle of coordinating multiple cabs.",
  },
  {
    question: "Can I cancel or reschedule my Urbania booking?",
    answer:
      "Yes. Cancellations are free up to 24 hours before the scheduled pickup time for outstation and local tours. Rescheduling is always free of charge, subject to vehicle availability. Just reach out to us via call or WhatsApp.",
  },
];

export default function UrbaniaFaq() {
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
            Urbania FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Force Urbania Rental Questions, Answered
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything you need to know about booking a luxury Urbania van for
            your next group journey.
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
