"use client";

/* ====== Assets: place your images in /public/images/dzire/ ====== */
const MAIN_IMAGE = "/dzire.jpg";

export default function DzireStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Maruti Dzire</span> Taxi Service
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="Maruti Suzuki Dzire Taxi for Comfortable Sedan Travel"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: Dzire Story ===== */}
          <div className="flex flex-col gap-6">
            <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Travelling for business or a small family getaway often requires a 
              perfect balance of elegance, comfort, and fuel efficiency. You 
              don&apos;t always need a massive SUV; sometimes, you want a smooth, 
              refined ride that glides through city traffic and cruises effortlessly 
              on the highway. The Maruti Suzuki Dzire sits in that perfect sweet 
              spot. It offers a spacious, well-cushioned cabin for up to 5 
              passengers, a surprisingly large boot that easily swallows multiple 
              suitcases, and a highly refined engine that ensures a whisper-quiet 
              ride. Its sleek design turns heads, while its compact footprint makes 
              navigating tight urban streets and finding parking a breeze. Whether 
              it&apos;s a corporate airport transfer, a romantic weekend drive, a 
              temple run with family, or a seamless outstation trip, the Dzire 
              delivers premium sedan comfort at an incredibly economical fare.
            </p>

            <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Booking a Dzire with us means you get more than just a reliable sedan.
              You get a courteous, background-verified chauffeur who knows the best
              routes, handles tolls and parking, and keeps the cabin at the perfect
              temperature throughout the journey. We pride ourselves on transparent,
              fixed pricing with no hidden surge fees, meticulously sanitized
              interiors before every single trip, and punctual pickups that respect
              your flight schedule or event timeline. One smart vehicle. One
              experienced driver. A premium, comfortable journey — from
              the first kilometre to the last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}