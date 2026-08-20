"use client";

/* ====== Assets: place your images in /public/images/tempo-traveller/ ====== */
const MAIN_IMAGE = "/20-seater-tempo.jpg";
const PHONE_NUMBER = "+916390008503";

export default function TwentySeaterStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">20 Seater Tempo Traveller</span> on Rent
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="20 Seater Luxury Tempo Traveller on Rent for Weddings, Baraat and Group Travel"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: 20 Seater Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            When your guest list crosses fifteen, the options start shrinking.
            A 16 seater leaves someone behind, a 24 seater means paying for
            empty seats, and booking two separate vehicles splits the group
            exactly when you want everyone together. The 20 Seater Tempo
            Traveller sits in the perfect sweet spot. It comfortably
            accommodates 20 passengers plus the driver in a 2×2 Maharaja pusher
            seat layout, with enough boot space for 10 large suitcases. It is
            the size wedding planners recommend for baraat processions and
            guest shuttles, the size families choose for Char Dham yatras, and
            the size corporate teams pick for offsites. With an LED TV, premium
            music system, a mic for announcements and individual AC vents,
            every seat feels first-class — and the whole group travels as one.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Booking our 20 Seater Tempo Traveller means you get more than just a
          spacious vehicle. You get a dedicated, professional chauffeur who
          handles the navigation, the tolls, the parking and the inter-state
          permits, allowing your group to fully unwind. We can arrange wedding
          decoration on request, offer flexible waiting time for multi-stop
          events, and pride ourselves on transparent pricing with no hidden
          surge fees. The interior is meticulously sanitized before every
          single trip, and pickups are punctual to respect your event schedule.
          Twenty comfortable seats. One experienced driver. Your entire group,
          together — from the first kilometre to the last.
        </p>
      </div>
    </section>
  );
}