"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface LuxuryTaxiFaqsProps {
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
      qCost: `How much does a ${loc} Luxury Tempo Traveller cost?`,
      aCost: `Pricing depends on seater capacity and vehicle type, calculated on a per-kilometer basis for the route. Toll, parking, and driver charges are billed separately and shown upfront before you confirm. Call us or check availability on the app for an exact quote tied to your travel dates and group size.`,
      qBook: `How do I book a Luxury Tempo Traveller from ${fromCap} to ${toCap}?`,
      aBook: `Reach out through our booking line or WhatsApp with your travel date, group size, and pickup point. We confirm the seater option that matches your headcount and send the fare breakdown before you finalize anything. Corporate and wedding bookings can also be arranged in advance for fixed time slots.`,
      qPass: `How many passengers can travel in a ${loc} Luxury Tempo Traveller?`,
      aPass: `Our fleet ranges from 12-seater to 26-seater Maharaja tempo travellers, so seating scales with your group. A 12-seater covers a small office team, while the 26-seater Maharaja suits large wedding parties or conference groups. Tell us your headcount and we'll point you to the right seater with matching luggage space.`,
      qOneWay: `Can I book a one-way Luxury Tempo Traveller from ${fromCap} to ${toCap}?`,
      aOneWay: `Yes, one way bookings work for single drops, be it a flight to catch or a visit from ${fromCap} to ${toCap} with no return needed the same day. You pay only for the distance covered, with no charge added for a return journey you don't need. This option suits travelers heading to ${toCap} without a same-day return.`,
      qAirport: `Can I book a Luxury Tempo Traveller from ${fromCap} to ${toCap} Airport?`,
      aAirport: `Yes, direct pickup and drop at major airports comes included with our tempo traveller service. Our drivers stay updated on your flight schedule and time the arrival so your group isn't stuck waiting at the terminal. Book it as part of a one way trip or as a stop within a larger round trip itinerary.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap || "your city";
  return {
    titleText: cityCap,
    qCost: `How much does a ${cityCap} Luxury Tempo Traveller cost?`,
    aCost: `Pricing depends on seater capacity and vehicle type, calculated on a per-kilometer basis for the route. Toll, parking, and driver charges are billed separately and shown upfront before you confirm. Call us or check availability on the app for an exact quote tied to your travel dates and group size.`,
    qBook: `How do I book a Luxury Tempo Traveller in ${cityCap}?`,
    aBook: `Reach out through our booking line or WhatsApp with your travel date, group size, and pickup point. We confirm the seater option that matches your headcount and send the fare breakdown before you finalize anything. Corporate and wedding bookings can also be arranged in advance for fixed time slots.`,
    qPass: `How many passengers can travel in a ${cityCap} Luxury Tempo Traveller?`,
    aPass: `Our fleet ranges from 12-seater to 26-seater Maharaja tempo travellers, so seating scales with your group. A 12-seater covers a small office team, while the 26-seater Maharaja suits large wedding parties or conference groups. Tell us your headcount and we'll point you to the right seater with matching luggage space.`,
    qOneWay: `Can I book a one-way Luxury Tempo Traveller in ${cityCap}?`,
    aOneWay: `Yes, one way bookings work for single drops, be it a flight to catch or an outstation visit in ${cityCap} with no return needed the same day. You pay only for the distance covered, with no charge added for a return journey you don't need. This option suits travelers heading to their destination without a same-day return.`,
    qAirport: `Can I book a Luxury Tempo Traveller for ${cityCap} Airport transfers?`,
    aAirport: `Yes, direct pickup and drop at major airports comes included with our tempo traveller service. Our drivers stay updated on your flight schedule and time the arrival so your group isn't stuck waiting at the terminal. Book it as part of a one way trip or as a stop within a larger round trip itinerary.`,
  };
};

export default function LuxuryTaxiFaqs({
  title,
  subtitle,
  city,
  from,
  to,
}: LuxuryTaxiFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const loc = formatLocation(city, from, to);

  const FAQS = [
    { question: loc.qCost, answer: loc.aCost },
    { question: loc.qBook, answer: loc.aBook },
    { question: loc.qPass, answer: loc.aPass },
    { question: loc.qOneWay, answer: loc.aOneWay },
    { question: loc.qAirport, answer: loc.aAirport },
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
            Luxury Tempo Traveller FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${loc.titleText} Luxury Tempo Traveller Questions, Answered`}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            {subtitle ||
              `Everything you need to know about booking a Luxury Tempo Traveller for ${loc.titleText}, including fares, booking process, seating, and airport drops.`}
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
            Need a Luxury Tempo Traveller for your {loc.titleText} journey?
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call & Book Tempo Traveller
          </a>
        </div>
      </div>
    </section>
  );
}