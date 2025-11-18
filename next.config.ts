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

    // Example: enable experimental features if needed
    experimental: {
        turbo: false, // set to false if you want to fall back to Webpack
    },

    // Example: add React strict mode
    reactStrictMode: true,
};

export default nextConfig;
