import { Luggage, Backpack, Users, CheckCircle2 } from "lucide-react";
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

// Mapped exactly to your vehicleFleet data
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
    bestFor: "Small Families & Business",
    features: ["Comfortable", "Budget Friendly"],
  },
  {
    name: "Ertiga",
    passengers: "6 + 1",
    largeBags: 3,
    smallBags: 2,
    bestFor: "Medium Families",
    features: ["Extra Luggage", "Family Travel"],
  },
  {
    name: "Creta",
    passengers: "4 + 1", // Creta is a 5-seater SUV
    largeBags: 2,
    smallBags: 3,
    bestFor: "Premium City & Outstation",
    features: ["Powerful SUV", "Spacious Interior"],
  },
  {
    name: "Innova Crysta",
    passengers: "6 + 1",
    largeBags: 4,
    smallBags: 3,
    bestFor: "Large Families & Groups",
    features: ["Premium Comfort", "Spacious"],
  },
];

export default function LuggageCapacityAirport({
  eyebrow = "Luggage Guide",
  title = "Choose the Right Space for Your Trip",
  subtitle = "Not sure which car fits your luggage? Here is a quick guide to help you pick the perfect vehicle for your journey.",
  vehicles = defaultVehicles,
}: LuggageCapacityProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-gold">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Capacity Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
            >
              {/* Vehicle Name & Passengers */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {vehicle.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                    <Users className="h-4 w-4 text-gold" />
                    <span>{vehicle.passengers} Seats</span>
                  </div>
                </div>
                {/* Visual Car Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <Luggage className="h-5 w-5" />
                </div>
              </div>

              {/* Luggage Capacity Visuals */}
              <div className="mb-6 rounded-xl bg-slate-50 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Luggage Capacity
                </p>
                <div className="flex items-center justify-between gap-2">
                  {/* Large Bags */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-100">
                      <Luggage className="h-5 w-5 text-slate-700" />
                    </div>
                    <span className="text-lg font-bold text-slate-900">
                      {vehicle.largeBags}
                    </span>
                    <span className="text-[10px] font-medium uppercase text-slate-500">
                      Large
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-12 w-px bg-slate-200" />

                  {/* Small Bags */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-100">
                      <Backpack className="h-5 w-5 text-slate-700" />
                    </div>
                    <span className="text-lg font-bold text-slate-900">
                      {vehicle.smallBags}
                    </span>
                    <span className="text-[10px] font-medium uppercase text-slate-500">
                      Small
                    </span>
                  </div>
                </div>
              </div>

              {/* Best For & Features */}
              <div className="mt-auto space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Best For
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {vehicle.bestFor}
                  </p>
                </div>

                <ul className="space-y-2">
                  {vehicle.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
