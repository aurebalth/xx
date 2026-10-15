import { categories, productNavigation, brandsData } from '@/data/catalogue';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sub?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryKey = resolvedParams.category;
  const data = productNavigation[categoryKey as keyof typeof productNavigation];

  if (!data) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${data.name} Wholesale`,
    description: `Explore wholesale ${data.name.toLowerCase()} supplies. ${data.description} Bulk B2B orders distributed from Amsterdam, Netherlands by Brands Collection B.V.`,
    alternates: {
      canonical: `https://brandscollectionbv.com/products/${categoryKey}`,
    },
    openGraph: {
      title: `${data.name} Wholesale | Brands Collection B.V.`,
      description: `Explore wholesale ${data.name.toLowerCase()} supplies and top global brands from Brands Collection B.V.`,
      url: `https://brandscollectionbv.com/products/${categoryKey}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;
  const categoryKey = resolvedParams.category;
  const selectedSub = resolvedSearch.sub || 'all';

  const data = productNavigation[categoryKey as keyof typeof productNavigation];

  if (!data) {
    notFound();
  }

  const availableSubCategories = categories.filter(cat => data.subIds.includes(cat.id));

  const filteredBrands = brandsData.filter(brand => {
    if (!data.subIds.includes(brand.category)) return false;
    if (selectedSub !== 'all' && brand.category !== selectedSub) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto bg-white">
        
        {/* --- EN-TÊTE DE PAGE --- */}
        <div className="mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">{data.h1}</h1>
          
          <div className="text-lg text-gray-600 space-y-5 mb-8 leading-relaxed">
            <p>
              Wholesale supplier of premium <strong>{data.name.toLowerCase()}</strong> to elevate your business. 
              {data.description} Partnering with us means gaining access to top-tier global brands, competitive pricing, and a reliable distribution network tailored for your needs.
            </p>
            
            <p className="text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-[#4fa3ff] text-gray-700">
              <strong className="text-gray-900">Please note:</strong> Our catalog, product availability, and prices evolve on a daily basis due to market dynamics. Not all our products and brands are listed on this website.
            </p>
          </div>

          <Link 
            href="/contact"
            className="inline-block bg-[#003366] text-white px-8 py-3.5 font-bold hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5 transition-all rounded-lg"
          >
            Send Request
          </Link>
        </div>
        
        {/* Barre de filtres */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200">
          <Link
            href={`/products/${categoryKey}`}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedSub === 'all'
                ? 'bg-[#003366] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All {data.name}
          </Link>

          {availableSubCategories.map(sub => (
            <Link
              key={sub.id}
              href={`/products/${categoryKey}?sub=${sub.id}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedSub === sub.id
                  ? 'bg-[#003366] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {sub.name}
            </Link>
          ))}
        </div>

        {/* Grille des produits / marques */}
        {filteredBrands.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No products found for this specific filter.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {filteredBrands.map((brand, index) => {
              const imagePathJpg = path.join(process.cwd(), "public", "images", "brands", `${brand.slug}.jpg`);
              const imagePathPng = path.join(process.cwd(), "public", "images", "brands", `${brand.slug}.png`);
              const imagePathJpeg = path.join(process.cwd(), "public", "images", "brands", `${brand.slug}.jpeg`);

              let imageExt = null;
              if (fs.existsSync(imagePathJpg)) imageExt = 'jpg';
              else if (fs.existsSync(imagePathPng)) imageExt = 'png';
              else if (fs.existsSync(imagePathJpeg)) imageExt = 'jpeg';

              return (
                <Link 
                  key={index} 
                  href={`/products/${categoryKey}/${brand.slug}`}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm hover:border-[#4fa3ff] hover:shadow-md transition-all cursor-pointer bg-white flex flex-col group h-full"
                >
                  <div className="flex-grow">
                    <div className="relative h-40 w-full mb-4 bg-white rounded flex items-center justify-center overflow-hidden border border-gray-100">
                      {imageExt ? (
                        <Image 
                          src={`/images/brands/${brand.slug}.${imageExt}`} 
                          alt={brand.name} 
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      ) : (
                        <span className="text-gray-400 font-bold text-center px-4 text-sm">
                          {brand.name}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{brand.name}</h3>
                    <p className="text-sm text-gray-500 capitalize mb-3">{brand.category.replace('-', ' ')}</p>

                    {brand.products && brand.products.length > 0 && (
                      <div className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded border border-gray-200 mb-4">
                        <span className="font-semibold text-gray-700">Top variants: </span>
                        {brand.products.slice(0, 3).join(', ')}
                        {brand.products.length > 3 ? '...' : ''}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[#003366] font-semibold text-sm group-hover:text-[#4fa3ff] transition-colors mt-auto">
                    <span>View Product</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </main>
    </div>
  );
}