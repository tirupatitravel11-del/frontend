import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import FareDetails from "@/_components/tempotraveller/FareDetails";
import TempoTravellerFaq from "@/_components/tempotraveller/TempoTravellerFaq";
import TempoTravellerFleetDetails from "@/_components/tempotraveller/TempoTravellerFleetDetails";
import TempoTravellerHero from "@/_components/tempotraveller/TempoTravellerHero";
import TempoTravellerStorySection from "@/_components/tempotraveller/TempoTravellerStorySection";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

export default function TempoTravellerPage({ data }: any) {
  const { route, page } = data;
console.log(data,"lllllllllllll");

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <TempoTravellerHero
        from={route.fromCity}
        to={route.toCity}
        startingFare={1599}
        fare={data.fares[0]}
      />
      <TempoTravellerStorySection />
      <TempoTravellerFleetDetails />
      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />

      {/* <FareDetails
        from={route.fromCity}
        to={route.toCity}
        title="Fare Details"
         fares={data.fares}
      /> */}

      <WhyChooseUs />

      <HowToBook from={route.fromCity} to={route.toCity} />
      <Testimonials />

      <TempoTravellerFaq from={data.route.fromCity} to={data.route.toCity} />
    </>
  );
}
