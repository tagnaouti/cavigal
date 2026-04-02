import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cavigal",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
