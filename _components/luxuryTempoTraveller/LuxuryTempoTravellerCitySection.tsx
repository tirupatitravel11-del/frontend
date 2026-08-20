"use client";

/* ====== Assets: place your images in /public/images/tempo-traveller/ ====== */
const MAIN_IMAGE = "/12-seater-tempo-traveller.webp";
const PHONE_NUMBER = "+916390008503";

export default function LuxuryTempoTravellerCitySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Luxury Tempo Traveller</span> on Rent
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="Luxury Tempo Traveller on Rent for Weddings, Pilgrimages and Group Travel"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: Luxury TT Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Planning travel for a large group often means compromising. You
            either squeeze into multiple cramped cabs, lose track of each other
            on the highway, or deal with the frustrating logistics of
            coordinating different vehicles. Whether you are organising a
            wedding baraat, a Char Dham pilgrimage, a corporate offsite, or a
            long-distance family vacation, keeping everyone together and
            comfortable is a challenge. Booking a Luxury Tempo Traveller through
            our rental service changes the entire dynamic. Instead of a convoy
            of separate cars, your entire group travels in one spacious,
            air-conditioned luxury vehicle. With Maharaja pusher seats,
            individual AC vents, LED TV, premium music system and a mic for
            announcements, every passenger gets a first-class experience. It is
            not just about moving from point A to point B — it is about starting
            the journey together, sharing the excitement, and arriving relaxed
            and ready.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Choosing our Luxury Tempo Traveller Rental service means you get more
          than just a premium vehicle. You get a dedicated, professional
          chauffeur who handles the navigation, the tolls, the parking and the
          inter-state permits, allowing your group to fully unwind. We pride
          ourselves on transparent pricing with no hidden surge fees,
          meticulously sanitized interiors before every single trip, and
          punctual pickups that respect your schedule. From 12-seater to
          24-seater options, we have the right luxury TT for every group. One
          luxury vehicle. One experienced driver. Everyone together. Experience
          the ultimate standard in group travel.
        </p>
      </div>
    </section>
  );
}
