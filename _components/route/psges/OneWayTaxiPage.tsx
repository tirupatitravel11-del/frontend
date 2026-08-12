import CabSelector from "@/_components/CabSelector";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import OneWayAdvantage from "@/_components/oneway/OneWayAdvantage";
import OneWayFareTable from "@/_components/oneway/OneWayFareTable";
import OneWayHero from "@/_components/oneway/OneWayHero";
import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";

export default function OneWayTaxiPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      {/* <h1>ONE WAY</h1> */}
      {/* <Hero
        from={route.fromCity}
        to={route.toCity}
        // title={page.h1}
      /> */}
      <OneWayHero from="Noida" to="Delhi" startingFare={1299} />
      <OneWayAdvantage oneWayFare={1599} roundTripFare={2699} />
      <OneWayFareTable from="Noida" to="Delhi" />
      <CabSelector
        to="noida"
        from="delhi"
        // vehicles={data.vehicles}
      />

      {/* <FareDetails
        to="noida"
        from="delhi"
        title="gdf"
        // fares={data.fares}
        // tripType="one-way"
      /> */}

      <HowToBook from={"Delhi"} to={"Noida"} />

      <WhyChooseUs from={"Delhi"} to={"Noida"} />

      {/* <PopularRoutes routes={data.popularRoutes} from={"Delhi"} to={"Noida"}/> */}

      <TaxiFaq
      // faqs={page.faqs}
      />
    </>
  );
}
