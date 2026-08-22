"use client";

import { useState } from "react";

interface SixteenFaqProps {
  from: string;
  to: string;
}



export default function SixteenSeaterTempoFaq({
  from,
  to,
}: SixteenFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

 const FAQS = [
  {
    question: `What is the fare for a 16 seater Tempo Traveller from ${from} to ${to}?`,
    answer: `The 16 seater Tempo Traveller one-way fare from ${from} to ${to} starts from ₹5,500. The final fare depends on the travel date, pickup location, drop location and trip requirements.`,
  },
  {
    question: `How many passengers can travel in a 16 seater Tempo Traveller from ${from} to ${to}?`,
    answer: `A 16 seater Tempo Traveller is designed for up to 16 passengers and is suitable for family groups, corporate teams, wedding groups and tours travelling from ${from} to ${to}.`,
  },
  {
    question: `Is the 16 seater Tempo Traveller air conditioned for travel from ${from} to ${to}?`,
    answer: `Yes. AC 16 seater Tempo Travellers are available for comfortable group travel from ${from} to ${to}. Exact vehicle features can vary depending on the vehicle assigned.`,
  },
  {
    question: `Can I book a 16 seater Tempo Traveller for one-way travel from ${from} to ${to}?`,
    answer: `Yes. You can book a private 16 seater Tempo Traveller for a one-way journey from ${from} to ${to}, subject to availability.`,
  },
  {
    question: `Is a 16 seater Tempo Traveller good for family trips from ${from} to ${to}?`,
    answer: `Yes. It is a convenient option for large families travelling from ${from} to ${to} because everyone can travel together in one private vehicle.`,
  },
  {
    question: `Can I book a 16 seater Tempo Traveller from ${from} to ${to} Airport?`,
    answer: `Yes. You can book a 16 seater Tempo Traveller for group airport transfers from ${from} to ${to} Airport, subject to vehicle availability and trip requirements.`,
  },
  {
    question: `Can I use the 16 seater Tempo Traveller for outstation trips from ${from} to ${to}?`,
    answer: `Yes. A 16 seater Tempo Traveller is suitable for outstation group travel from ${from} to ${to} and other destinations such as Agra, Jaipur, Haridwar and Rishikesh.`,
  },
  {
    question: `Does the 16 seater Tempo Traveller have luggage space for travel from ${from} to ${to}?`,
    answer: `Yes. The vehicle provides luggage space for passengers travelling from ${from} to ${to}, although the exact luggage capacity depends on the specific vehicle configuration and the amount of passenger luggage.`,
  },
  {
    question: `Is the 16 seater Tempo Traveller fare from ${from} to ${to} charged per person?`,
    answer: `The booking is generally charged for the complete private vehicle rather than per passenger. Final pricing for travel from ${from} to ${to} depends on the route and trip requirements.`,
  },
];

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
    <section className="bg-white py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            16 Seater Tempo Traveller FAQs
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            {from} to {to} 16 Seater Tempo Traveller FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Common questions about booking a 16 seater Tempo Traveller.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm sm:rounded-2xl ${
                  isOpen ? "border-gold/40" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
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
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600 sm:px-6 sm:py-5">
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
