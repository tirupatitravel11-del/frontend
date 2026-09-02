import { MetadataRoute } from "next";
import { ROUTES } from "@/app/lib/api/route-data/-helper";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tirupatitravel.in/";

  // Route suffix variations
  const routeSuffixes = [
    "-taxi",
    "-taxi-fare",
    "-one-way-taxi",
    "-sedan-taxi",
    "-suv-taxi",
    "-dzire-taxi",
    "-etios-taxi",
    "-amaze-taxi",
    "-ertiga-taxi",
    "-innova-crysta-taxi",
    "-tempo-traveller",
    "-luxury-tempo-traveller",
    "-12-seater-tempo-traveller",
    "-16-seater-tempo-traveller",
    "-20-seater-tempo-traveller",
    "-24-seater-tempo-traveller",
    "-urbania-rental",
    "-distance-travel-time",
    "-taxi-contact-number",
  ];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/cabs`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    {
      url: `${baseUrl}/taxi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/airport-transfer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/onewaytaxi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outstationCabs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hotel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/boats`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Dynamic route pages - generates all variations for each route
  const dynamicRoutePages: MetadataRoute.Sitemap = ROUTES.flatMap((route) =>
    routeSuffixes.map((suffix) => ({
      url: `${baseUrl}/route/${route.slug}${suffix}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: suffix === "-taxi" ? 0.9 : 0.8,
    })),
  );

  return [...staticPages, ...dynamicRoutePages];
}
