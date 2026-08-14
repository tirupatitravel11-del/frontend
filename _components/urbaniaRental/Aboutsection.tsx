"use client";

/* ====== Assets: place your images in /public/images/urbania/ ====== */
const MAIN_IMAGE = "/urbania/urbania.png";
const INTERIOR_IMAGE_1 = "/images/urbania/interior-1.png";
const INTERIOR_IMAGE_2 = "/images/urbania/interior-2.png";

const WEBSITE = "www.urbaniarent.com";
const EMAIL = "info@urbaniarent.com";
const CITY = "Lucknow";

export default function UrbaniaCitySection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== Heading ===== */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <span className="text-gold">Urbania Van</span> on Rent
        </h2>

        <div className="mt-10 grid items-stretch gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* ===== Left: Visual Card ===== */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={MAIN_IMAGE}
              alt={`Urbania Van on Rent in ${CITY}`}
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />

            {/* Readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Contact Bar */}
            {/* <div className="absolute bottom-5 left-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] font-medium text-white sm:text-xs">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                {WEBSITE}
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                {EMAIL}
              </span>
            </div> */}

            {/* Book Now */}
            {/* <a
              href="#book"
              className="absolute bottom-5 right-5 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition-colors duration-300 hover:bg-blue-700 hover:text-white"
            >
              Book Now
            </a> */}
          </div>

          {/* ===== Right: City Story ===== */}
          <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Planning travel for a large group often means compromising. You
            either squeeze into multiple cramped cabs, lose track of each other
            on the highway, or deal with the frustrating logistics of
            coordinating different vehicles. Whether you are organizing a
            destination wedding, a corporate offsite, a family pilgrimage, or a
            long-distance road trip, keeping everyone together and comfortable
            is a challenge. Booking a Force Urbania through our rental service
            changes the entire dynamic. Instead of a convoy of separate cars,
            your entire group travels in one spacious, air-conditioned luxury
            van. With high-back pushback seats, individual AC vents, and ample
            luggage space, every passenger gets a first-class experience. It’s
            not just about moving from point A to point B; it’s about starting
            the journey together, sharing the excitement, and arriving relaxed
            and ready.
          </p>
        </div>

        {/* ===== Bottom Full-Width Paragraph ===== */}
        <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Choosing our Urbania Rental service means you get more than just a
          premium vehicle. You get a dedicated, professional chauffeur who
          handles the navigation, the tolls, and the parking, allowing your
          group to fully unwind. We pride ourselves on transparent pricing with
          no hidden surge fees, meticulously sanitized interiors before every
          single trip, and punctual pickups that respect your schedule. One
          luxury van. One experienced driver. Everyone is together. Experience
          the ultimate standard in group travel.
        </p>
      </div>
    </section>
  );
}
