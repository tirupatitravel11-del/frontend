import CabSelector from "@/_components/CabSelector";
import HowToBook from "@/_components/Howtobook";
import OneWayAdvantage from "@/_components/oneway/OneWayAdvantage";
import OneWayFareTable from "@/_components/oneway/OneWayFareTable";
import OneWayHero from "@/_components/oneway/OneWayHero";

import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";

export default function OneWayTaxiPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <OneWayHero from={route.fromCity} to={route.toCity} startingFare={1299} />
      <OneWayAdvantage oneWayFare={1599} roundTripFare={2699} />
      <OneWayFareTable from={route.fromCity} to={route.toCity} />
      <CabSelector from={route.fromCity} to={route.toCity} />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <TaxiFaq />
    </>
  );
}
