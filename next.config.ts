import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "marketing-compaigns.s3.ap-south-1.amazonaws.com" },
      { protocol: "https", hostname: "www.freepnglogos.com" },
      { protocol: "https", hostname: "www.vectorseek.com" },
    ],
  },
};

export default nextConfig;
