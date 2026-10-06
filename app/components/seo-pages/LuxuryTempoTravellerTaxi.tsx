"use client";

import { useState } from "react";
import {
  Users,
  Star,
  ShieldCheck,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
} from "lucide-react";
import type { SeoPageData } from "@/app/data/seoPages";
import LuxuryTempoTravellerCitySection from "@/_components/luxuryTempoTraveller/LuxuryTempoTravellerCitySection";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../Home/Testimonials";
import LuxuryFleetDetails from "@/_components/luxuryTempoTraveller/LuxuryFleetDetails";
import LuxuryTaxiFleet from "@/_components/luxuryTempoTraveller/LuxuryTaxiFleet";
import LuxuryTaxiFaqs from "@/_components/luxuryTempoTraveller/LuxuryTaxiFaqs";
import PopularRoutes from "@/_components/PopularRoutes";
import { generatePopularRoutes } from "@/app/lib/api/route-data/route-generator";
import UniversalSeoBookingForm from "./UniversalSeoBookingForm";

const PHONE_NUMBER = "+918726124680";
const WHATSAPP_NUMBER = "918726124680";

type SeaterType = string;

const SEATER_OPTIONS = [
  {
    id: "12-seater",
    label: "12 Seater Luxury",
    description: "Ideal for small families & groups",
  },
  {
    id: "16-seater",
    label: "16 Seater Premium",
    description: "Most popular for outstation trips",
  },
  {
    id: "20-seater",
    label: "20 Seater Maharaja",
    description: "Maximum comfort & legroom",
  },
  {
    id: "24-seater",
    label: "24 Seater Maharaja",
    description: "Best for large groups",
  },
];

export default function LuxuryTempoTravellerTaxi({
  page,
}: {
  page: SeoPageData;
}) {
  const { slug, title, description, intro, highlights, popularTrips, city } =
    page;
  const [selectedSeater, setSelectedSeater] = useState<SeaterType>("12-seater");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const popularRoutes = generatePopularRoutes(page.city, "");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedOption = SEATER_OPTIONS.find(
      (opt) => opt.id === selectedSeater,
    );

    const message = `Hello, I want to book a Luxury Tempo Traveller.

Pickup: ${pickup || "Not specified"}
Drop: ${drop || "Not specified"}
Seater: ${selectedOption?.label}
Passengers: ${passengers || "Not specified"}
Travel Date: ${travelDate || "Not specified"}
Name: ${name}
Phone: ${phone}

Please share the detailed quote and availability.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-stone-50 border-b border-slate-200">
        {/* Decorative Gold Glow */}
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-2 lg:py-12  ">
          {/* ================= LEFT: Content ================= */}
          <div>
            {/* Luxury Badge */}
            <div className="mt-2 flex items-center text-sm text-gold">
              <div className="flex items-center gap-2 bg-gold/10 px-3 py-1 rounded-full">
                <span className="font-bold text-gold">★ 4.9/5</span>
                <span className="ml-1">Rating</span>
              </div>

              <div className="h-5 w-px bg-white/30" />

              <div className="flex items-center gap-2 bg-gold/10 px-3 py-1 rounded-full">
                <span className="font-bold text-gold">1,250+</span>{" "}
                Customers
              </div>
            </div>

            {/* UPDATED H1 HERE */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
              Luxury Tempo Traveller on Rent for{" "}
              <span className="text-gold">Comfortable Group Travel</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Travel together in style. Featuring Maharaja pusher seats, LED TV,
              powerful AC, and a premium music system — perfect for weddings,
              pilgrimages, corporate outings, and family vacations.
            </p>

            {/* Seater Quick Filters */}
            

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call for Quote
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ================= RIGHT: Booking Card ================= */}
          <UniversalSeoBookingForm
            page={{
              slug: slug,
              city: city,
              service: "taxi",
              title: title,
              description: description,
              intro: intro,
              highlights: highlights,
              popularTrips: popularTrips,
            }}
          />
        </div>
      </section>
      

      {/* ========================================================= */}
      {/* ===== ADD THE REST OF YOUR COMPONENTS BELOW THIS LINE ===== */}
      {/* ========================================================= */}
        <LuxuryTempoTravellerCitySection />

        {/* <LuxuryTaxiFleet /> */}
        {/* <TempoTravellerFeatures /> */}
        {/* <TempoTravellerFaq /> */}
        {popularRoutes.length > 0 && (
          <PopularRoutes
            routes={popularRoutes}
            from={popularRoutes[0].from}
            to="popular destinations"
            pagetype="luxury-tempo-traveller"
          />
        )}
        <WhyChooseUs />
        <Testimonials />
        <LuxuryTaxiFaqs city={city} />

        <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="relative mx-auto max-w-4xl text-center">
   

    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      Travel Together in{" "}
      <span className="text-gold">Urbania Comfort</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
      Book a spacious Urbania for family trips, group
      tours, pilgrimages, weddings, sightseeing, and outstation journeys.
      Enjoy comfortable travel with enough seating for larger groups.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20book%20a%2020%20seater%20Urbania."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
      >
        Book Urbania on WhatsApp
      </a>

      <a
        href="tel:+918726124680"
        className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
      >
        Call Now
      </a>
    </div>

    <p className="mt-6 text-sm text-stone-400">
      Family Trips • Group Tours • Pilgrimage • Weddings • Sightseeing •
      Outstation
    </p>
  </div>
</section>
    </main>
  );
}
