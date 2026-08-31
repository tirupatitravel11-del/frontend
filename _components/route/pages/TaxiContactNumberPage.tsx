import CabSelector from "@/_components/CabSelector";
import BookingInformation from "@/_components/ContactNumber/BookingInformation";
import ContactHero from "@/_components/ContactNumber/ContactHero";
import HelpGrid from "@/_components/ContactNumber/HelpGrid";
import FareDetails from "@/_components/FareDetails";
import Hero from "@/_components/Hero";
import HowToBook from "@/_components/Howtobook";
import PopularRoutes from "@/_components/PopularRoutes";
// import PopularRoutes from "@/_components/PopularRoutes";
import TaxiFaq from "@/_components/TaxiFaq";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "@/app/components/Home/Testimonials";

export default function ContactPage({ data }: any) {
  const { route, page, vehicles, fares, popularRoutes } = data;
  console.log(data, "dhsjh");

  return (
    <>
      {/* Hero */}
      <ContactHero from={route.fromCity} to={route.toCity} />
      <BookingInformation />
      {/* Cab Selector */}
      <CabSelector
        from={route.fromCity}
        to={route.toCity}
        vehicles={vehicles}
        fares={fares}
      />
      {/* <HelpGrid/> */}

      {/* Fare Details */}
      {/* <FareDetails
        from={route.fromCity}
        to={route.toCity}
        title={page.h1}
        fares={fares}
      /> */}

      {/* Popular Routes */}
      <PopularRoutes
        routes={popularRoutes}
        from={route.fromCity}
        to={route.toCity}
        pagetype={page.pageType}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* How To Book */}
      <HowToBook from={route.fromCity} to={route.toCity} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* FAQ */}
      <TaxiFaq faqs={page.faqs} />
    </>
  );
}
