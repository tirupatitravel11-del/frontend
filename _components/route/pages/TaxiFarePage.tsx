import CabSelector from "@/_components/CabSelector";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";


export default function TaxiFarePage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <Hero
        from={route.fromCity}
        to={route.toCity}
        // title={page.h1}
      />

      <FareDetails
        // fares={data.fares}
        // showDetailedFare={true}
        to="noida"
        from="delhi"
        title="Fare Details"
      />

      <CabSelector
        // vehicles={data.vehicles}
              to="noida"
        from="delhi"
      />

      <PopularRoutes
        routes={data.popularRoutes} from={""} to={""}      />

      <WhyChooseUs  />

      <TaxiFaq
        // faqs={page.faqs}
      />
    </>
  );
}