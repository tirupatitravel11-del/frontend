import {
  Users,
  Luggage,
  Snowflake,
  Car,
  ShieldCheck,
  Armchair,
} from "lucide-react";

const DETAILS = [
  {
    icon: Users,
    title: "12 Comfortable Seats",
    description:
      "Travel together with your complete group without needing multiple cars.",
  },
  {
    icon: Snowflake,
    title: "Air Conditioned",
    description:
      "Enjoy a comfortable AC journey during local and outstation travel.",
  },
  {
    icon: Luggage,
    title: "Spacious Luggage",
    description:
      "Suitable for family luggage, suitcases and travel bags.",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    description:
      "Spacious seating arrangement designed for long and short journeys.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Driver",
    description:
      "Professional drivers for a safe and comfortable group journey.",
  },
  {
    icon: Car,
    title: "Private Vehicle",
    description:
      "The entire vehicle is reserved for your family or group.",
  },
];

export default function TempoTravellerDetails() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Vehicle Details
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            12 Seater Tempo Traveller for Group Travel
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            A practical choice when your family or group wants to travel
            together in one comfortable vehicle.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12">
          {DETAILS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}