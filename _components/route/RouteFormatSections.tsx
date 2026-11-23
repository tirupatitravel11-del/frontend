import {
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
  Route as RouteIcon,
  ShieldCheck,
  Timer,
  UtensilsCrossed,
  Waypoints,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { getRouteDetails } from "@/app/lib/api/route-data/route-details-helper";

interface RouteProps {
  route: {
    slug: string;
    fromCity: string;
    toCity: string;
    distance: number;
    duration: string;
  };
}

// =========================================================================
// 2. ROUTE OVERVIEW (Distance, estimated travel time)
// =========================================================================
export function RouteOverviewSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <RouteIcon className="h-4 w-4" />
            Route Overview &amp; Key Details
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {route.fromCity} to {route.toCity} Distance &amp; Travel Time
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Planning your taxi trip from {route.fromCity} to {route.toCity}? Check
            the total driving distance, estimated travel time under different
            traffic conditions, and essential route overview.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Total Road Distance
            </p>
            <p className="mt-1 text-3xl font-extrabold text-slate-900">
              {route.distance} km
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Direct highway distance from {route.fromCity} to {route.toCity}
            </p>
          </div>

          <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-white">
              <Clock className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Estimated Travel Time
            </p>
            <p className="mt-1 text-3xl font-extrabold text-gold">
              {route.duration}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Average driving duration under normal highway conditions
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Car className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Service Type
            </p>
            <p className="mt-1 text-2xl font-extrabold text-slate-900">
              Private Door-to-Door
            </p>
            <p className="mt-2 text-xs text-slate-500">
              One-way drop &amp; round-trip private AC cabs with verified drivers
            </p>
          </div>
        </div>

        {/* Traffic Breakdown */}
        <div className="mt-10">
          <h3 className="mb-4 text-center text-lg font-bold text-slate-900 sm:text-xl">
            Travel Time by Traffic &amp; Driving Conditions
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {details.travelTimes.map((item) => (
              <div
                key={item.trafficType}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Timer className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.trafficType}
                    </h4>
                    <p className="text-base font-extrabold text-gold">
                      {item.duration}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 3. ROUTE MAP (Actual route and important highways)
// =========================================================================
export function RouteMapSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );
  const mapQuery = `${route.fromCity} to ${route.toCity}`;

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Map Info */}
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
              <Compass className="h-4 w-4" />
              Route Map &amp; Highways
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Actual Route &amp; Important Highways
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {details.highwayDescription}
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                    <RouteIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Primary Highway &amp; Expressway
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-900">
                      {details.highway}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Waypoints className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Road Infrastructure &amp; Quality
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {details.roadCondition}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Toll &amp; Fastag Information
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {details.tollInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="border-b border-slate-100 bg-slate-900 px-5 py-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                Live Google Map Route
              </p>
              <p className="text-sm font-bold">
                {route.fromCity} → {route.toCity} ({route.distance} km)
              </p>
            </div>
            <iframe
              title={`Map from ${route.fromCity} to ${route.toCity}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              className="h-[360px] w-full sm:h-[420px]"
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
// 5. POPULAR DESTINATIONS (Destination ke aas-paas ke locations)
// =========================================================================
export function RoutePopularDestinationsSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <Map className="h-4 w-4" />
            Explore Around {route.toCity}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Popular Destinations in &amp; Around {route.toCity}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Visiting {route.toCity}? You can easily extend your taxi trip or plan
            local temple darshan, historical sightseeing, and shopping visits
            with your cab. Here are top places to explore in and around{" "}
            {route.toCity}:
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.popularDestinations.map((destination, index) => (
            <div
              key={destination}
              className="group rounded-2xl border border-slate-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {destination}
              </h3>
              <p className="mt-1.5 text-xs text-slate-500">
                Must-visit landmark in and around {route.toCity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 6. MAJOR STOPS (Actual highway stops, food breaks)
// =========================================================================
export function RouteMajorStopsSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <UtensilsCrossed className="h-4 w-4" />
            Highway Halts &amp; Rest Areas
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Major Stops &amp; Food Breaks on {route.fromCity} to {route.toCity}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Enjoy clean and hygienic highway stops on your journey. Our
            experienced drivers choose verified food plazas, family dhabas,
            clean restrooms, and fuel breaks at your convenience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.majorStops.map((stop, idx) => (
            <div
              key={stop}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <UtensilsCrossed className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Halt {idx + 1}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900">{stop}</h3>
              <p className="mt-1 text-xs text-slate-500">
                Clean restroom, hot tea, snacks &amp; family dining options
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 7. ROUTE DETAILS (Toll, expressway, road conditions)
// =========================================================================
export function RouteDetailsSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <FileText className="h-4 w-4" />
            Highway Specifications
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Route Details: Tolls, Expressways &amp; Road Conditions
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Comprehensive road condition overview and toll details for a smooth
            and stress-free ride from {route.fromCity} to {route.toCity}.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Toll Charges */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Tolls &amp; State Taxes
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {details.tollInfo}
            </p>
            <div className="mt-4 rounded-xl bg-white p-3 text-xs text-slate-500">
              Fastag automated scanning ensures zero delay at toll gates.
            </div>
          </div>

          {/* Expressway Status */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <RouteIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Expressway &amp; Highway Corridors
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {details.highway}
            </p>
            <div className="mt-4 rounded-xl bg-white p-3 text-xs text-slate-500">
              Multi-lane divided highways with dedicated town bypasses.
            </div>
          </div>

          {/* Road Conditions */}
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Road Conditions &amp; Safety
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {details.roadCondition}
            </p>
            <div className="mt-4 rounded-xl bg-white p-3 text-xs text-slate-500">
              Regularly maintained surface with clear night reflectors.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 9. TRAVEL PURPOSES (Airport, office, family, business travel)
// =========================================================================
export function RouteTravelPurposesSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <Workflow className="h-4 w-4" />
            Suitable For Every Journey
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Travel Purposes for {route.fromCity} to {route.toCity} Cab
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Whether you are traveling for religious darshan, catching a flight,
            attending a business meeting, or taking a family holiday, our cabs
            provide the perfect travel solution.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.travelPurposes.map((purpose) => (
            <div
              key={purpose}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{purpose}</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Dedicated vehicle, customized pickup time, and direct drop.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 10. NEARBY PICKUP AREAS (Relevant pickup localities)
// =========================================================================
export function RouteNearbyPickupAreasSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );

  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[3px] text-gold sm:text-sm">
            <Navigation className="h-4 w-4" />
            Doorstep Pickup Localities
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Nearby Pickup Areas in {route.fromCity}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            We provide door-to-door pickup from every locality, neighborhood,
            hotel, railway station, and airport in {route.fromCity}:
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.pickupLocalities.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-stone-50 px-5 py-4 font-semibold text-slate-800"
            >
              <MapPin className="h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 12. BOOKING INFORMATION (Cancellation, waiting, luggage, booking process)
// =========================================================================
export function RouteBookingInfoSection({ route }: RouteProps) {
  const details = getRouteDetails(
    route.fromCity,
    route.toCity,
    route.distance,
    route.duration
  );

  return (
    <section className="border-b border-slate-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr]">
          {/* Left Dark Card */}
          <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold">Booking Information</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Clear, transparent booking policies for your {route.fromCity} to{" "}
              {route.toCity} taxi ride. Zero surprise fees, verified vehicles,
              and 24x7 customer support.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3 text-xs text-slate-400">
              <p>✔ Instant WhatsApp / Phone Confirmation</p>
              <p>✔ Driver details sent 30 mins prior to departure</p>
              <p>✔ 24/7 dedicated travel support line</p>
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

          {/* Right Cards: Cancellation, Waiting, Luggage, Booking Process */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <CalendarClock className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Cancellation Policy
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                {details.bookingInfo.cancellation}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Timer className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Waiting Time
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">
                {details.bookingInfo.waiting}
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
                {details.bookingInfo.luggage}
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
                {details.bookingInfo.bookingProcess}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
