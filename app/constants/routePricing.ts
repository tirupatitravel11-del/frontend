import { cabRoutes } from "./cabRoutes";
import {
  defaultVehiclePricing,
  vehiclePricing,
  type VehiclePricing,
} from "./vehiclePricing";

export function getRoutePricing(slug: string): VehiclePricing | null {
  const route = cabRoutes.find((item) => item.slug === slug);

  if (!route) {
    return null;
  }

  const startingPrice = Math.min(
    ...route.vehicles.map((vehicle) => vehicle.oneWayPrice),
  );

  return {
    price: `from ₹${startingPrice} one way`,
    offer: "10% Off",
    cta: "Book Now",
  };
}

export function getVehiclePricing(service: string): VehiclePricing {
  return vehiclePricing[service] ?? defaultVehiclePricing;
}
