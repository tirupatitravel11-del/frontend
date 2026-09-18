
"use client";

const MAIN_IMAGE = "/ertiga_taxi.png";

export default function SUVStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">SUV</span> Taxi Service
        </h2>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="SUV Taxi Service"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our SUV Taxi Service is designed for travellers who need
              extra space, comfortable seating, and a convenient ride for
              local travel, airport transfers, and outstation journeys. SUVs
              such as the Maruti Suzuki Ertiga, Toyota Innova, and Toyota
              Innova Crysta provide spacious interiors and practical luggage
              capacity for families, groups, and business travellers.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              With multiple seating options and a spacious cabin, SUVs are a
              practical choice when travelling with family, friends, or
              additional luggage. Their comfortable interiors make them
              suitable for both short city trips and longer intercity journeys.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Whether you need an airport pickup, an outstation transfer, a
              family trip, or a comfortable group journey, our SUV taxi
              service provides the space and convenience you need for a smooth
              travel experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

