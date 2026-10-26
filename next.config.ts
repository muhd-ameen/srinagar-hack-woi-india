import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static files in /out. Deploys to Vercel, Netlify, S3, Nginx, anything.
  output: "export",
  // The default image optimiser needs a server. Photos in /public/images are
  // served as-is, so export them at a sensible size (see public/images/README.md).
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
