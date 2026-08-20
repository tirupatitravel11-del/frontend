"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question:
      "What is the fare for a 24 seater Tempo Traveller from Noida to Delhi?",
    answer:
      "The 24 seater Tempo Traveller fare from Noida to Delhi starts from around ₹7,500 for one-way travel. The final fare depends on the travel date, pickup location, drop location and trip requirements.",
  },
  {
    question:
      "How many passengers can travel in a 24 seater Tempo Traveller?",
    answer:
      "A 24 seater Tempo Traveller is designed for up to 24 passengers and is suitable for large families, wedding groups, corporate teams and group tours.",
  },
  {
    question:
      "Is the 24 seater Tempo Traveller suitable for family trips?",
    answer:
      "Yes. It is especially useful for large families who want to travel together in one private vehicle instead of booking several cars.",
  },
  {
    question:
      "Is the 24 seater Tempo Traveller air conditioned?",
    answer:
      "AC 24 seater Tempo Travellers are available for comfortable group travel. Exact vehicle features may vary depending on the vehicle assigned.",
  },
  {
    question:
      "Can I book a 24 seater Tempo Traveller for a wedding?",
    answer:
      "Yes. A 24 seater Tempo Traveller is a convenient option for transporting wedding guests, family members and event groups.",
  },
  {
    question:
      "Can I book a 24 seater Tempo Traveller for Delhi Airport?",
    answer:
      "Yes. You can book a 24 seater Tempo Traveller for group airport transfers between Noida and Delhi Airport.",
  },
  {
    question:
      "Can I book a 24 seater Tempo Traveller for outstation trips?",
    answer:
      "Yes. The vehicle can be used for group trips to destinations such as Agra, Jaipur, Haridwar, Rishikesh and other outstation locations.",
  },
  {
    question:
      "Does the 24 seater Tempo Traveller have luggage space?",
    answer:
      "Yes. It provides luggage space suitable for group travel. Exact luggage capacity depends on the vehicle configuration and amount of luggage.",
  },
  {
    question:
      "Is the fare per person or for the complete vehicle?",
    answer:
      "The booking is generally for the complete private vehicle rather than per passenger. Final pricing depends on the route and trip requirements.",
  },
];

export default function TwentyFourSeaterTempoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            24 Seater Tempo Traveller FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Noida to Delhi 24 Seater Tempo Traveller FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything you need to know about booking a 24 seater Tempo
            Traveller.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 sm:rounded-2xl ${
                  isOpen
                    ? "border-gold/40"
                    : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
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
                      className={`h-4 w-4 transition-transform ${
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

        <div className="mt-8 text-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-gold/90"
          >
            Call for 24 Seater Booking
          </a>
        </div>
      </div>
    </section>
  );
}