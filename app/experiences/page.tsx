import FeaturedExperiences from "@/_components/NavbarComponents/FeaturedExperiences";
import { Sparkles, Star, Clock, MapPin } from "lucide-react";
import FeaturedPackages from "../components/Home/FeaturedPackages";
import ExperienceCategories from "@/_components/NavbarComponents/ExperienceCategories";
import WhyBookWithUs from "../components/Cab/Cabhub/WhyTrustUs";
import HowToBook from "@/_components/Howtobook";
import WhyOurExperiences from "@/_components/NavbarComponents/WhyOurExperiences";
import Testimonials from "../components/Home/Testimonials";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative border-b border-gray-100 bg-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
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

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
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
    </main>
  );
}