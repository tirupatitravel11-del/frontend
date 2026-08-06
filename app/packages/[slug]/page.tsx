import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock3, MapPin, Users, CheckCircle } from "lucide-react";

import { popularPackages } from "../../constants/packages";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PackageDetailsPage({ params }: Props) {
  const { slug } = await params;

  const pkg = popularPackages.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}

        <div className="rounded-2xl bg-gold p-8 text-white">
          <p>{pkg.type}</p>

          <h1 className="mt-3 text-4xl font-bold">{pkg.title}</h1>

          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              {pkg.duration}
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              {pkg.groupSize}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {pkg.location}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Left */}

          <div>
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={1200}
              height={700}
              className="h-[450px] w-full rounded-2xl object-cover"
            />

            <section className="mt-8 rounded-2xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold">About This Package</h2>

              <p className="mt-4 leading-8 text-stone-600">{pkg.description}</p>
            </section>

            <section className="mt-8 rounded-2xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold">Highlights</h2>

              <div className="mt-5 space-y-4">
                {pkg.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-green-600" />

                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-2xl bg-white p-6 shadow">
              <h2 className="text-2xl font-bold">Package Tags</h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {pkg.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-100 px-4 py-2 font-medium text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}

          <aside>
            <div className="sticky top-5 rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-bold">Package Summary</h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-center gap-3">
                  <Calendar />
                  {pkg.duration}
                </div>

                <div className="flex items-center gap-3">
                  <Users />
                  {pkg.groupSize}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin />
                  {pkg.location}
                </div>
              </div>

              <div className="mt-8 border-t pt-6">
                <p className="text-sm text-stone-500">Starting From</p>

                <p className="mt-2 text-4xl font-bold text-gold">{pkg.price}</p>
              </div>

              <button className="mt-8 w-full rounded-xl bg-gold py-4 font-bold text-white">
                Book Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
