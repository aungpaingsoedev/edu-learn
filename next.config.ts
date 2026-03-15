import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tree-shake lucide-react so only used icons are bundled
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Optimize images (default on; explicit for clarity)
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
