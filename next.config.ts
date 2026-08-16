import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
      { protocol: "https", hostname: "instagram.fscl13-1.fna.fbcdn.net" },
      { protocol: "https", hostname: "hop.behold.pictures" },
      { protocol: "https", hostname: "cdn2.behold.pictures" },
      { protocol: "https", hostname: "behold.pictures" },
      { protocol: "https", hostname: "**.behold.pictures" },
    ],
  },
};

export default nextConfig;
