"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { capitalizeFirstLetter } from "@/app/utils/commonfunction";

const faqs = [
  {
    question: "What is the taxi fare in Lucknow?",
    answer:
      "Taxi fares in Lucknow start from approximately ₹9 per km for a hatchback or sedan, ₹14 per km for an Ertiga, and ₹19 per km for an Innova Crysta. The final fare may vary depending on the route, trip type, distance, tolls, parking, permits, and other applicable charges.",
  },

  {
    question: "How much does a cab from Lucknow Airport to the city cost?",
    answer:
      "A cab from Chaudhary Charan Singh International Airport to central Lucknow generally takes around 30 to 60 minutes, depending on your destination and traffic. Cab fares start from approximately ₹9 per km, with the final fare confirmed before booking.",
  },

  {
    question: "What types of cars are available for booking in Lucknow?",
    answer:
      "You can book different types of vehicles in Lucknow, including hatchbacks and sedans for up to 4+1 passengers, Ertiga SUVs for up to 6+1 passengers, and Innova Crysta vehicles for up to 7+1 passengers. Vehicle availability depends on the travel date and route.",
  },

  {
    question: "Can I book a one-way cab from Lucknow to another city?",
    answer:
      "Yes. One-way cabs are available from Lucknow to popular destinations such as Kanpur, Ayodhya, Prayagraj, Varanasi, Agra, and other cities. The fare depends on the total distance, vehicle category, and route selected.",
  },

  {
    question: "How far in advance should I book a taxi in Lucknow?",
    answer:
      "For regular travel, booking a taxi at least 4 to 6 hours in advance is recommended. For airport transfers, outstation journeys, weekends, holidays, or larger vehicles such as Innova Crysta, booking 1 to 2 days in advance is recommended for better availability.",
  },
];

export default function LucknowFAQs({data}:any) {
  const [openIndex, setOpenIndex] = useState<any>(null);

  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-gold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-4xl">
            {capitalizeFirstLetter(data.cityName)} Cab Service FAQs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            Find answers to common questions about cab fares, vehicles, airport
            transfers, and outstation cab bookings in Lucknow.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">
          {data.faqs.map((faq:any, index:any) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:border-gold/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-stone-900 md:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-stone-100 px-6 pb-6 pt-4 leading-7 text-stone-600">
                      {faq.answer}
                    </p>
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
