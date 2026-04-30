import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // This resolves the [75, 95] quality configuration error
    qualities: [75, 95],
    
    // If you plan to fetch game thumbnails from Supabase or other external APIs
    // it is a good idea to add the remotePatterns here now as well
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // Matches any Supabase project URL
      },
    ],
  },
  /* other config options here */
};

export default withNextIntl(nextConfig);