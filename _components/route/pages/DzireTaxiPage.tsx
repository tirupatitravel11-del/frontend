import DzireFaq from "@/_components/dzire/DzireFaq";
import DzireFitGuide from "@/_components/dzire/DzireFitGuide";
import DzireFleetDetails from "@/_components/dzire/DzireFleetDetails";
import DzireHero from "@/_components/dzire/DzireHero";
import FareDetails from "@/_components/FareDetails";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import SedanFitGuide from "@/_components/sedan/SedanFitGuide";
import SedanFleetDetails from "@/_components/sedan/SedanFleetDetails";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

export default function DzireTaxiPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <DzireHero
        from={data.route.fromCity}
        to={data.route.toCity}
        fare={data.fares[0]}
      />
      <DzireFleetDetails fares={data.fares[0]} />

      <DzireFitGuide fares={data.fares[0]} />
      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <DzireFaq from={data.route.fromCity} to={data.route.toCity} />
    </>
  );
}
