import { Map, CheckCircle2, MessageCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Pick Your Spots",
    description: "Tell us which attractions, temples, markets, or monuments you want to visit.",
  },
  {
    step: "02",
    title: "Choose Your Car",
    description: "Select a vehicle that fits your group size and comfort needs.",
  },
  {
    step: "03",
    title: "We Handle the Rest",
    description: "Your driver will optimize the route, handle parking, and keep you on schedule.",
  },
];

export default function CustomItinerary() {
  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Content */}
          <div>
            <p className="font-semibold uppercase tracking-[4px] text-gold">
              Your City, Your Rules
            </p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl lg:leading-tight">
              Build Your Own <br />
              <span className="text-gold">Custom Sightseeing Route</span>
            </h2>
            <p className="mt-4 text-base text-stone-600 md:text-lg">
              Don't want a fixed package? No problem. Mix and match attractions, 
              set your own pace, and let our local expert drivers take you there 
              comfortably.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-stone-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-stone-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

              
          </div>

          {/* Right: Visual/Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
            <div className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-xl">
              <h3 className="text-xl font-bold text-stone-900">Sample Custom Route</h3>
              <p className="mt-2 text-sm text-stone-500">Full Day (8 Hours) • Sedan • Up to 4 Passengers</p>
              
              <div className="mt-6 space-y-4">
                {["Morning: Religious Sites & Temples", "Late Morning: Local Markets & Breakfast", "Afternoon: Historical Monuments & Museums", "Evening: Scenic Viewpoints & Dinner Drop"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm font-medium text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-stone-50 p-4 text-center">
                <p className="text-xs text-stone-500">Estimated Price</p>
                <p className="text-2xl font-bold text-stone-900">₹2,500</p>
                <p className="text-xs text-stone-500 mt-1">(Inclusive of driver allowance, excludes tolls/parking)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}