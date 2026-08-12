"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCarSide,
  FaCheck,
  FaChevronDown,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoute,
  FaShieldAlt,
  FaStar,
  FaSuitcase,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import toast from "react-hot-toast";

// import { ParsedRouteData } from "@/lib/urlParser";
// import EEATSection from "@/components/shared/EEATSection";


// ======================================================
// TYPES
// ======================================================

interface FormData {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: string;
  distance: string;
}

interface Vehicle {
  slug: string;
  name: string;
  image: string;
  price: number;
  seats: string;
  luggage: string;
  tag: string;
  description: string;
}

interface FAQItem {
  q: string;
  a: string;
}


// ======================================================
// CONSTANTS
// ======================================================

const PHONE_NUMBER = "+918448445504";
const WHATSAPP_NUMBER = "918448445504";

const SITE_NAME = "Tirupati travels";

const DEFAULT_VEHICLE = "Premium Cab";

const DRIVER_ALLOWANCE = 500;


// ======================================================
// FARE
// ======================================================

const calculateFareByDistance = (distance: number) => {
  if (!distance || distance <= 0) {
    return 0;
  }

  const rate = distance <= 200 ? 16 : 24;

  return distance * rate + 500;
};


// ======================================================
// VEHICLES
// ======================================================

const VEHICLES: Vehicle[] = [
  {
    slug: "swift-dzire",
    name: "Maruti Suzuki Dzire",
    image: "/suzuki-dzire.png",
    price: 10,
    seats: "4 Seats",
    luggage: "2 Bags",
    tag: "Best Value",
    description:
      "Comfortable and economical sedan for couples and small families.",
  },
  {
    slug: "honda-amaze",
    name: "Honda Amaze",
    image: "/honda-amaze.png",
    price: 10,
    seats: "4 Seats",
    luggage: "3 Bags",
    tag: "Popular",
    description:
      "A comfortable sedan designed for smooth long-distance journeys.",
  },
  {
    slug: "maruti-ertiga",
    name: "Maruti Ertiga",
    image: "/maruti-ertiga.png",
    price: 13,
    seats: "7 Seats",
    luggage: "3 Bags",
    tag: "Family Choice",
    description:
      "Spacious MUV perfect for families and small groups.",
  },
  {
    slug: "innova-crysta",
    name: "Toyota Innova Crysta",
    image: "/innova-crysta.png",
    price: 16,
    seats: "7 Seats",
    luggage: "4 Bags",
    tag: "Premium",
    description:
      "Premium SUV experience with extra comfort for long journeys.",
  },
];


// ======================================================
// STATS
// ======================================================

const STATS = [
  {
    number: "10K+",
    label: "Successful Trips",
  },
  {
    number: "500+",
    label: "Routes Covered",
  },
  {
    number: "4.9/5",
    label: "Customer Rating",
  },
  {
    number: "24×7",
    label: "Customer Support",
  },
];


// ======================================================
// FEATURES
// ======================================================

const FEATURES = [
  {
    icon: "🛡️",
    title: "Verified Drivers",
    description:
      "Experienced and professionally verified drivers for a safe journey.",
  },
  {
    icon: "🚘",
    title: "Clean & Comfortable Cars",
    description:
      "Well-maintained AC vehicles cleaned before every trip.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "Clear pricing with no unnecessary return fare or hidden charges.",
  },
  {
    icon: "⚡",
    title: "Quick Confirmation",
    description:
      "Get booking confirmation quickly after sharing your travel details.",
  },
  {
    icon: "📍",
    title: "Doorstep Pickup",
    description:
      "Pickup from your home, hotel, airport, railway station or desired location.",
  },
  {
    icon: "📞",
    title: "24×7 Support",
    description:
      "Our support team is available whenever you need travel assistance.",
  },
];


// ======================================================
// FAQ
// ======================================================

const FAQS: FAQItem[] = [
  {
    q: "What is a One Way Taxi Service?",
    a: "One Way Taxi Service allows you to travel from one location to another without booking the return journey. It is suitable for intercity travel, airport transfers, business trips, family travel and pilgrimages.",
  },
  {
    q: "Why choose a one-way taxi?",
    a: "A one-way taxi can be economical when you do not need the same vehicle for the return journey. You can simply book your pickup and destination and travel comfortably.",
  },
  {
    q: "How can I book a one-way taxi?",
    a: "You can call Chiku Cabs, contact us on WhatsApp or submit your travel details through the booking form on this page.",
  },
  {
    q: "Which vehicles are available?",
    a: "Depending on availability, we provide sedans such as Dzire and Amaze, MUVs such as Ertiga, premium vehicles such as Innova Crysta and larger vehicles for groups.",
  },
  {
    q: "Do you provide airport pickup and drop?",
    a: "Yes. One-way airport taxi services are available for airport pickup and drop, subject to route and vehicle availability.",
  },
  {
    q: "Are tolls and parking included?",
    a: "Fare inclusions depend on the selected route and vehicle. Any applicable toll, parking or state charges should be confirmed before booking.",
  },
  {
    q: "Can I book for long-distance travel?",
    a: "Yes. Chiku Cabs provides intercity and long-distance taxi services across multiple routes.",
  },
  {
    q: "Can I cancel my booking?",
    a: "Cancellation and rescheduling depend on the booking terms. Please contact customer support as early as possible.",
  },
];


// ======================================================
// ANIMATION
// ======================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


// ======================================================
// TIME OPTIONS
// ======================================================

const generateTimes = () => {
  const times: string[] = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const period = hour >= 12 ? "PM" : "AM";

      const displayHour = hour % 12 || 12;

      times.push(
        `${displayHour}:${String(minute).padStart(2, "0")} ${period}`
      );
    }
  }

  return times;
};


// ======================================================
// COMPONENT
// ======================================================

export default function OneWayTaxiServiceTemplate({
  parsedData,
}: {
//   parsedData: ParsedRouteData;
  parsedData: any;
}) {
  const vehicle = parsedData?.vehicle || DEFAULT_VEHICLE;

  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const [distance, setDistance] = useState(50);

  const [estimatedPrice, setEstimatedPrice] =
    useState<number>(calculateFareByDistance(50));

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const timeOptions = useMemo(() => generateTimes(), []);

  const vehicleDetails = useMemo(() => {
    const current = VEHICLES.find((item) =>
      vehicle.toLowerCase().includes(item.slug.split("-")[1] || "")
    );

    return current || VEHICLES[0];
  }, [vehicle]);


  // ====================================================
  // SCROLL
  // ====================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // ====================================================
  // FARE
  // ====================================================

  const updateDistance = (value: number) => {
    setDistance(value);

    setEstimatedPrice(
      calculateFareByDistance(value)
    );
  };


  // ====================================================
  // WHATSAPP
  // ====================================================

  const handleGetEstimate = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !pickupLocation ||
      !dropLocation ||
      !travelDate ||
      !travelTime
    ) {
      toast.error(
        "Please fill pickup, drop, date and time."
      );

      return;
    }

    const message = `
🚖 *One Way Taxi Booking Request*

📍 Pickup: ${pickupLocation}

🎯 Drop: ${dropLocation}

📅 Date: ${travelDate}

⏰ Time: ${travelTime}

🚗 Vehicle: ${
      selectedVehicle || vehicleDetails.name
    }

📏 Distance: ${distance} KM

💰 Estimated Fare: ₹${estimatedPrice.toLocaleString(
      "en-IN"
    )}

Please share the final fare and booking confirmation.
`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank"
    );

    toast.success(
      "Opening WhatsApp..."
    );
  };


  // ====================================================
  // BOOK VEHICLE
  // ====================================================

  const handleVehicleBooking = (
    selected: Vehicle
  ) => {
    setSelectedVehicle(selected.name);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    toast.success(
      `${selected.name} selected`
    );
  };


  // ====================================================
  // RENDER
  // ====================================================

  return (
    <>
      {/* =================================================
          SEO
      ================================================= */}

      <Head>

        <title>
          One Way Taxi Service | Affordable Outstation Cab |
          Chiku Cabs
        </title>

        <meta
          name="description"
          content={`Book one way taxi service with Chiku Cabs. Affordable outstation cabs, verified drivers, clean cars and 24×7 support.`}
        />

        <meta
          name="keywords"
          content="one way taxi, one way cab, outstation taxi, one way outstation cab, taxi service, Chiku Cabs"
        />

        <meta
          property="og:title"
          content="One Way Taxi Service | Chiku Cabs"
        />

        <meta
          property="og:description"
          content="Affordable one way taxi service with professional drivers and comfortable cars."
        />

        <meta
          property="og:image"
          content={`https://chikucabs.com${vehicleDetails.image}`}
        />

        <meta
          property="og:type"
          content="website"
        />

        <link
          rel="canonical"
          href="https://chikucabs.com/one-way-taxi-service"
        />

      </Head>


      {/* =================================================
          STRUCTURED DATA
      ================================================= */}

      <Script
        id="one-way-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":
              "https://schema.org",

            "@type":
              "Service",

            name:
              "One Way Taxi Service",

            provider: {
              "@type":
                "LocalBusiness",

              name:
                SITE_NAME,

              telephone:
                PHONE_NUMBER,

              address: {
                "@type":
                  "PostalAddress",

                addressLocality:
                  "Delhi",

                addressCountry:
                  "IN",
              },
            },

            areaServed: {
              "@type":
                "Country",

              name:
                "India",
            },

            serviceType:
              "One Way Taxi Service",
          }),
        }}
      />


      {/* =================================================
          PAGE
      ================================================= */}

      <main className="bg-white text-gray-900 overflow-hidden">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative min-h-[720px] flex items-center">

          {/* Background */}

          <div className="absolute inset-0">

            <img
              src="/cab.png"
              alt="Chiku Cabs one way taxi"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          </div>


          {/* Floating circles */}

          <div
          
            className="absolute right-[10%] top-20 w-32 h-32 rounded-full bg-primary/20 blur-2xl"
          />

          <div
        
            className="absolute left-[40%] bottom-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"
          />


          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">

            <div className="grid lg:grid-cols-2 gap-14 items-center">


              {/* LEFT */}

              <div
            
                className="text-white"
              >

                <div
                 
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full mb-6"
                >

                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>

                  <span className="text-sm">
                    4.9/5 • 1,250+ Reviews
                  </span>

                </div>


                <h1
                 
                  className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
                >

                  One Way Taxi

                  <span className="block text-primary mt-2">
                    Made Simple.
                  </span>

                </h1>


                <p
                 
                  className="mt-7 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed"
                >
                  Travel from one city to another with
                  comfortable cars, verified drivers and
                  transparent one-way pricing.
                </p>


                {/* Price */}

                <div
                
                  className="flex items-center gap-5 mt-8"
                >

                  <div>

                    <span className="text-sm text-white/60">
                      Starting from
                    </span>

                    <div className="text-4xl font-black text-primary">
                      ₹{vehicleDetails.price}
                      <span className="text-lg text-white/70">
                        /km
                      </span>
                    </div>

                  </div>


                  <div className="h-12 w-px bg-white/20" />


                  <div className="text-sm text-white/70">
                    ✓ No return fare
                    <br />
                    ✓ Professional drivers
                  </div>

                </div>


                {/* CTA */}

                <div
                
                  className="flex flex-wrap gap-4 mt-9"
                >

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="group px-7 py-4 rounded-2xl bg-primary text-white font-bold flex items-center gap-3 shadow-xl shadow-primary/30 hover:-translate-y-1 transition"
                  >

                    <FaPhoneAlt />

                    Book Now

                    <FaArrowRight className="group-hover:translate-x-1 transition" />

                  </a>


                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white font-bold flex items-center gap-3 hover:bg-white/20 transition"
                  >

                    <FaWhatsapp className="text-xl" />

                    WhatsApp

                  </a>

                </div>


                {/* Trust */}

                <div
                 
                  className="grid grid-cols-3 gap-5 mt-10 pt-8 border-t border-white/15 max-w-xl"
                >

                  <div>

                    <FaShieldAlt className="text-primary mb-2" />

                    <p className="text-sm text-white/70">
                      Verified Drivers
                    </p>

                  </div>

                  <div>

                    <FaCarSide className="text-primary mb-2" />

                    <p className="text-sm text-white/70">
                      Clean Cars
                    </p>

                  </div>

                  <div>

                    <FaClock className="text-primary mb-2" />

                    <p className="text-sm text-white/70">
                      24×7 Support
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  BOOKING CARD
              ================================================= */}

              <div >

                <div className="relative">

                  {/* glow */}

                  <div className="absolute -inset-2 bg-primary/20 blur-2xl rounded-[35px]" />


                  <div className="relative bg-white/95 backdrop-blur-2xl rounded-[30px] p-6 md:p-8 shadow-2xl">

                    <div className="mb-7">

                      <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        QUICK BOOKING
                      </span>

                      <h2 className="text-3xl font-black mt-3">
                        Where are you going?
                      </h2>

                      <p className="text-gray-500 mt-1">
                        Get your best one-way fare instantly.
                      </p>

                    </div>


                    <form
                      onSubmit={handleGetEstimate}
                      className="space-y-4"
                    >

                      {/* Pickup */}

                      <div className="relative">

                        <IoLocationSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl" />

                        <input
                          value={pickupLocation}
                          onChange={(e) =>
                            setPickupLocation(
                              e.target.value
                            )
                          }
                          placeholder="Pickup location"
                          className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition"
                        />

                      </div>


                      {/* Connector */}

                      <div className="relative h-1">

                        <div className="absolute left-7 -top-3 h-6 border-l-2 border-dashed border-primary/40" />

                      </div>


                      {/* Drop */}

                      <div className="relative">

                        <TbTargetArrow className="absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl" />

                        <input
                          value={dropLocation}
                          onChange={(e) =>
                            setDropLocation(
                              e.target.value
                            )
                          }
                          placeholder="Drop location"
                          className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition"
                        />

                      </div>


                      {/* Date Time */}

                      <div className="grid sm:grid-cols-2 gap-4">

                        <input
                          type="date"
                          value={travelDate}
                          min={
                            new Date()
                              .toISOString()
                              .split("T")[0]
                          }
                          onChange={(e) =>
                            setTravelDate(
                              e.target.value
                            )
                          }
                          className="h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-primary"
                        />


                        <select
                          value={travelTime}
                          onChange={(e) =>
                            setTravelTime(
                              e.target.value
                            )
                          }
                          className="h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-primary"
                        >

                          <option value="">
                            Select time
                          </option>

                          {timeOptions.map(
                            (time) => (
                              <option
                                key={time}
                                value={time}
                              >
                                {time}
                              </option>
                            )
                          )}

                        </select>

                      </div>


                      {/* Vehicle */}

                      <select
                        value={selectedVehicle}
                        onChange={(e) =>
                          setSelectedVehicle(
                            e.target.value
                          )
                        }
                        className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-primary"
                      >

                        <option value="">
                          Select vehicle
                        </option>

                        {VEHICLES.map(
                          (item) => (
                            <option
                              key={item.slug}
                              value={item.name}
                            >
                              {item.name} •{" "}
                              {item.seats}
                            </option>
                          )
                        )}

                        <option value="Tempo Traveller">
                          Tempo Traveller
                        </option>

                        <option value="20 Seater">
                          20 Seater
                        </option>

                        <option value="26 Seater">
                          26 Seater
                        </option>

                      </select>


                      {/* Button */}

                      <button
                        type="submit"
                        className="group w-full h-15 py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-1 hover:shadow-2xl transition-all"
                      >

                        <span className="flex justify-center items-center gap-3">

                          Get Best Fare

                          <FaArrowRight className="group-hover:translate-x-1 transition" />

                        </span>

                      </button>


                      <div className="flex justify-center gap-5 text-xs text-gray-500 pt-2">

                        <span>
                          ✓ No Booking Fee
                        </span>

                        <span>
                          ✓ 24×7 Support
                        </span>

                      </div>

                    </form>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            STATS
        ================================================= */}

        <section className="relative -mt-10 z-20">

          <div className="max-w-6xl mx-auto px-4">

            <div
           
              className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >

              {STATS.map(
                (stat, index) => (

                  <div
                    key={stat.label}
                  
                    className={`p-7 text-center ${
                      index !== 3
                        ? "md:border-r border-gray-100"
                        : ""
                    }`}
                  >

                    <div className="text-3xl md:text-4xl font-black text-primary">
                      {stat.number}
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      {stat.label}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            VEHICLES
        ================================================= */}

        <section className="py-28 bg-gray-50">

          <div className="max-w-7xl mx-auto px-4">

            <div
            
              className="text-center max-w-2xl mx-auto mb-14"
            >

              <span className="text-primary font-bold text-sm tracking-widest">
                OUR FLEET
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Choose Your Perfect Ride
              </h2>

              <p className="text-gray-500 mt-4">
                Comfortable vehicles for solo travellers,
                families and groups.
              </p>

            </div>


            <div
         
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >

              {VEHICLES.map(
                (item) => (

                  <div
                    key={item.slug}
                   
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow"
                  >

                    {/* Image */}

                    <div className="relative h-52 overflow-hidden bg-gray-100">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-primary">
                        {item.tag}
                      </span>

                    </div>


                    <div className="p-5">

                      <h3 className="text-xl font-bold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                        {item.description}
                      </p>


                      <div className="flex gap-4 mt-5 text-xs text-gray-500">

                        <span className="flex items-center gap-1">
                          <FaUsers />
                          {item.seats}
                        </span>

                        <span className="flex items-center gap-1">
                          <FaSuitcase />
                          {item.luggage}
                        </span>

                      </div>


                      <div className="flex items-end justify-between mt-6">

                        <div>

                          <span className="text-2xl font-black text-primary">
                            ₹{item.price}
                          </span>

                          <span className="text-gray-400 text-sm">
                            /km
                          </span>

                        </div>


                        <button
                          onClick={() =>
                            handleVehicleBooking(
                              item
                            )
                          }
                          className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-white transition"
                        >
                          Select
                        </button>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            WHY CHIKU
        ================================================= */}

        <section className="py-28">

          <div className="max-w-7xl mx-auto px-4">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div
              
              >

                <span className="text-primary font-bold text-sm tracking-widest">
                  WHY CHIKU CABS
                </span>

                <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
                  Travel Better.
                  <span className="block text-primary">
                    Travel Smarter.
                  </span>
                </h2>

                <p className="text-gray-500 mt-6 text-lg leading-relaxed">
                  We focus on making intercity travel
                  simple, transparent and comfortable.
                  From pickup to destination, our team
                  takes care of the journey.
                </p>


                <div className="mt-8 space-y-4">

                  {[
                    "Transparent one-way pricing",
                    "Professional drivers",
                    "Well-maintained AC vehicles",
                    "Doorstep pickup & drop",
                  ].map((text) => (

                    <div
                      key={text}
                      className="flex items-center gap-3"
                    >

                      <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <FaCheck size={12} />
                      </span>

                      <span className="font-medium">
                        {text}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              <div
           
                className="grid sm:grid-cols-2 gap-5"
              >

                {FEATURES.map(
                  (feature) => (

                    <div
                      key={feature.title}
                 
                      className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all"
                    >

                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-5">
                        {feature.icon}
                      </div>

                      <h3 className="font-bold text-lg">
                        {feature.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        {feature.description}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            FARE CALCULATOR
        ================================================= */}

        <section className="py-28 bg-gray-950 text-white">

          <div className="max-w-5xl mx-auto px-4">

            <div
         
              className="text-center"
            >

              <span className="text-primary font-bold text-sm tracking-widest">
                FARE CALCULATOR
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Know Your Fare Before You Travel
              </h2>

              <p className="text-white/50 mt-4">
                Adjust the distance and get an estimated
                one-way fare instantly.
              </p>

            </div>


            <div
           
              className="mt-14 bg-white/5 border border-white/10 rounded-[30px] p-6 md:p-10 backdrop-blur"
            >

              <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Slider */}

                <div>

                  <div className="flex justify-between items-end">

                    <div>

                      <p className="text-white/50 text-sm">
                        TRAVEL DISTANCE
                      </p>

                      <div className="text-4xl font-black mt-2">
                        {distance}
                        <span className="text-lg text-white/50">
                          {" "}KM
                        </span>
                      </div>

                    </div>

                  </div>


                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="10"
                    value={distance}
                    onChange={(e) =>
                      updateDistance(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="w-full mt-10 accent-primary cursor-pointer"
                  />


                  <div className="flex justify-between text-xs text-white/40 mt-3">

                    <span>
                      50 KM
                    </span>

                    <span>
                      500 KM
                    </span>

                    <span>
                      1000 KM
                    </span>

                    <span>
                      2000 KM
                    </span>

                  </div>


                  <div className="grid grid-cols-3 gap-2 mt-8">

                    {[100, 250, 500].map(
                      (value) => (

                        <button
                          key={value}
                          onClick={() =>
                            updateDistance(
                              value
                            )
                          }
                          className={`py-3 rounded-xl text-sm font-bold transition ${
                            distance === value
                              ? "bg-primary text-white"
                              : "bg-white/10 hover:bg-white/20"
                          }`}
                        >
                          {value} KM
                        </button>

                      )
                    )}

                  </div>

                </div>


                {/* Fare */}

                <div className="rounded-3xl bg-gradient-to-br from-primary/20 to-white/5 border border-primary/20 p-8 text-center">

                  <p className="text-white/50 text-sm tracking-widest">
                    ESTIMATED ONE-WAY FARE
                  </p>


                  <>

                    <div
               
                      className="text-6xl md:text-7xl font-black text-primary mt-4"
                    >
                      ₹
                      {estimatedPrice.toLocaleString(
                        "en-IN"
                      )}
                    </div>

                  </>


                  <p className="text-white/50 mt-3">
                    Approximate fare for {distance} KM
                  </p>


                  <div className="mt-7 pt-6 border-t border-white/10 text-sm text-white/60">
                    ✓ One-way pricing
                    <br />
                    ✓ Driver allowance included
                    <br />
                    ✓ Final fare may vary by route
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section className="py-28">

          <div className="max-w-6xl mx-auto px-4">

            <div className="text-center mb-16">

              <span className="text-primary font-bold text-sm tracking-widest">
                SIMPLE PROCESS
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Book in 3 Easy Steps
              </h2>

            </div>


            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  number: "01",
                  title: "Enter Your Route",
                  description:
                    "Enter pickup, destination and travel date.",
                },
                {
                  number: "02",
                  title: "Choose Your Car",
                  description:
                    "Select a vehicle according to your passengers and luggage.",
                },
                {
                  number: "03",
                  title: "Enjoy Your Journey",
                  description:
                    "Get confirmation and travel comfortably with our driver.",
                },
              ].map((item, index) => (

                <div
                 
                  className="relative text-center"
                >

                  <div className="w-24 h-24 mx-auto rounded-3xl bg-primary text-white flex items-center justify-center text-3xl font-black shadow-xl shadow-primary/20">
                    {item.number}
                  </div>

                  <h3 className="text-xl font-bold mt-7">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-[70%] w-[60%] border-t-2 border-dashed border-primary/20" />
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            REVIEWS
        ================================================= */}

        <section className="py-28 bg-gray-50">

          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-14">

              <span className="text-primary font-bold text-sm tracking-widest">
                CUSTOMER STORIES
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Loved by Travellers
              </h2>

              <div className="flex justify-center items-center gap-2 mt-5">

                <div className="flex text-yellow-400">
                  ★★★★★
                </div>

                <strong>
                  4.9
                </strong>

                <span className="text-gray-500">
                  from 1,250+ reviews
                </span>

              </div>

            </div>


            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  name: "Rajesh Kumar",
                  route: "Delhi → Jaipur",
                  initials: "RK",
                  review:
                    "Excellent service. The driver arrived on time and the car was very clean. Pricing was also reasonable.",
                },
                {
                  name: "Priya Sharma",
                  route: "Mumbai → Pune",
                  initials: "PS",
                  review:
                    "Very smooth booking experience. Driver was polite and the journey was comfortable.",
                },
                {
                  name: "Amit Singh",
                  route: "Lucknow → Ayodhya",
                  initials: "AS",
                  review:
                    "Great experience with Chiku Cabs. Everything was handled professionally from pickup to drop.",
                },
              ].map(
                (review, index) => (

                  <div
                    key={review.name}
                
                    className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition"
                  >

                    <div className="flex text-yellow-400 mb-5">
                      ★★★★★
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      “{review.review}”
                    </p>


                    <div className="flex items-center gap-4 mt-7">

                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {review.initials}
                      </div>

                      <div>

                        <h4 className="font-bold">
                          {review.name}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {review.route}
                        </p>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            FAQ
        ================================================= */}

        <section className="py-28">

          <div className="max-w-4xl mx-auto px-4">

            <div className="text-center mb-14">

              <span className="text-primary font-bold text-sm tracking-widest">
                FAQ
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Frequently Asked Questions
              </h2>

            </div>


            <div className="space-y-4">

              {FAQS.map(
                (faq, index) => {

                  const isOpen =
                    openFaq === index;

                  return (

                    <div
                  
                      className={`rounded-2xl border overflow-hidden transition ${
                        isOpen
                          ? "border-primary shadow-lg"
                          : "border-gray-200"
                      }`}
                    >

                      <button
                        onClick={() =>
                          setOpenFaq(
                            isOpen
                              ? null
                              : index
                          )
                        }
                        className="w-full flex items-center justify-between p-6 text-left font-bold"
                      >

                        <span>
                          {faq.q}
                        </span>

                        <span
                       
                          className="text-primary"
                        >
                          <FaChevronDown />
                        </span>

                      </button>


                      <AnimatePresence>

                        {isOpen && (

                          <div
                      
                          >

                            <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                              {faq.a}
                            </div>

                          </div>

                        )}

                      </AnimatePresence>

                    </div>

                  );
                }
              )}

            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section className="py-24 bg-gray-50">

          <div className="max-w-5xl mx-auto px-4">

            <div
              
              className="bg-white rounded-[35px] p-8 md:p-12 shadow-sm"
            >

              <span className="text-primary font-bold text-sm tracking-widest">
                ABOUT CHIKU CABS
              </span>

              <h2 className="text-3xl md:text-4xl font-black mt-3">
                Reliable One Way Taxi Service
              </h2>

              <div className="space-y-5 mt-7 text-gray-600 leading-relaxed">

                <p>
                  Chiku Cabs provides one-way taxi services
                  for comfortable and convenient intercity
                  travel. Whether you are travelling for
                  business, family visits, airport transfers,
                  holidays or pilgrimages, our service is
                  designed to make your journey simple.
                </p>

                <p>
                  Customers can choose from multiple vehicle
                  options based on their group size and
                  luggage requirements. Our service focuses
                  on transparent pricing, professional
                  drivers and comfortable vehicles.
                </p>

                <p>
                  Book your journey by phone or WhatsApp and
                  share your pickup, destination and travel
                  details. Our team will provide the available
                  vehicle and final fare before confirmation.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="py-24 px-4">

          <div
        
            className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] bg-gray-950 p-10 md:p-16 text-center text-white"
          >

            {/* background */}

            <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl -top-20 -right-20" />

            <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl -bottom-20 -left-20" />


            <div className="relative">

              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold text-primary">
                READY TO TRAVEL?
              </span>

              <h2 className="text-4xl md:text-6xl font-black mt-5">
                Your Journey Starts Here.
              </h2>

              <p className="text-white/60 text-lg mt-5 max-w-2xl mx-auto">
                Book a comfortable one-way taxi with
                professional drivers and transparent pricing.
              </p>


              <div className="flex flex-wrap justify-center gap-4 mt-9">

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-8 py-4 rounded-2xl bg-primary font-bold flex items-center gap-3 hover:-translate-y-1 transition shadow-xl shadow-primary/20"
                >

                  <FaPhoneAlt />

                  Call Now

                </a>


                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 font-bold flex items-center gap-3 hover:bg-white/20 transition"
                >

                  <FaWhatsapp className="text-xl" />

                  WhatsApp Us

                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            EEAT
        ================================================= */}

        {/* <EEATSection
          vehicle={vehicle}
        /> */}


        {/* =================================================
            MOBILE STICKY CTA
        ================================================= */}

        <AnimatePresence>

          {isScrolled && (

            <div
            
              className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden"
            >

              <div className="bg-gray-950 rounded-2xl p-2 shadow-2xl border border-white/10 flex gap-2">

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex-1 bg-primary text-white rounded-xl py-3 font-bold text-center flex justify-center items-center gap-2"
                >

                  <FaPhoneAlt />

                  Call Now

                </a>


                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white rounded-xl py-3 font-bold text-center flex justify-center items-center gap-2"
                >

                  <FaWhatsapp />

                  WhatsApp

                </a>

              </div>

            </div>

          )}

        </AnimatePresence>

      </main>
    </>
  );
}