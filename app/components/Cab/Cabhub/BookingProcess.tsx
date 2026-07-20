// import React from "react";
import {
  MapPin,
  Car,
  ClipboardCheck,
  CreditCard,
  CheckCircle,
} from "lucide-react";

const BookingProcess = () => {
  const steps = [
    {
      number: "1",
      icon: MapPin,
      title: "Enter Route",
      description: "Pick your pickup and drop location",
    },
    {
      number: "2",
      icon: Car,
      title: "Choose Vehicle",
      description: "Select from Sedan, SUV, or Tempo",
    },
    {
      number: "3",
      icon: ClipboardCheck,
      title: "Review Details",
      description: "Check dates, time & passenger count",
    },
    {
      number: "4",
      icon: CreditCard,
      title: "Make Payment",
      description: "Pay securely with minimal advance",
    },
    {
      number: "5",
      icon: CheckCircle,
      title: "Start Journey",
      description: "Sit back & enjoy your comfortable ride",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book in <span className="text-gold">5 Easy Steps</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Simple 5-step process to get you from point A to B comfortably
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Progress Line - Desktop (Changed to Dashed) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 border-t-2 border-dashed border-gold/60"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Connector Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 left-full w-full h-0.5 -z-10">
                      {/* Removed border-dashed from arrow so it stays solid and pops out */}
                      <div className="w-3 h-3 border-t-2 border-r-2 border-gold rotate-45 absolute -right-1.5 top-1/2 -translate-y-1/2"></div>
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="flex flex-col items-center text-center">
                    {/* Number Badge */}
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center shadow-lg group-hover:shadow-amber-300/50 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-9 h-9 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-gold rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md border-2 border-white">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gold  rounded-full text-white font-semibold shadow-xl  hover:shadow-2xl hover:scale-105 transition-all cursor-pointer">
            <span>Book Your Cab Now</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            ✓ No hidden charges &nbsp;•&nbsp; ✓ Instant confirmation
            &nbsp;•&nbsp; ✓ Free cancellation
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
