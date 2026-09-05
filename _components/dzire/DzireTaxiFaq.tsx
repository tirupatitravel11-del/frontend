"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

interface DzireFaqProps {
  title?: string;
  subtitle?: string;
}

export default function DzireTaxiFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a Maruti Suzuki Dzire for your travel needs.",
}: DzireFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      question: "What is the rental fare for a Maruti Suzuki Dzire?",
      answer: "The Dzire is one of the most budget-friendly sedans available for hire. Our fares are highly competitive and include fuel and driver allowance. Tolls, parking, and applicable state taxes are charged at actuals. It is an excellent choice for travelers looking for comfort without stretching their budget.",
    },
    {
      question: "How many passengers can travel comfortably in a Dzire?",
      answer: "A Maruti Suzuki Dzire is a 4+1 seater sedan, meaning it can comfortably accommodate 4 passengers along with the driver. It is ideal for couples, small families, and business travelers who prefer a private, quiet, and premium ride.",
    },
    {
      question: "How much luggage can fit in a Dzire?",
      answer: "The Dzire has a very spacious boot for a sedan and can comfortably hold 2 to 3 large suitcases along with cabin bags. It is perfect for weekend trips, corporate travel, and airport transfers with moderate luggage.",
    },
    {
      question: "What is the difference between a Dzire and an MPV like Ertiga or Innova?",
      answer: "The Dzire is a compact sedan suitable for up to 4 passengers, offering the best fuel efficiency, smoothest ride, and lowest fares. MPVs like the Ertiga or Innova offer 3 rows of seats (6 to 7 passengers) and are better suited for larger families or groups with heavy luggage.",
    },
    {
      question: "Is the Dzire available for one-way drop trips?",
      answer: "Yes. We offer complete flexibility with both one-way drops and round-trip packages. You can book a private Dzire and travel directly from your pickup location to your final destination without paying for a return journey.",
    },
    {
      question: "Is the Dzire suitable for long-distance travel?",
      answer: "Absolutely. The Dzire is widely loved for highway travel because of its excellent fuel mileage (often exceeding 24 km/l), smooth suspension, and comfortable cabin. It is a very popular choice for long-distance trips where both budget and comfort matter.",
    },
    {
      question: "Can I book a Dzire for airport transfers?",
      answer: "Yes. The Dzire is one of the most popular choices for airport transfers, especially for couples, solo travelers, or small families with moderate luggage. We recommend scheduling your pickup well in advance of your flight to ensure a stress-free journey.",
    },
    {
      question: "Is Dzire service available 24x7?",
      answer: "Yes. Dzire taxis can be booked for early morning, daytime, and late-night travel, subject to vehicle availability. You can contact us to check real-time availability for your preferred pickup time.",
    },
    {
      question: "Can I request a specific Dzire variant (VXI vs ZXI)?",
      answer: "Yes. You can specifically request a Dzire VXI (standard model) or a Dzire ZXI (top-end model with extra features like a touchscreen infotainment system, steering-mounted controls, and alloy wheels) while making your booking. Vehicle allocation is confirmed based on availability.",
    },
    {
      question: "Can I cancel or reschedule my Dzire booking?",
      answer: "Yes. You can contact our support team to cancel or reschedule your booking. Please note that specific cancellation or modification terms may apply depending on how close the request is to the scheduled pickup time.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* FAQ Schema for Google (SEO) */
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
            Dzire FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle}
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

        {/* ===== Bottom CTA ===== */}
        <div className="mt-8 text-center sm:mt-10">
          <p className="text-sm text-slate-600">
            Need a budget-friendly Dzire for your upcoming trip?
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