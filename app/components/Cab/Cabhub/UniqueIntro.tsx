// import type { UniqueLocation } from "../../../constants/uniqueLocations";

import { UniqueLocation } from "@/app/constants/UniqueLocation";
import { capitalizeFirstLetter } from "@/app/utils/commonfunction";

type UniqueIntroProps = {
  location: UniqueLocation;
};

export default function UniqueIntro({ data }: any) {
  return (
    <section className="border-t border-stone-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
          Taxi Service in {capitalizeFirstLetter(data.cityName)} – Fixed Fares,
          Reliable Cabs from ₹{data.startingFare}/km & 24/7 Booking
        </h2>

        <p className="mt-6 max-w-7xl text-lg leading-9 text-stone-600">
          Tirupati Travel offers a reliable and transparent Cab service in{" "}
          {capitalizeFirstLetter(data.cityName)} for local travel, airport
          transfers, outstation journeys, and intercity trips. Our fleet
          includes hatchbacks, sedans, SUVs, Innova cars, and larger vehicles,
          making it easy to find a cab suited to your travel requirements.
          Whether you are travelling within{" "}
          {capitalizeFirstLetter(data.cityName)} or planning a journey to
          popular destinations, you can choose from comfortable vehicles and
          flexible booking options. With clear pricing, verified drivers,
          well-maintained cabs, and support available around the clock, we make
          every journey simple and dependable. Book your{" "}
          {capitalizeFirstLetter(data.cityName)} taxi in advance to get a
          comfortable vehicle, convenient pickup, and reliable service for your
          next trip.
        </p>
      </div>
      _
    </section>
  );
}
