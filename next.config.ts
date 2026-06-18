import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.8:3000"],
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;
