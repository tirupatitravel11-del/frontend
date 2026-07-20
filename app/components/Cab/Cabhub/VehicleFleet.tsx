import VehicleCard from "./VehicleCard";
import { vehicleFleet } from "../../../constants/VehicleFleet";

export default function VehicleFleet() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-stone-900 md:text-5xl">
            Our Cab Fleet
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg text-stone-600">
            Pick the perfect vehicle for your journey, from comfortable sedans
            to spacious buses.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {vehicleFleet.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
