"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const PHONE_NUMBER = "+918726124680";

const TEMPO_FAQS = [
  {
    question: "What are the seating capacity options for Luxury Tempo Travellers?",
    answer:
      "We offer multiple seating configurations including 12-seater, 16-seater, 20-seater, and 24-seater Luxury Tempo Travellers. All vehicles feature comfortable Maharaja pusher seats with armrests and reclining options for maximum comfort during long journeys.",
  },
  {
    question: "What amenities are included in the Luxury Tempo Traveller?",
    answer:
      "Our Luxury Tempo Travellers come equipped with powerful AC, LED TV, premium music system with microphone, comfortable pusher seats with armrests, ample legroom, charging points, and spacious luggage compartments. All vehicles are well-maintained and sanitized before every trip.",
  },
  {
    question: "How much luggage can a Luxury Tempo Traveller carry?",
    answer:
      "Our Tempo Travellers have generous luggage space. A 12-seater can comfortably hold 8-10 medium suitcases, while larger 20-seater and 24-seater vehicles can accommodate 15-20 suitcases plus cabin bags. If you have extra luggage, please inform us during booking so we can suggest the right vehicle.",
  },
  {
    question: "Are the drivers experienced for long-distance and highway travel?",
    answer:
      "Yes, absolutely. All our drivers are professionally trained, verified, and have extensive experience in highway and long-distance driving. They are familiar with major routes, ensure safe driving practices, and are courteous and punctual for every journey.",
  },
  {
    question: "Can I book a Tempo Traveller for one-way trips?",
    answer:
      "Yes, we offer both one-way and round-trip bookings for Luxury Tempo Travellers. Whether it's a pilgrimage, wedding, family vacation, or corporate outing, we have flexible packages to suit your travel needs. One-way fares are calculated based on distance and vehicle type.",
  },
  {
    question: "Is the AC included in the fare? Are there any extra charges?",
    answer:
      "Yes, the AC is included in the base fare. Our quoted prices include driver allowance, fuel, and AC charges. However, tolls, parking fees, state permits, and applicable taxes are charged at actuals as per the actual route and journey requirements.",
  },
  {
    question: "Can I customize the pickup time and multiple stops during the journey?",
    answer:
      "Yes, we offer flexible scheduling. You can choose your preferred pickup time and add multiple stops along the route. Please share your complete itinerary during booking so we can plan the journey accordingly and provide an accurate quote.",
  },
  {
    question: "How far in advance should I book a Luxury Tempo Traveller?",
    answer:
      "We recommend booking at least 3-7 days in advance, especially during peak seasons like weddings, festivals, and holidays. However, we do accept last-minute bookings subject to vehicle availability. Contact us immediately for urgent requirements.",
  },
  {
    question: "Is the Tempo Traveller suitable for pilgrimages and religious tours?",
    answer:
      "Yes, our Luxury Tempo Travellers are very popular for pilgrimages to destinations like Vaishno Devi, Char Dham, Golden Temple, Tirupati, and other religious sites. The comfortable seating, AC, and spacious luggage capacity make them ideal for long spiritual journeys with family or groups.",
  },
  {
    question: "What is the cancellation policy for Tempo Traveller bookings?",
    answer:
      "We understand that plans can change. Cancellation terms vary based on how close to the travel date you cancel. Generally, full refund is provided for cancellations made 7+ days before travel, partial refund for 3-7 days, and no refund for last-minute cancellations. Please confirm the exact policy at the time of booking.",
  },
];

export default function LuxuryTaxiFaqs() {
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
            Luxury Tempo Traveller —{" "}
            <span className="text-gold">Common Questions</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything you need to know about booking and travelling in our
            luxury tempo traveller fleet.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {TEMPO_FAQS.map((faq, index) => {
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
                    isOpen
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
        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center sm:mt-12 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            Still Have Questions?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Our team is available 24/7 to help you plan your group trip and
            answer any queries about our luxury tempo traveller service.
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