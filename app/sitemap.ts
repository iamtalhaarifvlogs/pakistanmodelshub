import { MetadataRoute } from "next";

interface SitemapBlogEntry {
  slug: string;
  lastModified: string;
}

const BLOG_ENTRIES: SitemapBlogEntry[] = [
  { slug: "guide-to-hotel-outcalls-karachi", lastModified: "2026-11-15" },
  { slug: "discretion-and-privacy-verified-companions", lastModified: "2026-11-11" },
  { slug: "vip-companionship-dha-clifton-bahria-town", lastModified: "2026-11-06" },
  { slug: "transparent-rates-booking-call-girls-karachi", lastModified: "2026-10-30" },
  { slug: "demand-for-call-girls-in-karachi-overview", lastModified: "2026-11-19" },
  { slug: "independent-call-girls-in-karachi-vs-agency-based", lastModified: "2026-11-18" },
  { slug: "premium-karachi-escorts-for-upscale-evenings", lastModified: "2026-11-17" },
  { slug: "karachi-escorts-near-me-privacy-and-timing", lastModified: "2026-11-16" },
  { slug: "escorts-in-clifton-karachi-evening-guide", lastModified: "2026-11-15" },
  { slug: "escorts-in-dha-karachi-phase-planning", lastModified: "2026-11-14" },
  { slug: "karachi-escorts-in-gulshan-e-iqbal-timing-guide", lastModified: "2026-11-13" },
  { slug: "vip-karachi-escorts-in-pc-hotel-discretion", lastModified: "2026-11-12" },
  { slug: "call-girls-in-karachi-hotels-booking-checklist", lastModified: "2026-11-11" },
  { slug: "student-call-girls-in-karachi-schedules-and-checks", lastModified: "2026-11-10" },
  { slug: "elite-and-vip-call-girls-comparing-tiers", lastModified: "2026-11-09" },
  { slug: "celebrity-escorts-in-karachi-realistic-expectations", lastModified: "2026-11-08" },
  { slug: "vetting-vip-escorts-in-karachi-before-booking", lastModified: "2026-11-07" },
  { slug: "evening-routing-escorts-in-dha-karachi-and-clifton", lastModified: "2026-11-06" },
  { slug: "last-minute-requests-karachi-escorts-near-me", lastModified: "2026-11-05" },
  { slug: "structured-outcalls-for-call-girls-in-karachi-hotels", lastModified: "2026-11-04" },
  {
    slug: "why-vip-escorts-in-karachi-know-how-to-keep-you-coming-back-all-night",
    lastModified: "2026-11-21",
  },
  {
    slug: "thick-karachi-escorts-in-dha-who-love-to-take-control-behind-closed-doors",
    lastModified: "2026-11-21",
  },
  {
    slug: "why-celebrity-escorts-in-karachi-are-worth-every-rupee-for-an-overnight-stay",
    lastModified: "2026-11-20",
  },
  {
    slug: "how-independent-call-girls-in-karachi-make-late-night-hotel-visits-unforgettable",
    lastModified: "2026-11-20",
  },
  {
    slug: "why-busty-escorts-in-clifton-karachi-are-the-top-pick-for-passionate-nights",
    lastModified: "2026-11-20",
  },
  {
    slug: "what-happens-when-you-book-vip-karachi-escorts-in-pc-hotel-for-the-whole-night",
    lastModified: "2026-11-19",
  },
  {
    slug: "why-young-student-call-girls-in-karachi-love-wild-weekend-encounters",
    lastModified: "2026-11-19",
  },
  {
    slug: "curvy-karachi-escorts-who-love-rough-and-passionate-positions-all-night",
    lastModified: "2026-11-18",
  },
  {
    slug: "why-high-profile-men-prefer-agency-based-call-girls-in-karachi-hotels",
    lastModified: "2026-11-18",
  },
  {
    slug: "spending-a-wild-unhurried-night-with-elite-and-vip-call-girls-in-marriott-karachi",
    lastModified: "2026-11-17",
  },
  {
    slug: "why-mature-and-thick-escorts-in-karachi-know-every-trick-to-satisfy-you",
    lastModified: "2026-11-17",
  },
  {
    slug: "late-night-cravings-finding-karachi-escorts-near-me-for-instant-hotel-outcalls",
    lastModified: "2026-11-16",
  },
  {
    slug: "why-vip-escorts-in-karachi-love-extended-overnight-stays-in-luxury-suites",
    lastModified: "2026-11-16",
  },
  {
    slug: "how-premium-karachi-escorts-turn-an-ordinary-business-trip-into-pure-pleasure",
    lastModified: "2026-11-15",
  },
  {
    slug: "why-slim-and-curvy-escorts-in-gulshan-e-iqbal-are-in-such-high-demand",
    lastModified: "2026-11-15",
  },
  {
    slug: "what-makes-pakistani-celebrity-escorts-in-karachi-irresistible-after-midnight",
    lastModified: "2026-11-14",
  },
  {
    slug: "why-men-choose-thick-karachi-escorts-over-skinny-models-every-single-time",
    lastModified: "2026-11-14",
  },
  {
    slug: "full-night-rates-and-wild-experiences-with-vip-karachi-escorts-in-avari-towers",
    lastModified: "2026-11-13",
  },
  {
    slug: "how-independent-call-girls-in-karachi-satisfy-your-deepest-fantasies-discreetly",
    lastModified: "2026-11-13",
  },
  {
    slug: "why-booking-two-premium-karachi-escorts-together-is-the-ultimate-vip-experience",
    lastModified: "2026-11-12",
  },
  { slug: "guide-to-luxury-hotel-outcalls-karachi", lastModified: "2026-11-14" },
  { slug: "understanding-the-demand-for-call-girls-in-karachi", lastModified: "2026-11-19" },
  {
    slug: "independent-call-girls-vs-agency-based-call-girls-karachi",
    lastModified: "2026-11-18",
  },
  { slug: "what-to-expect-from-premium-karachi-escorts", lastModified: "2026-11-17" },
  { slug: "finding-karachi-escorts-near-me-safely-and-discreetly", lastModified: "2026-11-16" },
  { slug: "escorts-in-clifton-karachi-seaside-and-evening-guide", lastModified: "2026-11-15" },
  { slug: "escorts-in-dha-karachi-phases-1-to-8-overview", lastModified: "2026-11-14" },
  { slug: "karachi-escorts-in-gulshan-e-iqbal-central-city-guide", lastModified: "2026-11-13" },
  { slug: "vip-karachi-escorts-in-pc-hotel-suite-etiquette", lastModified: "2026-11-12" },
  { slug: "call-girls-in-karachi-hotels-outcall-checklist", lastModified: "2026-11-11" },
  { slug: "understanding-student-call-girls-in-karachi-profiles", lastModified: "2026-11-10" },
  { slug: "comparing-elite-and-vip-call-girls-in-karachi", lastModified: "2026-11-09" },
  { slug: "celebrity-escorts-in-karachi-separating-hype-from-reality", lastModified: "2026-11-08" },
  { slug: "evening-planning-with-escorts-in-dha-karachi-and-clifton", lastModified: "2026-11-06" },
  { slug: "short-notice-requests-for-karachi-escorts-near-me", lastModified: "2026-11-05" },
  {
    slug: "why-hotel-guests-prefer-structured-call-girls-in-karachi-hotels",
    lastModified: "2026-11-04",
  },
  {
    slug: "central-karachi-guide-gulshan-e-iqbal-and-nearby-areas",
    lastModified: "2026-11-03",
  },
  { slug: "etiquette-and-boundaries-with-premium-karachi-escorts", lastModified: "2026-11-02" },
  {
    slug: "comparing-independent-and-agency-options-in-clifton-and-dha",
    lastModified: "2026-11-01",
  },
  {
    slug: "planning-ahead-for-peak-demand-for-call-girls-in-karachi",
    lastModified: "2026-10-31",
  },
  { slug: "etiquette-for-vip-event-companionship", lastModified: "2026-11-10" },
  { slug: "importance-of-discretion-verified-agencies", lastModified: "2026-11-05" },
  { slug: "exploring-karachi-nightlife-safe-luxury-travel", lastModified: "2026-10-28" },
  { slug: "dha-phase-8-luxury-outcalls-complete-overview", lastModified: "2026-10-22" },
  { slug: "bahria-town-karachi-premium-companion-services", lastModified: "2026-10-18" },
  { slug: "pechs-and-tariq-road-independent-escort-guide", lastModified: "2026-10-12" },
  { slug: "transparent-pricing-guide-karachi-escort-rates", lastModified: "2026-10-05" },
  { slug: "complete-guide-to-hotel-outcalls-karachi", lastModified: "2026-11-18" },
  { slug: "vip-companionship-dha-and-clifton-karachi", lastModified: "2026-11-14" },
  { slug: "discretion-and-verification-standards-karachi", lastModified: "2026-11-10" },
  { slug: "gulshan-e-iqbal-and-nazimabad-vip-escort-services", lastModified: "2026-11-05" },
  { slug: "transparent-rates-and-packages-for-karachi-call-girls", lastModified: "2026-10-28" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pakistanmodelshub.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
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
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
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

  const seenSlugs = new Set<string>();
  const blogRoutes: MetadataRoute.Sitemap = BLOG_ENTRIES.filter((entry) => {
    if (seenSlugs.has(entry.slug)) {
      return false;
    }
    seenSlugs.add(entry.slug);
    return true;
  }).map((entry) => ({
    url: `${baseUrl}/blogs/${entry.slug}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}
