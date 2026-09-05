"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

interface UrbaniaFaqProps {
  title?: string;
  subtitle?: string;
}

export default function UrbaniaFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a premium Force Urbania for your travel needs.",
}: UrbaniaFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS: Faq[] = [
    {
      question: "What is a Force Urbania and who is it ideal for?",
      answer: "The Force Urbania is a premium luxury minivan designed for ultimate comfort. It is ideal for family vacations, corporate group travel, wedding processions, and outstation trips, offering a first-class travel experience compared to standard tempo travellers.",
    },
    {
      question: "How many passengers and bags can a Force Urbania accommodate?",
      answer: "Depending on the variant you choose, the Force Urbania comfortably seats 9, 12, 13, or 14 passengers. It also features a dedicated, spacious boot area that can easily accommodate 6 to 8 large suitcases along with hand luggage.",
    },
    {
      question: "What luxury amenities are included inside the vehicle?",
      answer: "The Urbania comes equipped with premium pushback reclining seats, individual AC vents for every row, ample legroom, mobile charging points, a smooth suspension system, and a well-maintained, hygienic interior.",
    },
    {
      question: "Are toll and parking charges included in the rental fare?",
      answer: "The quoted base fare includes the vehicle, fuel, driver allowance, and AC usage. However, toll taxes, parking fees, and any applicable state entry taxes are not included and are charged to the customer at actuals during the trip.",
    },
    {
      question: "Can I book a one-way drop or only round trips?",
      answer: "We offer complete flexibility. You can book a one-way drop, a round-trip package, or even a multi-day outstation rental based on your specific travel requirements.",
    },
    {
      question: "Is doorstep pickup and drop-off available?",
      answer: "Yes, we provide convenient doorstep pickup and drop-off. Our professional driver will arrive at your preferred location, whether it is your home, office, hotel, or the airport, at the scheduled time.",
    },
    {
      question: "How far in advance should I book a Force Urbania?",
      answer: "We recommend booking at least 2 to 3 days in advance. For weekends, public holidays, or peak wedding seasons, booking 1 to 2 weeks ahead is highly recommended to ensure the availability of your preferred seating configuration.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments via Cash, UPI, and online bank transfers. For corporate clients, we also provide GST invoices upon request. A small token advance may be required to confirm your booking.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-4xl px-6">
        {/* ===== Header ===== */}
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

        {/* ===== Accordion ===== */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
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