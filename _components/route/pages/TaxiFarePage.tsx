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
      <Hero from={route.fromCity} to={route.toCity} />

      <FareDetails
        from={route.fromCity}
        to={route.toCity}
        title="Fare Details"
        fares={data.fares}
      />

      <CabSelector from={route.fromCity} to={route.toCity} />

      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
      />

      <WhyChooseUs />

      <TaxiFaq />
    </>
  );
}
