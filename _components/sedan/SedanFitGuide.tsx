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

export default function SedanFitGuide() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Find Your Perfect Cab
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Is a Sedan the Right Choice for Your Trip?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Check your purpose below — if it matches, the Sedan is made for you.
            If not, we&apos;ll point you to the cab that fits better.
          </p>
        </div>

        {/* ===== Step 1: Does a Sedan fit? ===== */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Checklist Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              A Sedan Fits Your Purpose If…
            </h3>

            <ul className="mt-6 space-y-4">
              {SEDAN_FITS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[15px] leading-7 text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Yes → Sedan Card */}
          <div className="flex flex-col justify-center rounded-2xl bg-gold p-7 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">
              If Yes
            </p>

            <h3 className="mt-2 text-2xl font-bold leading-snug">
              Then the Sedan Is Made for You.
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-white/90">
              4 comfortable seats • space for 3 large bags • powerful AC — the
              perfect balance of comfort and price for Noida to Delhi.
            </p>

            <p className="mt-6 text-3xl font-bold">
              ₹1,599{" "}
              <span className="text-base font-medium text-white/80">
                one-way
              </span>
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-gold shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Book Your Sedan →
            </a>

            <p className="mt-4 text-center text-xs text-white/80">
              Most riders on this route choose the Sedan.
            </p>
          </div>
        </div>

        {/* ===== Step 2: If not, choose your fit ===== */}
        <div className="mt-14">
          <h3 className="text-center text-xl font-bold text-slate-900">
            If No — Pick the Cab That Fits Your Purpose Instead
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ALTERNATIVES.map((alt) => {
              const Icon = alt.icon;

              return (
                <div
                  key={alt.cab}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {alt.cab}
                      </h4>
                      <p className="text-sm font-medium text-gold">
                        {alt.fare}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {alt.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[15px] leading-7 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold py-3 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
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
