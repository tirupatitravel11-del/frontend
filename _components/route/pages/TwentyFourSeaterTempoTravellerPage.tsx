import TwentyFourDetails from "@/_components/24seatTempo/TwentyFourDetails";
import TwentyFourSeaterGroupBenefits from "@/_components/24seatTempo/TwentyFourSeaterGroupBenefits";
import TwentyFourSeaterSeating from "@/_components/24seatTempo/TwentyFourSeaterSeating";
import TwentyFourSeaterTempoDetails from "@/_components/24seatTempo/TwentyFourSeaterTempoDetails";
import TwentyFourSeaterTempoFaq from "@/_components/24seatTempo/TwentyFourSeaterTempoFaq";
import TwentyFourSeaterTempoFare from "@/_components/24seatTempo/TwentyFourSeaterTempoFare";
import TwentyFourSeaterTempoHero from "@/_components/24seatTempo/TwentyFourSeaterTempoHero";
import PopularRoutes from "@/_components/PopularRoutes";
import TempoTravellerFaq from "@/_components/tempotraveller/TempoTravellerFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";

export default function TwentyFourSeaterTempoTravellerPage({
  data,
}: {
  data: any;
}) {
  const { route } = data;

  return (
    <>
      <TwentyFourSeaterTempoHero
        from={route.fromCity}
        to={route.toCity}
        startingFare={data.fares?.[0]?.oneWayPrice || 7500}
      />

      <TwentyFourDetails />
      <TwentyFourSeaterSeating/>

      <TwentyFourSeaterTempoDetails />

      {/* <TwentyFourSeaterGroupBenefits /> */}

      <TwentyFourSeaterTempoFare
        from={route.fromCity}
        to={route.toCity}
        oneWayFare={data.fares?.[0]?.oneWayPrice || 7500}
        roundTripFare={data.fares?.[0]?.roundTripPrice || 12000}
      />

      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
      />

      <WhyChooseUs />

      <TempoTravellerFaq
            from={data.route.fromCity}
              to={data.route.toCity}
            />
    </>
  );
}
