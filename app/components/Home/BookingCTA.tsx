import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918726124680";

export default function BookingCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hello Tirupati Travels, I want to enquire about booking a vehicle.",
  );

  return (
    <section className="relative overflow-hidden bg-stone-800 py-12 sm:py-12 lg:py-12">
      {/* Background decoration */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Label */}
        <span className="text-sm font-semibold uppercase tracking-wider text-gold">
          Plan Your Journey
        </span>

        {/* Heading */}
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Book Your{" "}
          <span className="text-gold">Vehicle?</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Whether you are planning a family trip, pilgrimage, sightseeing
          tour, wedding, or outstation journey, Tirupati Travels can help
          you find a suitable vehicle for your group.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gold
              px-6
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition
              hover:opacity-90
              sm:w-auto
            "
          >
            <MessageCircle className="h-5 w-5" />
            Enquire on WhatsApp
          </a>

          <a
            href="tel:+918726124680"
            className="
              inline-flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/30
              px-6
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-white
              hover:text-slate-900
              sm:w-auto
            "
          >
            <Phone className="h-5 w-5" />
            Call for Booking
          </a>

          <Link
            href="/cabs"
            className="
              inline-flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/30
              px-6
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-white
              hover:text-slate-900
              sm:w-auto
            "
          >
            Explore Vehicles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Trust text */}
        <p className="mt-6 text-sm text-slate-400">
          Tempo Traveller • Force Urbania • Cabs • Group Travel
        </p>
      </div>
    </section>
  );
}