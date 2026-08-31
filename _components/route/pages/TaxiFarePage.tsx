import CabSelector from "@/_components/CabSelector";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";

export default function TaxiFarePage({ data }: any) {
  const { route, page,    vehicles,
    fares,
    popularRoutes, } = data;

  return (
    <>
      <Hero   from={data.route.fromCity}
        to={data.route.toCity}
        fare={data.fares[0]}  />

      <FareDetails
        from={route.fromCity}
        to={route.toCity}
        title="Fare Details"
        fares={data.fares}
      />

        <CabSelector
             from={route.fromCity}
       to={route.toCity}
       vehicles={vehicles}
       fares={fares}
           />

      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />

      <WhyChooseUs />

      <TaxiFaq />
    </>
  );
}
