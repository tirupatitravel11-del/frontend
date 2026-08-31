"use client";

import {
  Car,
  ShieldCheck,
  Clock3,
  Users,
  MapPinned,
  Headphones,
  CheckCircle2,
  Phone,
  Route,
  Star,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const LEADERSHIP_TEAM = [
  {
    name: "Neha Singh",
    title: "Managing Director",
    image: "/director-neha.jpg",
    description:
      "Our Managing Director contributes to the company through her 16+ years of experience in Human Resources and Strategy. With excellent leadership skills and innovative ideas, she oversees the management of four rapidly growing companies.",
  },
  {
    name: "Kumar Sambhav",
    title: "Director, Sales & Marketing",
    image: "/kumar-sambhav.jpg",
    description:
      "Our sales & marketing director, the reason for our astonishing growth over the years ever since our early days. His keen marketing strategies and 15 years' worth of insights gave us that push to soar high in the mobility sector.",
  },
  {
    name: "Dheena Sonal",
    title: "Director, Operation",
    image: "/dheena.png",
    description:
      "Our director, a visionary leader who is guiding the company with her strategic insights. She has given her unwavering dedication to the company and brought revolutionary innovations followed by great success.",
  },
  {
    name: "Anupama Sinha",
    title: "Director, Admin",
    image: "/director-anupama.jpg",
    description:
      "Director and Head of Recruitment Department. Anupama Sinha brings her 15+ years of experience and expertise in travels and tourism. Through her guidance, Tirupati Travels has extended its services to 250+ cities and covering 1000+ routes.",
  },
];

const STATS = [
  {
    value: "24×7",
    label: "Customer Support",
  },
  {
    value: "100+",
    label: "Routes Available",
  },
  {
    value: "4+",
    label: "Cab Categories",
  },
  {
    value: "100%",
    label: "Customer Focus",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Travel",
    description:
      "We focus on providing safe and dependable journeys with experienced drivers and well-maintained vehicles.",
  },
  {
    icon: Clock3,
    title: "On-Time Pickup",
    description:
      "We understand that timing matters. Our drivers aim to reach your pickup location on time.",
  },
  {
    icon: Car,
    title: "Comfortable Vehicles",
    description:
      "Choose from Sedan, SUV, Innova, Innova Crysta and Tempo Traveller according to your travel needs.",
  },
  {
    icon: Users,
    title: "Perfect for Families & Groups",
    description:
      "Whether you are travelling alone, with family or with a large group, we have suitable travel options.",
  },
  {
    icon: MapPinned,
    title: "Local & Outstation Trips",
    description:
      "Book taxis for local travel, airport transfers, one-way journeys, round trips and outstation travel.",
  },
  {
    icon: Headphones,
    title: "Helpful Customer Support",
    description:
      "Our team is available to assist you with bookings, fare information, vehicle selection and travel queries.",
  },
];

const SERVICES = [
  "Local Taxi",
  "Outstation Taxi",
  "One Way Taxi",
  "Round Trip Taxi",
  "Airport Transfer",
  "Sedan Taxi",
  "SUV Taxi",
  "Tempo Traveller",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* =====================================================
          HERO - DARK SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Decorative Gold Glow */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            About
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            A service helping individuals, families, businesses and groups find
            convenient cab, travel, vacation options for local and nearby
            travel.
          </p>
        </div>
      </section>

      {/* =====================================================
          ABOUT US CONTENT
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Section Label */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-yellow-600">
            About Us
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Making Travel Simple
          </h2>

          {/* Content */}
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              Tirupati Travel is a travel service platform designed to make
              planning and booking your journey simple, convenient and
              comfortable. We provide a range of travel-related services
              including cab bookings, hotel stays, holiday packages and boat
              booking options to help travelers plan their complete trip in one
              place.
            </p>

            <p>
              Whether you are planning a local trip, an outstation journey, a
              family vacation or a spiritual tour, our services are designed to
              meet different travel requirements. Travelers can choose from
              various cab and vehicle categories based on passenger count,
              luggage requirements, route and type of journey.
            </p>

            <p>
              Along with transportation, we also provide hotel booking options
              and customized travel packages to make your journey more
              convenient. Our packages can help travelers plan accommodation,
              sightseeing, local transportation and other travel experiences.
              Boat services and related travel activities are also available
              for destinations where applicable.
            </p>

            <p>
              Our goal is to make travel planning straightforward by providing
              useful information about vehicles, hotels, destinations, travel
              packages, estimated pricing and booking options in one place.
              Whether you need a cab, a comfortable hotel stay, a complete
              holiday package or a unique travel experience, Tirupati Travel is
              here to help you plan your journey with greater convenience and
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-yellow-600">
                Why Choose Us
              </p>

              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Everything You Need for a Better Travel Experience
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Tirupati Travel brings together different travel services to
                  help make planning your journey easier and more convenient.
                </p>

                <p>
                  Whether you need a cab for transportation, a hotel for a
                  comfortable stay, a complete travel package or a boat
                  experience, you can find travel options based on your journey
                  and requirements.
                </p>

                <p>
                  Our goal is to provide travelers with useful information and
                  convenient booking options so they can plan local trips,
                  holidays, sightseeing and other travel experiences with
                  confidence.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Cab services for local and outstation travel",
                  "Hotel options for comfortable stays",
                  "Travel and holiday packages",
                  "Boat rides and sightseeing experiences",
                  "Convenient travel planning and booking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-yellow-600"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
                  <MapPinned size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Plan Your Complete Journey
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  From transportation and accommodation to travel packages and
                  unique experiences, Tirupati Travel helps bring different
                  parts of your journey together in one convenient place.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <Route className="text-yellow-600" size={22} />

                    <p className="mt-3 text-2xl font-bold text-slate-900">
                      Cabs
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Local & Outstation Travel
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <Star className="text-yellow-600" size={22} />

                    <p className="mt-3 text-2xl font-bold text-slate-900">
                      Hotels
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Comfortable Stays & Packages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP TEAM
      ===================================================== */}
      <section className="border-t border-slate-100 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-700">
              Leadership Team
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Meet Our Leadership
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              The experienced visionaries guiding our mission to provide
              exceptional travel services across India.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP_TEAM.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:shadow-xl"
              >
                {/* Profile Image Container */}
                <div className="relative mb-4 flex justify-center">
                  {/* Decorative Ring */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-yellow-500/20 transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-500/40" />

                  {/* Image Wrapper */}
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-yellow-500 group-hover:shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;

                        target.onerror = null;

                        const initials = member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2);

                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23eab308' width='100' height='100'/%3E%3Ctext x='50' y='58' font-family='Arial, sans-serif' font-size='40' font-weight='bold' fill='white' text-anchor='middle'%3E${initials}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-center text-lg font-bold text-slate-900">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="mt-1.5 text-center text-xs font-semibold uppercase tracking-wide text-yellow-600">
                  {member.title}
                </p>

                {/* Divider */}
                <div className="mx-auto my-3 h-0.5 w-10 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

                {/* Description */}
                <p className="flex-1 text-center text-sm leading-6 text-slate-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Travellers Choose Us
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We focus on the things that matter most when you are travelling —
              safety, comfort, punctuality and dependable service.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:shadow-xl sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 transition-all duration-300 group-hover:bg-yellow-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR COMMITMENT
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
            <ShieldCheck size={28} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-yellow-600">
            Our Commitment
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Making Travel Planning Simple & Convenient
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:leading-8">
            At Tirupati Travel, we are committed to making your travel
            experience easier from planning to booking. Whether you need
            transportation, accommodation, a complete travel package or a
            unique travel experience, we aim to provide convenient options
            based on your requirements.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From local and outstation cab services to hotel stays, holiday
            packages, sightseeing and boat experiences, our goal is to help
            travelers plan comfortable and memorable journeys with everything
            they need in one place.
          </p>

          <div className="mt-10">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
            >
              <Phone size={17} />
              Plan Your Journey
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}