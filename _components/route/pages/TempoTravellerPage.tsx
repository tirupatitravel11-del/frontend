import CabSelector from "@/_components/CabSelector";

import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import TaxiFaq from "@/_components/TaxiFaq";
import FareDetails from "@/_components/tempotraveller/FareDetails";
import TempoTravellerFaq from "@/_components/tempotraveller/TempoTravellerFaq";
import TempoTravellerFleetDetails from "@/_components/tempotraveller/TempoTravellerFleetDetails";
import TempoTravellerHero from "@/_components/tempotraveller/TempoTravellerHero";
import WhyChooseUs from "@/_components/WhyChooseUs";


export default function TempoTravellerPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan"
  );

  return (
    <>
    <TempoTravellerHero from="Noida" to="Delhi" startingFare={1599} />
    <TempoTravellerFleetDetails />
     
      <FareDetails
        // fares={data.fares}
        // vehicleType="Sedan"
           to="noida"
        from="delhi"
        title="Fare Details"
      />

      <WhyChooseUs        to="noida"
        from="delhi"/>

      <HowToBook        to="noida"
        from="delhi" />

      <TempoTravellerFaq
        // faqs={page.faqs}
      />
    </>
  );
}