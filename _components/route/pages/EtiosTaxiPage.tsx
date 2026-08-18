import CabSelector from "@/_components/CabSelector";
import ErtigaAdvantage from "@/_components/Ertiga/ErtigaAdvantage";
import ErtigaFaq from "@/_components/Ertiga/ErtigaFaq";
import ErtigaInteriorShowcase from "@/_components/Ertiga/ErtigaInteriorShowcase";
import ErtigaStorySection from "@/_components/Ertiga/ErtigaStorySection";
import ErtigaTaxiHero from "@/_components/Ertiga/ErtigaTaxiHero";

import VehicleComparison from "@/_components/Ertiga/VehicleComparison";
import EtiosAdvantages from "@/_components/Etios/EtiosAdvatage";
import EtiosAdvantagePage from "@/_components/Etios/EtiosAdvatage";
import EtiosAirport from "@/_components/Etios/EtiosAirport";
import EtiosComparison from "@/_components/Etios/EtiosComparison";
import EtiosFaq from "@/_components/Etios/EtiosFaq";
import EtiosHero from "@/_components/Etios/EtiosHero";
import EtiosStorySection from "@/_components/Etios/EtiosStorySection";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import AirportSpotlight from "@/_components/sedan/AirportSpotlight";
import SedanFaq from "@/_components/sedan/SedanFaq";
import SedanFitGuide from "@/_components/sedan/SedanFitGuide";
import SedanFleetDetails from "@/_components/sedan/SedanFleetDetails";
import SedanHero from "@/_components/sedan/SedanHero";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";
import TestimonialCard from "@/app/components/Home/TestimonialCard";
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

export default function ErtigaTaxiPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <EtiosHero from={"Noida"} to={"Delhi"} />
      <EtiosStorySection />
      <EtiosComparison />
      <PopularRoutes from="Noida" to="Delhi" routes={NOIDA_DELHI_ROUTES} />
      <EtiosAirport/>
      
      <Testimonials />
      <HowToBook from={"Noida"} to={"Delhi"} />
      <EtiosFaq />
      
    </>
  );
}
