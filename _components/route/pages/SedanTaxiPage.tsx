
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import AirportSpotlight from "@/_components/sedan/AirportSpotlight";
import SedanFaq from "@/_components/sedan/SedanFaq";
import SedanFitGuide from "@/_components/sedan/SedanFitGuide";
import SedanFleetDetails from "@/_components/sedan/SedanFleetDetails";
import SedanHero from "@/_components/sedan/SedanHero";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";




export default function SedanTaxiPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <SedanHero        from={data.route.fromCity}
        to={data.route.toCity}
        vehicle={data.vehicle}
        fare={data.fares[0]} />
      <SedanFleetDetails fares={data.fares[0]} />
      <SedanFitGuide fares={data.fares}/>
      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
      />
      <AirportSpotlight />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />

      <SedanFaq from={data.route.fromCity}
        to={data.route.toCity}/>
    </>
  );
}
