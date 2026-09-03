"use client";

import { ChevronDown, Car, CreditCard, Clock, Shield, MapPin, Phone } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

// Default FAQs for taxi service
const defaultFAQs: FAQItem[] = [
  {
    icon: <Car className="h-5 w-5" />,
    question: "How do I book a taxi?",
    answer: "You can book a taxi by filling out our online booking form, calling our 24/7 helpline, or through our mobile app. Simply enter your pickup location, destination, date, and time, choose your preferred vehicle, and confirm your booking instantly.",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    question: "What are your pricing and payment options?",
    answer: "We offer transparent pricing with no hidden charges. Payment can be made via cash, UPI, credit/debit cards, or digital wallets. For outstation trips, we require a small advance booking amount, with the balance payable after the journey.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    question: "How far in advance should I book?",
    answer: "For local rides, you can book as little as 1-2 hours in advance. For airport transfers and outstation trips, we recommend booking at least 24 hours ahead. However, we do accept last-minute bookings based on availability.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    question: "Are your drivers verified and trained?",
    answer: "Yes, all our drivers undergo rigorous background verification, police clearance, and professional training. They are experienced, licensed, and committed to providing safe, courteous, and punctual service.",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    question: "Do you provide service for outstation trips?",
    answer: "Absolutely! We offer one-way and round-trip outstation cab services to all major cities and tourist destinations. Our outstation packages include driver allowances, tolls, and state taxes as applicable.",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    question: "What if I need to cancel or modify my booking?",
    answer: "You can cancel or modify your booking by calling our customer support or through your booking confirmation link. Free cancellation is available up to 4 hours before the scheduled pickup. Late cancellations may incur minimal charges.",
  },
];

export default function TaxiServiceFAQ({
  title = "Frequently Asked Questions",
  subtitle = "Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.",
  items = defaultFAQs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-gold">
            FAQs
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 transition-all duration-300 hover:border-gold/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                  
                    {/* Question */}
                    <span className="text-base font-semibold text-slate-900 sm:text-lg">
                      {item.question}
                    </span>
                  </div>
                  {/* Chevron */}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[4.5rem] text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}