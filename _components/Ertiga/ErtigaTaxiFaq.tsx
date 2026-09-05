"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

interface ErtigaFaqProps {
  title?: string;
  subtitle?: string;
}

export default function ErtigaTaxiFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a Maruti Suzuki Ertiga for your travel needs.",
}: ErtigaFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      question: "What is the rental fare for a Maruti Suzuki Ertiga?",
      answer: "The Ertiga fare depends on the distance, trip type (one-way or round-trip), and pickup location. As a highly fuel-efficient MPV, our Ertiga base fares are very competitive and include fuel and driver allowance. Tolls, parking, and applicable state taxes are charged at actuals.",
    },
    {
      question: "How many passengers can travel comfortably in an Ertiga?",
      answer: "A Maruti Suzuki Ertiga can comfortably accommodate up to 6 or 7 passengers. It is an excellent, budget-friendly choice for small families, weekend getaways, and small group travel where a standard sedan would be too cramped.",
    },
    {
      question: "How much luggage can fit in an Ertiga?",
      answer: "The Ertiga offers decent boot space and can comfortably accommodate 2 to 3 large suitcases along with a few cabin bags. If you are traveling with 6-7 people and heavy luggage, we recommend upgrading to an Innova Crysta for extra boot space.",
    },
    {
      question: "What is the difference between a Sedan and an Ertiga?",
      answer: "A standard Sedan (like a Dzire or Etios) is suitable for up to 4 passengers with moderate luggage. The Ertiga is an MPV that offers a third row of seats, accommodating up to 7 passengers, making it much more versatile for families while remaining highly fuel-efficient.",
    },
    {
      question: "Is the Ertiga available for one-way drop trips?",
      answer: "Yes. We offer complete flexibility with both one-way drops and round-trip packages. You can book a private Ertiga and travel directly from your pickup location to your final destination without paying for a return journey.",
    },
    {
      question: "Is the Ertiga suitable for long-distance family trips?",
      answer: "Absolutely. The Ertiga is widely loved for highway travel because of its excellent mileage, smooth suspension, and spacious cabin. It is a very popular and comfortable choice for long-distance family road trips.",
    },
    {
      question: "Can I book an Ertiga for airport transfers?",
      answer: "Yes. The Ertiga is a great option for airport transfers for small families or groups of up to 5 people with moderate luggage. We recommend scheduling your pickup well in advance of your flight to ensure a stress-free journey.",
    },
    {
      question: "Is the Ertiga service available 24x7?",
      answer: "Yes. Ertiga taxis can be booked for early morning, daytime, and late-night travel, subject to vehicle availability. You can contact us to check real-time availability for your preferred pickup time.",
    },
    {
      question: "Can I request a specific Ertiga variant (6-seater vs 7-seater)?",
      answer: "Yes. You can specifically request a 6-seater (with dual captain seats in the middle row) or a standard 7-seater variant while making your booking. Vehicle allocation is confirmed based on availability at the time of booking.",
    },
    {
      question: "Can I cancel or reschedule my Ertiga booking?",
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
            Ertiga FAQs
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