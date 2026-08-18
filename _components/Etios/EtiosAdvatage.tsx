"use client";

import { Luggage, Users, ShieldCheck, Route } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const ETIOS_ADVANTAGES = [
  {
    icon: Luggage,
    title: "The 595-Litre Boot",
    description:
      "The undisputed king of luggage space. While standard sedans struggle with 3 bags, the Etios effortlessly swallows 4 large suitcases plus cabin bags. Perfect for airport drops.",
  },
  {
    icon: Users,
    title: "First-Class Rear Seating",
    description:
      "Unlike compact sedans that cramp rear passengers, the Etios offers a wide cabin. Three adults can sit comfortably in the back without knees touching the front seats.",
  },
  {
    icon: ShieldCheck,
    title: "Toyota's Bulletproof Reliability",
    description:
      "Built on Toyota’s legendary engineering, the Etios is known for zero-breakdown performance. On a 500km highway drive, you need a car that won't let you down.",
  },
  {
    icon: Route,
    title: "Pothole-Proof Suspension",
    description:
      "Indian roads can be unpredictable. The Etios features a specially tuned, high-ground-clearance suspension setup that absorbs bad roads for a smooth, rattle-free ride.",
  },
];

export default function EtiosAdvantages() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            The Etios Advantage
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose the Etios Over Other Sedans?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The Swift Dzire is stylish, but the Toyota Etios is a practical
            powerhouse. Here is why frequent travelers and fleet operators swear
            by it.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ETIOS_ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
          <div className="px-6 py-10 sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to experience the Etios difference?
              </h3>
              <p className="mt-2 text-base text-slate-300">
                Book your spacious, reliable Toyota Etios today. Fares start at
                just ₹1,699.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-gold/90"
              >
                Call to Book
              </a>
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=${encodeURIComponent("Hi, I want to book a Toyota Etios taxi.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
