import Link from "next/link";
import { Car, Phone, MapPin, ShieldCheck, Clock, Star, Users } from "lucide-react";
import PopularTours from "../components/Local-Seeing/PopularTours";
import CustomItinerary from "../components/Local-Seeing/CustomItinerary";
import WhyChooseUs from "@/_components/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";
import SightseeingFAQ from "../components/Local-Seeing/SightseeingFAQ";

// 👇 IMPORT YOUR COMPONENTS HERE AS YOU BUILD THEM 👇
// import PopularTours from "@/components/sightseeing/PopularTours";
// import VehicleFleet from "@/components/sightseeing/VehicleFleet";
// import WhyChooseUs from "@/components/sightseeing/WhyChooseUs";
// import CustomItinerary from "@/components/sightseeing/CustomItinerary";
// import Testimonials from "@/components/sightseeing/Testimonials";
// import FAQ from "@/components/sightseeing/FAQ";
// import FinalCTA from "@/components/sightseeing/FinalCTA";

export default function LocalSightseeingPage() {
  return (
    <main className="bg-stone-50">
      
     
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-stone-100 py-20 md:py-32">
      
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-gold">
            Local Sightseeing Tours
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-900 md:text-6xl">
            Explore the City's Hidden Gems <br className="hidden md:block" />
            <span className="text-gold">In Total Comfort</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 md:text-xl">
            Discover the best temples, ghats, markets, and historical sites with our 
            comfortable, AC cabs and knowledgeable local drivers. Half-day, full-day, 
            or fully customized itineraries.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#book"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-white transition-all hover:bg-amber-500 hover:shadow-lg"
            >
              <Car size={20} />
              Book Sightseeing Tour
            </Link>
            
            <Link
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-gold bg-white px-8 py-4 text-base font-semibold text-gold transition-all hover:bg-gold hover:text-white"
            >
              <Phone size={20} />
              Call now
            </Link>
          </div>

         
        </div>
      </section>



      <PopularTours />
      
   
      
      <CustomItinerary />
      <WhyChooseUs />


      <Testimonials />
      <SightseeingFAQ/>

      

    </main>
  );
}