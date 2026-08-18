
import HowToBook from "@/_components/Howtobook";
import FamilyLongDistanceSpotlight from "@/_components/InnovaCrysta/FamilyLongDistanceSpotlight";
import InnovaCrystaFaq from "@/_components/InnovaCrysta/InnovaCrystaFaq";
import InnovaCrystaFitGuide from "@/_components/InnovaCrysta/InnovaCrystaFitGuide";
import InnovaCrystaHero from "@/_components/InnovaCrysta/InnovaCrystaHero";
import InnovaFleetDetails from "@/_components/InnovaCrysta/InnovaFleetDetails";
import PopularRoutes from "@/_components/PopularRoutes";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";


const NOIDA_DELHI_ROUTES: any = [
  {
    from: "Noida",
    to: "Delhi",
    km: "25 km",
    time: "45 min–1.5 hr",
    fare: 1200,
    tag: "Popular",
  },
  {
    from: "Noida",
    to: "New Delhi Railway Station",
    km: "30 km",
    time: "1–1.5 hr",
    fare: 1299,
    tag: "Railway",
  },
  {
    from: "Noida",
    to: "Delhi Airport",
    km: "35 km",
    time: "1–2 hr",
    fare: 1499,
    tag: "Airport",
  },
];

export default function InnovaCrystaTaxiPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan"
  );

  return (
    <>
    <InnovaCrystaHero from="Noida" to="Delhi" startingFare={1599} />
         <InnovaFleetDetails />
         <InnovaCrystaFitGuide />
         <PopularRoutes
           from="Noida"
           to="Delhi"
           routes={NOIDA_DELHI_ROUTES}
         />
         <FamilyLongDistanceSpotlight/>
         <Testimonials />
               <HowToBook from="Noida" to="Delhi" />
               <WhyChooseUs />
     
               <InnovaCrystaFaq/>
    </>
  );
}
// sjushdhs