"use client";

import {
  Armchair,
  Wind,
  Usb,
  Tv,
  Users,
  Ruler,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const SEATING_FEATURES = [
  {
    icon: Armchair,
    title: "Maharaja Recliner Seats",
    description:
      "Plush reclining seats with premium cushioning, wide armrests and enhanced comfort for long-distance journeys.",
  },
  {
    icon: Wind,
    title: "Personal AC Vents",
    description:
      "Individual adjustable AC vents allow every passenger to enjoy personalized cooling throughout the journey.",
  },
  {
    icon: Usb,
    title: "USB Charging",
    description:
      "Convenient charging points help keep your phones, tablets and other devices powered during the trip.",
  },
  {
    icon: Tv,
    title: "LED Entertainment",
    description:
      "Enjoy movies, music and entertainment on the onboard LED screen with a premium sound system.",
  },
  {
    icon: Ruler,
    title: "Extra Legroom",
    description:
      "Generous spacing between rows gives passengers more room to stretch and relax on long journeys.",
  },
  {
    icon: Users,
    title: "Comfortable 2×2 Layout",
    description:
      "A spacious seating arrangement designed to provide comfort, easy movement and a pleasant group travel experience.",
  },
];

const SEATING_SPECS = [
  {
    label: "Total Capacity",
    value: "16+1",
    unit: "Passengers",
  },
  {
    label: "Seat Layout",
    value: "2×2",
    unit: "Configuration",
  },
  {
    label: "Seat Recline",
    value: "120°",
    unit: "Maximum Angle",
  },
  {
    label: "Legroom",
    value: '32"',
    unit: "Per Passenger",
  },
];

export default function SixteenSeaterSeating() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-amber-50/30 py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-gold" />

            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Premium Interior Comfort
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Travel in{" "}
            <span className="relative inline-block text-gold">
              First-Class Comfort
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gold/30" />
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Every seat inside our 16 Seater Luxury Tempo Traveller is designed
            to make group travel more relaxing, spacious and enjoyable.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT SIDE ================= */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8">
              {/* Top badge */}

              <div className="absolute right-5 top-5 rounded-full bg-slate-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                2 × 2 Layout
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  Seating Configuration
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Designed for Comfortable Group Travel
                </h3>
              </div>

              {/* ================= BUS LAYOUT ================= */}

              <div className="mx-auto max-w-lg rounded-3xl border border-gold/20 bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6">
                {/* Front */}

                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Vehicle Front
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Driver Cabin
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">
                      Driver
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white shadow-md">
                      D
                    </div>
                  </div>
                </div>

                {/* ================= SEATS ================= */}

                <div className="space-y-3">
                  {[1, 2, 3, 4].map((row) => (
                    <div
                      key={row}
                      className="group flex items-center justify-between gap-2 sm:gap-4"
                    >
                      {/* Row number */}

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-400">
                        {row}
                      </div>

                      {/* Left seats */}

                      <div className="flex gap-2">
                        {[1, 2].map((seat) => (
                          <div
                            key={seat}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-xs font-bold text-gold shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-white sm:h-12 sm:w-12"
                          >
                            S
                          </div>
                        ))}
                      </div>

                      {/* Aisle */}

                      <div className="relative flex h-10 w-7 items-center justify-center">
                        <div className="h-full border-l border-dashed border-slate-300" />

                        <span className="absolute -bottom-4 text-[8px] uppercase tracking-widest text-slate-300">
                          Aisle
                        </span>
                      </div>

                      {/* Right seats */}

                      <div className="flex gap-2">
                        {[1, 2].map((seat) => (
                          <div
                            key={seat}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-xs font-bold text-gold shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold group-hover:text-white sm:h-12 sm:w-12"
                          >
                            S
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rear */}

                <div className="mt-8 border-t border-slate-200 pt-4 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Rear of Vehicle
                  </span>
                </div>

                {/* Legend */}

                <div className="mt-5 flex flex-wrap items-center justify-center gap-5 rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-gold/30 ring-1 ring-gold/40" />

                    <span>Premium Recliner</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-slate-900" />

                    <span>Driver</span>
                  </div>
                </div>
              </div>

              {/* ================= SPECS ================= */}

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {SEATING_SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-md"
                  >
                    <p className="text-xl font-black tracking-tight text-gold sm:text-2xl">
                      {spec.value}
                    </p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                      {spec.label}
                    </p>

                    <p className="mt-1 text-[9px] text-slate-400">
                      {spec.unit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex flex-col justify-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Luxury Amenities
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Every Passenger Deserves{" "}
                <span className="text-gold">Premium Comfort</span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Whether you are travelling for a wedding, pilgrimage, corporate
                trip or family vacation, every passenger enjoys a comfortable
                and premium travel experience.
              </p>
            </div>

            {/* ================= FEATURE GRID ================= */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {SEATING_FEATURES.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
                  >
                    {/* Number */}

                    <span className="absolute right-4 top-4 text-4xl font-black text-slate-50 transition-colors group-hover:text-gold/10">
                      0{index + 1}
                    </span>

                    <div className="relative">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                        {feature.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                        {feature.description}
                      </p>

                      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                        Premium Comfort

                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}