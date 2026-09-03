export type SeoService = "taxi" | "tempo" | "airport";

export type SeoPageData = {
  slug: string;
  city: string;
  service: SeoService;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  popularTrips: string[];
};

const cities = ["ayodhya", "varanasi", "lucknow"] as const;

const cityNames: Record<(typeof cities)[number], string> = {
  ayodhya: "Ayodhya",
  varanasi: "Varanasi",
  lucknow: "Lucknow",
};

const serviceDetails: Record<
  SeoService,
  Omit<SeoPageData, "slug" | "city" | "service">
> = {
  taxi: {
    title: "Taxi Service",
    description:
      "Book reliable local and outstation taxis with Tirupati Travel.",
    intro:
      "Travel comfortably with clean cars, experienced drivers, transparent fares, and flexible pickup options.",
    highlights: [
      "Local and outstation trips",
      "Sedan, SUV, and premium cars",
      "Verified professional drivers",
      "On-time pickup and support",
    ],
    popularTrips: [
      "Local sightseeing",
      "Railway station transfers",
      "Outstation taxi booking",
      "One-way and round trips",
    ],
  },
  tempo: {
    title: "Tempo Traveller",
    description:
      "Hire spacious tempo travellers for family trips, pilgrimages, and group tours.",
    intro:
      "Make group travel simple with comfortable, well-maintained tempo travellers and experienced drivers.",
    highlights: [
      "Vehicles for small and large groups",
      "Comfortable seating and luggage space",
      "Experienced tour drivers",
      "Custom pickup and trip plans",
    ],
    popularTrips: [
      "Family tours",
      "Pilgrimage journeys",
      "Wedding transportation",
      "Multi-city group trips",
    ],
  },
  airport: {
    title: "Airport Taxi",
    description:
      "Reserve dependable airport transfers with punctual pickup and drop service.",
    intro:
      "Reach the airport on time with pre-booked airport taxis, flight-aware support, and convenient door-to-door service.",
    highlights: [
      "Airport pickup and drop",
      "Early-morning and late-night service",
      "Flight-friendly scheduling",
      "Door-to-door convenience",
    ],
    popularTrips: [
      "Airport to hotel transfers",
      "Hotel to airport drops",
      "Railway station connections",
      "Corporate airport travel",
    ],
  },
};

export const seoPages: Record<string, SeoPageData> = Object.fromEntries(
  cities.flatMap((city) =>
    (Object.keys(serviceDetails) as SeoService[]).map((service) => {
      const cityName = cityNames[city];
      const details = serviceDetails[service];
      const serviceSlug =
        service === "taxi"
          ? "taxi-service"
          : service === "tempo"
            ? "tempo-traveller"
            : "airport-taxi";
      const slug = `${serviceSlug}-in-${city}`;

      return [
        slug,
        {
          slug,
          city: cityName,
          service,
          ...details,
          title: `${details.title} in ${cityName}`,
          description: `${details.description} ${cityName} bookings available for local and outstation travel.`,
        },
      ];
    }),
  ),
) as Record<string, SeoPageData>;

export const seoPageSlugs = Object.keys(seoPages);
