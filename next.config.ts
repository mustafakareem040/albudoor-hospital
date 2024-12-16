import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.albudoor-hospital.iq',
            },
        ],
    },
  experimental: {
      reactCompiler: true,
      scrollRestoration: true
  }
};

export default nextConfig;
