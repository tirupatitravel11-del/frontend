import HowToBook from "@/_components/Howtobook";
import FamilyLongDistanceSpotlight from "@/_components/InnovaCrysta/FamilyLongDistanceSpotlight";
import InnovaCrystaFaq from "@/_components/InnovaCrysta/InnovaCrystaFaq";
import InnovaCrystaFitGuide from "@/_components/InnovaCrysta/InnovaCrystaFitGuide";
import InnovaCrystaHero from "@/_components/InnovaCrysta/InnovaCrystaHero";
import InnovaFleetDetails from "@/_components/InnovaCrysta/InnovaFleetDetails";
import LuxuryTempoFaq from "@/_components/luxuryTempoTraveller/LuxuryFaqs";
import LuxuryFareTable from "@/_components/luxuryTempoTraveller/LuxuryFareTable";
import TempoTravellerFleetDetails from "@/_components/luxuryTempoTraveller/LuxuryFleetDetails";

import LuxuryFleetDetails from "@/_components/luxuryTempoTraveller/LuxuryFleetDetails";
import LuxuryTempoTravellerCitySection from "@/_components/luxuryTempoTraveller/LuxuryTempoTravellerCitySection";
import LuxuryTempoHero from "@/_components/luxuryTempoTraveller/LuxxuryTempoHero";
import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

const NOIDA_DELHI_ROUTES: any = [
  {
    from: "Noida",
    to: "Delhi",
    km: "25 km",
    time: "45 min–1.5 hr",
    fare: 1200,
    tag: "Popular",
  },
  {
    from: "Noida",
    to: "New Delhi Railway Station",
    km: "30 km",
    time: "1–1.5 hr",
    fare: 1299,
    tag: "Railway",
  },
  {
    from: "Noida",
    to: "Delhi Airport",
    km: "35 km",
    time: "1–2 hr",
    fare: 1499,
    tag: "Airport",
  },
];

const TEMPO_FARES = [
  {
    vehicle: "12 Seater Tempo Traveller",
    seats: "12+1",
    oneWay: 7500,
    roundTrip: 14000,
    perKm: 30,
    popular: true,
  },
  {
    vehicle: "16 Seater Tempo Traveller",
    seats: "16+1",
    oneWay: 8500,
    roundTrip: 16000,
    perKm: 32,
  },
  {
    vehicle: "20 Seater Tempo Traveller",
    seats: "20+1",
    oneWay: 9500,
    roundTrip: 18000,
    perKm: 35,
  },
  {
    vehicle: "24 Seater Tempo Traveller",
    seats: "24+1",
    oneWay: 11000,
    roundTrip: 21000,
    perKm: 38,
  },
];

export default function LuxuryTempoTravellerPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <LuxuryTempoHero from="Noida" to="Delhi" />
      <LuxuryTempoTravellerCitySection />
      <LuxuryFleetDetails />
      <LuxuryFareTable
        from={route.fromCity}
        to={route.toCity}
        title={page.h1}
        fares={TEMPO_FARES}
      />
      <Testimonials />
      <WhyChooseUs />
      <LuxuryTempoFaq />
      {/* <TempoTravellerFleetDetails/> */}
      {/* <InnovaCrystaHero from="Noida" to="Delhi" startingFare={1599} />
      <InnovaFleetDetails />
      <InnovaCrystaFitGuide />
      <PopularRoutes from="Noida" to="Delhi" routes={NOIDA_DELHI_ROUTES} />
      <FamilyLongDistanceSpotlight />
      <Testimonials />
      <HowToBook from="Noida" to="Delhi" />
      <WhyChooseUs />

      <InnovaCrystaFaq /> */}
    </>
  );
}
// sjushdhs
