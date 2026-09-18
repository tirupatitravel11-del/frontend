"use client";

const MAIN_IMAGE = "/amaze.jpg";

export default function SedanStorySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Premium Sedan</span> Taxi Service
        </h2>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt="Premium Sedan Taxi Service"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our Premium Sedan Taxi Service is designed for comfortable and
              convenient travel, whether you are planning an airport transfer,
              an outstation journey, or a local trip. Sedan cars such as the
              Maruti Suzuki Dzire, Honda Amaze, and Toyota Etios offer a
              comfortable cabin, good luggage space, and a smooth ride for
              everyday travel.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              With comfortable seating and a dedicated boot, sedans are a
              practical choice for individuals, couples, families, and business
              travellers. They provide a good balance between comfort,
              convenience, and affordability for both short and long-distance
              journeys.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Whether you need a corporate airport drop, an intercity transfer,
              or a family road trip, our sedan service makes your journey simple
              and comfortable from pickup to destination.
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        {/* <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Booking a sedan with us gives you a comfortable vehicle,
            professional driver assistance, convenient pickup, and a
            straightforward travel experience. Our service is suitable for
            airport transfers, local travel, and outstation trips.
          </p>
        </div> */}
      </div>
    </section>
  );
}
