"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How is the fare calculated for outstation trips?",
    answer:
      "Our outstation fares are calculated based on the total distance (in km) multiplied by the per-km rate for your chosen vehicle. This base fare includes the driver's daily allowance. Toll taxes, state taxes, and parking fees are charged at actuals (transparently billed at the end of the trip).",
  },
  {
    question:
      "Do I have to pay for the driver's return journey on a one-way trip?",
    answer:
      "Absolutely not! Our one-way drop fares are truly one-way. You only pay for the distance from your pickup location to your destination. We do not charge you for the driver's return journey.",
  },
  {
    question: "What is the policy for driver accommodation on multi-day trips?",
    answer:
      "For trips extending beyond one day, you have two options: either provide basic, clean accommodation for the driver (separate from the guest room), or pay a standard nightly driver allowance (typically ₹300-₹500 per night, depending on the city). This will be clearly stated in your booking confirmation.",
  },
  {
    question: "What happens if we exceed the daily kilometer limit?",
    answer:
      "Each booking comes with a standard daily kilometer limit (usually 250-300 km per day, depending on the package). If you exceed this limit, a nominal extra-km charge will apply. Your driver will keep you informed of the distance covered to avoid any surprises.",
  },
  {
    question: "Can we add extra stops or change our destination mid-trip?",
    answer:
      "Yes, your trip is flexible! If you decide to add a sightseeing stop or change your drop-off location, simply inform your driver. The final fare will be adjusted based on the actual distance traveled and any additional tolls incurred.",
  },
  {
    question: "Are your vehicles and drivers suitable for hill stations?",
    answer:
      "Yes! We have a dedicated fleet of well-maintained vehicles with strong engines and excellent braking systems, specifically paired with drivers who have extensive experience driving in hilly terrain (like Manali, Shimla, Munnar, etc.).",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "We offer free cancellation up to 12 hours before the scheduled pickup time for a full refund. Cancellations made within 12 hours of pickup may incur a small cancellation fee to cover driver allocation costs. No-shows are charged 100%.",
  },
  {
    question: "What payment methods do you accept for outstation trips?",
    answer:
      "You can pay a small advance (e.g., 10-20%) online to confirm your booking via UPI, Credit/Debit Card, or Net Banking. The remaining balance, along with any extra charges (tolls, extra km), can be paid directly to the driver in cash or via UPI at the end of the trip.",
  },
  {
    question: "Is there a night charge for late-night pickups or drops?",
    answer:
      "Standard outstation packages cover 24-hour usage. However, if a trip requires the driver to work continuously through the night beyond standard hours, a nominal night charge may apply. This will always be discussed and agreed upon before the trip begins.",
  },
];

export default function OutstationFAQ() {
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
            Outstation Travel Questions
          </h2>
          <p className="mt-4 text-base text-stone-600 md:text-lg">
            Clear, transparent answers about pricing, policies, and your
            journey.
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
