const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

type OneWayCab = {
  name: string;
  models: string;
  seats: number;
  bags: number;
  fare: number;
  extraKm: number;
  popular?: boolean;
};

const CABS: OneWayCab[] = [
  {
    name: "Hatchback",
    models: "WagonR, Swift, i20",
    seats: 4,
    bags: 2,
    fare: 1299,
    extraKm: 12,
  },
  {
    name: "Sedan",
    models: "Swift Dzire, Honda Amaze",
    seats: 4,
    bags: 3,
    fare: 1599,
    extraKm: 14,
    popular: true,
  },
  {
    name: "SUV",
    models: "Ertiga, Carens, Innova",
    seats: 6,
    bags: 4,
    fare: 2299,
    extraKm: 17,
  },
  {
    name: "Tempo Traveller",
    models: "12-Seater",
    seats: 12,
    bags: 12,
    fare: 5499,
    extraKm: 45,
  },
];

interface OneWayFareTableProps {
  from?: string;
  to?: string;
}

export default function OneWayFareTable({
  from = "Noida",
  to = "Delhi",
}: OneWayFareTableProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            One-Way Fares
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {from} to {to} One-Way Taxi Fares
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Fixed one-way pricing for every cab type. The fare below is all you
            pay — the driver&apos;s return journey is on us.
          </p>
        </div>

        {/* ===== Fare Table ===== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">
                One-way taxi fares from {from} to {to} by cab type
              </caption>

              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Cab Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Capacity
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    One-Way Fare
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Extra /km
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    Return Charge
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {CABS.map((cab) => (
                  <tr
                    key={cab.name}
                    className={
                      cab.popular
                        ? "bg-gold/5"
                        : "transition-colors hover:bg-slate-50"
                    }
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {cab.name}
                          </p>
                          <p className="text-xs text-slate-500">{cab.models}</p>
                        </div>

                        {cab.popular && (
                          <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            Most Booked
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {cab.seats} Seats • {cab.bags} Bags
                    </td>

                    <td className="px-6 py-5 text-lg font-bold text-slate-900">
                      ₹{cab.fare.toLocaleString("en-IN")}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      ₹{cab.extraKm}/km
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-lg font-bold text-gold">₹0</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Included Strip ===== */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <span className="font-bold text-gold">✓</span> Fuel &amp; driver
            included
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="font-bold text-gold">✓</span> AC in all cabs
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="font-bold text-gold">✓</span> Doorstep pickup
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="font-bold text-slate-400">•</span> Tolls &amp;
            parking extra (at actuals)
          </span>
        </div>
      </div>
    </section>
  );
}
