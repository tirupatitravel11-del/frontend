"use client";

/* ====== Assets: place your images in /public/images/tempo-traveller/ ====== */
const MAIN_IMAGE = "/24-seater-tempo.jpg";
const PHONE_NUMBER = "+916390008503";

export default function TwentyFourDetails() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">24 Seater Tempo Traveller</span> on Rent
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="24 Seater Luxury Tempo Traveller on Rent for Weddings, Corporate Events and Large Group Travel"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: 24 Seater Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            When your headcount crosses twenty, most operators tell you to book
            two vehicles. That means double the coordination, double the fares,
            and a group that spends the entire trip staring at the tail lights
            of the other van. The 24 Seater Tempo Traveller solves this in a
            single, luxurious move. It comfortably accommodates 24 passengers
            plus the driver in a 2×2 Maharaja pusher seat layout, with a massive
            rear boot that swallows 12 large suitcases. It is the size wedding
            planners book for full baraats and destination ceremonies, the size
            corporate teams choose for offsites and conference shuttles, and the
            size schools and colleges trust for picnics and excursions. With an
            LED TV, premium music system, a mic for announcements and individual
            AC vents, even the last row travels first-class — and the entire
            group arrives together, on time, in one vehicle.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Booking our 24 Seater Tempo Traveller means you get more than just
          maximum capacity. You get a dedicated, professional chauffeur who
          handles the navigation, the tolls, the parking and the inter-state
          permits, allowing your entire group to fully unwind. We can arrange
          wedding decoration on request, coordinate multi-vehicle convoys for
          events bigger than 24 guests, and pride ourselves on transparent
          pricing with no hidden surge fees. The interior is meticulously
          sanitized before every single trip, and pickups are punctual to
          respect your event schedule. Twenty-four comfortable seats. One
          experienced driver. Your biggest group, together — from the first
          kilometre to the last.
        </p>
      </div>
    </section>
  );
}