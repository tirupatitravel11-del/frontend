"use client";

import { useState } from "react";

const PHONE_NUMBER = "+918726124680";

interface SuvTaxiFaqProps {
    title?: string;
    subtitle?: string;
    city?: string;
    from?: string;
    to?: string;
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
            titleText: loc,
            qCost: `How much does a ${loc} SUV Taxi cost?`,
            aCost: `Pricing depends on your choice of a one-way or round trip, plus toll and parking at actuals. We give you the exact breakdown upfront so there are no hidden charges.`,
            qBook: `How can I book a ${loc} SUV Taxi?`,
            aBook: `Just call or WhatsApp us with your pickup point, date, and travel time. We'll confirm the vehicle, driver details, and fare for your ${loc} SUV taxi booking on the same call, whether it's a one-way drop or a same-day return.`,
            qTime: `How long does a ${loc} SUV Taxi take?`,
            aTime: `Travel time on this route generally falls between 45 minutes and just over an hour, depending on your exact pickup point and traffic on main expressways. Our drivers track live conditions and pick the quickest path.`,
            qPass: `How many passengers can travel in a ${loc} SUV Taxi?`,
            aPass: `A premium SUV comfortably seats up to 7 passengers plus the driver, with ample boot space for 4 to 5 medium-to-large bags. It's the perfect choice for families or groups traveling from ${fromCap} to ${toCap} with extra luggage.`,
            qToll: `Does the ${loc} SUV Taxi fare include toll and parking?`,
            aToll: `No, toll and parking are charged at actuals and shown separately from the base fare. Everything else, including driver allowance, fuel, and AC, is built into the quote you get when you book your SUV cab.`,
        };
    }

    const cityCap = cap(city) || fromCap || toCap || "your city";
    return {
        titleText: cityCap,
        qCost: `How much does a ${cityCap} SUV Taxi cost?`,
        aCost: `Pricing depends on your choice of a one-way or round trip, plus toll and parking at actuals. We give you the exact breakdown upfront so there are no hidden charges.`,
        qBook: `How can I book a ${cityCap} SUV Taxi?`,
        aBook: `Just call or WhatsApp us with your pickup point, date, and travel time. We'll confirm the vehicle, driver details, and fare for your ${cityCap} SUV taxi booking on the same call, whether it's a one-way drop or a same-day return.`,
        qTime: `How long does a ${cityCap} SUV Taxi take?`,
        aTime: `Travel time generally falls between 45 minutes and just over an hour, depending on your exact pickup location and traffic. Our drivers track live conditions and pick the quickest path.`,
        qPass: `How many passengers can travel in a ${cityCap} SUV Taxi?`,
        aPass: `A premium SUV comfortably seats up to 7 passengers plus the driver, with ample boot space for 4 to 5 medium-to-large bags. It's the perfect choice for families or groups traveling together with extra luggage.`,
        qToll: `Does the ${cityCap} SUV Taxi fare include toll and parking?`,
        aToll: `No, toll and parking are charged at actuals and shown separately from the base fare. Everything else, including driver allowance, fuel, and AC, is built into the quote you get when you book your SUV cab.`,
    };
};

export default function SuvFaqTaxi({
    title,
    subtitle,
    city,
    from,
    to,
}: SuvTaxiFaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const loc = formatLocation(city, from, to);

    const FAQS = [
        { question: loc.qCost, answer: loc.aCost },
        { question: loc.qBook, answer: loc.aBook },
        { question: loc.qTime, answer: loc.aTime },
        { question: loc.qPass, answer: loc.aPass },
        { question: loc.qToll, answer: loc.aToll },
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    /* FAQ Schema for Google (SEO) */
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
        <section className="bg-slate-50 py-12 sm:py-16" id="faq">
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
                        SUV FAQs
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                        {title || `${loc.titleText} SUV Taxi Questions, Answered`}
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
                        {subtitle ||
                            `Everything you need to know about booking a premium SUV taxi for ${loc.titleText}, including fares, timing, passenger capacity, and tolls.`}
                    </p>
                </div>

                {/* ===== Accordion ===== */}
                <div className="space-y-3 sm:space-y-4">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 sm:rounded-2xl ${isOpen ? "border-gold/40 shadow-md" : "border-slate-200"
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
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
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
                                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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

                {/* ===== Bottom CTA ===== */}
                <div className="mt-8 text-center sm:mt-10">
                    <p className="text-sm text-slate-600">
                        Need an SUV for your {loc.titleText} journey?
                    </p>

                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
                    >
                        Call & Book SUV
                    </a>
                </div>
            </div>
        </section>
    );
}