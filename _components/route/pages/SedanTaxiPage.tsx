
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import AirportSpotlight from "@/_components/sedan/AirportSpotlight";
import SedanFaq from "@/_components/sedan/SedanFaq";
import SedanFitGuide from "@/_components/sedan/SedanFitGuide";
import SedanFleetDetails from "@/_components/sedan/SedanFleetDetails";
import SedanHero from "@/_components/sedan/SedanHero";
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
    (vehicle: any) => vehicle.cabType === "Sedan",
  );

  return (
    <>
      <SedanHero        from={data.route.fromCity}
        to={data.route.toCity}
        vehicle={data.vehicle}
        fare={data.fares[0]} />
      <SedanFleetDetails />
      <SedanFitGuide />
      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
      />
      <AirportSpotlight />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />

      <SedanFaq />
    </>
  );
}
