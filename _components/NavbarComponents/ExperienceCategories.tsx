import { Mountain, Waves, Utensils, Palette, Camera, Music, Tent, Sparkles } from "lucide-react";

const categories = [
  { name: "Adventure", icon: <Mountain className="h-6 w-6" />, desc: "Trekking, paragliding & more", color: "bg-emerald-50 text-emerald-600" },
  { name: "Water Sports", icon: <Waves className="h-6 w-6" />, desc: "Scuba, snorkeling & surfing", color: "bg-cyan-50 text-cyan-600" },
  { name: "Culinary", icon: <Utensils className="h-6 w-6" />, desc: "Cooking classes & food tours", color: "bg-orange-50 text-orange-600" },
  { name: "Arts & Crafts", icon: <Palette className="h-6 w-6" />, desc: "Pottery, painting & block print", color: "bg-pink-50 text-pink-600" },
  { name: "Photography", icon: <Camera className="h-6 w-6" />, desc: "Guided photo walks", color: "bg-purple-50 text-purple-600" },
  { name: "Performances", icon: <Music className="h-6 w-6" />, desc: "Folk dances & live shows", color: "bg-red-50 text-red-600" },
  { name: "Camping", icon: <Tent className="h-6 w-6" />, desc: "Luxury & wilderness stays", color: "bg-teal-50 text-teal-600" },
  { name: "Wellness", icon: <Sparkles className="h-6 w-6" />, desc: "Yoga, spa & meditation", color: "bg-amber-50 text-amber-600" },
];

export default function ExperienceCategories() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
            Browse by Type
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Find Your Kind of Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-stone-600">
            From adrenaline-pumping adventures to soul-soothing wellness retreats — 
            we have something for every kind of traveler.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${cat.color} transition-transform duration-300 group-hover:scale-110`}>
                {cat.icon}
              </div>
              <h3 className="text-base font-bold text-stone-900">{cat.name}</h3>
              <p className="mt-2 text-sm text-stone-500">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}