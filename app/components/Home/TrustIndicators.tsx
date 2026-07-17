import StatCard from "./StatCard";
import { stats } from "../../constants/stats";

export default function TrustIndicators() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-stone-900">
            Trusted by Thousands of Happy Travelers
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            We take pride in delivering safe, reliable, and affordable travel
            experiences. Thousands of customers trust us for cab bookings,
            pilgrimage tours, hotel reservations, and sightseeing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
