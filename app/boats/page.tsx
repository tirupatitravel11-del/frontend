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
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 mt-12">
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

        <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl text-center">
    

    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      Ready for a{" "}
      <span className="text-gold">Memorable Boat Ride?</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
      Plan a relaxing boat ride for your next trip and enjoy a memorable
      experience with family, friends, or your travel group. Contact Tirupati
      Travels to enquire about boat rides, availability, timings, and booking
      details.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20enquire%20about%20a%20boat%20ride."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
      >
        Enquire on WhatsApp
      </a>

      <a
        href="tel:+918726124680"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        Call Now
      </a>
    </div>

    <p className="mt-6 text-sm text-stone-400">
      Boat Rides • Family Trips • Group Experiences • Sightseeing •
      Travel Experiences
    </p>
  </div>
</section>
      </main>
    </main>
  );
}
