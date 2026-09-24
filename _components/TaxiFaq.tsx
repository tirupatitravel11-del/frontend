"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface TaxiFaqProps {
  title?: string;
  subtitle?: string;
  city?: string;
  from?: string;
  to?: string;
}

const formatLocation = (city?: string, from?: string, to?: string) => {
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
    const loc = `${fromCap} to ${toCap}`;
    return {
      titleText: loc,
      qCost: `How much does a ${loc} Taxi cost?`,
      aCost: `Taxi fares from ${fromCap} to ${toCap} start from ₹9/km depending on your choice of Hatchback, Sedan, or SUV. Quotes include fuel, driver allowance, and AC upfront. Tolls and parking are billed at actuals.`,
      qBook: `How can I book a ${loc} Taxi?`,
      aBook: `You can book your ${loc} cab online or over a call. Select your vehicle type, confirm pickup details, and choose one-way drop or round trip. Driver and vehicle details arrive before pickup.`,
      qTime: `How long does a ${loc} Taxi take?`,
      aTime: `Travel time from ${fromCap} to ${toCap} depends on your pickup point and traffic conditions. Our experienced drivers plan optimal routes to ensure a quick and smooth ride.`,
      qPass: `How many passengers can travel in a ${loc} Taxi?`,
      aPass: `Hatchbacks & Sedans comfortably accommodate up to 4 passengers, while SUVs (Ertiga / Innova) seat 6 to 7 passengers with generous boot space for luggage.`,
      qToll: `Does ${loc} Taxi fare include toll and parking?`,
      aToll: `Tolls and parking fees are charged at actuals and listed in your booking breakdown. Driver allowance, fuel, and AC costs are fully included upfront.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap || "your city";
  return {
    titleText: cityCap,
    qCost: `How much does a ${cityCap} Taxi cost?`,
    aCost: `Taxi fares in ${cityCap} start from ₹9/km depending on the car type chosen (Hatchback, Sedan, or SUV). All quotes include fuel, driver allowance, and AC upfront, with no hidden surge fees.`,
    qBook: `How can I book a ${cityCap} Taxi?`,
    aBook: `Booking a cab in ${cityCap} takes just a few steps online or via phone. Enter your pickup location, trip type (local/outstation), travel time, and select your preferred cab.`,
    qTime: `How long does a ${cityCap} Taxi take?`,
    aTime: `Duration depends on your pickup sector and traffic in ${cityCap}. Drivers navigate around busy corridors to take the fastest available path.`,
    qPass: `How many passengers can travel in a ${cityCap} Taxi?`,
    aPass: `4 passengers fit comfortably in Hatchbacks and Sedans, while SUVs seat 6 to 7 passengers with extra space for luggage.`,
    qToll: `Does ${cityCap} Taxi fare include toll and parking?`,
    aToll: `Toll and parking charges are listed upfront as part of your fare breakdown, billed at actuals. Fuel and driver allowances are included in the base quote.`,
  };
};

export default function TaxiFaq({
  title,
  subtitle,
  city,
  from,
  to,
}: TaxiFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const loc = formatLocation(city, from, to);

  const FAQS = [
    { question: loc.qCost, answer: loc.aCost },
    { question: loc.qBook, answer: loc.aBook },
    { question: loc.qTime, answer: loc.aTime },
    { question: loc.qPass, answer: loc.aPass },
    { question: loc.qToll, answer: loc.aToll },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* FAQ Schema for Google (SEO) */
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
    <section className="bg-slate-50 py-12 sm:py-16" id="faq">
      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Taxi FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${loc.titleText} Taxi Questions, Answered`}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle ||
              `Everything you need to know about booking a taxi for ${loc.titleText}, including fares, timing, passenger capacity, and tolls.`}
          </p>
        </div>

        {/* ===== Accordion ===== */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 sm:rounded-2xl ${
                  isOpen ? "border-gold/40 shadow-md" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="min-w-0 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
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
                  <div className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600 sm:px-6 sm:py-5 sm:text-[15px] sm:leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ===== Bottom CTA ===== */}
        <div className="mt-8 text-center sm:mt-10">
          <p className="text-sm text-slate-600">
            Need a cab for your {loc.titleText} journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Taxi
          </a>
        </div>
      </div>
    </section>
  );
}
