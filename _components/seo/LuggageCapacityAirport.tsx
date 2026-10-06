import {
  Luggage,
  Backpack,
  Users,
  CheckCircle2,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";

interface VehicleCapacity {
  name: string;
  passengers: string;
  largeBags: number;
  smallBags: number;
  bestFor: string;
  features: string[];
}

interface LuggageCapacityProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  vehicles?: VehicleCapacity[];
}

const defaultVehicles: VehicleCapacity[] = [
  {
    name: "Swift",
    passengers: "4 + 1",
    largeBags: 1,
    smallBags: 2,
    bestFor: "Solo Travelers & Couples",
    features: ["Fuel Efficient", "Budget Friendly"],
  },
  {
    name: "Dzire",
    passengers: "4 + 1",
    largeBags: 2,
    smallBags: 2,
    bestFor: "Small Families & Business Trips",
    features: ["Comfortable", "Budget Friendly"],
  },
  {
    name: "Ertiga",
    passengers: "6 + 1",
    largeBags: 3,
    smallBags: 2,
    bestFor: "Families & Small Groups",
    features: ["Extra Luggage Space", "Family Friendly"],
  },
  {
    name: "Creta",
    passengers: "4 + 1",
    largeBags: 2,
    smallBags: 3,
    bestFor: "Premium City & Outstation Travel",
    features: ["Spacious Interior", "Comfortable SUV"],
  },
  {
    name: "Innova Crysta",
    passengers: "6 + 1",
    largeBags: 4,
    smallBags: 3,
    bestFor: "Families & Group Airport Transfers",
    features: ["Premium Comfort", "Spacious Luggage Area"],
  },
];

export default function LuggageCapacityAirport({
  eyebrow = "Airport Travel Guide",
  title = "Choose the Right Vehicle for Your Luggage",
  subtitle = "Traveling to or from the airport? Choose a vehicle based on your group size and luggage requirements for a more comfortable journey.",
  vehicles = defaultVehicles,
}: LuggageCapacityProps) {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-12 sm:py-12 lg:py-12 border-b border-slate-200">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-7xl text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-gold shadow-sm">
            <Luggage className="h-4 w-4" />
            {eyebrow}
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-7xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {subtitle}
          </p>

          
        </div>

        {/* Vehicle Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
            >
              {/* Card Header */}
              <div className="border-b border-slate-100 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      {vehicle.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10">
                        <Users className="h-4 w-4 text-gold" />
                      </span>

                      <span>
                        <strong className="text-slate-700">
                          {vehicle.passengers}
                        </strong>{" "}
                        Passengers
                      </span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <Luggage className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Luggage Section */}
              <div className="p-5 sm:p-6">
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Luggage Capacity
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Recommended capacity
                      </p>
                    </div>

                    
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Large Bags */}
                    <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                        <Luggage className="h-5 w-5" />
                      </div>

                      <p className="mt-2 text-2xl font-bold text-slate-900">
                        {vehicle.largeBags}
                      </p>

                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Large Bags
                      </p>
                    </div>

                    {/* Small Bags */}
                    <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Backpack className="h-5 w-5" />
                      </div>

                      <p className="mt-2 text-2xl font-bold text-slate-900">
                        {vehicle.smallBags}
                      </p>

                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Small Bags
                      </p>
                    </div>
                  </div>
                </div>

                {/* Best For */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[1.5px] text-slate-400">
                    Best For
                  </p>

                  <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">
                    {vehicle.bestFor}
                  </p>
                </div>

                {/* Features */}
                <div className="mt-5 space-y-2.5">
                  {vehicle.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto border-t border-slate-100 p-5 sm:p-6">
                <a
  href={`https://wa.me/918726124680?text=${encodeURIComponent(
    `Hello Tirupati Travels, I want to book a ${vehicle.name} for airport travel. Please share the availability and fare.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="group/cta flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-white transition hover:bg-gold/90"
>
  Book {vehicle.name}
  <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
</a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Information */}
        {/* <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gold/20 bg-white p-5 text-center shadow-sm sm:p-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Luggage className="h-5 w-5" />
            </div>

            <p className="text-sm leading-6 text-slate-600 sm:text-left">
              <strong className="text-slate-900">
                Need more luggage space?
              </strong>{" "}
              Let us know your passenger count and luggage requirements when
              booking, and we can help you choose a suitable vehicle.
            </p>
          </div>
        </div> */}

        {/* Booking CTA */}
        {/* <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Need help choosing the right airport taxi?
          </p>

          <a
            href="tel:+918726124680"
            className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-gold px-6 py-3 text-sm font-bold text-gold transition hover:bg-gold hover:text-white"
          >
            Call Now: 8726124680
            <ArrowRight className="h-4 w-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
}