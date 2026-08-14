import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import OutstationSpotlight from "@/_components/SUV/OutstationSpotlight";
import SuvFaq from "@/_components/SUV/SuvFaq";
import SuvFitGuide from "@/_components/SUV/SuvFitGuide";
import SuvFleetDetails from "@/_components/SUV/SuvFleetDetails";
import SuvHero from "@/_components/SUV/SuvHero";
import UrbaniaCompanySection from "@/_components/urbaniaRental/Aboutsection";
import UrbaniaFareTable from "@/_components/urbaniaRental/FareTable";
import UrbaniaUseCases from "@/_components/urbaniaRental/FitforeveryGroup";
import UrbaniaVariants from "@/_components/urbaniaRental/seatingsection";
import UrbaniaHero from "@/_components/urbaniaRental/UrbaniaHero";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

export default function UrbaniaRentalPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <UrbaniaHero from={"Noida"} to={"Delhi"} />
      <UrbaniaCompanySection />
      <UrbaniaVariants />
      <UrbaniaFareTable />
      <UrbaniaUseCases/>
      <WhyChooseUs from={"Noida"} to={"Delhi"}/>
    </>
  );
}
