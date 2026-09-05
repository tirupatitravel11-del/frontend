"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can we change the route or add stops during the trip?",
    answer:
      "Absolutely! Our sightseeing tours are flexible. If you want to spend more time at a location or add a new spot, just let your driver know. The fare is based on time/distance, so minor adjustments are completely fine.",
  },
  {
    question: "Are entry tickets to monuments or temples included in the price?",
    answer:
      "No, the cab fare covers transportation, driver allowance, and fuel. Entry tickets, camera fees, and boat rides (if any) are to be paid directly by you at the venue. Your driver will happily guide you to the ticket counters.",
  },
  {
    question: "What happens if we exceed the hourly limit of our package?",
    answer:
      "Our half-day and full-day packages have a set hourly limit (e.g., 4 hours or 8 hours). If you exceed this, a nominal hourly extension charge will apply. Your driver will inform you in advance so there are no surprises.",
  },
  {
    question: "Do you provide drivers who can act as local guides?",
    answer:
      "Yes! Our drivers are locals who know the city inside out. While they are primarily chauffeurs, they are happy to share historical facts, recommend the best local food spots, and suggest the most efficient routes.",
  },
  {
    question: "Is there a waiting charge if we go inside a temple or monument?",
    answer:
      "No, waiting time at sightseeing spots is completely free and included in your package. The driver will wait for you in the designated parking area until you are ready to move to the next location.",
  },
  {
    question: "Can we book a cab for multiple consecutive days?",
    answer:
      "Yes, we offer multi-day sightseeing packages at discounted rates. The vehicle will be at your disposal for the entire duration of your stay. Just let us know your itinerary!",
  },
];

export default function SightseeingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Sightseeing Questions
          </h2>
          <p className="mt-4 text-base text-stone-600 md:text-lg">
            Everything you need to know before you explore.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-stone-200 bg-stone-50 transition-all hover:border-gold/30 hover:bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-stone-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-stone-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}