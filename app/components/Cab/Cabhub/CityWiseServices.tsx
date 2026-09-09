import Link from "next/link";

const cities = [
  {
    name: "Lucknow",
    slug: "lucknow",
    services: [
     
      { label: "Amaze Taxi in Lucknow", href: "/amaze-taxi-in-lucknow" },
      { label: "Dzire Taxi in Lucknow", href: "/dzire-taxi-in-lucknow" },
      { label: "Etios Taxi in Lucknow", href: "/etios-taxi-in-lucknow" },
      { label: "Ertiga Taxi in Lucknow", href: "/ertiga-taxi-in-lucknow" },
      { label: "Innova Crysta in Lucknow", href: "/innova-crysta-in-lucknow" },
      { label: "Urbania Rental in Lucknow", href: "/urbania-rental-in-lucknow" },
      { label: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-lucknow" },
      { label: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-lucknow" },
      { label: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-lucknow" },
      { label: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-lucknow" },
      { label: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-lucknow" },
      { label: "Lucknow Taxi Contact Number", href: "/lucknow-taxi-contact-number" },
    ],
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    services: [

      { label: "Amaze Taxi in Varanasi", href: "/amaze-taxi-in-varanasi" },
      { label: "Dzire Taxi in Varanasi", href: "/dzire-taxi-in-varanasi" },
      { label: "Etios Taxi in Varanasi", href: "/etios-taxi-in-varanasi" },
      { label: "Ertiga Taxi in Varanasi", href: "/ertiga-taxi-in-varanasi" },
      { label: "Innova Crysta in Varanasi", href: "/innova-crysta-in-varanasi" },
      { label: "Urbania Rental in Varanasi", href: "/urbania-rental-in-varanasi" },
      { label: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-varanasi" },
      { label: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-varanasi" },
      { label: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-varanasi" },
      { label: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-varanasi" },
      { label: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-varanasi" },
      { label: "Varanasi Taxi Contact Number", href: "/varanasi-taxi-contact-number" },
    ],
  },
  {
    name: "Ayodhya",
    slug: "ayodhya",
    services: [
  
      { label: "Amaze Taxi in Ayodhya", href: "/amaze-taxi-in-ayodhya" },
      { label: "Dzire Taxi in Ayodhya", href: "/dzire-taxi-in-ayodhya" },
      { label: "Etios Taxi in Ayodhya", href: "/etios-taxi-in-ayodhya" },
      { label: "Ertiga Taxi in Ayodhya", href: "/ertiga-taxi-in-ayodhya" },
      { label: "Innova Crysta in Ayodhya", href: "/innova-crysta-in-ayodhya" },
      { label: "Urbania Rental in Ayodhya", href: "/urbania-rental-in-ayodhya" },
      { label: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-ayodhya" },
      { label: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-ayodhya" },
      { label: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-ayodhya" },
      { label: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-ayodhya" },
      { label: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-ayodhya" },
      { label: "Ayodhya Taxi Contact Number", href: "/ayodhya-taxi-contact-number" },
    ],
  },
  {
    name: "Prayagraj",
    slug: "prayagraj",
    services: [

      { label: "Amaze Taxi in Prayagraj", href: "/amaze-taxi-in-prayagraj" },
      { label: "Dzire Taxi in Prayagraj", href: "/dzire-taxi-in-prayagraj" },
      { label: "Etios Taxi in Prayagraj", href: "/etios-taxi-in-prayagraj" },
      { label: "Ertiga Taxi in Prayagraj", href: "/ertiga-taxi-in-prayagraj" },
      { label: "Innova Crysta in Prayagraj", href: "/innova-crysta-in-prayagraj" },
      { label: "Urbania Rental in Prayagraj", href: "/urbania-rental-in-prayagraj" },
      { label: "12-Seater Tempo Traveller", href: "/12-seater-tempo-traveller-in-prayagraj" },
      { label: "16-Seater Tempo Traveller", href: "/16-seater-tempo-traveller-in-prayagraj" },
      { label: "20-Seater Tempo Traveller", href: "/20-seater-tempo-traveller-in-prayagraj" },
      { label: "24-Seater Tempo Traveller", href: "/24-seater-tempo-traveller-in-prayagraj" },
      { label: "Luxury Tempo Traveller", href: "/luxury-tempo-traveller-in-prayagraj" },
      { label: "Prayagraj Taxi Contact Number", href: "/prayagraj-taxi-contact-number" },
    ],
  },
];

export default function CityWiseServices() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
            Cab Services by City
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our complete range of taxi and tempo traveller services across top pilgrimage destinations.
          </p>
        </div>

        {/* City Blocks - Stacked Vertically */}
        <div className="space-y-8">
          {cities.map((city) => (
            <div
              key={city.slug}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-8 transition hover:shadow-lg hover:border-gold/50"
            >
              {/* City Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                <h3 className="text-2xl font-bold text-stone-900 capitalize">
                  {city.name}
                </h3>
             
              </div>

              {/* Services Grid - 3 columns on large screens, 2 on medium, 1 on small */}
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {city.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex items-center text-stone-600 transition hover:text-gold"
                    >
                      <span className="mr-2 text-gold transition group-hover:translate-x-1">
                        →
                      </span>
                      <span className="text-sm">{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}