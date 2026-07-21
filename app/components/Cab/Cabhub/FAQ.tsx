"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are toll charges included in the cab fare?",
    answer:
      "Toll charges, parking charges, state taxes, and other applicable permits may be charged separately depending on the route. Any additional charges are communicated upfront wherever applicable.",
  },
  {
    question: "What is the difference between a one-way and round-trip cab?",
    answer:
      "A one-way cab is suitable when you only need to travel from one city to another. A round-trip cab is ideal when you plan to return to your starting city using the same cab.",
  },
  {
    question: "Can I book a cab for a same-day return trip?",
    answer:
      "Yes. Same-day return trips are available on selected routes, subject to the distance, travel time, and vehicle availability. You can select the round-trip option while booking.",
  },
  {
    question: "Can I cancel my cab booking?",
    answer:
      "Yes, bookings can be cancelled according to the applicable cancellation policy. Cancellation charges may vary depending on how close the cancellation is to the scheduled pickup time.",
  },
  {
    question: "Will I receive a GST invoice for my cab booking?",
    answer:
      "Yes. A GST invoice can be provided for eligible bookings. Please provide the required billing details at the time of booking or contact our support team.",
  },
  {
    question: "Are the driver and cab verified?",
    answer:
      "Yes. We work with verified drivers and vehicles to provide a safe, reliable, and comfortable travel experience.",
  },
  {
    question: "Can I choose a specific vehicle type?",
    answer:
      "Yes. Depending on availability, you can choose from vehicle categories such as Sedan, SUV, Innova, Tempo Traveller, and Bus.",
  },
  {
    question: "What happens if my pickup location changes?",
    answer:
      "Please inform our support team as soon as possible. Pickup location changes may be accommodated depending on the new location and the booking conditions.",
  },
];

export default function CabFAQ() {
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
    <section className="bg-stone-50 py-24 ">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold ">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
            Cab Booking FAQs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Find answers to common questions about fares, toll charges,
            cancellations, invoices, and cab bookings.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-gold"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-stone-100 px-6 pb-6 pt-4">
                    <p className="leading-7 text-stone-600">{faq.answer}</p>
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
