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

export const metadata: Metadata = {
  title: "Tirupati Travels | India Taxi & Cab | @10% Off | Book Now",
  description:
    "Book taxis, hotels, tour packages, travel experiences and boat rides across India with Tirupati Travel. Get @10% Off and book now.",
};

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Services />
      <PopularRoutes />
      <HotelSection />
      <FeaturedBoats />
      <FeaturedPackages />
      <Testimonials />
      <BlogSection />
      <MobileStickyBar />
    </div>
  );
}
// test
