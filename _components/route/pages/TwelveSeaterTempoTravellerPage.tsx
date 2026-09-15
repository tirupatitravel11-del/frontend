import GroupTravelBenefits from "@/_components/12seatTempo/GroupTravelBenefits";
import Seater12Details from "@/_components/12seatTempo/Seater12Details";
import TwelveSeaterSeating from "@/_components/12seatTempo/Seater12Seating";
import SeaterDetails from "@/_components/12seatTempo/Seater12Seating";
import Seater12Seating from "@/_components/12seatTempo/Seater12Seating";
import TempoTravellerDetails from "@/_components/12seatTempo/TempoTravellerDetails";
import TempoTravellerFare from "@/_components/12seatTempo/TempoTravellerFare";
import TwelveSeaterStorySection from "@/_components/12seatTempo/TwelveSeaterStorySection";
import TwelveSeaterTempoHero from "@/_components/12seatTempo/TwelveSeaterTempoHero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
import FareDetails from "@/_components/tempotraveller/FareDetails";
import TempoTravellerFaq from "@/_components/tempotraveller/TempoTravellerFaq";
import TempoTravellerFleetDetails from "@/_components/tempotraveller/TempoTravellerFleetDetails";
import TempoTravellerHero from "@/_components/tempotraveller/TempoTravellerHero";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

export default function TempoTravellerPage({ data }: any) {
  const { route, page } = data;
  return (
    <>
      <TwelveSeaterTempoHero  from={data.route.fromCity}
        to={data.route.toCity}
        fare={data.fares[0]}  />
        <TwelveSeaterStorySection/>
      {/* <SeaterDetails/> */}
      <TwelveSeaterSeating />
      {/* <Seater12Seating/> */}

      <TempoTravellerDetails />

      <GroupTravelBenefits />

      <TempoTravellerFare from={route.fromCity}
        to={route.toCity}
        oneWayFare={data.fares?.[0]?.oneWayPrice || 5500}
        roundTripFare={data.fares?.[0]?.roundTripPrice || 9000} />

      <PopularRoutes
        routes={data.popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />

      <WhyChooseUs />
      <Testimonials/>

      <TempoTravellerFaq from={data.route.fromCity}
        to={data.route.toCity}/>
    </>
  );
}
