import {
  calculateFare,
  findGenericRouteFromSlug,
  findRouteFromSlug,
  findVehicleFromSlug,
  generatePopularRoutes,
  GenericPageType,
} from "./route-data/route-generator";
import { VEHICLES } from "./route-data/vehicles";

export function getRoutePage(pageSlug: string) {
  // ========================================
  // 1. CHECK GENERIC PAGE
  // ========================================

  const genericPages: GenericPageType[] = [
    "taxi",
    "taxi-fare",
    "one-way-taxi",
    "suv-taxi",
    "taxi-contact-number",
    "distance-travel-time",
  ];

  for (const pageType of genericPages) {
    const route = findGenericRouteFromSlug(pageSlug, pageType);

    if (route) {
      const fares = VEHICLES.map((vehicle) => {
        const fare = calculateFare(route.distance, vehicle.perKm);

        return {
          _id: `fare-${route.slug}-${vehicle.slug}`,
          vehicleId: vehicle.slug,
          vehicleName: vehicle.name,

          oneWayPrice: fare.oneWayFare,
          roundTripPrice: fare.roundTripFare,
        };
      });

      return {
        page: {
          _id: `${route.slug}-${pageType}`,

          pageType,

          slug: pageSlug,

          h1: `${route.fromCity} to ${route.toCity} ${
            pageType === "taxi"
              ? "Taxi"
              : pageType === "taxi-fare"
                ? "Taxi Fare"
                : pageType === "one-way-taxi"
                  ? "One Way Taxi"
                  : pageType === "suv-taxi"
                    ? "SUV Taxi"
                    : pageType === "taxi-contact-number"
                      ? "Taxi Contact Number"
                      : "Distance & Travel Time"
          }`,

          metaTitle: `Tirupati Travel ${route.fromCity} to ${route.toCity} ${
            pageType === "taxi"
              ? "Premium Taxi Service – Book Now"
              : pageType === "taxi-fare"
                ? "Taxi Fare & Charges – Check Fare"
                : pageType === "one-way-taxi"
                  ? "One Way Taxi Service – Book Now"
                  : pageType === "suv-taxi"
                    ? "SUV Taxi Service – Book Now"
                    : pageType === "taxi-contact-number"
                      ? "Taxi Contact Number – Call Now"
                      : "Distance & Travel Time – Taxi Route"
          }`,
          metaDescription: `Book a premium taxi from ${route.fromCity} to ${route.toCity} with Tirupati Travel. Get reliable taxi service, route distance, travel time and easy booking options.`,

          faqs: [],
        },

        route,

        vehicles: VEHICLES,

        fares,

        popularRoutes: generatePopularRoutes(route.fromCity, route.slug),
      };
    }
  }

  // ========================================
  // 2. CHECK VEHICLE PAGE
  // ========================================

  const vehicle = findVehicleFromSlug(pageSlug);

  if (!vehicle) {
    return null;
  }

  const route = findRouteFromSlug(pageSlug, vehicle);

  if (!route) {
    return null;
  }

  const fare = calculateFare(route.distance, vehicle.perKm);

  const oneWayPrice = fare.oneWayFare;
  const roundTripPrice = fare.roundTripFare;

  return {
    page: {
      _id: `${route.slug}-${vehicle.slug}`,

      pageType: vehicle.pageType,

      slug: pageSlug,

      h1: `${route.fromCity} to ${route.toCity} ${vehicle.name} Taxi`,

      metaTitle: `${vehicle.name} on Rent in ${route.fromCity} @ ₹${vehicle.perKm}/KM – Book Now`,

      metaDescription: `Hire a ${vehicle.name} in ${route.fromCity} for local trips, airport transfers and outstation travel. Get clean AC cars, experienced drivers and dependable taxi service.`,

      faqs: [],
    },

    route,

    vehicles: [vehicle],

    fares: [
      {
        _id: `fare-${route.slug}-${vehicle.slug}`,

        vehicleId: vehicle.slug,

        vehicleName: vehicle.name,

        oneWayPrice,

        roundTripPrice,
      },
    ],

    popularRoutes: generatePopularRoutes(route.fromCity, route.slug),
  };
}
