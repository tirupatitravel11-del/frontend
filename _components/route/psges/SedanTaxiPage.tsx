import CabSelector from "@/_components/CabSelector";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";


export default function SedanTaxiPage({ data }: any) {
  const { route, page } = data;

  const sedanVehicles = data.vehicles.filter(
    (vehicle: any) => vehicle.cabType === "Sedan"
  );

  return (
    <>
    {/* <h1>sedan</h1>     */}
      <Hero
               to="noida"
        from="delhi"
        // title={page.h1}
      />

      <CabSelector
        // vehicles={sedanVehicles}
             to="noida"
        from="delhi"
      />

      <FareDetails
        // fares={data.fares}
        // vehicleType="Sedan"
           to="noida"
        from="delhi"
        title="gdf"
      />

      <WhyChooseUs        to="noida"
        from="delhi"/>

      <HowToBook        to="noida"
        from="delhi" />

      <TaxiFaq
        // faqs={page.faqs}
      />
    </>
  );
}