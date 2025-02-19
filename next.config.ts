import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["via.placeholder.com", "source.unsplash.com", "fastly.picsum.photos"], // Add this line
  },
};

export default nextConfig;
