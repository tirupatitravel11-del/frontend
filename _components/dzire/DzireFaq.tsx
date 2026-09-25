"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface DzireFaqProps {
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
    return {
      titleText: `${fromCap} to ${toCap}`,
      qFare: `What is the ${fromCap} to ${toCap} Dzire taxi fare?`,
      aFare: `The prices its ${fromCap} to ${toCap} Dzire taxi fare with a full breakdown shared at the time of booking, covering base rate, distance charges, and any applicable toll. Call our team for the current rate before you confirm your ride.`,
      qBook: `How do I book a Dzire taxi from ${fromCap} to ${toCap}?`,
      aBook: `You can book a Dzire cab from ${fromCap} to ${toCap} through our website, or by calling our booking line directly. Share your pickup point and preferred time, and we'll confirm your driver and vehicle details within minutes.`,
      qTime: `How long does a taxi from ${fromCap} to ${toCap} take?`,
      aTime: `A ${fromCap} to ${toCap} Dzire taxi typically takes around 45 minutes to an hour, depending on the pickup sector and traffic on main routes and expressways. Peak hours can add extra time to your journey.`,
      qOneWay: `Can I book a one-way Dzire taxi from ${fromCap} to ${toCap}?`,
      aOneWay: `Yes, you can book a one-way Dzire taxi from ${fromCap} to ${toCap} with Tirupati Travels and pay only for the direction you travel, without covering a return fare. This works well if you need a single drop rather than a same-day round trip.`,
      qToll: `Are toll and parking charges included in the ${fromCap} to ${toCap} taxi fare?`,
      aToll: `Toll charges on the ${fromCap} to ${toCap} Dzire cab fare are listed separately at booking, so you know the full cost upfront. Parking charges, where applicable, are also communicated in advance rather than added as a surprise at drop-off.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap || "your city";
  return {
    titleText: cityCap,
    qFare: `What is the ${cityCap} Dzire taxi fare?`,
    aFare: `The prices its ${cityCap} Dzire taxi fare with a full breakdown shared at the time of booking, covering base rate, distance charges, and any applicable toll. Call our team for the current rate before you confirm your ride.`,
    qBook: `How do I book a Dzire taxi in ${cityCap}?`,
    aBook: `You can book a Dzire cab in ${cityCap} through our website, or by calling our booking line directly. Share your pickup point and preferred time, and we'll confirm your driver and vehicle details within minutes.`,
    qTime: `How long does a Dzire taxi ride in ${cityCap} take?`,
    aTime: `A Dzire taxi in ${cityCap} typically takes around 45 minutes to an hour, depending on the pickup location and traffic on main routes. Peak hours can add extra time to your journey.`,
    qOneWay: `Can I book a one-way Dzire taxi in ${cityCap}?`,
    aOneWay: `Yes, you can book a one-way Dzire taxi in ${cityCap} with Tirupati Travels and pay only for the direction you travel, without covering a return fare. This works well if you need a single drop rather than a same-day round trip.`,
    qToll: `Are toll and parking charges included in the ${cityCap} taxi fare?`,
    aToll: `Toll charges on the ${cityCap} Dzire cab fare are listed separately at booking, so you know the full cost upfront. Parking charges, where applicable, are also communicated in advance rather than added as a surprise at drop-off.`,
  };
};

export default function DzireFaq({
  from,
  to,
  city,
  title,
  subtitle,
}: DzireFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const loc = formatLocation(city, from, to);

  const FAQS = [
    { question: loc.qFare, answer: loc.aFare },
    { question: loc.qBook, answer: loc.aBook },
    { question: loc.qTime, answer: loc.aTime },
    { question: loc.qOneWay, answer: loc.aOneWay },
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
        {/* ================= HEADER ================= */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Swift Dzire FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${loc.titleText} Dzire Taxi Questions, Answered`}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle ||
              `Everything you need to know about booking a Swift Dzire taxi for ${loc.titleText}, including fares, timing, one-way travel, and tolls.`}
          </p>
        </div>

        {/* ================= ACCORDION ================= */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 sm:rounded-2xl ${isOpen ? "border-gold/40 shadow-md" : "border-slate-200"
                  }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="min-w-0 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
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
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="border-t border-slate-200 px-4 py-4 text-sm leading-6 text-slate-600 sm:px-6 sm:py-5 sm:text-[15px] sm:leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-8 text-center sm:mt-10">
          <p className="text-sm text-slate-600">
            Need a Swift Dzire for your {loc.titleText} journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Dzire
          </a>
        </div>
      </div>
    </section>
  );
}
