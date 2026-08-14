"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is the Innova Crysta fare from Noida to Delhi?",
    answer:
      "The one-way Innova Crysta fare from Noida to Delhi starts at ₹2,799, while the round-trip fare starts at ₹5,000. The fare may vary depending on the pickup location, travel option and vehicle availability. Tolls, parking and applicable taxes are billed at actuals.",
  },
  {
    question: "How many passengers can travel in an Innova Crysta?",
    answer:
      "An Innova Crysta can comfortably accommodate up to 6 passengers with luggage. It is an ideal choice for families, small groups, business travel and airport transfers where extra space and comfort are important.",
  },
  {
    question: "How much luggage can fit in an Innova Crysta?",
    answer:
      "The Innova Crysta offers generous luggage space and can accommodate multiple large suitcases along with cabin bags. It is a better option than a sedan when you are travelling with a family or carrying extra luggage.",
  },
  {
    question: "Is Innova Crysta available for Noida to Delhi one-way trips?",
    answer:
      "Yes. Innova Crysta taxis are available for one-way trips from Noida to Delhi. You can book a private Innova Crysta for your family or group and travel directly from your pickup location to your destination.",
  },
  {
    question: "Is Innova Crysta suitable for family trips?",
    answer:
      "Yes, Innova Crysta is one of the best choices for family travel. It provides comfortable seating, spacious interiors, powerful AC and enough luggage space for a family travelling together.",
  },
  {
    question: "Can I book an Innova Crysta from Noida to Delhi Airport?",
    answer:
      "Yes. You can book an Innova Crysta for Noida to Delhi airport transfers. It is especially suitable for families and groups travelling with multiple suitcases. We recommend scheduling your pickup well in advance of your flight.",
  },
  {
    question: "What is the difference between a Sedan and Innova Crysta?",
    answer:
      "A Sedan is generally suitable for up to 4 passengers with moderate luggage, while an Innova Crysta offers more passenger space, better legroom and greater luggage capacity. For families or groups of 5–6 passengers, Innova Crysta is usually the more comfortable option.",
  },
  {
    question: "Is Innova Crysta available 24x7 from Noida to Delhi?",
    answer:
      "Yes. Innova Crysta taxis can be booked for early morning, daytime and late-night travel, subject to vehicle availability. You can contact us to check availability for your preferred pickup time.",
  },
  {
    question: "Can I request a specific Innova Crysta model?",
    answer:
      "Yes. You can request an Innova Crysta while making your booking. Vehicle allocation is subject to availability at the time of booking.",
  },
  {
    question: "Can I cancel or reschedule my Innova Crysta booking?",
    answer:
      "Yes. You can contact us to cancel or reschedule your booking. Cancellation and rescheduling terms may depend on how close the request is to the scheduled pickup time.",
  },
];

export default function InnovaCrystaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Innova Crysta FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Noida to Delhi Innova Crysta Taxi Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Everything you need to know about booking an Innova Crysta taxi
            from Noida to Delhi for family trips, airport transfers and group
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
                  isOpen
                    ? "border-gold/40 shadow-md"
                    : "border-slate-200"
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

        {/* ===== Bottom CTA ===== */}
        <div className="mt-8 text-center sm:mt-10">
          <p className="text-sm text-slate-600">
            Need an Innova Crysta for your Noida to Delhi trip?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Innova Crysta
          </a>
        </div>
      </div>
    </section>
  );
}