"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is included in the boat ride?",
    answer:
      "The boat ride generally includes the boat journey, comfortable seating, and a trained boatman. Life jackets are also provided for safety. Additional services may vary depending on the selected boat ride or location.",
  },
  {
    question: "Is the boat ride safe for families and children?",
    answer:
      "Yes. Boat rides are suitable for families, couples, and groups. Safety equipment such as life jackets is provided, and passengers are required to follow the safety instructions given by the boatman.",
  },
  {
    question: "Can I book a boat ride for couples?",
    answer:
      "Yes. Boat rides are a great option for couples looking for a peaceful and scenic experience. Depending on availability, private or suitable boat options may be available.",
  },
  {
    question: "Can I book a private boat?",
    answer:
      "Private boat options may be available depending on the destination and boat operator. Please contact our booking team to check availability and pricing for a private boat.",
  },
  {
    question: "How long does a boat ride usually last?",
    answer:
      "The duration depends on the selected boat ride and destination. Short sightseeing rides and longer experiences may be available. The exact duration will be communicated at the time of booking.",
  },
  {
    question: "Are life jackets provided during the boat ride?",
    answer:
      "Yes. Life jackets are provided for passengers as part of the safety arrangements. Passengers should wear them as instructed by the boatman or crew.",
  },
  {
    question: "Can I book a sunrise or sunset boat ride?",
    answer:
      "Yes. Sunrise and sunset boat rides may be available at selected destinations. These experiences are subject to operating hours, weather conditions, and availability.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "For safety reasons, boat rides may be delayed, rescheduled, or cancelled in case of unsuitable weather or unsafe water conditions. Our team will inform you about any changes whenever applicable.",
  },
  {
    question: "Can I cancel my boat ride booking?",
    answer:
      "Yes. Boat ride bookings can be cancelled according to the applicable cancellation policy. Cancellation charges may vary depending on the booking conditions and how close the cancellation is to the scheduled ride.",
  },
  {
    question: "Can I take photos during the boat ride?",
    answer:
      "Yes. You can take photos and enjoy the scenery during the boat ride, provided that you follow the safety instructions given by the boatman and crew.",
  },
];

export default function BoatFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-16 md:py-20">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-5xl">
            Boat Ride FAQs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            Find answers to common questions about boat rides, safety,
            bookings, private boats, timings, cancellations, and more.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 space-y-4 md:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`boat-faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-bold leading-6 text-stone-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <ChevronDown
                      size={20}
                      className={`text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`boat-faq-answer-${index}`}
                    className="border-t border-stone-100 px-5 pb-6 pt-4 sm:px-6"
                  >
                    <p className="text-sm leading-7 text-stone-600 sm:text-base">
                      {faq.answer}
                    </p>
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