import {
  Landmark,
  Utensils,
  CalendarDays,
  Heart,
  Plane,
  TrainFront,
  Phone,
} from "lucide-react";

export default function AboutLucknow() {
  return (
    <>
      {/* About Lucknow */}
      <section className="border-l-4 border-gold bg-[#fffbea] px-7 py-8 md:px-8">
        <h2 className="text-3xl font-bold text-stone-900">About Lucknow</h2>

        <p className="mt-6 text-base leading-7 text-stone-700">
          <strong className="text-stone-900">Overview:</strong> Lucknow, the
          capital of Uttar Pradesh, is known for its rich Nawabi heritage,
          historic architecture, refined culture, famous cuisine, and warm
          hospitality. The city is also an important hub for business,
          education, tourism, and travel across North India.
        </p>

        {/* Information Cards */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Famous For */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <Landmark className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">Famous For</h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Nawabi Heritage,
              <br />
              Bara Imambara,
              <br />
              Chikankari,
              <br />
              Historic Architecture
            </p>
          </div>

          {/* Local Cuisine */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <Utensils className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">
                Local Cuisine
              </h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Galouti Kebab,
              <br />
              Tunday Kebab,
              <br />
              Lucknowi Biryani,
              <br />
              Basket Chaat
            </p>
          </div>

          {/* Best Time */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">
                Best Time to Visit
              </h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              October to March
            </p>
          </div>

          {/* Ideal For */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-gold" />

              <h3 className="text-xl font-bold text-stone-900">Ideal For</h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Bara Imambara,
              <br />
              Chota Imambara,
              <br />
              Rumi Darwaza,
              <br />
              Hazratganj,
              <br />
              British Residency
            </p>
          </div>
        </div>

        {/* Airport & Railway */}
        <div className="mt-8 grid gap-5 border-t border-stone-200 pt-6 md:grid-cols-2">
          <div className="flex items-center gap-3 text-stone-700">
            <Plane className="h-5 w-5 text-gold" />

            <p>
              <strong className="text-stone-900">Nearest Airport:</strong>{" "}
              Chaudhary Charan Singh International Airport (LKO)
            </p>
          </div>

          <div className="flex items-center gap-3 text-stone-700">
            <TrainFront className="h-5 w-5 text-gold" />

            <p>
              <strong className="text-stone-900">Main Railway Station:</strong>{" "}
              Lucknow Charbagh Railway Station
            </p>
          </div>
        </div>
      </section>

      {/* Fare Note */}
      <section className="mt-7 border-l-4 border-gold bg-[#fffbea] px-7 py-6">
        <p className="leading-7 text-stone-700">
          <strong className="text-stone-900">Note:</strong> The above fares are
          indicative and may vary depending on the vehicle category, travel
          distance, route, tolls, parking, permits, and other applicable
          charges. The final fare is confirmed before booking.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-7 flex justify-center">
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-3 rounded-xl bg-gold px-7 py-4 text-lg font-semibold text-stone-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <Phone className="h-5 w-5" />
          Book Your Ride Now
        </a>
      </div>
    </>
  );
}
