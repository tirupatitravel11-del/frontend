"use client";

/* ====== Assets: place your images in /public/images/tempo-traveller/ ====== */
const MAIN_IMAGE = "/16-seater-tempo-traveller.webp";
const PHONE_NUMBER = "+916390008503";

export default function SixteenSeaterDetails() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">16 Seater Tempo Traveller</span> on Rent
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="16 Seater Luxury Tempo Traveller on Rent for Yatras, Group Tours and Family Trips"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: 16 Seater Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            When your group is bigger than a family but smaller than a crowd,
            choosing the right vehicle gets tricky. A 12 seater forces someone
            to sit out, a 20 seater means paying for empty seats, and splitting
            into two cabs ruins the joy of travelling together. The 16 Seater
            Tempo Traveller sits in the perfect sweet spot. It comfortably
            accommodates 16 passengers plus the driver in a 2×2 Maharaja pusher
            seat layout, with enough boot space for 8 large suitcases. It is the
            size families choose for Char Dham yatras and hill trips to Manali
            or Shimla, the size friend groups pick for weekend getaways, and the
            size corporate teams book for offsites and client visits. With an
            LED TV, premium music system, a mic for announcements and individual
            AC vents, every seat feels first-class — and the whole group travels
            as one.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Booking our 16 Seater Tempo Traveller means you get more than just a
          spacious vehicle. You get a dedicated, professional chauffeur who
          handles the navigation, the tolls, the parking and the inter-state
          permits, allowing your group to fully unwind. We can arrange
          decoration on request for special occasions, offer flexible waiting
          time for multi-stop itineraries, and pride ourselves on transparent
          pricing with no hidden surge fees. The interior is meticulously
          sanitized before every single trip, and pickups are punctual to
          respect your schedule. Sixteen comfortable seats. One experienced
          driver. Your entire group, together — from the first kilometre to the
          last.
        </p>
      </div>
    </section>
  );
}
