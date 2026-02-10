import type { NextConfig } from "next";

const imageWithoutProtocol = process.env
  .NEXT_PUBLIC_API_URL!.replace("https://", "")
  .replace("http://", "");

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
        hostname: imageWithoutProtocol,
      },
    ],
  },
};

export default nextConfig;
