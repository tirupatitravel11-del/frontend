// import { ROUTES, Route } from "./routes";
// import { VEHICLES, Vehicle } from "./vehicles";

// export function calculateFare(
//   distance: number,
//   roundTrip = false,
// ) {
//   const totalKm = roundTrip
//     ? distance * 2
//     : distance;

//   return Math.round(
//     (totalKm * 1.5 * 10) + 500,
//   );
// }



// export function findVehicleFromSlug(
//   pageSlug: string,
// ): Vehicle | null {
//   const sortedVehicles = [...VEHICLES].sort(
//     (a, b) => b.slug.length - a.slug.length,
//   );

//   const vehicle = sortedVehicles.find((vehicle) =>
//     pageSlug.endsWith(`-${vehicle.slug}-taxi`),
//   );

//   return vehicle || null;
// }
// export function findRouteFromSlug(
//   pageSlug: string,
//   vehicle: Vehicle,
// ): Route | null {
//   const routeSlug = pageSlug.replace(
//     `-${vehicle.slug}-taxi`,
//     "",
//   );

//   return (
//     ROUTES.find(
//       (route) => route.slug === routeSlug,
//     ) || null
//   );
// }
// export function generatePopularRoutes(
//   fromCity: string,
//   currentRouteSlug: string,
// ) {
//   return ROUTES
//     .filter(
//       (route) =>
//         route.fromCity === fromCity &&
//         route.slug !== currentRouteSlug,
//     )
//     .slice(0, 10)
//     .map((route, index) => ({
//       id: index + 1,

//       from: route.fromCity,

//       to: route.toCity,

//       distance: `${route.distance} km`,

//       duration: route.duration,

//       image: `/popular_cab_route${index + 1}.jpg`,

//       popular: true,

//       slug: route.slug,
//     }));
// }

import { ROUTES, Route } from "./routes";
import { VEHICLES, Vehicle } from "./vehicles";


// ========================================
// GENERIC PAGE TYPES
// ========================================

export type GenericPageType =
  | "taxi"
  | "taxi-fare"
  | "one-way-taxi"
  | "suv-taxi"
  | "taxi-contact-number"
  | "distance-travel-time";

export const GENERIC_PAGE_TYPES = [
  {
    pageType: "taxi" as GenericPageType,
    suffix: "-taxi",
  },
  {
    pageType: "taxi-fare" as GenericPageType,
    suffix: "-taxi-fare",
  },
  {
    pageType: "one-way-taxi" as GenericPageType,
    suffix: "-one-way-taxi",
  },
  {
    pageType: "suv-taxi" as GenericPageType,
    suffix: "-suv-taxi",
  },
  {
    pageType: "taxi-contact-number" as GenericPageType,
    suffix: "-taxi-contact-number",
  },
  {
    pageType: "distance-travel-time" as GenericPageType,
    suffix: "-distance-travel-time",
  },
];

// ========================================
// FARE
// ========================================

// export function calculateFare(
//   distance: number,
//   roundTrip = false,
// ) {
//   const totalKm = roundTrip
//     ? distance * 2
//     : distance;

//   return Math.round(
//     totalKm * 1.5 * 10 + 500,
//   );
// }

// export function calculateFare(
//   distance: number,
//   roundTrip = false,
//   perKm = 15,
// ) {
//   console.log(distance,roundTrip,parKm);
  
//   const totalKm = roundTrip
//     ? distance * 2
//     : distance;

//   return Math.round(
//     totalKm * perKm + 500
//   );
// }
export function calculateFare(
  distance: number,
  perKm: number,
) {
  const oneWayFare = Math.round(
    (distance * perKm * 1.5) + 500
  );

  const roundTripFare = Math.round(
    (distance * 2 * perKm * 1.5) + 500
  );

  return {
    oneWayFare,
    roundTripFare,
  };
}
// ========================================
// VEHICLE
// ========================================

export function findVehicleFromSlug(
  pageSlug: string,
): Vehicle | null {
  const normalizedSlug = pageSlug
    .toLowerCase()
    .replace(/^\/|\/$/g, "");

  const sortedVehicles = [...VEHICLES].sort(
    (a, b) => b.slug.length - a.slug.length,
  );

  for (const vehicle of sortedVehicles) {
    const suffixes = [
      `-${vehicle.slug}-taxi`,
      `-${vehicle.slug}`,
      `-${vehicle.pageType}`,
    ];

    for (const suffix of suffixes) {
      if (normalizedSlug.endsWith(suffix)) {
        return vehicle;
      }
    }
  }

  return null;
}


// ========================================
// ROUTE
// ========================================

export function findRouteFromSlug(
  pageSlug: string,
  vehicle: Vehicle,
): Route | null {
  const normalizedSlug = pageSlug
    .toLowerCase()
    .replace(/^\/|\/$/g, "");

  let routeSlug = normalizedSlug;

  const suffixes = [
    `-${vehicle.slug}-taxi`,
    `-${vehicle.slug}`,
    `-${vehicle.pageType}`,
  ];

  for (const suffix of suffixes) {
    if (routeSlug.endsWith(suffix)) {
      routeSlug = routeSlug.slice(
        0,
        -suffix.length,
      );

      break;
    }
  }

  return (
    ROUTES.find(
      (route) => route.slug === routeSlug,
    ) || null
  );
}


// ========================================
// POPULAR ROUTES
// ========================================

export function generatePopularRoutes(
  fromCity: string,
  currentRouteSlug: string,
) {
  return ROUTES
    .filter(
      (route) =>
        route.fromCity === fromCity &&
        route.slug !== currentRouteSlug,
    )
    .slice(0, 10)
    .map((route, index) => ({
      id: index + 1,
      from: route.fromCity,
      to: route.toCity,
      distance: `${route.distance} km`,
      duration: route.duration,
      image: `/popular_cab_route${index + 1}.jpg`,
      popular: true,
      slug: route.slug,
    }));
}

export function findGenericRouteFromSlug(
  pageSlug: string,
  pageType: GenericPageType,
): Route | null {
  const normalizedSlug = pageSlug
    .toLowerCase()
    .replace(/^\/|\/$/g, "");

  const pageConfig = GENERIC_PAGE_TYPES.find(
    (item) => item.pageType === pageType,
  );

  if (!pageConfig) {
    return null;
  }

  if (!normalizedSlug.endsWith(pageConfig.suffix)) {
    return null;
  }

  const routeSlug = normalizedSlug.slice(
    0,
    -pageConfig.suffix.length,
  );

  return (
    ROUTES.find(
      (route) => route.slug === routeSlug,
    ) || null
  );
}