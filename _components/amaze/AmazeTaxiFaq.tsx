"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const PHONE_NUMBER = "+918726124680";

const AMAZE_FAQS = [
  {
    question: "How many passengers can travel in a Honda Amaze?",
    answer:
      "The Honda Amaze is a comfortable 4+1 seater sedan, ideal for up to 4 passengers plus the driver. It is a great choice for small families, couples, and business travellers who want a premium sedan experience.",
  },
  {
    question: "How much luggage can the Honda Amaze carry?",
    answer:
      "The Honda Amaze comes with a spacious 420-litre boot, which can comfortably hold 2–3 large suitcases along with cabin bags and hand luggage. It is perfect for airport transfers, family trips, and outstation journeys.",
  },
  {
    question: "Is the Honda Amaze suitable for long-distance travel?",
    answer:
      "Yes. The Honda Amaze offers a refined and stable ride, comfortable seating, and excellent fuel efficiency, making it an ideal choice for long-distance and outstation travel. The powerful AC ensures a comfortable journey even on hot days.",
  },
  {
    question: "Can I book a Honda Amaze for airport transfers?",
    answer:
      "Absolutely. The Honda Amaze is one of our most popular choices for airport pickups and drop-offs. With its spacious boot and comfortable cabin, it ensures a smooth, stress-free ride to and from the airport.",
  },
  {
    question: "Are the drivers experienced and professional?",
    answer:
      "Yes. All our drivers are verified, well-trained, and experienced in handling both city traffic and highway routes. They are courteous, punctual, and focused on providing a safe and comfortable ride.",
  },
  {
    question: "Is AC included in the Honda Amaze taxi?",
    answer:
      "Yes, every Honda Amaze in our fleet is fully air-conditioned. The powerful AC keeps the cabin cool and comfortable throughout your journey, whether it is a short local ride or a long outstation trip.",
  },
  {
    question: "How do I book a Honda Amaze taxi?",
    answer:
      "You can easily book a Honda Amaze by calling us directly or sending a message on WhatsApp. Our team will confirm availability, share the fare details, and arrange a pickup at your preferred time and location.",
  },
  {
    question: "Can I book a Honda Amaze for one-way or round-trip travel?",
    answer:
      "Yes, we offer both one-way and round-trip bookings for the Honda Amaze. Whether it is a quick drop, a full-day rental, or a multi-day outstation trip, we have flexible options to suit your travel needs.",
  },
];

export default function AmazeTaxiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            <HelpCircle size={16} className="shrink-0" />
            Frequently Asked Questions
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Honda Amaze Taxi —{" "}
            <span className="text-gold">Common Questions</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything you need to know about booking and travelling in a Honda
            Amaze taxi.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {AMAZE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-gold/40 bg-gold/5 shadow-md"
                    : "border-slate-200 bg-white hover:border-gold/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span
                    className={`text-sm font-semibold transition-colors sm:text-base ${
                      isOpen ? "text-gold" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center sm:mt-12 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            Still Have Questions?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Our team is available to help you plan your trip and answer any
            queries about the Honda Amaze taxi service.
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}