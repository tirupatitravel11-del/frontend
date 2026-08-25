
import HowToBook from "@/_components/Howtobook";
import FareDetails from "@/_components/tempotraveller/FareDetails";
import TempoTravellerFaq from "@/_components/tempotraveller/TempoTravellerFaq";
import TempoTravellerFleetDetails from "@/_components/tempotraveller/TempoTravellerFleetDetails";
import TempoTravellerHero from "@/_components/tempotraveller/TempoTravellerHero";
import WhyChooseUs from "@/_components/WhyChooseUs";

export default function TempoTravellerPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <TempoTravellerHero
        from={route.fromCity}
        to={route.toCity}
        startingFare={1599}
      />
      <TempoTravellerFleetDetails />

      <FareDetails
        from={route.fromCity}
        to={route.toCity}
        title="Fare Details"
         fares={data.fares}
      />

      <WhyChooseUs />

      <HowToBook from={route.fromCity} to={route.toCity} />

      <TempoTravellerFaq
      from={data.route.fromCity}
        to={data.route.toCity}
      />
    </>
  );
}
