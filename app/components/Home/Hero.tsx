"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import HeroButtons from "./HeroButton";
import { heroSlides } from "./HeroData";
import QuickEnquiry from "./QuickEnquiry";

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative h-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full min-h-screen sm:min-h-[90vh] lg:h-[89vh]"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0  object-cover object-center"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-base leading-7 text-gray-200 sm:mt-6 sm:text-lg lg:text-xl lg:leading-8">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20 flex flex-col sm:bottom-10 lg:bottom-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <HeroButtons />
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-0">
          <QuickEnquiry />
        </div>
      </div>
    </section>
  );
}
