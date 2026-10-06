import { MessageCircle, Phone } from "lucide-react";

export default function PackageCTA() {
  return (
    <section className="relative overflow-hidden bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Ready to Plan Your{" "}
          <span className="text-gold">Next Journey?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
          Choose a destination, select a holiday package, and start planning
          your trip with Tirupati Travels. Our team can assist you with
          destinations, travel dates, vehicles, and package requirements.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20plan%20a%20holiday%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Plan My Trip
          </a>

          <a
            href="tel:+918726124680"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <p className="mt-6 text-sm text-stone-400">
          Family Holidays • Honeymoon Trips • Group Tours • Spiritual
          Journeys • Sightseeing
        </p>
      </div>
    </section>
  );
}