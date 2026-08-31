"use client";

import {
  Headphones,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  HelpCircle,
  MessageCircle,
  FileText,
  CreditCard,
  Smile,
} from "lucide-react";

const PHONE_NUMBER = "+91 63900 08503";
const EMAIL_ADDRESS = "support@tirupatitravels.com";
const OFFICE_ADDRESS = "Tirupati Travels Office, Main Road, Your City, State - 000000";

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Call Us Directly",
    description: "Speak with our travel experts for instant assistance with bookings and enquiries.",
    action: `tel:${PHONE_NUMBER.replace(/\s/g, "")}`,
    actionText: PHONE_NUMBER,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your detailed travel requirements and we will get back to you shortly.",
    action: `mailto:${EMAIL_ADDRESS}`,
    actionText: EMAIL_ADDRESS,
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Drop by our office to discuss your travel plans, packages, and bookings in person.",
    action: "#contact-details",
    actionText: "View Details",
  },
];

const BOOKING_STEPS = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Reach Out to Us",
    description: "Call, WhatsApp, or email us with your travel dates, destination, and number of travellers.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Get a Custom Quote",
    description: "Our team will share the best vehicle options, itinerary, and transparent pricing within minutes.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Confirm Your Booking",
    description: "Secure your trip with a small advance payment via UPI, bank transfer, or card. Easy and safe.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Enjoy Your Journey",
    description: "Sit back, relax, and let our professional driver take you on a comfortable, memorable trip.",
  },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
              <Headphones size={28} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-amber-600 sm:text-sm">
              Contact Us
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Get in Touch with Tirupati Travels
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Have questions about cab bookings, hotel reservations, or travel
              packages? Our dedicated team is here to help you plan your perfect
              journey and answer any enquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT METHODS HIGHLIGHTS
      ===================================================== */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          {CONTACT_METHODS.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.action}
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-amber-600 group-hover:underline">
                  {item.actionText} →
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          HOW TO BOOK (REPLACES FAQ)
      ===================================================== */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 sm:text-sm">
              Simple & Easy
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              How to Book Your Trip
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Booking with Tirupati Travels is quick, transparent, and hassle-free. Here's how it works in four simple steps.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Connecting Line (visible on md+) */}
            <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-amber-500/20 md:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {BOOKING_STEPS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg"
                  >
                    {/* Step Number Badge */}
                    <div className="relative z-10 mb-5 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-lg">
                        <Icon size={26} />
                      </div>
                      <span className="text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-amber-100">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILED CONTACT INFO
      ===================================================== */}
      <section id="contact-details" className="border-t border-slate-100 bg-slate-50/50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              We&apos;re Here to Help
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Reach out to us through any of the following channels. Our customer support team is dedicated to providing you with prompt and helpful responses.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Phone Number</h3>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="mt-1 block text-sm text-slate-600 transition-colors hover:text-amber-600">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Email Address</h3>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="mt-1 block text-sm text-slate-600 transition-colors hover:text-amber-600">
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Office Address</h3>
                <p className="mt-1 text-sm text-slate-600">{OFFICE_ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Working Hours</h3>
                <p className="mt-1 text-sm text-slate-600">Monday - Sunday: 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHATSAPP / CALL CTA
      ===================================================== */}
      <section className="border-t border-slate-100 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
            <MessageSquare size={26} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Prefer to Chat on WhatsApp?
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            For quicker responses and instant booking confirmations, reach out
            to us directly on WhatsApp. Our team is ready to assist you!
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-amber-700 hover:shadow-lg sm:w-auto"
            >
              <MessageSquare size={17} />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-slate-700 shadow-sm transition-all duration-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white sm:w-auto"
            >
              <Phone size={17} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


