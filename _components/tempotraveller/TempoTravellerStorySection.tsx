"use client";

/* ====== Assets: place your images in /public/ ====== */
const MAIN_IMAGE = "/24-seater-tempo.jpg";
const PHONE_NUMBER = "+918726124680";

export default function TempoTravellerStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Tempo Traveller</span> on Rent
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="Luxury Tempo Traveller on Rent for Group Travel, Weddings, and Pilgrimages"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: Tempo Traveller Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            When traveling with a group, coordinating multiple cars is a 
            logistical nightmare. People get separated, luggage gets cramped, 
            and the fun gets divided. A Tempo Traveller solves this instantly. 
            Whether you are planning a family vacation, a corporate offsite, a 
            wedding baraat, or a spiritual yatra, our Tempo Travellers offer 
            the perfect blend of space and comfort. With plush push-back seats, 
            ample legroom, and a spacious boot for luggage, everyone travels 
            together in one air-conditioned cabin. Equipped with an LED TV, a 
            premium music system, and charging points, the journey becomes as 
            enjoyable as the destination itself.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Booking our Tempo Traveller means you get more than just a reliable 
          vehicle; you get a complete peace-of-mind experience. Our professional, 
          experienced chauffeurs handle the navigation, tolls, parking, and 
          inter-state permits, allowing your group to fully relax and enjoy 
          the ride. We pride ourselves on transparent pricing with no hidden 
          surge fees, flexible waiting times for multi-stop itineraries, and 
          meticulously sanitized interiors before every single trip. From the 
          moment you step in to the final drop-off, we ensure your group stays 
          together, comfortable, and perfectly on time.
        </p>
      </div>
    </section>
  );
}