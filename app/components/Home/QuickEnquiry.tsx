"use client";

export default function QuickEnquiry() {
  return (
    <section className="relative z-20 px-4 lg:-mt-16">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-orange-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="9876543210"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-orange-500"
            />
          </div>

          {/* Service */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Service Type
            </label>

            <select className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none focus:border-orange-500">
              <option>Select Service</option>
              <option>Cab Booking</option>
              <option>Tour Package</option>
              <option>Hotel Booking</option>
              <option>Boat Ride</option>
            </select>
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button className="h-12 w-full rounded-lg bg-orange-600 font-semibold text-white transition hover:bg-orange-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
