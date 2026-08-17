const PHONE_NUMBER = "+916390008503";

const ERTIGA_POINTS = [
  "You're travelling with 5–7 people in one vehicle",
  "You're carrying heavy or extra luggage — perfect for airport or outstation trips",
  "You're heading to a wedding, family function or group outing",
  "You want the commanding ride height and space of a premium MPV",
  "You want to save money vs booking two sedans for the same group",
];

const ALTERNATIVES = [
  {
    name: "Swift Dzire",
    fare: "From ₹1,599 one-way",
    points: [
      "You're travelling with up to 4 people",
      "You're carrying 2–3 suitcases max",
      "You want comfort at a lower fare",
    ],
  },
  {
    name: "Toyota Etios",
    fare: "From ₹1,699 one-way",
    points: [
      "You're carrying 3–4 large suitcases — Etios has a huge 595-litre boot",
      "You want a dependable diesel option for longer drives",
      "You need maximum luggage space at a budget fare",
    ],
  },
];

export default function VehicleComparison() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Find Your Perfect Cab
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Is an Ertiga the Right Choice for Your Trip?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Check your purpose below — if it matches, the Ertiga is made for
            your group. If not, we&apos;ll point you to the cab that fits
            better.
          </p>
        </div>

        {/* ===== Main Fit Cards ===== */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Left: Checklist */}
          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              An Ertiga Fits Your Purpose If…
            </h3>

            <ul className="mt-6 space-y-4">
              {ERTIGA_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-slate-600">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Gold Verdict */}
          <div className="flex flex-col rounded-xl bg-gold p-7 text-white shadow-lg">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">
              If Yes
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Then the Ertiga Is Made for You.
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/90">
              6–7 spacious seats • space for 4–5 large bags • commanding ride
              height — perfect for groups, families and events from Noida to
              Delhi.
            </p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-xl font-black">₹1,800</span>
              <span className="text-sm text-white/90">one-way (Ertiga)</span>
            </p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white py-3 text-xs font-bold uppercase tracking-widest text-gold transition-colors duration-300 hover:bg-slate-100"
            >
              Book Your Ertiga →
            </a>

            <p className="mt-4 text-center text-xs text-white/80">
              Most group travellers on this route choose the Ertiga.
            </p>
          </div>
        </div>

        {/* ===== Alternatives ===== */}
        <h3 className="mt-16 text-center text-2xl font-bold tracking-tight text-slate-900">
          If No — Pick the Cab That Fits Your Purpose Instead
        </h3>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
          {ALTERNATIVES.map((alt) => (
            <div
              key={alt.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </span>

                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Go with a {alt.name} if…
                  </h4>
                  <p className="text-xs font-semibold text-gold">{alt.fare}</p>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {alt.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm leading-6 text-slate-600">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-gold py-2.5 text-xs font-bold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                Book This Cab
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}