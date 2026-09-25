"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const PHONE_NUMBER = "+918726124680";

interface TempoTaxiFaqProps {
  city?: string;
  from?: string;
  to?: string;
  title?: string;
  subtitle?: string;
  seater?: string;
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
      qCost: `How much does a ${loc} Tempo Traveller cost?`,
      aCost: `Pricing for a Tempo Traveller from ${fromCap} to ${toCap} depends on seating capacity (such as 12-seater, 16-seater, 20-seater, 24-seater, or 26-seater) and trip duration. Base fare includes vehicle, driver allowance, fuel, and AC. Tolls, state permits, and parking charges are billed at actuals with no hidden fees.`,
    };
  }

  const cityCap = cap(city) || fromCap || toCap;
  if (cityCap) {
    return {
      qCost: `How much does a Tempo Traveller cost in ${cityCap}?`,
      aCost: `Tempo Traveller rental fares in ${cityCap} depend on the seating capacity (12, 16, 20, 24, or 26 seater) and your trip requirement (local, outstation, or airport transfer). Base fare includes vehicle, driver allowance, fuel, and AC. Tolls, parking, and state permits are charged at actuals with complete transparency.`,
    };
  }

  return {
    qCost: `How much does a Tempo Traveller cost?`,
    aCost: `Tempo Traveller rental fares depend on the seating capacity (12, 16, 20, 24, or 26 seater) and your trip requirement (local, outstation, or airport transfer). Base fare includes vehicle, driver allowance, fuel, and AC. Tolls, parking, and state permits are charged at actuals with complete transparency.`,
  };
};

export default function TempoTaxiFaq({
  city,
  from,
  to,
  title,
  subtitle,
  seater,
}: TempoTaxiFaqProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const loc = formatLocation(city, from, to);

  const TEMPO_TRAVELLER_FAQS = [
    {
      question: loc.qCost,
      answer: loc.aCost,
    },
    {
      question: "What seating options are available for Tempo Travellers?",
      answer:
        "We offer Tempo Travellers in multiple seating configurations including 9-seater, 12-seater, 16-seater, 20-seater, 24-seater, and 26-seater options to suit every group size. Contact us with your passenger count and we'll recommend the best vehicle for your journey.",
    },
    {
      question: "How can I book a Noida to Delhi Tempo Traveller?",
      answer:
        "Call us at +918726124680 or send a message on WhatsApp  with your pickup point, group size, and travel date. We confirm the seater option, fare, and driver details before your trip starts, so you know exactly what to expect.",
    },



    {
      question: "Can I book a Tempo Traveller for one-way trips?",
      answer:
        "Yes, we offer both one-way and round-trip bookings for Tempo Travellers. Whether it's a family vacation, pilgrimage, wedding, or corporate outing, we have flexible packages to suit your travel needs. Our team will share the best fare options based on your route and requirements.",
    },




  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayCity = city ? (city.charAt(0).toUpperCase() + city.slice(1)) : "";

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            <HelpCircle size={16} className="shrink-0" />
            {title || "Frequently Asked Questions"}
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Tempo Traveller {displayCity ? `in ${displayCity} ` : " "}{" "}
            <span className="text-gold">FAQs</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {subtitle ||
              "Everything you need to know about booking and travelling in our Tempo Traveller fleet."}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {TEMPO_TRAVELLER_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                  ? "border-gold/40 bg-gold/5 shadow-md"
                  : "border-slate-200 bg-white hover:border-gold/30"
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span
                    className={`text-sm font-semibold transition-colors sm:text-base ${isOpen ? "text-gold" : "text-slate-900"
                      }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:px-6 sm:text-[15px] sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        {/* <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center sm:mt-12 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            Still Have Questions?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Our team is available 24/7 to help you plan your group trip and
            answer any queries about our Tempo Traveller service.
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call Us Now
          </a>
        </div> */}
      </div>
    </section>
  );
}