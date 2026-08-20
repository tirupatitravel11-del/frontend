
import SixteenSeaterGroupBenefits from "@/_components/16seatTempo/SixteenSeaterGroupBenefits";
import SixteenSeaterTempoDetails from "@/_components/16seatTempo/SixteenSeaterTempoDetails";
import SixteenSeaterTempoFaq from "@/_components/16seatTempo/SixteenSeaterTempoFaq";
import SixteenSeaterTempoFare from "@/_components/16seatTempo/SixteenSeaterTempoFare";
import SixteenSeaterTempoHero from "@/_components/16seatTempo/SixteenSeaterTempoHero";
import PopularRoutes from "@/_components/PopularRoutes";
import WhyChooseUs from "@/_components/WhyChooseUs";

export default function SixteenSeaterTempoTravellerPage({
  data,
}: {
  data: any;
}) {
  const { route } = data;

  return (
    <>
      <SixteenSeaterTempoHero
        from={route.fromCity}
        to={route.toCity}
        startingFare={data.fares?.[0]?.oneWayPrice || 5500}
      />

      <SixteenSeaterTempoDetails />

      <SixteenSeaterGroupBenefits />

      <SixteenSeaterTempoFare
        from={route.fromCity}
        to={route.toCity}
        oneWayFare={data.fares?.[0]?.oneWayPrice || 5500}
        roundTripFare={data.fares?.[0]?.roundTripPrice || 9000}
      />

      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
      />

      <WhyChooseUs
      />

      <SixteenSeaterTempoFaq />
    </>
  );
}