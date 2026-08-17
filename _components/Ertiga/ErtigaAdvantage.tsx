"use client";

import { Users, Mountain, Wallet, Ruler, Check, X } from "lucide-react";

const ERIGA_FEATURES = [
  {
    icon: Users,
    title: "The 'One-Cab' Family Rule",
    desc: "Fits 6–7 passengers comfortably. No need to split your family or friends into two separate cabs — everyone travels together, safely and happily.",
  },
  {
    icon: Mountain,
    title: "High Ground Clearance",
    desc: "With 185mm of ground clearance, the Ertiga easily handles rough patches, tall speed breakers, farmhouse routes, and hilly terrains without scraping the bottom.",
  },
  {
    icon: Ruler,
    title: "Compact MPV Footprint",
    desc: "Unlike bulky SUVs, the Ertiga has a compact turning radius. It easily navigates narrow old-city lanes, tight hotel driveways, and crowded market parking spots.",
  },
  {
    icon: Wallet,
    title: "The Budget Sweet Spot",
    desc: "You get the spaciousness and high seating command of an SUV, but at a per-km fare that is much closer to a standard budget sedan.",
  },
];

export default function ErtigaAdvantage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            The Ertiga Advantage
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Why the Ertiga is the Smartest Choice for Your Trip
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            The Ertiga is the ultimate "middle-ground" vehicle. It gives you the
            space of an SUV without the premium price tag, and the budget of a
            sedan without the cramped seating.
          </p>
        </div>

        {/* ===== Features Grid ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ERIGA_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ===== The "Math" Savings Callout (Conversion Booster) ===== */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Left: The Problem */}
            <div className="flex flex-col justify-center bg-white p-6 sm:p-8 md:border-r border-slate-200">
              <span className="mb-2 inline-block w-fit rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-red-600">
                The Common Mistake
              </span>
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Travelling with 5 or 6 people?
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Many groups mistakenly book <strong>two separate Sedans</strong>{" "}
                because they think it&apos;s cheaper. But this splits your
                family, doubles your coordination effort, and actually costs
                more.
              </p>

              <ul className="mt-5 space-y-2.5">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <X size={16} className="text-red-500 shrink-0" />
                  Family split into two different cars
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <X size={16} className="text-red-500 shrink-0" />
                  Paying for two separate driver allowances
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <X size={16} className="text-red-500 shrink-0" />
                  Double the base fare and toll calculations
                </li>
              </ul>
            </div>

            {/* Right: The Ertiga Solution */}
            <div className="relative flex flex-col justify-center bg-gold p-6 text-white sm:p-8">
              <span className="mb-2 inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                The Ertiga Solution
              </span>
              <h3 className="text-xl font-bold sm:text-2xl">
                Book 1 Ertiga. Save Money. Stay Together.
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/90">
                One Ertiga comfortably fits up to 7 people and 3-4 large bags.
                You get a single, spacious, air-conditioned cabin for the whole
                group.
              </p>

              <ul className="mt-5 space-y-2.5">
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check size={16} className="text-white shrink-0" />
                  Everyone travels and chats together
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check size={16} className="text-white shrink-0" />
                  Only one driver allowance & base fare
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check size={16} className="text-white shrink-0" />
                  Much easier to manage at hotel check-ins
                </li>
              </ul>

              <p className="mt-6 text-lg font-black">
                ✅ The Smart Choice for Groups
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
