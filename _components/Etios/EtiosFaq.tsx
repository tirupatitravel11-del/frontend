"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface EtiosFaqProps {
  from?: string;
  to?: string;
  city?: string;
  title?: string;
  subtitle?: string;
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
      qCost: `How much does a ${loc} Etios Taxi cost?`,
      aCost: `Pricing for the ${loc} Etios cab is set on a per-km basis, confirmed with you at the time of booking so there's nothing added later. Family groups and solo commuters both get the same upfront rate, checked before the driver starts the trip.`,
      qBook: `How can I book a ${loc} Etios Taxi?`,
      aBook: `You can reserve your Etios taxi from ${fromCap} to ${toCap} over a call, on WhatsApp, or through online booking, whichever suits you. Give your pickup point, timing, and drop location, and we confirm the car and driver assignment right away.`,
      qTime: `How long does a ${loc} Etios Taxi take?`,
      aTime: `Travel time on this Etios cab from ${fromCap} to ${toCap} depends on traffic and your exact pickup point, but the drive usually falls within an hour under normal conditions. Drivers know which roads back up during peak hours and plan the quickest path accordingly.`,
      qPass: `How many passengers can travel in a ${loc} Etios Taxi?`,
      aPass: `The Toyota Etios seats up to four passengers, with space for two large bags and a cabin bag alongside them. It works well for small families, couples, or a pair of business travellers heading from ${fromCap} to ${toCap} together.`,
      qToll: `Does ${loc} Etios Taxi fare include toll and parking?`,
      aToll: `Toll charges are billed apart from the base per-km rate and shown to you separately, so the total stays clear from the start. Parking charges, where applicable, follow the same rule and get added only when incurred on the trip.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap || "your city";
  return {
    titleText: cityCap,
    qCost: `How much does a ${cityCap} Etios Taxi cost?`,
    aCost: `Pricing for the ${cityCap} Etios cab is set on a per-km basis, confirmed with you at the time of booking so there's nothing added later. Family groups and solo commuters both get the same upfront rate, checked before the driver starts the trip.`,
    qBook: `How can I book a ${cityCap} Etios Taxi?`,
    aBook: `You can reserve your Etios taxi in ${cityCap} over a call, on WhatsApp, or through online booking, whichever suits you. Give your pickup point, timing, and drop location, and we confirm the car and driver assignment right away.`,
    qTime: `How long does a ${cityCap} Etios Taxi take?`,
    aTime: `Travel time on this Etios cab in ${cityCap} depends on traffic and your exact pickup point, but the drive usually falls within an hour under normal conditions. Drivers know which roads back up during peak hours and plan the quickest path accordingly.`,
    qPass: `How many passengers can travel in a ${cityCap} Etios Taxi?`,
    aPass: `The Toyota Etios seats up to four passengers, with space for two large bags and a cabin bag alongside them. It works well for small families, couples, or a pair of business travellers heading to their destination together.`,
    qToll: `Does ${cityCap} Etios Taxi fare include toll and parking?`,
    aToll: `Toll charges are billed apart from the base per-km rate and shown to you separately, so the total stays clear from the start. Parking charges, where applicable, follow the same rule and get added only when incurred on the trip.`,
  };
};

export default function EtiosFaq({
  from,
  to,
  city,
  title,
  subtitle,
}: EtiosFaqProps) {
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

  /* FAQ Schema for Google */
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
            Etios FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${loc.titleText} Etios Taxi Questions, Answered`}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle ||
              `Everything you need to know about booking a Toyota Etios taxi for ${loc.titleText}, including fares, timing, passenger capacity, and tolls.`}
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
            Need a Toyota Etios for your {loc.titleText} journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Etios
          </a>
        </div>
      </div>
    </section>
  );
}
