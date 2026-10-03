import FeaturedExperiences from "@/_components/NavbarComponents/FeaturedExperiences";
import { Sparkles, Star, Clock, MapPin } from "lucide-react";
import FeaturedPackages from "../components/Home/FeaturedPackages";
import ExperienceCategories from "@/_components/NavbarComponents/ExperienceCategories";
import WhyBookWithUs from "../components/Cab/Cabhub/WhyTrustUs";
import HowToBook from "@/_components/Howtobook";
import WhyOurExperiences from "@/_components/NavbarComponents/WhyOurExperiences";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "@/_components/experience/FAQ";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative border-b border-gray-100 bg-slate-50 py-12 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200  " />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-gray-100 blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold mb-8 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Curated Moments
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl md:leading-tight">
            Unforgettable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-gold">
              Experiences
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-800">
            Go beyond sightseeing. Immerse yourself in handcrafted activities, 
            cultural encounters, and once-in-a-lifetime moments across India.
          </p>

       
          
        </div>
      </section>

    <FeaturedPackages />
      {/* <FeaturedExperiences /> */}
      <ExperienceCategories />
    
   
      <WhyOurExperiences />
      <Testimonials />

      <FAQ />

      <section className="bg-stone-800 px-4 py-12 sm:px-6 lg:py-12 border-b border-white/10">
  <div className="mx-auto max-w-4xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[4px] text-gold">
      Plan Your Journey
    </p>

    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
      Ready to Plan Your Next Trip?
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
      Book a cab, reserve a hotel, or explore our tour packages for your next
      journey. Get in touch with Tirupati Travels and start planning today.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <a
        href="https://wa.me/918726124680?text=Hello%20Tirupati%20Travels%2C%20I%20want%20to%20plan%20a%20trip."
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold/90"
      >
        Plan Your Trip
      </a>

      <a
        href="tel:+918726124680"
        className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
      >
        Call Now
      </a>
    </div>
  </div>
</section>
    </main>
  );
}