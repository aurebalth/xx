import Link from "next/link";
import { ArrowRight, Package, Truck, Shield, Users, ChevronRight, MessageCircle } from "lucide-react";
import Marquee from "react-fast-marquee";

// La balise SEO (Metadonnées serveur)
export const metadata = {
  title: "Global FMCG Wholesaler & Distributor | Brands Collection BV",
  description: "Source branded FMCG products from a Netherlands-based B2B wholesaler. Food, beverages, personal care, household, baby and pet care.",
};

export default function HomePage() {
  const stats = [
    { value: "Since 2012", label: "Operating Experience" },
    { value: "500+", label: "Recognised Brands" },
    { value: "15,000+", label: "Product References" },
    { value: "Global", label: "B2B Distribution" },
  ];

const categories = [
    { id: 1, name: "Beverages", slug: "beverages", image_url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80" },
    { id: 2, name: "Food Products", slug: "food-products", image_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
    { id: 3, name: "Personal Care & Beauty", slug: "personal-care-beauty", image_url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" },
    { id: 4, name: "Household Care", slug: "household-care", image_url: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Baby Care", slug: "baby-care", image_url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80" },
    { id: 6, name: "Pet Care", slug: "pet-care", image_url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80" },
  ];

  return (
    <>
      {/* Top Banner Exigé */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 text-center font-medium w-full z-50 relative mt-16">
        B2B enquiries only · International supply · Response within 24 business hours
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1768796373360-95d80c5830fb?w=1920&q=80" alt="Warehouse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/80 to-[#0F4C81]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Branded FMCG Supply for Professional Buyers Worldwide
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
              Brands Collection B.V. helps importers, distributors, wholesalers and retailers source branded FMCG products from one experienced European partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/products" className="bg-white text-[#003366] px-5 py-2.5 text-sm font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100">
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section (Rendu Serveur) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="overline mb-3 text-xs uppercase tracking-widest text-gray-500">Our Catalog</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-3">Product Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/products/${category.slug}`} className="group relative aspect-[4/3] overflow-hidden rounded-lg block">
                <img src={category.image_url} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
                  <div className="flex items-center text-white/80 text-sm group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}