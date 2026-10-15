import { brandsData } from "@/data/catalogue";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string; brandSlug: string }>;
};

// 1. Génération dynamique du SEO pour chaque produit / marque
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { category, brandSlug } = resolvedParams;

  const brand = brandsData.find((b) => b.slug === brandSlug);
  if (!brand) {
    return {
      title: "Product Not Found",
      description: "The requested product or brand could not be found.",
    };
  }

  const title = `${brand.name} Wholesale & Pricing`;
  const description = `Order bulk ${brand.name} products from Brands Collection B.V. International FMCG wholesaler based in Amsterdam. Request catalog, availability, and pricing.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://brandscollectionbv.com/products/${category}/${brand.slug}`,
    },
    openGraph: {
      title: `${title} | Brands Collection B.V.`,
      description,
      url: `https://brandscollectionbv.com/products/${category}/${brand.slug}`,
      type: "website",
    },
  };
}

// 2. Composant de la page
export default async function BrandPage({ params }: Props) {
  const resolvedParams = await params;
  const { category, brandSlug } = resolvedParams;

  const brand = brandsData.find((b) => b.slug === brandSlug);
  if (!brand) notFound();

  // Recherche de l'image principale
  const extensions = ['jpg', 'png', 'jpeg', 'webp'];
  let foundExtension = null;
  for (const ext of extensions) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", "brands", `${brand.slug}.${ext}`))) {
      foundExtension = ext;
      break;
    }
  }

  // --- LOGIQUE PRODUITS SIMILAIRES ---
  const similarBrands = brandsData
    .filter((b) => b.category === brand.category && b.slug !== brand.slug)
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto bg-white text-gray-900">
        
        {/* Fil d'ariane (Breadcrumb) */}
        <div className="mb-8 text-sm text-gray-500 font-medium flex items-center">
          <Link href={`/products/${category}`} className="hover:text-[#4fa3ff] transition-colors capitalize">
            {category.replace('-', ' ')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-[#003366] font-semibold">{brand.name}</span>
        </div>

        {/* --- SECTION PRODUIT PRINCIPAL --- */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          
          <div className="relative h-[280px] lg:h-[350px] w-full max-w-md mx-auto bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden group">
            {foundExtension ? (
              <Image 
                src={`/images/brands/${brand.slug}.${foundExtension}`} 
                alt={brand.name} 
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full w-full bg-gray-50/50 text-gray-400 p-6 text-center">
                <span className="text-3xl font-bold text-[#003366] mb-2 opacity-10">{brand.name}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Visual coming soon</span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-[#4fa3ff]/10 text-[#4fa3ff] text-xs font-bold uppercase tracking-widest rounded-full w-fit mb-5 border border-[#4fa3ff]/20">
              {brand.category.replace('-', ' ')}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-6 tracking-tight">
              {brand.name}
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Discover our premium selection of <strong className="text-gray-900">{brand.name}</strong>. We provide competitive wholesale access to the full range of products, perfectly suited for your business needs. Contact us for the latest price list, minimum order quantities, and availability.
            </p>

            <div className="mb-10">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Available Products & Variants</h3>
              {brand.products && brand.products.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {brand.products.map((p, i) => (
                    <li key={i} className="flex items-center text-gray-700 bg-gray-50 py-2.5 px-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                      <span className="mr-3 text-[#4fa3ff] font-bold text-lg leading-none">✓</span> 
                      <span className="text-sm font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
                  Detailed variants and formats are available upon request.
                </p>
              )}
            </div>

            <div className="bg-[#003366]/5 p-6 rounded-2xl border border-[#003366]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-[#003366] text-lg mb-1">Interested in {brand.name}?</h4>
                <p className="text-sm text-gray-600">Get a custom quote and full price list.</p>
              </div>
              
              <Link 
                href={`/contact?product=${encodeURIComponent(brand.name)}`}
                className="w-full sm:w-auto bg-[#003366] text-white px-8 py-3.5 font-bold hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5 transition-all rounded-lg whitespace-nowrap text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        {/* --- SECTION PRODUITS SIMILAIRES (CARROUSEL) --- */}
        {similarBrands.length > 0 && (
          <div className="mt-24 pt-16 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-[#003366] mb-8">
              More from {brand.category.replace('-', ' ')}
            </h2>
            
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {similarBrands.map((similar, index) => {
                const simPathJpg = path.join(process.cwd(), "public", "images", "brands", `${similar.slug}.jpg`);
                const simPathPng = path.join(process.cwd(), "public", "images", "brands", `${similar.slug}.png`);
                let simExt = null;
                if (fs.existsSync(simPathJpg)) simExt = 'jpg';
                else if (fs.existsSync(simPathPng)) simExt = 'png';

                return (
                  <Link 
                    key={index} 
                    href={`/products/${category}/${similar.slug}`}
                    className="min-w-[180px] md:min-w-[220px] snap-start shrink-0 p-5 border border-gray-100 rounded-xl shadow-sm hover:border-[#4fa3ff] hover:shadow-md transition-all group bg-white flex flex-col"
                  >
                    <div className="relative h-28 md:h-32 w-full mb-4 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-100">
                      {simExt ? (
                        <Image 
                          src={`/images/brands/${similar.slug}.${simExt}`} 
                          alt={similar.name} 
                          fill
                          sizes="(max-width: 768px) 180px, 220px"
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <span className="text-gray-400 font-bold text-center px-4 text-xs">
                          {similar.name}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-center text-sm md:text-base">{similar.name}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}