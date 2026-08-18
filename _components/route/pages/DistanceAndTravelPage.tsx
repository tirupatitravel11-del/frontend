import DistanceTravelTime from "@/_components/distanceAndTime/DistanceTravelTime";
import HowToBook from "@/_components/Howtobook";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

export default function DistanceAndTravelPage({ data }: any) {
  const { route } = data;

  return (
    <>
      <DistanceTravelTime
        from={route.fromCity}
        to={route.toCity}
        distance={`${route.distance} km`}
        travelTime={route.duration}
      />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <Testimonials />
      {/* <DzireHero from={route.fromCity} to={route.toCity} startingFare={1599} />
      <DzireFleetDetails />
      <DzireFitGuide />
      <Testimonials />
      <HowToBook from={route.fromCity} to={route.toCity} />
      <WhyChooseUs />
      <DzireFaq /> */}
    </>
  );
}
