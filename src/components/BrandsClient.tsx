'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { brandsData, categories } from '@/data/catalogue';

export default function BrandsClient() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = brandsData.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Professional Supply</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-3">
            Our Brand Portfolio
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Explore our extensive catalog of globally recognized FMCG brands for wholesale and international distribution.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-xs text-gray-900 focus:ring-[#003366] focus:border-[#003366] bg-white shadow-sm"
              placeholder="Search for a brand (e.g. Heineken, Red Bull...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Brands Grid by Category */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {categories.map((category) => {
            const brandsInCategory = filteredBrands.filter(
              (brand) => brand.category === category.id
            );

            if (brandsInCategory.length === 0) return null;

            return (
              <div key={category.id} className="mb-10 last:mb-0">
                <div className="flex items-center space-x-3 mb-4 pb-2 border-b border-gray-100">
                  <h2 className="text-sm font-bold text-[#003366] uppercase tracking-wider">
                    {category.name}
                  </h2>
                  <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">
                    {brandsInCategory.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {brandsInCategory.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/brands/${brand.slug}`}
                      className="group flex flex-col items-center justify-center p-4 bg-white border border-gray-100 hover:border-[#003366]/30 hover:shadow-sm transition-all rounded-sm text-center"
                    >
                      <span className="font-semibold text-[#0A0A0A] text-xs group-hover:text-[#003366] transition-colors mb-1">
                        {brand.name}
                      </span>
                      <span className="text-[5px] uppercase tracking-wider text-gray-400 flex items-center">
                        View products <ArrowRight className="w-1.5 h-1.5 ml-1 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredBrands.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-sm">No brands found matching your search.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-3 text-[#003366] font-semibold text-xs hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}