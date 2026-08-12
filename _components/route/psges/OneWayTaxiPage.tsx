import CabSelector from "@/_components/CabSelector";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";


export default function OneWayTaxiPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
    {/* <h1>ONE WAY</h1> */}
      <Hero
        from={route.fromCity}
        to={route.toCity}
        // title={page.h1}
      />

      <CabSelector
             to="noida"
        from="delhi"
        // vehicles={data.vehicles}
      />

      <FareDetails
         to="noida"
        from="delhi"
        title="gdf"
        // fares={data.fares}
        // tripType="one-way"
      />

      <HowToBook from={""} to={""} />

      <WhyChooseUs from={""} to={""} />

      <PopularRoutes
        routes={data.popularRoutes} from={""} to={""}      />

      <TaxiFaq
        // faqs={page.faqs}
      />
    </>
  );
}