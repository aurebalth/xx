import type { Metadata } from "next";
import BrandsClient from "@/components/BrandsClient";

export const metadata: Metadata = {
  title: "Our Brand Portfolio",
  description: "Explore our extensive catalog of globally recognized FMCG brands for wholesale and international distribution. 500+ partner brands available at Brands Collection B.V.",
  alternates: {
    canonical: "https://brandscollectionbv.com/brands",
  },
  openGraph: {
    title: "Our Brand Portfolio | Brands Collection B.V.",
    description: "Explore our extensive catalog of globally recognized FMCG brands for wholesale and international distribution.",
    url: "https://brandscollectionbv.com/brands",
    type: "website",
  },
};

export default function BrandsPage() {
  return <BrandsClient />;
}