import DzireFaq from "@/_components/dzire/DzireFaq";
import DzireFitGuide from "@/_components/dzire/DzireFitGuide";
import DzireFleetDetails from "@/_components/dzire/DzireFleetDetails";
import DzireHero from "@/_components/dzire/DzireHero";
import HowToBook from "@/_components/Howtobook";
import SedanFitGuide from "@/_components/sedan/SedanFitGuide";
import SedanFleetDetails from "@/_components/sedan/SedanFleetDetails";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";



export default function DzireTaxiPage({ data }: any) {
  const { route } = data;

  return (
    <>
      <DzireHero from={data.route.fromCity}
        to={data.route.toCity}
        fare={data.fares[0]} />
      <DzireFleetDetails />
      <DzireFitGuide />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <DzireFaq from={data.route.fromCity}
        to={data.route.toCity} />
    </>
  );
}
