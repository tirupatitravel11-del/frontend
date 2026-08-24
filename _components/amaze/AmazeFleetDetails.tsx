import { Fuel, Luggage, Users, Zap } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const AMAZE_FLEET = [
  {
    name: "Honda Amaze",
    tagline: "Comfortable & Spacious Sedan",
    image: "/amaze.webp",
    fuel: "Petrol",
    bootSpace: "416 Liters",
    seats: 5,
    bags: 3,
    oneWayFare: 1649,
    roundTripFare: 2749,
    badge: "Popular",
  },
];
type Fare = {
  _id?: string;
  vehicleId?: string;
  vehicleName?: string;
  oneWayPrice?: number;
  roundTripPrice?: number;
};

type Vehicle = {
  airCondition?: boolean;
  brand?: string;
  cabType?: string;
  fuelType?: string;
  image?: string;
  luggageCapacity?: number;
  name?: string;
  pageType?: string;
  passengerCapacity?: number;
  perKm?: number;
  slug?: string;
  transmission?: string;
};

type AmazeFleetDetailsProps = {
  fares: Fare[];
  vehicles: Vehicle[];
};

export default function AmazeFleetDetails({
  fares,
  vehicles,
}: AmazeFleetDetailsProps) {
  console.log(fares, "fleet fares");
  console.log(vehicles, "fleet vehicles");

  return (
    // <section className="bg-white py-12 sm:py-16">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6">
    //     <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
    //       <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
    //         Our Amaze Fleet
    //       </p>

    //       <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
    //         Honda Amaze Taxi from Noida to Delhi
    //       </h2>

    //       <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
    //         Travel in a comfortable Honda Amaze with spacious interiors,
    //         air conditioning and generous luggage space. A practical choice
    //         for family, business and airport travel.
    //       </p>
    //     </div>

    //     <div className="mx-auto max-w-xl">
    //       {AMAZE_FLEET.map((car) => (
    //         <article
    //           key={car.name}
    //           className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    //         >
    //           <span className="absolute right-3 top-3 z-10 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:right-4 sm:top-4 sm:text-[11px]">
    //             {car.badge}
    //           </span>

    //           <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-white sm:h-60">
    //             <img
    //               src={car.image}
    //               alt="Honda Amaze taxi from Noida to Delhi"
    //               className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-4"
    //             />
    //           </div>

    //           <div className="flex flex-1 flex-col p-4 sm:p-6">
    //             <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
    //               {car.name}
    //             </h3>

    //             <p className="mt-1 text-sm font-medium text-gold">
    //               {car.tagline}
    //             </p>

    //             <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
    //               <div className="flex items-center gap-2 text-sm text-slate-600">
    //                 <Users size={16} className="text-gold" />
    //                 <span>{car.seats} Seats</span>
    //               </div>

    //               <div className="flex items-center gap-2 text-sm text-slate-600">
    //                 <Luggage size={16} className="text-gold" />
    //                 <span>{car.bags} Bags</span>
    //               </div>

    //               <div className="flex items-center gap-2 text-sm text-slate-600">
    //                 <Fuel size={16} className="text-gold" />
    //                 <span>{car.fuel}</span>
    //               </div>

    //               <div className="flex items-center gap-2 text-sm text-slate-600">
    //                 <Zap size={16} className="text-gold" />
    //                 <span>{car.bootSpace}</span>
    //               </div>
    //             </div>

    //             <div className="my-4 border-t border-slate-200 sm:my-5" />

    //             <div className="space-y-2">
    //               <div className="flex justify-between">
    //                 <span className="text-sm text-slate-500">
    //                   One-Way Fare
    //                 </span>

    //                 <span className="font-bold text-slate-900">
    //                   ₹{fare?.oneWayPrice?.toLocaleString("en-IN")}
    //                 </span>
    //               </div>

    //               <div className="flex justify-between">
    //                 <span className="text-sm text-slate-500">
    //                   Round-Trip Fare
    //                 </span>

    //                 <span className="font-bold text-gold">
    //                   ₹{fare?.roundTripPrice?.toLocaleString("en-IN")}

    //                 </span>
    //               </div>
    //             </div>

    //             <a
    //               href={`tel:${PHONE_NUMBER}`}
    //               className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all hover:bg-gold hover:text-white sm:mt-6"
    //             >
    //               Book Honda Amaze →
    //             </a>
    //           </div>
    //         </article>
    //       ))}
    //     </div>

    //     <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
    //       * Fares include fuel, driver allowance and AC. Tolls, parking and
    //       applicable taxes are billed at actuals.
    //     </p>
    //   </div>
    // </section>
       <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Fleet
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Taxi from Noida to Delhi
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Travel in a comfortable and reliable taxi with spacious interiors,
            air conditioning and generous luggage space.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          {vehicles.map((vehicle) => {

            // Vehicle ke slug/id ke according matching fare nikalo
            const fare = fares.find(
              (item) => item.vehicleId === vehicle.slug
            );

            console.log("Vehicle:", vehicle);
            console.log("Matching Fare:", fare);

            return (
              <article
                key={vehicle.slug || vehicle.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Badge */}
                <span className="absolute right-3 top-3 z-10 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md sm:right-4 sm:top-4 sm:text-[11px]">
                  Popular
                </span>

                {/* Image */}
                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-white sm:h-60">
                  <img
                    src={vehicle.image || "/amaze.webp"}
                    alt={`${vehicle.name || "Taxi"} from Noida to Delhi`}
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-4"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">

                  {/* Vehicle Name */}
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {vehicle.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-gold">
                    {vehicle.brand} {vehicle.cabType}
                  </p>

                  {/* Vehicle Details */}
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users size={16} className="text-gold" />
                      <span>
                        {vehicle.passengerCapacity} Seats
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Luggage size={16} className="text-gold" />
                      <span>
                        {vehicle.luggageCapacity} Bags
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Fuel size={16} className="text-gold" />
                      <span>
                        {vehicle.fuelType}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Zap size={16} className="text-gold" />
                      <span>
                        {vehicle.transmission}
                      </span>
                    </div>

                  </div>

                  {/* Extra Details */}
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">

                    <div>
                      <span className="font-medium">
                        AC:
                      </span>{" "}
                      {vehicle.airCondition ? "Yes" : "No"}
                    </div>

                    <div>
                      <span className="font-medium">
                        Per KM:
                      </span>{" "}
                      ₹{vehicle.perKm}
                    </div>

                  </div>

                  <div className="my-4 border-t border-slate-200 sm:my-5" />

                  {/* Fare */}
                  <div className="space-y-2">

                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">
                        One-Way Fare
                      </span>

                      <span className="font-bold text-slate-900">
                        ₹
                        {fare?.oneWayPrice?.toLocaleString("en-IN") || "N/A"}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">
                        Round-Trip Fare
                      </span>

                      <span className="font-bold text-gold">
                        ₹
                        {fare?.roundTripPrice?.toLocaleString("en-IN") || "N/A"}
                      </span>
                    </div>

                  </div>

                  {/* Book Button */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-bold text-gold transition-all hover:bg-gold hover:text-white sm:mt-6"
                  >
                    Book {vehicle.name || "Taxi"} →
                  </a>

                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares include fuel, driver allowance and AC. Tolls, parking and
          applicable taxes are billed at actuals.
        </p>

      </div>
    </section>
  );
}