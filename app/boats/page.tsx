"use client";
import { useEffect, useState } from "react";
import TrustPoints from "../components/Cab/Cabhub/TrustbelowForm";
import BoatRideSection from "../components/Boats/BoatRideSection";
import BoatActivitySection from "../components/Boats/BoatActivitySection";
import BoatRateSection from "../components/Boats/BoatRateSection";
import WhyChooseUsSection from "../components/Boats/WhyChooseUsSection";
import BoatFAQ from "../components/Boats/BoatFaq";

const heroImages = [
  "/boats/Boatride_1.jpg",
  "/boats/Boatride_2.jpg",
  "/boats/Boatride_3.jpg",
  "/boats/boat3.jpg",
  "/boats/boat4.jpg",
];

export default function BoatsPage() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main>
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden min-h-[80vh] lg:h-screen">
          {/* Background Images */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  currentImage === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 mt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_520px]">
              {/* LEFT */}
              <div>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                  Boat Ride Packages
                  <br />
                  You Can Trust.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  Discover beautiful waterways and unforgettable boat
                  experiences. Choose your destination, select your boat, and
                  enjoy a safe and comfortable journey with transparent pricing.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-white sm:px-8 sm:py-4">
                    View Boat Rides
                  </button>

                  <button className="rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-4">
                    Call To Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BoatRideSection />
        <BoatActivitySection />
        <BoatRateSection />
        <WhyChooseUsSection />
        <BoatFAQ />
      </main>
    </main>
  );
}
