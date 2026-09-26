import VehicleCard from "./VehicleCard";
import { vehicleFleet } from "../../../constants/VehicleFleet";

export default function VehicleFleet() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Added Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Our Vehicle Fleet
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Browse our wide selection of clean, inspected, and budget-friendly
            cars.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {vehicleFleet.map((vehicle) => (
            // No linkPrefix = defaults to "/cabs/"
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
