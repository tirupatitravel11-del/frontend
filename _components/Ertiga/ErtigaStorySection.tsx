"use client";

/* ====== Assets: place your images in /public/images/ertiga/ ====== */
const MAIN_IMAGE = "/ertiga_taxi.png";

export default function ErtigaStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Maruti Ertiga</span> Taxi Service
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="Maruti Suzuki Ertiga Taxi for Family and Group Travel"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: Ertiga Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Travelling as a family of 5, 6, or 7 often feels like a compromise.
            You either cram everyone into a sedan where knees press against
            front seats and luggage stays behind, or you book two separate cabs
            and lose the joy of travelling together. The Maruti Suzuki Ertiga
            sits in the perfect sweet spot between these two extremes. It offers
            genuine 3-row seating for up to 7 passengers, a roof-mounted rear AC
            that keeps the back row cool, and 185mm of ground clearance that
            handles farmhouse driveways, rough village roads, and tall speed
            breakers without a single scrape. Its compact MPV footprint means it
            slips into tight hotel parking spots and narrow old-city lanes where
            bigger SUVs struggle to turn. Whether it&apos;s an airport transfer
            with the whole family, a weekend getaway to the hills, a wedding
            guest shuttle, or a pilgrimage tour with elders who value comfort —
            the Ertiga delivers SUV-like space at a sedan-friendly fare.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Booking an Ertiga with us means you get more than just a reliable MPV.
          You get a courteous, background-verified chauffeur who knows the best
          routes, handles tolls and parking, and keeps the cabin at the perfect
          temperature throughout the journey. We pride ourselves on transparent,
          fixed pricing with no hidden surge fees, meticulously sanitized
          interiors before every single trip, and punctual pickups that respect
          your flight schedule or event timeline. One smart vehicle. One
          experienced driver. Your entire group, together and comfortable — from
          the first kilometre to the last.
        </p>
      </div>
    </section>
  );
}
