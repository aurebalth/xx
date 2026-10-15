import Link from "next/link";
import { ArrowRight, Package, Truck, Shield, Users, ChevronRight, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Marquee from "react-fast-marquee";

export const metadata = {
  title: "Global FMCG Wholesaler & Distributor | Brands Collection BV",
  description: "Source branded FMCG products from a Netherlands-based B2B wholesaler. Food, beverages, personal care, household, baby and pet care. Request pricing.",
};

export default function HomePage() {
  const stats = [
    { value: "Operating since 2012", label: "Experience" },
    { value: "500+", label: "Brands" },
    { value: "15,000+", label: "Product References" },
    { value: "International", label: "B2B Distribution" },
  ];

  const categories = [
    { name: "Beverages", slug: "beverages", description: "Soft drinks, energy drinks, water, juices and selected alcoholic beverages.", image_url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=80" },
    { name: "Food Products", slug: "food-products", description: "Branded confectionery, snacks and grocery products selected for wholesale.", image_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
    { name: "Personal Care & Beauty", slug: "personal-care-beauty", description: "Everyday skin care, hair care, oral care, deodorants and personal hygiene.", image_url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" },
    { name: "Household Care", slug: "household-care", description: "Laundry, dishwashing and home-cleaning essentials for supermarkets.", image_url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },    { name: "Baby Care", slug: "baby-care", description: "Baby hygiene and selected daily-care products supplied according to market requirements.", image_url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80" },
    { name: "Pet Care", slug: "pet-care", description: "Pet food, hygiene and related fast-moving products for professional retail.", image_url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80" },
  ];

  const brands = [
    "Coca-Cola", "Pepsi", "Red Bull", "Monster", "Heineken", "Nestlé",
    "Ferrero", "Kinder", "Nutella", "Mars", "Snickers", "Pringles",
    "Ariel", "Persil", "Fairy", "Pampers", "Nivea", "Colgate"
  ];

  return (
    <main className="bg-white">
      {/* Top Contact Bar */}
      <div className="sticky top-16 z-40 bg-[#0A0A0A] text-white/80 text-xs py-2.5 px-6 border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="text-[#60A5FA] font-semibold">B2B enquiries only · International supply</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@brandscollectionbv.com" className="hover:text-white transition-colors">
              contact@brandscollectionbv.com
            </a>
            <a href="tel:+3197010225955" className="hover:text-white transition-colors">
              +31 970 102 25955
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-[#003366]">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1768796373360-95d80c5830fb?w=1920&q=80"
            alt="FMCG distribution warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/80 to-[#0F4C81]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Branded FMCG Supply for Professional Buyers Worldwide
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
              Brands Collection B.V. helps importers, distributors, wholesalers and retailers source branded food, beverages, personal care, household, baby-care and pet-care products from one experienced European partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* CORRECTION : /request-a-quote remplacé par /contact */}
              <Link
                href="/contact"
                className="bg-white text-[#003366] px-6 py-3 text-sm font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>Request Pricing & Availability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/3197010225955"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 text-sm font-semibold flex items-center justify-center space-x-2 hover:bg-[#20bd5a] transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
            <p className="text-white/60 text-xs mt-3">
              Tell us what you need, your destination and estimated volume. Our commercial team will review availability and return with a tailored offer.
            </p>
          </div>

          {/* Barre de preuves officielle */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-xl lg:text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Marques */}
      <section className="py-8 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Indicative Brand Portfolio</p>
        </div>
        <Marquee gradient={true} speed={40} autoFill={true}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="mx-4 my-3 px-5 py-2.5 border border-gray-200 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 font-bold text-sm uppercase tracking-wide"
            >
              {brand}
            </div>
          ))}
        </Marquee>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-3">
              One Partner Across Essential FMCG Categories
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Build a focused order or consolidate multiple categories through one commercial contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg block shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={category.image_url}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-lg mb-1">
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
      </section>

      {/* CTA Final */}
      <section className="relative py-16 bg-[#003366] text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Looking for a Reliable FMCG Supply Partner?
          </h2>
          <p className="text-white/80 text-sm max-w-2xl mx-auto mb-8">
            Send us your product list or purchasing brief. Include your destination and estimated quantities so our team can respond with the most relevant options.
          </p>
          {/* CORRECTION : /request-a-quote remplacé par /contact */}
          <Link
            href="/contact"
            className="bg-white text-[#003366] px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Request Pricing & Availability</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}