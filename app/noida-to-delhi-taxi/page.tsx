import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import TaxiFleet from "@/_components/TaxiFleet";
import VehicleFleet from "../components/Cab/Cabhub/VehicleFleet";
import PopularRoutes from "@/_components/PopularRoutes";
import WhyChooseUs from "@/_components/WhyChooseUs";
import TaxiFaq from "@/_components/TaxiFaq";
import CabSelector from "@/_components/CabSelector";


export default function Home() {
  return (
    <main>
      <Hero />
      <CabSelector/>
      <VehicleFleet/>
      <FareDetails/>
      <PopularRoutes/>
      <WhyChooseUs/>
      <TaxiFaq/>
    </main>
  );
}