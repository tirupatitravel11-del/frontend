 'use client'
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  UserCheck,
  Mail,
  Phone,
} from "lucide-react";
const PHONE_NUMBER = "+916390008503";
// export const metadata = {
//   title: "Privacy Policy | Tirupati Travels",
//   description:
//     "Read the Privacy Policy of Tirupati Travels to understand how we collect, use and protect your personal information.",
// };

const SECTIONS = [
  {
    id: "information",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you use our website or contact us for taxi and travel
          services, we may collect information that you voluntarily provide
          to us.
        </p>

        <ul>
          <li>Name</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>Pickup and drop-off locations</li>
          <li>Travel date and trip details</li>
          <li>Vehicle or cab preference</li>
          <li>Any other information you provide while contacting us</li>
        </ul>

        <p>
          We only collect information that is reasonably necessary to respond
          to your enquiry, process your booking request or provide our
          services.
        </p>
      </>
    ),
  },

  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>
          The information collected through our website may be used for the
          following purposes:
        </p>

        <ul>
          <li>To respond to your booking enquiries</li>
          <li>To confirm and manage your travel requests</li>
          <li>To contact you regarding your booking</li>
          <li>To provide fare and vehicle information</li>
          <li>To provide customer support</li>
          <li>To improve our website and services</li>
          <li>To prevent fraudulent or unauthorized activity</li>
        </ul>
      </>
    ),
  },

  {
    id: "booking",
    title: "3. Booking & Contact Information",
    content: (
      <>
        <p>
          When you submit a booking enquiry or contact us through our website,
          your information may be used by our team to communicate with you
          regarding your requested journey.
        </p>

        <p>
          If you choose to contact us through WhatsApp or by phone, the
          information shared through those services may also be processed
          according to the respective service provider&apos;s privacy
          policies.
        </p>
      </>
    ),
  },

  {
    id: "sharing",
    title: "4. Sharing of Information",
    content: (
      <>
        <p>
          We do not sell or rent your personal information to third parties.
        </p>

        <p>
          We may share relevant information with trusted service providers or
          drivers when it is necessary to fulfil your travel request or
          provide the service you have requested.
        </p>

        <p>
          We may also disclose information when required by applicable law,
          legal proceedings or a lawful government request.
        </p>
      </>
    ),
  },

  {
    id: "cookies",
    title: "5. Cookies & Website Usage",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to improve
          website functionality, understand how visitors use the website and
          provide a better browsing experience.
        </p>

        <p>
          Cookies may help us understand which pages are useful to visitors
          and identify technical issues with the website.
        </p>

        <p>
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
        <p>
          Our website may use third-party services such as analytics,
          communication, maps, hosting or other technology providers.
        </p>

        <p>
          These services may process certain information according to their
          own privacy policies and terms. We recommend reviewing the privacy
          policies of any third-party service you choose to use.
        </p>
      </>
    ),
  },

  {
    id: "security",
    title: "7. Data Security",
    content: (
      <>
        <p>
          We take reasonable measures to protect the personal information
          provided through our website from unauthorized access, misuse,
          alteration or disclosure.
        </p>

        <p>
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
      <>
        <p>
          We may retain your information for as long as reasonably necessary
          to fulfil the purpose for which it was collected, provide customer
          support, maintain business records or comply with applicable legal
          requirements.
        </p>
      </>
    ),
  },

  {
    id: "your-rights",
    title: "9. Your Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have the right to request
          access to, correction of or deletion of certain personal
          information that we hold about you.
        </p>

        <p>
          If you have questions about your information or would like to
          request a correction, you can contact us using the details provided
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
        <p>
          Our services are intended for general audiences and are not
          specifically directed toward children.
        </p>

        <p>
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
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services, website functionality, technology or legal
          requirements.
        </p>

        <p>
          Any updated version will be published on this page with the revised
          effective date.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    title: "12. Contact Us",
    content: (
      <>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your information, please contact us.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-semibold text-slate-900">
            Tirupati Travels
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Phone: +91 63900 08503
          </p>

          <p className="mt-1 text-sm text-slate-600">
            Email: support@yourdomain.com
          </p>
        </div>
      </>
    ),
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

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <ShieldCheck size={28} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold sm:text-sm">
              Privacy Policy
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Privacy Matters to Us
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              This Privacy Policy explains how Tirupati Travels collects,
              uses and protects information when you use our website or
              contact us for taxi and travel services.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Last Updated: August 20, 2026
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK HIGHLIGHTS
      ===================================================== */}
      <section className="border-b border-slate-100 bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 sm:px-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Lock className="text-gold" size={24} />

            <h2 className="mt-3 text-base font-bold text-slate-900">
              Your Information
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We use your information mainly to provide and manage our travel
              services.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Database className="text-gold" size={24} />

            <h2 className="mt-3 text-base font-bold text-slate-900">
              Responsible Use
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We do not sell or rent your personal information to third
              parties.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Cookie className="text-gold" size={24} />

            <h2 className="mt-3 text-base font-bold text-slate-900">
              Website Cookies
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Cookies may be used to improve website functionality and user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          POLICY CONTENT
      ===================================================== */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {section.content}
                </div>

                <style jsx>{`
                  article ul {
                    margin-top: 12px;
                    padding-left: 20px;
                    list-style-type: disc;
                  }

                  article li {
                    margin-bottom: 7px;
                  }
                `}</style>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className="border-t border-slate-100 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Mail size={26} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Have a Question About Your Privacy?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            If you have any questions about how we collect or use your
            information, please contact our team.
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-gold/90"
          >
            <Phone size={17} />
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
