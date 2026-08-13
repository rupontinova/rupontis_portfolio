import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rupontis_portfolio",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.5'],
};

export default nextConfig;
