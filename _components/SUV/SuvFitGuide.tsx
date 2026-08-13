import { Car, CarFront, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const SUV_FITS = [
  "You're travelling with 5–7 people in one vehicle",
  "You're carrying heavy or extra luggage — perfect for airport or outstation trips",
  "You're heading to a wedding, family function or group outing",
  "You want the commanding ride height and space of a premium SUV",
  "You want to save money vs booking two sedans for the same group",
];

const ALTERNATIVES = [
  {
    icon: Car,
    cab: "Go with a Sedan if…",
    points: [
      "You're travelling with up to 4 people",
      "You're carrying 2–3 suitcases max",
      "You want comfort at a lower fare",
    ],
    fare: "From ₹1,599 one-way",
  },
  {
    icon: CarFront,
    cab: "Go with a Tempo Traveller if…",
    points: [
      "You're travelling in a group of 8–12 people",
      "You need maximum legroom and luggage space",
      "You're planning a long outstation journey",
    ],
    fare: "From ₹5,499 one-way",
  },
];

export default function SuvFitGuide() {
  return (
    <section className="bg-slate-50 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Find Your Perfect Cab
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Is an SUV the Right Choice for Your Trip?
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Check your purpose below — if it matches, the SUV is made for your
            group. If not, we&apos;ll point you to the cab that fits better.
          </p>
        </div>

        {/* ===== Step 1: Does an SUV fit? ===== */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Checklist Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              An SUV Fits Your Purpose If…
            </h3>

            <ul className="mt-5 space-y-4 sm:mt-6">
              {SUV_FITS.map((point) => (
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

          {/* Yes → SUV Card */}
          <div className="flex flex-col justify-center rounded-2xl bg-gold p-5 text-white shadow-xl sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 sm:text-sm">
              If Yes
            </p>

            <h3 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
              Then the SUV Is Made for You.
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/90 sm:text-[15px] sm:leading-7">
              6–7 spacious seats • space for 4–5 large bags • commanding ride
              height — perfect for groups, families and events from Noida to
              Delhi.
            </p>

            <p className="mt-6 text-2xl font-bold sm:text-3xl">
              ₹1,800{" "}
              <span className="text-sm font-medium text-white/80 sm:text-base">
                one-way (Ertiga)
              </span>
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-gold shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Book Your SUV →
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-white/80">
              Most group travellers on this route choose the SUV.
            </p>
          </div>
        </div>

        {/* ===== Step 2: If not, choose your fit ===== */}
        <div className="mt-12 sm:mt-14">
          <h3 className="text-center text-lg font-bold leading-6 text-slate-900 sm:text-xl">
            If No — Pick the Cab That Fits Your Purpose Instead
          </h3>

          <div className="mt-7 grid gap-5 md:grid-cols-2 md:gap-6">
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
                      <h4 className="text-base font-bold leading-6 text-slate-900 sm:text-lg">
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
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />

                        <span>{point}</span>
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
