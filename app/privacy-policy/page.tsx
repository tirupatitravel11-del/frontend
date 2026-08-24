"use client";

import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Mail,
  Phone,
} from "lucide-react";

const PHONE_NUMBER = "+916390008503";

const SECTIONS = [
  {
    id: "information",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="leading-7">
          When you use the Tirupati Travels website or contact us for our 
          travel-related services, we may collect information that you 
          voluntarily provide to us.
        </p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">Name</li>
          <li className="leading-7">Mobile number</li>
          <li className="leading-7">Email address</li>
          <li className="leading-7">Travel destination and journey details</li>
          <li className="leading-7">Travel dates and number of travelers</li>
          <li className="leading-7">Cab or transportation preferences</li>
          <li className="leading-7">Hotel or accommodation preferences</li>
          <li className="leading-7">Travel package or sightseeing requirements</li>
          <li className="leading-7">Boat service or activity preferences, where applicable</li>
          <li className="leading-7">Any other information you provide while contacting us</li>
        </ul>
        <p className="mt-4 leading-7">
          We only collect information that is reasonably necessary to respond 
          to your enquiry, process your booking request, or provide the travel 
          services you have requested.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="leading-7">
          The information collected through our website may be used for the 
          following purposes:
        </p>
        <ul className="mt-4 space-y-2 pl-5 list-disc text-slate-600">
          <li className="leading-7">To respond to your booking and travel enquiries</li>
          <li className="leading-7">To confirm and manage your travel requests</li>
          <li className="leading-7">To contact you regarding your booking or enquiry</li>
          <li className="leading-7">To provide cab and transportation information</li>
          <li className="leading-7">To assist with hotel and accommodation bookings</li>
          <li className="leading-7">To provide travel package and sightseeing information</li>
          <li className="leading-7">To arrange requested boat or travel experiences where applicable</li>
          <li className="leading-7">To provide customer support</li>
          <li className="leading-7">To improve our website and travel services</li>
          <li className="leading-7">To prevent fraudulent or unauthorized activity</li>
        </ul>
      </>
    ),
  },
  {
    id: "booking",
    title: "3. Booking & Contact Information",
    content: (
      <>
        <p className="leading-7">
          When you submit a booking enquiry or contact us through our website, 
          your information may be used by our team to communicate with you 
          regarding the travel services you have requested.
        </p>
        <p className="mt-4 leading-7">
          This may include cab bookings, hotel reservations, travel packages, 
          sightseeing arrangements, boat services or other travel-related 
          requirements.
        </p>
        <p className="mt-4 leading-7">
          If you choose to contact us through WhatsApp, phone, or other 
          communication platforms, the information shared through those 
          services may also be processed according to the respective service 
          provider&apos;s privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. Sharing of Information",
    content: (
      <>
        <p className="leading-7 font-medium text-slate-700">
          We do not sell or rent your personal information to third parties.
        </p>
        <p className="mt-4 leading-7">
          We may share relevant information with trusted service providers, 
          transportation partners, hotels, or other travel partners when it is 
          necessary to fulfil your booking or provide the service you have 
          requested.
        </p>
        <p className="mt-4 leading-7">
          We may also disclose information when required by applicable law, 
          legal proceedings, or a lawful government request.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies & Website Usage",
    content: (
      <>
        <p className="leading-7">
          Our website may use cookies or similar technologies to improve 
          website functionality, understand how visitors use the website, and 
          provide a better browsing experience.
        </p>
        <p className="mt-4 leading-7">
          Cookies may help us understand which pages and services are useful 
          to visitors and help us identify technical issues with the website.
        </p>
        <p className="mt-4 leading-7">
          You can manage or disable cookies through your browser settings. 
          However, disabling certain cookies may affect some website 
          functionality.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "6. Third-Party Services",
    content: (
      <>
        <p className="leading-7">
          Our website may use third-party services such as analytics, 
          communication platforms, maps, payment providers, hotels, travel 
          partners, hosting services, or other technology providers.
        </p>
        <p className="mt-4 leading-7">
          These third-party services may process certain information according 
          to their own privacy policies and terms.
        </p>
        <p className="mt-4 leading-7">
          We recommend reviewing the privacy policies of any third-party 
          service you choose to use through our website or services.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Data Security",
    content: (
      <>
        <p className="leading-7">
          We take reasonable measures to protect the personal information 
          provided through our website from unauthorized access, misuse, 
          alteration, or disclosure.
        </p>
        <p className="mt-4 leading-7">
          However, no method of transmitting or storing information online can 
          be guaranteed to be completely secure. Therefore, while we work to 
          protect your information, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "8. Data Retention",
    content: (
      <p className="leading-7">
        We may retain your information for as long as reasonably necessary 
        to fulfil the purpose for which it was collected, manage your travel 
        or booking requests, provide customer support, maintain business 
        records, or comply with applicable legal requirements.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "9. Your Rights",
    content: (
      <>
        <p className="leading-7">
          Depending on applicable law, you may have the right to request 
          access to, correction of, or deletion of certain personal information 
          that we hold about you.
        </p>
        <p className="mt-4 leading-7">
          If you have questions about your information or would like to request 
          a correction or update, you can contact us using the details provided 
          below.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "10. Children&apos;s Privacy",
    content: (
      <>
        <p className="leading-7">
          Our website and travel services are intended for general audiences 
          and are not specifically directed toward children.
        </p>
        <p className="mt-4 leading-7">
          We do not knowingly collect personal information from children 
          without appropriate consent where such consent is required by law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    content: (
      <>
        <p className="leading-7">
          We may update this Privacy Policy from time to time to reflect 
          changes in our travel services, website functionality, technology, or 
          legal requirements.
        </p>
        <p className="mt-4 leading-7">
          Any updated version of this Privacy Policy will be published on this 
          page with the revised effective date.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: (
      <>
        <p className="leading-7">
          If you have any questions about this Privacy Policy or how 
          Tirupati Travels handles your information, please contact us.
        </p>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-lg font-bold text-slate-900">
            Tirupati Travels
          </p>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />
              <span className="font-medium text-slate-900">+91 63900 08503</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <span>support@yourdomain.com</span>
            </p>
          </div>
        </div>
      </>
    ),
  },
];

const HIGHLIGHTS = [
  {
    icon: Lock,
    title: "Your Information",
    description: "We use your information mainly to respond to your enquiries and provide reliable travel-related services.",
  },
  {
    icon: Database,
    title: "Responsible Use",
    description: "We strictly do not sell or rent your personal information to any third parties for marketing purposes.",
  },
  {
    icon: Cookie,
    title: "Website Cookies",
    description: "Cookies may be used to improve website functionality and provide a smoother, better browsing experience.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <ShieldCheck size={28} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Privacy Policy
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Privacy Matters to Us
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              This Privacy Policy explains how Tirupati Travels collects, uses, 
              and protects information when you use our website or contact us 
              for cab bookings, hotel reservations, travel packages, boat 
              services, and other travel-related services.
            </p>

            <p className="mt-6 text-xs font-medium text-slate-500">
              Last Updated: August 24, 2026
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK HIGHLIGHTS
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
          POLICY CONTENT
      ===================================================== */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
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
          CONTACT CTA (UNCOMMENTED & RESTORED)
      ===================================================== */}
      {/* <section className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Mail size={26} />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Have a Question About Your Privacy?
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            If you have any questions about how Tirupati Travels collects, 
            uses, or protects your information, please contact our dedicated 
            support team.
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
              <Mail size={17} />
              Email Support
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}