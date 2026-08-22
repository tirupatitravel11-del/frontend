"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

interface TempoTravellerFaqProps {
  from: string;
  to: string;
  title?: string;
  subtitle?: string;
  faqs?: Faq[];
}

export default function TempoTravellerFaq({
  from,
  to,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a Tempo Traveller for your group journey.",
  faqs,
}: TempoTravellerFaqProps) {
  const TEMPO_TRAVELLER_FAQS: Faq[] = [
    {
      question: `What is the Tempo Traveller fare from ${from} to ${to}?`,
      answer: `Tempo Traveller fares from ${from} to ${to} depend on the route, number of passengers, vehicle seating capacity and trip duration. We offer 9-seater, 12-seater, 16-seater and larger Tempo Travellers for local, one-way and outstation trips. Contact us with your travel details for the exact fare.`,
    },
    {
      question: `How many people can travel in a Tempo Traveller from ${from} to ${to}?`,
      answer: `Our Tempo Travellers are available in different seating capacities, including 9-seater, 12-seater, 16-seater and higher-capacity options. You can choose the vehicle according to your group size and luggage requirements for travel from ${from} to ${to}.`,
    },
    {
      question: `Is Tempo Traveller available for outstation trips from ${from} to ${to}?`,
      answer: `Yes. Tempo Travellers are available for outstation, one-way and round-trip journeys from ${from} to ${to}. They are ideal for family vacations, group tours, weddings, religious trips, corporate travel and sightseeing.`,
    },
    {
      question: `Can I book a Tempo Traveller for a one-way trip from ${from} to ${to}?`,
      answer: `Yes, one-way Tempo Traveller bookings are available on selected routes. You can book a private Tempo Traveller for a one-way journey from ${from} to ${to} instead of booking a complete round trip.`,
    },

    // ...rest of your FAQs
  ];

  const finalFaqs = faqs ?? TEMPO_TRAVELLER_FAQS;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            FAQs
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {finalFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen ? "border-gold/40" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">
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
                  <div className="border-t border-slate-200 px-6 py-5 text-[15px] leading-7 text-slate-600">
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
