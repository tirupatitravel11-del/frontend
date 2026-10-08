import {
  BadgeCheck,
  MapPinned,
  Car,
  Route,
  Headphones,
  CalendarCheck,
} from "lucide-react";

const trustFeatures = [
  {
    icon: BadgeCheck,
    title: "Comfortable Travel",
    description:
      "Choose comfortable vehicles for sightseeing, local travel, airport transfers, and complete destination tours.",
  },
  {
    icon: MapPinned,
    title: "Explore More Places",
    description:
      "Visit popular attractions, hidden gems, temples, beaches, hill stations, and other must-see places at your destination.",
  },
  {
    icon: Car,
    title: "Choose Your Vehicle",
    description:
      "Select a vehicle that suits your trip, from comfortable sedans and SUVs to spacious Tempo Travellers and Urbania.",
  },
  {
    icon: Route,
    title: "Flexible Travel Plans",
    description:
      "Plan your journey your way with flexible sightseeing, one-way, round-trip, and multi-destination travel options.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Trip Planning",
    description:
      "Plan your destination trip with convenient pickup and drop-off options based on your travel schedule.",
  },
  {
    icon: Headphones,
    title: "Booking Assistance",
    description:
      "Get help with vehicle selection, travel plans, route details, and booking requirements from our travel team.",
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="bg-stone-50 px-4 py-12 sm:px-6 lg:py-12 border-b border-slate-200">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Travel Made Simple
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Make the Most of Your Journey
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
            From comfortable vehicles to flexible travel plans, enjoy a
            convenient way to explore your destination with Tirupati Travels.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-stone-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-stone-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}