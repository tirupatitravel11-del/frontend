"use client";

import {
  Car,
  XCircle,
  Briefcase,
  Search,
  Receipt,
  MessageCircle,
  Phone,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";
const WHATSAPP_NUMBER = "916390008503";

const HELP_OPTIONS = [
  {
    icon: Car,
    title: "Book a New Ride",
    description:
      "Need a cab right now? Speak to our dispatcher for instant booking.",
    actionLabel: "Call Dispatcher",
    href: `tel:${PHONE_NUMBER}`,
    isPrimary: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    description: "Prefer texting? Send us your trip details on WhatsApp.",
    actionLabel: "Open WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need to book a cab.")}`,
    isPrimary: false,
  },
  {
    icon: XCircle,
    title: "Cancel or Modify",
    description: "Plans changed? Let us know so we can update your driver.",
    actionLabel: "Call Support",
    href: `tel:${PHONE_NUMBER}`,
    isPrimary: false,
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Looking for monthly billing or employee transport?",
    actionLabel: "Business Line",
    href: `tel:${PHONE_NUMBER}`,
    isPrimary: false,
  },
  {
    icon: Search,
    title: "Lost & Found",
    description: "Left something in our cab? Call us immediately to track it.",
    actionLabel: "Urgent Call",
    href: `tel:${PHONE_NUMBER}`,
    isPrimary: false,
  },
  {
    icon: Receipt,
    title: "Billing & Invoices",
    description: "Need a GST invoice or have a question about your fare?",
    actionLabel: "Contact Accounts",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with my invoice/billing.")}`,
    isPrimary: false,
  },
];

export default function HelpGrid() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Can We Help You With?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Select your reason below to reach the right team instantly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HELP_OPTIONS.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.title}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  option.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  option.isPrimary
                    ? "border-gold bg-white ring-1 ring-gold/20"
                    : "border-slate-200 bg-white hover:border-gold/40"
                }`}
              >
                {option.isPrimary && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Most Used
                  </span>
                )}

                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                    option.isPrimary
                      ? "bg-gold text-white"
                      : "bg-gold/10 text-gold"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {option.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {option.description}
                </p>

                <div
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${
                    option.isPrimary
                      ? "text-gold"
                      : "text-slate-900 group-hover:text-gold"
                  }`}
                >
                  {option.actionLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
