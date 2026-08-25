import EtiosAirport from "@/_components/Etios/EtiosAirport";
import EtiosComparison from "@/_components/Etios/EtiosComparison";
import EtiosFaq from "@/_components/Etios/EtiosFaq";
import EtiosHero from "@/_components/Etios/EtiosHero";
import EtiosStorySection from "@/_components/Etios/EtiosStorySection";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import Testimonials from "@/app/components/Home/Testimonials";


export default function ErtigaTaxiPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <EtiosHero from={route.fromCity} to={route.toCity} fare={data.fares[0]} />
      <EtiosStorySection />
      <EtiosComparison fares={data.fares[0]} />
      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
      />
      <EtiosAirport />
      <Testimonials />
      <HowToBook  from={route.fromCity}
        to={route.toCity} />
      <EtiosFaq from={data.route.fromCity}
        to={data.route.toCity} />
    </>
  );
}
