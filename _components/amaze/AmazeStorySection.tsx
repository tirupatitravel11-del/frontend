"use client";

/* ====== Assets: place your images in /public/images/amaze/ ====== */
const MAIN_IMAGE = "/amaze.jpg";

export default function AmazeStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Honda Amaze</span> Taxi Service
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="Honda Amaze Taxi for Premium Compact Sedan Travel"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: Amaze Story ===== */}
          <div className="flex flex-col gap-6">
            <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              When you need a compact sedan that doesn&apos;t compromise on 
              rear-seat comfort or boot space, the Honda Amaze is the perfect 
              choice. Unlike typical sub-4-meter cars that feel cramped in the 
              back, the Amaze offers class-leading legroom and a surprisingly 
              massive boot that easily handles multiple suitcases for outstation 
              trips. Its suspension is expertly tuned for Indian roads, absorbing 
              bad patches and speed breakers effortlessly, while the cabin remains 
              whisper-quiet at highway speeds. Whether you are heading to the 
              airport, attending a corporate meeting, or going on a weekend family 
              trip, the Amaze delivers a premium, smooth, and stable ride that 
              feels like a larger, more expensive car.
            </p>

            <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Booking an Amaze with us means you get more than just a reliable 
              compact sedan. You get a courteous, background-verified chauffeur 
              who knows the best routes, handles tolls and parking, and keeps the 
              cabin at the perfect temperature throughout the journey. We pride 
              ourselves on transparent, fixed pricing with no hidden surge fees, 
              meticulously sanitized interiors before every single trip, and 
              punctual pickups that respect your flight schedule or event timeline. 
              One smart vehicle. One experienced driver. A premium, comfortable 
              journey — from the first kilometre to the last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}