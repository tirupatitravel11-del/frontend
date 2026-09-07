import { Fuel, Luggage, Users } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

type Vehicle = {
  slug: string;
  name: string;
  image: string;
  fuelType: string;
  passengerCapacity: number;
};

interface LuxuryTaxiFleetProps {
  vehicles?: Vehicle[];  // ← Now optional
}

export default function LuxuryTaxiFleet({
  vehicles = [],  // ← Default to empty array
}: LuxuryTaxiFleetProps) {
  const tempoVehicles = vehicles.filter((vehicle) =>
    [
      "12-seater-tempo-traveller",
      "16-seater-tempo-traveller",
      "20-seater-tempo-traveller",
      "24-seater-tempo-traveller",
    ].includes(vehicle.slug)
  );

  // If no vehicles data, show a friendly fallback
  if (tempoVehicles.length === 0) {
    return (
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Our Luxury Fleet
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Choose Your Preferred Tempo Traveller
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
              Choose from our range of comfortable Tempo Travellers with
              spacious seating, powerful AC, and ample luggage space.
            </p>
          </div>

          {/* Fallback Message */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
            <p className="text-base font-semibold text-slate-900">
              Fleet details coming soon!
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Please call us to know more about our luxury tempo traveller
              options and availability.
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-gold/90"
            >
              Call for Fleet Info
            </a>
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
            * All bookings include an experienced driver, fuel, and AC. Tolls,
            parking, state permits, and applicable taxes are charged at actuals.
          </p>
        </div>
      </section>
    );
  }

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
            spacious seating, powerful AC, and ample luggage space. Select the
            vehicle according to your group size.
          </p>
        </div>

        {/* ===== Fleet Grid ===== */}
        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {tempoVehicles.map((vehicle) => {
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
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {vehicle.name}
                  </h3>

                  <p className="mt-1.5 text-sm font-medium text-gold sm:text-base">
                    Ideal for Group Travel
                  </p>

                  {/* ===== Specs ===== */}
                  <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users size={16} className="shrink-0 text-gold" />
                      <span>{vehicle.passengerCapacity}+1 Seats</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Fuel size={16} className="shrink-0 text-gold" />
                      <span>{vehicle.fuelType}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Luggage size={16} className="shrink-0 text-gold" />
                      <span>Ample Luggage</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                        ✓
                      </span>
                      <span>Powerful AC</span>
                    </div>
                  </div>

                  <div className="my-5 border-t border-slate-200" />

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold/10 py-3 text-sm font-bold text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                  >
                    Book {vehicle.name}
                    <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500 sm:mt-10 sm:text-sm">
          * All bookings include an experienced driver, fuel, and AC. Tolls,
          parking, state permits, and applicable taxes are charged at actuals.
        </p>
      </div>
    </section>
  );
}