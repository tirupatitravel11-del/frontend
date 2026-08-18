"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const PHONE_NUMBER = "+916390008503";

const FAQS: Faq[] = [
  {
    question: "What is the taxi fare from Noida to Delhi?",
    answer:
      "Taxi fares from Noida to Delhi start at ₹1,299 for a hatchback (WagonR, Swift) for a one-way trip. Sedans start at ₹1,599 and SUVs at ₹2,299. All fares are fixed and include fuel and driver allowance. Toll and parking charges are billed at actuals.",
  },
  {
    question: "How much does a taxi from Noida to IGI Airport cost?",
    answer:
      "A taxi from Noida to IGI Airport (Terminal 1, 2 or 3) starts at ₹1,499 for a hatchback. The distance is around 30 km and travel time is 50–70 minutes depending on traffic. We recommend booking at least 3 hours before your flight departure.",
  },
  {
    question: "Can I book a one-way taxi from Noida to Delhi?",
    answer:
      "Yes. We offer both one-way and round-trip bookings. With one-way, you pay only the fixed one-way fare — no return charges. If you're coming back the same day, a round trip is usually more economical.",
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer:
      "No. Toll, parking and airport entry fees are not included and are charged at actuals. Everything else — fuel, driver allowance and AC — is included in the fixed fare.",
  },
  {
    question: "Is taxi service available at night from Noida to Delhi?",
    answer:
      "Yes, we operate 24×7, including early morning airport drops and late night arrivals. A flat night charge of ₹200 applies for trips between 10 PM and 6 AM.",
  },
  {
    question: "Do you cover all Noida sectors and Greater Noida?",
    answer:
      "Yes. We provide doorstep pickup from all sectors of Noida, Greater Noida and the Noida Expressway area, and drop anywhere in Delhi — including the airport, railway stations, hospitals and hotels.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "You can pay by cash or UPI (Google Pay, PhonePe, Paytm) after your trip. A GST invoice can be provided on request for business travel.",
  },
  {
    question: "How early should I book my taxi?",
    answer:
      "We recommend booking at least 3–4 hours in advance. For early morning airport drops, book the previous night. Need a cab urgently? Call us — we often have a driver nearby who can reach you quickly.",
  },
];

interface TaxiFaqProps {
  title?: string;
  subtitle?: string;
}

export default function TaxiFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a taxi from Noida to Delhi.",
  faqs
}: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
