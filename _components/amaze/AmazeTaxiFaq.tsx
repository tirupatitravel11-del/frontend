"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface AmazeTaxiFaqProps {
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
      qCost: `How much does a ${loc} Amaze Taxi cost?`,
      aCost: `Pricing for the Amaze taxi from ${fromCap} to ${toCap} follows a straightforward per-km rate, with toll and driver allowance shown separately at the time of booking. There's no surge pricing added on top, so the number you see before confirming is the number you pay once the trip ends.`,
      qBook: `How can I book a ${loc} Amaze Taxi?`,
      aBook: `You can book your ${loc} Amaze cab online through our booking page, or call our team directly to confirm pickup details. Just share your pickup sector, drop location, and preferred time, and we'll assign a driver who knows the route well.`,
      qTime: `How long does a ${loc} Amaze Taxi take?`,
      aTime: `Travel time on this route depends on your pickup point and the hour you leave, since ${fromCap} to ${toCap} traffic tends to build up during peak hours. Our drivers plan around this and pick the fastest path available at that moment.`,
      qPass: `How many passengers can travel in a ${loc} Amaze Taxi?`,
      aPass: `The Amaze seats four passengers along with the driver, making it a solid pick for solo travellers, couples, or small families. If your group is larger or you're carrying extra luggage, our team can suggest a bigger vehicle instead.`,
      qToll: `Does ${loc} Amaze Taxi fare include toll and parking?`,
      aToll: `Toll charges are listed upfront as part of your ${loc} Amaze taxi fare, so there's nothing hidden once you're on the road. Parking, if applicable at your specific drop point, gets communicated at the time of booking rather than added as a surprise later.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap || "your city";
  return {
    titleText: cityCap,
    qCost: `How much does a ${cityCap} Amaze Taxi cost?`,
    aCost: `Pricing for the Amaze taxi in ${cityCap} follows a straightforward per-km rate, with toll and driver allowance shown separately at the time of booking. There's no surge pricing added on top, so the number you see before confirming is the number you pay once the trip ends.`,
    qBook: `How can I book a ${cityCap} Amaze Taxi?`,
    aBook: `You can book your ${cityCap} Amaze cab online through our booking page, or call our team directly to confirm pickup details. Just share your pickup sector, drop location, and preferred time, and we'll assign a driver who knows the route well.`,
    qTime: `How long does a ${cityCap} Amaze Taxi take?`,
    aTime: `Travel time on this route depends on your pickup point and the hour you leave, since traffic in ${cityCap} tends to build up during peak hours. Our drivers plan around this and pick the fastest path available at that moment.`,
    qPass: `How many passengers can travel in a ${cityCap} Amaze Taxi?`,
    aPass: `The Amaze seats four passengers along with the driver, making it a solid pick for solo travellers, couples, or small families. If your group is larger or you're carrying extra luggage, our team can suggest a bigger vehicle instead.`,
    qToll: `Does ${cityCap} Amaze Taxi fare include toll and parking?`,
    aToll: `Toll charges are listed upfront as part of your ${cityCap} Amaze taxi fare, so there's nothing hidden once you're on the road. Parking, if applicable at your specific drop point, gets communicated at the time of booking rather than added as a surprise later.`,
  };
};

export default function AmazeTaxiFaq({
  title,
  subtitle,
  city,
  from,
  to,
}: AmazeTaxiFaqProps) {
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
            Honda Amaze FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${loc.titleText} Amaze Taxi Questions, Answered`}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle ||
              `Everything you need to know about booking a Honda Amaze taxi for ${loc.titleText}, including fares, timing, passenger capacity, and tolls.`}
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
            Need a Honda Amaze for your {loc.titleText} journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Amaze
          </a>
        </div>
      </div>
    </section>
  );
}