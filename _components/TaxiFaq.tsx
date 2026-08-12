"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const PHONE_NUMBER = "+916390008503";

const FAQS: Faq[] = [
  {
    question: "What is the taxi fare from Noida to Delhi?",
    answer:
      "Taxi fares from Noida to Delhi start at ₹1,299 for a hatchback (WagonR, Swift) for a one-way trip. Sedans start at ₹1,599 and SUVs at ₹2,299. All fares are fixed and include fuel and driver allowance. Toll and parking charges are billed at actuals.",
  },
  {
    question: "How much does a taxi from Noida to IGI Airport cost?",
    answer:
      "A taxi from Noida to IGI Airport (Terminal 1, 2 or 3) starts at ₹1,499 for a hatchback. The distance is around 30 km and travel time is 50–70 minutes depending on traffic. We recommend booking at least 3 hours before your flight departure.",
  },
  {
    question: "Can I book a one-way taxi from Noida to Delhi?",
    answer:
      "Yes. We offer both one-way and round-trip bookings. With one-way, you pay only the fixed one-way fare — no return charges. If you're coming back the same day, a round trip is usually more economical.",
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer:
      "No. Toll, parking and airport entry fees are not included and are charged at actuals. Everything else — fuel, driver allowance and AC — is included in the fixed fare.",
  },
  {
    question: "Is taxi service available at night from Noida to Delhi?",
    answer:
      "Yes, we operate 24×7, including early morning airport drops and late night arrivals. A flat night charge of ₹200 applies for trips between 10 PM and 6 AM.",
  },
  {
    question: "Do you cover all Noida sectors and Greater Noida?",
    answer:
      "Yes. We provide doorstep pickup from all sectors of Noida, Greater Noida and the Noida Expressway area, and drop anywhere in Delhi — including the airport, railway stations, hospitals and hotels.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "You can pay by cash or UPI (Google Pay, PhonePe, Paytm) after your trip. A GST invoice can be provided on request for business travel.",
  },
  {
    question: "How early should I book my taxi?",
    answer:
      "We recommend booking at least 3–4 hours in advance. For early morning airport drops, book the previous night. Need a cab urgently? Call us — we often have a driver nearby who can reach you quickly.",
  },
];
const FAQSOnway: Faq[] = [
  {
    question: "What is the one-way taxi fare from Noida to Delhi?",
    answer:
      "One-way taxi fares from Noida to Delhi start at ₹1,299 for a hatchback (WagonR, Swift), ₹1,599 for a sedan and ₹2,299 for an SUV. These are fixed one-way fares — you pay nothing for the driver's return journey. Tolls and parking are billed at actuals.",
  },
  {
    question: "Do I have to pay for the driver's empty return trip?",
    answer:
      "No. That's the biggest advantage of our one-way cabs. Your fare covers only your journey from Noida to Delhi — the driver's return cost is on us, not you. This is why a one-way drop costs almost half of a round trip.",
  },
  {
    question: "What is the difference between one-way and round trip?",
    answer:
      "With one-way, the driver drops you and leaves — you pay only for the drop. With round trip, the driver waits or comes back for you — you pay for both journeys. One-way is ideal for airport drops, shifting and open-ended plans; round trip is better if you're returning the same day.",
  },
  {
    question: "Are tolls included in the one-way fare?",
    answer:
      "Tolls, parking and airport entry fees during your trip are billed at actuals and are not part of the fixed fare. Since it's a one-way trip, you never pay tolls for the return leg — another saving over round-trip bookings.",
  },
  {
    question: "Can I make stops on the way during a one-way trip?",
    answer:
      "Yes. Short breaks for tea, food or washrooms are completely free. If you need a longer halt (more than 30–45 minutes), a small waiting charge applies — we'll always tell you before it's added.",
  },
  {
    question: "Is a one-way cab suitable for airport drops from Noida?",
    answer:
      "Absolutely. One-way is the most booked option for IGI Airport drops — you pay only for the drop at Terminal 1, 2 or 3, starting at ₹1,499 for a hatchback. We recommend booking at least 3 hours before your flight departure.",
  },
  {
    question: "Are one-way taxis available at night?",
    answer:
      "Yes, one-way drops run 24×7 — including early morning airport transfers and late night departures. A flat night charge of ₹200 applies for trips between 10 PM and 6 AM.",
  },
  {
    question: "How do I pay for my one-way trip?",
    answer:
      "Pay after your drop is complete — by cash or UPI (Google Pay, PhonePe, Paytm). No advance payment is needed, and the fare stays fixed exactly as quoted at booking.",
  },
  {
    question: "How early should I book a one-way taxi?",
    answer:
      "3–4 hours in advance is ideal. For early morning airport drops, book the previous night. In a hurry? Call us — we often have a driver nearby who can reach you quickly.",
  },
];
interface TaxiFaqProps {
  title?: string;
  subtitle?: string;
}

export default function TaxiFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a taxi from Noida to Delhi.",
  faqs
}: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-4xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            FAQs
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* ===== Accordion ===== */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen ? "border-gold/40" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">
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
                  <div className="border-t border-slate-200 px-6 py-5 text-[15px] leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
