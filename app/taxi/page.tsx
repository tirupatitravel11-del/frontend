"use client";
import { useEffect, useState } from "react";
import TrustPoints from "../components/Cab/Cabhub/TrustbelowForm";
import BoatRideSection from "../components/Boats/BoatRideSection";
import BoatActivitySection from "../components/Boats/BoatActivitySection";
import BoatRateSection from "../components/Boats/BoatRateSection";
import WhyChooseUsSection from "../components/Boats/WhyChooseUsSection";
import BoatFAQ from "../components/Boats/BoatFaq";
import TaxiFleet from "@/_components/TaxiHome/TaxiFleet";
import WhyBookWithUs from "../components/Cab/Cabhub/WhyTrustUs";
import Testimonials from "../components/Home/Testimonials";
import CabFAQ from "../components/Cab/Cabhub/FAQ";
import FAQ from "../components/Cab/Cabhub/FAQ";
import TaxiFAQ from "@/_components/TaxiHome/TaxiFaq";
import TaxiFaq from "@/_components/TaxiHome/TaxiFaq";

const heroImages = [
  "/services_cabs.jpg",
  "/20-seater-tempo.jpg",
  "ertiga_taxi.png",
  "/urbania/Urbania.png",
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
                  Taxi Services
                  <br />
                  You Can Trust.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  Experience comfortable and reliable taxi rides for all your
                  travel needs. Choose your destination, select your vehicle,
                  and enjoy a safe journey with transparent pricing and
                  professional drivers.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-white sm:px-8 sm:py-4">
                    View Taxi Services
                  </button>

                  <button className="rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:px-8 sm:py-4">
                    Call To Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TaxiFleet />
        <Testimonials />
        <WhyBookWithUs />
        <TaxiFaq />
      </main>
    </main>
  );
}
