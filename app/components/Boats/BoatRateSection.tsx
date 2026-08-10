type RateRow = {
  tripType: string;
  duration: string;
  capacity: string;
  price: string;
};

const rates: RateRow[] = [
  {
    tripType: "Private Boat for Evening Ride",
    duration: "Approx 2 Hr",
    capacity: "Up to 10 Persons",
    price: "₹4,000*",
  },
  {
    tripType: "Morning Boat Ride",
    duration: "Approx 2 Hr",
    capacity: "Up to 10 Persons",
    price: "₹4,000*",
  },
  {
    tripType: "Birthday Celebration on Boat",
    duration: "Approx 2 Hr",
    capacity: "Up to 4 Persons",
    price: "₹4,000*",
  },
  {
    tripType: "Anniversary Celebration on Boat",
    duration: "Approx 2 Hr",
    capacity: "Up to 10 Persons",
    price: "₹4,000*",
  },
  {
    tripType: "Boat for Photography",
    duration: "Approx 2 Hr",
    capacity: "Up to 10 Persons",
    price: "₹4,000*",
  },
];

interface BoatRatesSectionProps {
  title?: string;
  accent?: string;
}

export default function BoatRatesSection({
  title = "Boat Booking",
  accent = "Rates & Charges",
}: BoatRatesSectionProps) {
  return (
    <section className="bg-white px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* ===== Section Header ===== */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Pricing
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
            {title} <span className="text-gold">{accent}</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        {/* ===== Rates Table ===== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-gold text-white">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                    Trip Type
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                    Seating Capacity
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider">
                    Rates / Charges
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rates.map((row) => (
                  <tr
                    key={row.tripType}
                    className="transition odd:bg-white even:bg-slate-50 hover:bg-gold"
                  >
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {row.tripType}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{row.duration}</td>
                    <td className="px-6 py-4 text-slate-500">{row.capacity}</td>
                    <td className="px-6 py-4 font-semibold text-gray-400">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Footnote ===== */}
        <p className="mt-4 text-xs text-slate-400">
          * Final pricing may vary depending on season, group size &amp; custom
          requirements. Call us for an exact quote.
        </p>
      </div>
    </section>
  );
}
