"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const WHATSAPP_NUMBER = "918726124680";
const AUTOPLAY_MS = 5000;

const heroSlides = [
  {
    id: 1,
    title: "Book",
    highlight: "Tempo Traveller & Urbania",
    titleEnd: "with Tirupati Travels",
    subtitle:
      "Book comfortable and spacious vehicles for family trips, group tours, pilgrimages, sightseeing, weddings, and outstation journeys.",
    image: "/Hero-2.jpg",
  },
  {
    id: 2,
    title: "Comfortable",
    highlight: "Vehicles for Family & Group Travel",
    titleEnd: "",
    subtitle:
      "Choose a spacious vehicle that fits your group and travel plans for local, sightseeing, pilgrimage, and outstation journeys.",
    image: "/Hero-4.jpg",
  },
  {
    id: 3,
    title: "Plan Your",
    highlight: "Outstation Journey",
    titleEnd: "with Tirupati Travels",
    subtitle:
      "Book Tempo Traveller, Urbania, and other vehicles for one-way trips, round trips, sightseeing, and multi-city travel.",
    image: "/Hero-3.jpg",
  },
  {
    id: 4,
    title: "Travel Together.",
    highlight: "Travel Comfortably.",
    titleEnd: "",
    subtitle:
      "Make group travel easier with spacious vehicles for family vacations, religious tours, weddings, and long-distance journeys.",
    image: "/Hero-2.jpg",
  },
];

const vehicleOptions = [
  "Tempo Traveller",
  "Force Urbania",
  "Cab",
  "Other Vehicle",
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");

  /* ---------------- SLIDER ---------------- */

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    // Respect reduced-motion and avoid burning CPU/battery on hidden tabs.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (prefersReducedMotion || interval) return;
      interval = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    };
    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") stop();
      else start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      emblaApi.off("select", onSelect);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [emblaApi]);

  const activeSlide = heroSlides[activeIndex] ?? heroSlides[0];

  /* ---------------- FORM ---------------- */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Hello Tirupati Travels, I want to make a booking enquiry.

Name: ${name}
Phone Number: ${phone}
Vehicle: ${vehicle}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden lg:min-h-screen">
      {/* ================= BACKGROUND ================= */}

      <div
        ref={emblaRef}
        className="absolute inset-0 h-full w-full overflow-hidden"
      >
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="relative h-full min-w-full">
              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`.trim()}
                fill
                sizes="100vw"
                quality={70}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 z-10 bg-black/70" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">
        <div
          className="
            mx-auto
            flex
            min-h-[100svh]
            w-full
            max-w-7xl
            items-center
            px-4
            py-8
            sm:px-6
            sm:py-14
            lg:min-h-screen
            lg:px-8
            lg:py-16
          "
        >
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-8
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-16
            "
          >
            {/* ================= LEFT ================= */}

            <div className="w-full max-w-2xl text-white">
              <h1
                className="
                  max-w-2xl
                  text-[28px]
                  font-bold
                  leading-[1.2]
                  tracking-tight
                  sm:text-4xl
                  lg:text-[44px]
                  xl:text-5xl
                "
              >
                {activeSlide.title}{" "}
                <span className="text-gold">{activeSlide.highlight}</span>{" "}
                {activeSlide.titleEnd}
              </h1>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/90
                  sm:mt-5
                  sm:text-lg
                  sm:leading-8
                "
              >
                {activeSlide.subtitle}
              </p>

              {/* Slide indicators - helps mobile users jump to a slide directly */}
              <div className="mt-4 flex gap-2 sm:mt-6">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeIndex}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-6 bg-gold"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* ================= BUTTONS ================= */}

              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/cabs"
                  className="
                    flex
                    h-11
                    min-w-[47%]
                    flex-1
                    items-center
                    justify-center
                    rounded-lg
                    bg-gold
                    px-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-gold/50
                    sm:h-12
                    sm:min-w-0
                    sm:flex-none
                    sm:px-6
                    sm:text-base
                  "
                >
                  Book Cab
                </Link>

                <Link
                  href="/packages"
                  className="
                    flex
                    h-11
                    min-w-[47%]
                    flex-1
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/80
                    px-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white
                    hover:text-black
                    sm:h-12
                    sm:min-w-0
                    sm:flex-none
                    sm:px-6
                    sm:text-base
                  "
                >
                  Packages
                </Link>

                <Link
                  href="/hotel"
                  className="
                    flex
                    h-11
                    min-w-[47%]
                    flex-1
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/80
                    px-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white
                    hover:text-black
                    sm:h-12
                    sm:min-w-0
                    sm:flex-none
                    sm:px-6
                    sm:text-base
                  "
                >
                  Hotels
                </Link>

                <Link
                  href="/boats"
                  className="
                    flex
                    h-11
                    min-w-[47%]
                    flex-1
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/80
                    px-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white
                    hover:text-black
                    sm:h-12
                    sm:min-w-0
                    sm:flex-none
                    sm:px-6
                    sm:text-base
                  "
                >
                  Boat Rides
                </Link>
              </div>
            </div>

            {/* ================= FORM ================= */}

            <div className="w-full">
              <div
                className="
                  mx-auto
                  w-full
                  max-w-md
                  rounded-2xl
                  bg-white/90
                  p-4
                  shadow-2xl
                  ring-1
                  ring-black/10
                  sm:rounded-3xl
                  sm:p-6
                  lg:ml-auto
                "
              >
                {/* Header */}
                <div className="mb-4 sm:mb-5">
                  <h2
                    className="
                      text-xl
                      font-bold
                      leading-tight
                      tracking-tight
                      text-gray-900
                      sm:text-2xl
                      lg:text-3xl
                    "
                  >
                    Book Your Vehicle
                  </h2>

                  <p className="mt-1.5 text-sm leading-5 text-gray-500 sm:mt-2 sm:text-base">
                    Fill in your details and get a quick booking quote.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="hero-name"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="hero-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        bg-gray-50
                        px-4
                        text-base
                        text-gray-900
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-gold
                        focus:bg-white
                        focus:ring-2
                        focus:ring-gold/20
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="hero-phone"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="hero-phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="Enter 10-digit number"
                      value={phone}
                      onChange={(event) =>
                        setPhone(event.target.value.replace(/\D/g, ""))
                      }
                      required
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        bg-gray-50
                        px-4
                        text-base
                        text-gray-900
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-gold
                        focus:bg-white
                        focus:ring-2
                        focus:ring-gold/20
                      "
                    />
                  </div>

                  {/* VEHICLE */}
                  <div>
                    <label
                      htmlFor="hero-vehicle"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Choose Vehicle
                    </label>

                    <select
                      id="hero-vehicle"
                      value={vehicle}
                      onChange={(event) => setVehicle(event.target.value)}
                      required
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        bg-gray-50
                        px-4
                        text-base
                        text-gray-900
                        outline-none
                        transition
                        focus:border-gold
                        focus:bg-white
                        focus:ring-2
                        focus:ring-gold/20
                      "
                    >
                      <option value="">Select Vehicle</option>
                      {vehicleOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="
                      h-12
                      w-full
                      touch-manipulation
                      rounded-xl
                      bg-gold
                      px-5
                      text-sm
                      font-semibold
                      text-white
                      shadow-md
                      transition
                      hover:opacity-95
                      focus:outline-none
                      focus:ring-2
                      focus:ring-gold
                      focus:ring-offset-2
                    "
                  >
                    Get Booking Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}