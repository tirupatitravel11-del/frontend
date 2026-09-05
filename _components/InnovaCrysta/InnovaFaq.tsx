"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

interface InnovaCrystaFaqProps {
  title?: string;
  subtitle?: string;
}

export default function InnovaFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a premium Toyota Innova Crysta for your travel needs.",
}: InnovaCrystaFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      question: "What is the Innova Crysta rental fare?",
      answer:
        "The Innova Crysta fare depends on the distance, trip type (one-way or round-trip), and pickup location. Our base fares are transparent and include fuel and driver allowance. Tolls, parking, and applicable state taxes are charged at actuals.",
    },
    {
      question:
        "How many passengers can travel comfortably in an Innova Crysta?",
      answer:
        "An Innova Crysta can comfortably accommodate up to 6 or 7 passengers, depending on the configuration (Captain seats or standard bench). It is an ideal choice for families, small groups, and corporate travel where extra space and comfort are important.",
    },
    {
      question: "How much luggage can fit in an Innova Crysta?",
      answer:
        "The Innova Crysta offers generous boot space and can easily accommodate 3 to 4 large suitcases along with cabin bags. It is a significantly better option than a standard sedan when travelling with a family or carrying extra luggage.",
    },
    {
      question: "Is the Innova Crysta available for one-way drop trips?",
      answer:
        "Yes. We offer complete flexibility with both one-way drops and round-trip packages. You can book a private Innova Crysta for your family or group and travel directly from your pickup location to your final destination.",
    },
    {
      question: "Is the Innova Crysta suitable for long-distance family trips?",
      answer:
        "Absolutely. The Innova Crysta is widely considered one of the best vehicles for family travel. It provides comfortable reclining seats, spacious interiors, powerful rear AC vents, and a smooth suspension system for long journeys.",
    },
    {
      question: "Can I book an Innova Crysta for airport transfers?",
      answer:
        "Yes. The Innova Crysta is highly recommended for airport transfers, especially for families and groups travelling with multiple suitcases. We recommend scheduling your pickup well in advance of your flight to ensure a stress-free journey.",
    },
    {
      question: "What is the difference between a Sedan and an Innova Crysta?",
      answer:
        "A standard Sedan is generally suitable for up to 4 passengers with moderate luggage. The Innova Crysta offers significantly more passenger space, better legroom, superior suspension, and greater luggage capacity, making it the more comfortable option for 5–6+ passengers.",
    },
    {
      question: "Is Innova Crysta service available 24x7?",
      answer:
        "Yes. Innova Crysta taxis can be booked for early morning, daytime, and late-night travel, subject to vehicle availability. You can contact us to check real-time availability for your preferred pickup time.",
    },
    {
      question:
        "Can I request a specific Innova Crysta variant (6-seater vs 7-seater)?",
      answer:
        "Yes. You can specifically request a 6-seater (with dual captain seats) or a 7-seater variant while making your booking. Vehicle allocation is confirmed based on availability at the time of booking.",
    },
    {
      question: "Can I cancel or reschedule my Innova Crysta booking?",
      answer:
        "Yes. You can contact our support team to cancel or reschedule your booking. Please note that specific cancellation or modification terms may apply depending on how close the request is to the scheduled pickup time.",
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
            Innova Crysta FAQs
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
      </div>
    </section>
  );
}
