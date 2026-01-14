import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "repox-store-api-development.dev.datawise.ai",
      },
    ],
  },
};

export default nextConfig;
