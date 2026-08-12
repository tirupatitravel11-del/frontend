import CabComparison from "@/_components/sedan/CabComparison";
import SedanFleetDetails from "@/_components/sedan/SedanFleetDetails";
import SedanHero from "@/_components/sedan/SedanHero";
import WhyChooseSedan from "@/_components/sedan/SedanFitGuide";
import SedanFitGuide from "@/_components/sedan/SedanFitGuide";
import PopularRoutes from "@/_components/PopularRoutes";
import Testimonials from "../components/Home/Testimonials";
import HowToBook from "@/_components/Howtobook";
import WhyChooseUs from "@/_components/WhyChooseUs";
import TaxiFaq from "@/_components/TaxiFaq";
import SedanFaq from "@/_components/sedan/SedanFaq";
import AirportSpotlight from "@/_components/sedan/AirportSpotlight";

const LUCKNOW_AYODHYA_ROUTES: TaxiRoute[] = [
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

export default function NoidaToDelhiSedanPage() {
  return (
    <main>
      <SedanHero from="Noida" to="Delhi" startingFare={1599} />
      <SedanFleetDetails />
      <SedanFitGuide />
      <PopularRoutes
        from="Lucknow"
        to="Ayodhya"
        routes={LUCKNOW_AYODHYA_ROUTES}
      />
      <AirportSpotlight/>
      <Testimonials />
            <HowToBook from="Lucknow" to="Delhi" />
            <WhyChooseUs from="Lucknow" to="Delhi" />
  
            <SedanFaq/>
      {/* <WhyChooseSedan /> */}
      {/* <CabComparison /> */}
    </main>
  );
}
