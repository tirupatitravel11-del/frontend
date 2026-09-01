import { Heart, Users, Tent, Landmark, Mountain, Waves, Camera, Utensils } from "lucide-react";

const categories = [
  {
    name: "Honeymoon Specials",
    icon: <Heart className="h-6 w-6" />,
    desc: "Romantic getaways for newlyweds",
    color: "bg-rose-50 text-rose-600",
    border: "border-rose-100",
  },
  {
    name: "Family Getaways",
    icon: <Users className="h-6 w-6" />,
    desc: "Kid-friendly trips for the whole family",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
  },
  {
    name: "Adventure Trips",
    icon: <Tent className="h-6 w-6" />,
    desc: "Trekking, camping & adrenaline rushes",
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100",
  },
  {
    name: "Pilgrimage Tours",
    icon: <Landmark className="h-6 w-6" />,
    desc: "Sacred journeys & spiritual retreats",
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
  {
    name: "Hill Stations",
    icon: <Mountain className="h-6 w-6" />,
    desc: "Cool climates & scenic mountain views",
    color: "bg-teal-50 text-teal-600",
    border: "border-teal-100",
  },
  {
    name: "Beach Holidays",
    icon: <Waves className="h-6 w-6" />,
    desc: "Sun, sand & coastal relaxation",
    color: "bg-cyan-50 text-cyan-600",
    border: "border-cyan-100",
  },
  {
    name: "Photography Tours",
    icon: <Camera className="h-6 w-6" />,
    desc: "Capture India's most stunning landscapes",
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-100",
  },
  {
    name: "Food & Culture",
    icon: <Utensils className="h-6 w-6" />,
    desc: "Culinary journeys across India",
    color: "bg-orange-50 text-orange-600",
    border: "border-orange-100",
  },
];

export default function TravelCategories() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Travel Categories We Specialize In
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
            Whether you're seeking romance, adventure, spirituality, or pure relaxation — 
            we have a perfectly crafted experience waiting for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col items-center rounded-2xl border ${cat.border} bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              {/* Icon */}
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${cat.color} transition-transform duration-300 group-hover:scale-110`}>
                {cat.icon}
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-stone-900">
                {cat.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}