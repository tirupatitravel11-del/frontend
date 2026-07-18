"use client";

import { useState } from "react";
import { cabRoutes } from "../../../constants/cabRoutes";
import CabFilters from "./CabFilters";
import CabRouteCard from "./CabRouteCard";

export default function CabHub() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [tripType, setTripType] = useState("round-trip");

  const filteredRoutes = cabRoutes.filter((route) => {
    const matchesFrom = from ? route.origin === from : true;
    const matchesTo = to ? route.destination === to : true;
    const matchesVehicle = vehicle
      ? route.vehicles.some((vehicleOption) => vehicleOption.type === vehicle)
      : true;

    return matchesFrom && matchesTo && matchesVehicle;
  });

  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Cab Services
          </p>

          <h1 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">
            Book a Cab for Your Journey
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
            Choose your route, vehicle type and trip option to find the perfect
            cab for your journey.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12">
          <CabFilters
            from={from}
            to={to}
            vehicle={vehicle}
            tripType={tripType}
            setFrom={setFrom}
            setTo={setTo}
            setVehicle={setVehicle}
            setTripType={setTripType}
          />
        </div>

        {/* Results */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">
            Available Routes
          </h2>

          {filteredRoutes.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow">
              <p className="text-lg text-stone-600">
                No routes found for your selected filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredRoutes.map((route) => (
                <CabRouteCard key={route.id} {...route} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
