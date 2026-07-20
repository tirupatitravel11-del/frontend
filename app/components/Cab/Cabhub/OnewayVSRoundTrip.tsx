import { ArrowRight, CheckCircle2, Repeat2 } from "lucide-react";

export default function OneWayVsRoundTrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Travel Guide
          </p>

          <h2 className="mt-3 text-3xl font-bold text-stone-900 md:text-4xl">
            One-Way vs Round-Trip Cab: Which One Should You Book?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-stone-600">
            Choosing between a one-way and round-trip cab depends on your travel
            plans, duration, and return requirements.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* One Way */}
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7 transition hover:border-gold hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <ArrowRight size={24} />
              </div>

              <h3 className="text-2xl font-bold text-stone-900">One-Way Cab</h3>
            </div>

            <p className="mt-5 leading-7 text-stone-600">
              A one-way cab is ideal when you need transportation from one city
              to another without returning in the same vehicle.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 text-stone-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />
                Perfect for one-way city transfers
              </li>

              <li className="flex gap-3 text-stone-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />
                Pay only for your onward journey
              </li>

              <li className="flex gap-3 text-stone-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />
                Best for relocation and airport transfers
              </li>
            </ul>
          </div>

          {/* Round Trip */}
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7 transition hover:border-gold hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <Repeat2 size={24} />
              </div>

              <h3 className="text-2xl font-bold text-stone-900">
                Round-Trip Cab
              </h3>
            </div>

            <p className="mt-5 leading-7 text-stone-600">
              A round-trip cab is suitable when you plan to return to your
              starting city after completing your trip.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 text-stone-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />
                Ideal for sightseeing and pilgrimages
              </li>

              <li className="flex gap-3 text-stone-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />
                Keep the same cab for your return journey
              </li>

              <li className="flex gap-3 text-stone-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />
                Convenient for multi-day trips
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Answer */}
        <div className="mt-8 rounded-2xl bg-stone-900 px-6 py-5 text-center text-white">
          <p className="text-lg">
            <span className="font-bold">Quick answer:</span> Choose a{" "}
            <span className="font-semibold text-gold">one-way cab</span> if you
            do not need the same cab for your return journey. Choose a{" "}
            <span className="font-semibold text-gold">round-trip cab</span> when
            you plan to return to your pickup city.
          </p>
        </div>
      </div>
    </section>
  );
}
