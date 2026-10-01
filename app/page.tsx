import Image from "next/image";
import type { Metadata } from "next";
import Hero from "./components/Home/Hero";

import Services from "./components/Home/Services";

import PopularRoutes from "./components/Home/PopularRoutes";
import FeaturedPackages from "./components/Home/FeaturedPackages";
import Testimonials from "./components/Home/Testimonials";
import BlogSection from "./components/Home/BlogSection";
import MobileStickyBar from "./components/Home/MobileStickyBar";
import HotelCard from "./components/Home/HotelCard";
import HotelSection from "./components/Home/HotelSection";
import FeaturedBoats from "./components/Home/FeaturesBoats";
import FAQSection from "./components/Home/FAQSection";
import BookingCTA from "./components/Home/BookingCTA";

export const metadata: Metadata = {
  title: "Tirupati Travels | Taxi & Cab Service in India | Book Cabs Online",
  description:
    "Book taxis, hotels and tour packages across India. Get reliable local, outstation, airport transfers, tempo travellers and customized travel services.",
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <PopularRoutes />
      <HotelSection />
      <FeaturedBoats />
      <FeaturedPackages />
      <Testimonials />
      <BlogSection />
      <FAQSection />

      <BookingCTA />
      {/* <MobileStickyBar /> */}
    </div>
  );
}
// test
