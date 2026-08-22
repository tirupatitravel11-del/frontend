import UrbaniaFaq from "@/_components/tempotraveller/urbaniaFaq";
import UrbaniaCompanySection from "@/_components/urbaniaRental/Aboutsection";
import UrbaniaFareTable from "@/_components/urbaniaRental/FareTable";
import UrbaniaUseCases from "@/_components/urbaniaRental/FitforeveryGroup";
import UrbaniaVariants from "@/_components/urbaniaRental/seatingsection";
import UrbaniaHero from "@/_components/urbaniaRental/UrbaniaHero";
import WhyChooseUs from "@/_components/WhyChooseUs";

export default function UrbaniaRentalPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <UrbaniaHero from={route.fromCity} to={route.toCity} />
      <UrbaniaCompanySection />
      <UrbaniaVariants />
      <UrbaniaFareTable />
      <UrbaniaUseCases />
      <WhyChooseUs />
      <UrbaniaFaq from={data.route.fromCity}
        to={data.route.toCity} />
    </>
  );
}
