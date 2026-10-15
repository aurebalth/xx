import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight, MessageCircle, Package } from "lucide-react";
import { brandsData } from "@/data/catalogue";

type Props = {
  params: Promise<{ brand: string }>;
};

// 1. Génération dynamique du SEO pour chaque marque
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brand = brandsData.find((b) => b.slug === brandSlug);

  if (!brand) {
    return {
      title: "Brand Not Found",
      description: "The requested brand could not be found.",
    };
  }

  const title = `${brand.name} Wholesale & B2B Distribution`;
  const description = `Source bulk ${brand.name} products from Brands Collection B.V. Global FMCG wholesaler and official B2B distributor based in Amsterdam. Request a catalog and pricing.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://brandscollectionbv.com/brands/${brand.slug}`,
    },
    openGraph: {
      title: `${title} | Brands Collection B.V.`,
      description,
      url: `https://brandscollectionbv.com/brands/${brand.slug}`,
      type: "website",
    },
  };
}

// 2. Composant de la page de la marque
export default async function BrandDetailPage({ params }: Props) {
  const { brand: brandSlug } = await params;
  const brand = brandsData.find((b) => b.slug === brandSlug);

  if (!brand) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-16">
      {/* Hero Section & Fil d'ariane */}
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#003366] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/brands" className="hover:text-[#003366] transition-colors">Brands</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-700 font-medium">{brand.name}</span>
          </nav>
          
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Brand Portfolio</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
              {brand.name} Wholesale Supplier
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Source authentic {brand.name} products in bulk quantities for international wholesale, retail distribution, and global shipping through Brands Collection B.V.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/3197010225955?text=${encodeURIComponent(`Hello Brands Collection B.V., I am interested in ordering ${brand.name} products in bulk for my business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Détails de la marque & Disponibilité */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 p-8 border border-gray-100 rounded-xl max-w-2xl">
            <h2 className="text-xl font-bold text-[#0A0A0A] mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#003366]" />
              Bulk Supply & Availability
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We supply full containers and pallet quantities of {brand.name} directly from our secure warehouse in Amsterdam, Netherlands. All stock is fully traceable and compliant with international trade requirements.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li className="flex items-center gap-2">✓ Competitive B2B wholesale pricing</li>
              <li className="flex items-center gap-2">✓ Worldwide customs and export assistance</li>
              <li className="flex items-center gap-2">✓ Direct allocation and regular stock replenishment</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-[#003366] hover:bg-[#002244] text-white px-6 py-3 rounded-lg text-xs font-bold transition-colors shadow-sm"
            >
              <span>Request Full Price List</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}