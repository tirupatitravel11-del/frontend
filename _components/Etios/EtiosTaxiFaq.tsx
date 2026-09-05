"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

interface EtiosFaqProps {
  title?: string;
  subtitle?: string;
}

export default function EtiosTaxiFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a Toyota Etios for your travel needs.",
}: EtiosFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      question: "What is the rental fare for a Toyota Etios?",
      answer: "The Toyota Etios offers excellent value for money. Our fares are highly competitive and include fuel and driver allowance. Tolls, parking, and applicable state taxes are charged at actuals. It is a top choice for travelers seeking premium reliability at a budget-friendly price.",
    },
    {
      question: "How many passengers can travel comfortably in an Etios?",
      answer: "A Toyota Etios is a 4+1 seater sedan, meaning it can comfortably accommodate 4 passengers along with the driver. It is ideal for small families, couples, and business travelers who prefer a private, quiet, and smooth ride.",
    },
    {
      question: "How much luggage can fit in a Toyota Etios?",
      answer: "The Etios is famous for its exceptionally spacious 595-liter boot. It can comfortably hold 3 to 4 large suitcases along with cabin bags, offering significantly more luggage space than most other compact sedans in its category.",
    },
    {
      question: "What is the difference between a Toyota Etios and a Maruti Dzire?",
      answer: "Both are excellent 4+1 seater sedans. However, the Toyota Etios is widely preferred for its larger boot space, slightly more generous rear legroom, and a smoother, more planted ride quality on highways. The Dzire is known for slightly better fuel mileage.",
    },
    {
      question: "Is the Etios available for one-way drop trips?",
      answer: "Yes. We offer complete flexibility with both one-way drops and round-trip packages. You can book a private Etios and travel directly from your pickup location to your final destination without paying for a return journey.",
    },
    {
      question: "Is the Etios suitable for long-distance highway travel?",
      answer: "Absolutely. The Toyota Etios is highly regarded for long-distance travel due to its legendary engine reliability, smooth suspension, and stable highway cruising. It ensures a fatigue-free journey for you and your family.",
    },
    {
      question: "Can I book an Etios for airport transfers?",
      answer: "Yes. The Etios is one of the best choices for airport transfers, especially for travelers with multiple large suitcases, thanks to its massive boot space. We recommend scheduling your pickup well in advance of your flight.",
    },
    {
      question: "Is Etios taxi service available 24x7?",
      answer: "Yes. Etios taxis can be booked for early morning, daytime, and late-night travel, subject to vehicle availability. You can contact us to check real-time availability for your preferred pickup time.",
    },
    {
      question: "Can I cancel or reschedule my Etios booking?",
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
            Etios FAQs
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
            Need a reliable and spacious Etios for your upcoming trip?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Etios
          </a>
        </div>
      </div>
    </section>
  );
}