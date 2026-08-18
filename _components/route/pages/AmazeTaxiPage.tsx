import AmazeFaq from "@/_components/amaze/AmazeFaq";
import AmazeFitGuide from "@/_components/amaze/AmazeFitGuide";
import AmazeFleetDetails from "@/_components/amaze/AmazeFleetDetails";
import AmazeHero from "@/_components/amaze/AmazeHero";
import HowToBook from "@/_components/Howtobook";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

export default function AmazeTaxiPage({ data }: any) {
  const { route } = data;

  return (
    <>
      <AmazeHero from={route.fromCity} to={route.toCity} startingFare={1649} />
      <AmazeFleetDetails />
      <AmazeFitGuide />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <AmazeFaq />
    </>
  );
}
