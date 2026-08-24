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
      <AmazeHero  from={data.route.fromCity}
        to={data.route.toCity}
        fare={data.fares[0]} />
      <AmazeFleetDetails   fares={data.fares}
  vehicles={data.vehicles}/>
      <AmazeFitGuide />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <AmazeFaq from={data.route.fromCity}
        to={data.route.toCity} />
    </>
  );
}
