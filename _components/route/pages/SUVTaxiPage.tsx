import SuvFleetDetails from "@/_components/SUV/SuvFleetDetails";
import SuvHero from "@/_components/SUV/SuvHero";

export default function SUVTaxiPage({ data }: any) {
  const { route, page } = data;

  return (
    <>
      <SuvHero from="Noida" to="Delhi" startingFare={2299} />
      <SuvFleetDetails/>
    </>
  );
}
