"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

interface UrbaniaFaqProps {
  title?: string;
  subtitle?: string;
  city?: string;
  from?: string;
  to?: string;
}

const formatLocation = (city?: string, from?: string, to?: string): string => {
  const cap = (str?: string) =>
    str
      ? str
          .trim()
          .split(/[\s-]+/)
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(" ")
      : "";

  const fromCap = cap(from);
  const toCap = cap(to);
  if (fromCap && toCap) {
    return `${fromCap} to ${toCap}`;
  }
  const cityCap = cap(city) || fromCap || toCap;
  return cityCap || "your city";
};

export default function UrbaniaFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a premium Force Urbania for your travel needs.",
  city,
  from,
  to,
}: UrbaniaFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const locationName = formatLocation(city, from, to);

  const FAQS: Faq[] = [
    {
      question: `How much does ${locationName} Urbania Rental cost?`,
      answer: `Pricing works on a per kilometer basis, with the rate depending on which vehicle you pick, the 12 seater or the 17 seater. Toll, parking, and other applicable charges appear as separate line items, so the number you agree to over WhatsApp or a call matches what you pay at the end of the trip.`,
    },
    {
      question: `How many passengers can travel in a ${locationName} Urbania?`,
      answer: `You get a choice between two configurations. The smaller Urbania on rent seats up to 12 people, while the larger option holds up to 17, which works better for wedding groups or bigger corporate teams heading from ${locationName}.`,
    },
    {
      question: `Can I rent a ${locationName} Urbania for one way travel?`,
      answer: `Yes. If your group only needs to travel in a single direction, a one way Urbania booking means you pay for the distance covered without carrying the cost of the driver's return drive. This suits travelers who already have a separate plan for getting back.`,
    },
    {
      question: `Can I book a ${locationName} Urbania for airport transfer?`,
      answer: `Yes, Chiku Cab handles direct pickup and drop at major airports along with key railway stations. Drivers adjust pickup timing around flight or train delays so your group and luggage move together in one vehicle.`,
    },
    {
      question: `Does ${locationName} Urbania Rental include a driver?`,
      answer: `Every Urbania hire from Chiku Cab comes with an experienced driver who knows the expressways, highways, and local routes well enough to plan around peak hour congestion. There is no separate charge for the driver beyond what is already included in the fare you agree to.`,
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-14" id="faq">
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