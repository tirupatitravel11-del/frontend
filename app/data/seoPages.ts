export type SeoService =
  | "taxi"
  | "sedan"
  | "suv"
  | "tempo"
  | "airport"
  | "urbania-rental"
  | "innova-crysta"
  | "ertiga"
  | "dzire"
  | "etios"
  | "amaze"
  | "taxi-contact-number"
  | "luxury-tempo-traveller";

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

const cities = ["ayodhya", "varanasi", "lucknow", "prayagraj"] as const;

const cityNames: Record<(typeof cities)[number], string> = {
  ayodhya: "Ayodhya",
  varanasi: "Varanasi",
  lucknow: "Lucknow",
  prayagraj: "Prayagraj",

};

const serviceDetails: Record<
  SeoService,
  Omit<SeoPageData, "slug" | "city" | "service">
> = {
  taxi: {
    title: "Taxi Service",
    description:
      "Book reliable taxi service for comfortable local, outstation and airport travel at affordable fares.",
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
  sedan: {
    title: "Sedan Taxi",
    description:
      "Book a comfortable sedan taxi for family trips, local sightseeing, outstation travel and airport transfers.",
    intro:
      "Enjoy a smooth, comfortable and budget-friendly ride in a clean AC sedan car with experienced drivers.",
    highlights: [
      "Comfortable 4+1 seating",
      "Spacious boot for luggage",
      "Ideal for city & outstation travel",
      "Clean AC cars with expert drivers",
    ],
    popularTrips: [
      "Airport transfers",
      "Outstation journeys",
      "Local sightseeing",
      "Corporate travel",
    ],
  },
  suv: {
    title: "SUV Taxi",
    description:
      "Book a spacious SUV taxi for family trips, outstation travel, airport transfers and group journeys with premium comfort.",
    intro:
      "Travel in a roomy, comfortable SUV with ample luggage space and a professional driver for every trip.",
    highlights: [
      "6+1 to 7+1 seating",
      "Extra luggage capacity",
      "Perfect for family and group travel",
      "Comfortable AC rides",
    ],
    popularTrips: [
      "Airport transfers",
      "Family travel",
      "Outstation journeys",
      "Group bookings",
    ],
  },
  tempo: {
    title: "Tempo Traveller",
    description:
      "Hire a spacious tempo traveller for family trips, pilgrimages, group tours and comfortable local or outstation travel.",
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
      "Book reliable airport taxi service with on-time pickup, comfortable rides and convenient airport transfers.",
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
    title: "Force Urbania Rental",
    description:
      "Hire a spacious Force Urbania for family trips, group tours, local sightseeing, airport transfers and outstation travel.",
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
    title: "Innova Crysta Taxi",
    description:
      "Book a Toyota Innova Crysta taxi for comfortable local, outstation and airport travel with a professional driver.",
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
      "Book a Maruti Suzuki Ertiga taxi for family trips, local sightseeing, outstation journeys and airport transfers.",
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
      "Book an affordable Maruti Suzuki Dzire taxi for comfortable local, outstation and airport travel.",
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
      "Book a reliable Toyota Etios taxi for comfortable local, outstation and airport travel with professional drivers.",
    intro:
      "Enjoy a reliable Toyota Etios sedan with spacious luggage capacity, comfortable seating and a professional driver for family and long-distance travel.",
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
  amaze: {
    title: "Amaze Taxi",
    description:
      "Book a Honda Amaze taxi for comfortable local, outstation and airport travel with reliable service and professional drivers.",
    intro:
      "Experience Honda's refined comfort and excellent fuel efficiency in a spacious Amaze sedan, perfect for small families, airport transfers, and long-distance journeys with a professional driver.",
    highlights: [
      "Premium 4+1 seater compact sedan",
      "Spacious cabin and ample boot space for luggage",
      "Refined ride quality and excellent fuel efficiency",
      "Experienced and professional drivers",
    ],
    popularTrips: [
      "Airport transfers",
      "Small family travel",
      "Local sightseeing",
      "Outstation journeys",
    ],
  },
  "taxi-contact-number": {
    title: "Taxi Contact Number",
    description:
      "Call Tirupati Travel for taxi bookings, fare details, local and outstation cabs, airport transfers and travel assistance.",
    intro:
      "Speak with our travel team for quick taxi bookings, fare information, pickup support, and custom travel requirements.",
    highlights: [
      "24/7 booking assistance",
      "Local and outstation taxi support",
      "Quick fare and vehicle guidance",
      "Call or message us on WhatsApp",
    ],
    popularTrips: [
      "Airport transfers",
      "Railway station pickups",
      "Local sightseeing",
      "Outstation taxi bookings",
    ],
  },
  "luxury-tempo-traveller": {
    title: "Luxury Tempo Traveller",
    description:
      "Hire a Luxury Tempo Traveller for family trips, pilgrimages, weddings, group tours and comfortable outstation travel.",
    intro:
      "Experience unmatched group travel comfort with our Luxury Tempo Traveller fleet. Featuring Maharaja pusher seats, powerful AC, and ample luggage space, it is the perfect choice for weddings, pilgrimages, corporate outings, and large family vacations with a professional driver.",
    highlights: [
      "Spacious 12 to 20+ seater luxury configurations",
      "Maharaja pusher seats with armrests and reclining features",
      "Onboard entertainment with LED TV and premium music system",
      "Experienced drivers specialized in long-distance highway routes",
    ],
    popularTrips: [
      "Family vacations and group tours",
      "Wedding and event transportation",
      "Pilgrimages and religious tours",
      "Corporate outings and airport transfers",
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
    title: "Innova Crysta Taxi",
    service: "innova-crysta",
  },
  { slug: "sedan-taxi", title: "Sedan Taxi", service: "sedan" },
  { slug: "ertiga-taxi", title: "Ertiga Taxi", service: "ertiga" },
  { slug: "dzire-taxi", title: "Dzire Taxi", service: "dzire" },
  { slug: "etios-taxi", title: "Etios Taxi", service: "etios" },
  { slug: "amaze-taxi", title: "Amaze Taxi", service: "amaze" },
  {
    slug: "luxury-tempo-traveller",
    title: "Luxury Tempo Traveller",
    service: "luxury-tempo-traveller",
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
          : service === "sedan"
            ? "sedan-taxi"
            : service === "suv"
              ? "suv-taxi"
              : service === "tempo"
                ? "tempo-traveller"
                : service === "urbania-rental"
                  ? "urbania-rental"
                  : service === "innova-crysta"
                    ? "innova-crysta-taxi"
                    : service === "ertiga"
                      ? "ertiga-taxi"
                      : service === "dzire"
                        ? "dzire-taxi"
                        : service === "etios"
                          ? "etios-taxi"
                          : service === "amaze"
                            ? "amaze-taxi"
                            : service === "taxi-contact-number"
                              ? `${city}-taxi-contact-number`
                              : service === "luxury-tempo-traveller"
                                ? `${city}-luxury-tempo-traveller-taxi`
                                : "airport-taxi";
      const slug =
        service === "taxi-contact-number" ||
          service === "luxury-tempo-traveller"
          ? serviceSlug
          : `${serviceSlug}-in-${city}`;

      return [
        slug,
        {
          slug,
          city: cityName,
          service,
          ...details,
          title: `${details.title} in ${cityName}`,
          description:
            service === "taxi" && city === "ayodhya"
              ? "Book reliable taxi service in Ayodhya for local, outstation and airport travel. Choose comfortable cabs with affordable fares and easy booking."
              : `${details.description} ${cityName} bookings available for local and outstation travel.`,
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
