"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const PHONE_NUMBER = "+916390008503";



interface TaxiFaqProps {
  title?: string;
  subtitle?: string;
}

export default function TaxiFaq({
  to,
  from,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a taxi from Noida to Delhi.",
  faqs
}: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS: Faq[] = [
  {
    question: `What is the taxi fare from ${from} to ${to}?`,
    answer: `Taxi fares from ${from} to ${to} start at ₹1,299 for a hatchback such as WagonR or Swift for a one-way trip. Sedans start at ₹1,599 and SUVs at ₹2,299. All fares are fixed and include fuel and driver allowance. Toll and parking charges are billed at actuals.`,
  },
  {
    question: `How much does a taxi from ${from} to ${to} Airport cost?`,
    answer: `A taxi from ${from} to ${to} Airport starts at ₹1,499 for a hatchback. The final fare and travel time may vary depending on the pickup location, destination, route and traffic conditions. We recommend booking your airport taxi well in advance of your flight departure.`,
  },
  {
    question: `Can I book a one-way taxi from ${from} to ${to}?`,
    answer: `Yes. We offer both one-way and round-trip taxi bookings from ${from} to ${to}. With a one-way trip, you pay only the applicable one-way fare without return charges. If you are returning the same day, a round trip may be a more economical option.`,
  },
  {
    question: `Are toll and parking charges included in the taxi fare from ${from} to ${to}?`,
    answer: `Toll, parking and applicable entry fees are generally not included in the base fare and are charged at actuals. Fuel, driver allowance and AC are included according to the selected booking and fare terms.`,
  },
  {
    question: `Is taxi service available at night from ${from} to ${to}?`,
    answer: `Yes, taxi service can be booked for early morning, daytime and late-night travel from ${from} to ${to}, subject to vehicle availability. Any applicable night charges will be communicated during booking.`,
  },
  {
    question: `Do you provide doorstep pickup from ${from} to ${to}?`,
    answer: `Yes. You can request pickup from your preferred location in ${from} and travel directly to your destination in ${to}. Pickup and drop availability may depend on the service area and booking requirements.`,
  },
  {
    question: `What payment methods do you accept for a taxi from ${from} to ${to}?`,
    answer: `You can generally pay by cash or UPI after your trip, depending on the booking arrangement. A GST invoice may also be available on request for eligible business travel bookings.`,
  },
  {
    question: `How early should I book my taxi from ${from} to ${to}?`,
    answer: `We recommend booking your taxi from ${from} to ${to} at least 3–4 hours in advance. For early morning travel, airport transfers, weekends or peak travel periods, booking earlier is recommended to ensure better vehicle availability.`,
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
