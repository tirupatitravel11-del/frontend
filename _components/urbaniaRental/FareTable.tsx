const PHONE_NUMBER = "+916390008503";

type FareRow = {
  model: string;
  seats: string;
  seatingPlan: string;
  localTour: number;
  perKm: number;
  popular?: boolean;
};

const FARE_ROWS: FareRow[] = [
  {
    model: "9 Seater Urbania",
    seats: "9+1",
    seatingPlan: "1*1",
    localTour: 8500,
    perKm: 35,
    popular: true,
  },
  {
    model: "9 Seater Maharaja Urbania",
    seats: "9+1",
    seatingPlan: "1*1",
    localTour: 11000,
    perKm: 45,
  },
  {
    model: "12 Seater Urbania",
    seats: "12+1",
    seatingPlan: "1*1",
    localTour: 8500,
    perKm: 35,
  },
  {
    model: "13 Seater Urbania",
    seats: "13+1",
    seatingPlan: "2*1",
    localTour: 8500,
    perKm: 35,
  },
  {
    model: "16 Seater Urbania",
    seats: "16+1",
    seatingPlan: "2*1",
    localTour: 9000,
    perKm: 37,
  },
  {
    model: "17 Seater Urbania",
    seats: "17+1",
    seatingPlan: "2*1",
    localTour: 9000,
    perKm: 37,
  },
];

export default function UrbaniaFareTable() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Transparent Pricing
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Urbania Fare Table
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Clear, fixed fares for every Urbania variant — no hidden charges, no
            last-minute surprises.
          </p>
        </div>

        {/* ===== Table ===== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              {/* ===== Table Head ===== */}
              <thead className="bg-gold text-white">
                <tr>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                    Seats
                  </th>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                    Seating Plan
                  </th>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                    Local Tour Fare
                  </th>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                    Fare Per Km
                  </th>
                  <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wider">
                    Book
                  </th>
                </tr>
              </thead>

              {/* ===== Table Body ===== */}
              <tbody className="divide-y divide-slate-200">
                {FARE_ROWS.map((row) => (
                  <tr
                    key={row.model}
                    className={`transition-colors duration-200 hover:bg-gold/5 ${
                      row.popular ? "bg-gold/10" : "bg-white"
                    }`}
                  >
                    <td className="px-5 py-4 font-bold text-slate-900">
                      <span className="flex items-center gap-2">
                        {row.model}
                        {row.popular && (
                          <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            Popular
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{row.seats}</td>
                    <td className="px-5 py-4 text-slate-600">
                      {row.seatingPlan}
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-900">
                      ₹{row.localTour.toLocaleString("en-IN")}
                    </td>
                    <td className="px-5 py-4 font-bold text-gold">
                      ₹{row.perKm}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="inline-flex rounded-full border border-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                      >
                        Book
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares include fuel, driver allowance, and AC. Tolls, parking, and
          state taxes are billed at actuals.
        </p>
      </div>
    </section>
  );
}
