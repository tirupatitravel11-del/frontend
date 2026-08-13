import CabSelector from "@/_components/CabSelector";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import AirportSpotlight from "@/_components/sedan/AirportSpotlight";
import SedanFaq from "@/_components/sedan/SedanFaq";
import SedanFitGuide from "@/_components/sedan/SedanFitGuide";
import SedanFleetDetails from "@/_components/sedan/SedanFleetDetails";
import SedanHero from "@/_components/sedan/SedanHero";
import TaxiFaq from "@/_components/TaxiFaq";
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

export default function SedanTaxiPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan"
  );

  return (
    <>
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
    </>
  );
}