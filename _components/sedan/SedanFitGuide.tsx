import { Car, CarFront } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const SEDAN_FITS = [
  "You're travelling with up to 4 people",
  "You're carrying 2–3 suitcases — perfect for airport drops",
  "You're heading to a business meeting, wedding or family event",
  "You want a quiet, smooth ride with powerful AC",
  "You want more comfort than a hatchback — without paying SUV prices",
];

const ALTERNATIVES = [
  {
    icon: Car,
    cab: "Go with a Hatchback if…",
    points: [
      "You're travelling solo or as a couple",
      "You're carrying only small bags",
      "The lowest fare is your main goal",
    ],
    fare: "From ₹1,299 one-way",
  },
  {
    icon: CarFront,
    cab: "Go with an SUV if…",
    points: [
      "You're travelling in a group of 5–7 people",
      "You're carrying heavy or extra luggage",
      "You want a high ride with maximum space",
    ],
    fare: "From ₹2,299 one-way",
  },
];

export default function SedanFitGuide({ fares }: any) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Find Your Perfect Cab
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Is a Sedan the Right Choice for Your Trip?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Check your purpose below — if it matches, the Sedan is made for you.
            If not, we&apos;ll point you to the cab that fits better.
          </p>
        </div>

        {/* ===== Step 1: Does a Sedan fit? ===== */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Checklist Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              A Sedan Fits Your Purpose If…
            </h3>

            <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {SEDAN_FITS.map((point) => (
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

          {/* Yes → Sedan Card */}
          <div className="flex flex-col justify-center rounded-2xl bg-gold p-5 text-white shadow-xl sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 sm:text-sm">
              If Yes
            </p>

            <h3 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
              Then the Sedan Is Made for You.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/90 sm:mt-4 sm:text-[15px] sm:leading-7">
              4 comfortable seats • space for 3 large bags • powerful AC — the
              perfect balance of comfort and price for Noida to Delhi.
            </p>

            <p className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl">
              ₹{fares[0].oneWayPrice}
              <span className="text-sm font-medium text-white/80 sm:text-base">
                {" "}one-way
              </span>
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-gold shadow-md transition-all duration-300 hover:shadow-lg sm:mt-6"
            >
              Book Your Sedan →
            </a>

            <p className="mt-3 text-center text-xs text-white/80 sm:mt-4">
              Most riders on this route choose the Sedan.
            </p>
          </div>
        </div>

        {/* ===== Step 2: If not, choose your fit ===== */}
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
                  <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white sm:h-12 sm:w-12">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                        {alt.cab}
                      </h4>

                      
                    </div>
                  </div>

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