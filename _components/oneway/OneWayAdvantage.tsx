import { Briefcase, Home, Package, Plane } from "lucide-react";

interface OneWayAdvantageProps {
  oneWayFare?: number;
  roundTripFare?: number;
}

const USE_CASES = [
  {
    icon: Plane,
    title: "Airport Drops",
    description:
      "Catching a flight from the destination city? Drop at the terminal and fly out — no cab needed back.",
  },
  {
    icon: Package,
    title: "Shifting & Relocation",
    description:
      "Moving to a new city with luggage? Pay only for the journey there, not for an empty return.",
  },
  {
    icon: Briefcase,
    title: "One-Way Business Trips",
    description:
      "Attend your meeting and return later by train or flight. Why pay a cab to wait all day?",
  },
  {
    icon: Home,
    title: "Family & Hometown Visits",
    description:
      "Get dropped at your destination comfortably — plan your return on your own schedule.",
  },
];

export default function OneWayAdvantage({
  oneWayFare = 1599,
  roundTripFare = 2699,
}: OneWayAdvantageProps) {
  const savings = roundTripFare - oneWayFare;

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            The One-Way Advantage
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Why Pay for a Return Journey You Don&apos;t Need?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Most cab services quietly charge you for the driver&apos;s empty
            return. We don&apos;t. Here&apos;s the honest math.
          </p>
        </div>

        {/* ===== Comparison Cards ===== */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Old Way */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Typical Cab Service
            </p>

            <p className="mt-4 text-4xl font-bold text-slate-400 line-through">
              ₹{roundTripFare.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              You pay for two journeys — even though you only take one.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Driver's empty return added to your bill",
                "Round-trip pricing even for a simple drop",
                "Meter & surge uncertainty on top",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[15px] leading-7 text-slate-500"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-400">
                    ✕
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* One-Way Way */}
          <div className="relative rounded-2xl bg-gold p-8 text-white shadow-xl">
            <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
              You save ₹{savings.toLocaleString("en-IN")}
            </span>

            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Our One-Way Cab
            </p>

            <p className="mt-4 text-4xl font-bold">
              ₹{oneWayFare.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-sm text-white/90">
              You pay only for your journey. We handle the return.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Zero charges for the driver's empty return",
                "Fixed fare quoted before you book",
                "Drop anywhere in the destination city",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[15px] leading-7 text-white"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== Who Is It Perfect For ===== */}
        <div className="mt-14">
          <h3 className="text-center text-xl font-bold text-slate-900">
            One-Way Cabs Are Perfect For
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((useCase) => {
              const Icon = useCase.icon;

              return (
                <div
                  key={useCase.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-slate-900">
                    {useCase.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}