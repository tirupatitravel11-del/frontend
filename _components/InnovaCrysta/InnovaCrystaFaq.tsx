"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface InnovaCrystaFaqProps {
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
      qCost: `How much does a ${loc} Innova Crysta Taxi cost?`,
      aCost: `Pricing for a Toyota Innova Crysta taxi from ${fromCap} to ${toCap} follows a transparent per-km rate (starting from ₹18/km for 6/7 seater variants). Tolls and parking are billed at actuals, with fuel and driver allowance included in your upfront fare quote.`,
      qBook: `How can I book a ${loc} Innova Crysta Taxi?`,
      aBook: `You can book your ${loc} Innova Crysta cab online through our website or by calling our support team directly. Share your pickup address, destination, travel time, and passenger count to confirm your booking instantly.`,
      qTime: `How long does a ${loc} Innova Crysta Taxi take?`,
      aTime: `Travel time from ${fromCap} to ${toCap} depends on pickup location and traffic flow. Our experienced chauffeurs monitor traffic and choose optimal routes to get you to your destination comfortably and on time.`,
      qPass: `How many passengers can travel in a ${loc} Innova Crysta Taxi?`,
      aPass: `Our Toyota Innova Crysta cabs comfortably seat up to 6 or 7 passengers (available in Captain seat or 7-seater bench configurations) with generous boot space for 3-4 large suitcases.`,
      qToll: `Does ${loc} Innova Crysta Taxi fare include toll and parking?`,
      aToll: `Tolls and parking fees are charged at actuals and listed transparently. Fuel, driver allowance, and AC charges are fully included upfront in your total quote.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap || "your city";
  return {
    titleText: cityCap,
    qCost: `How much does a ${cityCap} Innova Crysta Taxi cost?`,
    aCost: `Pricing for a Toyota Innova Crysta taxi in ${cityCap} follows a transparent per-km rate (starting from ₹18/km depending on variant). Tolls and parking are shown separately, and driver allowances, fuel, and AC costs are included upfront.`,
    qBook: `How can I book a ${cityCap} Innova Crysta Taxi?`,
    aBook: `You can book your ${cityCap} Innova Crysta cab online via our booking form or by calling our helpline. Provide your pickup location, journey details, and preferred seating layout, and we will dispatch a driver right away.`,
    qTime: `How long does a ${cityCap} Innova Crysta Taxi take?`,
    aTime: `Trip duration depends on your exact pickup point and traffic in ${cityCap}. Our professional chauffeurs select the best routes to avoid congestion and ensure a smooth ride.`,
    qPass: `How many passengers can travel in a ${cityCap} Innova Crysta Taxi?`,
    aPass: `Our Innova Crysta cabs accommodate 6 to 7 passengers plus driver comfortably, making them ideal for long-distance family trips, executive travel, and airport drops with heavy luggage.`,
    qToll: `Does ${cityCap} Innova Crysta Taxi fare include toll and parking?`,
    aToll: `Toll and parking charges are billed at actuals and specified in your booking summary. Fuel, AC, and driver allowances are included in your confirmed fare with no hidden fees.`,
  };
};

export default function InnovaCrystaFaq({
  title,
  subtitle,
  city,
  from,
  to,
}: InnovaCrystaFaqProps) {
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
            Innova Crysta FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${loc.titleText} Innova Crysta Taxi Questions, Answered`}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle ||
              `Everything you need to know about booking a Toyota Innova Crysta taxi for ${loc.titleText}, including fares, timing, passenger capacity, and tolls.`}
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
            Need an Innova Crysta for your {loc.titleText} journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Innova Crysta
          </a>
        </div>
      </div>
    </section>
  );
}