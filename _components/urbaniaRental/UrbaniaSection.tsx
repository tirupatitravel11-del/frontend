"use client";

import React from "react";

interface UrbaniaSectionProps {
  city?: string;
}

const UrbaniaSection: React.FC<UrbaniaSectionProps> = ({ city }) => {
  const cityName = city
    ? city
        .trim()
        .split(/[\s-]+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
    : "Lucknow";

  const stats = [
    { value: "50+", label: "Happy Groups" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "98%", label: "On-Time Service" },
    { value: "24/7", label: "Customer Support" },
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Group Travel Specialists",
      description: `Expertise in handling groups of all sizes in ${cityName}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Safety Certified",
      description: "All vehicles are GPS-tracked and regularly sanitized",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Punctual Service",
      description: `On-time pickup and drop-off across ${cityName}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Local Expertise",
      description: `Experienced drivers familiar with ${cityName} routes`,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold border border-gold/30 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About Force Urbania
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-slate-900 leading-tight sm:text-4xl">
              Premium Force Urbania Service in{" "}
              <span className="text-gold">{cityName}</span>
            </h2>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed sm:text-lg">
              Force Urbania is the premier choice for luxury group travel in {cityName}.
              Our fleet of modern Force Urbania vehicles combines luxury, comfort, and
              reliability to ensure your journey is unforgettable. Whether you're planning
              a family trip, corporate outing, or pilgrimage tour, we have the perfect
              vehicle for your needs.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3.5">
                  <div className="flex-shrink-0 w-11 h-11 bg-gold/10 text-gold rounded-xl flex items-center justify-center border border-gold/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base">{feature.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-normal">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-gold/40 transition-all text-center"
                >
                  <div className="text-3xl font-extrabold text-gold mb-1">{stat.value}</div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Why Choose Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-gold/30 shadow-xl text-white">
              <div className="text-center mb-4">
                {/* Bus Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/15 border border-gold/40 rounded-full mb-4">
                  <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l2-2h10l2 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z"
                    />
                    <circle cx="7" cy="18" r="1.5" fill="currentColor" />
                    <circle cx="17" cy="18" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Why Choose Urbania in {cityName}?</h3>
              </div>
              <p className="text-center text-slate-300 text-sm sm:text-base leading-relaxed">
                Experience the perfect blend of luxury, comfort, and affordability
                with our premium Force Urbania traveller service in {cityName}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrbaniaSection;