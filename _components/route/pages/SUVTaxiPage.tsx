import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import OutstationSpotlight from "@/_components/SUV/OutstationSpotlight";
import SuvFaq from "@/_components/SUV/SuvFaq";
import SuvFitGuide from "@/_components/SUV/SuvFitGuide";
import SuvFleetDetails from "@/_components/SUV/SuvFleetDetails";
import SuvHero from "@/_components/SUV/SuvHero";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";


export default function SUVTaxiPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <SuvHero from={route.fromCity} to={route.toCity} startingFare={2299} />
      <SuvFleetDetails fares={data.fares[0]} />
      <SuvFitGuide />
      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />
      <OutstationSpotlight />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <SuvFaq from={data.route.fromCity}
        to={data.route.toCity}/>
    </>
  );
}
