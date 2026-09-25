"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book an airport taxi for pickup or drop?",
    answer:
      "You can book instantly by calling us +918726124680  or sending a WhatsApp message. Our team will confirm your booking within 5 minutes and share driver details, vehicle information, and a live tracking link before your trip.",
  },
  {
    question: "What is the starting fare for airport taxi service?",
    answer:
      "Airport taxi fare starts from ₹10/km for Swift Dzire, ₹10/km for Amaze, ₹13/km for Maruti Ertiga, ₹16/km for  Innova Crysta, and ₹24/km for Tempo Traveller. Final fare depends on pickup location, drop point, vehicle type, waiting time, tolls, and travel timing. No surge pricing ever!",
  },
  {
    question: "Do you provide 24x7 airport pickup and drop service?",
    answer:
      "Yes, we offer 24x7 airport taxi service for pickups, drops, late-night transfers, and early morning flights with professional drivers. Our team works round the clock, including public holidays and weekends. We never say 'no' to any time slot.",
  },
  {
    question: "Is flight tracking included for airport pickups?",
    answer:
      "Absolutely! We offer free flight tracking for all airport pickups. Our drivers monitor your flight status in real-time and adjust pickup timing automatically in case of delays or early arrivals. You pay no extra waiting charges for flight delays.",
  },
  {
    question: "Are your drivers professionally trained and verified?",
    answer:
      "Yes, all our drivers are licensed, background-verified, and undergo professional training in customer service, safety protocols, route navigation, and airport procedures. Many have over 5 years of experience in airport transfers. Your safety is our priority.",
  },
];

export default function AirportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Airport Transfer Questions
          </h2>
          <p className="mt-4 text-base text-stone-600 md:text-lg">
            Everything you need to know about your airport journey with us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-stone-200 bg-stone-50 transition-all hover:border-gold/30 hover:bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-stone-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-stone-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
