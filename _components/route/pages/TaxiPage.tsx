import CabSelector from "@/_components/CabSelector";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
// import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";




export default function TaxiPage({ data }: any) {
  const {
    route,
    page,
    vehicles,
    fares,
    popularRoutes,
  } = data;
console.log(data,"dhsjh");

  return (
    <>
      {/* Hero */}
      <Hero
        from={route.fromCity}
        to={route.toCity}
      />

      {/* Cab Selector */}
      <CabSelector
        from={route.fromCity}
        to={route.toCity}
        vehicles={vehicles}
      />

      {/* Fare Details */}
      <FareDetails
        from={route.fromCity}
        to={route.toCity}
        title={page.h1}
        fares={fares}
      />

      {/* Popular Routes */}
      <PopularRoutes
        routes={popularRoutes}
        from={route.fromCity}
        to={route.toCity}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* How To Book */}
      <HowToBook
        from={route.fromCity}
        to={route.toCity}
      />

      {/* Why Choose Us */}
      <WhyChooseUs
        // from={route.fromCity}
        // to={route.toCity}
      />

      {/* FAQ */}
      <TaxiFaq
        faqs={page.faqs}
      />
    </>
  );
}