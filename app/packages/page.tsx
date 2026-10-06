"use client";
import { useEffect, useState } from "react";

import PackageFilter from "../components/Package/PackageFilter";
import PackageOffers from "../components/Package/PopularDestinationsLastSection";
import PopularPackages from "../components/Package/PopularPackages";
import PopularDestinations from "../components/Package/PopularDestinations";
import { Compass } from "lucide-react";
import WhyChooseUs from "@/_components/WhyChooseUs";
import PackageFAQ from "../components/Package/PackageFAQ";
import PackageCTA from "../components/Package/PackageCTA";

const heroImages = [
  "/packages/kashmir_package.webp",
  "/packages/Rajasthan_package.webp",
  "/packages/northEast_package.webp",
  "/packages/Kerala_boats.webp",
];

export default function PackagePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main>
      
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[80vh] overflow-hidden lg:h-screen">
          {/* Background Images */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:h-full lg:py-20">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_480px] xl:grid-cols-[1.15fr_500px]">

              {/* LEFT CONTENT */}
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-white backdrop-blur-sm">
                  <Compass className="h-4 w-4 text-gold" />
                  Explore India
                </div>

                {/* Heading */}
                <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
                  Your Next
                  <span className="block text-gold">
                    Great Journey
                  </span>
                  Starts Here.
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  Discover thoughtfully planned holiday packages across India.
                  Explore beaches, mountains, spiritual destinations, heritage
                  cities, and unforgettable family getaways with Tirupati Travels.
                </p>

                {/* Highlights */}
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Family Holidays
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Honeymoon Trips
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Group Tours
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Spiritual Journeys
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#packages"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-gold/90"
                  >
                    Explore Packages
                  </a>

                  <a
                    href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20plan%20a%20holiday%20trip."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-stone-900"
                  >
                    Plan My Trip
                  </a>
                </div>
              </div>

              {/* RIGHT — PACKAGE FILTER */}
              <div className="w-full">
                <PackageFilter />
              </div>
            </div>
          </div>
        </section>

        {/* <PackageOffers />  */}
        <PopularPackages />

        <PopularDestinations />
        {/* <PopularPackageDestinations/> */}
        <PackageOffers />

        <WhyChooseUs />

        <PackageFAQ />

        <PackageCTA />

      
    </main>
  );
}
