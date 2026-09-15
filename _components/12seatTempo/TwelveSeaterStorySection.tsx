"use client";

/* ====== Assets: place your images in /public/ ====== */
const MAIN_IMAGE = "/12-seater-tempo-traveller.webp";
const PHONE_NUMBER = "+918726124680";

export default function TwelveSeaterStorySection() {
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
              alt="12 Seater Tempo Traveller on Rent for Family Trips and Airport Transfers"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* ===== Right: 12 Seater Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            For groups of 10 to 12, a large bus feels empty and expensive, 
            while multiple cars mean splitting up the fun. The 12 Seater 
            Tempo Traveller is the perfect middle ground. It offers the 
            intimacy of a family car with the space of a mini-bus. Ideal for 
            airport transfers, weekend getaways, and local sightseeing, its 
            compact size makes it incredibly agile on narrow city streets and 
            winding hill roads. With a comfortable 2×2 seating layout, 
            generous legroom, and individual AC vents, every passenger enjoys 
            a premium experience without the crowd.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Renting our 12 Seater Tempo Traveller ensures a smooth, personalized 
          journey. Your dedicated chauffeur knows the best routes to avoid 
          traffic and handles all the logistics, from tolls to parking in 
          tight spots. We offer transparent pricing, deep-cleaned interiors, 
          and flexible pickup options. Whether it is a quick corporate meeting 
          run or a scenic family vacation, our 12-seater keeps your group 
          united, comfortable, and moving efficiently from start to finish.
        </p>
      </div>
    </section>
  );
}