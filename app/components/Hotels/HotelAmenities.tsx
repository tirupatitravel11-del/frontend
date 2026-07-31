import {
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Snowflake,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary Wi-Fi during your stay.",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Convenient parking options available at selected properties.",
  },
  {
    icon: Coffee,
    title: "Breakfast",
    description: "Start your day with delicious breakfast options.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Relax and unwind with access to selected hotel pools.",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    description: "Enjoy convenient dining options within your hotel.",
  },
  {
    icon: Snowflake,
    title: "Air Conditioning",
    description: "Comfortable and well-equipped rooms for a pleasant stay.",
  },
  {
    icon: Clock3,
    title: "24/7 Service",
    description: "Get assistance whenever you need it throughout your stay.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "Enjoy a comfortable stay at trusted and verified properties.",
  },
];

export default function HotelAmenities() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="font-semibold text-gold">Hotel Amenities</p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Everything You Need for a Comfortable Stay
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
            Enjoy thoughtful amenities and convenient facilities designed to
            make your hotel stay relaxing, comfortable, and hassle-free.
          </p>
        </div>

        {/* Amenities */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <div
                key={amenity.title}
                className="group rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-stone-900">
                  {amenity.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
