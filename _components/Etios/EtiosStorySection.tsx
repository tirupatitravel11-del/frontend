"use client";

/* ====== Assets: place your images in /public/images/etios/ ====== */
const MAIN_IMAGE = "/etios.avif";

export default function EtiosStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Toyota Etios</span> Taxi Service
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="Toyota Etios Taxi for Airport Transfers and Outstation Trips"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: Etios Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            When booking a sedan for an outstation trip or an airport transfer,
            passengers usually brace themselves for cramped rear seats and a
            tiny trunk. The Toyota Etios completely shatters that expectation.
            It carved out a legendary reputation in the Indian cab industry by
            offering an astonishingly spacious cabin where three adults can sit
            comfortably in the back without their knees touching the front
            seats, paired with a massive 595-litre boot that effortlessly
            swallows four large suitcases. Built on Toyota&apos;s bulletproof
            reliability, its torquey engine cruises effortlessly on highway
            expressways while sipping fuel economically, making long-distance
            trips incredibly cost-effective. Furthermore, its suspension setup
            is specifically tuned to absorb unpredictable potholes and broken
            tarmac, delivering a smooth, rattle-free ride. Whether it is a
            corporate airport drop, a comfortable intercity business commute, or
            a relaxed weekend family road trip, the Etios provides a premium
            sedan experience at a highly competitive fare.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Booking an Etios with us means you get more than just a reliable
          sedan. You get a courteous, background-verified chauffeur who knows
          the best routes, handles tolls and parking, and keeps the cabin at the
          perfect temperature throughout the journey. We pride ourselves on
          transparent, fixed pricing with no hidden surge fees, meticulously
          sanitized interiors before every single trip, and punctual pickups
          that respect your flight schedule or event timeline. One smart
          vehicle. One experienced driver. Your journey, comfortable and
          hassle-free — from the first kilometre to the last.
        </p>
      </div>
    </section>
  );
}
