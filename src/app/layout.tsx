import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PromoPopup from "../components/PromoPopup";

const baseUrl = "https://brandscollectionbv.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Brands Collection B.V. | Global FMCG Wholesaler & B2B Distributor",
    template: "%s | Brands Collection B.V.",
  },
  description: "Source branded FMCG products from a Netherlands-based B2B wholesaler. 500+ global brands, beverages, food, hygiene & household care.",
  keywords: ["FMCG wholesaler", "B2B distribution", "wholesale beverages", "food products wholesale", "hygiene products distributor", "household care wholesale", "Brands Collection BV"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Brands Collection B.V.",
    title: "Brands Collection B.V. | Global FMCG Wholesaler & B2B Distributor",
    description: "Global FMCG wholesaler and B2B distributor of fast-moving consumer goods.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Brands Collection B.V. Warehouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brands Collection B.V. | Global FMCG Wholesaler",
    description: "Global FMCG wholesaler and B2B distributor.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Données structurées globales Organization & LocalBusiness pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Brands Collection B.V.",
              alternateName: ["Brands Collection", "BC BV"],
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              image: `${baseUrl}/og-image.jpg`,
              telephone: "+3197010225955",
              email: "contact@brandscollectionbv.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Danzigerkade 73",
                addressLocality: "Amsterdam",
                postalCode: "1013 AP",
                addressCountry: "NL",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="bg-white text-slate-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <PromoPopup />
      </body>
    </html>
  );
}