import VehicleCard from "./VehicleCard";
import { vehicleFleet } from "../../../constants/VehicleFleet";

export default function VehicleFleet() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
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
