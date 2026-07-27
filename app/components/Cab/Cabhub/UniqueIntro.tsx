// import type { UniqueLocation } from "../../../constants/uniqueLocations";

import { UniqueLocation } from "@/app/constants/UniqueLocation";

type UniqueIntroProps = {
  location: UniqueLocation;
};

export default function UniqueIntro({ location }: UniqueIntroProps) {
  return (
    <section className="border-t border-stone-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
          {location.title}
        </h2>

        <p className="mt-6 max-w-7xl text-lg leading-9 text-stone-600">
          {location.description}
        </p>
      </div>_
    </section>
  );
}
