/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    // Enable source maps for development

    config.devtool = "source-map";

    return config;
  },
};

export default nextConfig;
