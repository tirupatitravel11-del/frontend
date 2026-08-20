"use client";

/* ====== Assets: place your images in /public/images/tempo-traveller/ ====== */
const MAIN_IMAGE = "/12-seater-tempo-traveller.webp";
const PHONE_NUMBER = "+916390008503";

export default function Seater12Details() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">12 Seater Tempo Traveller</span> on Rent
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="12 Seater Luxury Tempo Traveller on Rent for Family Trips, Yatras and Small Group Travel"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: 12 Seater Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            When your family outgrows a sedan but does not need a full-size bus,
            the options get confusing. An Innova splits the group into two cars,
            a 16 seater means paying for empty seats, and coordinating a convoy
            of cabs on the highway is a headache nobody wants on a holiday. The
            12 Seater Tempo Traveller sits in the perfect sweet spot. It
            comfortably accommodates 12 passengers plus the driver in a roomy
            2×1 Maharaja pusher seat layout that gives every passenger extra
            shoulder space, with enough boot room for 6 large suitcases. It is
            the size families choose for Char Dham yatra and Vaishno Devi
            darshan, the size small friend groups book for weekend escapes to
            Manali or Shimla, and the size most people pick for their first
            luxury group trip. With an LED TV, premium music system, a mic for
            announcements and individual AC vents, every seat feels first-class
            — and the whole family travels as one.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Booking our 12 Seater Tempo Traveller means you get more than just a
          spacious vehicle. You get a dedicated, professional chauffeur who
          handles the navigation, the tolls, the parking and the inter-state
          permits, allowing your family to fully unwind. We pride ourselves on
          transparent pricing with no hidden surge fees, meticulously sanitized
          interiors before every single trip, and punctual pickups that respect
          your schedule. Whether it is a pilgrimage with elders or a weekend
          getaway with kids, the 12 seater delivers SUV-like comfort at a
          per-person fare that surprises most families. Twelve comfortable
          seats. One experienced driver. Your entire family, together — from the
          first kilometre to the last.
        </p>
      </div>
    </section>
  );
}
