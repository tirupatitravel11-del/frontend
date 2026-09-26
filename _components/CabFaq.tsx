"use client";

import { useState } from "react";

type Faq = {
    question: string;
    answer: string;
};

interface TaxiFaqProps {
    title?: string;
    subtitle?: string;
}

export default function CabFaq({
    title = "Frequently Asked Questions",
    subtitle = "Everything you need to know about booking a cab with us.",
}: TaxiFaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const FAQS: Faq[] = [
        {
            question: "How do I book a cab?",
            answer:
                "You can book a cab directly through our website by selecting your pickup and destination cities, choosing your preferred vehicle type, and picking your travel date. You can also call our customer support to book over the phone.",
        },
        {
            question: "What types of vehicles do you offer?",
            answer:
                "We offer a wide range of vehicles including hatchbacks, sedans, SUVs, and tempo travellers. You can choose the vehicle that best suits your group size and comfort preferences during the booking process.",
        },
        {
            question: "Are your fares fixed or metered?",
            answer:
                "We offer fixed, transparent fares with no hidden charges. The fare you see at the time of booking is the fare you pay. Toll, parking, and state entry fees are charged at actuals and are not included in the base fare.",
        },
        {
            question: "Can I book a one-way cab?",
            answer:
                "Yes, we offer both one-way and round-trip cab bookings. For a one-way trip, you only pay for the distance from your pickup point to your destination without any return charges.",
        },
        {
            question: "Is cab service available at night?",
            answer:
                "Yes, we provide 24/7 cab services including early morning, daytime, and late-night travel. Night travel is subject to vehicle availability, and any applicable night charges will be communicated during booking.",
        },
        {
            question: "Do you provide doorstep pickup?",
            answer:
                "Yes, we offer doorstep pickup from your preferred location. You can specify your exact pickup address during booking, and our driver will arrive at your location at the scheduled time.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept multiple payment methods including cash, UPI, and online payments. You can choose your preferred payment mode during the booking process. GST invoices are also available for business travel bookings.",
        },
        {
            question: "How early should I book my cab?",
            answer:
                "We recommend booking your cab at least 3–4 hours in advance. For early morning travel, airport transfers, weekends, or peak travel periods, booking a day or more in advance is recommended to ensure vehicle availability.",
        },
        {
            question: "Can I cancel or modify my booking?",
            answer:
                "Yes, you can cancel or modify your booking. Cancellation charges may apply depending on how close to the scheduled pickup time the cancellation is made. Please refer to our cancellation policy for details.",
        },
        {
            question: "Are your drivers verified?",
            answer:
                "Yes, all our drivers are thoroughly verified, trained, and experienced. We prioritize your safety and comfort, and every driver undergoes a background check before being onboarded.",
        },
    ];

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
                                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${isOpen ? "border-gold/40" : "border-slate-200"
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