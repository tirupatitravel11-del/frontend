"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

interface UrbaniaFaqProps {
  from: string;
  to: string;
}



export default function UrbaniaFaq({
  from,
  to,
}: UrbaniaFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
const FAQS = [
  {
    question: `What is the starting rental fare for a Force Urbania from ${from} to ${to}?`,
    answer: `Force Urbania rental fares typically start from ₹3,500 for a 9-seater, ₹4,500 for a 12-seater, and ₹5,500 for a 17-seater for local full-day bookings. Outstation fares for ${from} to ${to} are calculated per kilometer or as a customized fixed package based on your route. All base fares include fuel, driver allowance and AC.`,
  },
  {
    question: `What makes the Force Urbania different from a Tempo Traveller for ${from} to ${to}?`,
    answer: `The Force Urbania is a premium luxury van built on a monocoque chassis, providing car-like safety, superior stability and a smoother ride compared to traditional ladder-frame Tempo Travellers. It also features plush pushback seats, individual AC vents and a quieter cabin for a comfortable journey from ${from} to ${to}.`,
  },
  {
    question: `How many passengers can travel in a Force Urbania from ${from} to ${to}?`,
    answer: `We offer multiple configurations to suit your group size, including 9+1, 12+1, 13+1, 16+1 and 17+1 seaters. Whether you are travelling with a small family or a large group from ${from} to ${to}, you can choose the seating layout that best suits your requirements.`,
  },
  {
    question: `Is there enough luggage space in a Force Urbania for travel from ${from} to ${to}?`,
    answer: `Yes. Depending on the seating configuration, our Urbania vans can comfortably accommodate multiple large suitcases. The 1x1 seating layouts offer dedicated rear luggage space, making them suitable for airport transfers and multi-day outstation trips from ${from} to ${to}.`,
  },
  {
    question: `Are the Force Urbania vans fully air-conditioned for travel from ${from} to ${to}?`,
    answer: `Absolutely. All our Force Urbania vans are equipped with powerful AC systems featuring individual overhead AC vents and reading lights for passengers, ensuring comfortable travel throughout the journey from ${from} to ${to}.`,
  },
  {
    question: `Can I book a Force Urbania from ${from} to ${to} for wedding functions or corporate events?`,
    answer: `Yes. Force Urbania is a popular choice for weddings and corporate travel. Its premium interior, professional chauffeur and spacious seating make it suitable for transporting VIP guests, family members and corporate teams from ${from} to ${to}.`,
  },
  {
    question: `Is the Force Urbania suitable for long outstation trips from ${from} to ${to}?`,
    answer: `Yes. The Force Urbania is well suited for long highway journeys from ${from} to ${to}. Its comfortable pushback recliner seats, spacious legroom and smooth ride make it a practical choice for long-distance travel, family vacations and pilgrimage tours.`,
  },
  {
    question: `Are Force Urbania rentals available for local sightseeing tours from ${from} to ${to}?`,
    answer: `Yes. We offer local sightseeing and city tour packages for groups travelling from ${from} to ${to}. It is an excellent option for large families and groups who want to travel together comfortably instead of coordinating multiple cabs.`,
  },
  {
    question: `Can I cancel or reschedule my Force Urbania booking from ${from} to ${to}?`,
    answer: `Yes. You can contact us to cancel or reschedule your Force Urbania booking from ${from} to ${to}. Cancellation and rescheduling conditions may depend on how close the request is to the scheduled pickup time and vehicle availability.`,
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
