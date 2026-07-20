// import React from 'react';
import { Phone, ArrowRight, Shield, Star, CheckCircle2 } from "lucide-react";

const VehicleFareCards = () => {
  const vehicles = [
    {
      type: "Sedan",
      subtitle: "Swift Dzire, Etios, Amaze",
      distance: "220 km",
      baseFare: 4500,
      tollTax: 450,
      totalFare: 4950,
      seats: 4,
      bags: 2,
      isPopular: false,
    },
    {
      type: "SUV",
      subtitle: "Ertiga, Xylo, Marazzo",
      distance: "220 km",
      baseFare: 6500,
      tollTax: 450,
      totalFare: 6950,
      seats: 6,
      bags: 3,
      isPopular: true,
    },
    {
      type: "Innova",
      subtitle: "Toyota Innova Crysta",
      distance: "220 km",
      baseFare: 8500,
      tollTax: 450,
      totalFare: 8950,
      seats: 6,
      bags: 4,
      isPopular: false,
    },

    {
      type: "Bus",
      subtitle: "26 Seater Mini Bus",
      distance: "220 km",
      baseFare: 18000,
      tollTax: 450,
      totalFare: 18450,
      seats: 26,
      bags: 15,
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Compare the Prices from Ayodhya to Varanasi
            <span className="text-gold"></span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            One-way or round-trip — choose your route, pick your vehicle, and
            go. Transparent fares, no hidden charges.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gold">500+</div>
            <div className="text-sm text-gray-600 mt-1">Routes Covered</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gold">10k+</div>
            <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-gold">4.9</div>
            <div className="text-sm text-gray-600 mt-1">Average Rating</div>
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="space-y-4">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${
                vehicle.isPopular
                  ? "border-gold shadow-lg"
                  : "border-transparent hover:border-amber-200"
              }`}
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Vehicle Info */}
                <div className="col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {vehicle.type}
                    </h3>
                    {vehicle.isPopular && (
                      <span className="px-3 py-1 bg-gold text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-3">
                    {vehicle.subtitle}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      {vehicle.seats} Seats
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      {vehicle.bags} Bags
                    </span>
                  </div>
                </div>

                {/* Distance */}
                <div className="col-span-2 text-center">
                  <div className="text-gray-500 text-sm mb-1">Distance</div>
                  <div className="text-lg font-bold text-gray-900">
                    {vehicle.distance}
                  </div>
                </div>

                {/* Pricing */}
                <div className="col-span-3">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-gray-500 text-sm">Base:</span>
                    <span className="text-gray-700 font-semibold">
                      ₹{vehicle.baseFare}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-gray-500 text-sm">Toll/Tax:</span>
                    <span className="text-gray-700 font-semibold">
                      {vehicle.tollTax}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 pt-2 border-t border-gray-200">
                    <span className="text-gray-900 font-bold text-lg">
                      Total:
                    </span>
                    <span className="text-gold font-bold text-2xl">
                      ₹{vehicle.totalFare}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="col-span-3 flex gap-3 justify-end">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gold hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-amber-200">
                    Book Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-amber-500 text-gold hover:bg-amber-50 font-semibold rounded-xl transition-colors">
                    <Phone className="w-5 h-5" />
                    Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-gold" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Verified Drivers
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-gold" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              No Hidden Charges
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-gold" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Best Prices
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-gold" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFareCards;
