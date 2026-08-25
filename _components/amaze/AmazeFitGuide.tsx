import { Car, CarFront, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const AMAZE_FITS = [
  "You're travelling with up to 4–5 people",
  "You're carrying 2–3 large suitcases plus cabin bags",
  "You're travelling for a family visit, business meeting or airport transfer",
  "You want a spacious and comfortable AC sedan",
  "You want generous boot space for luggage",
  "You want more comfort than a hatchback without moving to an SUV",
];

const ALTERNATIVES = [
  {
    icon: Car,
    cab: "Go with a Hatchback if…",
    points: [
      "You're travelling solo or as a couple",
      "You're carrying only small bags",
      "Your main priority is the lowest fare",
    ],
    
  },
  {
    icon: CarFront,
    cab: "Go with an SUV if…",
    points: [
      "You're travelling with 5–7 passengers",
      "You're carrying heavy or extra luggage",
      "You want more cabin space and a higher seating position",
    ],
 
  },
  {
    icon: Users,
    cab: "Go with a Tempo Traveller if…",
    points: [
      "You're travelling with a larger group",
      "You need more than 7 seats",
      "You want everyone to travel together",
    ],

  },
];

export default function AmazeFitGuide({fares}: any) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Find Your Perfect Cab
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Is Honda Amaze the Right Choice for Your Trip?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Honda Amaze is a great choice when you want comfortable seating,
            useful luggage space and a smooth sedan experience for Noida to
            Delhi travel.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Checklist */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Car size={22} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Honda Amaze Fits Your Purpose If…
              </h3>
            </div>

            <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {AMAZE_FITS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amaze */}
          <div className="flex flex-col justify-center rounded-2xl bg-gold p-5 text-white shadow-xl sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">
              If Yes
            </p>

            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
              Then Honda Amaze Is Made for You.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/90 sm:text-[15px]">
              5 comfortable seats • generous boot space • powerful AC — a
              practical combination of comfort and luggage space for Noida to
              Delhi travel.
            </p>

            <p className="mt-5 text-2xl font-bold sm:text-3xl">
              ₹{fares.oneWayPrice.toLocaleString("en-IN")}
              <span className="text-sm font-medium text-white/80">
                {" "}one-way
              </span>
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-gold shadow-md"
            >
              Book Honda Amaze →
            </a>

            <p className="mt-3 text-center text-xs text-white/80">
              A comfortable choice for family and airport travel.
            </p>
          </div>
        </div>

        {/* Alternatives */}
        <div className="mt-12 sm:mt-14">
          <h3 className="text-center text-lg font-bold text-slate-900 sm:text-xl">
            If No — Pick the Cab That Fits Your Purpose Instead
          </h3>

          <div className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-2 lg:grid-cols-3">
            {ALTERNATIVES.map((alt) => {
              const Icon = alt.icon;

              return (
                <div
                  key={alt.cab}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                        {alt.cab}
                      </h4>

                      {/* <p className="mt-0.5 text-sm font-medium text-gold">
                        {alt.fare} 
                      </p> */}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {alt.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-gold py-3 text-sm font-bold uppercase tracking-wide text-gold hover:bg-gold hover:text-white"
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