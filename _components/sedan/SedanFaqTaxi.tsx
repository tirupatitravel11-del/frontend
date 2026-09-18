"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SedanFaqProps {
    city?: string; // Optional: Pass a city name (e.g., "Delhi") or leave blank for generic "your city"
}

export default function SedanFaqTaxi({ city = "your city" }: SedanFaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const FAQS = [
        {
            question: `What is the starting fare for a Sedan taxi in ${city}?`,
            answer: `The starting fare for a Sedan taxi depends on the distance of your trip and the specific model (e.g., Dzire, Etios, or City). We offer transparent, all-inclusive fixed fares covering fuel, driver allowance, and AC, with absolutely no hidden charges. Outstation fares are calculated based on distance or as a customized fixed package.`,
        },
        {
            question: `How many passengers can travel comfortably in a Sedan?`,
            answer: `A standard Sedan comfortably seats up to 4 passengers (excluding the driver). This makes it the ideal choice for small families, couples, or solo business travelers who want extra legroom and a smooth ride in ${city} and beyond.`,
        },
        {
            question: `Which Sedan models do you provide for travel?`,
            answer: `We provide well-maintained, fully air-conditioned Sedans such as the Maruti Suzuki Dzire, Toyota Etios, and Honda City (or similar premium models). You can request a specific model while booking, subject to availability.`,
        },
        {
            question: `How much luggage fits in a Sedan?`,
            answer: `A Sedan boot can comfortably accommodate 2 to 3 medium-to-large suitcases. Additionally, you can keep small handbags or backpacks inside the cabin, making it perfect for airport transfers and weekend trips.`,
        },
        {
            question: `Is a Sedan suitable for long outstation trips from ${city}?`,
            answer: `Absolutely. Sedans are a highly popular choice for outstation trips. They offer a great balance of fuel efficiency, smooth highway stability, and comfortable seating for 4 people, making long journeys significantly less fatiguing.`,
        },
        {
            question: `Can I book a Sedan for airport transfers in ${city}?`,
            answer: `Yes. Sedans are one of our most booked options for airport pickups and drops. They provide a quiet, smooth ride with powerful AC, and easily handle the luggage of up to 4 travelers.`,
        },
        {
            question: `What's the difference between a Hatchback, Sedan, and SUV?`,
            answer: `A Hatchback is the most budget-friendly option for 1–3 people with minimal luggage. A Sedan is the perfect middle ground, offering superior comfort, a separate boot, and powerful AC for up to 4 people. An SUV is best for larger groups (5–7 people) or those needing maximum luggage space.`,
        },
        {
            question: `Are Sedans available for night travel from ${city}?`,
            answer: `Yes. Sedans can be booked for early morning, daytime, and late-night travel, subject to vehicle availability. Any applicable night charges or state border fees will be communicated transparently to you during the booking process.`,
        },
        {
            question: `Can I cancel or reschedule my Sedan booking?`,
            answer: `Yes. You can easily contact us to cancel or reschedule your Sedan booking. Specific cancellation and rescheduling conditions may apply depending on how close the request is to your scheduled pickup time.`,
        },
    ];

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
                        Sedan FAQs
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                        Sedan Taxi Questions, Answered
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        Everything riders ask us about booking a comfortable Sedan for their journey.
                    </p>
                </div>

                {/* ===== Accordion ===== */}
                <div className="space-y-3 sm:space-y-4">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${isOpen ? "border-gold/40" : "border-slate-200"
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
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                                ? "border-gold bg-gold text-white"
                                                : "border-slate-300 text-slate-500"
                                            }`}
                                    >
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
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