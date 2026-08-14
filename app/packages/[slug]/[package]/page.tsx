import axios from "axios";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock3,
  MapPin,
  Users,
  CheckCircle2,
  Info,
  Route,
  CarFront,
  ChevronDown,
  Check,
  XCircle,
  X,
  IndianRupee,
} from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
    package: string;
  }>;
};

// ===============================
// GET SINGLE PACKAGE
// ===============================
async function getPackage(packageSlug: string) {
  try {


    const apiUrl = `${process.env.apiUrl}/api/package/${packageSlug}`;


    const response = await axios.get(apiUrl);


    // IMPORTANT:
    // API response:
    // {
    //   success: true,
    //   message: "...",
    //   data: {...}
    // }

    return response.data.data || null;
  } catch (error) {
    console.error("PACKAGE API ERROR:", error);

    if (axios.isAxiosError(error)) {
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);
    }

    return null;
  }
}

// ===============================
// PAGE
// ===============================
export default async function PackageDetailsPage({ params }: Props) {
  // URL se params nikalna
  const { package: packageSlug, slug } = await params;

console.log(packageSlug,"df");


  // API CALL
  const packageData = await getPackage(packageSlug);



  // Agar package nahi mila
  if (!packageData) {
    notFound();
  }

  const tagColors = [
    "border-pink-200 bg-pink-50 text-pink-600",
    "border-amber-200 bg-amber-50 text-amber-700",
    "border-emerald-200 bg-emerald-50 text-emerald-600",
    "border-sky-200 bg-sky-50 text-sky-600",
    "border-violet-200 bg-violet-50 text-violet-600",
    "border-rose-200 bg-rose-50 text-rose-600",
    "border-lime-200 bg-lime-50 text-lime-700",
    "border-cyan-200 bg-cyan-50 text-cyan-700",
  ];
  return (
    // <main className="min-h-screen bg-stone-50 py-10">
    //   <div className="mx-auto max-w-7xl px-6">

    //     {/* ================= HEADER ================= */}

    //     <section className="rounded-2xl bg-gold p-8 text-white md:p-10">
    //       <p className="text-sm font-semibold uppercase tracking-wide">
    //         {packageData.type || "Holiday Package"}
    //       </p>

    //       <h1 className="mt-3 text-4xl font-bold md:text-5xl">
    //         {packageData.title}
    //       </h1>

    //       <div className="mt-6 flex flex-wrap gap-6">

    //         {/* Duration */}
    //         {packageData.duration && (
    //           <div className="flex items-center gap-2">
    //             <Clock3 className="h-5 w-5" />

    //             <span>{packageData.duration}</span>
    //           </div>
    //         )}

    //         {/* Group Size */}
    //         {packageData.groupSize && (
    //           <div className="flex items-center gap-2">
    //             <Users className="h-5 w-5" />

    //             <span>{packageData.groupSize}</span>
    //           </div>
    //         )}

    //         {/* Location */}
    //         {packageData.location && (
    //           <div className="flex items-center gap-2">
    //             <MapPin className="h-5 w-5" />

    //             <span>{packageData.location}</span>
    //           </div>
    //         )}

    //       </div>
    //     </section>

    //     {/* ================= CONTENT ================= */}

    //     <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">

    //       {/* LEFT SIDE */}
    //       <div>

    //         {/* IMAGE */}

    //         {packageData.image && (
    //           <img
    //             src={packageData.image}
    //             alt={packageData.title}
    //             className="h-[450px] w-full rounded-2xl object-cover"
    //           />
    //         )}

    //         {/* ABOUT */}

    //         {packageData.description && (
    //           <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
    //             <h2 className="text-2xl font-bold text-stone-900">
    //               About This Package
    //             </h2>

    //             <p className="mt-4 leading-8 text-stone-600">
    //               {packageData.description}
    //             </p>
    //           </section>
    //         )}

    //         {/* SHORT DESCRIPTION */}

    //         {packageData.shortDescription && (
    //           <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
    //             <h2 className="text-2xl font-bold text-stone-900">
    //               About the Trip
    //             </h2>

    //             <p className="mt-4 leading-8 text-stone-600">
    //               {packageData.shortDescription}
    //             </p>
    //           </section>
    //         )}

    //         {/* HIGHLIGHTS */}

    //         {packageData.highlights &&
    //           packageData.highlights.length > 0 && (
    //             <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

    //               <h2 className="text-2xl font-bold text-stone-900">
    //                 Highlights
    //               </h2>

    //               <div className="mt-5 space-y-4">

    //                 {packageData.highlights.map(
    //                   (item: string) => (
    //                     <div
    //                       key={item}
    //                       className="flex items-center gap-3"
    //                     >
    //                       <CheckCircle2 className="h-5 w-5 text-green-600" />

    //                       <span className="text-stone-700">
    //                         {item}
    //                       </span>
    //                     </div>
    //                   ),
    //                 )}

    //               </div>
    //             </section>
    //           )}

    //         {/* TAGS */}

    //         {packageData.tags &&
    //           packageData.tags.length > 0 && (
    //             <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

    //               <h2 className="text-2xl font-bold text-stone-900">
    //                 Package Tags
    //               </h2>

    //               <div className="mt-5 flex flex-wrap gap-3">

    //                 {packageData.tags.map(
    //                   (tag: string) => (
    //                     <span
    //                       key={tag}
    //                       className="rounded-full bg-orange-100 px-4 py-2 font-medium text-gold"
    //                     >
    //                       {tag}
    //                     </span>
    //                   ),
    //                 )}

    //               </div>

    //             </section>
    //           )}

    //       </div>

    //       {/* ================= SIDEBAR ================= */}

    //       <aside>

    //         <div className="sticky top-5 rounded-2xl bg-white p-6 shadow-sm">

    //           <h3 className="text-xl font-bold text-stone-900">
    //             Package Summary
    //           </h3>

    //           <div className="mt-6 space-y-5">

    //             {packageData.duration && (
    //               <div className="flex items-center gap-3 text-stone-700">
    //                 <Calendar className="h-5 w-5 text-gold" />

    //                 <span>
    //                   {packageData.duration}
    //                 </span>
    //               </div>
    //             )}

    //             {packageData.groupSize && (
    //               <div className="flex items-center gap-3 text-stone-700">
    //                 <Users className="h-5 w-5 text-gold" />

    //                 <span>
    //                   {packageData.groupSize}
    //                 </span>
    //               </div>
    //             )}

    //             {packageData.location && (
    //               <div className="flex items-center gap-3 text-stone-700">
    //                 <MapPin className="h-5 w-5 text-gold" />

    //                 <span>
    //                   {packageData.location}
    //                 </span>
    //               </div>
    //             )}

    //           </div>

    //           {/* PRICE */}

    //           {packageData.price && (
    //             <div className="mt-8 border-t border-stone-200 pt-6">

    //               <p className="text-sm text-stone-500">
    //                 Starting From
    //               </p>

    //               <p className="mt-2 text-4xl font-bold text-gold">
    //                 ₹
    //                 {Number(
    //                   packageData.price,
    //                 ).toLocaleString()}
    //               </p>

    //             </div>
    //           )}

    //           {/* BOOK BUTTON */}

    //           <button
    //             type="button"
    //             className="mt-8 w-full rounded-xl bg-gold py-4 font-bold text-white transition hover:bg-[#c88912]"
    //           >
    //             Book Now
    //           </button>

    //         </div>

    //       </aside>

    //     </div>
    //   </div>
    // </main>
    <main className="bg-stone-100 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="rounded-2xl bg-gold p-6 text-white">
          {/* <p className="text-sm">{packageData.type}</p> */}

          <h1 className="mt-2 text-3xl font-bold">{packageData.title}</h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {packageData.days} days
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} />
              {/* {packageData.groupSize} */}2-8 people
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {packageData.slug}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Left */}
          <div>
            <img
              src={packageData.featuredImage}
              alt={packageData.title}
              width={1200}
              height={700}
              className="h-[380px] w-full rounded-2xl object-cover"
            />

            {/* About This Package */}
            <section className="mt-6 rounded-2xl bg-white p-5 shadow">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-gold">
                  <Info size={16} />
                </span>
                <h2 className="text-xl font-bold text-stone-900">
                  About This Package
                </h2>
              </div>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                {packageData.description}
              </p>
            </section>

            {/* Itinerary Route Bar */}
            {/* <div className="mt-5 flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3">
              <Route size={16} className="shrink-0 text-red-500" />
              <p className="text-[13px] font-medium text-stone-700">
                <span className="font-bold text-red-500">Itinerary:</span>{" "}
                {packageData.route.join(", ")}
              </p>
            </div> */}

            {/* Quick Info Chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <CarFront size={14} className="text-violet-500" />
                {packageData.pricingBasis}
              </span>

              <span className="flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <Users size={14} className="text-rose-500" />
                Max {packageData.maxGuests} Guests
              </span>

              <span className="flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-700 shadow-sm">
                <Users size={14} className="text-sky-500" />
                Max {packageData.maxGuests} Seats
              </span>
            </div>

            {/* Package Tags */}
            <section className="mt-5 rounded-2xl bg-white p-5 shadow">
              <h2 className="text-xl font-bold text-stone-900">Package Tags</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {packageData.tags.map((tag: any, index: any) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      tagColors[index % tagColors.length]
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Day-wise Itinerary */}
            <section className="mt-6 rounded-2xl bg-white p-5 shadow">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-gold">
                  <Route size={16} />
                </span>
                <h2 className="text-xl font-bold text-stone-900">
                  Day-wise Itinerary
                </h2>
              </div>

              <div className="mt-5 space-y-4">
                {packageData.itinerary.map((day: any, index: any) => (
                  <details
                    key={day.day}
                    open={index === 0}
                    className="group overflow-hidden rounded-xl border border-sky-100 bg-sky-50/60"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 text-base font-bold text-white shadow">
                          {day.day}
                        </span>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-500">
                            Day
                          </p>
                          <h3 className="text-sm font-bold leading-5 text-stone-900">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>
                      </div>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>

                    <div className="border-t border-sky-100 bg-white px-5 py-4">
                      <ul className="space-y-2">
                        {day.activities.map((activity: any) => (
                          <li
                            key={activity}
                            className="flex items-start gap-3 text-[13px] leading-6 text-stone-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                            {activity}
                          </li>
                        ))}
                      </ul>

                      {day.overnight && (
                        <p className="mt-4 text-xs font-bold text-sky-600">
                          Overnight: {day.overnight}
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <section className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/60 p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-stone-900" />
                  <h3 className="text-base font-bold text-stone-900">
                    Inclusions
                  </h3>
                </div>

                <ul className="mt-3">
                  {packageData.inclusions.map((item: any) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-dashed border-emerald-300 py-2.5 text-[13px] font-medium text-stone-700 last:border-0"
                    >
                      <Check size={14} className="shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border-2 border-red-400 bg-red-50/60 p-5">
                <div className="flex items-center gap-2">
                  <XCircle size={18} className="text-stone-900" />
                  <h3 className="text-base font-bold text-stone-900">
                    Exclusions
                  </h3>
                </div>

                <ul className="mt-3">
                  {packageData.exclusions.map((item: any) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-dashed border-red-300 py-2.5 text-[13px] font-medium text-stone-700 last:border-0"
                    >
                      <X size={14} className="shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Highlights */}
            <section className="mt-6 rounded-2xl bg-white p-5 shadow">
              <h2 className="text-xl font-bold text-stone-900">Highlights</h2>

              <div className="mt-4 space-y-3">
                {packageData.highlights.map((item: any) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-stone-700"
                  >
                    <CheckCircle2 className="text-green-600" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-5 rounded-2xl bg-white p-5 shadow">
              <h3 className="text-lg font-bold">Package Summary</h3>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  {packageData.days} days
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} />
                  {/* {packageData.groupSize} */}
                  2-8 people
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {packageData.slug}
                </div>
              </div>

              <div className="mt-6 border-t pt-5">
                <p className="text-xs text-stone-500">Starting From</p>

                <div className="flex items-center gap-1">
                  <IndianRupee size={18} className="text-gold" />

                  <p className="text-3xl font-bold text-gold">
                    {Number(packageData.startingPrice).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-gold py-3 text-sm font-bold text-white transition hover:opacity-90">
                Book Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
