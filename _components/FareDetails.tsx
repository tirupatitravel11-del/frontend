type FareRow = {
  cab: string;
  oneWay: number;
  roundTrip: number;
  extraKm: number;
  popular?: boolean;
};

const FARES: FareRow[] = [
  {
    cab: "Hatchback (WagonR, Swift)",
    oneWay: 1299,
    roundTrip: 2199,
    extraKm: 12,
  },
  {
    cab: "Sedan (Dzire, Amaze)",
    oneWay: 1599,
    roundTrip: 2699,
    extraKm: 14,
    popular: true,
  },
  {
    cab: "SUV (Ertiga, Carens)",
    oneWay: 2299,
    roundTrip: 3899,
    extraKm: 17,
  },
  {
    cab: "Innova Crysta",
    oneWay: 2999,
    roundTrip: 4999,
    extraKm: 20,
  },
];

const INCLUDED = [
  "Fuel & driver allowance",
  "AC in all cabs",
  "Pickup from any Noida sector",
  "On-time pickup guarantee",
  "Free cancellation up to 2 hours before pickup",
];

const EXTRAS = [
  "Tolls & parking charges (at actuals)",
  "Night charges: ₹200 (10 PM – 6 AM)",
  "Kilometres beyond package limit",
  "Airport entry fee (for airport drops)",
];

interface FareDetailsProps {
  from: string;
  to: string;
  title?: string;
  subtitle?: string;
}

export default function FareDetails({
  to,
  from,
  title,
  subtitle = "Transparent, fixed pricing — the fare you see is the fare you pay. No surge pricing, no hidden charges.",
}: FareDetailsProps) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Transparent Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title || `${from} to ${to} Taxi Fare Details`}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
        </div>

        {/* ===== Fare Table ===== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                {from} to {to} taxi fares for one-way and round trips by cab
                type
              </caption>

              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Cab Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    One Way
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Round Trip
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Extra ₹/km
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {FARES.map((row) => (
                  <tr
                    key={row.cab}
                    className={
                      row.popular
                        ? "bg-gold/5"
                        : "transition-colors hover:bg-slate-50"
                    }
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-slate-900">
                          {row.cab}
                        </span>

                        {row.popular && (
                          <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-lg font-bold text-slate-900">
                      ₹{row.oneWay.toLocaleString("en-IN")}
                    </td>

                    <td className="px-6 py-5 text-lg font-bold text-gold">
                      ₹{row.roundTrip.toLocaleString("en-IN")}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      ₹{row.extraKm}/km
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Included vs Extras ===== */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* ===== Included ===== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              What&apos;s Included
            </h3>

            <ul className="mt-4 space-y-3">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-7 text-slate-600"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Extras ===== */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              Extra Charges
            </h3>

            <ul className="mt-4 space-y-3">
              {EXTRAS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-7 text-slate-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== Disclaimer ===== */}
        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          * Fares apply to standard Noida–Delhi routes (up to 40 km). Tolls,
          parking & airport entry fees are billed at actuals. Prices may vary
          slightly during peak hours.
        </p>
      </div>
    </section>
  );
}
