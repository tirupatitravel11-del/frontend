import Link from "next/link";
import {
  Calculator,
  CalendarClock,
  Car,
  Clock,
  Compass,
  CreditCard,
  FileText,
  Luggage,
  Map,
  MapPin,
  Navigation,
  Route,
  ShieldCheck,
  Timer,
  UtensilsCrossed,
  WalletCards,
  Waypoints,
  Workflow,
} from "lucide-react";
import { getCityDetails } from "@/app/lib/api/route-data/route-details-helper";
import VehicleFleet from "../Cab/Cabhub/VehicleFleet";

export type ServiceFormatMode = "taxi" | "airport" | "sightseeing";

interface ServiceProps {
  city: string;
  mode: ServiceFormatMode;
}

const VEHICLE_FARES = [
  {
    vehicle: "Sedan",
    detail: "Swift Dzire / Toyota Etios / Honda Amaze",
    capacity: "4 Passengers • 3 Luggage Bags",
    starting: "₹10/km",
    oneWayEstimate: "from ₹1,499",
    tag: "Budget & Couple Friendly",
  },
  {
    vehicle: "SUV",
    detail: "Maruti Ertiga / Carens",
    capacity: "6 Passengers • 4 Luggage Bags",
    starting: "₹13/km",
    oneWayEstimate: "from ₹2,199",
    tag: "Family & Extra Boot Space",
  },
  {
    vehicle: "Innova Crysta",
    detail: "Toyota Innova Crysta (Luxury SUV)",
    capacity: "6-7 Passengers • 5 Luggage Bags",
    starting: "₹16/km",
    oneWayEstimate: "from ₹2,899",
    tag: "Executive & VIP Comfort",
  },
  {
    vehicle: "Tempo Traveller",
    detail: "Force Tempo Traveller (12, 16, 20, 24 Seater)",
    capacity: "12 to 24 Passengers • Large Luggage Space",
    starting: "₹22/km",
    oneWayEstimate: "from ₹4,499",
    tag: "Large Group & Pilgrimage Tours",
  },
];

// =========================================================================
// 2 & 3. ROUTE OVERVIEW & ROUTE MAP (Distance, travel time, actual route, highways)
// =========================================================================
export function ServiceOverviewAndMap({ city, mode }: ServiceProps) {
  const normCity = city.trim();
  const cityDetails = getCityDetails(normCity, mode);

  const title =
    mode === "airport"
      ? `Airport Taxi Service & Route Overview in ${normCity}`
      : mode === "sightseeing"
      ? `Local Sightseeing Tour & Route Overview in ${normCity}`
      : `Taxi Service & Route Overview in ${normCity}`;

  const overview =
    mode === "airport"
      ? `Reliable 24x7 airport taxi pickup and drop service in ${normCity}. Includes real-time flight tracking, airport curbside meet & greet, luggage assistance, and fixed transparent fares with zero surge charges.`
      : mode === "sightseeing"
      ? `Comprehensive half-day and full-day local sightseeing packages in ${normCity}. Explore top heritage attractions, sacred temples, riverside ghats, and vibrant markets with knowledgeable local drivers and parking assistance.`
      : `Complete taxi solution in ${normCity} covering local city rides, doorstep airport transfers, one-way drops, and outstation round-trip journeys with sanitized AC cabs and verified professional chauffeurs.`;

  const mapQuery =
    mode === "airport"
      ? `${normCity} airport`
      : mode === "sightseeing"
      ? `${normCity} tourist attractions`
      : `${normCity} city tourist destinations`;

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
          {/* Left Column: Route Overview with Distance & Time */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 sm:p-8">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
              <Route className="h-4 w-4" />
              Route Overview &amp; Travel Time
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {overview}
            </p>

            {/* Distance & Duration Highlight Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Approx Distance
                    </p>
                    <p className="text-base font-bold text-slate-900">
                      {cityDetails.distanceOverview.distanceRange}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gold/40 bg-gold/5 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">
                      Estimated Duration
                    </p>
                    <p className="text-base font-extrabold text-gold">
                      {cityDetails.distanceOverview.durationRange}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highway & Transit info */}
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Connected Highways &amp; Corridors
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {cityDetails.highways.join(" • ")}
              </p>
              <p className="mt-1.5 text-xs text-slate-500">
                {cityDetails.highwayDescription}
              </p>
            </div>
          </div>

          {/* Right Column: Route Map */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="border-b border-slate-100 bg-slate-900 px-5 py-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                Route Map &amp; Navigation
              </p>
              <p className="text-sm font-bold">
                {mode === "airport"
                  ? `${normCity} Airport Terminal Route`
                  : mode === "sightseeing"
                  ? `${normCity} Sightseeing Circuit Map`
                  : `${normCity} City &amp; Outstation Corridors`}
              </p>
            </div>
            <iframe
              title={`Map of ${mapQuery}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              className="h-[340px] w-full sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 4. FARE CALCULATOR (Vehicle-wise route-specific fare)
// =========================================================================
export function ServiceFareCalculator({ city, mode }: ServiceProps) {
  const normCity = city.trim();

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <Calculator className="h-4 w-4" />
            Fare Calculator &amp; Pricing
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Vehicle-Wise Taxi Fares in {normCity}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Transparent pricing with zero hidden surge charges. Compare starting
            per-kilometer rates and indicative fares across Sedan, SUV, Innova
            Crysta, and Tempo Traveller vehicles.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VEHICLE_FARES.map((item) => (
            <div
              key={item.vehicle}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <div>
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.vehicle}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {item.detail}
                </p>
                <p className="mt-2 text-xs text-slate-600">{item.capacity}</p>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Starting Per KM
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-gold">
                    {item.starting}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    One-way fares {item.oneWayEstimate}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="tel:+918726124680"
                  className="block w-full rounded-xl bg-stone-100 py-2.5 text-center text-xs font-bold text-slate-900 transition-all hover:bg-gold hover:text-white"
                >
                  Book {item.vehicle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 5 & 6. POPULAR DESTINATIONS & MAJOR STOPS
// =========================================================================
export function ServiceDestinationsAndStops({ city, mode }: ServiceProps) {
  const normCity = city.trim();
  const cityDetails = getCityDetails(normCity, mode);

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* 5. Popular destinations (Destination ke aas-paas ke locations) */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Map className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  Nearby Attractions
                </p>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Popular Destinations in &amp; Around {normCity}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-600 sm:text-sm">
              Explore these must-visit temples, historical monuments, ghats, and
              sightseeing landmarks with our cabs:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {cityDetails.destinations.map((destination) => (
                <li
                  key={destination}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-sm sm:text-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {destination}
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Major stops (Actual highway stops, food breaks) */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <UtensilsCrossed className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  Highway Stops &amp; Refreshments
                </p>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {mode === "sightseeing"
                    ? `Tour Halts &amp; Food Stops in ${normCity}`
                    : `Major Highway Stops &amp; Food Breaks`}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-600 sm:text-sm">
              Enjoy peaceful breaks at driver-recommended highway restaurants,
              clean restrooms, and fuel stops:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {cityDetails.stops.map((stop) => (
                <li
                  key={stop}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-sm sm:text-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {stop}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 7. ROUTE DETAILS (Toll, expressway, road conditions)
// =========================================================================
export function ServiceRouteDetails({ city, mode }: ServiceProps) {
  const normCity = city.trim();
  const cityDetails = getCityDetails(normCity, mode);

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <FileText className="h-4 w-4" />
            Route &amp; Highway Specifications
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Route Details: Tolls, Expressways &amp; Road Conditions
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Crucial road information for hassle-free travel across {normCity} and
            its connecting outstation highway corridors.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <CreditCard className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Tolls &amp; Entry Fees
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {cityDetails.tollInfo}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Route className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Expressway Connectivity
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {cityDetails.highwayDescription}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Road Conditions
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {cityDetails.roadCondition}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 9 & 10. TRAVEL PURPOSES & NEARBY PICKUP AREAS
// =========================================================================
export function ServicePurposesAndPickups({ city, mode }: ServiceProps) {
  const normCity = city.trim();
  const cityDetails = getCityDetails(normCity, mode);

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* 9. Travel purposes (Airport, office, family, business travel) */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Workflow className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  Trip Objectives
                </p>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Travel Purposes in {normCity}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-600 sm:text-sm">
              Our cab services in {normCity} cater to a comprehensive spectrum of
              travel needs:
            </p>
            <ul className="mt-6 space-y-3">
              {cityDetails.travelPurposes.map((purpose) => (
                <li
                  key={purpose}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 text-xs font-semibold text-slate-800 shadow-sm sm:text-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>
                  <span>{purpose}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 10. Nearby pickup areas (Relevant pickup localities) */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  Doorstep Localities
                </p>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Nearby Pickup Areas in {normCity}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-600 sm:text-sm">
              We provide prompt door-to-door cab pickup from all key localities
              in {normCity}:
            </p>
            <ul className="mt-6 space-y-3">
              {cityDetails.pickupAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 text-xs font-semibold text-slate-800 shadow-sm sm:text-sm"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-gold" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 12. BOOKING INFORMATION (Cancellation, waiting, luggage, booking process)
// =========================================================================
export function ServiceBookingInfo({ city, mode }: ServiceProps) {
  const normCity = city.trim();
  const cityDetails = getCityDetails(normCity, mode);

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr]">
          <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold">Booking Information</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Clear, transparent terms for booking a cab in {normCity}. We
              guarantee verified drivers, punctual arrivals, and zero hidden
              charges.
            </p>
            <div className="mt-8 border-t border-slate-800 pt-6 space-y-3 text-xs text-slate-400">
              <p>✔ Instant WhatsApp / Call booking support</p>
              <p>✔ Driver details sent before pickup</p>
              <p>✔ All vehicles sanitized &amp; commercial permit compliant</p>
            </div>
            <div className="mt-8">
              <Link
                href={`tel:+918726124680`}
                className="inline-flex w-full items-center justify-center rounded-full bg-gold py-3.5 text-center text-sm font-bold text-white transition hover:bg-gold/90"
              >
                Call to Book: +91 8726124680
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <CalendarClock className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Cancellation Policy
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                {cityDetails.bookingInfo.cancellation}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Timer className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Waiting Policy
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                {cityDetails.bookingInfo.waiting}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Luggage className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Luggage Guidelines
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                {cityDetails.bookingInfo.luggage}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Workflow className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Booking Process
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                {cityDetails.bookingInfo.bookingProcess}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// Default component (backward compatibility)
// =========================================================================
export default function ServiceFormatSections({
  city,
  mode,
}: ServiceProps) {
  return (
    <>
      <ServiceOverviewAndMap city={city} mode={mode} />
      <ServiceFareCalculator city={city} mode={mode} />
      <ServiceDestinationsAndStops city={city} mode={mode} />
      <ServiceRouteDetails city={city} mode={mode} />
      <ServicePurposesAndPickups city={city} mode={mode} />
      <ServiceBookingInfo city={city} mode={mode} />
    </>
  );
}
