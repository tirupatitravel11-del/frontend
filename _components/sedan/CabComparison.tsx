const PHONE_NUMBER = "+916390008503";

type CompareRow = {
  feature: string;
  hatchback: string;
  sedan: string;
  suv: string;
};

const ROWS: CompareRow[] = [
  {
    feature: "Seating Capacity",
    hatchback: "4 passengers",
    sedan: "4 passengers",
    suv: "6–7 passengers",
  },
  {
    feature: "Luggage Space",
    hatchback: "1–2 small bags",
    sedan: "3 large bags",
    suv: "4–5 bags",
  },
  {
    feature: "Comfort Level",
    hatchback: "Basic",
    sedan: "Premium & quiet",
    suv: "Spacious & high",
  },
  {
    feature: "AC Performance",
    hatchback: "Standard",
    sedan: "Fast & powerful",
    suv: "Powerful",
  },
  {
    feature: "Best For",
    hatchback: "Budget solo trips",
    sedan: "Family & business travel",
    suv: "Groups & heavy luggage",
  },
  {
    feature: "One-Way Fare (Noida → Delhi)",
    hatchback: "From ₹1,299",
    sedan: "From ₹1,599",
    suv: "From ₹2,299",
  },
];

const VERDICTS = [
  {
    cab: "Choose Hatchback if…",
    points: [
      "You're travelling solo or as a couple",
      "You're carrying only small bags",
      "Budget is your top priority",
    ],
    highlight: false,
  },
  {
    cab: "Choose Sedan if…",
    points: [
      "You're travelling with family or for work",
      "You're carrying 2–3 suitcases",
      "You want the best comfort-to-price ratio",
    ],
    highlight: true,
  },
  {
    cab: "Choose SUV if…",
    points: [
      "You're travelling in a group of 5+",
      "You're carrying heavy or extra luggage",
      "You prefer a high, commanding ride",
    ],
    highlight: false,
  },
];

export default function CabComparison() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Compare &amp; Choose
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Sedan vs Hatchback vs SUV — Which One Should You Book?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A quick side-by-side comparison to help you pick the right cab for
            your Noida to Delhi trip.
          </p>
        </div>

        {/* ===== Comparison Table ===== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">
                Comparison of hatchback, sedan and SUV cabs for Noida to Delhi
                trips
              </caption>

              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Hatchback
                  </th>
                  <th className="relative bg-gold px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Sedan
                    <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold normal-case tracking-normal">
                      Recommended
                    </span>
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    SUV
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.hatchback}
                    </td>
                    <td className="bg-gold/5 px-6 py-4 font-semibold text-slate-900">
                      {row.sedan}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.suv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Verdict Cards ===== */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {VERDICTS.map((verdict) => (
            <div
              key={verdict.cab}
              className={`relative rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                verdict.highlight
                  ? "border-gold bg-gold/5"
                  : "border-slate-200 bg-white"
              }`}
            >
              {verdict.highlight && (
                <span className="absolute -top-3 right-5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                  Most Booked
                </span>
              )}

              <h3 className="text-lg font-bold text-slate-900">{verdict.cab}</h3>

              <ul className="mt-4 space-y-3">
                {verdict.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[15px] leading-7 text-slate-600"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        verdict.highlight
                          ? "bg-gold/15 text-gold"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {verdict.highlight && (
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
                >
                  Book Your Sedan →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ===== Sales Note ===== */}
        <p className="mt-10 text-center text-sm leading-6 text-slate-600">
          💡 <strong>Most riders choose the Sedan</strong> — for just ₹300 more
          than a hatchback, you get a bigger boot, better legroom and a much
          smoother ride.
        </p>
      </div>
    </section>
  );
}