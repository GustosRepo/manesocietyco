import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/manesocietyco",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
