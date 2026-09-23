import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subfolder of a repo with its own lockfile.
  turbopack: { root: path.join(__dirname) },
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
