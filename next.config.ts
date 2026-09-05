import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  // Pin the workspace root so Turbopack doesn't walk up into the home directory
  turbopack: { root: path.resolve(__dirname) },
  // Emits /consultants/index.html so nginx can serve directories without rewrites
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
