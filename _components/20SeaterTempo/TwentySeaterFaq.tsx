"use client";

import { useState } from "react";

interface TwentyFaqProps {
  from: string;
  to: string;
}



export default function TwentySeaterFaq({
  from,
  to,
}: TwentyFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const FAQS = [
  {
    question: `What is the 20 Seater Tempo Traveller fare from ${from} to ${to}?`,
    answer: `The 20 Seater Luxury Tempo Traveller starts at ₹9,500 for local day tours and ₹35 per km for outstation trips from ${from} to ${to}. The fare includes fuel, AC and driver allowance. Tolls, parking and applicable state taxes are billed at actuals. For weddings and multi-day events, custom packages may be available.`,
  },
  {
    question: `How many passengers can travel in the 20 Seater Tempo Traveller from ${from} to ${to}?`,
    answer: `The 20 Seater Tempo Traveller comfortably accommodates up to 20 passengers plus 1 driver. It features a spacious seating layout with Maharaja-style pusher seats, making it suitable for weddings, family reunions and large group travel from ${from} to ${to}.`,
  },
  {
    question: `Is the 20 Seater Tempo Traveller suitable for wedding baraat and guest travel from ${from} to ${to}?`,
    answer: `Yes. The 20 Seater Tempo Traveller is a suitable option for wedding baraat, groom's processions and guest travel from ${from} to ${to}. Decoration may also be available on request, depending on the booking requirements.`,
  },
  {
    question: `What luxury features come with the 20 Seater Tempo Traveller from ${from} to ${to}?`,
    answer: `The 20 Seater Tempo Traveller includes Maharaja reclining pusher seats with armrests, powerful AC with individual vents, LED TV, a music system, USB charging points, ambient lighting and spacious luggage storage, making group travel from ${from} to ${to} more comfortable.`,
  },
  {
    question: `How much luggage can the 20 Seater Tempo Traveller carry from ${from} to ${to}?`,
    answer: `The 20 Seater Tempo Traveller has a spacious rear luggage area that can accommodate multiple large suitcases along with cabin bags. Actual luggage capacity may depend on the number of passengers and the size of the bags.`,
  },
  {
    question: `Can I book the 20 Seater Tempo Traveller from ${from} to ${to} for a hill trip?`,
    answer: `Yes. The 20 Seater Tempo Traveller can be booked for long-distance and hill journeys from ${from} to ${to}, subject to route conditions, permits and vehicle availability.`,
  },
  {
    question: `Are tolls, parking and driver allowance included in the fare from ${from} to ${to}?`,
    answer: `The fare generally includes fuel, AC and driver allowance according to the selected trip package. Tolls, parking fees, inter-state taxes and applicable permits may be charged separately at actuals and communicated during booking.`,
  },
  {
    question: `What is the driver night allowance for multi-day trips from ${from} to ${to}?`,
    answer: `For multi-day trips or events involving an overnight stay, a driver night allowance may apply depending on the vehicle, trip duration and travel requirements. The applicable charges are communicated at the time of booking.`,
  },
  {
    question: `Can we decorate the 20 Seater Tempo Traveller for a wedding from ${from} to ${to}?`,
    answer: `Yes. Wedding decoration for the 20 Seater Tempo Traveller may be available on request. Decoration options can include flowers, ribbons, lighting and themed arrangements depending on availability and your event requirements.`,
  },
  {
    question: `How early should I book the 20 Seater Tempo Traveller from ${from} to ${to}?`,
    answer: `For weddings, weekends, peak travel periods and special events, booking the 20 Seater Tempo Traveller several days in advance is recommended. For regular weekday travel from ${from} to ${to}, earlier booking helps ensure better vehicle availability.`,
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
            20 Seater FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            20 Seater Tempo Traveller Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Everything you need to know about booking the 20 Seater Luxury Tempo
            Traveller for weddings, baraat, corporate events and large group
            travel.
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