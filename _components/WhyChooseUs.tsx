type Feature = {
  icon: string;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: "💰",
    title: "Clear & Transparent Fares",
    description:
      "Get clear fare details based on your vehicle, route, trip type, and travel requirements before confirming your booking.",
  },
  {
    icon: "📍",
    title: "Convenient Pickup & Drop",
    description:
      "Choose convenient pickup and drop-off locations for local travel, airport transfers, railway stations, sightseeing, and outstation journeys.",
  },
  {
    icon: "🧑‍✈️",
    title: "Experienced Drivers",
    description:
      "Travel with experienced drivers who can assist you with local routes, sightseeing locations, airport transfers, and long-distance journeys.",
  },
  {
    icon: "🚗",
    title: "Comfortable Vehicles",
    description:
      "Choose from a range of comfortable vehicles suitable for solo travellers, families, groups, sightseeing, pilgrimages, and outstation trips.",
  },
  {
    icon: "⏰",
    title: "Flexible Travel Options",
    description:
      "Book a vehicle according to your travel requirements, whether you need a local taxi, airport transfer, one-way trip, round trip, or outstation cab.",
  },
  {
    icon: "🛣️",
    title: "Local & Outstation Travel",
    description:
      "Plan convenient journeys within the city or travel to nearby and distant destinations with suitable vehicle options for your trip.",
  },
];

interface WhyChooseUsProps {
  cityName?: string;
}

export default function WhyChooseUs({
  cityName = "your destination",
}: WhyChooseUsProps) {
  return (
    <section className="bg-stone-50 py-12 lg:py-12 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-7xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Book a Taxi with Tirupati Travels?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Book comfortable and convenient taxi services in{" "}
            <span className="font-semibold text-slate-900">
              {cityName}
            </span>{" "}
            for local travel, airport transfers, sightseeing, family trips,
            pilgrimages, and outstation journeys.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}