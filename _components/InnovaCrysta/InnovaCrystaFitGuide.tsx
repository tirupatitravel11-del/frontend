import { Car, CarFront, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const INNOVA_FITS = [
  "You're travelling with 4–6 people",
  "You're carrying 4–5 suitcases or extra luggage",
  "You're travelling with family, friends or a business group",
  "You want spacious seating with a comfortable premium interior",
  "You want powerful AC and a smooth ride for longer journeys",
  "You want more comfort and space than a regular Sedan",
];

const ALTERNATIVES = [
  {
    icon: Car,
    cab: "Go with a Sedan if…",
    points: [
      "You're travelling with up to 4 people",
      "You're carrying 2–3 suitcases",
      "You want a comfortable ride at a lower fare",
    ],
  },
  {
    icon: CarFront,
    cab: "Go with a Tempo Traveller if…",
    points: [
      "You're travelling with 9 or more people",
      "You're travelling as a large family or group",
      "You need maximum seating and luggage space",
    ],
  },
];

export default function InnovaCrystaFitGuide({ fares }: any) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Find Your Perfect Cab
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Is an Innova Crysta the Right Choice for Your Trip?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            If you are travelling with family or a group and need extra space,
            comfort and luggage capacity, the Innova Crysta can be the perfect
            choice for your journey.
          </p>
        </div>

        {/* ================= STEP 1 ================= */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Checklist Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Users size={22} strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                An Innova Crysta Fits Your Purpose If…
              </h3>
            </div>

            <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {INNOVA_FITS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* YES CARD */}
          <div className="flex flex-col justify-center rounded-2xl bg-gold p-5 text-white shadow-xl sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 sm:text-sm">
              If Yes
            </p>

            <h3 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
              Then the Innova Crysta Is Made for You.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/90 sm:mt-4 sm:text-[15px] sm:leading-7">
              6 comfortable seats • space for 5 large bags • powerful AC •
              premium interiors — the perfect choice for families, groups and
              comfortable long-distance travel from Noida to Delhi.
            </p>

            <p className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl">
              ₹{fares.oneWayPrice}
              <span className="text-sm font-medium text-white/80 sm:text-base">
                {" "}
                one-way
              </span>
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-gold shadow-md transition-all duration-300 hover:shadow-lg sm:mt-6"
            >
              Book Innova Crysta →
            </a>

            <p className="mt-3 text-center text-xs text-white/80 sm:mt-4">
              Ideal for families and groups travelling on this route.
            </p>
          </div>
        </div>

        {/* ================= STEP 2 ================= */}
        <div className="mt-12 sm:mt-14">
          <h3 className="text-center text-lg font-bold text-slate-900 sm:text-xl">
            If No — Pick the Cab That Fits Your Purpose Instead
          </h3>

          <div className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-2">
            {ALTERNATIVES.map((alt) => {
              const Icon = alt.icon;

              return (
                <div
                  key={alt.cab}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl sm:p-7"
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white sm:h-12 sm:w-12">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                        {alt.cab}
                      </h4>

                      {/* <p className="mt-0.5 text-sm font-medium text-gold">
                        {alt.fare}
                      </p> */}
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="mt-5 space-y-3">
                    {alt.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold py-3 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white sm:mt-6"
                  >
                    Book This Cab
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
