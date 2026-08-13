import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import OutstationSpotlight from "@/_components/SUV/OutstationSpotlight";
import SuvFaq from "@/_components/SUV/SuvFaq";
import SuvFitGuide from "@/_components/SUV/SuvFitGuide";
import SuvFleetDetails from "@/_components/SUV/SuvFleetDetails";
import SuvHero from "@/_components/SUV/SuvHero";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

const LUCKNOW_AYODHYA_ROUTES: any = [
  {
    from: "Lucknow",
    to: "Ayodhya Dham",
    km: "135 km",
    time: "2.5–3 hr",
    fare: 2499,
    tag: "Popular",
  },
  {
    from: "Lucknow Airport",
    to: "Ayodhya",
    km: "150 km",
    time: "3–3.5 hr",
    fare: 2799,
    tag: "Airport",
  },
  {
    from: "Lucknow Railway Station",
    to: "Ayodhya Dham",
    km: "140 km",
    time: "2.5–3 hr",
    fare: 2599,
    tag: "Railway",
  },
];

export default function SUVTaxiPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <SuvHero from="Noida" to="Delhi" startingFare={2299} />
      <SuvFleetDetails />
      <SuvFitGuide />
      <PopularRoutes
        from="Lucknow"
        to="Ayodhya"
        routes={LUCKNOW_AYODHYA_ROUTES}
      />
      <OutstationSpotlight/>
      <Testimonials />
      <HowToBook from="Lucknow" to="Delhi" />
      <WhyChooseUs from="Lucknow" to="Delhi" />
      <SuvFaq/>
    </>
  );
}
