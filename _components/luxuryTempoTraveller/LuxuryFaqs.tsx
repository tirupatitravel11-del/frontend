"use client";

import { useState } from "react";

interface LuxuryFaqProps {
  from: string;
  to: string;
}



export default function LuxuryTempoFaq({
  from,
  to,
}: LuxuryFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const FAQS = [
  {
    question: `What is the Luxury Tempo Traveller fare from ${from} to ${to}?`,
    answer: `Local day-tour fares start at ₹7,500 for the 12 seater, ₹8,500 for the 16 seater, ₹9,500 for the 20 seater and ₹11,000 for the 24 seater. Outstation trips from ${from} to ${to} are billed per km at ₹30–₹38/km depending on the model. Tolls, parking and state taxes are billed at actuals.`,
  },
  {
    question: `How many passengers can travel in a Luxury Tempo Traveller from ${from} to ${to}?`,
    answer: `We offer 12, 16, 20 and 24 seater options for travel from ${from} to ${to}, each with a +1 driver seat. Every model comes with Maharaja-style pusher seats, so each passenger gets a comfortable reclining seat with armrests.`,
  },
  {
    question: `What luxury features are included in the Luxury Tempo Traveller from ${from} to ${to}?`,
    answer: `Every Luxury Tempo Traveller includes reclining Maharaja pusher seats, powerful AC with individual vents, LED TV, premium music system, a mic for announcements, USB charging points and ambient LED lighting — all included in your fare at no extra cost.`,
  },
  {
    question: `Is the Luxury Tempo Traveller suitable for weddings from ${from} to ${to}?`,
    answer: `Yes. Our 20 and 24 seater Luxury Tempo Travellers are ideal for wedding groups, baraat and guest travel from ${from} to ${to}. We can also arrange decoration on request, and the driver stays with you according to your event schedule.`,
  },
  {
    question: `Can I book a Luxury Tempo Traveller from ${from} to ${to} for hill trips?`,
    answer: `Yes. Our Luxury Tempo Travellers can be booked for long-distance and hill journeys from ${from} to ${to}, subject to route requirements and vehicle availability. We can assist with travel planning and applicable permits for the journey.`,
  },
  {
    question: `How much luggage can a Luxury Tempo Traveller carry from ${from} to ${to}?`,
    answer: `Depending on the model, the rear boot can comfortably hold approximately 6–12 large suitcases along with cabin bags. This makes it a convenient option for group travel from ${from} to ${to}, allowing passengers and luggage to travel together.`,
  },
  {
    question: `Are tolls, parking and driver allowance included in the fare from ${from} to ${to}?`,
    answer: `Your fare generally includes fuel, AC and driver allowance for the trip. Tolls, parking, inter-state taxes and applicable permits may be charged separately at actuals and communicated during booking.`,
  },
  {
    question: `What is the driver night allowance for multi-day trips from ${from} to ${to}?`,
    answer: `For outstation trips from ${from} to ${to} that involve an overnight halt, a driver night allowance of ₹500–₹700 per day may apply depending on the vehicle model and trip requirements. The applicable charges are communicated at the time of booking.`,
  },
  {
    question: `Can we play our own music or use the mic during the trip from ${from} to ${to}?`,
    answer: `Yes. You can connect your phone to the music system via Bluetooth or USB, and the mic can be used for tours, family games or announcements during your journey from ${from} to ${to}.`,
  },
  {
    question: `How early should I book a Luxury Tempo Traveller from ${from} to ${to}?`,
    answer: `For weekday trips, booking at least 24 hours in advance is recommended. For weekends, wedding season and peak travel periods, booking 2–3 days or earlier is advisable because Luxury Tempo Traveller availability can be limited.`,
  },
];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* FAQ Schema for Google */
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
        {/* ===== Header ===== */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Luxury Tempo Traveller FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {from} to {to} Luxury Tempo Traveller Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Everything you need to know about booking a Luxury Tempo Traveller
            for weddings, pilgrimages, corporate events and group vacations.
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
                  isOpen ? "border-gold/40 shadow-md" : "border-slate-200"
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
