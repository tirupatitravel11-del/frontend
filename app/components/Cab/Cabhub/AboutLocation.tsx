import {
  Landmark,
  Utensils,
  CalendarDays,
  Heart,
  Plane,
  TrainFront,
} from "lucide-react";

import type { AboutLocationData } from "../../../constants/AboutLocation";
import { capitalizeFirstLetter } from "@/app/utils/commonfunction";

type AboutLocationProps = {
  location: AboutLocationData;
};

export default function AboutLocation({ data }: any) {
  return (
    <>
      {/* About Location */}
      <section className="border-l-4 border-gold bg-[#fffbea] px-7 py-8 md:px-8">
        <h2 className="text-3xl font-bold text-stone-900">
          About {capitalizeFirstLetter(data.cityName)}
        </h2>

        <p className="mt-6 text-base leading-7 text-stone-700">
          <strong className="text-stone-900">Overview:</strong>{" "}
          {data.overview}
        </p>

        {/* Information Cards */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Famous For */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <Landmark className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">Famous For</h3>
            </div>

            <div className="mt-6 space-y-1 text-lg leading-8 text-stone-600">
              {data.famousFor.map((item:any) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          {/* Local Cuisine */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <Utensils className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">
                Local Cuisine
              </h3>
            </div>

            <div className="mt-6 space-y-1 text-lg leading-8 text-stone-600">
              {data.localCuisine.map((item:any) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          {/* Best Time */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">
                Best Time to Visit
              </h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              {data.bestToVisit}
            </p>
          </div>

          {/* Ideal For */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">Ideal For</h3>
            </div>

            <div className="mt-6 space-y-1 text-lg leading-8 text-stone-600">
              {data.idealFor.map((item:any) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Airport & Railway */}
        <div className="mt-8 grid gap-5 border-t border-stone-200 pt-6 md:grid-cols-2">
          <div className="flex items-start gap-3 text-stone-700">
            <Plane className="mt-1 h-5 w-5 shrink-0 text-gold" />

            <p>
              <strong className="text-stone-900">Nearest Airport:</strong>{" "}
              {data.nearestAirport}
            </p>
          </div>

          <div className="flex items-start gap-3 text-stone-700">
            <TrainFront className="mt-1 h-5 w-5 shrink-0 text-gold" />

            <p>
              <strong className="text-stone-900">
                Nearest Railway Station:
              </strong>{" "}
              {data.nearestRailway}
            </p>
          </div>
        </div>
      </section>

      {/* Note */}
      {/* <section className="mt-7 border-l-4 border-gold bg-[#fffbea] px-7 py-6">
        <p className="leading-7 text-stone-700">
          <strong className="text-stone-900">Note:</strong> {location.note}
        </p>
      </section> */}
    </>
  );
}
