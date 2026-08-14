"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

interface TempoTravellerFaqProps {
  title?: string;
  subtitle?: string;
  faqs?: Faq[];
}

const TEMPO_TRAVELLER_FAQS: Faq[] = [
  {
    question: "What is the Tempo Traveller fare?",
    answer:
      "Tempo Traveller fares depend on the route, number of passengers, vehicle seating capacity and trip duration. We offer 9-seater, 12-seater, 16-seater and larger Tempo Travellers for local, one-way and outstation trips. Contact us with your travel details for the exact fare.",
  },
  {
    question: "How many people can travel in a Tempo Traveller?",
    answer:
      "Our Tempo Travellers are available in different seating capacities, including 9-seater, 12-seater, 16-seater and higher-capacity options. You can choose the vehicle according to your group size and luggage requirements.",
  },
  {
    question: "Is Tempo Traveller available for outstation trips?",
    answer:
      "Yes. Tempo Travellers are available for outstation, one-way and round-trip journeys. They are ideal for family vacations, group tours, weddings, religious trips, corporate travel and sightseeing.",
  },
  {
    question: "Can I book a Tempo Traveller for a one-way trip?",
    answer:
      "Yes, one-way Tempo Traveller bookings are available on selected routes. You pay for the applicable one-way journey instead of booking a complete round trip. Share your pickup and drop locations to get the exact fare.",
  },
  {
    question: "Is the Tempo Traveller air-conditioned?",
    answer:
      "Yes. Our Tempo Travellers are equipped with air conditioning and comfortable seating. Vehicle features may vary depending on the model and seating capacity selected.",
  },
  {
    question: "Can I book a Tempo Traveller for a wedding or family function?",
    answer:
      "Yes. Tempo Travellers are a convenient option for weddings, family functions, group events and guest transportation. Multiple vehicles can also be arranged when you need transportation for a larger group.",
  },
  {
    question: "Can I book a Tempo Traveller for a religious trip?",
    answer:
      "Yes. Tempo Travellers are available for religious and pilgrimage trips. They are suitable for destinations such as Ayodhya, Varanasi, Mathura, Vrindavan, Haridwar, Prayagraj and other popular pilgrimage locations.",
  },
  {
    question: "Is driver allowance included in the Tempo Traveller fare?",
    answer:
      "Driver allowance and other fare inclusions depend on the type of booking and route. We provide the complete fare details before confirmation so there are no surprises during the trip.",
  },
  {
    question: "Are toll, parking and state taxes included?",
    answer:
      "Toll, parking, interstate tax and entry charges may be charged separately depending on the route and destination. Any applicable additional charges are explained before confirming your booking.",
  },
  {
    question: "Can I book a Tempo Traveller for multiple days?",
    answer:
      "Yes. Multi-day Tempo Traveller bookings are available for tours, vacations, pilgrimage trips and corporate travel. You can book the vehicle for the complete duration of your itinerary.",
  },
  {
    question: "How early should I book a Tempo Traveller?",
    answer:
      "We recommend booking at least 1–2 days in advance for normal trips. For weddings, holidays, festivals and large group tours, it is better to book several days or weeks in advance because larger vehicles can get booked quickly.",
  },
  {
    question: "How can I book a Tempo Traveller?",
    answer:
      "You can book a Tempo Traveller by calling us or sharing your pickup location, destination, travel date, number of passengers and trip type. Our team will suggest the suitable vehicle and provide the fare.",
  },
];

export default function TempoTravellerFaq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about booking a Tempo Traveller for your group journey.",
  faqs = TEMPO_TRAVELLER_FAQS,
}: TempoTravellerFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
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

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
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