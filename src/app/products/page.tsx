import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FMCG Product Categories | Brands Collection B.V.",
  description: "Explore our wholesale FMCG product categories: beverages, food products, personal care & beauty, household care, baby care, and pet care.",
  alternates: {
    canonical: "https://brandscollectionbv.com/products",
  },
};

export default function ProductsIndexPage() {
  const categories = [
    { name: "Beverages", slug: "beverages", description: "Soft drinks, energy drinks, water, juices and selected alcoholic beverages.", image_url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80" },
    { name: "Food Products", slug: "food-products", description: "Branded confectionery, snacks and grocery products selected for wholesale.", image_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
    { name: "Personal Care & Beauty", slug: "personal-care-beauty", description: "Everyday skin care, hair care, oral care, deodorants and personal hygiene.", image_url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" },
    { name: "Household Care", slug: "household-care", description: "Laundry, dishwashing and home-cleaning essentials for supermarkets.", image_url: "https://images.unsplash.com/photo-1585909695000-c9a8db618bd1?w=800&q=80" },
    { name: "Baby Care", slug: "baby-care", description: "Baby hygiene and selected daily-care products supplied according to market requirements.", image_url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80" },
    { name: "Pet Care", slug: "pet-care", description: "Pet food, hygiene and related fast-moving products for professional retail.", image_url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-3">
            Wholesale FMCG Product Categories
          </h1>
          <p className="text-gray-600 text-sm max-w-2xl">
            Explore our core wholesale categories designed for professional buyers, distributors, and international supermarkets.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl block shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <img
                  src={category.image_url}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-xs mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[#60A5FA] text-xs font-semibold group-hover:underline">
                    <span>Explore {category.name}</span>
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}