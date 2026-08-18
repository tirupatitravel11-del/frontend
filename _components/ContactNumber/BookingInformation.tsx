"use client";

import { ClipboardList, Wallet, Receipt, Timer, Phone } from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const READY_DETAILS = [
  "Pickup address — full address or nearest landmark",
  "Drop address — hotel, station or airport terminal",
  "Travel date & pickup time",
  "Passenger count & luggage — so we assign the right cab (Dzire, Etios or Ertiga)",
  "Flight number for airport transfers — we track delays for free",
];

const AFTER_BOOKING = [
  {
    title: "Fare Confirmed",
    detail: "Your fixed fare is locked on the call or WhatsApp — no meter, no surge.",
  },
  {
    title: "Driver Assigned",
    detail: "Driver's name, phone number and cab number shared before pickup.",
  },
  {
    title: "On-Time Pickup",
    detail: "Your driver reaches 15 minutes early. We stay reachable during the trip.",
  },
  {
    title: "Pay After Drop",
    detail: "Pay by cash, UPI or card at the end of the trip. Receipt on WhatsApp.",
  },
];

const GOOD_TO_KNOW = [
  {
    icon: Wallet,
    title: "Payment Options",
    detail:
      "Cash, UPI (GPay / PhonePe / Paytm) and cards accepted. Monthly billing available for corporate clients.",
  },
  {
    icon: Receipt,
    title: "Tolls & Extra Charges",
    detail:
      "Tolls, parking and airport entry fee are billed at actuals. Everything else is included in your fixed fare.",
  },
  {
    icon: Timer,
    title: "Waiting & Cancellation",
    detail:
      "30 minutes of free waiting at pickup. Free cancellation up to 2 hours before your scheduled time.",
  },
];

export default function BookingInformation() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Booking Information
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Know Before You Book
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A quick guide to make your booking smooth — from the first call to
            the final drop.
          </p>
        </div>

        {/* ===== Two-Column Info Cards ===== */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left: Details to Keep Ready */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <ClipboardList className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Keep These Details Ready
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {READY_DETAILS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-xl bg-gold/10 p-4 text-sm leading-6 text-slate-700">
              💡 <strong className="text-gold">Pro tip:</strong> Having these
              ready cuts your booking call down to under 2 minutes.
            </p>
          </div>

          {/* Right: What Happens After You Book */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              What Happens After You Book
            </h3>

            <div className="mt-6">
              {AFTER_BOOKING.map((item, index) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    {index < AFTER_BOOKING.length - 1 && (
                      <span className="my-1 h-8 w-0.5 bg-gold/30" />
                    )}
                  </div>

                  <div className="min-w-0 pb-6">
                    <p className="text-sm font-semibold text-slate-900 sm:text-base">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Good to Know Strip ===== */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {GOOD_TO_KNOW.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* ===== Bottom CTA Line ===== */}
        <p className="mt-10 text-center text-sm leading-6 text-slate-600 sm:text-base">
          Still have a question?{" "}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-1.5 font-bold text-gold hover:underline"
          >
            <Phone className="h-4 w-4" />
            Call +91 63900 08503
          </a>{" "}
          — we pick up 24×7.
        </p>
      </div>
    </section>
  );
}