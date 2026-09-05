"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

interface TempoTravellerFaqProps {
  title?: string;
  subtitle?: string;
  faqs?: Faq[];
}

// Default generic FAQs for Tempo Traveller
const DEFAULT_FAQS: Faq[] = [
  {
    question: "What is the Tempo Traveller fare for my route?",
    answer:
      "Tempo Traveller fares depend on the route, number of passengers, vehicle seating capacity, and trip duration. We offer 9-seater, 12-seater, 16-seater, and larger options for local, one-way, and outstation trips. Contact us with your travel details for an exact quote.",
  },
  {
    question: "How many people can travel in a Tempo Traveller?",
    answer:
      "Our Tempo Travellers are available in various seating capacities, including 9-seater, 12-seater, 16-seater, and 20-seater options. You can choose the vehicle that best fits your group size and luggage requirements.",
  },
  {
    question: "Are Tempo Travellers available for outstation trips?",
    answer:
      "Yes, absolutely. Tempo Travellers are ideal for outstation, one-way, and round-trip journeys. They are perfect for family vacations, group tours, weddings, religious trips, corporate travel, and sightseeing.",
  },
  {
    question: "Can I book a Tempo Traveller for a one-way trip?",
    answer:
      "Yes, one-way Tempo Traveller bookings are available on most routes. You can book a private vehicle for a one-way journey without being forced to book a complete round trip.",
  },
  {
    question: "What amenities are included in the Tempo Traveller?",
    answer:
      "All our Tempo Travellers are fully air-conditioned and come equipped with comfortable pushback reclining seats, a music system, individual reading lights, and charging points. Premium models may also include additional features.",
  },
];

export default function TempoTravellerFaqTaxi({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a Tempo Traveller for your group journey.",
  faqs,
}: TempoTravellerFaqProps) {
  const finalFaqs = faqs ?? DEFAULT_FAQS;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-gold">
            FAQs
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {finalFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-gold/40"
                    : "border-slate-200 hover:border-gold/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                   
                    {/* Question */}
                    <span className="text-base font-semibold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold" : ""
                    }`}
                  />
                </button>

               
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[4.5rem] text-[15px] leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
