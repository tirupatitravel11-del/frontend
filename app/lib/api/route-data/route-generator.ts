import { ROUTES, Route } from "./routes";
import { VEHICLES, Vehicle } from "./vehicles";

export function calculateFare(
  distance: number,
  roundTrip = false,
) {
  const totalKm = roundTrip
    ? distance * 2
    : distance;

  return Math.round(
    (totalKm * 1.5 * 10) + 500,
  );
}



export function findVehicleFromSlug(
  pageSlug: string,
): Vehicle | null {
  const sortedVehicles = [...VEHICLES].sort(
    (a, b) => b.slug.length - a.slug.length,
  );

  const vehicle = sortedVehicles.find((vehicle) =>
    pageSlug.endsWith(`-${vehicle.slug}-taxi`),
  );

  return vehicle || null;
}
export function findRouteFromSlug(
  pageSlug: string,
  vehicle: Vehicle,
): Route | null {
  const routeSlug = pageSlug.replace(
    `-${vehicle.slug}-taxi`,
    "",
  );

  return (
    ROUTES.find(
      (route) => route.slug === routeSlug,
    ) || null
  );
}
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