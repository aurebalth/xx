import { MetadataRoute } from 'next';
import { brandsData, productNavigation } from '@/data/catalogue';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brandscollectionbv.com';

  // 1. Pages statiques principales
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal-notice`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. Pages de catégories dynamiques
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(productNavigation).map((categoryKey) => ({
    url: `${baseUrl}/products/${categoryKey}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Pages de chaque marque / produit de ton catalogue
  const brandRoutes: MetadataRoute.Sitemap = brandsData.map((brand) => ({
    url: `${baseUrl}/products/${brand.category}/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // On combine le tout
  return [...staticRoutes, ...categoryRoutes, ...brandRoutes];
}