import { capitalizeFirstLetter } from "@/app/utils/commonfunction";

export default function LucknowFareTable({ data }: any) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
          {capitalizeFirstLetter(data.cityName)} Cab Fare & Vehicle Details
        </h2>

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              {/* Table Header */}
              <thead className="bg-gold text-white">
                <tr>
                  <th className="px-5 py-5 text-sm font-semibold">
                    Vehicle Type
                  </th>

                  <th className="px-5 py-5 text-sm font-semibold">Seats</th>

                  <th className="px-5 py-5 text-sm font-semibold">
                    Luggage Capacity
                  </th>

                  <th className="px-5 py-5 text-sm font-semibold">
                    Local Fare
                    <span className="block text-xs font-normal text-stone-300">
                      8hr / 80km
                    </span>
                  </th>

                  <th className="px-5 py-5 text-sm font-semibold">
                    Round Trip
                  </th>

                  <th className="px-5 py-5 text-sm font-semibold">One Way</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-stone-200">
                {/* Hatchback */}
                <tr className="bg-white transition-colors duration-200 hover:bg-gold/50">
                  <td className="px-5 py-5 font-semibold text-stone-900">
                    Hatchback
                  </td>

                  <td className="px-5 py-5 text-stone-700">4</td>

                  <td className="px-5 py-5 text-stone-700">2 Bags</td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[0]?.localFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[0]?.roundTripFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[0]?.oneWayFare || "0"}/km
                  </td>
                </tr>

                {/* Sedan */}
                <tr className="bg-stone-50 transition-colors duration-200 hover:bg-gold/50">
                  <td className="px-5 py-5 font-semibold text-stone-900">
                    Sedan
                  </td>

                  <td className="px-5 py-5 text-stone-700">4</td>

                  <td className="px-5 py-5 text-stone-700">3 Bags</td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[1]?.localFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[1]?.roundTripFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[1]?.oneWayFare || "0"}/km
                  </td>
                </tr>

                {/* Ertiga */}
                <tr className="bg-white transition-colors duration-200 hover:bg-gold/50">
                  <td className="px-5 py-5 font-semibold text-stone-900">
                    Ertiga
                  </td>

                  <td className="px-5 py-5 text-stone-700">6</td>

                  <td className="px-5 py-5 text-stone-700">4 Bags</td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[2]?.localFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[2]?.roundTripFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[2]?.oneWayFare || "0"}/km
                  </td>
                </tr>

                {/* SUV */}
                <tr className="bg-white transition-colors duration-200 hover:bg-gold/50">
                  <td className="px-5 py-5 font-semibold text-stone-900">
                    SUV
                  </td>

                  <td className="px-5 py-5 text-stone-700">6</td>

                  <td className="px-5 py-5 text-stone-700">4 Bags</td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[3]?.localFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[3]?.roundTripFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[3]?.oneWayFare || "0"}/km
                  </td>
                </tr>

                {/* Innova */}
                <tr className="bg-stone-50 transition-colors duration-200 hover:bg-gold/50">
                  <td className="px-5 py-5 font-semibold text-stone-900">
                    Innova
                  </td>

                  <td className="px-5 py-5 text-stone-700">7</td>

                  <td className="px-5 py-5 text-stone-700">5 Bags</td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[4]?.localFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[4]?.roundTripFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[4]?.oneWayFare || "0"}/km
                  </td>
                </tr>

                {/* Innova Crysta */}
                <tr className="bg-white transition-colors duration-200 hover:bg-gold/50">
                  <td className="px-5 py-5 font-semibold text-stone-900">
                    Innova Crysta
                  </td>

                  <td className="px-5 py-5 text-stone-700">7</td>

                  <td className="px-5 py-5 text-stone-700">5 Bags</td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[5]?.localFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[5]?.roundTripFare || "0"}/km
                  </td>

                  <td className="px-5 py-5 font-medium text-stone-900">
                    ₹{data?.fareDetails?.[5]?.oneWayFare || "0"}/km
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
