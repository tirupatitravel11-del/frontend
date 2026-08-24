"use client";

import {
  FileText,
  ShieldCheck,
  Car,
  CreditCard,
  Clock3,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Safe Travel",
    description:
      "Passenger safety and responsible driving are important parts of our service.",
  },
  {
    icon: CreditCard,
    title: "Clear Booking Terms",
    description:
      "Fare, vehicle and trip conditions should be confirmed before starting your journey.",
  },
  {
    icon: Clock3,
    title: "Travel Information",
    description:
      "Pickup times and journey durations are subject to traffic and other road conditions.",
  },
];

const TERMS_SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p className="leading-7">
          Welcome to Tirupati Travels. These Terms & Conditions govern your use
          of our website and the taxi, cab, Tempo Traveller and other
          travel-related services provided by us.
        </p>
        <p className="mt-4 leading-7">
          By accessing our website, submitting a booking enquiry, contacting us
          for a travel service or making a booking, you acknowledge that you
          have read, understood and agreed to these Terms & Conditions.
        </p>
        <p className="mt-4 leading-7">
          If you do not agree with any part of these terms, please do not use
          our website or services.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "2. Definitions",
    content: (
      <>
        <p className="leading-7">
          For the purpose of these Terms & Conditions:
        </p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">
            <strong>
              &quot;Company&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot;
            </strong>{" "}
            refers to Tirupati Travels.
          </li>
          <li className="leading-7">
            <strong>
              &quot;Customer&quot;, &quot;you&quot; or &quot;your&quot;
            </strong>{" "}
            refers to the person making an enquiry or booking.
          </li>
          <li className="leading-7">
            <strong>&quot;Vehicle&quot;</strong> means the taxi, cab, SUV,
            Sedan, Innova, Innova Crysta, Tempo Traveller or other vehicle
            provided for the journey.
          </li>
          <li className="leading-7">
            <strong>&quot;Trip&quot;</strong> means the journey requested by the
            customer.
          </li>
          <li className="leading-7">
            <strong>&quot;Driver&quot;</strong> means the driver assigned to
            operate the vehicle for the journey.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "booking-confirmation",
    title: "3. Booking & Confirmation",
    content: (
      <>
        <p className="leading-7">
          A booking enquiry submitted through the website, phone or WhatsApp
          does not automatically guarantee a confirmed booking.
        </p>
        <p className="mt-4 leading-7">
          A booking becomes confirmed only after our team communicates the
          confirmation to the customer through an available communication
          channel.
        </p>
        <p className="mt-4 leading-7">
          Customers are responsible for providing accurate information,
          including:
        </p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">Passenger name</li>
          <li className="leading-7">Mobile number</li>
          <li className="leading-7">Pickup location</li>
          <li className="leading-7">Drop location</li>
          <li className="leading-7">Travel date</li>
          <li className="leading-7">Pickup time</li>
          <li className="leading-7">Number of passengers</li>
          <li className="leading-7">Luggage requirements</li>
          <li className="leading-7">Preferred vehicle type</li>
        </ul>
        <p className="mt-4 leading-7">
          Incorrect or incomplete information may result in delays, additional
          charges or inability to provide the requested service.
        </p>
      </>
    ),
  },
  {
    id: "vehicle-allocation",
    title: "4. Vehicle Allocation",
    content: (
      <>
        <p className="leading-7">
          We make reasonable efforts to provide the vehicle category selected by
          the customer.
        </p>
        <p className="mt-4 leading-7">
          However, the exact vehicle model may be subject to availability. Where
          necessary, we may provide another vehicle of the same or similar
          category.
        </p>
        <p className="mt-4 leading-7">
          Vehicle images displayed on the website are for general representation
          only. The actual vehicle may differ in colour, registration number,
          model year or minor specifications.
        </p>
        <p className="mt-4 leading-7">
          For specific vehicle requests such as Swift Dzire, Honda Amaze,
          Ertiga, Innova or Innova Crysta, customers should confirm availability
          with our team before booking.
        </p>
      </>
    ),
  },
  {
    id: "passenger-capacity",
    title: "5. Passenger Capacity",
    content: (
      <>
        <p className="leading-7">
          Customers must not exceed the legally permitted passenger capacity of
          the vehicle.
        </p>
        <p className="mt-4 leading-7">
          The number of passengers should match the selected vehicle category.
          For example, a Sedan is generally suitable for a small group, while
          SUVs and Tempo Travellers are more appropriate for larger groups.
        </p>
        <p className="mt-4 leading-7">
          If the number of passengers exceeds the vehicle capacity, we may
          require the customer to upgrade to a larger vehicle or arrange an
          additional vehicle.
        </p>
      </>
    ),
  },
  {
    id: "fare-pricing",
    title: "6. Fare & Pricing",
    content: (
      <>
        <p className="leading-7">
          Fares displayed on our website are indicative or starting fares unless
          specifically stated otherwise.
        </p>
        <p className="mt-4 leading-7">
          The final fare may depend on several factors, including:
        </p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">Pickup and drop locations</li>
          <li className="leading-7">Travel date and time</li>
          <li className="leading-7">Vehicle category</li>
          <li className="leading-7">One-way or round-trip journey</li>
          <li className="leading-7">Trip duration</li>
          <li className="leading-7">Additional kilometres</li>
          <li className="leading-7">Waiting time</li>
          <li className="leading-7">Toll charges</li>
          <li className="leading-7">Parking charges</li>
          <li className="leading-7">
            State taxes or applicable government charges
          </li>
          <li className="leading-7">Airport entry or parking charges</li>
          <li className="leading-7">Additional stops or route changes</li>
        </ul>
        <p className="mt-4 leading-7">
          The applicable fare communicated at the time of booking confirmation
          will be considered the applicable booking fare, subject to the
          conditions communicated to the customer.
        </p>
      </>
    ),
  },
  {
    id: "tolls-parking",
    title: "7. Tolls, Parking & Government Charges",
    content: (
      <>
        <p className="leading-7">
          Unless explicitly included in the quoted fare, tolls, parking charges,
          airport entry fees, state taxes and other government or
          location-specific charges may be payable separately.
        </p>
        <p className="mt-4 leading-7">
          Such charges may be collected at actual cost and may vary depending on
          the route, destination and applicable authority charges.
        </p>
        <p className="mt-4 leading-7">
          Customers should confirm inclusions and exclusions with our booking
          team before starting the journey if they require a detailed fare
          breakdown.
        </p>
      </>
    ),
  },
  {
    id: "one-way-trips",
    title: "8. One-Way Trips",
    content: (
      <>
        <p className="leading-7">
          One-way fares apply only to the journey specified at the time of
          booking.
        </p>
        <p className="mt-4 leading-7">
          If the customer requests additional stops, route changes, extended
          waiting or return travel, additional charges may apply.
        </p>
        <p className="mt-4 leading-7">
          A one-way booking does not automatically include a return journey.
          Return travel must be separately confirmed.
        </p>
      </>
    ),
  },
  {
    id: "round-trips",
    title: "9. Round Trips",
    content: (
      <>
        <p className="leading-7">
          Round-trip pricing is based on the route, duration, distance and
          conditions communicated at the time of booking.
        </p>
        <p className="mt-4 leading-7">
          If the customer extends the trip beyond the agreed duration or
          distance, additional charges may apply.
        </p>
        <p className="mt-4 leading-7">
          Customers should communicate any expected changes in itinerary before
          the trip whenever possible.
        </p>
      </>
    ),
  },
  {
    id: "pickup-waiting",
    title: "10. Pickup & Waiting Time",
    content: (
      <>
        <p className="leading-7">
          Customers should be ready at the agreed pickup location at the
          confirmed pickup time.
        </p>
        <p className="mt-4 leading-7">
          Waiting time may be chargeable if the customer is unavailable after
          the agreed waiting period.
        </p>
        <p className="mt-4 leading-7">
          Airport pickups may require additional waiting due to flight delays,
          baggage collection, terminal procedures or traffic conditions.
        </p>
        <p className="mt-4 leading-7">
          Customers are encouraged to provide accurate flight details when
          booking an airport transfer.
        </p>
      </>
    ),
  },
  {
    id: "airport-transfers",
    title: "11. Airport Transfers",
    content: (
      <>
        <p className="leading-7">
          Airport pickup and drop services are subject to airport rules, traffic
          restrictions, entry regulations and designated pickup locations.
        </p>
        <p className="mt-4 leading-7">
          Drivers may not always be permitted to wait directly outside a
          terminal due to airport restrictions.
        </p>
        <p className="mt-4 leading-7">
          Customers may be required to proceed to a designated pickup point
          communicated by the driver or booking team.
        </p>
        <p className="mt-4 leading-7">
          Airport parking, entry and waiting charges may apply separately where
          applicable.
        </p>
      </>
    ),
  },
  {
    id: "travel-time-traffic",
    title: "12. Travel Time & Traffic",
    content: (
      <>
        <p className="leading-7">
          Estimated travel times displayed on the website are approximate.
          Actual journey time may vary due to:
        </p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">Traffic congestion</li>
          <li className="leading-7">Weather conditions</li>
          <li className="leading-7">Road construction</li>
          <li className="leading-7">Accidents</li>
          <li className="leading-7">Traffic diversions</li>
          <li className="leading-7">Road closures</li>
          <li className="leading-7">Government restrictions</li>
          <li className="leading-7">Unexpected circumstances</li>
        </ul>
        <p className="mt-4 leading-7">
          We cannot guarantee a specific arrival time where delays are caused by
          circumstances beyond our reasonable control.
        </p>
      </>
    ),
  },
  {
    id: "driver-vehicle-safety",
    title: "13. Driver & Vehicle Safety",
    content: (
      <>
        <p className="leading-7">
          Customers are required to follow reasonable safety instructions
          provided by the driver during the journey.
        </p>
        <p className="mt-4 leading-7">
          Seat belts should be worn whenever available and required by
          applicable law.
        </p>
        <p className="mt-4 leading-7">
          Customers must not request or pressure the driver to drive
          dangerously, exceed legal speed limits or violate traffic rules.
        </p>
        <p className="mt-4 leading-7">
          Our drivers may refuse requests that would compromise passenger safety
          or violate applicable laws.
        </p>
      </>
    ),
  },
  {
    id: "customer-conduct",
    title: "14. Customer Conduct",
    content: (
      <>
        <p className="leading-7">
          Customers are expected to behave respectfully toward drivers and other
          passengers.
        </p>
        <p className="mt-4 leading-7">
          The following activities are not permitted inside vehicles:
        </p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">Illegal activities</li>
          <li className="leading-7">Carrying prohibited items</li>
          <li className="leading-7">Damaging vehicle property</li>
          <li className="leading-7">Threatening or abusive behaviour</li>
          <li className="leading-7">
            Intentionally creating unsafe conditions
          </li>
          <li className="leading-7">Smoking where prohibited</li>
          <li className="leading-7">
            Carrying dangerous or hazardous materials
          </li>
        </ul>
        <p className="mt-4 leading-7">
          We reserve the right to discontinue a journey where customer behaviour
          creates a serious safety risk.
        </p>
      </>
    ),
  },
  {
    id: "luggage",
    title: "15. Luggage",
    content: (
      <>
        <p className="leading-7">
          Customers should inform us about their luggage requirements before
          booking, particularly when travelling with a large group.
        </p>
        <p className="mt-4 leading-7">
          Luggage capacity depends on the vehicle type, number of passengers and
          size of bags.
        </p>
        <p className="mt-4 leading-7">
          We cannot guarantee that all luggage will fit if the customer brings
          luggage beyond the reasonable capacity of the selected vehicle.
        </p>
        <p className="mt-4 leading-7">
          Customers are responsible for valuable personal belongings carried
          inside the vehicle.
        </p>
      </>
    ),
  },
  {
    id: "cancellation-rescheduling",
    title: "16. Cancellation & Rescheduling",
    content: (
      <>
        <p className="leading-7">
          Cancellation and rescheduling conditions may vary depending on the
          type of booking, vehicle category and time remaining before pickup.
        </p>
        <p className="mt-4 leading-7">
          Customers should contact our booking team as early as possible if they
          need to cancel or reschedule a journey.
        </p>
        <p className="mt-4 leading-7">
          Any applicable cancellation charges will be communicated according to
          the booking conditions applicable to the specific reservation.
        </p>
        <p className="mt-4 leading-7">
          Special or advance bookings may have different cancellation
          conditions.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    title: "17. Payment",
    content: (
      <>
        <p className="leading-7">
          Payment terms may vary depending on the service and booking.
        </p>
        <p className="mt-4 leading-7">
          Customers may be required to pay an advance amount for certain
          bookings, particularly advance, long-distance, premium vehicle or
          large group bookings.
        </p>
        <p className="mt-4 leading-7">
          Any outstanding amount must be paid according to the payment
          arrangement communicated during booking.
        </p>
        <p className="mt-4 leading-7">
          Customers should retain payment receipts or transaction references
          where applicable.
        </p>
      </>
    ),
  },
  {
    id: "online-payments",
    title: "18. Online Payments",
    content: (
      <>
        <p className="leading-7">
          If online payment facilities are provided through a third-party
          payment gateway, payment processing may be subject to that
          provider&apos;s terms and policies.
        </p>
        <p className="mt-4 leading-7">
          We do not store complete card, banking or other sensitive payment
          credentials unless explicitly required and lawfully permitted for the
          service.
        </p>
        <p className="mt-4 leading-7">
          Customers should never share OTPs, PINs, passwords or confidential
          banking information with anyone claiming to represent our company.
        </p>
      </>
    ),
  },
  {
    id: "vehicle-breakdown",
    title: "19. Vehicle Breakdown or Replacement",
    content: (
      <>
        <p className="leading-7">
          Although we make reasonable efforts to provide reliable vehicles,
          unexpected mechanical or technical issues may occasionally occur.
        </p>
        <p className="mt-4 leading-7">
          In the event of a vehicle breakdown or other operational issue, we
          will make reasonable efforts to arrange a replacement vehicle or
          alternative solution, subject to availability.
        </p>
        <p className="mt-4 leading-7">
          Replacement vehicles may be of the same or similar category.
        </p>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "20. Force Majeure",
    content: (
      <>
        <p className="leading-7">
          We will not be responsible for delays, cancellations or inability to
          provide services caused by circumstances beyond our reasonable
          control.
        </p>
        <p className="mt-4 leading-7">
          Such circumstances may include natural disasters, severe weather,
          floods, earthquakes, strikes, riots, road closures, government
          restrictions, accidents, vehicle failures, public emergencies or other
          unforeseen events.
        </p>
      </>
    ),
  },
  {
    id: "personal-belongings",
    title: "21. Personal Belongings",
    content: (
      <>
        <p className="leading-7">
          Customers are responsible for their personal belongings during the
          journey.
        </p>
        <p className="mt-4 leading-7">
          We recommend checking the vehicle carefully before leaving it at the
          destination.
        </p>
        <p className="mt-4 leading-7">
          If you leave an item inside the vehicle, contact our team as soon as
          possible with the booking and item details so that we can attempt to
          assist you.
        </p>
      </>
    ),
  },
  {
    id: "website-information",
    title: "22. Website Information",
    content: (
      <>
        <p className="leading-7">
          We make reasonable efforts to keep the information on our website
          accurate and updated.
        </p>
        <p className="mt-4 leading-7">
          However, vehicle availability, fares, route distances, estimated
          travel times and other information may change without prior notice.
        </p>
        <p className="mt-4 leading-7">
          Website images, illustrations and vehicle photographs are intended for
          general information and may not always represent the exact vehicle
          assigned for a booking.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "23. Website Use",
    content: (
      <>
        <p className="leading-7">
          You agree to use this website only for lawful purposes.
        </p>
        <p className="mt-4 leading-7">You must not:</p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">
            Use the website for fraudulent activities
          </li>
          <li className="leading-7">Submit false booking information</li>
          <li className="leading-7">
            Attempt to gain unauthorized access to the website
          </li>
          <li className="leading-7">
            Interfere with website security or functionality
          </li>
          <li className="leading-7">
            Copy or misuse website content without permission
          </li>
          <li className="leading-7">
            Use automated systems to abuse or overload the website
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "24. Intellectual Property",
    content: (
      <>
        <p className="leading-7">
          Unless otherwise stated, website content including text, graphics,
          logos, photographs, design elements and other materials may belong to
          Tirupati Travels or its respective content providers.
        </p>
        <p className="mt-4 leading-7">
          You may not reproduce, modify, distribute or commercially exploit
          website content without prior written permission.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "25. Third-Party Links & Services",
    content: (
      <>
        <p className="leading-7">
          Our website may contain links to third-party websites or services.
        </p>
        <p className="mt-4 leading-7">
          We are not responsible for the content, availability, privacy
          practices or terms of third-party websites.
        </p>
        <p className="mt-4 leading-7">
          Customers should review the terms and policies of third-party services
          before using them.
        </p>
      </>
    ),
  },
  {
    id: "limitation-liability",
    title: "26. Limitation of Liability",
    content: (
      <>
        <p className="leading-7">
          We make reasonable efforts to provide the services described on our
          website. However, to the extent permitted by applicable law, we shall
          not be responsible for losses caused by circumstances beyond our
          reasonable control.
        </p>
        <p className="mt-4 leading-7">
          This may include delays caused by traffic, weather, road conditions,
          government restrictions, accidents or other unforeseen events.
        </p>
        <p className="mt-4 leading-7">
          Nothing in these Terms & Conditions is intended to exclude or limit
          any liability that cannot legally be excluded or limited under
          applicable law.
        </p>
      </>
    ),
  },
  {
    id: "complaints-support",
    title: "27. Complaints & Customer Support",
    content: (
      <>
        <p className="leading-7">
          We value customer feedback and encourage customers to contact us if
          they experience any issue with our service.
        </p>
        <p className="mt-4 leading-7">
          When submitting a complaint, please provide your booking details,
          travel date, vehicle information and a clear description of the issue
          so that our team can investigate it effectively.
        </p>
        <p className="mt-4 leading-7">
          We will make reasonable efforts to review and respond to genuine
          customer concerns.
        </p>
      </>
    ),
  },
  {
    id: "changes-terms",
    title: "28. Changes to These Terms",
    content: (
      <>
        <p className="leading-7">
          We may update these Terms & Conditions from time to time to reflect
          changes in our services, business practices, technology or applicable
          legal requirements.
        </p>
        <p className="mt-4 leading-7">
          Updated terms will be published on this page. Your continued use of
          our website or services after an update may constitute acceptance of
          the revised terms, to the extent permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "29. Governing Law",
    content: (
      <>
        <p className="leading-7">
          These Terms & Conditions shall be interpreted in accordance with
          applicable laws of India.
        </p>
        <p className="mt-4 leading-7">
          Any disputes relating to our services shall be addressed in accordance
          with applicable law and the jurisdiction applicable to the company and
          the relevant transaction.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "30. Contact Information",
    content: (
      <>
        <p className="leading-7">
          If you have questions regarding these Terms & Conditions or your
          booking, please contact Tirupati Travels using the contact details provided on
          the website.
        </p>
        
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <FileText size={28} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Terms & Conditions
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Please read these terms carefully before using our website or
              booking any taxi, cab or Tempo Traveller service with Tirupati
              Travels.
            </p>

            <p className="mt-6 text-xs font-medium text-slate-500">
              Last Updated: August 24, 2026
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}
      <section className="border-b border-slate-100 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          IMPORTANT NOTICE
      ===================================================== */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-5 sm:p-6">
            <AlertCircle size={22} className="mt-0.5 shrink-0 text-gold" />
            <div>
              <h2 className="font-bold text-slate-900">Important Notice</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                Website fares, vehicle availability and estimated travel times
                may change. Please confirm the final fare, vehicle category,
                pickup details and applicable additional charges with our team
                before your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS CONTENT
      ===================================================== */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-12">
            {TERMS_SECTIONS.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-b border-slate-100 pb-10 last:border-0 last:pb-0"
              >
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm text-slate-600 sm:text-base">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      {/* <section className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Car size={26} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to Plan Your Journey?
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Contact our team for vehicle availability, fare details and booking
            assistance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90 hover:shadow-lg sm:w-auto"
            >
              <Phone size={17} />
              Call Us Now
            </a>

            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-slate-700 shadow-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white sm:w-auto"
            >
              <CheckCircle2 size={17} />
              Contact Us
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
