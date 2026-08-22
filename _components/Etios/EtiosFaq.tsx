"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

interface EtiosFaqProps {
  from: string;
  to: string;
}



export default function EtiosFaq({
  from,
  to,
}: EtiosFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const FAQS = [
  {
    question: `What is the Etios taxi fare from ${from} to ${to}?`,
    answer: `The one-way Etios fare from ${from} to ${to} starts at ₹1,699, while the round-trip fare starts at ₹3,100. The fare may vary depending on the pickup location, travel option and vehicle availability. Tolls, parking and applicable taxes are billed at actuals.`,
  },
  {
    question: `How many passengers can travel in an Etios from ${from} to ${to}?`,
    answer: `An Etios can comfortably accommodate up to 4 passengers along with their luggage. It is an ideal choice for couples, small families, business travel and airport transfers from ${from} to ${to}, where a spacious sedan experience is preferred over a compact hatchback.`,
  },
  {
    question: `How much luggage can fit in an Etios for travel from ${from} to ${to}?`,
    answer: `The Etios features a massive 595-litre boot — one of the largest in its segment — and can comfortably accommodate 3–4 large suitcases along with cabin bags. It is a far better option than most sedans when you are travelling from ${from} to ${to} with heavy luggage.`,
  },
  {
    question: `Is Etios available for ${from} to ${to} one-way trips?`,
    answer: `Yes. Etios taxis are available for one-way trips from ${from} to ${to}. You can book a private Etios and travel directly from your pickup location to your destination at a very economical fare.`,
  },
  {
    question: `Is Etios suitable for family trips from ${from} to ${to}?`,
    answer: `Yes, the Etios is an excellent choice for small family travel from ${from} to ${to}. It provides comfortable seating for up to 4 members, a spacious rear cabin, a powerful AC and class-leading luggage space — all at a sedan-friendly fare.`,
  },
  {
    question: `Can I book an Etios from ${from} to ${to} Airport?`,
    answer: `Yes. You can book an Etios for ${from} to ${to} airport transfers. Thanks to its huge 595-litre boot, it is especially suitable for travellers carrying multiple suitcases. We recommend scheduling your pickup well in advance of your flight.`,
  },
  {
    question: `What is the difference between an Etios and a Swift Dzire for travel from ${from} to ${to}?`,
    answer: `Both are reliable sedans for up to 4 passengers, but the Etios offers a significantly larger boot of around 595 litres compared with around 378 litres in the Swift Dzire, along with more rear legroom. For airport trips and outstation drives from ${from} to ${to} with heavy luggage, the Etios is generally the more practical choice.`,
  },
  {
    question: `Is Etios available 24x7 from ${from} to ${to}?`,
    answer: `Yes. Etios taxis can be booked for early morning, daytime and late-night travel from ${from} to ${to}, subject to vehicle availability. You can contact us to check availability for your preferred pickup time.`,
  },
  {
    question: `Can I request a specific Etios model for travel from ${from} to ${to}?`,
    answer: `Yes. You can request a standard Toyota Etios sedan or an Etios Cross while making your booking for travel from ${from} to ${to}. Vehicle allocation is subject to availability at the time of booking.`,
  },
  {
    question: `Can I cancel or reschedule my Etios booking from ${from} to ${to}?`,
    answer: `Yes. You can contact us to cancel or reschedule your Etios booking from ${from} to ${to}. Cancellation and rescheduling terms may depend on how close the request is to the scheduled pickup time.`,
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
            Etios FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {from} to {to} Etios Taxi Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Everything you need to know about booking a Toyota Etios taxi from
            {from} to {to} for airport transfers, outstation trips and small
            family travel.
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
