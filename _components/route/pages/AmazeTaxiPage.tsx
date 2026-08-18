import AmazeFaq from "@/_components/amaze/AmazeFaq";
import AmazeFitGuide from "@/_components/amaze/AmazeFitGuide";
import AmazeFleetDetails from "@/_components/amaze/AmazeFleetDetails";
import AmazeHero from "@/_components/amaze/AmazeHero";


export default function AmazeTaxiPage({ data }: any) {
  const { route } = data;

  return (
    <>
      <AmazeHero
        from={route.fromCity}
        to={route.toCity}
        startingFare={1649}
      />

      <AmazeFleetDetails />

      <AmazeFitGuide />

      <AmazeFaq />
    </>
  );
}