"use client"
import VehicleCard from "./VehicleCard";
import { vehicleFleet } from "../../../constants/VehicleFleet";

  import axios from "axios";
import { useEffect, useState } from "react";


export default function VehicleFleet() {
  const [vehiclelist, setVehiclelist] = useState<any[]>([]);

 const handleGetVehicleList = async () => {
    try {
      let res = await axios.post(
        process.env.apiUrl + "/api/dropdown-vehicle",

        { withCredentials: true },
      );
      console.log(res?.data?.data, "sdf");

      // UI state update
      setVehiclelist(res?.data?.data);
    } catch (error: any) {
      if (error?.response?.data?.error) {
        // setError(error?.response?.data?.error);
        // toast.error(error?.response?.data?.error);
      } else {
        // setError("Error.");
        // toast.error("Error.");
      }
    }
  };


  useEffect ( () => {
    handleGetVehicleList()
  }, [])
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
          {vehiclelist.map((vehicle) => (
            <VehicleCard key={vehicle._id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
