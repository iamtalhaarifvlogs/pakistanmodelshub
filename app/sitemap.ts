// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pakistanmodelshub.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/models`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/celebrity-escorts-karachi`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    // === Location & Area Pages ===
    { url: `${baseUrl}/karachi-escorts-in-dha`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/karachi-escorts-in-clifton`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/escorts-in-saddar-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },
    { url: `${baseUrl}/escorts-in-pechs-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },
    { url: `${baseUrl}/escorts-in-bahria-town-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },
    { url: `${baseUrl}/escorts-in-gulshan-e-iqbal-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },
    { url: `${baseUrl}/escorts-in-north-nazimabad-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },
    { url: `${baseUrl}/escorts-in-nazimabad-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },
    { url: `${baseUrl}/escorts-in-sea-view-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },
    { url: `${baseUrl}/escorts-in-shahrah-e-faisal-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.82 },

    // === Hotel Pages ===
    { url: `${baseUrl}/escorts-in-pc-hotel-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/escorts-in-ramada-plaza-hotel-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/escorts-in-regent-plaza-hotel-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/escorts-in-sea-shell-inn-hotel-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/escorts-in-avari-towers-hotel`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.78 },
    { url: `${baseUrl}/escorts-in-marriott-hotel-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.78 },
    { url: `${baseUrl}/escorts-in-movenpick-hotel-karachi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.78 },
    { url: `${baseUrl}/escorts-in-beach-luxury-hotel`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.78 },
  ];
}