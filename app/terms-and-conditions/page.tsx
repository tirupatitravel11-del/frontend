'use client'
import {
  FileText,
  ShieldCheck,
  Car,
  CreditCard,
  Clock3,
  Ban,
  Luggage,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const TERMS_SECTIONS = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <>
        <p>
          Welcome to Tirupati Travels. These Terms & Conditions govern your
          use of our website and the taxi, cab, Tempo Traveller and other
          travel-related services provided by us.
        </p>

        <p>
          By accessing our website, submitting a booking enquiry, contacting
          us for a travel service or making a booking, you acknowledge that
          you have read, understood and agreed to these Terms & Conditions.
        </p>

        <p>
          If you do not agree with any part of these terms, please do not use
          our website or services.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Definitions",
    content: (
      <>
        <p>
          For the purpose of these Terms & Conditions:
        </p>

        <ul>
          <li>
            <strong>"Company", "we", "us" or "our"</strong> refers to Tirupati
            Travels.
          </li>

          <li>
            <strong>"Customer", "you" or "your"</strong> refers to the person
            making an enquiry or booking.
          </li>

          <li>
            <strong>"Vehicle"</strong> means the taxi, cab, SUV, Sedan,
            Innova, Innova Crysta, Tempo Traveller or other vehicle provided
            for the journey.
          </li>

          <li>
            <strong>"Trip"</strong> means the journey requested by the
            customer.
          </li>

          <li>
            <strong>"Driver"</strong> means the driver assigned to operate the
            vehicle for the journey.
          </li>
        </ul>
      </>
    ),
  },

  {
    number: "03",
    title: "Booking & Confirmation",
    content: (
      <>
        <p>
          A booking enquiry submitted through the website, phone or WhatsApp
          does not automatically guarantee a confirmed booking.
        </p>

        <p>
          A booking becomes confirmed only after our team communicates the
          confirmation to the customer through an available communication
          channel.
        </p>

        <p>
          Customers are responsible for providing accurate information,
          including:
        </p>

        <ul>
          <li>Passenger name</li>
          <li>Mobile number</li>
          <li>Pickup location</li>
          <li>Drop location</li>
          <li>Travel date</li>
          <li>Pickup time</li>
          <li>Number of passengers</li>
          <li>Luggage requirements</li>
          <li>Preferred vehicle type</li>
        </ul>

        <p>
          Incorrect or incomplete information may result in delays, additional
          charges or inability to provide the requested service.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Vehicle Allocation",
    content: (
      <>
        <p>
          We make reasonable efforts to provide the vehicle category selected
          by the customer.
        </p>

        <p>
          However, the exact vehicle model may be subject to availability.
          Where necessary, we may provide another vehicle of the same or
          similar category.
        </p>

        <p>
          Vehicle images displayed on the website are for general
          representation only. The actual vehicle may differ in colour,
          registration number, model year or minor specifications.
        </p>

        <p>
          For specific vehicle requests such as Swift Dzire, Honda Amaze,
          Ertiga, Innova or Innova Crysta, customers should confirm
          availability with our team before booking.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Passenger Capacity",
    content: (
      <>
        <p>
          Customers must not exceed the legally permitted passenger capacity
          of the vehicle.
        </p>

        <p>
          The number of passengers should match the selected vehicle category.
          For example, a Sedan is generally suitable for a small group, while
          SUVs and Tempo Travellers are more appropriate for larger groups.
        </p>

        <p>
          If the number of passengers exceeds the vehicle capacity, we may
          require the customer to upgrade to a larger vehicle or arrange an
          additional vehicle.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Fare & Pricing",
    content: (
      <>
        <p>
          Fares displayed on our website are indicative or starting fares
          unless specifically stated otherwise.
        </p>

        <p>
          The final fare may depend on several factors, including:
        </p>

        <ul>
          <li>Pickup and drop locations</li>
          <li>Travel date and time</li>
          <li>Vehicle category</li>
          <li>One-way or round-trip journey</li>
          <li>Trip duration</li>
          <li>Additional kilometres</li>
          <li>Waiting time</li>
          <li>Toll charges</li>
          <li>Parking charges</li>
          <li>State taxes or applicable government charges</li>
          <li>Airport entry or parking charges</li>
          <li>Additional stops or route changes</li>
        </ul>

        <p>
          The applicable fare communicated at the time of booking confirmation
          will be considered the applicable booking fare, subject to the
          conditions communicated to the customer.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Tolls, Parking & Government Charges",
    content: (
      <>
        <p>
          Unless explicitly included in the quoted fare, tolls, parking
          charges, airport entry fees, state taxes and other government or
          location-specific charges may be payable separately.
        </p>

        <p>
          Such charges may be collected at actual cost and may vary depending
          on the route, destination and applicable authority charges.
        </p>

        <p>
          Customers should confirm inclusions and exclusions with our booking
          team before starting the journey if they require a detailed fare
          breakdown.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "One-Way Trips",
    content: (
      <>
        <p>
          One-way fares apply only to the journey specified at the time of
          booking.
        </p>

        <p>
          If the customer requests additional stops, route changes, extended
          waiting or return travel, additional charges may apply.
        </p>

        <p>
          A one-way booking does not automatically include a return journey.
          Return travel must be separately confirmed.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Round Trips",
    content: (
      <>
        <p>
          Round-trip pricing is based on the route, duration, distance and
          conditions communicated at the time of booking.
        </p>

        <p>
          If the customer extends the trip beyond the agreed duration or
          distance, additional charges may apply.
        </p>

        <p>
          Customers should communicate any expected changes in itinerary
          before the trip whenever possible.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Pickup & Waiting Time",
    content: (
      <>
        <p>
          Customers should be ready at the agreed pickup location at the
          confirmed pickup time.
        </p>

        <p>
          Waiting time may be chargeable if the customer is unavailable after
          the agreed waiting period.
        </p>

        <p>
          Airport pickups may require additional waiting due to flight
          delays, baggage collection, terminal procedures or traffic
          conditions.
        </p>

        <p>
          Customers are encouraged to provide accurate flight details when
          booking an airport transfer.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "Airport Transfers",
    content: (
      <>
        <p>
          Airport pickup and drop services are subject to airport rules,
          traffic restrictions, entry regulations and designated pickup
          locations.
        </p>

        <p>
          Drivers may not always be permitted to wait directly outside a
          terminal due to airport restrictions.
        </p>

        <p>
          Customers may be required to proceed to a designated pickup point
          communicated by the driver or booking team.
        </p>

        <p>
          Airport parking, entry and waiting charges may apply separately
          where applicable.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Travel Time & Traffic",
    content: (
      <>
        <p>
          Estimated travel times displayed on the website are approximate.
          Actual journey time may vary due to:
        </p>

        <ul>
          <li>Traffic congestion</li>
          <li>Weather conditions</li>
          <li>Road construction</li>
          <li>Accidents</li>
          <li>Traffic diversions</li>
          <li>Road closures</li>
          <li>Government restrictions</li>
          <li>Unexpected circumstances</li>
        </ul>

        <p>
          We cannot guarantee a specific arrival time where delays are caused
          by circumstances beyond our reasonable control.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "Driver & Vehicle Safety",
    content: (
      <>
        <p>
          Customers are required to follow reasonable safety instructions
          provided by the driver during the journey.
        </p>

        <p>
          Seat belts should be worn whenever available and required by
          applicable law.
        </p>

        <p>
          Customers must not request or pressure the driver to drive
          dangerously, exceed legal speed limits or violate traffic rules.
        </p>

        <p>
          Our drivers may refuse requests that would compromise passenger
          safety or violate applicable laws.
        </p>
      </>
    ),
  },

  {
    number: "14",
    title: "Customer Conduct",
    content: (
      <>
        <p>
          Customers are expected to behave respectfully toward drivers and
          other passengers.
        </p>

        <p>The following activities are not permitted inside vehicles:</p>

        <ul>
          <li>Illegal activities</li>
          <li>Carrying prohibited items</li>
          <li>Damaging vehicle property</li>
          <li>Threatening or abusive behaviour</li>
          <li>Intentionally creating unsafe conditions</li>
          <li>Smoking where prohibited</li>
          <li>Carrying dangerous or hazardous materials</li>
        </ul>

        <p>
          We reserve the right to discontinue a journey where customer
          behaviour creates a serious safety risk.
        </p>
      </>
    ),
  },

  {
    number: "15",
    title: "Luggage",
    content: (
      <>
        <p>
          Customers should inform us about their luggage requirements before
          booking, particularly when travelling with a large group.
        </p>

        <p>
          Luggage capacity depends on the vehicle type, number of passengers
          and size of bags.
        </p>

        <p>
          We cannot guarantee that all luggage will fit if the customer brings
          luggage beyond the reasonable capacity of the selected vehicle.
        </p>

        <p>
          Customers are responsible for valuable personal belongings carried
          inside the vehicle.
        </p>
      </>
    ),
  },

  {
    number: "16",
    title: "Cancellation & Rescheduling",
    content: (
      <>
        <p>
          Cancellation and rescheduling conditions may vary depending on the
          type of booking, vehicle category and time remaining before pickup.
        </p>

        <p>
          Customers should contact our booking team as early as possible if
          they need to cancel or reschedule a journey.
        </p>

        <p>
          Any applicable cancellation charges will be communicated according
          to the booking conditions applicable to the specific reservation.
        </p>

        <p>
          Special or advance bookings may have different cancellation
          conditions.
        </p>
      </>
    ),
  },

  {
    number: "17",
    title: "Payment",
    content: (
      <>
        <p>
          Payment terms may vary depending on the service and booking.
        </p>

        <p>
          Customers may be required to pay an advance amount for certain
          bookings, particularly advance, long-distance, premium vehicle or
          large group bookings.
        </p>

        <p>
          Any outstanding amount must be paid according to the payment
          arrangement communicated during booking.
        </p>

        <p>
          Customers should retain payment receipts or transaction references
          where applicable.
        </p>
      </>
    ),
  },

  {
    number: "18",
    title: "Online Payments",
    content: (
      <>
        <p>
          If online payment facilities are provided through a third-party
          payment gateway, payment processing may be subject to that
          provider&apos;s terms and policies.
        </p>

        <p>
          We do not store complete card, banking or other sensitive payment
          credentials unless explicitly required and lawfully permitted for
          the service.
        </p>

        <p>
          Customers should never share OTPs, PINs, passwords or confidential
          banking information with anyone claiming to represent our company.
        </p>
      </>
    ),
  },

  {
    number: "19",
    title: "Vehicle Breakdown or Replacement",
    content: (
      <>
        <p>
          Although we make reasonable efforts to provide reliable vehicles,
          unexpected mechanical or technical issues may occasionally occur.
        </p>

        <p>
          In the event of a vehicle breakdown or other operational issue, we
          will make reasonable efforts to arrange a replacement vehicle or
          alternative solution, subject to availability.
        </p>

        <p>
          Replacement vehicles may be of the same or similar category.
        </p>
      </>
    ),
  },

  {
    number: "20",
    title: "Force Majeure",
    content: (
      <>
        <p>
          We will not be responsible for delays, cancellations or inability
          to provide services caused by circumstances beyond our reasonable
          control.
        </p>

        <p>
          Such circumstances may include natural disasters, severe weather,
          floods, earthquakes, strikes, riots, road closures, government
          restrictions, accidents, vehicle failures, public emergencies or
          other unforeseen events.
        </p>
      </>
    ),
  },

  {
    number: "21",
    title: "Personal Belongings",
    content: (
      <>
        <p>
          Customers are responsible for their personal belongings during the
          journey.
        </p>

        <p>
          We recommend checking the vehicle carefully before leaving it at the
          destination.
        </p>

        <p>
          If you leave an item inside the vehicle, contact our team as soon as
          possible with the booking and item details so that we can attempt to
          assist you.
        </p>
      </>
    ),
  },

  {
    number: "22",
    title: "Website Information",
    content: (
      <>
        <p>
          We make reasonable efforts to keep the information on our website
          accurate and updated.
        </p>

        <p>
          However, vehicle availability, fares, route distances, estimated
          travel times and other information may change without prior notice.
        </p>

        <p>
          Website images, illustrations and vehicle photographs are intended
          for general information and may not always represent the exact
          vehicle assigned for a booking.
        </p>
      </>
    ),
  },

  {
    number: "23",
    title: "Website Use",
    content: (
      <>
        <p>
          You agree to use this website only for lawful purposes.
        </p>

        <p>You must not:</p>

        <ul>
          <li>Use the website for fraudulent activities</li>
          <li>Submit false booking information</li>
          <li>Attempt to gain unauthorized access to the website</li>
          <li>Interfere with website security or functionality</li>
          <li>Copy or misuse website content without permission</li>
          <li>Use automated systems to abuse or overload the website</li>
        </ul>
      </>
    ),
  },

  {
    number: "24",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, website content including text, graphics,
          logos, photographs, design elements and other materials may belong
          to Tirupati Travels or its respective content providers.
        </p>

        <p>
          You may not reproduce, modify, distribute or commercially exploit
          website content without prior written permission.
        </p>
      </>
    ),
  },

  {
    number: "25",
    title: "Third-Party Links & Services",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites or services.
        </p>

        <p>
          We are not responsible for the content, availability, privacy
          practices or terms of third-party websites.
        </p>

        <p>
          Customers should review the terms and policies of third-party
          services before using them.
        </p>
      </>
    ),
  },

  {
    number: "26",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          We make reasonable efforts to provide the services described on our
          website. However, to the extent permitted by applicable law, we
          shall not be responsible for losses caused by circumstances beyond
          our reasonable control.
        </p>

        <p>
          This may include delays caused by traffic, weather, road conditions,
          government restrictions, accidents or other unforeseen events.
        </p>

        <p>
          Nothing in these Terms & Conditions is intended to exclude or limit
          any liability that cannot legally be excluded or limited under
          applicable law.
        </p>
      </>
    ),
  },

  {
    number: "27",
    title: "Complaints & Customer Support",
    content: (
      <>
        <p>
          We value customer feedback and encourage customers to contact us if
          they experience any issue with our service.
        </p>

        <p>
          When submitting a complaint, please provide your booking details,
          travel date, vehicle information and a clear description of the
          issue so that our team can investigate it effectively.
        </p>

        <p>
          We will make reasonable efforts to review and respond to genuine
          customer concerns.
        </p>
      </>
    ),
  },

  {
    number: "28",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms & Conditions from time to time to reflect
          changes in our services, business practices, technology or applicable
          legal requirements.
        </p>

        <p>
          Updated terms will be published on this page. Your continued use of
          our website or services after an update may constitute acceptance of
          the revised terms, to the extent permitted by applicable law.
        </p>
      </>
    ),
  },

  {
    number: "29",
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms & Conditions shall be interpreted in accordance with
          applicable laws of India.
        </p>

        <p>
          Any disputes relating to our services shall be addressed in
          accordance with applicable law and the jurisdiction applicable to
          the company and the relevant transaction.
        </p>
      </>
    ),
  },

  {
    number: "30",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have questions regarding these Terms & Conditions, booking
          conditions or our travel services, please contact us.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="font-bold text-slate-900">
            Tirupati Travels
          </p>

          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>
              Phone: +91 63900 08503
            </p>

            <p>
              Email: support@yourdomain.com
            </p>
          </div>
        </div>
      </>
    ),
  },
];

// export const metadata = {
//   title: "Terms & Conditions | Tirupati Travels",
//   description:
//     "Read the Terms & Conditions for using Tirupati Travels taxi, cab and Tempo Traveller services.",
// };

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <FileText size={28} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Terms & Conditions
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Please read these terms carefully before using our website or
              booking any taxi, cab or Tempo Traveller service with Tirupati
              Travels.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Last Updated: August 20, 2026
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}
      <section className="border-b border-slate-100 bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ShieldCheck className="text-gold" size={24} />

            <h2 className="mt-3 text-base font-bold text-slate-900">
              Safe Travel
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Passenger safety and responsible driving are important parts of
              our service.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <CreditCard className="text-gold" size={24} />

            <h2 className="mt-3 text-base font-bold text-slate-900">
              Clear Booking Terms
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fare, vehicle and trip conditions should be confirmed before
              starting your journey.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Clock3 className="text-gold" size={24} />

            <h2 className="mt-3 text-base font-bold text-slate-900">
              Travel Information
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Pickup times and journey durations are subject to traffic and
              other road conditions.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPORTANT NOTICE
      ===================================================== */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-5 sm:p-6">
            <AlertCircle
              size={22}
              className="mt-0.5 shrink-0 text-gold"
            />

            <div>
              <h2 className="font-bold text-slate-900">
                Important
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-600">
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
      <section className="bg-white pb-14 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            {TERMS_SECTIONS.map((section) => (
              <article
                key={section.number}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-xs font-bold text-gold">
                    {section.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {section.title}
                    </h2>

                    <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {section.content}
                    </div>

                    <style jsx>{`
                      article ul {
                        margin-top: 12px;
                        padding-left: 22px;
                        list-style-type: disc;
                      }

                      article li {
                        margin-bottom: 8px;
                        padding-left: 3px;
                      }
                    `}</style>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="border-t border-slate-100 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Car size={26} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Ready to Plan Your Journey?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Contact our team for vehicle availability, fare details and
            booking assistance.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90"
            >
              <Phone size={17} />
              Call Us
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-slate-700 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
            >
              <CheckCircle2 size={17} />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}