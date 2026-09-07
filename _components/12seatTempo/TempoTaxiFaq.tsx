"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const TEMPO_TRAVELLER_FAQS = [
  {
    question: "What seating options are available for Tempo Travellers?",
    answer:
      "We offer Tempo Travellers in multiple seating configurations to suit every group size. Whether you need a compact option for a small family or a larger vehicle for a big group, we have the right fit. Contact us with your passenger count and we'll recommend the best vehicle for your journey.",
  },
  {
    question: "What amenities are included in the Tempo Traveller?",
    answer:
      "All our Tempo Travellers come with powerful air-conditioning, comfortable pusher seats, ample luggage space, and a clean, well-maintained interior. The vehicles are sanitized before every trip to ensure a safe and hygienic travel experience for you and your group.",
  },
  {
    question: "How much luggage can a Tempo Traveller carry?",
    answer:
      "Our Tempo Travellers are designed with generous luggage compartments to handle suitcases, travel bags, and cabin luggage for your entire group. If you have extra or oversized luggage, please let us know during booking so we can suggest the most suitable vehicle.",
  },
  {
    question: "Are the drivers experienced for long-distance and highway travel?",
    answer:
      "Yes, absolutely. All our drivers are professionally trained, verified, and have extensive experience in highway and long-distance driving. They are familiar with major routes, follow safe driving practices, and are courteous and punctual for every journey.",
  },
  {
    question: "Can I book a Tempo Traveller for one-way trips?",
    answer:
      "Yes, we offer both one-way and round-trip bookings for Tempo Travellers. Whether it's a family vacation, pilgrimage, wedding, or corporate outing, we have flexible packages to suit your travel needs. Our team will share the best fare options based on your route and requirements.",
  },
  {
    question: "What is included in the fare? Are there any extra charges?",
    answer:
      "Our base fare includes the vehicle, an experienced driver, fuel, and AC charges. However, tolls, parking fees, state permits, and applicable taxes are charged at actuals as per the route and journey requirements. We maintain full transparency with no hidden costs.",
  },
  {
    question: "Can I customize the pickup time and add multiple stops?",
    answer:
      "Yes, we offer fully flexible scheduling. You can choose your preferred pickup time and add multiple stops along the route. Please share your complete itinerary during booking so we can plan the journey accordingly and provide an accurate quote.",
  },
  {
    question: "How far in advance should I book a Tempo Traveller?",
    answer:
      "We recommend booking at least 3–7 days in advance, especially during peak seasons like weddings, festivals, and holidays. However, we do accept last-minute bookings subject to vehicle availability. Contact us immediately for urgent requirements.",
  },
  {
    question: "Is the Tempo Traveller suitable for pilgrimages and religious tours?",
    answer:
      "Yes, our Tempo Travellers are very popular for pilgrimages and religious tours. The comfortable seating, powerful AC, and spacious luggage capacity make them ideal for long spiritual journeys with family or group. Our drivers are also experienced with hilly and remote routes.",
  },
  {
    question: "What is the cancellation policy for Tempo Traveller bookings?",
    answer:
      "We understand that plans can change. Cancellation terms vary based on how close to the travel date you cancel. Generally, a full refund is provided for cancellations made well in advance, with partial or no refund for last-minute cancellations. Please confirm the exact policy with our team at the time of booking.",
  },
];

export default function TempoTaxiFaq() {
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
            Tempo Traveller —{" "}
            <span className="text-gold">Common Questions</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything you need to know about booking and travelling in our
            Tempo Traveller fleet.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {TEMPO_TRAVELLER_FAQS.map((faq, index) => {
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
            answer any queries about our Tempo Traveller service.
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