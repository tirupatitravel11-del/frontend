type Feature = {
  icon: string;
  title: string;
  description: string;
};

interface WhyChooseUsProps {
  cityName?: string;
  pageSlug?: string;
  service?: string;
}

export default function WhyChooseUs({
  cityName = "your destination",
  pageSlug = "",
  service = "",
}: WhyChooseUsProps) {
  /**
   * Normalize URL/service values
   */
  const slug = pageSlug.toLowerCase();
  const serviceType = service.toLowerCase();

  /**
   * Detect Tempo Traveller pages
   */
  const isTempoTraveller =
    slug.includes("tempo-traveller") ||
    slug.includes("tempo-traveler") ||
    slug.includes("tempo") ||
    serviceType.includes("tempo-traveller") ||
    serviceType.includes("tempo traveller") ||
    serviceType.includes("tempo-traveler") ||
    serviceType.includes("tempo traveler") ||
    serviceType === "tempo" ||
    serviceType.includes("tempo");

  /**
   * Detect Urbania pages
   */
  const isUrbania =
    slug.includes("urbania") ||
    serviceType.includes("urbania");

  /**
   * Detect Sedan pages
   */
  const isSedan =
    slug.includes("sedan") ||
    serviceType === "sedan";

  /**
   * Detect SUV pages
   */
  const isSUV =
    slug.includes("suv") ||
    serviceType === "suv";

  /**
   * Detect specific Tempo Traveller seating capacity
   */
  const is12Seater =
    slug.includes("12-seater") ||
    slug.includes("12-seater-tempo") ||
    slug.includes("12-seater-tempo-traveller");

  const is16Seater =
    slug.includes("16-seater") ||
    slug.includes("16-seater-tempo") ||
    slug.includes("16-seater-tempo-traveller");

  const is20Seater =
    slug.includes("20-seater") ||
    slug.includes("20-seater-tempo") ||
    slug.includes("20-seater-tempo-traveller");

  const is24Seater =
    slug.includes("24-seater") ||
    slug.includes("24-seater-tempo") ||
    slug.includes("24-seater-tempo-traveller");

  /**
   * Determine Tempo Traveller seating label
   */
  const tempoSeater = is12Seater
    ? "12 Seater Tempo Traveller"
    : is16Seater
      ? "16 Seater Tempo Traveller"
      : is20Seater
        ? "20 Seater Tempo Traveller"
        : is24Seater
          ? "24 Seater Tempo Traveller"
          : "Tempo Traveller";

  /**
   * Decide the vehicle/service name
   */
  const serviceName = isTempoTraveller
    ? tempoSeater
    : isUrbania
      ? "Urbania"
      : isSedan
        ? "Sedan"
        : isSUV
          ? "SUV"
          : "Taxi";

  /**
   * Dynamic heading
   */
  const heading = isTempoTraveller
    ? `Why Book a ${serviceName} with Tirupati Travels?`
    : isUrbania
      ? `Why Book an Urbania with Tirupati Travels?`
      : isSedan
        ? `Why Book a Sedan with Tirupati Travels?`
        : isSUV
          ? `Why Book an SUV with Tirupati Travels?`
          : `Why Book a Taxi with Tirupati Travels?`;

  /**
   * Dynamic description
   */
  const description = isTempoTraveller
    ? `Book a comfortable ${serviceName} in ${cityName} for family trips, group travel, sightseeing, pilgrimages, weddings, airport transfers, and outstation journeys.`
    : isUrbania
      ? `Book a comfortable Urbania in ${cityName} for premium group travel, sightseeing, airport transfers, pilgrimages, weddings, and outstation journeys.`
      : `Book comfortable and convenient ${serviceName.toLowerCase()} services in ${cityName} for local travel, airport transfers, sightseeing, family trips, pilgrimages, and outstation journeys.`;

  /**
   * Dynamic features
   */
  const FEATURES: Feature[] = isTempoTraveller
    ? [
        {
          icon: "💰",
          title: "Clear & Transparent Fares",
          description: `Get clear fare details for ${serviceName} based on your route, trip type, travel date, and group requirements before confirming your booking.`,
        },
        {
          icon: "👥",
          title: "Multiple Seating Options",
          description:
            "Choose the right Tempo Traveller for your group with 12-seater, 16-seater, 20-seater, and 24-seater options.",
        },
        {
          icon: "🧳",
          title: "Spacious & Comfortable",
          description: `Enjoy spacious seating and ample luggage space in ${serviceName}, making it suitable for family trips, group tours, pilgrimages, and long-distance journeys.`,
        },
        {
          icon: "🧑‍✈️",
          title: "Experienced Drivers",
          description:
            "Travel with experienced drivers who understand local routes, sightseeing locations, pilgrimage destinations, airport transfers, and outstation journeys.",
        },
        {
          icon: "📍",
          title: "Convenient Pickup & Drop",
          description:
            "Choose convenient pickup and drop-off locations for hotels, homes, airports, railway stations, sightseeing points, and pilgrimage destinations.",
        },
        {
          icon: "🛣️",
          title: "Local & Outstation Travel",
          description: `Book ${serviceName} for local sightseeing, airport transfers, family functions, group tours, pilgrimages, weddings, and outstation travel.`,
        },
      ]
    : [
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
            "Choose from comfortable vehicles suitable for solo travellers, families, groups, sightseeing, pilgrimages, and outstation trips.",
        },
        {
          icon: "⏰",
          title: "Flexible Travel Options",
          description:
            "Choose a vehicle according to your travel requirements, whether you need local travel, airport transfers, one-way trips, round trips, or outstation journeys.",
        },
        {
          icon: "🛣️",
          title: "Local & Outstation Travel",
          description:
            "Plan convenient journeys within the city or travel to nearby and distant destinations with suitable vehicle options for your trip.",
        },
      ];

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-7xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            {description}
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