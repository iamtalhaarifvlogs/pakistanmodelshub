
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pakistanmodelshub.com";
  const now = new Date();

  return [
    // Core Pages
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/models`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/celebrity-escorts-karachi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },

    // High Priority Location Pages
    { url: `${baseUrl}/karachi-escorts-in-dha`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/karachi-escorts-in-clifton`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/escorts-in-bahria-town-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${baseUrl}/escorts-in-pechs-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/escorts-in-sea-view-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/escorts-in-saddar-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${baseUrl}/escorts-in-gulshan-e-iqbal-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${baseUrl}/escorts-in-north-nazimabad-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/escorts-in-nazimabad-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/escorts-in-shahrah-e-faisal-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/escorts-in-gulistan-e-jouhar-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/escorts-in-malir-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${baseUrl}/escorts-in-korangi-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-liaquatabad-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-bahadurabad-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-defense-view-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Hotel Pages
    { url: `${baseUrl}/escorts-in-pc-hotel-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${baseUrl}/escorts-in-marriott-hotel-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${baseUrl}/escorts-in-movenpick-hotel-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.86 },
    { url: `${baseUrl}/escorts-in-avari-towers-hotel`, lastModified: now, changeFrequency: "weekly", priority: 0.86 },
    { url: `${baseUrl}/escorts-in-regent-plaza-hotel-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/escorts-in-ramada-plaza-hotel-karachi`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/escorts-in-beach-luxury-hotel-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${baseUrl}/escorts-in-sea-shell-inn-hotel-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/escorts-in-mehran-hotel-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${baseUrl}/escorts-in-carlton-hotel-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-days-inn-hotel-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-hotel-crown-inn-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-hotel-one-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-dreamworld-resort-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/escorts-in-guest-house-karachi`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];
}