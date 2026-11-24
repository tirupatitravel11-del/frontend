import SixteenSeaterDetails from "@/_components/16seatTempo/SixteenSeaterDetails";
import SixteenSeaterGroupBenefits from "@/_components/16seatTempo/SixteenSeaterGroupBenefits";
import SixteenSeaterSeating from "@/_components/16seatTempo/SixteenSeaterSeating";
import SixteenSeaterTempoDetails from "@/_components/16seatTempo/SixteenSeaterTempoDetails";
import SixteenSeaterTempoFaq from "@/_components/16seatTempo/SixteenSeaterTempoFaq";
import SixteenSeaterTempoFare from "@/_components/16seatTempo/SixteenSeaterTempoFare";
import SixteenSeaterTempoHero from "@/_components/16seatTempo/SixteenSeaterTempoHero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import FareDetails from "@/_components/FareDetails";
import CabSelector from "@/_components/CabSelector";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";
import {
  RouteOverviewSection,
  RouteMapSection,
  RoutePopularDestinationsSection,
  RouteMajorStopsSection,
  RouteDetailsSection,
  RouteTravelPurposesSection,
  RouteNearbyPickupAreasSection,
  RouteBookingInfoSection,
} from "@/_components/route/RouteFormatSections";

export default function SixteenSeaterTempoTravellerPage({
  data,
}: {
  data: any;
}) {
  const { route, page, vehicles, fares, popularRoutes } = data;
  const tempoFare = fares?.[0];

  return (
    <>
      {/* 1. Hero Section: Route-specific heading, pickup, destination */}
      <SixteenSeaterTempoHero
        from={route.fromCity}
        to={route.toCity}
        fare={tempoFare}
      />

      {/* 2. Route Overview: Distance, estimated travel time */}
      <RouteOverviewSection route={route} />

      {/* 3. Route Map: Actual route and important highways */}
      <RouteMapSection route={route} />

      {/* 4. Fare Calculator: Vehicle-wise route-specific fare */}
      <FareDetails
        from={route.fromCity}
        to={route.toCity}
        title={page.h1}
        fares={fares}
      />
      <SixteenSeaterTempoFare
        from={route.fromCity}
        to={route.toCity}
        oneWayFare={tempoFare?.oneWayPrice || 6500}
        roundTripFare={tempoFare?.roundTripPrice || 11000}
      />

      {/* 5. Popular Destinations: Destination ke aas-paas ke locations */}
      <RoutePopularDestinationsSection route={route} />

      {/* 6. Major Stops: Actual highway stops, food breaks */}
      <RouteMajorStopsSection route={route} />

      {/* 7. Route Details: Toll, expressway, road conditions */}
      <RouteDetailsSection route={route} />

      {/* 8. Cab Options: Sedan, SUV, Innova, Tempo Traveller */}
      <SixteenSeaterDetails />
      <SixteenSeaterSeating />
      <SixteenSeaterTempoDetails />
      <CabSelector
        from={route.fromCity}
        to={route.toCity}
        vehicles={vehicles}
        fares={fares}
      />

      {/* 9. Travel Purposes: Airport, office, family, business travel */}
      <RouteTravelPurposesSection route={route} />

      {/* 10. Nearby Pickup Areas: Relevant pickup localities */}
      <RouteNearbyPickupAreasSection route={route} />

      {/* 11. FAQs: Route-specific questions and answers */}
      <SixteenSeaterTempoFaq from={route.fromCity} to={route.toCity} />

      {/* 12. Booking Information: Cancellation, waiting, luggage, booking process */}
      <RouteBookingInfoSection route={route} />

      {/* Supporting Sections */}
      <SixteenSeaterGroupBenefits />
      <PopularRoutes
        routes={popularRoutes || data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />

      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white ">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Book 16 Seater Tempo Traveller from{" "}
            <span className="text-gold">{route.fromCity}</span> to{" "}
            <span className="text-gold">{route.toCity}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
            Spacious 16+1 seating with high roof, AC blowers on every seat, pushback mechanism, and dedicated luggage space.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%2016%20Seater%20Tempo%20Traveller%20from%20${route.fromCity}%20to%20${route.toCity}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
            >
              Book 16 Seater Now
            </a>

            <a
              href={`tel:+918726124680`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
