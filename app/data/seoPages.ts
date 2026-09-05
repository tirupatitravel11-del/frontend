export type SeoService =
  | "taxi"
  | "tempo"
  | "airport"
  | "urbania-rental"
  | "innova-crysta"
  | "ertiga"
  | "dzire"
  | "etios";

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
  "urbania-rental": {
    title: "Urbania Rental",
    description:
      "Hire a comfortable Force Urbania for local trips, group travel, and outstation journeys.",
    intro:
      "Travel with extra space and comfort in a well-maintained Force Urbania with a professional driver.",
    highlights: [
      "Spacious group travel",
      "Local and outstation rentals",
      "Experienced professional drivers",
      "Comfortable AC interiors",
    ],
    popularTrips: [
      "Local sightseeing",
      "Family group tours",
      "Airport transfers",
      "Outstation travel",
    ],
  },
  "innova-crysta": {
    title: "Innova Crysta",
    description:
      "Book a comfortable Toyota Innova Crysta for local and outstation travel.",
    intro:
      "Travel in a premium, spacious Innova Crysta with an experienced professional driver.",
    highlights: [
      "Premium SUV comfort",
      "Local and outstation trips",
      "Spacious luggage capacity",
      "Professional drivers",
    ],
    popularTrips: [
      "Airport transfers",
      "Family travel",
      "Local sightseeing",
      "Outstation journeys",
    ],
  },
  ertiga: {
    title: "Ertiga Taxi",
    description:
      "Book a comfortable Maruti Suzuki Ertiga taxi for local and outstation travel.",
    intro:
      "Travel with family or a small group in a spacious Ertiga with a professional driver.",
    highlights: [
      "Comfortable 6 to 7 seater",
      "Local and outstation trips",
      "Family-friendly luggage space",
      "Experienced drivers",
    ],
    popularTrips: [
      "Airport transfers",
      "Family travel",
      "Local sightseeing",
      "Outstation journeys",
    ],
  },
  dzire: {
    title: "Dzire Taxi",
    description:
      "Book a budget-friendly Maruti Suzuki Dzire sedan taxi for local and outstation travel.",
    intro:
      "Enjoy a smooth and economical ride in a comfortable Dzire sedan, perfect for couples, small families, and business travel with a professional driver.",
    highlights: [
      "Comfortable 4+1 seater sedan",
      "Highly fuel-efficient and budget-friendly",
      "Spacious boot for luggage",
      "Experienced and professional drivers",
    ],
    popularTrips: [
      "Airport transfers",
      "Couple and small family travel",
      "Local sightseeing",
      "Outstation journeys",
    ],
  },
  etios: {
    title: "Etios Taxi",
    description:
      "Book a reliable and spacious Toyota Etios sedan taxi for comfortable local and outstation travel.",
    intro:
      "Experience legendary Toyota reliability and exceptional boot space in a comfortable Etios sedan, perfect for families, airport transfers, and long-distance journeys with a professional driver.",
    highlights: [
      "Comfortable 4+1 seater sedan",
      "Exceptionally spacious boot for heavy luggage",
      "Smooth ride quality and legendary reliability",
      "Experienced and professional drivers",
    ],
    popularTrips: [
      "Airport transfers",
      "Family and group travel",
      "Local sightseeing",
      "Outstation journeys",
    ],
  },
};

const vehicleServices = [
  {
    slug: "urbania-rental",
    title: "Urbania Rental",
    service: "urbania-rental",
  },
  {
    slug: "innova-crysta",
    title: "Innova Crysta",
    service: "innova-crysta",
  },
  { slug: "ertiga-taxi", title: "Ertiga Taxi", service: "ertiga" },
  { slug: "dzire-taxi", title: "Dzire Taxi", service: "dzire" },
  { slug: "etios-taxi", title: "Etios Taxi", service: "etios" },
  { slug: "amaze-taxi", title: "Amaze Taxi", service: "taxi" },
  {
    slug: "taxi-contact-number",
    title: "Taxi Contact Number",
    service: "taxi",
  },
  {
    slug: "luxury-tempo-traveller",
    title: "Luxury Tempo Traveller",
    service: "tempo",
  },
  {
    slug: "12-seater-tempo-traveller",
    title: "12 Seater Tempo Traveller",
    service: "tempo",
  },
  {
    slug: "16-seater-tempo-traveller",
    title: "16 Seater Tempo Traveller",
    service: "tempo",
  },
  {
    slug: "20-seater-tempo-traveller",
    title: "20 Seater Tempo Traveller",
    service: "tempo",
  },
  {
    slug: "24-seater-tempo-traveller",
    title: "24 Seater Tempo Traveller",
    service: "tempo",
  },
] as const;

export const seoPages: Record<string, SeoPageData> = Object.fromEntries(
  cities.flatMap((city) => [
    ...(Object.keys(serviceDetails) as SeoService[]).map((service) => {
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
    ...vehicleServices.map((vehicle) => {
      const cityName = cityNames[city];
      const details = serviceDetails[vehicle.service];
      const slug = `${vehicle.slug}-in-${city}`;

      return [
        slug,
        {
          slug,
          city: cityName,
          service: vehicle.service,
          ...details,
          title: `${vehicle.title} in ${cityName}`,
          description: `${details.description} ${cityName} bookings available for local and outstation travel.`,
        },
      ];
    }),
  ]),
) as Record<string, SeoPageData>;

export const seoPageSlugs = Object.keys(seoPages);
