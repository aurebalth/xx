import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // Force Turbopack à utiliser le dossier actuel comme racine
  },
};

export default nextConfig;