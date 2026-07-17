"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import HeroButtons from "./HeroButton";
import { heroSlides } from "./HeroData";
import QuickEnquiry from "./QuickEnquiry";

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const activeSlide = heroSlides[activeIndex] ?? heroSlides[0];

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
                className="absolute  h-full w-full inset-0 object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-20 mx-auto flex h-full max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid w-full gap-8 lg:grid-cols-[1.7fr_1.1fr] lg:items-end">
          <div className="max-w-2xl text-white">
            <h1
              className="
               min-h-[96px]
               text-3xl
               font-bold
               leading-tight
               sm:min-h-[110px]
               sm:text-4xl
               lg:min-h-[140px]
               lg:text-5xl
  "
            >
              {activeSlide.title}
            </h1>

            {/* <p className="mt-4 text-base leading-7 text-white sm:mt-6 sm:text-lg lg:text-xl lg:leading-8">
              {activeSlide.subtitle}
            </p> */}

            <div className="mt-8">
              <HeroButtons />
            </div>
          </div>

          <div className="w-full lg:max-w-md">
            <QuickEnquiry className="w-full rounded-[32px] bg-white/95 shadow-2xl ring-1 ring-black/10 backdrop-blur-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
