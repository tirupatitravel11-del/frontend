"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "What is the 20 Seater Tempo Traveller fare from Noida to Delhi?",
    answer:
      "The 20 Seater Luxury Tempo Traveller starts at ₹9,500 for local day tours and ₹35 per km for outstation trips. The fare includes fuel, AC and driver allowance. Tolls, parking and state taxes are billed at actuals. For weddings and multi-day events, we offer custom packages — call us for a quote.",
  },
  {
    question: "How many passengers can travel in the 20 Seater Tempo Traveller?",
    answer:
      "The 20 Seater TT comfortably accommodates 20 passengers plus 1 driver (20+1 seating). It features a 2*2 seating layout with Maharaja-style pusher seats, so every passenger gets a spacious reclining seat with armrests — perfect for weddings, family reunions and large group travel.",
  },
  {
    question: "Is the 20 Seater suitable for wedding baraat and guest shuttles?",
    answer:
      "Absolutely. The 20 Seater is our most popular vehicle for wedding baraat, groom's processions and guest shuttles between venues. We can arrange decoration on request to match your wedding theme, and the driver stays with you for the full event schedule, including multiple stops and waiting time.",
  },
  {
    question: "What luxury features come with the 20 Seater Tempo Traveller?",
    answer:
      "The 20 Seater includes Maharaja reclining pusher seats with armrests, powerful dual AC with individual vents, a large LED TV, premium music system with Bluetooth, a mic for announcements, USB charging points at every seat, ambient LED lighting, and a spacious rear luggage boot that holds 10 large suitcases.",
  },
  {
    question: "How much luggage can the 20 Seater Tempo Traveller carry?",
    answer:
      "The 20 Seater has a large rear boot that comfortably holds 10 large suitcases, plus passengers can keep cabin bags inside the overhead racks and under seats. It is ideal for wedding parties carrying multiple outfits, families on long vacations, or corporate groups with equipment — no support vehicle needed.",
  },
  {
    question: "Can we take the 20 Seater for hill trips like Manali or Char Dham?",
    answer:
      "Yes. The 20 Seater is powered for mountain roads and driven by experienced hill-route chauffeurs. We handle all inter-state permits and hill area permissions for routes like Manali, Shimla, Nainital, Kedarnath and Char Dham yatra, so your group travels smoothly through every checkpoint.",
  },
  {
    question: "Are tolls, parking and driver allowance included in the fare?",
    answer:
      "Your base fare of ₹9,500 includes fuel, AC and driver allowance for local trips. For outstation journeys, tolls, parking fees, inter-state taxes and hill permits are billed at actuals and shown transparently in your final bill — no hidden charges. For weddings, we can offer all-inclusive packages.",
  },
  {
    question: "What is the driver night allowance for multi-day wedding events?",
    answer:
      "For multi-day trips or wedding events that span overnight, a driver night allowance of ₹600 per day applies. This is clearly communicated at the time of booking so there are no surprises. For 3+ day wedding packages, we often bundle this into a single all-inclusive quote.",
  },
  {
    question: "Can we decorate the 20 Seater for a wedding baraat?",
    answer:
      "Yes. We offer wedding decoration packages including flower arrangements, ribbons, LED string lights and themed decorations on the exterior and interior of the 20 Seater. This service is available on request and can be arranged 24 hours before your pickup. Contact us to discuss your theme.",
  },
  {
    question: "How early should I book the 20 Seater Tempo Traveller?",
    answer:
      "Since the 20 Seater is our most in-demand vehicle for weddings and events, we recommend booking 3–5 days in advance during wedding season (October–March) and peak yatra season (May–July). For weekday trips in off-season, 24–48 hours is usually enough. Call us 24×7 to check availability.",
  },
];

export default function TwentySeaterFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section className="bg-slate-50 py-12 sm:py-16">
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
            20 Seater FAQs
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            20 Seater Tempo Traveller Questions, Answered
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Everything you need to know about booking the 20 Seater Luxury Tempo
            Traveller for weddings, baraat, corporate events and large group
            travel.
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
      </div>
    </section>
  );
}