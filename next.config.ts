import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codewear.co.in",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
