import { Fuel, Luggage, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type Fare = {
  slug: string;
  vehicle: string;
  seats: string;
  oneWay: {
    oneWayFare: number;
    roundTripFare: number;
  };
  roundTrip: {
    oneWayFare: number;
    roundTripFare: number;
  };
  perKm: number;
};

type Vehicle = {
  slug: string;
  name: string;
  image: string;
  fuelType: string;
  passengerCapacity: number;
};

interface LuxuryFleetDetailsProps {
  fares: Fare[];
  vehicles: Vehicle[];
}

export default function LuxuryFleetDetails({
  fares,
  vehicles,
}: any) {
  const tempoVehicles = vehicles.filter((vehicle:any) =>
    [
      "12-seater-tempo-traveller",
      "16-seater-tempo-traveller",
      "20-seater-tempo-traveller",
      "24-seater-tempo-traveller",
    ].includes(vehicle.slug)
  );

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ===== Header ===== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Luxury Fleet
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Choose Your Preferred Tempo Traveller
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
            Choose from our range of comfortable Tempo Travellers with
            spacious seating, AC and ample luggage space. Select the vehicle
            according to your group size.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {tempoVehicles.map((vehicle:any) => {
            const fare = fares.find(
              (item:any) => item.slug === vehicle.slug
            );

            if (!fare) return null;

            return (
              <article
                key={vehicle.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:shadow-xl"
              >
                {/* ===== Image ===== */}
                <div className="relative h-44 w-full overflow-hidden bg-white sm:h-52">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* ===== Content ===== */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* Vehicle Name */}
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {vehicle.name}
                  </h3>

                  <p className="mt-1.5 text-sm font-medium text-gold sm:text-base">
                    Ideal for Group Travel
                  </p>

                  {/* ===== Specs ===== */}
                  <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">

                    {/* Seats */}
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users
                        size={16}
                        className="shrink-0 text-gold"
                      />

                      <span>
                        {fare.seats} Seats
                      </span>
                    </div>

                    {/* Fuel */}
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Fuel
                        size={16}
                        className="shrink-0 text-gold"
                      />

                      <span>
                        {vehicle.fuelType}
                      </span>
                    </div>

                    {/* Luggage */}
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Luggage
                        size={16}
                        className="shrink-0 text-gold"
                      />

                      <span>
                        Ample Luggage
                      </span>
                    </div>

                    {/* AC */}
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                        ✓
                      </span>

                      <span>
                        AC
                      </span>
                    </div>
                  </div>

                  {/* ===== Divider ===== */}
                  <div className="my-5 border-t border-slate-200" />

                  {/* ===== Pricing ===== */}
                  <div className="mt-auto space-y-3">

                    {/* One Way */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-slate-500">
                        One Way Fare
                      </span>

                      <span className="text-lg font-bold text-slate-900">
                        ₹
                        {fare.oneWay.oneWayFare.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>

                    {/* Round Trip */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-slate-500">
                        Round Trip Fare
                      </span>

                      <span className="text-lg font-bold text-gold">
                        ₹
                        {fare.roundTrip.roundTripFare.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>

                  </div>

                  {/* ===== CTA ===== */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                  >
                    Book {fare.seats.split("+")[0]} Seater

                    <span className="text-lg leading-none">
                      →
                    </span>
                  </a>

                </div>
              </article>
            );
          })}
        </div>

        {/* ===== Bottom Note ===== */}
        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * Fares include fuel, driver allowance, and AC. Tolls, parking,
          permits and applicable taxes are billed at actuals.
        </p>

      </div>
    </section>
  );
}