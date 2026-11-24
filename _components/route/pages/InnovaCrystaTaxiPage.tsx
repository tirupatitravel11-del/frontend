import HowToBook from "@/_components/Howtobook";
import FamilyLongDistanceSpotlightTaxi from "@/_components/InnovaCrysta/FamilyLongDistanceSpotlightTaxi";
import InnovaCrystaFaq from "@/_components/InnovaCrysta/InnovaCrystaFaq";
import InnovaCrystaHero from "@/_components/InnovaCrysta/InnovaCrystaHero";
import InnovaFleetDetails from "@/_components/InnovaCrysta/InnovaFleetDetails";
import FareDetails from "@/_components/FareDetails";
import CabSelector from "@/_components/CabSelector";
import PopularRoutes from "@/_components/PopularRoutes";
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

export default function InnovaCrystaTaxiPage({ data }: any) {
  const { route, page, vehicles, fares, popularRoutes } = data;
  const innovaFare = fares?.[0];

  return (
    <>
      {/* 1. Hero Section: Route-specific heading, pickup, destination */}
      <InnovaCrystaHero
        from={route.fromCity}
        to={route.toCity}
        fare={innovaFare}
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

      {/* 5. Popular Destinations: Destination ke aas-paas ke locations */}
      <RoutePopularDestinationsSection route={route} />

      {/* 6. Major Stops: Actual highway stops, food breaks */}
      <RouteMajorStopsSection route={route} />

      {/* 7. Route Details: Toll, expressway, road conditions */}
      <RouteDetailsSection route={route} />

      {/* 8. Cab Options: Sedan, SUV, Innova, Tempo Traveller */}
      {/* <InnovaFleetDetails fares={innovaFare} /> */}
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

      

      {/* 12. Booking Information: Cancellation, waiting, luggage, booking process */}
      <RouteBookingInfoSection route={route} />

      {/* Supporting Sections */}
      <FamilyLongDistanceSpotlightTaxi />
      <HowToBook from={route.fromCity} to={route.toCity} />

      <PopularRoutes
        routes={popularRoutes || data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />
      <Testimonials />
      {/* 11. FAQs: Route-specific questions and answers */}
      <InnovaCrystaFaq from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />

      <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white ">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Travel from{" "}
            <span className="text-gold">{route.fromCity}</span> to{" "}
            <span className="text-gold">{route.toCity}</span>?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
            Book a comfortable innova from {route.fromCity} to {route.toCity} for a convenient
            intercity journey. Choose a suitable vehicle for your family, group,
            or personal travel and get booking assistance from Tirupati Travels.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%20innova%20from%20${route.fromCity}%20to%20${route.toCity}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
            >
              Book {route.fromCity} to {route.toCity} Innova
            </a>

            <a
              href={`tel:+918726124680`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-400">
            {route.fromCity} to {route.toCity} • One Way • Round Trip • Family Travel • Group Travel
          </p>
        </div>
      </section>
    </>
  );
}
