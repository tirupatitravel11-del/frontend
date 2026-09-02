"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I find my driver at the airport?",
    answer:
      "Your professional chauffeur will be waiting in the arrivals hall holding a name board with your name. You'll receive their photo, contact number, and exact meeting point via SMS/WhatsApp 24 hours before your flight lands. For international arrivals, they'll meet you after customs clearance.",
  },
  {
    question: "What happens if my flight is delayed or arrives early?",
    answer:
      "We track your flight in real-time using your flight number. If your flight is delayed, your driver will adjust their arrival time automatically. You get up to 60 minutes of free waiting time after your actual landing time. If you arrive early, just call your driver and they'll come to the pickup point immediately.",
  },
  {
    question: "Do I need to provide my flight number when booking?",
    answer:
      "Yes, providing your flight number is essential for airport pickups. This allows us to track your flight status and adjust pickup times automatically. For airport drop-offs, the flight number is optional but recommended so we can plan the best route and timing.",
  },
  {
    question: "How much waiting time is included in my booking?",
    answer:
      "For domestic flights, we include 30 minutes of free waiting time from the actual landing time. For international flights, you get 60 minutes free waiting time (to account for immigration and customs). After the free waiting period, additional charges of ₹200 per 30 minutes apply.",
  },
  {
    question: "Are tolls, parking fees, and taxes included in the price?",
    answer:
      "Yes! Our quoted prices are all-inclusive. Airport parking fees, tolls, state taxes, and GST are already included in your booking price. There are absolutely no hidden charges. The price you see is the price you pay.",
  },
  {
    question: "Can the driver help with my luggage?",
    answer:
      "Absolutely! Our drivers will help you load and unload all your luggage. They'll meet you at arrivals, assist with your bags, and escort you to the vehicle. For airport drop-offs, they'll help unload at the terminal entrance. Tip: Our vehicles can accommodate standard suitcases plus cabin bags.",
  },
  {
    question: "What if I have an early morning or late-night flight?",
    answer:
      "We operate 24/7, 365 days a year. Whether your flight is at 3 AM or 11 PM, we'll be there. For early morning pickups, we recommend booking at least 24 hours in advance to ensure driver availability. Late-night arrivals are automatically tracked regardless of the hour.",
  },
  {
    question: "Can I make multiple stops during my airport transfer?",
    answer:
      "Yes, you can add stops to your journey. For example, if you need to stop at a hotel or office before/after the airport, just mention it in the 'Special Instructions' during booking or call our support team. Additional stops may incur extra charges based on distance and time.",
  },
  {
    question: "What if I can't find my driver at the pickup point?",
    answer:
      "Don't worry! You'll have your driver's direct phone number and our 24/7 support line (+91-XXX-XXX-XXXX). If you can't locate them, simply call or WhatsApp them with your exact location. Most drivers wait near the main exit/arrival gate with a clear name board. In rare cases, we'll send a replacement vehicle within 15 minutes.",
  },
  {
    question: "Are child seats and booster seats available?",
    answer:
      "Yes! We provide child seats (0-4 years), booster seats (4-8 years), and regular seat belts for older children. Please request this during booking at no extra cost. We recommend specifying your child's age and weight to ensure we provide the appropriate safety seat.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Free cancellation up to 6 hours before your scheduled pickup time. Cancellations within 6 hours incur a 50% charge. No-shows (when the driver arrives but you don't show up) are charged 100%. For flight cancellations, simply inform us and we'll reschedule or refund fully.",
  },
  {
    question: "Can I pay the driver in cash or do I need to pay online?",
    answer:
      "You can choose your preferred payment method. Pay online while booking (credit/debit card, UPI, net banking, wallets) or pay directly to the driver in cash. For corporate clients, we also offer monthly billing accounts. Online payment is recommended to speed up the process.",
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
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
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
