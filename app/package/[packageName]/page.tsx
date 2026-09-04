import { notFound, redirect } from "next/navigation";

import { featuredPackages } from "@/app/constants/featuredPackages";

type Props = {
  params: Promise<{
    packageName: string;
  }>;
};

export default async function PackageEntryPage({ params }: Props) {
  const { packageName } = await params;
  const packageData = featuredPackages.find(
    (item) => item.packageSlug === packageName,
  );

  if (!packageData) {
    notFound();
  }

  redirect(`/packages/${packageData.citySlug}/${packageData.packageSlug}`);
}
