import SeaterDetails from "@/_components/12seatTempo/Seater12Seating";
import SixteenSeaterDetails from "@/_components/16seatTempo/SixteenSeaterDetails";
import SixteenSeaterGroupBenefits from "@/_components/16seatTempo/SixteenSeaterGroupBenefits";
import SixteenSeaterSeating from "@/_components/16seatTempo/SixteenSeaterSeating";
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
      <SixteenSeaterDetails />
      {/* <SeaterDetails /> */}

      <SixteenSeaterSeating />
      <SixteenSeaterTempoDetails />

      {/* <SixteenSeaterGroupBenefits /> */}

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

      <WhyChooseUs />

      <SixteenSeaterTempoFaq from={data.route.fromCity}
        to={data.route.toCity}/>
    </>
  );
}
