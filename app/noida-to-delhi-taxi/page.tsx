import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import TaxiFleet from "@/_components/TaxiFleet";
import VehicleFleet from "../components/Cab/Cabhub/VehicleFleet";
import PopularRoutes from "@/_components/PopularRoutes";
import WhyChooseUs from "@/_components/WhyChooseUs";
import TaxiFaq from "@/_components/TaxiFaq";
import CabSelector from "@/_components/CabSelector";
import Testimonials from "../components/Home/Testimonials";
import HowToBook from "@/_components/Howtobook";

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

export default function Home() {
  return (
    <main>
      <Hero from="Lucknow" to="Delhi" />
      <CabSelector from="Lucknow" to="Delhi" />

      <FareDetails from="Lucknow" to="Delhi" />
      <PopularRoutes
        from="Lucknow"
        to="Ayodhya"
        routes={LUCKNOW_AYODHYA_ROUTES}
      />
      <Testimonials />
      <HowToBook from="Lucknow" to="Delhi" />
      <WhyChooseUs from="Lucknow" to="Delhi" />
      <TaxiFaq />
    </main>
  );
}
