import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true, // GitHub Pages không hỗ trợ Next.js Image Optimization mặc định
  },
  basePath: "/MinhHungPorfolio",
};

export default nextConfig;
