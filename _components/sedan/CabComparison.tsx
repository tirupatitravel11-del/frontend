const PHONE_NUMBER = "+916390008503";

type ColumnKey = "sedan" | "suv" | "tempo" | "urbania";

type FleetColumn = {
  key: ColumnKey;
  name: string;
  highlight?: boolean;
};

const COLUMNS: FleetColumn[] = [
  { key: "sedan", name: "Sedan" },
  { key: "suv", name: "SUV", highlight: true },
  { key: "tempo", name: "Tempo Traveller" },
  { key: "urbania", name: "Force Urbania" },
];

type CompareRow = {
  feature: string;
  values: Record<ColumnKey, string>;
};

const ROWS: CompareRow[] = [
  {
    feature: "Seating Capacity",
    values: {
      sedan: "4 passengers",
      suv: "6–7 passengers",
      tempo: "9–20 passengers",
      urbania: "9–17 passengers",
    },
  },
  {
    feature: "Luggage Space",
    values: {
      sedan: "3 large bags",
      suv: "4–5 bags",
      tempo: "4–10 bags",
      urbania: "5–9 bags",
    },
  },
  {
    feature: "Comfort Level",
    values: {
      sedan: "Premium & quiet",
      suv: "Spacious & high",
      tempo: "Comfortable group ride",
      urbania: "Luxury pushback seats",
    },
  },
  {
    feature: "AC Performance",
    values: {
      sedan: "Fast & powerful",
      suv: "Powerful",
      tempo: "Strong group cooling",
      urbania: "Individual AC vents",
    },
  },
  {
    feature: "Best For",
    values: {
      sedan: "Family & business travel",
      suv: "Groups & heavy luggage",
      tempo: "Large groups on a budget",
      urbania: "Weddings, VIP & corporate",
    },
  },
  {
    feature: "Starting One-Way Fare",
    values: {
      sedan: "From ₹1,599",
      suv: "From ₹2,299",
      tempo: "From ₹3,500",
      urbania: "From ₹3,500",
    },
  },
];

const VERDICTS = [
  {
    cab: "Choose Sedan if…",
    points: [
      "You're travelling with up to 4 people",
      "You're carrying 2–3 suitcases",
      "You want the best comfort-to-price ratio",
    ],
    highlight: false,
  },
  {
    cab: "Choose SUV if…",
    points: [
      "You're travelling in a group of 5–7",
      "You're carrying heavy or extra luggage",
      "You prefer a high, commanding ride",
    ],
    highlight: true,
  },
  {
    cab: "Choose Tempo Traveller if…",
    points: [
      "You're moving a large group on a budget",
      "You need maximum seating capacity",
      "It's for event, school or office shuttles",
    ],
    highlight: false,
  },
  {
    cab: "Choose Urbania if…",
    points: [
      "You want a premium, luxury travel feel",
      "You're hosting wedding guests or VIPs",
      "You want pushback seats & personal AC vents",
    ],
    highlight: false,
  },
];

export default function HelpMeChoose() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Help Me Choose
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Sedan vs SUV vs Tempo Traveller vs Urbania — Which One Should You Book?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A quick side-by-side comparison to help you pick the right vehicle
            for your group size, luggage and budget.
          </p>
        </div>

        {/* ===== Comparison Table ===== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <caption className="sr-only">
                Comparison of Sedan, SUV, Tempo Traveller and Force Urbania for
                your trip
              </caption>

              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Feature
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      className={`px-6 py-4 text-xs font-bold uppercase tracking-widest ${
                        col.highlight ? "relative bg-gold" : ""
                      }`}
                    >
                      {col.name}
                      {col.highlight && (
                        <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold normal-case tracking-normal">
                          Recommended
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    {COLUMNS.map((col) => (
                      <td
                        key={col.key}
                        className={`px-6 py-4 ${
                          col.highlight
                            ? "bg-gold/5 font-semibold text-slate-900"
                            : "text-slate-600"
                        }`}
                      >
                        {row.values[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Verdict Cards ===== */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                  Book Your SUV →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ===== Sales Note ===== */}
        <p className="mt-10 text-center text-sm leading-6 text-slate-600">
          💡 <strong>Still confused?</strong> Call us — our team will suggest the
          perfect vehicle for your group size and luggage in under a minute.
        </p>
      </div>
    </section>
  );
}