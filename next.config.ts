// next.config.ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        // Ensure Turbopack uses the correct absolute root
        root: path.resolve(__dirname),
    },
    // Optional: customize the build output directory
    distDir: ".next",

    // Example: add React strict mode
    reactStrictMode: true,
};

export default nextConfig;
