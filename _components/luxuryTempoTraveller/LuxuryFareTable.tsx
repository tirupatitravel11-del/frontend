import { Phone } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type FareRow = {
  vehicle: string;
  seats?: string;
  oneWay?: number;
  roundTrip?: number;
  perKm?: number;
  popular?: boolean;
};

interface LuxuryFareTableProps {
  from: string;
  to: string;
  title?: string;
  fares: FareRow[];
}

/*
  Expected `fares` data shape (from your page data / CMS):

  fares = [
    { vehicle: "12 Seater Tempo Traveller", seats: "12+1", oneWay: 7500,  roundTrip: 14000, perKm: 30, popular: true },
    { vehicle: "16 Seater Tempo Traveller", seats: "16+1", oneWay: 8500,  roundTrip: 16000, perKm: 32 },
    { vehicle: "20 Seater Tempo Traveller", seats: "20+1", oneWay: 9500,  roundTrip: 18000, perKm: 35 },
    { vehicle: "24 Seater Tempo Traveller", seats: "24+1", oneWay: 11000, roundTrip: 21000, perKm: 38 },
  ];
*/

export default function LuxuryFareTable({
  from,
  to,
  title,
  fares,
}: LuxuryFareTableProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Transparent Pricing
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {title || `${from} to ${to} Luxury Tempo Traveller Fares`}
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Fixed, all-inclusive fares for every seater option. No surge, no
            hidden charges — the price you see is the price you pay.
          </p>
        </div>

        {/* ===== Desktop Table ===== */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                  Vehicle
                </th>
                <th className="px-4 py-4 text-xs font-bold uppercase tracking-widest">
                  Seats
                </th>
                <th className="px-4 py-4 text-xs font-bold uppercase tracking-widest">
                  One Way
                </th>
                <th className="px-4 py-4 text-xs font-bold uppercase tracking-widest">
                  Round Trip
                </th>
                <th className="px-4 py-4 text-xs font-bold uppercase tracking-widest">
                  Per Km
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-widest">
                  Book
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              {fares.map((fare) => (
                <tr
                  key={fare.vehicle}
                  className={`transition-colors hover:bg-slate-50 ${
                    fare.popular ? "bg-gold/5" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-900">
                      {fare.vehicle}
                    </span>
                    {fare.popular && (
                      <span className="ml-2 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        Most Popular
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-slate-600">{fare.seats}</td>
                  <td className="px-4 py-4 text-base font-bold text-gold">
                    ₹{fare.oneWay?.toLocaleString("en-IN")}
                  </td>
                  <td className="px-4 py-4 font-semibold text-slate-900">
                    ₹{fare.roundTrip?.toLocaleString("en-IN")}
                  </td>
                  <td className="px-4 py-4 text-slate-600">₹{fare.perKm}/km</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-4 py-2 text-xs font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                    >
                      <Phone size={13} />
                      Call Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Mobile Cards ===== */}
        <div className="space-y-4 md:hidden">
          {fares.map((fare) => (
            <div
              key={fare.vehicle}
              className={`rounded-2xl border bg-white p-5 shadow-sm ${
                fare.popular ? "border-gold" : "border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-bold text-slate-900">
                  {fare.vehicle}
                </p>
                {fare.popular && (
                  <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Popular
                  </span>
                )}
              </div>

              {fare.seats && (
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {fare.seats} Seats
                </p>
              )}

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-gold/10 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    One Way
                  </p>
                  <p className="mt-1 text-sm font-bold text-gold">
                    ₹{fare.oneWay?.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Round Trip
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    ₹{fare.roundTrip?.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Per Km
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    ₹{fare.perKm}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                <Phone size={15} />
                Book on Call
              </a>
            </div>
          ))}
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares include fuel, driver allowance and AC. Tolls, parking, and
          state taxes are billed at actuals. Night charges may apply after 12
          AM.
        </p>
      </div>
    </section>
  );
}
