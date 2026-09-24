"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface ErtigaTaxiFaqProps {
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
      qCost: `How much does a ${loc} Ertiga Taxi cost?`,
      aCost: `Pricing depends on your choice of one way or round trip, plus toll and parking at actual. We give you the actuals upfront so there’s nothing hidden from you.`,
      qBook: `How can I book a ${loc} Ertiga Taxi?`,
      aBook: `Just call or WhatsApp us with your pickup point, date, and travel time. We'll confirm the vehicle, driver details, and fare for your ${loc} Ertiga taxi booking on the same call, for a one-way drop or a same-day return alike.`,
      qTime: `How long does a ${loc} Ertiga Taxi take?`,
      aTime: `Travel time on this route generally falls between 45 minutes and just over an hour, depending on your exact pickup point and traffic on main expressways. Our drivers track live conditions and pick the quickest path at the time of your trip.`,
      qPass: `How many passengers can travel in a ${loc} Ertiga Taxi?`,
      aPass: `The Ertiga seats six passengers plus the driver, with enough boot space for 3 to 4 medium bags. It's a solid pick for families or a small group heading from ${fromCap} to ${toCap} together, especially with extra luggage in tow.`,
      qToll: `Does ${loc} Ertiga Taxi fare include toll and parking?`,
      aToll: `No, toll and parking are charged at actual and shown separately from the base fare. Everything else, including driver allowance and fuel, is built into the quote you get when you book your ${loc} Ertiga cab.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap || "your city";
  return {
    titleText: cityCap,
    qCost: `How much does a ${cityCap} Ertiga Taxi cost?`,
    aCost: `Pricing depends on your choice of one way or round trip, plus toll and parking at actual. We give you the actuals upfront so there’s nothing hidden from you.`,
    qBook: `How can I book a ${cityCap} Ertiga Taxi?`,
    aBook: `Just call or WhatsApp us with your pickup point, date, and travel time. We'll confirm the vehicle, driver details, and fare for your ${cityCap} Ertiga taxi booking on the same call, for a one-way drop or a same-day return alike.`,
    qTime: `How long does a ${cityCap} Ertiga Taxi take?`,
    aTime: `Travel time on this route generally falls between 45 minutes and just over an hour, depending on your exact pickup location and traffic. Our drivers track live conditions and pick the quickest path at the time of your trip.`,
    qPass: `How many passengers can travel in a ${cityCap} Ertiga Taxi?`,
    aPass: `The Ertiga seats six passengers plus the driver, with enough boot space for 3 to 4 medium bags. It's a solid pick for families or a small group heading to their destination in ${cityCap} together, especially with extra luggage in tow.`,
    qToll: `Does ${cityCap} Ertiga Taxi fare include toll and parking?`,
    aToll: `No, toll and parking are charged at actual and shown separately from the base fare. Everything else, including driver allowance and fuel, is built into the quote you get when you book your ${cityCap} Ertiga cab.`,
  };
};

export default function ErtigaTaxiFaq({
  title,
  subtitle,
  city,
  from,
  to,
}: ErtigaTaxiFaqProps) {
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
            Ertiga FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${loc.titleText} Ertiga Taxi Questions, Answered`}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle ||
              `Everything you need to know about booking a Maruti Suzuki Ertiga taxi for ${loc.titleText}, including fares, timing, passenger capacity, and tolls.`}
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
            Need an Ertiga for your {loc.titleText} journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Ertiga
          </a>
        </div>
      </div>
    </section>
  );
}