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
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
              About Us
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Your Trusted Partner for
              <span className="text-gold"> Comfortable Travel</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              We provide reliable taxi and travel services for local,
              outstation and long-distance journeys. From everyday cab rides
              to family trips and large group travel, we make your journey
              comfortable, convenient and hassle-free.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
              >
                <Phone size={17} />
                Call Us
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-700 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="bg-white py-14 sm:py-18 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* LEFT */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Making Your Journey Simple & Comfortable
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                We are a taxi and travel service focused on providing
                comfortable, reliable and convenient transportation for
                individuals, families and groups.
              </p>

              <p>
                Whether you need a cab for a local journey, an airport
                transfer, an outstation trip or a vehicle for a family
                function, we help you choose the right vehicle for your
                journey.
              </p>

              <p>
                Our fleet includes comfortable Sedans, SUVs, premium cars and
                Tempo Travellers, making it easier to find a vehicle according
                to your passenger count, luggage and travel requirements.
              </p>
            </div>

            <div className="mt-7 space-y-3">
              {[
                "Experienced and professional drivers",
                "Clean and well-maintained vehicles",
                "Multiple vehicle options",
                "Local and outstation travel",
                "Simple and convenient booking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-gold"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <Car size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                Travel With Confidence
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We believe that a good journey starts with a dependable
                vehicle, a professional driver and clear communication. Our
                aim is to make your travel experience smooth from booking to
                destination.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <Route className="text-gold" size={22} />

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    100+
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Routes
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <Star className="text-gold" size={22} />

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    24×7
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="border-y border-slate-100 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-7"
              >
                <p className="text-3xl font-bold text-gold sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="bg-white py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Travellers Choose Us
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We focus on the things that matter most when you are travelling
              — safety, comfort, punctuality and dependable service.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="border-y border-slate-100 bg-slate-50 py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Our Services
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Travel Services for Every Need
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Choose the service and vehicle that best suits your journey.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-gold"
                />

                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR COMMITMENT
      ===================================================== */}
      <section className="bg-white py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <ShieldCheck size={28} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
            Our Commitment
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Your Comfort Is Our Priority
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We are committed to providing a dependable travel experience every
            time you book with us. From choosing the right vehicle to reaching
            your destination safely, we aim to make every part of your journey
            simple and comfortable.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Whether it is a short city ride, an airport transfer, a family
            trip or a long-distance journey, you can count on us for
            comfortable and convenient transportation.
          </p>

          <div className="mt-8">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg"
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