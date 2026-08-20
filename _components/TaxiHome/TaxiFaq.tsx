"use client";

import { useState } from "react";

const PHONE_NUMBER = "+916390008503";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "How do I book a taxi from Noida to Delhi?",
    answer:
      "Booking is simple and takes less than a minute. You can call or WhatsApp us at +91 6390008503, or fill out the booking form on our website. Just share your pickup location, destination, preferred vehicle, and travel time, and we will confirm your booking instantly.",
  },
  {
    question: "What types of taxis do you offer?",
    answer:
      "We offer a wide range of well-maintained vehicles to suit every need and budget. Our fleet includes hatchbacks/sedans (Dzire, Etios, Amaze), family MUVs (Ertiga), premium SUVs (Innova, Innova Crysta, Hycross), luxury rentals (Force Urbania), and group transport (12 to 26-seater Tempo Travellers).",
  },
  {
    question: "Are toll taxes and parking charges included in the fare?",
    answer:
      "Our quoted fares are transparent and typically cover the base fare, fuel, and driver allowance. Toll taxes, state taxes, and parking charges are extra and are billed as per actuals during the trip. For outstation round trips, we can also provide fixed all-inclusive packages upon request.",
  },
  {
    question:
      "Can I book a taxi for early morning or late-night airport drops?",
    answer:
      "Yes, we operate 24/7. Early morning airport drops and late-night pickups are very common. We recommend booking at least 3–4 hours in advance for late-night or early-morning trips to ensure vehicle availability and timely arrival.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We offer a flexible and rider-friendly policy. You can cancel your booking for free up to 2 hours before the scheduled pickup time. Rescheduling is always free—just give us a call or send a WhatsApp message, and we will adjust your booking accordingly. No advance payment is required for most bookings, so you never lose money.",
  },
  {
    question: "Are your drivers verified and familiar with the routes?",
    answer:
      "Absolutely. Safety and reliability are our top priorities. All our drivers are professionally trained, background-verified, and possess valid commercial licenses. They are highly experienced with NCR routes, ensuring a smooth, safe, and efficient journey.",
  },
  {
    question: "How and when do I pay for the taxi service?",
    answer:
      "We offer flexible payment options. You can pay the driver directly in cash or via UPI/card at the end of your trip. For corporate clients or advance bookings, we also accept online bank transfers. A proper GST invoice is provided for all paid trips.",
  },
  {
    question: "Do you provide outstation taxi services from Noida?",
    answer:
      "Yes, we specialize in outstation taxi services from Noida to all major destinations across North India, including Agra, Jaipur, Chandigarh, Shimla, and Haridwar. We offer both one-way drops and round-trip packages with experienced drivers.",
  },
  {
    question:
      "Is it safe to travel with your taxi service, especially for women and children?",
    answer:
      "Yes, safety is our core commitment. All our vehicles are GPS-tracked, regularly sanitized, and undergo strict fitness checks. You can share your live trip details with family members, and our 24/7 support team is always just a call away for any assistance.",
  },
];

export default function TaxiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* FAQ schema for Google rich results */
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
    <section className="bg-slate-50 py-10 sm:py-16">
      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Taxi FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Taxi Service Questions, Answered
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything riders ask us about booking a reliable taxi from Noida to
            Delhi and beyond.
          </p>
        </div>

        {/* ===== Accordion ===== */}
        <div className="space-y-3 sm:space-y-4">
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
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
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
      </div>
    </section>
  );
}
