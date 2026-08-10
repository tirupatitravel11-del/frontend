export default function BoatRideSection() {
  return (
    <section className="bg-[#f4f6fb] px-5 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ===== Left : Text Content ===== */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            Enjoy a Scenic Boat Ride on the Water
          </h2>

          <p className="mb-5 text-justify text-[16.5px] leading-8 text-gray-700">
            Experience the simple joy of a{" "}
            <strong className="font-bold text-gray-900">
              peaceful boat ride
            </strong>{" "}
            and let the calm water set the pace of your day. Glide gently across
            the surface and enjoy the{" "}
            <strong className="font-bold text-gray-900">
              breathtaking views
            </strong>
            , the fresh breeze, and the soothing sound of the water around you.
            From quiet{" "}
            <strong className="font-bold text-gray-900">sunrise cruises</strong>{" "}
            to golden{" "}
            <strong className="font-bold text-gray-900">sunset rides</strong>,
            every moment on the water offers a perfect blend of relaxation,
            scenery, and adventure. Whether you want to capture beautiful
            photos, spend quality time with loved ones, or simply unwind away
            from the city&apos;s rush, a{" "}
            <strong className="font-bold text-gray-900">boat ride</strong> is an
            unforgettable experience for everyone.
          </p>

          <h3 className="mb-5 text-[17px] font-bold text-gray-900">
            What&apos;s Covered in the Boat Ride:
          </h3>

          <ul className="list-disc space-y-5 pl-6 text-gray-700">
            <li>
              <strong className="font-bold text-gray-900">
                Scenic water views
              </strong>{" "}
              of rivers, lakes &amp; coastlines
            </li>
            <li>
              <strong className="font-bold text-gray-900">
                Comfortable covered seating
              </strong>{" "}
              for a relaxed journey
            </li>
            <li>
              <strong className="font-bold text-gray-900">
                Experienced boatman
              </strong>{" "}
              &amp; life jackets provided on board
            </li>
            <li>
              <strong className="font-bold text-gray-900">
                Sunrise and sunset boat ride
              </strong>{" "}
              options available
            </li>
            <li>
              Ideal for{" "}
              <strong className="font-bold text-gray-900">
                families, couples, and group travelers
              </strong>
            </li>
          </ul>
        </div>

        {/* ===== Right : Image + Call Button ===== */}
        <div>
          {/* Replace src with your own boat image */}
          <img
            src="https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?auto=format&fit=crop&w=900&q=80"
            alt="Boat ride on the water"
            className="h-[300px] w-full rounded-xl object-cover shadow-xl md:h-[420px] lg:h-[560px]"
          />

          <a
            href="tel:+916390008503"
            className="mx-auto mt-7 block max-w-[420px] rounded-md bg-gold px-10 py-4 text-center text-white shadow-lg "
          >
            <span className="flex items-center justify-center gap-2.5 text-xl font-bold md:text-2xl">
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              CALL – 6390008503
            </span>
            <span className="mt-1 block text-sm tracking-wide">
              CALL NOW &amp; BOOK YOUR BOAT RIDE
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
